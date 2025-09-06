import React from "react";

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800/90 mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-neutral-600">
            The PKL.CLUB ecosystem roadmap lays out all the key developments
            that have been completed and are still upcoming.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pkl-green via-pkl-yellow to-pkl-orange rounded-full"></div>

          {/* Phase Items */}
          <div className="space-y-24">
            {/* Q4 2025 */}
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pkl-green rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className="w-1/2 pr-12">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ml-auto max-w-md"
                  data-testid="roadmap-q4-2025"
                >
                  <h3 className="text-2xl font-bold text-neutral-800/90 mb-4">
                    Q4 2025
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-pkl-green"></i>
                      <span>$PKL Presale is completed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-pkl-green"></i>
                      <span>$PKL token listed on Uniswap</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-pkl-green"></i>
                      <span>PKL.CLUB platform MVP is unveiled</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-pkl-green"></i>
                      <span>PKL.Club team is formed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-pkl-yellow"></i>
                      <span>First PKL.CLUB event is announced</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/2 pl-12">
                {/* Empty space for alternating layout */}
              </div>
            </div>

            {/* Q1 2026 */}
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pkl-yellow rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className="w-1/2 pr-12">
                {/* Empty space for alternating layout */}
              </div>

              <div className="w-1/2 pl-12">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md"
                  data-testid="roadmap-q1-2026"
                >
                  <h3 className="text-2xl font-bold text-neutral-800/90 mb-4">
                    Q1 2026
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>
                        Beta version of the PKL.CLUB platform is launched
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-pkl-yellow"></i>
                      <span>
                        V1 includes profile, Play 4 Pickles and crypto wallet
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Major industry partners are signed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>PKL.CLUB CEO is hired</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Q2 2026 */}
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pkl-orange rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className="w-1/2 pr-12">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ml-auto max-w-md"
                  data-testid="roadmap-q2-2026"
                >
                  <h3 className="text-2xl font-bold text-neutral-800/90 mb-4">
                    Q2 2026
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>V2 of PKL.CLUB platform is released</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Player and Vendor onboarding</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-pkl-yellow"></i>
                      <span>
                        Mass marketing to the Pickleball industry begins
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Schedule of PKL.CLUB events is released</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/2 pl-12">
                {/* Empty space for alternating layout */}
              </div>
            </div>

            {/* Q3 2026 */}
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className="w-1/2 pr-12">
                {/* Empty space for alternating layout */}
              </div>

              <div className="w-1/2 pl-12">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md"
                  data-testid="roadmap-q3-2026"
                >
                  <h3 className="text-2xl font-bold text-neutral-800/90 mb-4">
                    Q3 2026
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>V3 of PKL.CLUB platform is released</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>
                        Play 4 Pickle global is added. Risk Pickles on any match
                        globally
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-pkl-yellow"></i>
                      <span>VR pickleball partner is acquired</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>PKL lending is under development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
