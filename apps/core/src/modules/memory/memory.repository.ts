

import type { MemoryType } from "../../../../../prisma/generated/client/client.js";
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
