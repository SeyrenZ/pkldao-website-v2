import React from "react";

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            The PKL.CLUB Ecosystem
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Navigation */}
          <div className="space-y-4">
            <div
              className="ecosystem-tab bg-white rounded-xl p-6 border-l-4 border-pkl-green shadow-sm cursor-pointer hover:shadow-md transition-all"
              data-testid="tab-player-profiles"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pkl-green/10 rounded-xl flex items-center justify-center">
                  <i className="fas fa-user text-pkl-green"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Player Profiles
                  </h3>
                  <p className="text-gray-600 text-sm">
                    XP, stats, achievements, NFT badges
                  </p>
                </div>
              </div>
            </div>

            <div
              className="ecosystem-tab bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all"
              data-testid="tab-club-pages"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pkl-yellow/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-users text-pkl-green"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Club Pages</h3>
                  <p className="text-gray-600 text-sm">
                    Showcase members, events, gear
                  </p>
                </div>
              </div>
            </div>

            <div
              className="ecosystem-tab bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all"
              data-testid="tab-marketplace"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pkl-orange/10 rounded-xl flex items-center justify-center">
                  <i className="fas fa-store text-pkl-green"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Marketplace
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Gear, services, NFT collectibles, event tickets
                  </p>
                </div>
              </div>
            </div>

            <div
              className="ecosystem-tab bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all"
              data-testid="tab-messaging"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pkl-green/10 rounded-xl flex items-center justify-center">
                  <i className="fas fa-comments text-pkl-green"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Messaging & Groups
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Global and local community hubs
                  </p>
                </div>
              </div>
            </div>

            <div
              className="ecosystem-tab bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all"
              data-testid="tab-events"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pkl-yellow/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-calendar text-pkl-green"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Events</h3>
                  <p className="text-gray-600 text-sm">
                    Tournament registrations, NFT tickets, $PKL prize pools
                  </p>
                </div>
              </div>
            </div>

            <div
              className="ecosystem-tab bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all"
              data-testid="tab-leaderboards"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pkl-orange/10 rounded-xl flex items-center justify-center">
                  <i className="fas fa-medal text-pkl-green"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Leaderboards & Collectibles
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Local, national, and global rankings with NFT achievements
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">PKL Profile</div>
                      <div className="w-8 h-8 bg-pkl-green rounded-full"></div>
                    </div>

                    {/* Profile Section */}
                    <div className="bg-gradient-to-r from-pkl-green to-pkl-yellow rounded-2xl p-4 text-white">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white"></i>
                        </div>
                        <div>
                          <div className="font-bold">Alex Rodriguez</div>
                          <div className="text-sm opacity-90">
                            Level 42 • 2,847 XP
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-full h-2 mb-2">
                        <div className="bg-white h-full w-3/4 rounded-full"></div>
                      </div>
                      <div className="text-xs">153 XP to next level</div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <div className="font-bold text-pkl-green">147</div>
                        <div className="text-xs text-gray-600">Matches Won</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <div className="font-bold text-pkl-orange">23</div>
                        <div className="text-xs text-gray-600">Tournaments</div>
                      </div>
                    </div>

                    {/* NFT Badges */}
                    <div className="space-y-3">
                      <div className="font-semibold text-neutral-900">
                        Achievement Badges
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-pkl-yellow to-pkl-green rounded-xl flex items-center justify-center">
                          <i className="fas fa-trophy text-white"></i>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-pkl-orange to-red-500 rounded-xl flex items-center justify-center">
                          <i className="fas fa-fire text-white"></i>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pkl-green rounded-xl flex items-center justify-center">
                          <i className="fas fa-star text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center shadow-lg floating-element">
                <i className="fas fa-table-tennis-paddle-ball text-pkl-green text-xl"></i>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-pkl-orange rounded-xl flex items-center justify-center shadow-lg floating-element"
                style={{ animationDelay: "2s" }}
              >
                <i className="fas fa-coins text-white"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            className="bg-pkl-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors"
            data-testid="button-buy-pkl-ecosystem"
          >
            Buy $PKL Token
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
