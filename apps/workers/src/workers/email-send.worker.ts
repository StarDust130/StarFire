import { Worker } from "bullmq";

import { redis } from "../../../core/src/lib/redis.js";

import { resend } from "../../../core/src/lib/resend.js";

import { logger } from "../../../core/src/lib/logger.js";

// 📨 Worker responsible for real email sending
export const emailSendWorker = new Worker(
  // 1️⃣ Queue to listen
  "email-send-queue",

  // 2️⃣ Runs whenever job arrives
  async (job) => {
    logger.info("📨 Email send worker started");

    logger.info({
      jobId: job.id,

      payload: job.data,
    });

    // 3️⃣ Extract payload
    const { to, subject, html } = job.data;

    logger.info(`📧 Sending email to: ${to}`);

    // 4️⃣ Send email via Resend
    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM!,

      to,

      subject,

      html,
    });

    // 5️⃣ Log resend response
    logger.info({
      resendResponse: response,
    });

    logger.info("✅ Email sent successfully");
  },

  {
    connection: redis,

    concurrency: 5,
  },
);

// ✅ Completed
emailSendWorker.on(
  "completed",

  (job) => {
    logger.info(`✅ Email send completed: ${job.id}`);
  },
);

// ❌ Failed
emailSendWorker.on(
  "failed",

  (job, error) => {
    logger.error(`❌ Email send failed: ${job?.id}`);

    logger.error(error);
  },
);

// 🚨 Worker runtime error
emailSendWorker.on(
  "error",

  (error) => {
    logger.error("🚨 Email Worker Runtime Error");

    logger.error(error);
  },
);
