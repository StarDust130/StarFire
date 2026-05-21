import { Queue } from "bullmq";

import { redis } from "../lib/redis.js";

// 🧠 Memory summary queue
export const summaryQueue = new Queue(
  "summary-queue",

  {
    connection: redis,

    defaultJobOptions: {
      attempts: 3,

      backoff: {
        type: "exponential",

        delay: 3000,
      },

      removeOnComplete: 20,

      removeOnFail: 10,
    },
  },
);
