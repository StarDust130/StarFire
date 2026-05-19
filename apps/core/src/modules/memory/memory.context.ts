import type { Memory } from "../../../../../prisma/generated/client/client.js";
import { logger } from "../../lib/logger.js";

export function buildUserProfileContext(memories: Memory[]) {
  if (!memories.length) {
    return "";
  }

  const formatted = memories.map((memory) => `- ${memory.content}`);

  logger.debug(
    `User Profile🦕🤓: ${formatted.join("; ")}`,
  );

  return `
User Profile:
${formatted.join("\n")}
`;
}
