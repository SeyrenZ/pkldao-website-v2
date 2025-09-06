import React, { useState } from "react";

const HowToBuy = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800/90 mb-6">
            How To Buy $PKL Token
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Start your journey in the PKL.CLUB ecosystem by purchasing tokens in
            the presale. Connect your wallet or directly above by connecting
            your wallet to the secure web3payments widget.
          </p>

          <div className="flex justify-center space-x-4">
            <button
              className="bg-pkl-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
              data-testid="button-buy-here"
            >
              Buy Here
            </button>
            <button
              className="bg-white text-pkl-green border border-pkl-green px-6 py-3 rounded-xl font-semibold hover:bg-pkl-green hover:text-white transition-colors"
              data-testid="button-buy-in-pkl"
            >
              Buy in PKL.CLUB
            </button>
          </div>
        </div>

        {/* Accordion Steps */}
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Step 1 */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-100"
            data-testid="step-1"
          >
            <button
              onClick={() => toggleStep(1)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pkl-green rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800/90">
                    Connect your wallet or register in PKL.CLUB
                  </h3>
                  <p className="text-neutral-600">
                    Set up your account to get started
                  </p>
                </div>
              </div>
              <i
                className={`fas fa-chevron-down text-neutral-400 transform transition-transform ${
                  openStep === 1 ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            {openStep === 1 && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <p className="text-neutral-600 leading-relaxed">
                  Set up your crypto wallet (MetaMask, WalletConnect, etc.) or
                  create an account directly on our platform. This is your
                  gateway to the PKL.CLUB ecosystem and allows you to securely
                  purchase and manage your tokens.
                </p>
              </div>
            )}
          </div>

          {/* Step 2 */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-100"
            data-testid="step-2"
          >
            <button
              onClick={() => toggleStep(2)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pkl-yellow rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-neutral-800/90">
                    2
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800/90">
                    Choose your $PKL amount
                  </h3>
                  <p className="text-neutral-600">
                    Select your investment amount
                  </p>
                </div>
              </div>
              <i
                className={`fas fa-chevron-down text-neutral-400 transform transition-transform ${
                  openStep === 2 ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            {openStep === 2 && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <p className="text-neutral-600 leading-relaxed">
                  Decide how many $PKL tokens you want to purchase during the
                  presale. You can start with any amount that fits your budget.
                  Remember, early participants get the best prices and exclusive
                  benefits.
                </p>
              </div>
            )}
          </div>

          {/* Step 3 */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-100"
            data-testid="step-3"
          >
            <button
              onClick={() => toggleStep(3)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pkl-orange rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800/90">
                    Buy with Card or Crypto
                  </h3>
                  <p className="text-neutral-600">
                    Complete your purchase securely
                  </p>
                </div>
              </div>
              <i
                className={`fas fa-chevron-down text-neutral-400 transform transition-transform ${
                  openStep === 3 ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            {openStep === 3 && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <p className="text-neutral-600 leading-relaxed">
                  Complete your purchase using your preferred payment method. We
                  accept major credit cards for convenience or cryptocurrency
                  (ETH, USDT, BTC) for those who prefer decentralized payments.
                  All transactions are secure and instant.
                </p>
              </div>
            )}
          </div>

          {/* Step 4 */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-100"
            data-testid="step-4"
          >
            <button
              onClick={() => toggleStep(4)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800/90">
                    Claim your tokens instantly
                  </h3>
                  <p className="text-neutral-600">
                    Start using $PKL immediately
                  </p>
                </div>
              </div>
              <i
                className={`fas fa-chevron-down text-neutral-400 transform transition-transform ${
                  openStep === 4 ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            {openStep === 4 && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <p className="text-neutral-600 leading-relaxed">
                  Receive your $PKL tokens immediately after purchase and start
                  using them right away in the PKL.CLUB ecosystem. Join
                  tournaments, trade in the marketplace, stake for rewards, and
                  participate in community governance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
