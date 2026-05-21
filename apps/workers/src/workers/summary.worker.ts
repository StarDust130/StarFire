import { Worker } from "bullmq";

import { MemoryType } from "../../../../prisma/generated/client/enums.js";

import { summarizeMemories } from "../../../core/src/modules/memory/memory.summary.js";

import { createMemory } from "../../../core/src/modules/memory/memory.repository.js";

import { redis } from "../../../core/src/lib/redis.js";

import { logger } from "../../../core/src/lib/logger.js";

// 🧠 AI worker responsible for compressing old memories
export const summaryWorker = new Worker(
  // 1️⃣ Queue name to listen for jobs
  "summary-queue",

  // 2️⃣ Runs whenever summary job arrives
  async (job) => {
    logger.info("🧠 Starting memory summarization...");

    // 3️⃣ Extract job payload
    const { userId, memories } = job.data;

    // 4️⃣ Generate AI summary
    const summary = await summarizeMemories(memories);

    // 5️⃣ Ignore failed/empty summaries
    if (!summary) {
      logger.warn("⚠️ Empty summary generated");

      return;
    }

    // 6️⃣ Save compressed memory summary
    await createMemory({
      userId,

      content: summary,

      type: MemoryType.summary,

      importanceScore: 10,
    });

    logger.info("✅ Memory summary saved");
  },

  {
    // 7️⃣ Redis connection
    connection: redis,
  },
);

// ✅ Successful job event
summaryWorker.on(
  "completed",

  (job) => {
    logger.info(`✅ Summary job completed: ${job.id}`);
  },
);

// ❌ Failed job event
summaryWorker.on(
  "failed",

  (job, error) => {
    logger.error(`❌ Summary job failed: ${job?.id}`);

    logger.error(error);
  },
);

// 🚨 Worker runtime/system errors
summaryWorker.on(
  "error",

  (error) => {
    logger.error("🚨 Summary Worker Error");

    logger.error(error);
  },
);
