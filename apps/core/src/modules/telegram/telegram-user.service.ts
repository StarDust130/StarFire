import { prisma } from "../../lib/prisma.js";

import { logger } from "../../lib/logger.js";

// 🤖 Find or create Telegram user
export async function findOrCreateTelegramUser(data: {
  telegramId: string;

  name: string;
}) {
  logger.info("👤 Finding Telegram user...");

  // 1️⃣ Try finding existing user
  let user = await prisma.user.findUnique({
    where: {
      telegramId: data.telegramId,
    },
  });

  // 2️⃣ Return existing user
  if (user) {
    logger.info("✅ Existing Telegram user found");

    return user;
  }

  logger.info("🆕 Creating new Telegram user...");

  // 3️⃣ Create new user
  user = await prisma.user.create({
    data: {
      telegramId: data.telegramId,

      name: data.name,
    },
  });

  logger.info("✅ Telegram user created");

  // 4️⃣ Return created user
  return user;
}
