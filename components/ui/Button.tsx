"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  loading = false,
  fullWidth = false,
  className = "",
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const base =
    "relative inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 rounded-pill px-8 py-4 text-sm tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-glow",
    ghost:
      "bg-transparent text-foreground border border-border hover:border-primary/40 hover:text-primary",
  };

  return (
    <motion.button
      type={type}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      whileHover={
        !prefersReducedMotion && !disabled ? { scale: 1.02 } : undefined
      }
      whileTap={
        !prefersReducedMotion && !disabled ? { scale: 0.98 } : undefined
      }
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </motion.button>
  );
}
