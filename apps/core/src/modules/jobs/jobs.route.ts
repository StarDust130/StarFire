import { Router } from "express";

import { findJobsController } from "./jobs.controller.js";

export const jobRouter: Router = Router();

// 🔍 Find jobs
jobRouter.post("/find",findJobsController);
