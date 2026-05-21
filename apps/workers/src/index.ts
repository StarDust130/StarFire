import "dotenv/config";
import { logger } from "../../core/src/lib/logger.js";
import "./workers/memory.worker.js";
import "./workers/email.worker.js";
import "./workers/email-send.worker.js";

logger.info("🐣 Workers Running...");
