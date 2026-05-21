import { Worker } from "bullmq";

import { redis } from "../../../core/src/lib/redis.js";

import { logger } from "../../../core/src/lib/logger.js";

import { searchJobs } from "../../../core/src/modules/jobs/jobs.service.js";

// 🔍 Job finder worker
export const jobWorker = new Worker(
  // 1️⃣ Queue name
  "job-queue",

  // 2️⃣ Runs on new jobs
  async (job) => {
    logger.info("🔍 Job worker started");

    logger.info({
      jobId: job.id,
    });

    // 3️⃣ Extract payload
    const { query } = job.data;

    // 4️⃣ Search jobs
    const jobs = await searchJobs(query);

    // 5️⃣ Log results
    logger.info("✅ Jobs found");

    logger.info(jobs);
  },

  {
    connection: redis,

    concurrency: 3,
  },
);

// ✅ Completed
jobWorker.on(
  "completed",

  (job) => {
    logger.info(`✅ Job worker completed: ${job.id}`);
  },
);

// ❌ Failed
jobWorker.on(
  "failed",

  (job, error) => {
    logger.error(`❌ Job worker failed: ${job?.id}`);

    logger.error(error);
  },
);

// 🚨 Runtime errors
jobWorker.on(
  "error",

  (error) => {
    logger.error("🚨 Job Worker Error");

    logger.error(error);
  },
);
