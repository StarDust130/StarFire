import type { Response } from "express";

type ResponseData<T> = {
  success?: boolean;
  message: string;
  data?: T;
};

export function sendResponse<T>(res: Response, options: ResponseData<T>) {
  const { success = true, message, data } = options;

  return res.status(200).json({
    success,
    message,
    data,
  });
}
