import { groq } from "../../lib/ai.js";

export async function optimizeResume(data: {
  resume: string;

  jobDescription: string;
}) {
  // 1️⃣ Generate optimized resume
  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",

    temperature: 0.4,

    max_completion_tokens: 1200,

    messages: [
      {
        role: "system",

        content: `
You are an elite resume optimization AI.

Your goals:
- improve clarity
- improve ATS compatibility
- improve impact
- improve professionalism
- keep claims realistic
- preserve truthful information

Rules:
- concise
- strong bullet points
- measurable achievements when possible
- modern formatting
- no fake experience
- no cringe buzzwords

Return ONLY optimized resume text.
`,
      },

      {
        role: "user",

        content: `
JOB DESCRIPTION:
${data.jobDescription}

RESUME:
${data.resume}

Optimize this resume specifically for the job description.
`,
      },
    ],
  });

  // 2️⃣ Return optimized resume
  return completion.choices[0]?.message?.content?.trim();
}
