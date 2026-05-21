import type { Request, Response } from "express";

import { resumeQueue } from "../../queue/resume.queue.js";

import { sendResponse } from "../../utils/send-response.js";

// 📄 Queue resume optimization
export async function optimizeResumeController(
  req: Request,

  res: Response,
) {
  // 1️⃣ Add optimization job
  await resumeQueue.add(
    "optimize-resume",

    req.body,
  );

  // 2️⃣ Return response
  return sendResponse(
    res,

    {
      success: true,

      message: "Resume optimization queued 📄",
    },
  );
}
