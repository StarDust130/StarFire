const suspiciousPatterns: RegExp[] = [
  // 🚨 instruction override
  /ignore\s+(all\s+)?previous\s+instructions?/i,
  /disregard\s+(all\s+)?prior\s+rules?/i,
    /forget\s+(all\s+)?previous\s+guidelines?/i,
    /override\s+(all\s+)?system\s+rules?/i,


  // 🚨 prompt leaking
  /reveal\s+(your\s+)?(system|developer|hidden)\s+(prompt|instructions?)/i,
  /show\s+(your\s+)?(system|developer|hidden)\s+(prompt|message)?/i,
  /print\s+(your\s+)?instructions?/i,


  // 🚨 jailbreak attacks
  /jailbreak/i,
  /developer\s+mode/i,
  /dan\s+mode/i,
  /unrestricted\s+ai/i,
  

  // 🚨 safety bypass
  /disable\s+safety/i,
  /bypass\s+safety/i,
  /ignore\s+safety/i,

  // 🚨 role injection
  /role\s*:\s*(system|developer|assistant)/i,

  // 🚨 hidden internals
  /internal\s+instructions?/i,
  /hidden\s+policy/i,
  /confidential\s+prompt/i,
];

// 🧼 normalize weird tricks
function normalizeInput(text: string): string {
  return (
    text
      .toLowerCase()

      // 🧼 normalize unicode
      .normalize("NFKD")

      // 🧼 remove zero-width chars
      .replace(/[\u200B-\u200D\uFEFF]/g, "")

      // 🧼 remove symbols/punctuation
      .replace(/[^a-z0-9\s]/gi, " ")

      // 🧼 collapse spaces
      .replace(/\s+/g, " ")

      .trim()
  );
}

export function isPromptInjection(text: string): boolean {
  const normalized = normalizeInput(text);

  // 🚨 regex attack patterns
  const matchedPattern = suspiciousPatterns.some((pattern) =>
    pattern.test(normalized),
  );

  // 🚨 repeated spam chars
  const repeatedChars = /(.)\1{15,}/i.test(normalized);

  // 🚨 suspicious base64 payloads
  const encodedPayload = /(?:[A-Za-z0-9+/]{60,}={0,2})/.test(text);

  // 🚨 fake XML/HTML instruction wrappers
  const markupInjection = /<(system|assistant|developer|prompt)>/i.test(
    normalized,
  );

  // 🚨 huge suspicious prompt flooding
  const excessiveLength = normalized.length > 5000;

  return (
    matchedPattern ||
    repeatedChars ||
    encodedPayload ||
    markupInjection ||
    excessiveLength
  );
}

const injectionReplies = [
  "Aww baby 👀 these little prompt tricks don’t work here.",

  "Oof 💀 bro watched one jailbreak tutorial and got confident.",

  "Cute attempt dummy 🔒 but the system prompt isn’t public property.",

  "Oh sweetheart 😭 you really thought 'ignore instructions' was enough?",

  "That exploit was fighting for its life 💀",

  "Bro tried level 1 hacker tricks on production systems 😭",

  "Aww… almost adorable 👀 unfortunately security exists.",

  "That jailbreak prompt belongs in a museum 💀",

  "Little bro thought he discovered a secret exploit 😭",

  "Try harder baby 🔒 these tricks expired years ago.",

  "Bro, that prompt injection is so 2005 level 😭",

  "Bro Don't Waste my Time, this is for you 🖕",
];

// 🎲 pick random reply
export function getRandomInjectionReply() {
  const randomIndex = Math.floor(Math.random() * injectionReplies.length);

  return injectionReplies[randomIndex];
}