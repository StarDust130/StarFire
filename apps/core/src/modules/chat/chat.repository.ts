import type { Role } from "../../../../../prisma/generated/client/enums.js";

import { prisma } from "../../lib/prisma.js";

// 💾 Save message
export async function createMessage(data: {
  userId: string;
  content: string;
  role: Role;
}) {
  return prisma.message.create({
    data,
  });
}

// 🧠 Get recent messages
export async function getRecentMessages(userId: string) {
  const messages = await prisma.message.findMany({
    where: {
      userId,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 10,
  });

  return messages.reverse();
}
