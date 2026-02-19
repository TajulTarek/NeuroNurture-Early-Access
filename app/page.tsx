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
import Founders from "@/components/sections/Founders";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
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
      <Founders />
      <Footer />
    </main>
  );
}
