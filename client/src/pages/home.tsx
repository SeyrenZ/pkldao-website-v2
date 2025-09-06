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

const Home = () => {
  const [countdownTime, setCountdownTime] = useState({
    days: 7,
    hours: 14,
    minutes: 28,
    seconds: 42,
  });

  const [presaleStats, setPresaleStats] = useState({
    totalRaised: 2847293.84,
    currentPrice: 0.045,
    progress: 75,
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <div className="bg-pkl-white min-h-screen">
      <Navbar />
      <HeroSection />
      {/* <BuyPKL /> */}
      {/* <PKLProfileSection /> */}
      {/* <Ecosystem /> */}
      {/* <KeyFeatures /> */}
      {/* <Tokenomics /> */}
      {/* <Roadmap /> */}
      {/* <HowToBuy /> */}
      {/* <CardSection /> */}
      {/* <FAQSection /> */}
      {/* <Footer /> */}

      {/* Mobile Sticky CTA */}
      {isMobile && (
        <div className="sticky-mobile-cta fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
          <div className="flex space-x-3">
            <button
              className="flex-1 bg-pkl-green text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
              data-testid="button-mobile-buy-pkl"
            >
              Buy $PKL
            </button>
            <button
              className="flex-1 bg-pkl-orange text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors"
              data-testid="button-mobile-connect-wallet"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
