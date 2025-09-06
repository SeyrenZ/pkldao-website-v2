import React, { useEffect, useState } from "react";

const PresaleBox = () => {
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
    <div className="w-full bg-[#1e1e1e] bg-opacity-80 rounded-[40px] px-8 py-6 shadow-2xl max-w-md">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-pkl-yellow mb-2 font-fredoka tracking-widest">
          Buy $PKL Token <br />
          <span className="text-white">in Presale Now!</span>
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
        {[
          { key: "days", value: countdownTime.days, label: "Days" },
          { key: "hours", value: countdownTime.hours, label: "Hours" },
          {
            key: "minutes",
            value: countdownTime.minutes,
            label: "Minutes",
          },
          {
            key: "seconds",
            value: countdownTime.seconds,
            label: "Seconds",
          },
        ].map(({ key, value, label }) => (
          <div
            key={key}
            className="countdown-item bg-white rounded-xl p-3 text-center font-fredoka"
          >
            <div
              className="text-2xl font-bold text-neutral-800/90"
              data-testid={`countdown-${key}`}
            >
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-900">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mb-2 font-fredoka font-semibold tracking-wide">
        <div className="text-center text-white text-sm mb-2">
          UNTIL PRICE INCREASE
        </div>
        <div className="bg-white rounded-full h-3 overflow-hidden">
          <div
            className="bg-pkl-green h-full rounded-full"
            style={{ width: `${presaleStats.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Stats */}
      <div className="text-center mb-6 space-y-2 font-fredoka tracking-widest">
        <div className="text-white">
          <span className="text-sm font-medium text-neutral-300">
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
          <span className="text-sm text-neutral-300 font-medium">
            1 $PKL ={" "}
          </span>
          <span className="font-bold" data-testid="text-current-price">
            ${presaleStats.currentPrice.toFixed(3)}
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 font-fredoka">
        <button
          className="w-full bg-pkl-green text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors"
          data-testid="button-buy-card"
        >
          Buy With Card
        </button>
        <button
          className="w-full bg-pkl-yellow text-neutral-800/90 py-4 rounded-xl font-semibold text-lg hover:bg-pkl-yellow/50 transition-colors"
          data-testid="button-buy-crypto"
        >
          Buy With Crypto
        </button>
      </div>

      <div className="text-center mt-4 font-fredoka uppercase font-medium underline">
        <a
          href="#"
          className="text-pkl-yellow text-sm hover:underline"
          data-testid="link-wallet-guide"
        >
          Don't have a wallet?
        </a>
      </div>
    </div>
  );
};

export default PresaleBox;
