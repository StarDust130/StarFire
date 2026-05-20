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

export async function searchRelevantMemories(query: string, userId: string) {
  // 1️⃣ Create query embedding 🧠
  const vector = await createEmbedding(query);

  // 2️⃣ Search similar vectors 🔍
  const results = await qdrant.search(
    "memories",

    {
      vector,

      limit: 5,

      filter: {
        must: [
          {
            key: "userId",

            match: {
              value: userId,
            },
          },
        ],
      },
    },
  );

  // 3️⃣ Return memory texts ✨
  return results.map((result) => result.payload?.content);
}