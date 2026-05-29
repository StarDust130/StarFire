import type { Request, Response } from "express";
import { chatService } from "./chat.service.js";
import { asyncHandler } from "../../utils/async-handler.js";

export const chatController = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("📡 [Controller] Request received");

    // SSE Headers
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    await chatService(req.body, res);
  },
);