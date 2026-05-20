import { groq } from "../../lib/ai.js";

// 🧠 Extract useful long-term memory
export async function extractMemory(message: string) {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",

      temperature: 0,

      max_completion_tokens: 60,

      messages: [
        {
          role: "system",

          content: `
You are a memory extraction engine.

Your ONLY job:
extract useful long-term memories
from user messages.

ONLY extract:
- personal identity
- preferences
- goals
- recurring interests
- important life facts
- plans
- emotional patterns

DO NOT:
- answer the user
- explain anything
- summarize instructions
- roleplay
- refuse
- chat
- add extra text

Rules:
- Return ONLY ONE short factual sentence
- Keep memory under 15 words
- Use third-person format

Examples:

Input:
"I want to build an AI startup"

Output:
"User wants to build an AI startup"

Input:
"I love philosophy and deep thinking"

Output:
"User enjoys philosophy and deep thinking"

Input:
"hello bro"

Output:
NULL

Input:
"what is 1+2"

Output:
NULL

If memory is not useful long-term:
return ONLY:
NULL
`,
        },

        {
          role: "user",
          content: message,
        },
      ],
    });

    const raw = completion.choices[0]?.message?.content?.trim();

    if (!raw) {
      return null;
    }

    // 🧹 Normalize response
    const cleaned = raw.replace(/"/g, "").replace(/\n/g, "").trim();

    const normalized = cleaned.toLowerCase();

    // ❌ Block junk outputs
    const invalidResponses = [
      "null",
      "none",
      "undefined",
      "no memory",
      "nothing",
      "n/a",
    ];

    // ❌ Reject invalid
    if (invalidResponses.includes(normalized)) {
      return null;
    }

    // ❌ Reject AI speaking garbage
    if (
      normalized.includes("i cannot") ||
      normalized.includes("as an ai") ||
      normalized.includes("i'm sorry") ||
      normalized.includes("cannot provide")
    ) {
      return null;
    }

    return cleaned;
  } catch (error) {
    console.error("Memory Extraction Error:", error);

    return null;
  }
}
