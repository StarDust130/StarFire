import { Worker } from "bullmq";

import { redis } from "../../../../apps/core/src/lib/redis.js";

import { processMemory } from "../../../../apps/core/src/modules/memory/memory.service.js";

import { logger } from "../../../core/src/lib/logger.js";

// 🧠 Background worker that keeps watching "memory-queue"
export const memoryWorker = new Worker(
  // 1️⃣ Queue name to listen for incoming jobs
  "memory-queue",

  // 2️⃣ Runs whenever a new job arrives
  async (job) => {
    logger.info("🧠 Processing memory...");

    // 3️⃣ Data received from queue job
    logger.info("📦 Job Data:", job.data);

    // 4️⃣ Actual heavy/background processing
    // ⚡ Embedding, vectorization, DB save, etc.
    await processMemory(job.data);

    logger.info("✅ Memory processed");
  },

  {
    // 5️⃣ Redis connection used by BullMQ
    connection: redis,

    // 6️⃣ Process 5 jobs simultaneously
    concurrency: 5,
  },
);

// 📢 Listen when a job completes successfully
memoryWorker.on(
  "completed",

  (job) => {
    logger.info(`✅ Job completed: ${job.id}`);
  },
);

// 📢 Listen when a job processing fails
memoryWorker.on(
  "failed",

  (job, error) => {
    logger.error(`❌ Job failed: ${job?.id}`);

    logger.error(error);
  },
);

// 📢 Listen for worker system/runtime errors
memoryWorker.on(
  "error",

  (error) => {
    logger.error(
      "🚨 Worker Error: " + (error?.stack ?? error?.message ?? String(error)),
    );
  },
);
