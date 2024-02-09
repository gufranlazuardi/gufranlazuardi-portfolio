import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(50),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email"),
  subject: z.string().min(1, { message: "Subject is required" }).max(150),
  message: z.string().min(1, { message: "Message is required" }).max(1000),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
