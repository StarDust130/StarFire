

import { createMemory } from "./memory.repository.js";

import { extractMemory } from "./memory.ai.js";
import { MemoryType } from "../../../../../prisma/generated/client/enums.js";

export async function processMemory(data: { userId: string; message: string }) {
  // 1️⃣ Extract memory 🧠
  const memory = await extractMemory(data.message);

  // 2️⃣ Ignore useless memories ❌
  if (!memory || memory === "null") {
    return null;
  }

  // 3️⃣ Save memory 💾
  return createMemory({
    userId: data.userId,

    content: memory,

    type: MemoryType.long_term,
  });
}
