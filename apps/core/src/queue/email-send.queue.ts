import { Queue } from "bullmq";

import { redis } from "../lib/redis.js";

// ✉️ Queue for sending emails
export const emailSendQueue = new Queue(
  "email-send-queue",

  {
    connection: redis,

    defaultJobOptions: {
      attempts: 3,

      backoff: {
        type: "exponential",

        delay: 5000,
      },

      removeOnComplete: 50,

      removeOnFail: 20,
    },
  },
);
