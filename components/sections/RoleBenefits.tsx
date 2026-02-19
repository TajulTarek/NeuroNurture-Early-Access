"use client";

import { ROLE_BENEFITS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { Check } from "lucide-react";

export default function RoleBenefits() {
  return (
    <SectionWrapper id="benefits">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            Who It&apos;s For
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built for everyone{" "}
            <span className="text-gradient">around the child.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Parents, doctors, and educators — everyone involved in a child&apos;s
            development gets the tools and insights they need, in a language they understand.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ROLE_BENEFITS.map((item) => (
          <StaggerItem key={item.role}>
            <GlassCard className="h-full group relative overflow-hidden">
              {/* Left accent on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/0 group-hover:bg-primary transition-all duration-300" />

              <item.icon
                className="w-8 h-8 text-primary mb-5"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold text-foreground mb-5">
                {item.role}
              </h3>
              <ul className="space-y-3">
                {item.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </span>
                    <span className="text-sm text-muted leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
