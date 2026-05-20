import "dotenv/config";

import { Redis } from "ioredis";

// ⚡ Redis connection
export const redis = new Redis(
  process.env.REDIS_URL || "",

  {
    // ✅ Required for BullMQ workers
    maxRetriesPerRequest: null,
  },
);

redis.on(
  "connect",

  () => {
    console.log("⚡ Redis Connected");
  },
);

redis.on(
  "error",

  (error: Error) => {
    console.error("Redis Error:", error);
  },
);
