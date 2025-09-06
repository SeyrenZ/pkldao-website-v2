import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-pkl-green rounded-xl flex items-center justify-center">
                  <i className="fas fa-table-tennis text-white text-xl"></i>
                </div>
                <span className="text-2xl font-bold">PKL.CLUB</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                The world's first decentralized pickleball community platform. Join the revolution and earn rewards while playing the sport you love.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors">
                  <i className="fab fa-discord text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors">
                  <i className="fab fa-telegram text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors">
                  <i className="fab fa-medium text-white"></i>
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Platform</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Buy PKL Token</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">NFT Marketplace</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Tournaments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Player Profiles</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Staking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">PKL Card</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Whitepaper</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Roadmap</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Tokenomics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Security Audit</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Bug Reports</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Feature Requests</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pkl-green transition-colors">Status Page</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-800 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Download the PKL App</h3>
            <p className="text-gray-400 mb-8">Get the full PKL experience on your mobile device</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center space-x-3 bg-black rounded-xl px-6 py-3 hover:bg-gray-800 transition-colors">
                <i className="fab fa-apple text-white text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center space-x-3 bg-black rounded-xl px-6 py-3 hover:bg-gray-800 transition-colors">
                <i className="fab fa-google-play text-white text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-8">Subscribe to our newsletter for the latest updates, announcements, and exclusive offers</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pkl-green focus:border-transparent"
              />
              <button className="bg-pkl-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 PKL.CLUB. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-pkl-green text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-pkl-green text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-pkl-green text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Built on</span>
              <div className="flex items-center space-x-2">
                <i className="fab fa-ethereum text-pkl-green text-lg"></i>
                <span className="text-pkl-green font-semibold">Ethereum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <p className="text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
              <strong>Risk Disclaimer:</strong> Cryptocurrency investments carry significant risk. The value of PKL tokens may fluctuate dramatically. 
              Past performance does not guarantee future results. Only invest what you can afford to lose. 
              This is not financial advice. Please conduct your own research and consult with financial advisors before making investment decisions. 
              PKL.CLUB is not responsible for any financial losses incurred through the use of our platform or tokens.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;