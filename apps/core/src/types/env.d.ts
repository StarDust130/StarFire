declare namespace NodeJS {
  interface ProcessEnv {
    REDIS_URL: string;
    DATABASE_URL: string;
    GEMINI_API_KEY: string;
  }
}
