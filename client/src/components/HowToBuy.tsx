import React, { useState } from "react";

const HowToBuy = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  const steps = [
    {
      id: 1,
      title: "Connect your wallet or register in PKL.CLUB",
      subtitle: "Set up your account to get started",
      content:
        "Set up your crypto wallet (MetaMask, WalletConnect, etc.) or create an account directly on our platform. This is your gateway to the PKL.CLUB ecosystem and allows you to securely purchase and manage your tokens.",
    },
    {
      id: 2,
      title: "Choose your $PKL amount",
      subtitle: "Select your investment amount",
      content:
        "Decide how many $PKL tokens you want to purchase during the presale. You can start with any amount that fits your budget. Remember, early participants get the best prices and exclusive benefits.",
    },
    {
      id: 3,
      title: "Buy with Card or Crypto",
      subtitle: "Complete your purchase securely",
      content:
        "Complete your purchase using your preferred payment method. We accept major credit cards for convenience or cryptocurrency (ETH, USDT, BTC) for those who prefer decentralized payments. All transactions are secure and instant.",
    },
    {
      id: 4,
      title: "Claim your tokens instantly",
      subtitle: "Start using $PKL immediately",
      content:
        "Receive your $PKL tokens immediately after purchase and start using them right away in the PKL.CLUB ecosystem. Join tournaments, trade in the marketplace, stake for rewards, and participate in community governance.",
    },
  ];
  return (
    <section className="py-20 hero-gradient relative">
      <img
        src="/corner-circle.svg"
        alt="bg"
        className="absolute top-0 right-0 lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[80px] h-[80px] animate-fade-up-right rotate-180"
        style={{ animationDelay: "100ms" }}
      />
      <img
        src="/corner-circle.svg"
        alt="bg"
        className="absolute top-0 left-0 lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[80px] h-[80px] animate-fade-up-right rotate-90"
        style={{ animationDelay: "100ms" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6 font-luckiest-guy tracking-widest"
            style={{
              textShadow:
                "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            How To <span className="text-pkl-yellow">Buy</span> $PKL Token
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Start your journey in the PKL.CLUB ecosystem by purchasing tokens in
            the presale. Connect your wallet or directly above by connecting
            your wallet to the secure web3payments widget.
          </p>

          <div className="flex justify-center space-x-4">
            <button
              className="bg-transparent text-pkl-yellow border-2 border-pkl-yellow px-6 py-3 rounded-xl font-semibold hover:bg-pkl-yellow hover:text-neutral-800/90 transition-colors"
              data-testid="button-buy-here"
            >
              Buy Here
            </button>
            <button
              className="bg-pkl-yellow text-neutral-800/90 px-6 py-3 rounded-xl font-semibold hover:bg-pkl-yellow/90 transition-colors"
              data-testid="button-buy-in-pkl"
            >
              Buy in PKL.CLUB
            </button>
          </div>
        </div>

        {/* Accordion Steps */}
        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100"
              data-testid={`step-${step.id}`}
            >
              <button
                onClick={() => toggleStep(step.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pkl-green rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {step.id}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800/90">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600">{step.subtitle}</p>
                  </div>
                </div>
                <i
                  className={`fas fa-chevron-down text-neutral-400 transform transition-transform ${
                    openStep === step.id ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openStep === step.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-6 border-t border-gray-100">
                  <p className="text-neutral-600 leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
