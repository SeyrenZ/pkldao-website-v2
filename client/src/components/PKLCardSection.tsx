import React from 'react';

const PKLCardSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Card Visual */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-pkl-green via-pkl-yellow to-pkl-orange rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">PKL CARD</h3>
                      <p className="text-white/80">Premium Member</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="fas fa-gem text-white text-xl"></i>
                    </div>
                  </div>

                  {/* Card Number */}
                  <div className="mb-6">
                    <div className="text-white/60 text-sm mb-1">Card Number</div>
                    <div className="text-white text-xl font-mono tracking-wider">**** **** **** 1234</div>
                  </div>

                  {/* Card Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-white/60 text-sm mb-1">Valid Thru</div>
                      <div className="text-white font-semibold">12/27</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">Member Since</div>
                      <div className="text-white font-semibold">2024</div>
                    </div>
                  </div>

                  {/* Cardholder */}
                  <div className="mb-4">
                    <div className="text-white/60 text-sm mb-1">Cardholder</div>
                    <div className="text-white font-semibold">ALEX JOHNSON</div>
                  </div>

                  {/* Card Features */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <i className="fas fa-shield-alt text-white text-sm"></i>
                      </div>
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <i className="fas fa-wifi text-white text-sm"></i>
                      </div>
                    </div>
                    <div className="text-white font-bold text-lg">PKL</div>
                  </div>
                </div>
              </div>

              {/* Background Cards */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl -z-10 transform rotate-6"></div>
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-3xl -z-20 transform rotate-12"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-pkl-yellow/20 rounded-2xl backdrop-blur-sm floating-element"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-pkl-green/20 rounded-full backdrop-blur-sm floating-element" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                PKL Card
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get exclusive access to premium features, special rewards, and VIP treatment throughout the PKL ecosystem with your personalized PKL Card.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pkl-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-crown text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">VIP Access</h3>
                  <p className="text-gray-600">Enjoy priority access to tournaments, exclusive events, and premium features across the platform.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pkl-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-percentage text-pkl-green text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Rewards</h3>
                  <p className="text-gray-600">Earn 2x more PKL tokens from games, tournaments, and activities with your premium membership status.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pkl-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shopping-bag text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Marketplace</h3>
                  <p className="text-gray-600">Access rare NFTs, limited edition items, and special discounts available only to PKL Card holders.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-headset text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Priority Support</h3>
                  <p className="text-gray-600">Get dedicated customer support with faster response times and personalized assistance.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">PKL Card Benefits</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pkl-green mb-1">2x</div>
                  <div className="text-sm text-gray-600">Reward Multiplier</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pkl-yellow mb-1">50%</div>
                  <div className="text-sm text-gray-600">Marketplace Discount</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pkl-orange mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Priority Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">∞</div>
                  <div className="text-sm text-gray-600">Exclusive Access</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-pkl-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors flex-1">
                Get PKL Card
              </button>
              <button className="bg-transparent border-2 border-pkl-green text-pkl-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pkl-green hover:text-white transition-colors flex-1">
                Learn More
              </button>
            </div>

            {/* Additional Info */}
            <div className="text-center text-sm text-gray-500">
              <p>Limited time offer • Premium membership • Exclusive benefits</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-pkl-green via-pkl-yellow to-pkl-orange rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Unlock Premium Benefits?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Join thousands of premium members who are already enjoying exclusive PKL Card benefits and enhanced rewards.
            </p>
            <button className="bg-white text-pkl-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              Apply for PKL Card Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PKLCardSection;