import { createMemory, getLongTermMemories } from "./memory.repository.js";

import { extractMemory } from "./memory.ai.js";

import { scoreMemory } from "./memory.score.js";

import { saveMemoryVector } from "./memory.vector.js";

import { MemoryType } from "../../../../../prisma/generated/client/enums.js";

import { logger } from "../../lib/logger.js";
import { summarizeMemories } from "./memory.summary.js";

export async function processMemory(data: { userId: string; message: string }) {
  // 1️⃣ Extract memory 🧠
  const memory = await extractMemory(data.message);

  // 2️⃣ Ignore useless memory ❌
  if (!memory || memory === "null") {
    return null;
  }

  // 3️⃣ Score memory importance ⭐
  const score = await scoreMemory(memory);

  // 4️⃣ Ignore weak memories ❌
  if (score < 6) {
    logger.debug("Weak memory ignored ❌");

    return null;
  }

  logger.debug(`Memory: ${memory}`);

  logger.debug(`Importance: ${score}`);

  // 5️⃣ Save memory in PostgreSQL 💾
  const savedMemory = await createMemory({
    userId: data.userId,

    content: memory,

    type: MemoryType.long_term,

    importanceScore: score,
  });

  // 6️⃣ Save vector in Qdrant ⚡
  await saveMemoryVector(
    savedMemory.id,

    savedMemory.content,

    savedMemory.userId,

    score,
  );

  // 7️⃣ Get all memories 🧠
  const allMemories = await getLongTermMemories(data.userId);

  // 8️⃣ Summarize if too many memories ✨
  if (allMemories.length > 50) {
    const summary = await summarizeMemories(allMemories.map((m) => m.content));

    logger.debug(`Memory Summary: ${summary}`);
  }

  return savedMemory;
}
