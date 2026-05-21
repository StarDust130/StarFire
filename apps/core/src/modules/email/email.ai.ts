import { groq } from "../../lib/ai.js";

export async function generateEmailDraft(data: {
  name: string;

  company: string;

  role: string;

  context: string;
}) {
  // 1️⃣ Generate email using AI
  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",

    temperature: 0.4,

    max_completion_tokens: 300,

    messages: [
      {
        role: "system",

        content: `
You are a professional AI email writer.

Rules:
- concise
- professional
- personalized
- confident
- human sounding
- no cringe
- no AI tone

Return ONLY email body.
`,
      },

      {
        role: "user",

        content: `
Name: ${data.name}

Company: ${data.company}

Role: ${data.role}

Context:
${data.context}

Write a professional outreach email.
`,
      },
    ],
  });

  // 2️⃣ Clean response
  return completion.choices[0]?.message?.content?.trim();
}
