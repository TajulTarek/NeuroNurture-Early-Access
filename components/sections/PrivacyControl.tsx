"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Shield, Lock, Download, Trash2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TOGGLES = [
  { label: "End-to-End Encryption", icon: Lock, defaultOn: true },
  { label: "Anonymous Analytics Mode", icon: Shield, defaultOn: false },
  { label: "Export My Data", icon: Download, defaultOn: true },
  { label: "Delete All Data on Request", icon: Trash2, defaultOn: true },
];

export default function PrivacyControl() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [toggleStates, setToggleStates] = useState(
    TOGGLES.map((t) => t.defaultOn)
  );

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    // Animate toggles on/off in sequence
    const timers: NodeJS.Timeout[] = [];

    TOGGLES.forEach((toggle, i) => {
      if (!toggle.defaultOn) {
        timers.push(
          setTimeout(() => {
            setToggleStates((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }, 800 + i * 400)
        );
      }
    });

    return () => timers.forEach(clearTimeout);
  }, [isInView, prefersReducedMotion]);

  return (
    <SectionWrapper id="privacy">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Privacy & Control
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Privacy & Control,{" "}
              <span className="text-gradient">By Design</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Patient data sovereignty isn&apos;t a feature — it&apos;s the
              foundation. Every component of Neuro Nurture is built with
              privacy-first principles, granular consent management, and
              institutional-grade security.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              HIPAA, GDPR, and emerging neuro-specific data regulations are
              handled automatically. Your team focuses on care — we handle
              compliance.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div ref={ref} className="glass rounded-card p-6 shadow-glow-sm">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm font-medium text-foreground">
                Privacy Settings
              </p>
              <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded-full">
                Patient Control Panel
              </span>
            </div>

            <div className="space-y-4">
              {TOGGLES.map((toggle, i) => (
                <div
                  key={toggle.label}
                  className="flex items-center justify-between py-3 px-4 bg-white/50 rounded-glass border border-border"
                >
                  <div className="flex items-center gap-3">
                    <toggle.icon className="w-4 h-4 text-muted" strokeWidth={1.5} />
                    <span className="text-sm text-foreground">
                      {toggle.label}
                    </span>
                  </div>
                  <button
                    className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
                      toggleStates[i] ? "bg-primary" : "bg-black/10"
                    }`}
                    aria-label={`Toggle ${toggle.label}`}
                    onClick={() =>
                      setToggleStates((prev) => {
                        const next = [...prev];
                        next[i] = !next[i];
                        return next;
                      })
                    }
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
                      animate={{ left: toggleStates[i] ? 24 : 4 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] text-muted">
                  SOC 2 Type II · HITRUST CSF · Zero-Trust Architecture
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
