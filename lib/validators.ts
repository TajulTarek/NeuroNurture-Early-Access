import { z } from "zod";

/* ─── Per-role schemas ─── */
export const parentSchema = z.object({
  role: z.literal("parent"),
  name: z
    .string()
    .min(1, "Your name is required")
    .max(100, "Name must be 100 characters or less")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase()
    .trim(),
  childName: z
    .string()
    .min(1, "Child's name is required")
    .max(100, "Name must be 100 characters or less")
    .trim(),
  childAge: z
    .number({ error: "Age must be a valid number" })
    .int({ error: "Age must be a whole number" })
    .min(0, { error: "Age must be at least 0" })
    .max(25, { error: "Age must be 25 or less" }),
});

export const schoolSchema = z.object({
  role: z.literal("school"),
  schoolName: z
    .string()
    .min(1, "School name is required")
    .max(200, "School name must be 200 characters or less")
    .trim(),
  address: z
    .string()
    .min(1, "Address is required")
    .max(300, "Address must be 300 characters or less")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase()
    .trim(),
});

export const doctorSchema = z.object({
  role: z.literal("doctor"),
  name: z
    .string()
    .min(1, "Your name is required")
    .max(100, "Name must be 100 characters or less")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase()
    .trim(),
  specialization: z
    .string()
    .min(1, "Specialization is required")
    .max(150, "Specialization must be 150 characters or less")
    .trim(),
  address: z
    .string()
    .min(1, "Address is required")
    .max(300, "Address must be 300 characters or less")
    .trim(),
});

export const earlyAccessSchema = z.discriminatedUnion("role", [
  parentSchema,
  schoolSchema,
  doctorSchema,
]);

export type EarlyAccessFormData = z.infer<typeof earlyAccessSchema>;
export type ParentFormData = z.infer<typeof parentSchema>;
export type SchoolFormData = z.infer<typeof schoolSchema>;
export type DoctorFormData = z.infer<typeof doctorSchema>;
