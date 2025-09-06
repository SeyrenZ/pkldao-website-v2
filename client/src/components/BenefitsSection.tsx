import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Buy PKL Now Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get exclusive early access and maximize your rewards by joining the PKL community today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="benefit-card bg-gradient-to-br from-pkl-green/10 to-pkl-green/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-pkl-green rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-trophy text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Access Rewards</h3>
            <p className="text-gray-600 leading-relaxed">
              Be among the first to experience the PKL ecosystem and earn exclusive rewards for early participation.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="benefit-card bg-gradient-to-br from-pkl-yellow/10 to-pkl-yellow/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-coins text-pkl-green text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Token Appreciation</h3>
            <p className="text-gray-600 leading-relaxed">
              Get in at the ground floor with presale pricing before the token launches on major exchanges.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="benefit-card bg-gradient-to-br from-pkl-orange/10 to-pkl-orange/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-pkl-orange rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-users text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">VIP Community Access</h3>
            <p className="text-gray-600 leading-relaxed">
              Join an exclusive community of early adopters with special privileges and direct access to the team.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="benefit-card bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-gift text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Exclusive NFTs</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive limited edition NFTs and collectibles that showcase your early supporter status.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="benefit-card bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-chart-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Staking Rewards</h3>
            <p className="text-gray-600 leading-relaxed">
              Earn passive income through our innovative staking mechanism with higher APY for early participants.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="benefit-card bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-gamepad text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gaming Advantages</h3>
            <p className="text-gray-600 leading-relaxed">
              Get head start bonuses, special equipment, and enhanced gameplay features in the PKL gaming ecosystem.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pkl-green to-pkl-yellow rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't Miss Out on These Exclusive Benefits!
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Join thousands of early adopters who are already securing their position in the PKL ecosystem.
            </p>
            <button className="bg-white text-pkl-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              Buy PKL Tokens Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;