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
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-50/60 to-transparent pointer-events-none" />

      {/* Child silhouette illustration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-10 w-[200px] h-[200px] opacity-[0.04]">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="100" cy="60" r="30" fill="#0D9488"/>
            <ellipse cx="100" cy="140" rx="40" ry="50" fill="#0D9488"/>
            <path d="M40 40 L44 50 L54 54 L44 58 L40 68 L36 58 L26 54 L36 50Z" fill="#F59E0B"/>
            <path d="M160 30 L163 38 L171 41 L163 44 L160 52 L157 44 L149 41 L157 38Z" fill="#8B5CF6"/>
          </svg>
        </div>
        <div className="absolute top-10 right-16 w-[150px] h-[150px] opacity-[0.04]">
          <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M75 40 Q90 40 90 55 Q105 55 105 70 Q105 85 90 85 Q90 100 75 100 Q60 100 60 85 Q45 85 45 70 Q45 55 60 55 Q60 40 75 40Z" fill="#0D9488"/>
            <path d="M30 120 L34 132 L46 136 L34 140 L30 152 L26 140 L14 136 L26 132Z" fill="#F59E0B" opacity="0.6"/>
          </svg>
        </div>
      </div>

      <AnimatedBlob
        color="teal"
        size="lg"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Support{" "}
            <span className="text-gradient">Every Child’s Growth?</span>
          </h2>
          <p className="text-muted text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Join the families, schools, and clinicians using game-based
            insights to guide developmental support — one play session at a time.
          </p>
          <Button onClick={handleScroll} className="!px-12 !py-5 text-base">
            Request Early Access
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
