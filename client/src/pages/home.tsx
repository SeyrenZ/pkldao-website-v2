import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BuyPKL from "@/components/BuyPKL";
import PKLProfileSection from "@/components/PKLProfileSection";
import Ecosystem from "@/components/Ecosystem";
import KeyFeatures from "@/components/KeyFeatures";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import HowToBuy from "@/components/HowToBuy";
import CardSection from "@/components/CardSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ConnectWallet from "@/components/ConnectWallet";
import Play4Pickles from "@/components/Play4Pickles";

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-pkl-white min-h-screen pb-14 sm:pb-0 overflow-hidden">
      <Navbar />
      <HeroSection />
      <BuyPKL />
      <PKLProfileSection />
      <Play4Pickles />
      <Ecosystem />
      <KeyFeatures />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <CardSection />
      <FAQSection />
      <Footer />

      {/* Mobile Sticky CTA */}
      {isMobile && (
        <div className="sticky-mobile-cta fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
          <div className="flex items-center gap-3">
            <button
              className="flex-1 bg-pkl-transparent border-pkl-green border-2 text-pkl-green py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-colors"
              data-testid="button-mobile-buy-pkl"
            >
              Buy $PKL
            </button>
            <ConnectWallet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
