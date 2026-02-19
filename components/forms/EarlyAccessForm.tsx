"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  parentSchema,
  schoolSchema,
  doctorSchema,
  type EarlyAccessFormData,
  type ParentFormData,
  type SchoolFormData,
  type DoctorFormData,
} from "@/lib/validators";
import type { EarlyAccessResponse, UserRole } from "@/types";
import Button from "@/components/ui/Button";

/* ─── Role Tab Config ─── */
const ROLES: { value: UserRole; label: string; icon: string }[] = [
  { value: "parent", label: "Parent", icon: "👨‍👩‍👧" },
  { value: "school", label: "School", icon: "🏫" },
  { value: "doctor", label: "Doctor", icon: "🩺" },
];

const schemaMap = {
  parent: parentSchema,
  school: schoolSchema,
  doctor: doctorSchema,
} as const;

export default function EarlyAccessForm() {
  const [role, setRole] = useState<UserRole>("parent");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const parentForm = useForm<ParentFormData>({
    resolver: zodResolver(schemaMap.parent),
    defaultValues: { role: "parent", name: "", email: "", childName: "", childAge: undefined as unknown as number },
  });

  const schoolForm = useForm<SchoolFormData>({
    resolver: zodResolver(schemaMap.school),
    defaultValues: { role: "school", schoolName: "", address: "", email: "" },
  });

  const doctorForm = useForm<DoctorFormData>({
    resolver: zodResolver(schemaMap.doctor),
    defaultValues: { role: "doctor", name: "", email: "", specialization: "", address: "" },
  });

  const forms = { parent: parentForm, school: schoolForm, doctor: doctorForm };
  const currentForm = forms[role];

  const switchRole = (newRole: UserRole) => {
    if (newRole === role) return;
    setRole(newRole);
    setStatus("idle");
    setServerError("");
  };

  const onSubmit = async (data: EarlyAccessFormData) => {
    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: EarlyAccessResponse = await res.json();

      if (result.success) {
        setStatus("success");
        currentForm.reset();
      } else {
        setStatus("error");
        setServerError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerError("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return <SuccessState reducedMotion={prefersReducedMotion ?? false} onReset={() => setStatus("idle")} />;
  }

  return (
    <div className="space-y-6">
      {/* Role Tabs */}
      <div className="flex rounded-glass overflow-hidden border border-border">
        {ROLES.map((r) => (
          <button
            key={r.value}
            type="button"
            onClick={() => switchRole(r.value)}
            className={`flex-1 py-3 px-2 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2
              ${
                role === r.value
                  ? "bg-primary/15 text-primary border-b-2 border-primary"
                  : "text-muted hover:text-foreground hover:bg-white/[0.03]"
              }`}
          >
            <span className="text-base">{r.icon}</span>
            {r.label}
          </button>
        ))}
      </div>

      {/* Form per role */}
      <AnimatePresence mode="wait">
        <motion.div
          key={role}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? {} : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {role === "parent" && (
            <ParentFields form={parentForm} status={status} serverError={serverError} onSubmit={onSubmit} />
          )}
          {role === "school" && (
            <SchoolFields form={schoolForm} status={status} serverError={serverError} onSubmit={onSubmit} />
          )}
          {role === "doctor" && (
            <DoctorFields form={doctorForm} status={status} serverError={serverError} onSubmit={onSubmit} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Per-Role Form Sections
   ═══════════════════════════════════════════════ */

interface FormSectionProps<T extends EarlyAccessFormData> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  status: string;
  serverError: string;
  onSubmit: (data: T) => void;
}

function ParentFields({ form, status, serverError, onSubmit }: FormSectionProps<ParentFormData>) {
  const { register, handleSubmit, formState: { errors }, watch } = form;
  const w = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input type="hidden" {...register("role")} />
      <FloatingInput id="p-name" label="Your Name" type="text" error={errors.name?.message} hasValue={!!w.name} registration={register("name")} />
      <FloatingInput id="p-email" label="Email Address" type="email" error={errors.email?.message} hasValue={!!w.email} registration={register("email")} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FloatingInput id="p-childName" label="Child's Name" type="text" error={errors.childName?.message} hasValue={!!w.childName} registration={register("childName")} />
        <FloatingInput id="p-childAge" label="Child's Age" type="number" error={errors.childAge?.message} hasValue={w.childAge !== undefined && w.childAge !== ""} registration={register("childAge", { valueAsNumber: true })} />
      </div>
      <FormFooter status={status} serverError={serverError} />
    </form>
  );
}

function SchoolFields({ form, status, serverError, onSubmit }: FormSectionProps<SchoolFormData>) {
  const { register, handleSubmit, formState: { errors }, watch } = form;
  const w = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input type="hidden" {...register("role")} />
      <FloatingInput id="s-schoolName" label="School Name" type="text" error={errors.schoolName?.message} hasValue={!!w.schoolName} registration={register("schoolName")} />
      <FloatingInput id="s-email" label="Email Address" type="email" error={errors.email?.message} hasValue={!!w.email} registration={register("email")} />
      <FloatingInput id="s-address" label="Address" type="text" error={errors.address?.message} hasValue={!!w.address} registration={register("address")} />
      <FormFooter status={status} serverError={serverError} />
    </form>
  );
}

function DoctorFields({ form, status, serverError, onSubmit }: FormSectionProps<DoctorFormData>) {
  const { register, handleSubmit, formState: { errors }, watch } = form;
  const w = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input type="hidden" {...register("role")} />
      <FloatingInput id="d-name" label="Your Name" type="text" error={errors.name?.message} hasValue={!!w.name} registration={register("name")} />
      <FloatingInput id="d-email" label="Email Address" type="email" error={errors.email?.message} hasValue={!!w.email} registration={register("email")} />
      <FloatingInput id="d-specialization" label="Specialization" type="text" error={errors.specialization?.message} hasValue={!!w.specialization} registration={register("specialization")} />
      <FloatingInput id="d-address" label="Clinic / Hospital Address" type="text" error={errors.address?.message} hasValue={!!w.address} registration={register("address")} />
      <FormFooter status={status} serverError={serverError} />
    </form>
  );
}

/* ─── Shared Submit + Error Footer ─── */
function FormFooter({ status, serverError }: { status: string; serverError: string }) {
  return (
    <>
      <AnimatePresence>
        {status === "error" && serverError && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="p-4 rounded-glass bg-red-500/10 border border-red-500/20"
          >
            <p className="text-sm text-red-400">{serverError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Button type="submit" fullWidth loading={status === "loading"} className="!py-4 text-base">
        Request Early Access
      </Button>

      <p className="text-xs text-muted/60 text-center leading-relaxed">
        By registering, you agree to be contacted regarding Neuro Nurture&apos;s pilot program.
      </p>
    </>
  );
}

/* ─── Floating Label Input ─── */
function FloatingInput({
  id,
  label,
  type,
  error,
  hasValue,
  registration,
}: {
  id: string;
  label: string;
  type: string;
  error?: string;
  hasValue: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registration: any;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=" "
        className={`peer w-full bg-white/[0.03] border rounded-glass px-5 pt-6 pb-2 text-sm text-foreground outline-none transition-all duration-200 placeholder-transparent
          ${error ? "border-red-500/50 focus:border-red-500" : "border-border focus:border-primary/50"}
          focus:ring-1 ${error ? "focus:ring-red-500/20" : "focus:ring-primary/20"}`}
        {...registration}
      />
      <label
        htmlFor={id}
        className={`absolute left-5 transition-all duration-200 pointer-events-none
          ${hasValue ? "top-2 text-[10px]" : "top-4 text-sm"}
          peer-focus:top-2 peer-focus:text-[10px]
          ${error ? "text-red-400" : "text-muted peer-focus:text-primary"}`}
      >
        {label}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 text-xs text-red-400 pl-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Success Animation ─── */
function SuccessState({ reducedMotion, onReset }: { reducedMotion: boolean; onReset: () => void }) {
  return (
    <motion.div
      className="text-center py-12"
      initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Checkmark */}
      <div className="mx-auto w-20 h-20 mb-6 relative">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="#18D2C4"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.path
            d="M 24 40 L 35 52 L 56 28"
            fill="none"
            stroke="#18D2C4"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          />
        </svg>
        {/* Glow behind */}
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10" />
      </div>

      <motion.h3
        className="text-2xl font-bold text-foreground mb-3"
        initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        You&apos;re on the list!
      </motion.h3>
      <motion.p
        className="text-muted text-sm leading-relaxed max-w-sm mx-auto mb-6"
        initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
      >
        Thanks for your interest in Neuro Nurture. We&apos;ll be in touch soon
        with next steps for the Early Access program.
      </motion.p>
      <motion.button
        type="button"
        onClick={onReset}
        className="text-xs text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
        initial={reducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Register another person
      </motion.button>
    </motion.div>
  );
}
