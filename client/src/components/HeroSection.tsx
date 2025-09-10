import { useIsMobile } from "@/hooks/use-mobile";
import React, { useEffect, useState } from "react";
import PresaleBox from "./PresaleBox";

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
    <section className="sm:hero-gradient bg-pkl-green relative overflow-hidden pb-24 lg:pt-32 sm:pt-20 pt-14 flex items-center">
      <img
        src="/corner-circle.svg"
        alt="bg"
        className="absolute bottom-0 left-0 lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[80px] h-[80px] animate-fade-up-right"
        style={{ animationDelay: "100ms" }}
      />
      <img
        src="/corner-circle-top-right.svg"
        alt="bg"
        className="absolute top-0 right-0 lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[150px] hidden sm:block animate-fade-down-left"
        style={{ animationDelay: "200ms" }}
      />
      <img
        src="/corner-circle-bottom-right.svg"
        alt="bg"
        className="absolute bottom-0 right-0 lg:w-[130px] lg:h-[130px] md:w-[80px] md:h-[80px] w-[50px] h-[50px] animate-fade-up-left"
        style={{ animationDelay: "300ms" }}
      />
      <img
        src="/circle-left.svg"
        alt="bg"
        className="absolute left-0 bottom-0 top-0 my-auto hidden sm:block animate-fade-right"
        style={{ animationDelay: "400ms" }}
      />
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

      <div className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full flex lg:flex-row flex-col gap-12 items-center justify-between">
          {/* Left Content */}
          <div className="text-white sm:space-y-8 space-y-4 max-w-2xl ">
            <h1
              className="text-4xl lg:text-6xl font-bold leading-tight font-luckiest-guy tracking-widest text-center sm:text-left"
              style={{
                textShadow:
                  "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
              }}
            >
              World's First
              <span className="text-pkl-yellow "> Decentralized</span>
              <br />
              Pickleball Community
            </h1>
            <h2
              className="text-xl lg:text-2xl font-semibold font-fredoka text-center sm:text-left"
              style={{
                textShadow:
                  "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 3px 5px 0px rgba(0, 0, 0, 0.2)",
              }}
            >
              Players, clubs, and brands unite here to play, connect, and power
              a circular economy that keeps the sport in the hands of its
              community.
            </h2>
            <div className="sm:hidden py-4">
              <PresaleBox />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button className="bg-pkl-yellow text-pkl-green px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors font-fredoka">
                Join the Movement
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-pkl-green transition-colors font-fredoka">
                Buy $PKL Token
              </button>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 font-fredoka">
              <div className="flex items-center space-x-3">
                <div className="min-w-6 min-h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-green text-sm"></i>
                </div>
                <span className="sm:text-lg">
                  Play & Earn: climb leaderboards, win rewards, unlock
                  collectibles.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="min-w-6 min-h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-green text-sm"></i>
                </div>
                <span className="sm:text-lg">
                  All-in-One Platform: profiles, marketplace, messaging, and
                  events.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="min-w-6 min-h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-green text-sm"></i>
                </div>
                <span className="sm:text-lg">
                  Real Utility: pay for gear, tickets, and prizes with $PKL.
                </span>
              </div>
            </div>
          </div>

          {/* Right Presale Box */}
          <div className="sm:block hidden">
            <PresaleBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
