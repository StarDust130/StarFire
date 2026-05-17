import { Role } from "../../../../../prisma/generated/client/enums.js";
import { createMessage, getRecentMessages } from "./chat.repository.js";

import type { ChatInput } from "./chat.schema.js";
import type { ChatResponse } from "./chat.types.js";

// 🧠 Main Bhishma chat logic
export async function chatService(input: ChatInput): Promise<ChatResponse> {
  // 💾 Save user message
  await createMessage({
    userId: input.userId,
    content: input.message,
    role: Role.user,
  });

  // 🧠 Load recent memory
  const recentMessages = await getRecentMessages(input.userId);

  // 🤖 Temporary fake AI response
  const reply = `Bhishma remembers ${recentMessages.length} messages 👑`;

  // 💾 Save assistant response
  await createMessage({
    userId: input.userId,
    content: reply,
    role: Role.assistant,
  });

  return {
    reply,
  };
}
