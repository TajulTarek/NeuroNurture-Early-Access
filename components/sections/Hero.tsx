"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";
import AnimatedBlob from "@/components/ui/AnimatedBlob";
import Button from "@/components/ui/Button";

const TABS = ["Overview", "Progress", "Insights"] as const;

const METRICS = [
  { label: "Attention", value: "72%", color: "text-primary" },
  { label: "Gesture", value: "58%", color: "text-blue-400" },
  { label: "Speech", value: "44%", color: "text-purple-400" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Overview");

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <AnimatedBlob
        color="teal"
        size="lg"
        className="-top-40 -right-40 opacity-40"
      />
      <AnimatedBlob
        color="purple"
        size="md"
        className="bottom-20 -left-40 opacity-30"
        delay={4}
      />
      <AnimatedBlob
        color="blue"
        size="sm"
        className="top-1/3 left-1/4 opacity-20"
        delay={2}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-8">
          {/* Eyebrow Pill */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 text-xs text-primary bg-primary/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              Sylhet Division Winner — DNA Hack for Health
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Game-based autism support, guided by{" "}
            <span className="text-gradient">AI insights.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg text-muted max-w-lg leading-relaxed"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Continuous monitoring, early screening support, and evidence-informed
            guidance — across home, school, and clinic.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button onClick={() => handleScroll("#early-access")}>
              Request Pilot
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleScroll("#solution")}
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Right: Product Preview Mock */}
        <motion.div
          className="hidden lg:block"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="glass rounded-card p-6 shadow-glow relative overflow-hidden"
            animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Window Controls + Tabs */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex gap-1 ml-4">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-200
                      ${activeTab === tab
                        ? "bg-primary/15 text-primary"
                        : "text-muted hover:text-foreground"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Metric Tiles */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="bg-white/[0.03] rounded-glass p-4 border border-border group hover:border-primary/30 transition-colors duration-300"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                >
                  <p className="text-[10px] text-muted mb-1">{m.label}</p>
                  <p className={`text-2xl font-bold ${m.color}`}>{m.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white/[0.03] rounded-glass p-5 border border-border mb-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-muted">Session Progress</p>
                <div className="flex gap-3">
                  <span className="text-[10px] text-primary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Attention
                  </span>
                  <span className="text-[10px] text-blue-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Gesture
                  </span>
                  <span className="text-[10px] text-purple-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Speech
                  </span>
                </div>
              </div>
              <div className="flex items-end gap-1 h-20">
                {[30, 45, 35, 60, 50, 65, 55, 75, 60, 80, 70, 85, 65, 90, 72].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        background:
                          i % 3 === 0
                            ? "linear-gradient(to top, rgba(24, 210, 196, 0.3), rgba(24, 210, 196, 0.8))"
                            : i % 3 === 1
                              ? "linear-gradient(to top, rgba(96, 165, 250, 0.2), rgba(96, 165, 250, 0.6))"
                              : "linear-gradient(to top, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.5))",
                      }}
                      initial={prefersReducedMotion ? { height: `${h}%` } : { height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{
                        duration: 0.8,
                        delay: 0.8 + i * 0.04,
                        ease: "easeOut",
                      }}
                    />
                  )
                )}
              </div>
            </div>

            {/* AI Summary Bubble */}
            <motion.div
              className="bg-primary/[0.06] border border-primary/20 rounded-glass p-4 flex items-start gap-3"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-medium text-primary mb-1">AI Summary</p>
                <p className="text-xs text-muted leading-relaxed">
                  Anika showed a 12% improvement in sustained attention this week.
                  Gesture imitation is progressing steadily. Consider introducing
                  &quot;Repeat With Me&quot; to support speech clarity next.
                </p>
              </div>
            </motion.div>

            {/* Live Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-[10px] text-primary">Live</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
