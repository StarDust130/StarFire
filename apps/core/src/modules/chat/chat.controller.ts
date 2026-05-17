import type { Request, Response } from "express";

import { chatSchema } from "./chat.schema.js";

import { chatService } from "./chat.service.js";

import { asyncHandler } from "../../utils/async-handler.js";

import { sendResponse } from "../../utils/send-response.js";

export const chatController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // 1️⃣ Validate body ✅
    const body = chatSchema.parse(req.body);

    // 2️⃣ Run business logic 🧠
    const { userId: uid, message } = body as { userId: string; message: string };
    const payload = { userId: uid, content: message };
    const result = await chatService(payload);

    // 3️⃣ Send response 🚀
    sendResponse(res, {
      message: "AI response generated successfully 👑",

      data: result,
    });
  },
);
