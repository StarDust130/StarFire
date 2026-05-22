import type { Request, Response } from "express";

import { logger } from "../../lib/logger.js";

import { chatService } from "../chat/chat.service.js";

import { sendTelegramMessage } from "./telegram.service.js";

import { findOrCreateTelegramUser } from "./telegram-user.service.js";

// 🤖 Telegram webhook controller
export async function telegramWebhookController(req: Request, res: Response) {
  try {
    // =========================================
    // 1️⃣ Verify Telegram webhook secret 🔐
    // Prevents fake requests from random users
    // =========================================
    const secret = req.headers["x-telegram-bot-api-secret-token"];

    if (secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
      logger.error("❌ Invalid Telegram webhook secret");

      return res.sendStatus(401);
    }

    // =========================================
    // 2️⃣ Extract Telegram message 📩
    // =========================================
    const message = req.body?.message;

    // Ignore unsupported/empty messages
    if (!message?.text) {
      logger.info("⚠️ Empty Telegram message ignored");

      return res.sendStatus(200);
    }

    logger.info("📩 Telegram message received");

    logger.info({
      text: message.text,

      telegramUserId: message.from.id,
    });

    // =========================================
    // 3️⃣ Extract Telegram metadata 🧠
    // =========================================
    const chatId = message.chat.id;

    const telegramId = String(message.from.id);

    const text = message.text;

    const name = message.from.first_name || "Telegram User";

    // =========================================
    // 4️⃣ Find or create internal user 👤
    // Maps Telegram user → internal UUID user
    // =========================================
    const user = await findOrCreateTelegramUser({
      telegramId,

      name,
    });

    logger.info({
      internalUserId: user.id,
    });

    // =========================================
    // 5️⃣ Show typing indicator ⌨️
    // Makes bot feel alive/natural
    // =========================================
    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendChatAction`,

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          chat_id: chatId,

          action: "typing",
        }),
      },
    );

    // =========================================
    // 6️⃣ Generate AI response 🤖
    // Uses:
    // - short-term memory
    // - long-term memory
    // - semantic memory
    // =========================================
    const response = await chatService({
      userId: user.id,

      content: text,
    });

    logger.info("🧠 AI response generated");

    // =========================================
    // 7️⃣ Send Telegram reply ✉️
    // =========================================
    await sendTelegramMessage(
      chatId,

      response.reply ?? "Something went wrong 👀",
    );

    logger.info("✅ Telegram reply sent");

    // =========================================
    // 8️⃣ Acknowledge Telegram webhook ✅
    // Telegram expects fast 200 response
    // =========================================
    return res.sendStatus(200);
  } catch (error) {
    logger.error("❌ Telegram webhook failed");

    logger.error(error);

    return res.sendStatus(500);
  }
}
