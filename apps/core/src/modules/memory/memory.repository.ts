
import { MemoryType } from "../../../../../prisma/generated/client/enums.js";
import { prisma } from "../../lib/prisma.js";

export async function createMemory(data: {
  userId: string;
  content: string;
  type: MemoryType;
}) {
  return prisma.memory.create({
    data,
  });
}


export async function getLongTermMemories(userId: string) {
  return prisma.memory.findMany({
    where: {
      userId,

      type: MemoryType.long_term,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 20,
  });
}