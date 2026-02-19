import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import CoreModules from "@/components/sections/CoreModules";
import RoleBenefits from "@/components/sections/RoleBenefits";
import WhyDifferent from "@/components/sections/WhyDifferent";
import PrivacyControl from "@/components/sections/PrivacyControl";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import EarlyAccess from "@/components/sections/EarlyAccess";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Subtle warm decorative blobs throughout */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[30%] -right-40 w-[500px] h-[500px] bg-warm-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] -left-40 w-[400px] h-[400px] bg-sky-light/40 rounded-full blur-[120px]" />
        <div className="absolute top-[85%] right-20 w-[300px] h-[300px] bg-lavender/30 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <CoreModules />
      <RoleBenefits />
      <WhyDifferent />
      <PrivacyControl />
      <FAQ />
      <FinalCTA />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
