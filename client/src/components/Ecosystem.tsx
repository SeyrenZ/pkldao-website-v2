import {
  BatteryFullIcon,
  BatteryIcon,
  ChartNoAxesColumnIncreasingIcon,
  WifiIcon,
} from "lucide-react";
import React from "react";

interface EcosystemTab {
  id: string;
  title: string;
  description: string;
  icon: string;
  isActive?: boolean;
}

const ecosystemTabs: EcosystemTab[] = [
  {
    id: "player-profiles",
    title: "Player Profiles",
    description: "XP, stats, achievements, NFT badges",
    icon: "fas fa-user",

    isActive: true,
  },
  {
    id: "club-pages",
    title: "Club Pages",
    description: "Showcase members, events, gear",
    icon: "fas fa-users",
  },
  {
    id: "marketplace",
    title: "Marketplace",
    description: "Gear, services, NFT collectibles, event tickets",
    icon: "fas fa-store",
  },
  {
    id: "messaging",
    title: "Messaging & Groups",
    description: "Global and local community hubs",
    icon: "fas fa-comments",
  },
  {
    id: "events",
    title: "Events",
    description: "Tournament registrations, NFT tickets, $PKL prize pools",
    icon: "fas fa-calendar",
  },
  {
    id: "leaderboards",
    title: "Leaderboards & Collectibles",
    description: "Local, national, and global rankings with NFT achievements",
    icon: "fas fa-medal",
  },
];

const EcosystemTabComponent: React.FC<{ tab: EcosystemTab }> = ({ tab }) => (
  <div
    className={`ecosystem-tab bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-md transition-all ${
      tab.isActive ? "border-l-4 border-pkl-green" : ""
    }`}
    data-testid={`tab-${tab.id}`}
  >
    <div className="flex items-center space-x-4">
      <div
        className={`w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center`}
      >
        <i className={`${tab.icon} text-pkl-green text-xl`}></i>
      </div>
      <div>
        <h3 className="font-semibold text-neutral-800/90">{tab.title}</h3>
        <p className="text-neutral-600 text-sm">{tab.description}</p>
      </div>
    </div>
  </div>
);

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800/90 mb-6 font-luckiest-guy tracking-widest">
            The PKL.CLUB Ecosystem
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Navigation */}
          <div className="space-y-4 sm:order-1 order-2">
            {ecosystemTabs.map((tab) => (
              <EcosystemTabComponent key={tab.id} tab={tab} />
            ))}
          </div>

          {/* Right Mockup */}
          <div className="w-full flex flex-col items-center justify-center sm:order-2 order-1">
            <div className="relative w-fit">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="w-full flex items-center justify-between px-9 pt-2">
                    <div className="font-medium">10:31</div>
                    <div className="flex items-center gap-2">
                      <ChartNoAxesColumnIncreasingIcon className="w-5 h-5" />
                      <WifiIcon className="w-5 h-5" />
                      <BatteryFullIcon className="w-5 h-5" />
                    </div>
                  </div>
                  {/* Phone Screen Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">PKL Profile</div>
                    </div>

                    {/* Profile Section */}
                    <div className="bg-pkl-green rounded-2xl p-4 text-white">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white"></i>
                        </div>
                        <div>
                          <div className="font-bold">Alex Rodriguez</div>
                          <div className="text-sm opacity-90">
                            Level 42 • 2,847 XP
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-full h-2 mb-2">
                        <div className="bg-white h-full w-3/4 rounded-full"></div>
                      </div>
                      <div className="text-xs">153 XP to next level</div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-zinc-100 rounded-xl p-3 text-center">
                        <div className="font-bold text-pkl-green">147</div>
                        <div className="text-xs text-neutral-600">
                          Matches Won
                        </div>
                      </div>
                      <div className="bg-zinc-100 rounded-xl p-3 text-center">
                        <div className="font-bold text-pkl-orange">23</div>
                        <div className="text-xs text-neutral-600">
                          Tournaments
                        </div>
                      </div>
                    </div>

                    {/* NFT Badges */}
                    <div className="space-y-3">
                      <div className="font-semibold text-neutral-800/90">
                        Achievement Badges
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-12 h-12 bg-pkl-green rounded-xl flex items-center justify-center">
                          <i className="fas fa-trophy text-white"></i>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-pkl-orange to-red-500 rounded-xl flex items-center justify-center">
                          <i className="fas fa-fire text-white"></i>
                        </div>
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <i className="fas fa-star text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center shadow-lg floating-element">
                <i className="fas fa-table-tennis-paddle-ball text-pkl-green text-xl"></i>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg floating-element"
                style={{ animationDelay: "2s" }}
              >
                <i className="fas fa-coins text-pkl-green"></i>
              </div>
            </div>
            <div className="text-center mt-12">
              <button
                className="bg-pkl-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors"
                data-testid="button-buy-pkl-ecosystem"
              >
                Buy $PKL Token
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
