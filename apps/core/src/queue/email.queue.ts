import { Queue } from "bullmq";

import { redis } from "../lib/redis.js";

// ✉️ Email drafting queue
export const emailQueue = new Queue(
  "email-queue",

  {
    connection: redis,

    defaultJobOptions: {
      // 🔁 Retry failed jobs
      attempts: 3,

      // ⏳ Delay retries
      backoff: {
        type: "exponential",

        delay: 3000,
      },

      // 🧹 Cleanup old jobs
      removeOnComplete: 50,

      removeOnFail: 20,
    },
  },
);
