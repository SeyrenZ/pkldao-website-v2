import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-pkl-green rounded-xl flex items-center justify-center">
                <i className="fas fa-table-tennis-paddle-ball text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold">PKL.CLUB</span>
            </div>
            <p className="text-gray-400">
              The world's first decentralized Pickleball community. Join the
              revolution and earn $PKL tokens while playing the fastest growing
              sport.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-pkl-green transition-colors"
                data-testid="link-whitepaper"
              >
                Whitepaper
              </a>
              <a
                href="#roadmap"
                className="block text-gray-400 hover:text-pkl-green transition-colors"
                data-testid="link-roadmap"
              >
                Roadmap
              </a>
              <a
                href="#tokenomics"
                className="block text-gray-400 hover:text-pkl-green transition-colors"
                data-testid="link-tokenomics"
              >
                Tokenomics
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-pkl-green transition-colors"
                data-testid="link-smart-contract"
              >
                Smart Contract
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-pkl-green transition-colors"
                data-testid="link-risk-disclaimer"
              >
                Risk Disclaimer
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-pkl-green transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-pkl-green transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-pkl-green transition-colors"
                data-testid="link-cookies"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Community</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors"
                data-testid="link-telegram"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors"
                data-testid="link-discord"
              >
                <i className="fab fa-discord"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors"
                data-testid="link-twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors"
                data-testid="link-youtube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>

            {/* App Store Buttons */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-300">Download App</h4>
              <div className="space-y-2">
                <button
                  className="w-full bg-black text-white px-4 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors"
                  data-testid="button-google-play"
                >
                  <i className="fab fa-google-play text-lg"></i>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
                <button
                  className="w-full bg-black text-white px-4 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors"
                  data-testid="button-app-store"
                >
                  <i className="fab fa-apple text-lg"></i>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 PKL.CLUB. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center">
              PKL.CLUB is not investment advice. Cryptocurrency may be
              unregulated in your jurisdiction.
              <a
                href="#"
                className="text-pkl-green hover:underline"
                data-testid="link-footer-risk"
              >
                Risk Disclaimer
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
