import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PlayerProfileSection from "@/components/PlayerProfileSection";
import EcosystemSection from "@/components/EcosystemSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import PKLCardSection from "@/components/PKLCardSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <PlayerProfileSection />
      <EcosystemSection />
      <KeyFeaturesSection />
      <TokenomicsSection />
      <RoadmapSection />
      <PKLCardSection />
      <FAQSection />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Home;
