import { ExpressAdapter } from "@bull-board/express";

import { createBullBoard } from "@bull-board/api";

import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { memoryQueue } from "../queue/memory.queue.js";



// 1️⃣ Create Express adapter for dashboard routes
const serverAdapter = new ExpressAdapter();

// 2️⃣ Create Bull Board dashboard
createBullBoard({
  // 3️⃣ Connect BullMQ queues to dashboard
  queues: [new BullMQAdapter(memoryQueue)],

  // 4️⃣ Attach dashboard to Express adapter
  serverAdapter,
});

// 5️⃣ Dashboard URL path
// Example → http://localhost:3000/admin/queues
serverAdapter.setBasePath("/admin/queues");

// 6️⃣ Export dashboard router to use in Express app
export const queueMonitorRouter = serverAdapter.getRouter();
