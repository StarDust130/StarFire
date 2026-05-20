import { groq } from "../../lib/ai.js";

export async function scoreMemory(message: string) {
  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",

    temperature: 0,

    max_completion_tokens: 10,

    messages: [
      {
        role: "system",

        content: `
Rate how important this memory is.

0 = useless
10 = extremely important

Only return number.
`,
      },

      {
        role: "user",
        content: message,
      },
    ],
  });

  return Number(completion.choices[0]?.message?.content || 0);
}
