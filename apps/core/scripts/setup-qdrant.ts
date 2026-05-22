import "dotenv/config";
import { qdrant } from "../src/lib/qdrant.js";


async function main() {
  await qdrant.createCollection(
    "memories",

    {
      vectors: {
        size: 3072,

        distance: "Cosine",
      },
    },
  );

  console.log("✅ Qdrant collection created");
}

main();
