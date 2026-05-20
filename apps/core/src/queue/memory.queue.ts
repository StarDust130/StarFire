import { Queue } from "bullmq";

import { redis } from "../lib/redis.js";

// 🧠 Memory processing queue
export const memoryQueue = new Queue(
  "memory-queue",

  {
    connection: redis,

    defaultJobOptions: {
      // 🔁 Retry failed jobs
      attempts: 3,

      // ⏳ Delay between retries
      backoff: {
        type: "exponential",

        delay: 2000,
      },

      // 🧹 Remove completed jobs
      removeOnComplete: 50,

      // 🧹 Remove failed jobs
      removeOnFail: 20,
    },
  },
);
