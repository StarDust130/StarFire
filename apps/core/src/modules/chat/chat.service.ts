import { Role } from "../../../../../prisma/generated/client/enums.js";

import { createMessage, getRecentMessages } from "./chat.repository.js";

import { generateAIResponse } from "./chat.ai.js";
import { buildConversationContext } from "./chat.memory.js";
import { processMemory } from "../memory/memory.service.js";
import { getRandomInjectionReply, isPromptInjection } from "../../security/prompt-injection.js";
import { buildUserProfileContext } from "../memory/memory.context.js";
import { getLongTermMemories } from "../memory/memory.repository.js";

import { searchRelevantMemories } from "../memory/memory.vector.js";

import { buildSemanticMemoryContext } from "../memory/memory.semantic.js";


//! Core chat service handling the entire flow of a chat interaction 🗣️🤖
export async function chatService(data: { userId: string; content: string }) {
  // 1️⃣ Save user message in DB 👤
  await createMessage({
    userId: data.userId,
    content: data.content,
    role: Role.user,
  });

  // 2️⃣ Get recent conversation 🧠
  const recentMessages = await getRecentMessages(data.userId);

  // 3️⃣ Build conversation context 🧩
  const context = buildConversationContext(recentMessages);

  // 3️⃣.5️⃣ Check for prompt injection 🚨
  if (isPromptInjection(data.content)) {
    return {
      reply: getRandomInjectionReply(),
    };
  }

  // 3️⃣.6️⃣ 🧠 Get long-term memories
  const memories = await getLongTermMemories(data.userId);

  // 3️⃣.7️⃣ 👤 Build user profile
  const userProfile = buildUserProfileContext(memories);

  // 3️⃣.8️⃣ 🔍 Search semantic memories
  const semanticMemories = await searchRelevantMemories(
    data.content,
    data.userId,
  );

  // 3️⃣.9️⃣ 🧠 Build semantic context
  const semanticContext = buildSemanticMemoryContext(semanticMemories);

  // 4️⃣ Generate AI response ✨
  const aiReply = await generateAIResponse(
    context,
    userProfile,
    semanticContext,
  );

  // 5️⃣ Save assistant reply 🤖
  await createMessage({
    userId: data.userId,
    content: aiReply,
    role: Role.assistant,
  });

  //6️⃣ 🧠 Process long-term memory
  await processMemory({
    userId: data.userId,

    message: data.content,
  });

  // 7️⃣  Return response 🚀
  return {
    reply: aiReply,
  };
}