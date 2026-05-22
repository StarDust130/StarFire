import { Router } from "express";

import { telegramWebhookController } from "./telegram.controller.js";

export const telegramRouter: Router = Router();

// 🤖 Telegram webhook
telegramRouter.post(
  "/webhook",

  telegramWebhookController,
);
