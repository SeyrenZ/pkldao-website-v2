import React from 'react';

const PlayerProfileSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                PKL Personal Player Profile
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create your unique digital identity in the PKL ecosystem. Track your progress, showcase achievements, and connect with the global pickleball community.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pkl-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user-circle text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Dashboard</h3>
                  <p className="text-gray-600">Customize your profile with stats, achievements, and personal preferences to stand out in the community.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pkl-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-chart-bar text-pkl-green text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Analytics</h3>
                  <p className="text-gray-600">Track your game statistics, improvement over time, and compare with other players in your skill level.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pkl-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-medal text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Achievement System</h3>
                  <p className="text-gray-600">Unlock badges, trophies, and special recognition as you progress through different skill levels and milestones.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-network-wired text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Connections</h3>
                  <p className="text-gray-600">Connect with players worldwide, join clubs, and participate in community events and tournaments.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-pkl-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors">
                Create Your Profile
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
              {/* Profile Header */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-pkl-green to-pkl-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-user text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Alex Johnson</h3>
                <p className="text-pkl-green font-semibold">Pro Player • Level 47</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pkl-green">1,247</div>
                  <div className="text-sm text-gray-600">Games Played</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pkl-yellow">73%</div>
                  <div className="text-sm text-gray-600">Win Rate</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pkl-orange">156</div>
                  <div className="text-sm text-gray-600">Tournaments</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-500">4.8</div>
                  <div className="text-sm text-gray-600">Skill Rating</div>
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-4">Recent Achievements</h4>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pkl-yellow rounded-full flex items-center justify-center">
                    <i className="fas fa-trophy text-pkl-green text-sm"></i>
                  </div>
                  <span className="text-gray-700">Tournament Champion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pkl-green rounded-full flex items-center justify-center">
                    <i className="fas fa-fire text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">10-Game Win Streak</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pkl-orange rounded-full flex items-center justify-center">
                    <i className="fas fa-star text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">Community Leader</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-pkl-yellow/20 rounded-full backdrop-blur-sm floating-element"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pkl-green/20 rounded-2xl backdrop-blur-sm floating-element" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerProfileSection;