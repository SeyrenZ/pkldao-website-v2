import React from "react";

const KeyFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            PKL.CLUB Key Features
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div
            className="bg-gradient-to-br from-pkl-green to-green-600 rounded-3xl p-8 text-white relative overflow-hidden"
            data-testid="card-feature-gamified"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-gamepad text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Gamified Player Profiles
              </h3>
              <p className="text-white/90 mb-6">
                Level up, unlock achievements, earn rewards. Track your progress
                with our comprehensive XP system and showcase your skills.
              </p>

              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Mike Chen</div>
                    <div className="text-xs opacity-80">Level 38</div>
                  </div>
                </div>
                <div className="bg-white/20 rounded-full h-2">
                  <div className="bg-pkl-yellow h-full w-2/3 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="bg-gradient-to-br from-pkl-yellow to-yellow-500 rounded-3xl p-8 text-neutral-900 relative overflow-hidden"
            data-testid="card-feature-community"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-users text-neutral-900 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Hub</h3>
              <p className="text-gray-800 mb-6">
                Join clubs, groups, and global Pickleball events. Connect with
                players worldwide and build lasting friendships on and off the
                court.
              </p>

              <div className="bg-white/40 rounded-2xl p-4 backdrop-blur-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-pkl-green rounded-full flex items-center justify-center">
                      <i className="fas fa-users text-white text-xs"></i>
                    </div>
                    <div className="text-sm font-medium">
                      NYC Pickleball Club
                    </div>
                  </div>
                  <div className="text-xs">
                    Weekend Tournament - 47 players joined
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 bg-pkl-green rounded-full"></div>
                    <div className="w-4 h-4 bg-pkl-orange rounded-full"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="bg-gradient-to-br from-pkl-orange to-red-500 rounded-3xl p-8 text-white relative overflow-hidden"
            data-testid="card-feature-marketplace"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-shopping-cart text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Marketplace with $PKL</h3>
              <p className="text-white/90 mb-6">
                Buy, sell, and trade Pickleball gear and digital assets. Use
                $PKL tokens for seamless transactions and exclusive discounts.
              </p>

              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-table-tennis-paddle-ball text-white"></i>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">Pro Paddle</div>
                    <div className="text-xs opacity-80">2,450 $PKL</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1 bg-pkl-green text-white text-xs py-1 px-2 rounded text-center">
                    Buy
                  </div>
                  <div className="flex-1 bg-white/20 text-xs py-1 px-2 rounded text-center">
                    Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
