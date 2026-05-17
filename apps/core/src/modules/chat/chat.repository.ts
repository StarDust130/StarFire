import type { Role } from "../../../../../prisma/generated/client/enums.js";
import { prisma } from "../../lib/prisma.js";

export async function createMessage(data: {
  userId: string;
  content: string;
  role: Role;
}) {
  try {
    console.log("DATA:", data);

    const result = await prisma.message.create({
      data,
    });

    return result;
  } catch (error) {
    console.error("FULL ERROR 👇");
    console.dir(error, { depth: null });

    throw error;
  }
}


export async function getRecentMessages(userId: string) {
  return prisma.message.findMany({
    where: {
      userId,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 10,
  });
}
