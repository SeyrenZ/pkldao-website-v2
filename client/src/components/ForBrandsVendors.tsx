import React from "react";

interface FeatureItemProps {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  iconBg,
  title,
  description,
}) => (
  <div className="flex items-start space-x-4">
    <div
      className={`min-w-12 min-h-12 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
    >
      <i className={`${icon} text-xl`}></i>
    </div>
    <div>
      <h4 className="text-xl font-bold text-neutral-800/90 mb-2">{title}</h4>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const ForBrandsVendors = () => {
  const features = [
    {
      icon: "fas fa-store text-neutral-800/90",
      iconBg: "bg-pkl-yellow",
      title: "Showcase Your Products",
      description:
        "Display your gear, equipment, and services directly to engaged Pickleball players through integrated marketplace features.",
    },
    {
      icon: "fas fa-eye text-neutral-800/90",
      iconBg: "bg-pkl-yellow",
      title: "Gain Trusted Visibility",
      description:
        "Build credibility through community reviews, player endorsements, and verified partner status within the PKL ecosystem.",
    },
    {
      icon: "fas fa-shopping-cart text-neutral-800/90",
      iconBg: "bg-pkl-yellow",
      title: "Direct Sales & Engagement",
      description:
        "Connect directly with customers through the platform, reducing middleman costs and building lasting relationships.",
    },
    {
      icon: "fas fa-shield-alt text-neutral-800/90",
      iconBg: "bg-pkl-yellow",
      title: "Risk Mitigation",
      description:
        "PKL tokens represent utility and membership, not investment securities. Focus on real business value and community engagement.",
    },
  ];

  const benefits = [
    "Access to 10,000+ active Pickleball players",
    "Integrated payment and fulfillment systems",
    "Community-driven product reviews and ratings",
    "Tournament and event sponsorship opportunities",
    "Data insights on player preferences and trends",
  ];

  return (
    <section
      className="py-20 bg-pkl-green relative overflow-hidden"
      id="for-brands-vendors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pkl-green/90 to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 floating-element opacity-30">
        <div className="w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
      </div>
      <div
        className="absolute bottom-20 left-20 floating-element opacity-20"
        style={{ animationDelay: "3s" }}
      >
        <div className="w-24 h-24 bg-pkl-yellow/20 rounded-2xl backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-pkl-yellow text-neutral-800/90 px-6 py-3 rounded-full font-semibold mb-6">
            <i className="fas fa-handshake mr-2"></i>
            <span>For Brands & Vendors</span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6 font-luckiest-guy tracking-widest"
            style={{
              textShadow:
                "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            Reach Your Ideal Customers
          </h2>
          <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto">
            Connect directly with passionate Pickleball players through our
            trusted marketplace and community platform. Build relationships, not
            just transactions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Visual/Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 text-neutral-800 relative overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-6 left-6 w-16 h-16 border-2 border-neutral-300 rounded-2xl"></div>
                <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-neutral-300 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-pkl-orange rounded-xl flex items-center justify-center">
                    <i className="fas fa-store text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800">
                      ProPickle Gear
                    </h3>
                    <p className="text-neutral-600">Verified Partner</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-neutral-100 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-neutral-800">
                        Monthly Sales
                      </span>
                      <span className="text-pkl-green font-bold">+73%</span>
                    </div>
                    <div className="bg-neutral-200 rounded-full h-2">
                      <div className="bg-pkl-green h-full w-4/5 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-neutral-100 rounded-xl p-3 text-center">
                      <div className="font-bold text-pkl-orange text-lg">
                        4.9★
                      </div>
                      <div className="text-sm text-neutral-600">Rating</div>
                    </div>
                    <div className="bg-neutral-100 rounded-xl p-3 text-center">
                      <div className="font-bold text-pkl-orange text-lg">
                        1.2K
                      </div>
                      <div className="text-sm text-neutral-600">Reviews</div>
                    </div>
                  </div>

                  <div className="bg-neutral-100 rounded-xl p-3">
                    <div className="text-sm text-neutral-600 mb-1">
                      Top Product
                    </div>
                    <div className="font-semibold text-neutral-800">
                      Elite Carbon Paddle - $149
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg floating-element">
              <i className="fas fa-chart-line text-pkl-green text-xl"></i>
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-pkl-yellow rounded-xl flex items-center justify-center shadow-lg floating-element"
              style={{ animationDelay: "3s" }}
            >
              <i className="fas fa-star text-pkl-orange"></i>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-8 order-1 lg:order-2 text-white">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div
                  className={`min-w-12 min-h-12 ${feature.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <i className={`${feature.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-base text-white/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-neutral-800/90 mb-6 text-center">
            What You Get as a PKL Partner
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-green rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <span className="text-neutral-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Mitigation Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-16">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <i className="fas fa-info text-white text-sm"></i>
            </div>
            <div>
              <h4 className="font-bold text-blue-900 mb-2">Important Notice</h4>
              <p className="text-blue-800 leading-relaxed">
                PKL tokens are utility tokens designed for platform access and
                community engagement. They are not investment securities or
                financial instruments. Our focus is on building real business
                value through community-driven commerce and authentic player
                connections.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Marketplace?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Become a Founding Brand Partner and get exclusive access to our
              growing community of passionate Pickleball players, plus early
              access to premium marketplace features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pkl-yellow text-neutral-800/90 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors">
                Apply as Brand Partner
              </button>
              <button className="border-2 border-pkl-yellow text-pkl-yellow px-8 py-4 rounded-xl font-bold text-lg hover:bg-pkl-yellow hover:text-neutral-800/90 transition-colors">
                View Partnership Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBrandsVendors;
