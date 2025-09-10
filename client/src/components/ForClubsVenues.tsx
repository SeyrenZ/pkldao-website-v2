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

const ForClubsVenues = () => {
  const features = [
    {
      icon: "fas fa-heart text-white",
      iconBg: "bg-pkl-green",
      title: "Customer Loyalty",
      description:
        "Reward players with XP, tokens, and exclusive perks that keep them coming back to your venue.",
    },
    {
      icon: "fas fa-users text-pkl-green",
      iconBg: "bg-pkl-yellow",
      title: "Bring Your Members Together",
      description:
        "A built-in platform to connect players, share updates, and keep your community active year-round.",
    },
    {
      icon: "fas fa-chart-line text-white",
      iconBg: "bg-pkl-orange",
      title: "Grow Without Costly Marketing",
      description:
        "Get discovered on PKL.CLUB's map, spotlights, and travel network — new members come to you.",
    },
    {
      icon: "fas fa-globe text-white",
      iconBg: "bg-blue-500",
      title: "Be Part of a Bigger Pickleball Community",
      description:
        "Link your club into a global network where members can exchange, travel, and compete.",
    },
  ];

  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      id="for-clubs-venues"
    >
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 floating-element opacity-30">
        <div className="w-32 h-32 bg-pkl-green/10 rounded-3xl backdrop-blur-sm"></div>
      </div>
      <div
        className="absolute bottom-20 left-20 floating-element opacity-20"
        style={{ animationDelay: "3s" }}
      >
        <div className="w-24 h-24 bg-pkl-yellow/20 rounded-2xl backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-pkl-green text-white px-6 py-3 rounded-full font-semibold mb-6">
            <i className="fas fa-building mr-2"></i>
            <span>For Clubs & Venues</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800/90 mb-6 font-luckiest-guy tracking-widest">
            Power Your Club's Growth
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Transform your venue into a thriving community hub with tools that
            increase engagement, reduce marketing costs, and connect you to the
            global Pickleball network.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                iconBg={feature.iconBg}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Right: Visual/Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pkl-green to-green-600 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-white rounded-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-building text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Sunset Pickleball Club
                    </h3>
                    <p className="text-white/80">Premium Partner</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Monthly Revenue</span>
                      <span className="text-pkl-yellow font-bold">+47%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-pkl-yellow h-full w-3/4 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 rounded-xl p-3 text-center">
                      <div className="font-bold text-pkl-yellow text-lg">
                        342
                      </div>
                      <div className="text-sm text-white/80">
                        Active Members
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3 text-center">
                      <div className="font-bold text-pkl-yellow text-lg">
                        89%
                      </div>
                      <div className="text-sm text-white/80">
                        Retention Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center shadow-lg floating-element">
              <i className="fas fa-trophy text-pkl-green text-xl"></i>
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg floating-element"
              style={{ animationDelay: "2s" }}
            >
              <i className="fas fa-users text-pkl-green"></i>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pkl-green/10 to-pkl-yellow/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-neutral-800/90 mb-4">
              Ready to Transform Your Club?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Join as a Founding Club Partner and get exclusive benefits
              including token allocation, priority support, and early access to
              premium features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pkl-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors">
                Apply as Founding Partner
              </button>
              <button className="border-2 border-pkl-green text-pkl-green px-8 py-4 rounded-xl font-bold text-lg hover:bg-pkl-green hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForClubsVenues;
