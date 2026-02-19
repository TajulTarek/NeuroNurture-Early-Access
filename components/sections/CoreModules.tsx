"use client";

import { CORE_MODULES } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

export default function CoreModules() {
  return (
    <SectionWrapper id="modules">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            Core Modules
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Core{" "}
            <span className="text-gradient">game modules</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Five fun, evidence-informed activities designed by child development
            specialists — each targeting a key developmental area through play.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CORE_MODULES.map((mod, index) => (
          <StaggerItem
            key={mod.title}
            className={
              index >= 3
                ? "lg:col-span-1 " +
                  (index === 3 ? "lg:col-start-1" : "lg:col-start-2")
                : ""
            }
          >
            <GlassCard className="h-full relative overflow-hidden group hover:border-primary/30 hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-300">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <mod.icon
                className="w-8 h-8 text-primary mb-5 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {mod.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {mod.description}
              </p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
