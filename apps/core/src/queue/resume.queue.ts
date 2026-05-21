import { Queue } from "bullmq";

import { redis } from "../lib/redis.js";

// 📄 Resume optimization queue
export const resumeQueue = new Queue(
  "resume-queue",

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
