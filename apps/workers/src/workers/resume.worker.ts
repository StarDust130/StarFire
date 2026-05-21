import { Worker } from "bullmq";

import { redis } from "../../../core/src/lib/redis.js";

import { logger } from "../../../core/src/lib/logger.js";

import { optimizeResume } from "../../../core/src/modules/resume/resume.ai.js";

// 📄 Resume optimization worker
export const resumeWorker = new Worker(
  // 1️⃣ Queue to listen
  "resume-queue",

  // 2️⃣ Runs on incoming jobs
  async (job) => {
    logger.info("📄 Optimizing resume...");

    logger.info({
      jobId: job.id,
    });

    // 3️⃣ Extract payload
    const { resume, jobDescription } = job.data;

    // 4️⃣ Optimize resume
    const optimizedResume = await optimizeResume({
      resume,

      jobDescription,
    });

    // 5️⃣ Log success
    logger.info("✅ Resume optimized");

    logger.info(optimizedResume);
  },

  {
    connection: redis,

    concurrency: 3,
  },
);

// ✅ Completed
resumeWorker.on(
  "completed",

  (job) => {
    logger.info(`✅ Resume job completed: ${job.id}`);
  },
);

// ❌ Failed
resumeWorker.on(
  "failed",

  (job, error) => {
    logger.error(`❌ Resume job failed: ${job?.id}`);

    logger.error(error);
  },
);

// 🚨 Runtime errors
resumeWorker.on(
  "error",

  (error) => {
    logger.error("🚨 Resume Worker Error");

    logger.error(error);
  },
);
