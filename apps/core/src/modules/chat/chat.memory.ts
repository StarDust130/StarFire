import type { Message } from "../../../../../prisma/generated/client/client.js";


export function buildConversationContext(messages: Message[]) {
  return messages.map((message) => ({
    role: message.role as "user" | "assistant",

    content: message.content,
  }));
}
