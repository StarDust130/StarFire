import { Role } from "../../../../../prisma/generated/client/enums.js";
import { createMessage, getRecentMessages } from "./chat.repository.js";
import { generateAIResponse } from "./chat.ai.js";
import { buildConversationContext } from "./chat.memory.js";
import {
  getRandomInjectionReply,
  isPromptInjection,
} from "../../security/prompt-injection.js";
import { buildUserProfileContext } from "../memory/memory.context.js";
import { getLongTermMemories } from "../memory/memory.repository.js";
import { searchRelevantMemories } from "../memory/memory.vector.js";
import { buildSemanticMemoryContext } from "../memory/memory.semantic.js";
import { memoryQueue } from "../../queue/memory.queue.js";
import type { Response } from "express";

//! Core chat service handling the streaming flow 🗣️🤖
export async function chatService(data: { userId: string; content: string }, res: Response) {
  console.log(`🔍 [Service] Processing input for user: ${data.userId}`);

  // 1️⃣ Check for prompt injection 🚨
  if (isPromptInjection(data.content)) {
    console.warn("⚠️ [Security] Prompt injection detected!");
    res.write(`data: ${JSON.stringify({ reply: getRandomInjectionReply() })}\n\n`);
    res.end();
    return;
  }

  // 2️⃣ Save user message 👤
  await createMessage({ userId: data.userId, content: data.content, role: Role.user });
  console.log("💾 [DB] User message saved.");

  // 3️⃣ Build AI context 🧩
  const recentMessages = await getRecentMessages(data.userId);
  const context = buildConversationContext(recentMessages);
  const memories = await getLongTermMemories(data.userId);
  const userProfile = buildUserProfileContext(memories);
  const semanticMemories = await searchRelevantMemories(data.content, data.userId);
  const semanticContext = buildSemanticMemoryContext(semanticMemories);
  
  console.log("🧠 [AI] Context built, initiating stream...");

  // 4️⃣ Generate AI Stream ✨
  const stream = await generateAIResponse(context, userProfile, semanticContext);

  let accumulatedReply = "";

  // 5️⃣ Stream chunks live 🚀
  for await (const chunk of stream) {
    const text = chunk.choices[0]?.delta?.content || "";
    if (text) {
      accumulatedReply += text;
      // Send raw chunk to frontend
      res.write(`data: ${JSON.stringify({ reply: text })}\n\n`);
    }
  }

  // Signal completion
  res.write("data: [DONE]\n\n");
  res.end();
  console.log("✅ [Stream] Response complete.");

  // 6️⃣ Async Post-processing ⚡ (Non-blocking)
  createMessage({ userId: data.userId, content: accumulatedReply, role: Role.assistant })
    .catch(e => console.error("❌ [DB] Error saving reply:", e));
    
  memoryQueue.add("process-memory", { userId: data.userId, message: data.content })
    .catch(e => console.error("❌ [Queue] Memory error:", e));
}