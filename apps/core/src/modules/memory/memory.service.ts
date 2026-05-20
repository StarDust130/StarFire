import { createMemory } from "./memory.repository.js";

import { extractMemory } from "./memory.ai.js";

import { MemoryType } from "../../../../../prisma/generated/client/enums.js";

import { logger } from "../../lib/logger.js";

import { saveMemoryVector } from "./memory.vector.js";
import { scoreMemory } from "./memory.score.js";

export async function processMemory(data: { userId: string; message: string }) {
  // 1️⃣ Extract memory 🧠
  const memory = await extractMemory(data.message);

  // 1️⃣.1️⃣  🧠 Score memory importance
  const score = await scoreMemory(memory);

  // ❌ Ignore weak memories
  if (score < 6) {
    return null;
  }

  // 2️⃣ Ignore useless memory ❌
  if (!memory || memory === "null") {
    return null;
  }

  logger.debug(`Extracted Memory🧠: ${memory}`);

  // 3️⃣ Save readable memory in PostgreSQL 💾
  const savedMemory = await createMemory({
    userId: data.userId,

    content: memory,

    type: MemoryType.long_term,
  });

  // 4️⃣ Save vector in Qdrant 🧠⚡
  await saveMemoryVector(
    savedMemory.id,

    savedMemory.content,

    savedMemory.userId,
  );

  return savedMemory;
}
