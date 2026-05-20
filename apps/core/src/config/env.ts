import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("8080"),
  DATABASE_URL: z.string(),
  REDIS_URL: z.string(),
  QDRANT_URL: z.string(),
  GEMINI_API_KEY: z.string(),
  GROQ_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
