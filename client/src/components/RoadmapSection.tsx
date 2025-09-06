import React, { useState } from 'react';

const RoadmapSection = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (stepNumber: number) => {
    setOpenStep(openStep === stepNumber ? null : stepNumber);
  };

  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      quarter: "Q1 2024",
      status: "completed",
      items: [
        "Token smart contract development and audit",
        "Presale launch and community building",
        "Core team assembly and advisory board",
        "Initial partnerships with pickleball organizations",
        "Website and social media presence establishment"
      ]
    },
    {
      phase: "Phase 2",
      title: "Platform Development",
      quarter: "Q2 2024",
      status: "in-progress",
      items: [
        "Mobile app beta version release",
        "Player profile system implementation",
        "Basic tournament and event features",
        "NFT marketplace development",
        "Community forum and messaging system"
      ]
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Expansion",
      quarter: "Q3 2024",
      status: "upcoming",
      items: [
        "Play-to-earn gaming mechanics launch",
        "Advanced tournament management system",
        "Staking and rewards program implementation",
        "Partnership integrations with equipment brands",
        "Cross-platform compatibility and web version"
      ]
    },
    {
      phase: "Phase 4",
      title: "Global Scaling",
      quarter: "Q4 2024",
      status: "upcoming",
      items: [
        "International market expansion",
        "Advanced analytics and AI-powered features",
        "Professional league partnerships",
        "Governance token implementation",
        "Major exchange listings and liquidity pools"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-pkl-green';
      case 'in-progress':
        return 'bg-pkl-yellow';
      case 'upcoming':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return 'fas fa-check';
      case 'in-progress':
        return 'fas fa-clock';
      case 'upcoming':
        return 'fas fa-hourglass-start';
      default:
        return 'fas fa-hourglass-start';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey as we build the future of decentralized pickleball community and revolutionize the sport
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg hidden md:block" 
                     style={{backgroundColor: getStatusColor(phase.status).replace('bg-', '#')}}></div>

                {/* Content Card */}
                <div className="md:ml-20 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div 
                    className="p-8 cursor-pointer"
                    onClick={() => toggleStep(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${getStatusColor(phase.status)} rounded-xl flex items-center justify-center`}>
                          <i className={`${getStatusIcon(phase.status)} text-white text-lg`}></i>
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                            <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                              {phase.quarter}
                            </span>
                          </div>
                          <h4 className="text-xl text-gray-700">{phase.title}</h4>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className={`text-sm font-semibold ${
                            phase.status === 'completed' ? 'text-pkl-green' :
                            phase.status === 'in-progress' ? 'text-pkl-yellow' :
                            'text-gray-500'
                          }`}>
                            {phase.status === 'completed' ? 'Completed' :
                             phase.status === 'in-progress' ? 'In Progress' :
                             'Upcoming'}
                          </div>
                        </div>
                        <i className={`fas fa-chevron-${openStep === index ? 'up' : 'down'} text-gray-400`}></i>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {openStep === index && (
                    <div className="px-8 pb-8 border-t border-gray-100">
                      <div className="pt-6">
                        <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Milestones:</h5>
                        <div className="space-y-3">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-pkl-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i className="fas fa-check text-pkl-green text-xs"></i>
                              </div>
                              <span className="text-gray-700 leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-pkl-green to-pkl-yellow rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Us on This Exciting Journey
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Be part of the revolution that's transforming pickleball into a decentralized, rewarding experience for players worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-pkl-green px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Buy PKL Tokens
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-pkl-green transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-pkl-green rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check-circle text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-pkl-green mb-2">1</div>
            <div className="text-gray-600">Phase Completed</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-cog text-pkl-green text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-pkl-yellow mb-2">1</div>
            <div className="text-gray-600">Phase In Progress</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-calendar text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-gray-400 mb-2">2</div>
            <div className="text-gray-600">Phases Upcoming</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-pkl-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-rocket text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-pkl-orange mb-2">2024</div>
            <div className="text-gray-600">Launch Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;