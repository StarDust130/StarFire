import { Role } from "../../../../../prisma/generated/client/enums.js";

import { createMessage, getRecentMessages } from "./chat.repository.js";

import { generateAIResponse } from "./chat.ai.js";
import { buildConversationContext } from "./chat.memory.js";

export async function chatService(data: { userId: string; content: string }) {
  // 1️⃣ Save user message 👤
  await createMessage({
    userId: data.userId,
    content: data.content,
    role: Role.user,
  });

  // 2️⃣ Get recent conversation 🧠
  const recentMessages = await getRecentMessages(data.userId);

  // 3️⃣ Build conversation context 🧩
  const context = buildConversationContext(recentMessages);

  // 4️⃣ Generate AI response ✨
  const aiReply = await generateAIResponse(context);

  // 5️⃣ Save assistant reply 🤖
  await createMessage({
    userId: data.userId,
    content: aiReply,
    role: Role.assistant,
  });

  // 6️⃣ Return response 🚀
  return {
    reply: aiReply,
  };
}