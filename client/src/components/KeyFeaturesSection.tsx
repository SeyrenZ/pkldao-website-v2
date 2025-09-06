import React from 'react';

const KeyFeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the innovative features that make PKL.CLUB the ultimate destination for pickleball enthusiasts
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature 1 - Play to Earn */}
          <div className="feature-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pkl-green to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                <i className="fas fa-gamepad text-white text-3xl"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-pkl-yellow rounded-full flex items-center justify-center">
                <i className="fas fa-coins text-pkl-green text-sm"></i>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Play to Earn
            </h3>
            
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              Transform your passion for pickleball into rewards. Earn PKL tokens through gameplay, tournaments, and community participation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-green/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-green text-xs"></i>
                </div>
                <span className="text-gray-700">Match rewards based on performance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-green/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-green text-xs"></i>
                </div>
                <span className="text-gray-700">Tournament prize pools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-green/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-green text-xs"></i>
                </div>
                <span className="text-gray-700">Daily challenge bonuses</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-green/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-green text-xs"></i>
                </div>
                <span className="text-gray-700">Leaderboard rankings</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-pkl-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
                Start Earning
              </button>
            </div>
          </div>

          {/* Feature 2 - NFT Marketplace */}
          <div className="feature-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pkl-yellow to-yellow-500 rounded-2xl flex items-center justify-center mx-auto">
                <i className="fas fa-store text-pkl-green text-3xl"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-pkl-orange rounded-full flex items-center justify-center">
                <i className="fas fa-gem text-white text-sm"></i>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              NFT Marketplace
            </h3>
            
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              Trade unique digital collectibles, equipment NFTs, and exclusive memorabilia in our secure marketplace.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-yellow text-xs"></i>
                </div>
                <span className="text-gray-700">Rare player cards & collectibles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-yellow text-xs"></i>
                </div>
                <span className="text-gray-700">Virtual equipment & gear</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-yellow text-xs"></i>
                </div>
                <span className="text-gray-700">Tournament memorabilia</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-yellow/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-yellow text-xs"></i>
                </div>
                <span className="text-gray-700">Secure blockchain trading</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-pkl-yellow text-pkl-green px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors">
                Browse NFTs
              </button>
            </div>
          </div>

          {/* Feature 3 - Community Platform */}
          <div className="feature-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pkl-orange to-red-500 rounded-2xl flex items-center justify-center mx-auto">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <i className="fas fa-heart text-white text-sm"></i>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Community Platform
            </h3>
            
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              Connect with players worldwide, join clubs, organize events, and be part of the global pickleball revolution.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-orange/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-orange text-xs"></i>
                </div>
                <span className="text-gray-700">Global player network</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-orange/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-orange text-xs"></i>
                </div>
                <span className="text-gray-700">Club creation & management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-orange/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-orange text-xs"></i>
                </div>
                <span className="text-gray-700">Event organization tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pkl-orange/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-pkl-orange text-xs"></i>
                </div>
                <span className="text-gray-700">Real-time messaging</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-pkl-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Experience All Features with PKL Tokens
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Unlock the full potential of the PKL ecosystem and start earning rewards today.
            </p>
            <button className="bg-pkl-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors">
              Get PKL Tokens Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;