import { Role } from "../../../../../prisma/generated/client/enums.js";

import { createMessage, getRecentMessages } from "./chat.repository.js";

import { generateAIResponse } from "./chat.ai.js";
import { buildConversationContext } from "./chat.memory.js";
import { processMemory } from "../memory/memory.service.js";
import { getRandomInjectionReply, isPromptInjection } from "../../security/prompt-injection.js";

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

  // 4️⃣ Generate AI response ✨
  const aiReply = await generateAIResponse(context);

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