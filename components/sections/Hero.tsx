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
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-50 via-background to-sky-light/30 pointer-events-none" />

      {/* Child illustration background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] opacity-[0.06]">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Playful child silhouettes */}
            <circle cx="200" cy="120" r="45" fill="#0D9488"/>
            <ellipse cx="200" cy="230" rx="60" ry="75" fill="#0D9488"/>
            <circle cx="160" cy="280" r="12" fill="#0D9488"/>
            <circle cx="240" cy="280" r="12" fill="#0D9488"/>
            {/* Stars / sparkles */}
            <path d="M80 60 L85 75 L100 80 L85 85 L80 100 L75 85 L60 80 L75 75Z" fill="#F59E0B"/>
            <path d="M320 50 L323 58 L331 61 L323 64 L320 72 L317 64 L309 61 L317 58Z" fill="#0D9488"/>
            <path d="M50 200 L53 208 L61 211 L53 214 L50 222 L47 214 L39 211 L47 208Z" fill="#8B5CF6"/>
            <path d="M340 180 L343 188 L351 191 L343 194 L340 202 L337 194 L329 191 L337 188Z" fill="#F59E0B"/>
            {/* Puzzle piece */}
            <path d="M280 300 Q295 300 295 315 Q310 315 310 330 Q310 345 295 345 Q295 360 280 360 Q265 360 265 345 Q250 345 250 330 Q250 315 265 315 Q265 300 280 300Z" fill="#0D9488" opacity="0.5"/>
            {/* Heart */}
            <path d="M100 320 C100 310 115 305 120 315 C125 305 140 310 140 320 C140 335 120 350 120 350 C120 350 100 335 100 320Z" fill="#F87171" opacity="0.4"/>
            {/* Game controller outline */}
            <rect x="60" y="130" width="50" height="35" rx="10" fill="#0D9488" opacity="0.3"/>
            <circle cx="75" cy="147" r="5" fill="#FEFCF9"/>
            <circle cx="95" cy="147" r="5" fill="#FEFCF9"/>
          </svg>
        </div>
        <div className="absolute -top-10 -left-10 w-[400px] h-[400px] opacity-[0.04]">
          <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="150" cy="100" r="35" fill="#8B5CF6"/>
            <ellipse cx="150" cy="190" rx="45" ry="60" fill="#8B5CF6"/>
            <path d="M50 250 L55 265 L70 270 L55 275 L50 290 L45 275 L30 270 L45 265Z" fill="#F59E0B"/>
            <path d="M250 40 L254 52 L266 56 L254 60 L250 72 L246 60 L234 56 L246 52Z" fill="#0D9488"/>
          </svg>
        </div>
      </div>

      {/* Background Blobs */}
      <AnimatedBlob
        color="teal"
        size="lg"
        className="-top-40 -right-40 opacity-30"
      />
      <AnimatedBlob
        color="purple"
        size="md"
        className="bottom-20 -left-40 opacity-20"
        delay={4}
      />
      <AnimatedBlob
        color="blue"
        size="sm"
        className="top-1/3 left-1/4 opacity-15"
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
                  className="bg-white/60 rounded-glass p-4 border border-border group hover:border-primary/30 transition-colors duration-300"
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
            <div className="bg-white/60 rounded-glass p-5 border border-border mb-5">
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
              className="bg-primary/[0.08] border border-primary/15 rounded-glass p-4 flex items-start gap-3"
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
