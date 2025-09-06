import React from "react";

const PKLProfileSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pkl-green to-green-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pkl-green/90 to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 floating-element opacity-30">
        <div className="w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
      </div>
      <div
        className="absolute bottom-20 left-10 floating-element opacity-20"
        style={{ animationDelay: "3s" }}
      >
        <div className="w-24 h-24 bg-pkl-yellow/20 rounded-2xl backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center bg-pkl-yellow text-pkl-green px-4 py-2 rounded-full font-semibold">
              <i className="fas fa-user mr-2"></i>
              <span>Core Feature</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold">
              Your Pickleball Identity. One Profile, All Your Achievements.
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              From XP points to NFT badges — your PKL profile grows as you play,
              connect, and rise in the community.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                  <i className="fas fa-id-card text-pkl-green text-sm"></i>
                </div>
                <span className="text-lg">
                  Unique Player ID: NFT-linked, verifiable, and recognized
                  worldwide
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                  <i className="fas fa-chart-line text-pkl-green text-sm"></i>
                </div>
                <span className="text-lg">
                  Dynamic XP System: Levels, skill tracking, and performance
                  analytics
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                  <i className="fas fa-medal text-pkl-green text-sm"></i>
                </div>
                <span className="text-lg">
                  NFT Achievement Badges: Collectible proof of your pickleball
                  journey
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-pkl-green text-sm"></i>
                </div>
                <span className="text-lg">
                  Community Integration: Connect with players, clubs, and
                  tournaments
                </span>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                className="bg-pkl-yellow text-pkl-green px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors"
                data-testid="button-create-profile"
              >
                Create Your Profile
              </button>
              <button
                className="border-2 border-pkl-yellow text-pkl-yellow px-8 py-3 rounded-xl font-bold hover:bg-pkl-yellow hover:text-pkl-green transition-colors"
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
                <div className="w-20 h-20 bg-gradient-to-br from-pkl-green to-pkl-yellow rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-user text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Sarah Chen
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-pkl-green font-semibold">
                      Level 23
                    </span>
                    <div className="w-2 h-2 bg-pkl-green rounded-full"></div>
                    <span className="text-gray-600">#PKL2024</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-bold text-pkl-green mb-2">
                    1,247
                  </div>
                  <div className="text-gray-600 text-sm">XP Points</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-bold text-pkl-green mb-2">
                    84
                  </div>
                  <div className="text-gray-600 text-sm">Matches Won</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-bold text-pkl-green mb-2">
                    12
                  </div>
                  <div className="text-gray-600 text-sm">Tournaments</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-bold text-pkl-green mb-2">
                    3.8
                  </div>
                  <div className="text-gray-600 text-sm">Skill Rating</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">
                    Level Progress
                  </span>
                  <span className="text-pkl-green text-sm">247/500 XP</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="progress-bar h-3 rounded-full"
                    style={{ width: "49%" }}
                  ></div>
                </div>
              </div>

              {/* NFT Badges Showcase */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-gray-900">
                    Achievement Badges
                  </div>
                  <div className="text-sm text-pkl-green">12 Earned</div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-pkl-yellow to-pkl-green rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-trophy text-white"></i>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-pkl-orange to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-fire text-white"></i>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pkl-green rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-star text-white"></i>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-crown text-white"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center shadow-lg floating-element">
              <i className="fas fa-brain text-pkl-green text-xl"></i>
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg floating-element"
              style={{ animationDelay: "2s" }}
            >
              <i className="fas fa-chart-line text-pkl-green"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PKLProfileSection;
