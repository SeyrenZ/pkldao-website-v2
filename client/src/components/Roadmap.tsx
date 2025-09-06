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
            {/* Phase 1 */}
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pkl-green rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className="w-1/2 pr-12">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ml-auto max-w-md"
                  data-testid="roadmap-phase-1"
                >
                  <h3 className="text-2xl font-bold text-neutral-800/90 mb-4">
                    PHASE 1
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-pkl-green"></i>
                      <span>Presale Launch</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-circle text-neutral-300"></i>
                      <span>Token Launch</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-circle text-neutral-300"></i>
                      <span>MVP Release</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-pkl-green"></i>
                      <span>Core Community</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/2 pl-12">
                {/* Empty space for alternating layout */}
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pkl-yellow rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className="w-1/2 pr-12">
                {/* Empty space for alternating layout */}
              </div>

              <div className="w-1/2 pl-12">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md"
                  data-testid="roadmap-phase-2"
                >
                  <h3 className="text-2xl font-bold text-neutral-800/90 mb-4">
                    PHASE 2
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Platform V1</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Player/Club Onboarding</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Events Calendar</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Marketplace Launch</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pkl-orange rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className="w-1/2 pr-12">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ml-auto max-w-md"
                  data-testid="roadmap-phase-3"
                >
                  <h3 className="text-2xl font-bold text-neutral-800/90 mb-4">
                    PHASE 3
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>V2 with Advanced Profiles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Social Layer & Highlight Reels</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>VR Pickleball</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Global Tournaments</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/2 pl-12">
                {/* Empty space for alternating layout */}
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className="w-1/2 pr-12">
                {/* Empty space for alternating layout */}
              </div>

              <div className="w-1/2 pl-12">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md"
                  data-testid="roadmap-phase-4"
                >
                  <h3 className="text-2xl font-bold text-neutral-800/90 mb-4">
                    PHASE 4
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>DAO Governance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Loans for Clubs/Players</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Global Expansion</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-clock text-neutral-400"></i>
                      <span>Enterprise Solutions</span>
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
