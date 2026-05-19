import pino from "pino";

const isProduction = process.env.NODE_ENV === "production";

export const logger = pino({
  // 📊 log level
  level: isProduction ? "info" : "debug",

  // 🧹 remove pid/hostname base object
  base: null,

  // ⏰ ISO timestamps
  timestamp: pino.stdTimeFunctions.isoTime,

  // 🌈 pretty logs only in development
  ...(isProduction
    ? {}
    : {
        transport: {
          target: "pino-pretty",

          options: {
            colorize: true,
            translateTime: "HH:MM:ss",
            ignore: "pid,hostname",
          },
        },
      }),
});
