"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`glass rounded-card p-8 ${glow ? "shadow-glow" : ""} ${className}`}
      whileHover={
        hover && !prefersReducedMotion
          ? { y: -4, boxShadow: "0 0 40px rgba(24, 210, 196, 0.15)" }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
