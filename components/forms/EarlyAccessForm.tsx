"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { earlyAccessSchema, type EarlyAccessFormData } from "@/lib/validators";
import type { EarlyAccessResponse } from "@/types";
import Button from "@/components/ui/Button";

export default function EarlyAccessForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<EarlyAccessFormData>({
    resolver: zodResolver(earlyAccessSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const watchedFields = watch();

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
        reset();
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
    return <SuccessState reducedMotion={prefersReducedMotion ?? false} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Name Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FloatingInput
          id="firstName"
          label="First Name"
          type="text"
          error={errors.firstName?.message}
          hasValue={!!watchedFields.firstName}
          registration={register("firstName")}
        />
        <FloatingInput
          id="lastName"
          label="Last Name"
          type="text"
          error={errors.lastName?.message}
          hasValue={!!watchedFields.lastName}
          registration={register("lastName")}
        />
      </div>

      {/* Email */}
      <FloatingInput
        id="email"
        label="Email Address"
        type="email"
        error={errors.email?.message}
        hasValue={!!watchedFields.email}
        registration={register("email")}
      />

      {/* Phone */}
      <FloatingInput
        id="phone"
        label="Phone Number"
        type="tel"
        error={errors.phone?.message}
        hasValue={!!watchedFields.phone}
        registration={register("phone")}
      />

      {/* Server Error */}
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

      {/* Submit */}
      <Button
        type="submit"
        fullWidth
        loading={status === "loading"}
        className="!py-4 text-base"
      >
        Request Early Access
      </Button>

      {/* Microcopy */}
      <p className="text-xs text-muted/60 text-center leading-relaxed">
        By registering, you agree to be contacted regarding Neuro
        Nurture&apos;s pilot program.
      </p>
    </form>
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
function SuccessState({ reducedMotion }: { reducedMotion: boolean }) {
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
        className="text-muted text-sm leading-relaxed max-w-sm mx-auto"
        initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
      >
        Thanks for your interest in Neuro Nurture. We&apos;ll be in touch soon
        with next steps for the Early Access program.
      </motion.p>
    </motion.div>
  );
}
