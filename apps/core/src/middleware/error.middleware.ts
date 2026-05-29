import type { NextFunction, Request, Response } from "express";

export function errorMiddleware(
  error: { statusCode?: number; message?: string },
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(error);

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
}
