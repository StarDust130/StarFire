import { Router } from "express";

import { generateEmailController } from "./email.controller.js";
import { sendEmailController } from "./email-send.controller.js";


export const emailRouter: Router = Router();

// ✉️ Generate email 🤖🍼
emailRouter.post("/generate", generateEmailController);

// 📨 Send email 📩
emailRouter.post("/send", sendEmailController);
