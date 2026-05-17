import type { NextFunction, Request, Response } from "express";

import type { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    // ❌ Validation failed
    if (!result.success) {
      return res.status(400).json({
        success: false,

        message: "Validation failed ❌",

        errors: result.error.flatten(),
      });
    }

    // ✅ Replace body with validated data
    req.body = result.data;

    next();
  };
