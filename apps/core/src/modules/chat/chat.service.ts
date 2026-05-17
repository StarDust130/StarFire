import { Role } from "../../../../../prisma/generated/client/enums.js";

import { createMessage, getRecentMessages } from "./chat.repository.js";

import { generateAIResponse } from "./chat.ai.js";

export async function chatService(data: { userId: string; content: string }) {
  // 1️⃣ Save user message 👤
  await createMessage({
    userId: data.userId,
    content: data.content,
    role: Role.user,
  });

  // 2️⃣ Get recent conversation 🧠
  const recentMessages = await getRecentMessages(data.userId);

  // 3️⃣ Convert DB messages → AI format 🤖
  const formattedMessages = recentMessages.map((message) => ({
    role: message.role as "user" | "assistant",

    content: message.content,
  }));

  // 4️⃣ Generate AI response ✨
  const aiReply = await generateAIResponse(formattedMessages);

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