import { groq } from "../../lib/ai.js";

// 🧠 Score how important memory is
export async function scoreMemory(message: string) {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",

      temperature: 0,

      max_completion_tokens: 10,

      messages: [
        {
          role: "system",

          content: `
You are a memory scoring system.

Rate how important this message is
for long-term AI memory.

Rules:

0-2:
Useless casual chat

3-5:
Temporary info

6-8:
Important user preference,
goal, personality, plans,
or recurring interest

9-10:
Critical life info,
deep goals,
important emotional context

ONLY return number.
`,
        },

        {
          role: "user",
          content: message,
        },
      ],
    });

    const score = Number(completion.choices[0]?.message?.content?.trim());

    return isNaN(score) ? 0 : score;
  } catch (error) {
    console.error("Memory Score Error:", error);

    return 0;
  }
}
