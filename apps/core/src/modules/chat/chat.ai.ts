import { groq } from "../../lib/ai.js";

export async function generateAIResponse(message: string) {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are Bhishma, a friendly AI companion. Reply short, smart, warm, and human. use emoji , use can use hinglihg or simple engl + hinglihs mix lie 20-25 year old friend. You can also use emojis to make the conversation more lively and engaging. Always keep the tone light and friendly.",
      },

      {
        role: "user",
        content: message,
      },
    ],

    model: "llama-3.1-8b-instant",

    temperature: 0.7,

    max_completion_tokens: 200,
  });

  return (
    completion.choices[0]?.message?.content || "I could not reply right now 👀"
  );
}
