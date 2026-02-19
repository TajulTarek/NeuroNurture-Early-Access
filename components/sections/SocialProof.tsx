"use client";

import { PARTNER_LOGOS, STATS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

export default function SocialProof() {
  return (
    <section className="py-section-sm lg:py-section max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <div className="border-t border-b border-border py-16">
          {/* Partner Logos */}
          <p className="text-xs text-muted text-center uppercase tracking-[0.2em] mb-10">
            Built with input from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-16">
            {PARTNER_LOGOS.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-muted/40 tracking-wide grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Stats */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <div className="glass rounded-glass p-6 border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-300">
                  <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </ScrollReveal>
    </section>
  );
}
