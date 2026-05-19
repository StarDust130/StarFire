import type { Message } from "../../../../../prisma/generated/client/client.js";

export function buildConversationContext(messages: Message[]) {
  // 1️⃣ Keep only latest 10 🧠
  const recentMessages = messages.slice(-10);

  // 2️⃣ Convert DB → AI format 🤖
  return recentMessages.map((message) => ({
    role: message.role as "user" | "assistant",

    content: message.content,
  }));
}