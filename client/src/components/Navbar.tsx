import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu clicked, current state:", isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    console.log("Close mobile menu called");
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-border rounded-b-2xl fixed top-0 z-50">
      <div
        className={`max-w-7xl bg-white mx-auto px-4 ${
          isMobileMenuOpen ? "rounded-b-0" : "rounded-b-2xl"
        } sm:px-6 lg:px-8 relative z-[60]`}
      >
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center space-x-2">
            <img src="/logo.png" alt="PKL.CLUB" className="w-10 h-10" />
            <span className="text-xl font-bold text-pkl-green font-luckiest-guy tracking-widest">
              PKL.CLUB
            </span>
          </a>
          <div className="hidden lg:flex items-center space-x-8 font-fredoka font-medium">
            <a
              href="#benefits"
              className="text-neutral-600 hover:text-pkl-green transition-colors"
              data-testid="nav-benefits"
            >
              Benefits
            </a>
            <a
              href="#ecosystem"
              className="text-neutral-600 hover:text-pkl-green transition-colors"
              data-testid="nav-ecosystem"
            >
              Ecosystem
            </a>
            <a
              href="#tokenomics"
              className="text-neutral-600 hover:text-pkl-green transition-colors"
              data-testid="nav-tokenomics"
            >
              Tokenomics
            </a>
            <a
              href="#pkl-card"
              className="text-neutral-600 hover:text-pkl-green transition-colors"
              data-testid="nav-pkl-card"
            >
              PKL Card
            </a>
            <a
              href="#roadmap"
              className="text-neutral-600 hover:text-pkl-green transition-colors"
              data-testid="nav-roadmap"
            >
              Roadmap
            </a>
            <a
              href="#faq"
              className="text-neutral-600 hover:text-pkl-green transition-colors"
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
          <button
            className="lg:hidden p-3 hover:bg-gray-100 rounded-md transition-colors relative z-40"
            data-testid="button-mobile-menu"
            onClick={toggleMobileMenu}
            type="button"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span
                className={`block w-6 h-0.5 bg-neutral-600 transition-all duration-300 absolute ${
                  isMobileMenuOpen ? "rotate-45" : "top-1"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-neutral-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-neutral-600 transition-all duration-300 absolute ${
                  isMobileMenuOpen ? "-rotate-45" : "bottom-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Black Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white shadow-lg border-b border-border z-50 lg:hidden transition-all duration-300 transform ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <a
            href="#benefits"
            className="block text-neutral-600 hover:text-pkl-green transition-colors font-fredoka font-medium py-2"
            data-testid="mobile-nav-benefits"
            onClick={closeMobileMenu}
          >
            Benefits
          </a>
          <a
            href="#ecosystem"
            className="block text-neutral-600 hover:text-pkl-green transition-colors font-fredoka font-medium py-2"
            data-testid="mobile-nav-ecosystem"
            onClick={closeMobileMenu}
          >
            Ecosystem
          </a>
          <a
            href="#tokenomics"
            className="block text-neutral-600 hover:text-pkl-green transition-colors font-fredoka font-medium py-2"
            data-testid="mobile-nav-tokenomics"
            onClick={closeMobileMenu}
          >
            Tokenomics
          </a>
          <a
            href="#pkl-card"
            className="block text-neutral-600 hover:text-pkl-green transition-colors font-fredoka font-medium py-2"
            data-testid="mobile-nav-pkl-card"
            onClick={closeMobileMenu}
          >
            PKL Card
          </a>
          <a
            href="#roadmap"
            className="block text-neutral-600 hover:text-pkl-green transition-colors font-fredoka font-medium py-2"
            data-testid="mobile-nav-roadmap"
            onClick={closeMobileMenu}
          >
            Roadmap
          </a>
          <a
            href="#faq"
            className="block text-neutral-600 hover:text-pkl-green transition-colors font-fredoka font-medium py-2"
            data-testid="mobile-nav-faq"
            onClick={closeMobileMenu}
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
