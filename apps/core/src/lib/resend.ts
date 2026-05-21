import { Resend } from "resend";

// ✉️ Resend client
export const resend = new Resend(process.env.RESEND_API_KEY);
