export function buildSemanticMemoryContext(memories: unknown[]) {
  if (!memories.length) {
    return "";
  }

  return `
Relevant User Memories:

${memories.map((m) => `- ${m}`).join("\n")}
`;
}
