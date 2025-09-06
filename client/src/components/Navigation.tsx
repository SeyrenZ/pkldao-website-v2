import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-pkl-green rounded-xl flex items-center justify-center">
              <i className="fas fa-table-tennis-paddle-ball text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold text-gray-900">PKL.CLUB</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-pkl-green transition-colors" data-testid="nav-benefits">Benefits</a>
            <a href="#ecosystem" className="text-gray-600 hover:text-pkl-green transition-colors" data-testid="nav-ecosystem">Ecosystem</a>
            <a href="#tokenomics" className="text-gray-600 hover:text-pkl-green transition-colors" data-testid="nav-tokenomics">Tokenomics</a>
            <a href="#pkl-card" className="text-gray-600 hover:text-pkl-green transition-colors" data-testid="nav-pkl-card">PKL Card</a>
            <a href="#roadmap" className="text-gray-600 hover:text-pkl-green transition-colors" data-testid="nav-roadmap">Roadmap</a>
            <a href="#faq" className="text-gray-600 hover:text-pkl-green transition-colors" data-testid="nav-faq">FAQ</a>
            <button className="bg-pkl-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors" data-testid="button-connect-wallet">
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

export default Navigation;