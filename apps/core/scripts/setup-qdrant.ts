import "dotenv/config";
import { qdrant } from "../src/lib/qdrant.js";



async function main() {
  await qdrant.createCollection(
    "memories",

    {
      vectors: {
        size: 768,

        distance: "Cosine",
      },
    },
  );

  console.log("✅ Qdrant collection created");
}

main();
