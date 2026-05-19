import { groq } from "../../lib/ai.js";

export async function extractMemory(message: string) {
  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",

    temperature: 0.2,

    max_completion_tokens: 100,

    messages: [
      {
        role: "system",

        content: `
You extract important long-term memories.

Only remember:
- goals
- preferences
- personal facts
- important plans

Return ONLY:
- a short memory sentence

OR:

"null"

Examples:

Input:
"I want remote AI jobs"

Output:
"User wants remote AI jobs"

Input:
"Hello"

Output:
"null"
`,
      },

      {
        role: "user",
        content: message,
      },
    ],
  });

  return completion.choices[0]?.message?.content || "null";
}
