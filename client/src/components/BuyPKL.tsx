import React from "react";

const BuyPKL = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Buy $PKL Token Now!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            PKL.CLUB combines the world's fastest growing sport with blockchain
            innovation. Owning $PKL gives you more than a token — it gives you a
            place in the Pickleball revolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-scale"
            data-testid="card-benefit-tournaments"
          >
            <div className="w-16 h-16 bg-pkl-green/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-trophy text-pkl-green text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Exclusive Access to Tournaments
            </h3>
            <p className="text-gray-600">
              Use $PKL for registration and prizes in exclusive tournaments
              worldwide.
            </p>
          </div>

          {/* Benefit 2 */}
          <div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-scale"
            data-testid="card-benefit-fees"
          >
            <div className="w-16 h-16 bg-pkl-yellow/20 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-percentage text-pkl-green text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Reduced Marketplace Fees
            </h3>
            <p className="text-gray-600">
              Lower costs for players and vendors inside PKL.CLUB marketplace.
            </p>
          </div>

          {/* Benefit 3 */}
          <div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-scale"
            data-testid="card-benefit-staking"
          >
            <div className="w-16 h-16 bg-pkl-orange/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-coins text-pkl-green text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Staking Rewards
            </h3>
            <p className="text-gray-600">
              Stake $PKL to earn yield and XP boosts in the PKL.CLUB ecosystem.
            </p>
          </div>

          {/* Benefit 4 */}
          <div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-scale"
            data-testid="card-benefit-governance"
          >
            <div className="w-16 h-16 bg-pkl-green/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-vote-yea text-pkl-green text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Community Governance
            </h3>
            <p className="text-gray-600">
              Vote on new features, tournaments, and partnerships in the DAO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyPKL;
