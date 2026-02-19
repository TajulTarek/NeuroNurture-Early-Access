"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { SOLUTION_POINTS, CAPTURED_SIGNALS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SIGNAL_COLORS: Record<string, string> = {
  up: "bg-primary",
  stable: "bg-blue-400",
  down: "bg-amber-400",
};

export default function Solution() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="solution">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <ScrollReveal direction="left">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              The Solution
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Play + AI +{" "}
              <span className="text-gradient">evidence-informed guidance.</span>
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Neuro Nurture turns everyday play into developmental insight —
              capturing behavioral signals, surfacing patterns through AI, and
              guiding next steps across home, school, and clinic.
            </p>
            <ul className="space-y-4">
              {SOLUTION_POINTS.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm text-muted leading-relaxed">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Right: Signal Capture Panel */}
        <ScrollReveal direction="right">
          <div className="glass rounded-card p-6 shadow-glow-sm">
            {/* Panel Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Captured Signals
                </p>
                <p className="text-xs text-muted">From last game session</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-[10px] text-primary">Live</span>
              </div>
            </div>

            {/* Signal Bars */}
            <div className="space-y-4 mb-6">
              {CAPTURED_SIGNALS.map((signal, i) => (
                <div key={signal.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[11px] text-muted">{signal.label}</p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-medium text-foreground">
                        {signal.value}
                      </span>
                      {signal.trend === "up" && (
                        <TrendingUp className="w-3 h-3 text-primary" />
                      )}
                    </div>
                  </div>
                  <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${SIGNAL_COLORS[signal.trend]} opacity-70`}
                      initial={
                        prefersReducedMotion
                          ? { width: signal.value }
                          : { width: 0 }
                      }
                      whileInView={{ width: signal.value }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: i * 0.15,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Insight Tile */}
            <div className="bg-primary/[0.06] border border-primary/20 rounded-glass p-4 mb-4 flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-medium text-primary mb-1">
                  Pattern Detected
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  Sustained attention improved 18% over the last 3 sessions.
                  Gesture imitation remains consistent. Speech repetition tasks
                  may benefit from more frequent short sessions.
                </p>
              </div>
            </div>

            {/* Next Activity */}
            <div className="bg-white/[0.03] border border-border rounded-glass p-4 flex items-center justify-between group hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] text-muted">Recommended Next</p>
                  <p className="text-xs font-medium text-foreground">
                    Repeat With Me — Speech Clarity
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Start
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
