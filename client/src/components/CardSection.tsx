import React from "react";

// Feature data structure
interface Feature {
  icon: string;
  iconColor: string;
  bgColor: string;
  title: string;
  description: string;
  testId: string;
}

// Reusable Feature Item Component
const FeatureItem: React.FC<Feature> = ({
  icon,
  iconColor,
  bgColor,
  title,
  description,
  testId,
}) => (
  <div className="flex items-start space-x-3 sm:space-x-4" data-testid={testId}>
    <div
      className={`w-10 h-10 sm:w-12 sm:h-12 bg-zinc-100 rounded-xl flex items-center justify-center flex-shrink-0`}
    >
      <i className={`fas ${icon} text-pkl-green text-lg sm:text-xl`}></i>
    </div>
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-neutral-800/90 mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-neutral-600">{description}</p>
    </div>
  </div>
);

// Grid Feature Component
interface GridFeature {
  icon: string;
  iconColor: string;
  bgColor: string;
  title: string;
  description: string;
  testId: string;
}

const GridFeatureItem: React.FC<GridFeature> = ({
  icon,
  iconColor,
  bgColor,
  title,
  description,
  testId,
}) => (
  <div
    className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 border border-neutral-200"
    data-testid={testId}
  >
    <div
      className={`w-12 h-12 sm:w-16 sm:h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto`}
    >
      <i className={`fas ${icon} ${iconColor} text-xl sm:text-2xl`}></i>
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-neutral-800/90 text-center mb-3 sm:mb-4">
      {title}
    </h3>
    <p className="text-sm sm:text-base text-neutral-600 text-center">
      {description}
    </p>
  </div>
);

// Button Component
interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  testId: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  testId,
  className = "",
}) => {
  const baseClasses =
    "w-full py-4 rounded-xl font-bold text-lg transition-colors";
  const variantClasses =
    variant === "primary"
      ? "bg-pkl-green text-white hover:bg-green-600 shadow-lg"
      : "bg-transparent border-2 border-pkl-yellow text-pkl-yellow hover:bg-pkl-yellow hover:text-black";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      data-testid={testId}
    >
      {children}
    </button>
  );
};

const CardSection = () => {
  // Feature data
  const features: Feature[] = [
    {
      icon: "fa-credit-card",
      iconColor: "text-pkl-green",
      bgColor: "bg-pkl-green/20",
      title: "Spend Worldwide",
      description:
        "Use your PKL Card at over 100 million VISA acceptance points worldwide. From local restaurants to online stores.",
      testId: "card-feature-spending",
    },
    {
      icon: "fa-gift",
      iconColor: "text-pkl-yellow",
      bgColor: "bg-pkl-yellow/20",
      title: "PKL Rewards on Every Purchase",
      description:
        "Earn 2% PKL tokens back on all purchases and 5% on pickleball-related expenses. Build your PKL portfolio by spending.",
      testId: "card-feature-rewards",
    },
    {
      icon: "fa-exchange-alt",
      iconColor: "text-pkl-orange",
      bgColor: "bg-pkl-orange/20",
      title: "Instant PKL to Fiat Conversion",
      description:
        "Your PKL tokens are automatically converted to EUR/USD at the moment of payment at the best exchange rate.",
      testId: "card-feature-conversion",
    },
    {
      icon: "fa-crown",
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/20",
      title: "Premium Benefits",
      description:
        "No monthly fees, no foreign transaction fees, and exclusive access to PKL events and tournaments.",
      testId: "card-feature-premium",
    },
  ];

  const gridFeatures: GridFeature[] = [
    {
      icon: "fa-shield-alt",
      iconColor: "text-pkl-green",
      bgColor: "bg-pkl-green/20",
      title: "Bank-Level Security",
      description:
        "EMV chip technology, 3D Secure verification, and real-time fraud monitoring protect every transaction.",
      testId: "card-feature-security",
    },
    {
      icon: "fa-mobile-alt",
      iconColor: "text-pkl-yellow",
      bgColor: "bg-pkl-yellow/20",
      title: "PKL App Integration",
      description:
        "Manage your card directly from the PKL.CLUB app. Real-time notifications, spending controls, and transaction history.",
      testId: "card-feature-management",
    },
    {
      icon: "fa-network-wired",
      iconColor: "text-pkl-orange",
      bgColor: "bg-pkl-orange/20",
      title: "Ecosystem Benefits",
      description:
        "Unlock special discounts with PKL partners, early access to events, and premium marketplace privileges.",
      testId: "card-feature-ecosystem",
    },
  ];
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden"
      id="pkl-card"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pkl-green/10 to-pkl-yellow/10"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-4 sm:top-20 sm:right-20 floating-element opacity-20">
        <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-pkl-green/20 rounded-2xl sm:rounded-3xl backdrop-blur-sm"></div>
      </div>
      <div
        className="absolute bottom-10 left-4 sm:bottom-20 sm:left-20 floating-element opacity-15"
        style={{ animationDelay: "3s" }}
      >
        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-pkl-yellow/20 rounded-xl sm:rounded-2xl backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800/90 mb-4 sm:mb-6 font-luckiest-guy tracking-widest">
            PKL Card
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
            The first VISA card fully integrated with the PKL ecosystem. Spend
            your $PKL tokens anywhere VISA is accepted worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Card Visual */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="perspective-1000 w-full max-w-md lg:max-w-none">
              <div
                className="card-3d bg-gradient-to-br from-pkl-green to-green-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:rotate-y-6 transition-transform duration-500 w-full aspect-[8/5] max-w-[480px] h-auto"
                data-testid="pkl-card-visual"
              >
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full blur-xl sm:blur-2xl"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-pkl-yellow/30 rounded-lg sm:rounded-xl blur-lg sm:blur-xl"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    {/* VISA Logo */}
                    <div className="flex justify-between items-start mb-2 sm:mb-3 lg:mb-4">
                      <div className="text-white font-bold text-lg sm:text-xl lg:text-2xl">
                        PKL.CLUB
                      </div>
                      <div className="text-white font-bold text-xl sm:text-2xl lg:text-3xl italic">
                        VISA
                      </div>
                    </div>

                    {/* Chip */}
                    <div className="w-10 h-8 sm:w-12 sm:h-9 lg:w-16 lg:h-12 bg-gold rounded-lg sm:rounded-xl mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-br from-yellow-200 to-yellow-400"></div>

                    {/* Card Number */}
                    <div className="text-white font-mono text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-8 tracking-wider">
                      •••• •••• •••• 2025
                    </div>
                  </div>

                  {/* Bottom Section - Card Details */}
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-neutral-200 text-xs sm:text-sm mb-1">
                        CARD HOLDER
                      </div>
                      <div className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                        PKL MEMBER
                      </div>
                    </div>
                    <div>
                      <div className="text-neutral-200 text-xs sm:text-sm mb-1">
                        EXPIRES
                      </div>
                      <div className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                        12/30
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
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>

            {/* Card Benefits Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 lg:pt-8 border-t border-gray-200">
              <div className="text-center" data-testid="card-stat-locations">
                <div className="text-2xl sm:text-3xl font-bold text-pkl-orange mb-1 sm:mb-2">
                  100M+
                </div>
                <div className="text-sm sm:text-base text-neutral-600">
                  VISA Acceptance Points
                </div>
              </div>
              <div className="text-center" data-testid="card-stat-countries">
                <div className="text-2xl sm:text-3xl font-bold text-pkl-green mb-1 sm:mb-2">
                  200+
                </div>
                <div className="text-sm sm:text-base text-neutral-600">
                  Countries & Territories
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
              <button
                className="w-full bg-pkl-green text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-600 transition-colors shadow-lg"
                data-testid="button-request-pkl-card"
              >
                Request PKL Card
              </button>
              <button
                className="w-full bg-transparent border-2 border-pkl-green text-pkl-green py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-pkl-green hover:text-white transition-colors"
                data-testid="button-learn-more-card"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {gridFeatures.map((feature, index) => (
            <GridFeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
