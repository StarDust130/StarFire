import { GoogleGenAI } from "@google/genai";

import { logger } from "./logger.js";

// 🧠 Gemini embedding client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

// 🧠 Create vector embedding
export async function createEmbedding(text: string) {
  try {
    logger.info("🧠 Creating embedding...");

    // 1️⃣ Generate embedding vector
    const response = await ai.models.embedContent({
      model: "gemini-embedding-001", // ADD: embedding-2 (later)

      contents: text,
    });

    // 2️⃣ Extract vector values
    const embedding = response.embeddings?.[0]?.values || [];

    logger.info("✅ Embedding created");

    // 3️⃣ Return vector
    return embedding;
  } catch (error) {
    logger.error("❌ Embedding generation failed");

    logger.error(error);

    return [];
  }
}
