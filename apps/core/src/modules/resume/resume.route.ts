import { Router } from "express";

import { optimizeResumeController } from "./resume.controller.js";

export const resumeRouter: Router = Router();

// 📄 Optimize resume
resumeRouter.post("/optimize", optimizeResumeController);
