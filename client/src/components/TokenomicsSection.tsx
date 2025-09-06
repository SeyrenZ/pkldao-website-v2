import React from 'react';

const TokenomicsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how PKL tokens are distributed and utilized within our ecosystem to create sustainable value for all participants
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Pie Chart */}
          <div className="relative">
            <div className="w-96 h-96 mx-auto relative">
              {/* Pie Chart SVG */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {/* Community Rewards - 30% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="40"
                  strokeDasharray="150.8 351.86"
                  strokeDashoffset="0"
                />
                {/* Development - 25% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="40"
                  strokeDasharray="125.66 376.99"
                  strokeDashoffset="-150.8"
                />
                {/* Marketing - 20% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="40"
                  strokeDasharray="100.53 401.59"
                  strokeDashoffset="-276.46"
                />
                {/* Team - 15% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="40"
                  strokeDasharray="75.4 426.73"
                  strokeDashoffset="-376.99"
                />
                {/* Liquidity - 10% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="40"
                  strokeDasharray="50.27 451.86"
                  strokeDashoffset="-452.39"
                />
              </svg>
              
              {/* Center Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">1B</div>
                  <div className="text-sm text-gray-600">Total Supply</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-pkl-green rounded-full"></div>
                <span className="text-gray-700 font-medium">Community Rewards (30%)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-pkl-yellow rounded-full"></div>
                <span className="text-gray-700 font-medium">Development (25%)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-pkl-orange rounded-full"></div>
                <span className="text-gray-700 font-medium">Marketing (20%)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Team (15%)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Liquidity (10%)</span>
              </div>
            </div>
          </div>

          {/* Right - Distribution Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Token Distribution
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our tokenomics model is designed to ensure long-term sustainability and growth of the PKL ecosystem while rewarding active community participation.
              </p>
            </div>

            <div className="space-y-6">
              {/* Community Rewards */}
              <div className="bg-pkl-green/10 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-pkl-green rounded-xl flex items-center justify-center">
                    <i className="fas fa-users text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Community Rewards</h4>
                    <p className="text-pkl-green font-semibold">300M PKL (30%)</p>
                  </div>
                </div>
                <p className="text-gray-600">Allocated for player rewards, tournaments, staking incentives, and community-driven initiatives.</p>
              </div>

              {/* Development */}
              <div className="bg-pkl-yellow/10 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-pkl-yellow rounded-xl flex items-center justify-center">
                    <i className="fas fa-code text-pkl-green text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Development</h4>
                    <p className="text-pkl-yellow font-semibold">250M PKL (25%)</p>
                  </div>
                </div>
                <p className="text-gray-600">Reserved for platform development, new features, security audits, and technical infrastructure.</p>
              </div>

              {/* Marketing */}
              <div className="bg-pkl-orange/10 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-pkl-orange rounded-xl flex items-center justify-center">
                    <i className="fas fa-bullhorn text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Marketing</h4>
                    <p className="text-pkl-orange font-semibold">200M PKL (20%)</p>
                  </div>
                </div>
                <p className="text-gray-600">Used for marketing campaigns, partnerships, influencer collaborations, and ecosystem growth.</p>
              </div>

              {/* Team */}
              <div className="bg-purple-500/10 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <i className="fas fa-user-tie text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Team</h4>
                    <p className="text-purple-500 font-semibold">150M PKL (15%)</p>
                  </div>
                </div>
                <p className="text-gray-600">Allocated to core team members with vesting schedules to ensure long-term commitment.</p>
              </div>

              {/* Liquidity */}
              <div className="bg-cyan-500/10 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                    <i className="fas fa-exchange-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Liquidity</h4>
                    <p className="text-cyan-500 font-semibold">100M PKL (10%)</p>
                  </div>
                </div>
                <p className="text-gray-600">Reserved for exchange listings, liquidity pools, and ensuring smooth token trading.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Token Utility */}
        <div className="mt-20">
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              PKL Token Utility
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pkl-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-gamepad text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Gaming Rewards</h4>
                <p className="text-gray-600">Earn tokens through gameplay and tournament participation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shopping-cart text-pkl-green text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Marketplace</h4>
                <p className="text-gray-600">Purchase NFTs, equipment, and exclusive items</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pkl-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-vote-yea text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Governance</h4>
                <p className="text-gray-600">Vote on platform decisions and future developments</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-coins text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Staking</h4>
                <p className="text-gray-600">Stake tokens to earn passive rewards and benefits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;