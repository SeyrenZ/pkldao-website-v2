import React from "react";

// Reusable components
const FeatureItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-pkl-yellow rounded-full flex items-center justify-center">
      <i className={`fas fa-${icon} text-neutral-800/90 text-lg`}></i>
    </div>
    <span className="text-lg">{text}</span>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-4 bg-zinc-100 rounded-2xl">
    <div className="text-3xl font-bold text-pkl-green mb-2">{value}</div>
    <div className="text-neutral-600 text-sm font-medium">{label}</div>
  </div>
);

const BadgeIcon = ({ icon, gradient }: { icon: string; gradient: string }) => (
  <div
    className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center shadow-lg`}
  >
    <i className={`fas fa-${icon} text-white`}></i>
  </div>
);

const FloatingElement = ({
  className,
  children,
  delay,
}: {
  className: string;
  children: React.ReactNode;
  delay?: string;
}) => (
  <div
    className={`absolute ${className} floating-element`}
    style={delay ? { animationDelay: delay } : {}}
  >
    {children}
  </div>
);

const PKLProfileSection = () => {
  const features = [
    {
      icon: "id-card",
      text: "Unique Player ID: NFT-linked, verifiable, and recognized worldwide",
    },
    {
      icon: "chart-line",
      text: "Dynamic XP System: Levels, skill tracking, and performance analytics",
    },
    {
      icon: "medal",
      text: "NFT Achievement Badges: Collectible proof of your pickleball journey",
    },
    {
      icon: "users",
      text: "Community Integration: Connect with players, clubs, and tournaments",
    },
  ];

  const stats = [
    { value: "1,247", label: "XP Points" },
    { value: "84", label: "Matches Won" },
    { value: "12", label: "Tournaments" },
    { value: "3.8", label: "Skill Rating" },
  ];

  const badges = [
    { icon: "trophy", gradient: "bg-pkl-green" },
    { icon: "fire", gradient: "bg-pkl-orange" },
    { icon: "star", gradient: "bg-blue-500" },
    { icon: "crown", gradient: "bg-purple-500" },
  ];
  return (
    <section className="py-20 bg-pkl-green relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pkl-green/90 to-transparent"></div>

      {/* Floating Elements */}
      <FloatingElement className="top-10 right-10 opacity-30">
        <div className="w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
      </FloatingElement>
      <FloatingElement className="bottom-20 left-10 opacity-20" delay="3s">
        <div className="w-24 h-24 bg-pkl-yellow/20 rounded-2xl backdrop-blur-sm"></div>
      </FloatingElement>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center bg-pkl-yellow text-pkl-green px-4 py-2 rounded-full font-semibold">
              <i className="fas fa-user mr-2"></i>
              <span>Core Feature</span>
            </div>

            <h2
              className="text-4xl lg:text-5xl font-bold"
              style={{
                textShadow:
                  "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
              }}
            >
              Your Pickleball{" "}
              <span className="text-pkl-yellow font-bold">Identity</span>. One
              Profile, All Your Achievements.
            </h2>
            <p className="text-xl text-white leading-relaxed">
              From XP points to NFT badges — your PKL profile grows as you play,
              connect, and rise in the community.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  text={feature.text}
                />
              ))}
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                className="bg-pkl-yellow text-neutral-800/90 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors"
                data-testid="button-create-profile"
              >
                Create Your Profile
              </button>
              <button
                className="border-2 border-pkl-yellow text-pkl-yellow px-8 py-3 rounded-xl font-bold hover:bg-pkl-yellow hover:text-neutral-800/90 transition-colors"
                data-testid="button-view-demo"
              >
                View Demo
              </button>
            </div>
          </div>

          {/* Right: Profile Mockup */}
          <div className="relative">
            <div
              className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300"
              data-testid="profile-mockup"
            >
              {/* Profile Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 bg-pkl-green rounded-2xl flex items-end justify-center shadow-lg">
                  <i className="fas fa-user text-white text-6xl mb-[-1px]"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800/90">
                    Sarah Chen
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-pkl-green font-semibold">
                      Level 23
                    </span>
                    <div className="w-2 h-2 bg-pkl-green rounded-full"></div>
                    <span className="text-neutral-600">#PKL2024</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <StatCard key={index} value={stat.value} label={stat.label} />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-800 font-semibold">
                    Level Progress
                  </span>
                  <span className="text-pkl-green text-sm">247/500 XP</span>
                </div>
                <div className="w-full bg-zinc-100 rounded-full h-3">
                  <div
                    className="bg-pkl-green h-3 rounded-full"
                    style={{ width: "49%" }}
                  ></div>
                </div>
              </div>

              {/* NFT Badges Showcase */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-neutral-800/90">
                    Achievement Badges
                  </div>
                  <div className="text-sm text-pkl-green">12 Earned</div>
                </div>
                <div className="flex space-x-2">
                  {badges.map((badge, index) => (
                    <BadgeIcon
                      key={index}
                      icon={badge.icon}
                      gradient={badge.gradient}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating AI Elements */}
            <FloatingElement className="-top-4 -right-4">
              <div className="w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center shadow-lg">
                <i className="fas fa-brain text-pkl-green text-xl"></i>
              </div>
            </FloatingElement>
            <FloatingElement className="-bottom-4 -left-4" delay="2s">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-chart-line text-pkl-green"></i>
              </div>
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PKLProfileSection;
