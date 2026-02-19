"use client";

import { PROBLEM_CARDS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

export default function Problem() {
  return (
    <SectionWrapper id="problem">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Autism support is often{" "}
            <span className="text-gradient">disconnected.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Schools, parents, and doctors all want to help — but without shared tools
            or continuous insight, critical early signals are missed and support stays fragmented.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROBLEM_CARDS.map((card, index) => (
          <StaggerItem
            key={card.title}
            className={index === 3 ? "md:col-span-1 lg:col-start-1" : index === 4 ? "md:col-span-1 lg:col-start-2" : ""}
          >
            <GlassCard className="h-full group hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
              <card.icon className="w-8 h-8 text-primary mb-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {card.description}
              </p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
