import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Home = () => {
  const [countdownTime, setCountdownTime] = useState({
    days: 7,
    hours: 14,
    minutes: 28,
    seconds: 42
  });
  
  const [presaleStats, setPresaleStats] = useState({
    totalRaised: 2847293.84,
    currentPrice: 0.045,
    progress: 75
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is PKL.CLUB?",
      answer: "PKL.CLUB is the world's first decentralized Pickleball community platform powered by the $PKL token. It combines social networking, tournament management, marketplace functionality, and gamification features to create a comprehensive ecosystem for Pickleball players worldwide."
    },
    {
      question: "What is $PKL token?",
      answer: "$PKL is the native utility token of the PKL.CLUB ecosystem. It's used for tournament registration, marketplace transactions, staking rewards, governance voting, and accessing premium features. Token holders receive various benefits including reduced fees, exclusive tournament access, and community governance rights."
    },
    {
      question: "How do I stake tokens?",
      answer: "Staking will be available through the PKL.CLUB platform once it launches. Simply connect your wallet, choose your staking amount, and lock your tokens for various periods to earn rewards. Longer staking periods typically offer higher APY rates and additional XP bonuses."
    },
    {
      question: "Can I use $PKL in real tournaments?",
      answer: "Yes! $PKL tokens can be used to register for real-world tournaments, pay for equipment in our marketplace, and win prizes in both virtual and physical competitions. We're partnering with Pickleball clubs and tournament organizers worldwide to expand real-world utility."
    },
    {
      question: "Why should I join the presale?",
      answer: "Presale participants get tokens at the lowest price before public launch, early access to all PKL.CLUB features, exclusive NFT badges, founder status in the community, and higher staking rewards. It's the best opportunity to become a founding member of the Pickleball revolution."
    }
  ];

  return (
    <div className="bg-pkl-white min-h-screen">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-pkl-green/20 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 floating-element opacity-30">
          <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-40 right-20 floating-element opacity-40" style={{animationDelay: '2s'}}>
          <div className="w-16 h-16 bg-pkl-yellow/30 rounded-xl backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 floating-element opacity-25" style={{animationDelay: '4s'}}>
          <div className="w-24 h-24 bg-white/15 rounded-2xl backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                World's First 
                <span className="text-pkl-yellow"> Decentralized</span>
                <br />Pickleball Community
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold">
                The PKL Token is Coming Soon!
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Join the revolution in decentralized sports communities. The future of Pickleball is almost here!
              </p>
              
              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-pkl-green text-sm"></i>
                  </div>
                  <span className="text-lg">Play & Earn: climb leaderboards, win rewards, unlock collectibles.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-pkl-green text-sm"></i>
                  </div>
                  <span className="text-lg">All-in-One Platform: profiles, marketplace, messaging, and events.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-pkl-green text-sm"></i>
                  </div>
                  <span className="text-lg">Real Utility: pay for gear, tickets, and prizes with $PKL.</span>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex space-x-4 pt-4">
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-gray-800 transition-colors" data-testid="button-google-play">
                  <i className="fab fa-google-play"></i>
                  <span>Google Play</span>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-gray-800 transition-colors" data-testid="button-app-store">
                  <i className="fab fa-apple"></i>
                  <span>App Store</span>
                </button>
              </div>
            </div>

            {/* Right Presale Box */}
            <div className="lg:sticky lg:top-24 presale-box">
              <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl max-w-md mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Buy $PKL Token in Presale Now!</h3>
                  <div className="flex justify-center space-x-1 mb-4">
                    <div className="w-2 h-2 bg-pkl-yellow rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-pkl-yellow rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-pkl-yellow rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <div className="countdown-item bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white" data-testid="countdown-days">{String(countdownTime.days).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">Days</div>
                  </div>
                  <div className="countdown-item bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white" data-testid="countdown-hours">{String(countdownTime.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">Hours</div>
                  </div>
                  <div className="countdown-item bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white" data-testid="countdown-minutes">{String(countdownTime.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">Minutes</div>
                  </div>
                  <div className="countdown-item bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white" data-testid="countdown-seconds">{String(countdownTime.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-300">Seconds</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="text-center text-white text-sm mb-2">UNTIL PRICE INCREASE</div>
                  <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="progress-bar h-full rounded-full" style={{width: `${presaleStats.progress}%`}}></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="text-center mb-6 space-y-2">
                  <div className="text-white">
                    <span className="text-sm text-gray-300">TOTAL USD RAISED: </span>
                    <span className="font-bold" data-testid="text-total-raised">${presaleStats.totalRaised.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  </div>
                  <div className="text-white">
                    <span className="text-sm text-gray-300">1 $PKL = </span>
                    <span className="font-bold" data-testid="text-current-price">${presaleStats.currentPrice.toFixed(3)}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-pkl-green text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors" data-testid="button-buy-card">
                    Buy With Card
                  </button>
                  <button className="w-full bg-pkl-orange text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-600 transition-colors" data-testid="button-buy-crypto">
                    Buy With Crypto
                  </button>
                </div>

                <div className="text-center mt-4">
                  <a href="#" className="text-pkl-yellow text-sm hover:underline" data-testid="link-wallet-guide">
                    Don't have a wallet?
                  </a>
                </div>

                <div className="text-center mt-4 text-xs text-gray-400">
                  Ethereum-based • Secure • Instant utility
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy PKL Now Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Buy $PKL Token Now!</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              PKL.CLUB combines the world's fastest growing sport with blockchain innovation. Owning $PKL gives you more than a token — it gives you a place in the Pickleball revolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-scale" data-testid="card-benefit-tournaments">
              <div className="w-16 h-16 bg-pkl-green/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-trophy text-pkl-green text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusive Access to Tournaments</h3>
              <p className="text-gray-600">Use $PKL for registration and prizes in exclusive tournaments worldwide.</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-scale" data-testid="card-benefit-fees">
              <div className="w-16 h-16 bg-pkl-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-percentage text-pkl-green text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reduced Marketplace Fees</h3>
              <p className="text-gray-600">Lower costs for players and vendors inside PKL.CLUB marketplace.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-scale" data-testid="card-benefit-staking">
              <div className="w-16 h-16 bg-pkl-orange/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-coins text-pkl-green text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Staking Rewards</h3>
              <p className="text-gray-600">Stake $PKL to earn yield and XP boosts in the PKL.CLUB ecosystem.</p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-scale" data-testid="card-benefit-governance">
              <div className="w-16 h-16 bg-pkl-green/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-vote-yea text-pkl-green text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Governance</h3>
              <p className="text-gray-600">Vote on new features, tournaments, and partnerships in the DAO.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PKL.CLUB Ecosystem */}
      <section id="ecosystem" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">The PKL.CLUB Ecosystem</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Navigation */}
            <div className="space-y-4">
              <div className="ecosystem-tab bg-white rounded-xl p-6 border-l-4 border-pkl-green shadow-sm cursor-pointer hover:shadow-md transition-all" data-testid="tab-player-profiles">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pkl-green/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-user text-pkl-green"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Player Profiles</h3>
                    <p className="text-gray-600 text-sm">XP, stats, achievements, NFT badges</p>
                  </div>
                </div>
              </div>

              <div className="ecosystem-tab bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all" data-testid="tab-club-pages">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pkl-yellow/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-users text-pkl-green"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Club Pages</h3>
                    <p className="text-gray-600 text-sm">Showcase members, events, gear</p>
                  </div>
                </div>
              </div>

              <div className="ecosystem-tab bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all" data-testid="tab-marketplace">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pkl-orange/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-store text-pkl-green"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Marketplace</h3>
                    <p className="text-gray-600 text-sm">Gear, services, NFT collectibles, event tickets</p>
                  </div>
                </div>
              </div>

              <div className="ecosystem-tab bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all" data-testid="tab-messaging">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pkl-green/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-comments text-pkl-green"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Messaging & Groups</h3>
                    <p className="text-gray-600 text-sm">Global and local community hubs</p>
                  </div>
                </div>
              </div>

              <div className="ecosystem-tab bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all" data-testid="tab-events">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pkl-yellow/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-calendar text-pkl-green"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Events</h3>
                    <p className="text-gray-600 text-sm">Tournament registrations, NFT tickets, $PKL prize pools</p>
                  </div>
                </div>
              </div>

              <div className="ecosystem-tab bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all" data-testid="tab-leaderboards">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pkl-orange/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-medal text-pkl-green"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Leaderboards & Collectibles</h3>
                    <p className="text-gray-600 text-sm">Local, national, and global rankings with NFT achievements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold">PKL Profile</div>
                        <div className="w-8 h-8 bg-pkl-green rounded-full"></div>
                      </div>

                      {/* Profile Section */}
                      <div className="bg-gradient-to-r from-pkl-green to-pkl-yellow rounded-2xl p-4 text-white">
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

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 rounded-xl p-3 text-center">
                          <div className="font-bold text-pkl-green">147</div>
                          <div className="text-xs text-gray-600">Matches Won</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3 text-center">
                          <div className="font-bold text-pkl-orange">23</div>
                          <div className="text-xs text-gray-600">Tournaments</div>
                        </div>
                      </div>

                      {/* NFT Badges */}
                      <div className="space-y-3">
                        <div className="font-semibold text-gray-900">Achievement Badges</div>
                        <div className="flex space-x-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-pkl-yellow to-pkl-green rounded-xl flex items-center justify-center">
                            <i className="fas fa-trophy text-white"></i>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-pkl-orange to-red-500 rounded-xl flex items-center justify-center">
                            <i className="fas fa-fire text-white"></i>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pkl-green rounded-xl flex items-center justify-center">
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
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pkl-orange rounded-xl flex items-center justify-center shadow-lg floating-element" style={{animationDelay: '2s'}}>
                  <i className="fas fa-coins text-white"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-pkl-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors" data-testid="button-buy-pkl-ecosystem">
              Buy $PKL Token
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">PKL.CLUB Key Features</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-pkl-green to-green-600 rounded-3xl p-8 text-white relative overflow-hidden" data-testid="card-feature-gamified">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <i className="fas fa-gamepad text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Gamified Player Profiles</h3>
                <p className="text-white/90 mb-6">Level up, unlock achievements, earn rewards. Track your progress with our comprehensive XP system and showcase your skills.</p>
                
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-white text-sm"></i>
                    </div>
                    <div>
                      <div className="font-bold text-sm">Mike Chen</div>
                      <div className="text-xs opacity-80">Level 38</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-full h-2">
                    <div className="bg-pkl-yellow h-full w-2/3 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-pkl-yellow to-yellow-500 rounded-3xl p-8 text-gray-900 relative overflow-hidden" data-testid="card-feature-community">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mb-6">
                  <i className="fas fa-users text-gray-900 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Community Hub</h3>
                <p className="text-gray-800 mb-6">Join clubs, groups, and global Pickleball events. Connect with players worldwide and build lasting friendships on and off the court.</p>
                
                <div className="bg-white/40 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-pkl-green rounded-full flex items-center justify-center">
                        <i className="fas fa-users text-white text-xs"></i>
                      </div>
                      <div className="text-sm font-medium">NYC Pickleball Club</div>
                    </div>
                    <div className="text-xs">Weekend Tournament - 47 players joined</div>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-pkl-green rounded-full"></div>
                      <div className="w-4 h-4 bg-pkl-orange rounded-full"></div>
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-pkl-orange to-red-500 rounded-3xl p-8 text-white relative overflow-hidden" data-testid="card-feature-marketplace">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <i className="fas fa-shopping-cart text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Marketplace with $PKL</h3>
                <p className="text-white/90 mb-6">Buy, sell, and trade Pickleball gear and digital assets. Use $PKL tokens for seamless transactions and exclusive discounts.</p>
                
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-table-tennis-paddle-ball text-white"></i>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">Pro Paddle</div>
                      <div className="text-xs opacity-80">2,450 $PKL</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1 bg-pkl-green text-white text-xs py-1 px-2 rounded text-center">Buy</div>
                    <div className="flex-1 bg-white/20 text-xs py-1 px-2 rounded text-center">Details</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 bg-gradient-to-br from-pkl-green to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">$PKL Tokenomics</h2>
            <p className="text-2xl lg:text-3xl text-pkl-yellow font-semibold">Total Supply: 10,000,000,000 $PKL</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Pie Chart */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* SVG Pie Chart */}
                <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                  {/* Presale 20% */}
                  <circle cx="100" cy="100" r="80" fill="transparent" stroke="#c4f000" strokeWidth="20" 
                          strokeDasharray="100.53 401.06" strokeDashoffset="0" />
                  {/* Development 25% */}
                  <circle cx="100" cy="100" r="80" fill="transparent" stroke="#00a86b" strokeWidth="20" 
                          strokeDasharray="125.66 401.06" strokeDashoffset="-100.53" />
                  {/* Staking 15% */}
                  <circle cx="100" cy="100" r="80" fill="transparent" stroke="#ff533e" strokeWidth="20" 
                          strokeDasharray="75.40 401.06" strokeDashoffset="-226.19" />
                  {/* Partners 15% */}
                  <circle cx="100" cy="100" r="80" fill="transparent" stroke="#4f46e5" strokeWidth="20" 
                          strokeDasharray="75.40 401.06" strokeDashoffset="-301.59" />
                  {/* Exchanges 15% */}
                  <circle cx="100" cy="100" r="80" fill="transparent" stroke="#06b6d4" strokeWidth="20" 
                          strokeDasharray="75.40 401.06" strokeDashoffset="-376.99" />
                  {/* Founders 10% */}
                  <circle cx="100" cy="100" r="80" fill="transparent" stroke="#f59e0b" strokeWidth="20" 
                          strokeDasharray="50.27 401.06" strokeDashoffset="-452.39" />
                </svg>
                
                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <i className="fas fa-table-tennis-paddle-ball text-pkl-green text-2xl"></i>
                  </div>
                </div>

                {/* Percentage Labels */}
                <div className="absolute top-4 right-12 text-sm font-bold">20%</div>
                <div className="absolute top-12 right-4 text-sm font-bold">25%</div>
                <div className="absolute bottom-12 right-8 text-sm font-bold">15%</div>
                <div className="absolute bottom-8 left-12 text-sm font-bold">15%</div>
                <div className="absolute top-16 left-4 text-sm font-bold">15%</div>
                <div className="absolute top-4 left-12 text-sm font-bold">10%</div>
              </div>
            </div>

            {/* Right: Distribution Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4" data-testid="distribution-presale">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-pkl-yellow rounded-full"></div>
                    <span className="font-semibold">Presale</span>
                  </div>
                  <span className="font-bold">2,000,000,000</span>
                </div>

                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4" data-testid="distribution-development">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-pkl-green rounded-full"></div>
                    <span className="font-semibold">Development</span>
                  </div>
                  <span className="font-bold">2,500,000,000</span>
                </div>

                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4" data-testid="distribution-staking">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-pkl-orange rounded-full"></div>
                    <span className="font-semibold">Staking</span>
                  </div>
                  <span className="font-bold">1,500,000,000</span>
                </div>

                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4" data-testid="distribution-partners">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <span className="font-semibold">Partners</span>
                  </div>
                  <span className="font-bold">1,500,000,000</span>
                </div>

                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4" data-testid="distribution-exchanges">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                    <span className="font-semibold">Exchanges</span>
                  </div>
                  <span className="font-bold">1,500,000,000</span>
                </div>

                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4" data-testid="distribution-founders">
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

      {/* Roadmap */}
      <section id="roadmap" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Roadmap</h2>
            <p className="text-xl text-gray-600">The PKL.CLUB ecosystem roadmap lays out all the key developments that have been completed and are still upcoming.</p>
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ml-auto max-w-md" data-testid="roadmap-phase-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">PHASE 1</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-check text-pkl-green"></i>
                        <span>Presale Launch</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-check text-pkl-green"></i>
                        <span>Token Launch</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-check text-pkl-green"></i>
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md" data-testid="roadmap-phase-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">PHASE 2</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
                        <span>Platform V1</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
                        <span>Player/Club Onboarding</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
                        <span>Events Calendar</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ml-auto max-w-md" data-testid="roadmap-phase-3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">PHASE 3</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
                        <span>V2 with PKL Predict</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
                        <span>AI Match Predictions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
                        <span>VR Pickleball</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md" data-testid="roadmap-phase-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">PHASE 4</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
                        <span>DAO Governance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
                        <span>Loans for Clubs/Players</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
                        <span>Global Expansion</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-clock text-gray-400"></i>
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

      {/* How to Buy */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-pkl-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How To Buy $PKL Token</h2>
            <p className="text-xl text-gray-600 mb-8">Start your journey in the PKL.CLUB ecosystem by purchasing tokens in the presale. Connect your wallet or directly above by connecting your wallet to the secure web3payments widget.</p>
            
            <div className="flex justify-center space-x-4">
              <button className="bg-pkl-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors" data-testid="button-buy-here">
                Buy Here
              </button>
              <button className="bg-white text-pkl-green border border-pkl-green px-6 py-3 rounded-xl font-semibold hover:bg-pkl-green hover:text-white transition-colors" data-testid="button-buy-in-pkl">
                Buy in PKL.CLUB
              </button>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center" data-testid="step-1">
              <div className="w-20 h-20 bg-pkl-green rounded-2xl flex items-center justify-center mx-auto mb-6 hover-scale">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Connect your wallet or register in PKL.CLUB</h3>
                <p className="text-gray-600 text-sm">Set up your crypto wallet or create an account on our platform to get started.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center" data-testid="step-2">
              <div className="w-20 h-20 bg-pkl-yellow rounded-2xl flex items-center justify-center mx-auto mb-6 hover-scale">
                <span className="text-2xl font-bold text-gray-900">2</span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Choose your $PKL amount</h3>
                <p className="text-gray-600 text-sm">Select how many $PKL tokens you want to purchase during the presale.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center" data-testid="step-3">
              <div className="w-20 h-20 bg-pkl-orange rounded-2xl flex items-center justify-center mx-auto mb-6 hover-scale">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Buy with Card or Crypto</h3>
                <p className="text-gray-600 text-sm">Complete your purchase using your preferred payment method - card or cryptocurrency.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center" data-testid="step-4">
              <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-scale">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Claim your tokens instantly</h3>
                <p className="text-gray-600 text-sm">Receive your $PKL tokens immediately and start using them in the PKL.CLUB ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gradient-to-br from-pkl-green to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pkl-green/90 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 floating-element opacity-30">
          <div className="w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-20 left-10 floating-element opacity-20" style={{animationDelay: '3s'}}>
          <div className="w-24 h-24 bg-pkl-yellow/20 rounded-2xl backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center bg-pkl-yellow text-pkl-green px-4 py-2 rounded-full font-semibold">
                <span>coming soon...</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold">PKL Predict</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Bet on matches, predict outcomes, and win $PKL rewards. Powered by AI and community-driven leaderboards. The future of sports prediction is here.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                    <i className="fas fa-brain text-pkl-green text-sm"></i>
                  </div>
                  <span className="text-lg">AI-powered match predictions with 85% accuracy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                    <i className="fas fa-trophy text-pkl-green text-sm"></i>
                  </div>
                  <span className="text-lg">Weekly prediction tournaments with $PKL prizes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pkl-yellow rounded-full flex items-center justify-center">
                    <i className="fas fa-chart-line text-pkl-green text-sm"></i>
                  </div>
                  <span className="text-lg">Global leaderboards and prediction stats tracking</span>
                </div>
              </div>

              <button className="bg-pkl-yellow text-pkl-green px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-colors" data-testid="button-get-notified">
                Get Notified
              </button>
            </div>

            {/* Right Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="p-6 space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-900">PKL Predict</div>
                        <div className="text-sm text-pkl-green font-semibold">BETA</div>
                      </div>

                      {/* Live Match Prediction */}
                      <div className="bg-gradient-to-r from-pkl-green to-green-600 rounded-2xl p-4 text-white">
                        <div className="text-sm text-center mb-3">LIVE MATCH</div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-center">
                            <div className="w-10 h-10 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <i className="fas fa-user text-white text-sm"></i>
                            </div>
                            <div className="text-xs font-semibold">Sarah K.</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold">VS</div>
                          </div>
                          <div className="text-center">
                            <div className="w-10 h-10 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <i className="fas fa-user text-white text-sm"></i>
                            </div>
                            <div className="text-xs font-semibold">Mike R.</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button className="bg-white/20 py-2 rounded-lg text-sm font-semibold">Sarah 67%</button>
                          <button className="bg-white/20 py-2 rounded-lg text-sm font-semibold">Mike 33%</button>
                        </div>
                      </div>

                      {/* Prediction Stats */}
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Your Predictions</span>
                            <span className="text-sm font-bold text-pkl-green">12/15</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2">
                            <div className="bg-pkl-green h-full w-4/5 rounded-full"></div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Rewards Earned</span>
                            <span className="font-bold text-pkl-orange">+247 $PKL</span>
                          </div>
                        </div>
                      </div>

                      {/* AI Insight */}
                      <div className="bg-gradient-to-r from-pkl-yellow to-yellow-400 rounded-xl p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="fas fa-robot text-gray-900"></i>
                          <span className="text-sm font-bold text-gray-900">AI Insight</span>
                        </div>
                        <p className="text-xs text-gray-800">Sarah has won 8/10 recent matches against similar ranked opponents. Weather favors aggressive play.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating AI Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center shadow-lg floating-element">
                  <i className="fas fa-brain text-pkl-green text-xl"></i>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg floating-element" style={{animationDelay: '2s'}}>
                  <i className="fas fa-chart-line text-pkl-green"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden" data-testid={`faq-item-${index}`}>
                <button 
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors" 
                  onClick={() => toggleFaq(index)}
                  data-testid={`faq-question-${index}`}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <i className={`fas transition-transform duration-300 text-gray-400 ${openFaq === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
                <div 
                  className={`accordion-content overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
                  data-testid={`faq-answer-${index}`}
                >
                  <p className="text-gray-600 px-6">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-pkl-green rounded-xl flex items-center justify-center">
                  <i className="fas fa-table-tennis-paddle-ball text-white text-lg"></i>
                </div>
                <span className="text-xl font-bold">PKL.CLUB</span>
              </div>
              <p className="text-gray-400">The world's first decentralized Pickleball community. Join the revolution and earn $PKL tokens while playing the fastest growing sport.</p>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-pkl-green transition-colors" data-testid="link-whitepaper">Whitepaper</a>
                <a href="#roadmap" className="block text-gray-400 hover:text-pkl-green transition-colors" data-testid="link-roadmap">Roadmap</a>
                <a href="#tokenomics" className="block text-gray-400 hover:text-pkl-green transition-colors" data-testid="link-tokenomics">Tokenomics</a>
                <a href="#" className="block text-gray-400 hover:text-pkl-green transition-colors" data-testid="link-smart-contract">Smart Contract</a>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-pkl-green transition-colors" data-testid="link-risk-disclaimer">Risk Disclaimer</a>
                <a href="#" className="block text-gray-400 hover:text-pkl-green transition-colors" data-testid="link-terms">Terms of Service</a>
                <a href="#" className="block text-gray-400 hover:text-pkl-green transition-colors" data-testid="link-privacy">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-pkl-green transition-colors" data-testid="link-cookies">Cookie Policy</a>
              </div>
            </div>

            {/* Social & Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Community</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors" data-testid="link-telegram">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors" data-testid="link-discord">
                  <i className="fab fa-discord"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors" data-testid="link-twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pkl-green transition-colors" data-testid="link-youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">© 2024 PKL.CLUB. All rights reserved.</p>
              <p className="text-gray-400 text-sm text-center">
                PKL.CLUB is not investment advice. Cryptocurrency may be unregulated in your jurisdiction. 
                <a href="#" className="text-pkl-green hover:underline" data-testid="link-footer-risk">Risk Disclaimer</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      {isMobile && (
        <div className="sticky-mobile-cta fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
          <div className="flex space-x-3">
            <button className="flex-1 bg-pkl-green text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors" data-testid="button-mobile-buy-pkl">
              Buy $PKL
            </button>
            <button className="flex-1 bg-pkl-orange text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors" data-testid="button-mobile-connect-wallet">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
