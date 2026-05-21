import { Queue } from "bullmq";

import { redis } from "../lib/redis.js";

// 🔍 Job finder queue
export const jobQueue = new Queue(
  "job-queue",

  {
    connection: redis,

    defaultJobOptions: {
      attempts: 3,

      backoff: {
        type: "exponential",

        delay: 3000,
      },

      removeOnComplete: 50,

      removeOnFail: 20,
    },
  },
);
