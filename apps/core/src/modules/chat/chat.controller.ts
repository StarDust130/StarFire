import type { Request, Response } from "express";

import { chatService } from "./chat.service.js";

import { asyncHandler } from "../../utils/async-handler.js";

import { sendResponse } from "../../utils/send-response.js";

export const chatController = asyncHandler(
  async (req: Request, res: Response) => {
    // 1️⃣ Run business logic 🧠
    const result = await chatService(req.body);

    // 2️⃣ Send response 🚀
    sendResponse(res, {
      message: "AI response generated successfully 👑",

      data: result,
    });
  },
);
