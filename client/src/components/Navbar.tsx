import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-border rounded-b-2xl fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PKL.CLUB" className="w-10 h-10" />
            <span className="text-xl font-bold text-pkl-green font-luckiest-guy tracking-widest">
              PKL.CLUB
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-fredoka font-medium">
            <a
              href="#benefits"
              className="text-gray-600 hover:text-pkl-green transition-colors"
              data-testid="nav-benefits"
            >
              Benefits
            </a>
            <a
              href="#ecosystem"
              className="text-gray-600 hover:text-pkl-green transition-colors"
              data-testid="nav-ecosystem"
            >
              Ecosystem
            </a>
            <a
              href="#tokenomics"
              className="text-gray-600 hover:text-pkl-green transition-colors"
              data-testid="nav-tokenomics"
            >
              Tokenomics
            </a>
            <a
              href="#pkl-card"
              className="text-gray-600 hover:text-pkl-green transition-colors"
              data-testid="nav-pkl-card"
            >
              PKL Card
            </a>
            <a
              href="#roadmap"
              className="text-gray-600 hover:text-pkl-green transition-colors"
              data-testid="nav-roadmap"
            >
              Roadmap
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-pkl-green transition-colors"
              data-testid="nav-faq"
            >
              FAQ
            </a>
            <button
              className="bg-pkl-green rounded-xl text-white px-6 h-12 py-2 hover:bg-green-600 transition-colors font-fredoka font-bold tracking-widest"
              data-testid="button-connect-wallet"
            >
              Connect Wallet
            </button>
          </div>
          <button className="md:hidden" data-testid="button-mobile-menu">
            <i className="fas fa-bars text-gray-600"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
