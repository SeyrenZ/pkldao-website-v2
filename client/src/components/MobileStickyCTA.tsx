import React, { useState, useEffect } from 'react';

const MobileStickyCTA = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    checkMobile();
    handleScroll();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMobile || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between space-x-3">
          {/* Left - Token Info */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-pkl-green rounded-xl flex items-center justify-center">
              <i className="fas fa-coins text-white text-lg"></i>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">PKL Token</div>
              <div className="text-xs text-gray-600">$0.045 • Presale Live</div>
            </div>
          </div>

          {/* Right - CTA Buttons */}
          <div className="flex space-x-2">
            <button className="bg-pkl-green text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-600 transition-colors">
              Buy Now
            </button>
            <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors">
              <i className="fas fa-info-circle"></i>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span>Presale Progress</span>
            <span>75%</span>
          </div>
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-pkl-green to-pkl-yellow h-full rounded-full" style={{width: '75%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyCTA;