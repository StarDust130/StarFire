import type { Request, Response } from "express";

import { emailSendQueue } from "../../queue/email-send.queue.js";

import { sendResponse } from "../../utils/send-response.js";

// 📨 Queue real email sending
export async function sendEmailController(
  req: Request,

  res: Response,
) {
  // 1️⃣ Add send-email job
  await emailSendQueue.add(
    "send-email",

    req.body,
  );

  // 2️⃣ Return success response
  return sendResponse(
    res,

    {
      success: true,

      message: "Email queued for sending 📨",
    },
  );
}
