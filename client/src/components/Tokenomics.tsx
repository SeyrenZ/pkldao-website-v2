import React from "react";

const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="py-20 bg-gradient-to-br from-pkl-green to-green-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            $PKL Tokenomics
          </h2>
          <p className="text-2xl lg:text-3xl text-pkl-yellow font-semibold">
            Total Supply: 10,000,000,000 $PKL
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Pie Chart */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* SVG Pie Chart */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full transform -rotate-90"
              >
                {/* Presale 20% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="transparent"
                  stroke="#c4f000"
                  strokeWidth="20"
                  strokeDasharray="100.53 401.06"
                  strokeDashoffset="0"
                />
                {/* Development 25% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="transparent"
                  stroke="#00a86b"
                  strokeWidth="20"
                  strokeDasharray="125.66 401.06"
                  strokeDashoffset="-100.53"
                />
                {/* Staking 15% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="transparent"
                  stroke="#ff533e"
                  strokeWidth="20"
                  strokeDasharray="75.40 401.06"
                  strokeDashoffset="-226.19"
                />
                {/* Partners 15% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="transparent"
                  stroke="#4f46e5"
                  strokeWidth="20"
                  strokeDasharray="75.40 401.06"
                  strokeDashoffset="-301.59"
                />
                {/* Exchanges 15% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="transparent"
                  stroke="#06b6d4"
                  strokeWidth="20"
                  strokeDasharray="75.40 401.06"
                  strokeDashoffset="-376.99"
                />
                {/* Founders 10% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="transparent"
                  stroke="#f59e0b"
                  strokeWidth="20"
                  strokeDasharray="50.27 401.06"
                  strokeDashoffset="-452.39"
                />
              </svg>

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <i className="fas fa-table-tennis-paddle-ball text-pkl-green text-2xl"></i>
                </div>
              </div>

              {/* Percentage Labels */}
              <div className="absolute top-4 right-12 text-sm font-bold">
                20%
              </div>
              <div className="absolute top-12 right-4 text-sm font-bold">
                25%
              </div>
              <div className="absolute bottom-12 right-8 text-sm font-bold">
                15%
              </div>
              <div className="absolute bottom-8 left-12 text-sm font-bold">
                15%
              </div>
              <div className="absolute top-16 left-4 text-sm font-bold">
                15%
              </div>
              <div className="absolute top-4 left-12 text-sm font-bold">
                10%
              </div>
            </div>
          </div>

          {/* Right: Distribution Details */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>

            <div className="space-y-4">
              <div
                className="flex items-center justify-between bg-white/10 rounded-xl p-4"
                data-testid="distribution-presale"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-pkl-yellow rounded-full"></div>
                  <span className="font-semibold">Presale</span>
                </div>
                <span className="font-bold">2,000,000,000</span>
              </div>

              <div
                className="flex items-center justify-between bg-white/10 rounded-xl p-4"
                data-testid="distribution-development"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-pkl-green rounded-full"></div>
                  <span className="font-semibold">Development</span>
                </div>
                <span className="font-bold">2,500,000,000</span>
              </div>

              <div
                className="flex items-center justify-between bg-white/10 rounded-xl p-4"
                data-testid="distribution-staking"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-pkl-orange rounded-full"></div>
                  <span className="font-semibold">Staking</span>
                </div>
                <span className="font-bold">1,500,000,000</span>
              </div>

              <div
                className="flex items-center justify-between bg-white/10 rounded-xl p-4"
                data-testid="distribution-partners"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                  <span className="font-semibold">Partners</span>
                </div>
                <span className="font-bold">1,500,000,000</span>
              </div>

              <div
                className="flex items-center justify-between bg-white/10 rounded-xl p-4"
                data-testid="distribution-exchanges"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <span className="font-semibold">Exchanges</span>
                </div>
                <span className="font-bold">1,500,000,000</span>
              </div>

              <div
                className="flex items-center justify-between bg-white/10 rounded-xl p-4"
                data-testid="distribution-founders"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                  <span className="font-semibold">Founders Fund</span>
                </div>
                <span className="font-bold">1,000,000,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
