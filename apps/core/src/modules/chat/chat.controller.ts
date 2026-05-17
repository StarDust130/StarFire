import type { Request, Response, NextFunction } from "express";

import { chatSchema } from "./chat.schema.js";
import { chatService } from "./chat.service.js";

// 🎮 Handle incoming chat request
export async function chatController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // 🧠 Validate request body
    const input = chatSchema.parse(req.body);

    // 🤖 Run Bhishma chat flow
    const response = await chatService(input);

    // ✅ Send response
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
