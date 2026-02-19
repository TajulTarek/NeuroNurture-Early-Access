"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { TIMELINE_STEPS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="how-it-works">
      <ScrollReveal>
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From Play to{" "}
            <span className="text-gradient">Insight</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Four simple steps — from a short game session to a shareable progress
            report. No clinical setup, no complex onboarding.
          </p>
        </div>
      </ScrollReveal>

      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        {/* Animated vertical line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-border">
          <motion.div
            className="w-full bg-gradient-to-b from-primary to-primary/30 origin-top"
            style={{
              height: prefersReducedMotion ? "100%" : lineHeight,
            }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {TIMELINE_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative pl-20 md:pl-28"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {/* Step Number */}
              <div className="absolute left-4 md:left-8 w-8 h-8 rounded-full border-2 border-primary bg-white flex items-center justify-center shadow-glow-sm">
                <span className="text-xs font-bold text-primary">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
