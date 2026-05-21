import type { Request, Response } from "express";



import { sendResponse } from "../../utils/send-response.js";
import { emailQueue } from "../../queue/email.queue.js";

// ✉️ Queue email generation
export async function generateEmailController(
  req: Request,

  res: Response,
) {
  // 1️⃣ Add email job
  await emailQueue.add(
    "generate-email",

    req.body,
  );

  // 2️⃣ Return response
  return sendResponse(
    res,

    {
      success: true,

      message: "Email job queued ✉️",
    },
  );
}
