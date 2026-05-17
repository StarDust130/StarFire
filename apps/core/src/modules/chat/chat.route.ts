import { Router, type Router as ExpressRouter } from "express";

import { chatController } from "./chat.controller.js";

const chatRouter: ExpressRouter = Router();

// 💬 Chat endpoint
chatRouter.post("/", chatController);

export default chatRouter;
