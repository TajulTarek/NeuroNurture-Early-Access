"use client";

import AnimatedBlob from "@/components/ui/AnimatedBlob";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  const handleScroll = () => {
    document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-section-sm lg:py-section overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
      <AnimatedBlob
        color="teal"
        size="lg"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform{" "}
            <span className="text-gradient">Neurological Care?</span>
          </h2>
          <p className="text-muted text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Join the institutions pioneering the next generation of
            neurological assessment, monitoring, and care coordination.
          </p>
          <Button onClick={handleScroll} className="!px-12 !py-5 text-base">
            Request Early Access
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
