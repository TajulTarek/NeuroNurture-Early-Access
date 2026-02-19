"use client";

import { motion, useReducedMotion } from "motion/react";

interface AnimatedBlobProps {
  className?: string;
  color?: "teal" | "blue" | "purple";
  size?: "sm" | "md" | "lg";
  delay?: number;
}

const colorMap = {
  teal: "bg-primary/20",
  blue: "bg-blue-500/15",
  purple: "bg-purple-500/10",
};

const sizeMap = {
  sm: "w-[300px] h-[300px]",
  md: "w-[500px] h-[500px]",
  lg: "w-[700px] h-[700px]",
};

export default function AnimatedBlob({
  className = "",
  color = "teal",
  size = "md",
  delay = 0,
}: AnimatedBlobProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute rounded-full blur-[120px] ${colorMap[color]} ${sizeMap[size]} pointer-events-none ${className}`}
      animate={
        prefersReducedMotion
          ? {}
          : {
              y: [0, -20, 10, 0],
              x: [0, 10, -10, 0],
              scale: [1, 1.05, 0.95, 1],
            }
      }
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      aria-hidden="true"
    />
  );
}
