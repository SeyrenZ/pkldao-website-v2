import {
  BatteryFullIcon,
  BatteryIcon,
  ChartNoAxesColumnIncreasingIcon,
  WifiIcon,
} from "lucide-react";
import React, { useState } from "react";

interface EcosystemTab {
  id: string;
  title: string;
  description: string;
  icon: string;
  isActive?: boolean;
}

const ecosystemTabs: EcosystemTab[] = [
  {
    id: "player-journey",
    title: "Player Journey",
    description:
      "Earn XP through play, stake tokens for rewards, compete in tournaments",
    icon: "fas fa-user",
  },
  {
    id: "club-journey",
    title: "Club Journey",
    description: "Run events, engage your community, reward loyal members",
    icon: "fas fa-users",
  },
  {
    id: "vendor-journey",
    title: "Vendor Journey",
    description:
      "Showcase products, reach engaged players, build trusted relationships",
    icon: "fas fa-store",
  },
  {
    id: "community-hub",
    title: "Community Hub",
    description: "Connect globally, share experiences, grow the sport together",
    icon: "fas fa-comments",
  },
  {
    id: "token-utility",
    title: "Token Utility",
    description:
      "Membership access, rewards, governance participation, platform benefits",
    icon: "fas fa-coins",
  },
  {
    id: "achievements",
    title: "Achievements & Recognition",
    description: "Earn badges, climb leaderboards, unlock exclusive perks",
    icon: "fas fa-medal",
  },
];

const EcosystemTabComponent: React.FC<{ 
  tab: EcosystemTab; 
  isActive: boolean; 
  onClick: () => void; 
}> = ({ tab, isActive, onClick }) => (
  <div
    className={`ecosystem-tab bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-md transition-all ${
      isActive ? "border-l-4 border-pkl-green" : ""
    }`}
    data-testid={`tab-${tab.id}`}
    onClick={onClick}
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
  const [activeTab, setActiveTab] = useState("player-journey");

  const getPhoneContent = () => {
    switch (activeTab) {
      case "player-journey":
        return (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">PKL Profile</div>
            </div>
            <div className="bg-pkl-green rounded-2xl p-4 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white"></i>
                </div>
                <div>
                  <div className="font-bold">Alex Rodriguez</div>
                  <div className="text-sm opacity-90">Level 42 • 2,847 XP</div>
                </div>
              </div>
              <div className="bg-white/20 rounded-full h-2 mb-2">
                <div className="bg-white h-full w-3/4 rounded-full"></div>
              </div>
              <div className="text-xs">153 XP to next level</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-100 rounded-xl p-3 text-center">
                <div className="font-bold text-pkl-green">147</div>
                <div className="text-xs text-neutral-600">Matches Won</div>
              </div>
              <div className="bg-zinc-100 rounded-xl p-3 text-center">
                <div className="font-bold text-pkl-orange">23</div>
                <div className="text-xs text-neutral-600">Tournaments</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-neutral-800/90">Achievement Badges</div>
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
        );
      case "club-journey":
        return (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">Club Dashboard</div>
            </div>
            <div className="bg-pkl-green rounded-2xl p-4 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-white"></i>
                </div>
                <div>
                  <div className="font-bold">Sunset Pickleball Club</div>
                  <div className="text-sm opacity-90">342 Active Members</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-100 rounded-xl p-3 text-center">
                <div className="font-bold text-pkl-green">15</div>
                <div className="text-xs text-neutral-600">Events This Month</div>
              </div>
              <div className="bg-zinc-100 rounded-xl p-3 text-center">
                <div className="font-bold text-pkl-orange">89%</div>
                <div className="text-xs text-neutral-600">Engagement Rate</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-neutral-800/90">Upcoming Events</div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Weekly Tournament</div>
                <div className="text-xs text-neutral-600">Saturday 2:00 PM</div>
              </div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Beginner Clinic</div>
                <div className="text-xs text-neutral-600">Sunday 10:00 AM</div>
              </div>
            </div>
          </div>
        );
      case "vendor-journey":
        return (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">Vendor Portal</div>
            </div>
            <div className="bg-pkl-green rounded-2xl p-4 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-store text-white"></i>
                </div>
                <div>
                  <div className="font-bold">Paddle Pro Shop</div>
                  <div className="text-sm opacity-90">Premium Partner</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-100 rounded-xl p-3 text-center">
                <div className="font-bold text-pkl-green">1.2K</div>
                <div className="text-xs text-neutral-600">Monthly Views</div>
              </div>
              <div className="bg-zinc-100 rounded-xl p-3 text-center">
                <div className="font-bold text-pkl-orange">47</div>
                <div className="text-xs text-neutral-600">Products Listed</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-neutral-800/90">Featured Products</div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Pro Carbon Paddle</div>
                <div className="text-xs text-pkl-green font-bold">$149.99</div>
              </div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Tournament Balls</div>
                <div className="text-xs text-pkl-green font-bold">$24.99</div>
              </div>
            </div>
          </div>
        );
      case "community-hub":
        return (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">Community Feed</div>
            </div>
            <div className="bg-pkl-green rounded-2xl p-4 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-comments text-white"></i>
                </div>
                <div>
                  <div className="font-bold">Global Community</div>
                  <div className="text-sm opacity-90">12.5K Active Members</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-neutral-800/90">Recent Posts</div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Sarah M.</div>
                <div className="text-xs text-neutral-600">Just won my first tournament! 🏆</div>
              </div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Mike R.</div>
                <div className="text-xs text-neutral-600">Looking for doubles partner in NYC</div>
              </div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Club Central</div>
                <div className="text-xs text-neutral-600">New courts opening next month!</div>
              </div>
            </div>
          </div>
        );
      case "token-utility":
        return (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">PKL Wallet</div>
            </div>
            <div className="bg-pkl-green rounded-2xl p-4 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-coins text-white"></i>
                </div>
                <div>
                  <div className="font-bold">PKL Balance</div>
                  <div className="text-sm opacity-90">2,847 PKL Tokens</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-100 rounded-xl p-3 text-center">
                <div className="font-bold text-pkl-green">156</div>
                <div className="text-xs text-neutral-600">Staked Tokens</div>
              </div>
              <div className="bg-zinc-100 rounded-xl p-3 text-center">
                <div className="font-bold text-pkl-orange">12%</div>
                <div className="text-xs text-neutral-600">APY Rewards</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-neutral-800/90">Token Utilities</div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Premium Membership</div>
                <div className="text-xs text-pkl-green font-bold">100 PKL/month</div>
              </div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Tournament Entry</div>
                <div className="text-xs text-pkl-green font-bold">50 PKL</div>
              </div>
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">Achievements</div>
            </div>
            <div className="bg-pkl-green rounded-2xl p-4 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-medal text-white"></i>
                </div>
                <div>
                  <div className="font-bold">Achievement Hunter</div>
                  <div className="text-sm opacity-90">Level 8 • 47 Badges</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-3 text-center">
                <i className="fas fa-trophy text-white text-lg mb-1"></i>
                <div className="text-xs text-white font-bold">Champion</div>
              </div>
              <div className="bg-gradient-to-br from-pkl-orange to-red-500 rounded-xl p-3 text-center">
                <i className="fas fa-fire text-white text-lg mb-1"></i>
                <div className="text-xs text-white font-bold">Hot Streak</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 text-center">
                <i className="fas fa-star text-white text-lg mb-1"></i>
                <div className="text-xs text-white font-bold">All-Star</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-neutral-800/90">Recent Unlocks</div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Tournament Victor</div>
                <div className="text-xs text-neutral-600">Won 5 tournaments</div>
              </div>
              <div className="bg-zinc-100 rounded-xl p-3">
                <div className="font-medium text-sm">Community Leader</div>
                <div className="text-xs text-neutral-600">Helped 100 players</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="ecosystem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800/90 mb-6 font-luckiest-guy tracking-widest">
            Three Journeys, One Community
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're a player seeking competition, a club building
            community, or a vendor reaching customers, PKL.CLUB connects
            everyone in the Pickleball ecosystem through shared value and
            authentic engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Navigation */}
          <div className="space-y-4 sm:order-1 order-2">
            {ecosystemTabs.map((tab) => (
              <EcosystemTabComponent 
                key={tab.id} 
                tab={tab} 
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
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
                  {getPhoneContent()}
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
