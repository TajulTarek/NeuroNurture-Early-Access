"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import EarlyAccessForm from "@/components/forms/EarlyAccessForm";

export default function EarlyAccess() {
  return (
    <SectionWrapper id="early-access">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            Join Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get{" "}
            <span className="text-gradient">Early Access</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Be among the first to experience Neuro Nurture. No cost, no
            obligation — just priority access to game-based developmental support.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="max-w-[640px] mx-auto">
          <div className="glass rounded-card p-8 md:p-10 shadow-glow-sm">
            <EarlyAccessForm />
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
