import { Router } from "express";

import { generateEmailController } from "./email.controller.js";

export const emailRouter: Router = Router();

// ✉️ Generate email
emailRouter.post(
  "/generate",

  generateEmailController,
);
