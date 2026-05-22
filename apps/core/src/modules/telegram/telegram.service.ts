import { logger } from "../../lib/logger.js";

// 🤖 Send Telegram message
export async function sendTelegramMessage(chatId: number, text: string) {
  try {
    // 1️⃣ Call Telegram API
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          chat_id: chatId,

          text,
        }),
      },
    );

    // 2️⃣ Parse response
    const data = await response.json();

    logger.info("✅ Telegram message sent");

    return data;
  } catch (error) {
    logger.error("❌ Telegram send failed");

    logger.error(error);
  }
}
