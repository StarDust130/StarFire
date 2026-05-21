import { Worker } from "bullmq";

import { redis } from "../../../core/src/lib/redis.js";

import { logger } from "../../../core/src/lib/logger.js";

import { generateEmailDraft } from "../../../core/src/modules/email/email.ai.js";

// ✉️ AI email worker
export const emailWorker = new Worker(
  // 1️⃣ Queue to listen
  "email-queue",

  // 2️⃣ Runs on new jobs
  async (job) => {
    logger.info("✉️ Generating email...");

    // 3️⃣ Extract payload
    const data = job.data;

    // 4️⃣ Generate email
    const email = await generateEmailDraft(data);

    // 5️⃣ Log result
    logger.info("✅ Email generated");

    logger.info(email);
  },

  {
    // 6️⃣ Redis connection
    connection: redis,

    // 7️⃣ Parallel workers
    concurrency: 5,
  },
);

// ✅ Successful jobs
emailWorker.on(
  "completed",

  (job) => {
    logger.info(`✅ Email job completed: ${job.id}`);
  },
);

// ❌ Failed jobs
emailWorker.on(
  "failed",

  (job, error) => {
    logger.error(`❌ Email job failed: ${job?.id}`);

    logger.error(error);
  },
);

// 🚨 Worker system errors
emailWorker.on(
  "error",

  (error) => {
    logger.error("🚨 Email Worker Error");

    logger.error(error);
  },
);
