"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { WHY_DIFFERENT } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyDifferent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="why-different">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            Why Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Neuro Nurture is{" "}
            <span className="text-gradient">different</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Not a generic health app. A purpose-built developmental support
            platform that turns play into actionable guidance for every stakeholder.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {WHY_DIFFERENT.map((item, index) => (
          <PillTile key={item.label} item={item} index={index} reducedMotion={prefersReducedMotion ?? false} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function PillTile({
  item,
  index,
  reducedMotion,
}: {
  item: { label: string; detail: string };
  index: number;
  reducedMotion: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <motion.button
        className="glass rounded-pill px-6 py-3.5 text-sm font-medium text-foreground cursor-default relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        whileHover={reducedMotion ? {} : { scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        {item.label}
      </motion.button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute left-1/2 top-full mt-2 z-20 w-64 -translate-x-1/2"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            <div className="glass rounded-glass p-4 shadow-glow-sm">
              <p className="text-xs text-muted leading-relaxed">
                {item.detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
