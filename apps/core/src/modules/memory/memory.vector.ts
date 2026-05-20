import { qdrant } from "../../lib/qdrant.js";

import { createEmbedding } from "../../lib/embedding.js";

// 💾 Save memory vector in Qdrant
export async function saveMemoryVector(
  memoryId: string,
  content: string,
  userId: string,
  importanceScore: number,
) {

  // 1️⃣ Convert text → vector 🧠
  const vector =
    await createEmbedding(content);



  // 2️⃣ Save vector in Qdrant ⚡
  await qdrant.upsert(
    "memories",

    {
      wait: true,

      points: [
        {
          id: memoryId,

          vector,

          payload: {
            userId,
            content,
            importanceScore,
          },
        },
      ],
    }
  );
}



// 🔍 Search relevant semantic memories
export async function searchRelevantMemories(
  query: string,
  userId: string,
) {

  // 1️⃣ Convert query → vector 🧠
  const vector =
    await createEmbedding(query);



  // 2️⃣ Search similar vectors 🔍
  const results =
    await qdrant.search(
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



  // 3️⃣ Rank by importance ⭐
  const sorted =
    results.sort((a, b) => {

      const scoreA =
        Number(
          a.payload
            ?.importanceScore || 0
        );

      const scoreB =
        Number(
          b.payload
            ?.importanceScore || 0
        );

      return scoreB - scoreA;
    });



  // 4️⃣ Return readable memories ✨
  return sorted.map(
    (result) =>
      result.payload?.content
  );
}