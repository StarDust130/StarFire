import { qdrant } from "../../lib/qdrant.js";

import { createEmbedding } from "../../lib/embedding.js";

export async function saveMemoryVector(
  memoryId: string,
  content: string,
  userId: string,
) {
  // 1️⃣ Create embedding 🧠
  const vector = await createEmbedding(content);

  // 2️⃣ Save to Qdrant 💾
  await qdrant.upsert(
    "memories",

    {
      wait: true,

      points: [
        {
          id: memoryId,

          vector,

          payload: {
            content,
            userId,
          },
        },
      ],
    },
  );
}
