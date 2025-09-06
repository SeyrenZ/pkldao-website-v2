import { useIsMobile } from "@/hooks/use-mobile";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
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
  return (
    <section className="hero-gradient relative overflow-hidden py-28 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-pkl-green/20 to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-element opacity-30">
        <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm"></div>
      </div>
      <div
        className="absolute top-40 right-20 floating-element opacity-40"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-16 h-16 bg-pkl-yellow/30 rounded-xl backdrop-blur-sm"></div>
      </div>
      <div
        className="absolute bottom-32 left-1/4 floating-element opacity-25"
        style={{ animationDelay: "4s" }}
      >
        <div className="w-24 h-24 bg-white/15 rounded-2xl backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              World's First
              <span className="text-pkl-yellow"> Decentralized</span>
              <br />
              Pickleball Community
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold">
              The PKL Token is Coming Soon!
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join the revolution in decentralized sports communities. The
              future of Pickleball is almost here!
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-green text-sm"></i>
                </div>
                <span className="text-lg">
                  Play & Earn: climb leaderboards, win rewards, unlock
                  collectibles.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-green text-sm"></i>
                </div>
                <span className="text-lg">
                  All-in-One Platform: profiles, marketplace, messaging, and
                  events.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-green text-sm"></i>
                </div>
                <span className="text-lg">
                  Real Utility: pay for gear, tickets, and prizes with $PKL.
                </span>
              </div>
            </div>
          </div>

          {/* Right Presale Box */}
          <div className="lg:sticky lg:top-24 presale-box">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl max-w-md mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Buy $PKL Token in Presale Now!
                </h3>
                <div className="flex justify-center space-x-1 mb-4">
                  <div className="w-2 h-2 bg-pkl-yellow rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-pkl-yellow rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-pkl-yellow rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                <div className="countdown-item bg-white/10 rounded-lg p-3 text-center">
                  <div
                    className="text-2xl font-bold text-white"
                    data-testid="countdown-days"
                  >
                    {String(countdownTime.days).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-300">Days</div>
                </div>
                <div className="countdown-item bg-white/10 rounded-lg p-3 text-center">
                  <div
                    className="text-2xl font-bold text-white"
                    data-testid="countdown-hours"
                  >
                    {String(countdownTime.hours).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-300">Hours</div>
                </div>
                <div className="countdown-item bg-white/10 rounded-lg p-3 text-center">
                  <div
                    className="text-2xl font-bold text-white"
                    data-testid="countdown-minutes"
                  >
                    {String(countdownTime.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-300">Minutes</div>
                </div>
                <div className="countdown-item bg-white/10 rounded-lg p-3 text-center">
                  <div
                    className="text-2xl font-bold text-white"
                    data-testid="countdown-seconds"
                  >
                    {String(countdownTime.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-300">Seconds</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="text-center text-white text-sm mb-2">
                  UNTIL PRICE INCREASE
                </div>
                <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="progress-bar h-full rounded-full"
                    style={{ width: `${presaleStats.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Stats */}
              <div className="text-center mb-6 space-y-2">
                <div className="text-white">
                  <span className="text-sm text-gray-300">
                    TOTAL USD RAISED:{" "}
                  </span>
                  <span className="font-bold" data-testid="text-total-raised">
                    $
                    {presaleStats.totalRaised.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div className="text-white">
                  <span className="text-sm text-gray-300">1 $PKL = </span>
                  <span className="font-bold" data-testid="text-current-price">
                    ${presaleStats.currentPrice.toFixed(3)}
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button
                  className="w-full bg-pkl-green text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors"
                  data-testid="button-buy-card"
                >
                  Buy With Card
                </button>
                <button
                  className="w-full bg-pkl-orange text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-600 transition-colors"
                  data-testid="button-buy-crypto"
                >
                  Buy With Crypto
                </button>
              </div>

              <div className="text-center mt-4">
                <a
                  href="#"
                  className="text-pkl-yellow text-sm hover:underline"
                  data-testid="link-wallet-guide"
                >
                  Don't have a wallet?
                </a>
              </div>

              <div className="text-center mt-4 text-xs text-gray-400">
                Ethereum-based • Secure • Instant utility
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
