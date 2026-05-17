import { z } from "zod";

// ✨ Validate incoming chat request
export const chatSchema = z.object({
  userId: z.uuid(),
  message: z.string().min(1).max(4000),
});

// 📦 Type from schema
export type ChatInput = z.infer<typeof chatSchema>;
