import { groq } from "../../lib/ai.js";

export async function summarizeMemories(messages: string[]) {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",

      temperature: 0.3,

      max_completion_tokens: 200,

      messages: [
        {
          role: "system",

          content: `
Summarize these memories
into compact long-term context.

Keep:
- goals
- preferences
- personality
- recurring interests

Remove fluff.
`,
        },

        {
          role: "user",

          content: messages.join("\n"),
        },
      ],
    });

    return completion.choices[0]?.message?.content?.trim();
  } catch (error) {
    console.error("Summary Error:", error);

    return null;
  }
}
