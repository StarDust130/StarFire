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
  return prisma.message.findMany({
    where: {
      userId,
    },

    orderBy: {
      createdAt: "asc",
    },

    take: 10,
  });
}