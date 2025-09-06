import React from 'react';

const EcosystemSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            PKL.CLUB Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform that brings together all aspects of the pickleball community in one decentralized ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Platform Features */}
          <div className="ecosystem-card bg-gradient-to-br from-pkl-green/10 to-pkl-green/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-pkl-green rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-mobile-alt text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile App Platform</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Access the entire PKL ecosystem through our intuitive mobile application with seamless user experience.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-pkl-green text-sm"></i>
                <span>Cross-platform compatibility</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-pkl-green text-sm"></i>
                <span>Real-time notifications</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-pkl-green text-sm"></i>
                <span>Offline functionality</span>
              </li>
            </ul>
          </div>

          <div className="ecosystem-card bg-gradient-to-br from-pkl-yellow/10 to-pkl-yellow/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-store text-pkl-green text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">NFT Marketplace</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Trade unique pickleball NFTs, collectibles, and digital assets within our secure marketplace.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-pkl-green text-sm"></i>
                <span>Rare collectible cards</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-pkl-green text-sm"></i>
                <span>Equipment & gear NFTs</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-pkl-green text-sm"></i>
                <span>Tournament memorabilia</span>
              </li>
            </ul>
          </div>

          <div className="ecosystem-card bg-gradient-to-br from-pkl-orange/10 to-pkl-orange/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-pkl-orange rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-comments text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Hub</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Connect with players worldwide through our integrated social platform and community features.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-pkl-green text-sm"></i>
                <span>Player messaging system</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-pkl-green text-sm"></i>
                <span>Community forums</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-pkl-green text-sm"></i>
                <span>Event coordination</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ecosystem Flow */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How the Ecosystem Works
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-pkl-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Join Platform</h4>
              <p className="text-gray-600">Create your profile and connect your wallet to start your PKL journey.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pkl-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pkl-green font-bold text-2xl">2</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Play & Earn</h4>
              <p className="text-gray-600">Participate in games, tournaments, and activities to earn PKL tokens.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pkl-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Trade & Collect</h4>
              <p className="text-gray-600">Use tokens to buy NFTs, equipment, and exclusive collectibles.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Grow Community</h4>
              <p className="text-gray-600">Connect with others and help expand the global pickleball network.</p>
            </div>
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pkl-green to-pkl-yellow rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Everything Connected, Everything Rewarded
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Experience the power of a fully integrated ecosystem where every action contributes to your growth and the community's success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-pkl-green px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Explore Platform
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-pkl-green transition-colors">
                View Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;