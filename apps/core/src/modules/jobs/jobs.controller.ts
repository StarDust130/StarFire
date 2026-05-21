import type { Request, Response } from "express";

import { sendResponse } from "../../utils/send-response.js";

import { jobQueue } from "../../queue/job.queue.js";

// 🔍 Queue job search
export async function findJobsController(
  req: Request,

  res: Response,
) {
  // 1️⃣ Add job search task
  await jobQueue.add(
    "find-jobs",

    req.body,
  );

  // 2️⃣ Return success
  return sendResponse(
    res,

    {
      success: true,

      message: "Job search queued 🔍",
    },
  );
}
