"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: -30 },
    right: { y: 0, x: 30 },
  };

  const offset = directionOffset[direction];

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 0, y: offset.y, x: offset.x }
      }
      whileInView={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, x: 0 }
      }
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
