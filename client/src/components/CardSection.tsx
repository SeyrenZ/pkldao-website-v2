import React from "react";

const CardSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
      id="pkl-card"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pkl-green/10 to-pkl-yellow/10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 floating-element opacity-20">
        <div className="w-32 h-32 bg-pkl-green/20 rounded-3xl backdrop-blur-sm"></div>
      </div>
      <div
        className="absolute bottom-20 left-20 floating-element opacity-15"
        style={{ animationDelay: "3s" }}
      >
        <div className="w-24 h-24 bg-pkl-yellow/20 rounded-2xl backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            PKL <span className="text-pkl-yellow">Card</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            The first VISA card fully integrated with the PKL ecosystem. Spend
            your $PKL tokens anywhere VISA is accepted worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Card Visual */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="perspective-1000">
              <div
                className="card-3d bg-gradient-to-br from-pkl-green to-green-600 rounded-3xl p-8 shadow-2xl transform hover:rotate-y-6 transition-transform duration-500 w-[480px] h-[300px]"
                data-testid="pkl-card-visual"
              >
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-pkl-yellow/30 rounded-xl blur-xl"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    {/* VISA Logo */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-white font-bold text-2xl">
                        PKL.CLUB
                      </div>
                      <div className="text-white font-bold text-3xl italic">
                        VISA
                      </div>
                    </div>

                    {/* Chip */}
                    <div className="w-16 h-12 bg-gold rounded-lg mb-8 bg-gradient-to-br from-yellow-200 to-yellow-400"></div>

                    {/* Card Number */}
                    <div className="text-white font-mono text-2xl mb-8 tracking-wider">
                      •••• •••• •••• 2024
                    </div>
                  </div>

                  {/* Bottom Section - Card Details */}
                  <div className="flex justify-between items-end pb-2">
                    <div>
                      <div className="text-neutral-200 text-sm mb-1">
                        CARD HOLDER
                      </div>
                      <div className="text-white font-semibold text-lg">
                        PKL MEMBER
                      </div>
                    </div>
                    <div>
                      <div className="text-neutral-200 text-sm mb-1">
                        EXPIRES
                      </div>
                      <div className="text-white font-semibold text-lg">
                        12/29
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-pkl-green/20 rounded-2xl blur-3xl transform scale-110 -z-10"></div>
          </div>

          {/* Right: Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div
                className="flex items-start space-x-4"
                data-testid="card-feature-spending"
              >
                <div className="w-12 h-12 bg-pkl-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-credit-card text-pkl-green text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Spend Worldwide
                  </h3>
                  <p className="text-neutral-300">
                    Use your PKL Card at over 100 million VISA acceptance points
                    worldwide. From local restaurants to online stores.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start space-x-4"
                data-testid="card-feature-rewards"
              >
                <div className="w-12 h-12 bg-pkl-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-gift text-pkl-yellow text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    PKL Rewards on Every Purchase
                  </h3>
                  <p className="text-neutral-300">
                    Earn 2% PKL tokens back on all purchases and 5% on
                    pickleball-related expenses. Build your PKL portfolio by
                    spending.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start space-x-4"
                data-testid="card-feature-conversion"
              >
                <div className="w-12 h-12 bg-pkl-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-exchange-alt text-pkl-orange text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Instant PKL to Fiat Conversion
                  </h3>
                  <p className="text-neutral-300">
                    Your PKL tokens are automatically converted to EUR/USD at
                    the moment of payment at the best exchange rate.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start space-x-4"
                data-testid="card-feature-premium"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-crown text-purple-400 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Premium Benefits
                  </h3>
                  <p className="text-neutral-300">
                    No monthly fees, no foreign transaction fees, and exclusive
                    access to PKL events and tournaments.
                  </p>
                </div>
              </div>
            </div>

            {/* Card Benefits Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-700">
              <div className="text-center" data-testid="card-stat-locations">
                <div className="text-3xl font-bold text-pkl-yellow mb-2">
                  100M+
                </div>
                <div className="text-neutral-300">VISA Acceptance Points</div>
              </div>
              <div className="text-center" data-testid="card-stat-countries">
                <div className="text-3xl font-bold text-pkl-green mb-2">
                  200+
                </div>
                <div className="text-neutral-300">Countries & Territories</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-6">
              <button
                className="w-full bg-pkl-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
                data-testid="button-request-pkl-card"
              >
                Request PKL Card
              </button>
              <button
                className="w-full bg-transparent border-2 border-pkl-yellow text-pkl-yellow py-4 rounded-xl font-bold text-lg hover:bg-pkl-yellow hover:text-black transition-colors"
                data-testid="button-learn-more-card"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div
            className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm"
            data-testid="card-feature-security"
          >
            <div className="w-16 h-16 bg-pkl-green/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-shield-alt text-pkl-green text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              Bank-Level Security
            </h3>
            <p className="text-neutral-300 text-center">
              EMV chip technology, 3D Secure verification, and real-time fraud
              monitoring protect every transaction.
            </p>
          </div>

          <div
            className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm"
            data-testid="card-feature-management"
          >
            <div className="w-16 h-16 bg-pkl-yellow/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-mobile-alt text-pkl-yellow text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              PKL App Integration
            </h3>
            <p className="text-neutral-300 text-center">
              Manage your card directly from the PKL.CLUB app. Real-time
              notifications, spending controls, and transaction history.
            </p>
          </div>

          <div
            className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm"
            data-testid="card-feature-ecosystem"
          >
            <div className="w-16 h-16 bg-pkl-orange/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-network-wired text-pkl-orange text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              Ecosystem Benefits
            </h3>
            <p className="text-neutral-300 text-center">
              Unlock special discounts with PKL partners, early access to
              events, and premium marketplace privileges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
