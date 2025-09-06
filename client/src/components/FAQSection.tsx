import React, { useState } from 'react';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (faqNumber: number) => {
    setOpenFaq(openFaq === faqNumber ? null : faqNumber);
  };

  const faqData = [
    {
      question: "What is PKL Token and how does it work?",
      answer: "PKL Token is the native cryptocurrency of the PKL.CLUB ecosystem. It's used for rewards, marketplace transactions, staking, and governance. Players earn PKL tokens through gameplay, tournaments, and community participation, then use them to purchase NFTs, equipment, and access premium features."
    },
    {
      question: "How can I earn PKL tokens?",
      answer: "You can earn PKL tokens in multiple ways: playing games and winning matches, participating in tournaments, completing daily challenges, staking your tokens, referring friends, and contributing to the community. The more active you are in the ecosystem, the more tokens you can earn."
    },
    {
      question: "What is the PKL Card and what benefits does it provide?",
      answer: "The PKL Card is a premium membership that provides exclusive benefits including 2x reward multipliers, priority access to tournaments, exclusive NFT drops, marketplace discounts, priority customer support, and access to VIP community features. It's designed for serious players who want to maximize their PKL experience."
    },
    {
      question: "How do I participate in the presale?",
      answer: "To participate in the presale, simply connect your wallet on our platform and choose to buy with either card or cryptocurrency. The presale offers early access to PKL tokens at discounted prices before the public launch. Make sure to complete KYC verification if required."
    },
    {
      question: "What makes PKL.CLUB different from other gaming platforms?",
      answer: "PKL.CLUB is the first decentralized pickleball ecosystem that combines real-world sports with blockchain technology. We offer play-to-earn mechanics, NFT collectibles, a comprehensive social platform, and real utility for tokens in purchasing equipment and tournament entries. Our focus on pickleball community building sets us apart."
    },
    {
      question: "Is PKL Token safe and secure?",
      answer: "Yes, PKL Token is built on Ethereum blockchain with smart contracts that have been audited by leading security firms. We follow industry best practices for security, including multi-signature wallets, regular security audits, and transparent tokenomics. Your funds and data are protected by enterprise-grade security measures."
    },
    {
      question: "When will the mobile app be available?",
      answer: "The PKL mobile app beta is scheduled for Q2 2024, with the full version launching in Q3 2024. The app will include all ecosystem features: player profiles, tournament management, NFT marketplace, social features, and wallet integration. You can sign up for early access notifications on our website."
    },
    {
      question: "Can I use PKL tokens to buy real pickleball equipment?",
      answer: "Yes! One of our key features is the ability to use PKL tokens to purchase real pickleball equipment from our partner retailers. We're building partnerships with major equipment manufacturers and retailers to accept PKL tokens as payment, bridging the gap between digital rewards and real-world utility."
    },
    {
      question: "How does the tournament system work?",
      answer: "Our tournament system allows players to create, join, and manage tournaments with entry fees paid in PKL tokens. Winners receive token rewards and NFT prizes. We support various tournament formats including single elimination, round-robin, and league play. Tournament organizers can set custom rules and prize structures."
    },
    {
      question: "What is the total supply of PKL tokens?",
      answer: "The total supply of PKL tokens is 1 billion (1,000,000,000). The distribution is: 30% for community rewards, 25% for development, 20% for marketing, 15% for team (with vesting), and 10% for liquidity. This ensures sustainable growth while rewarding active community participation."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about PKL Token and the PKL.CLUB ecosystem
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <button
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-pkl-green focus:ring-opacity-50 rounded-2xl"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      openFaq === index ? 'bg-pkl-green' : 'bg-gray-200'
                    }`}>
                      <i className={`fas fa-${openFaq === index ? 'minus' : 'plus'} text-sm ${
                        openFaq === index ? 'text-white' : 'text-gray-600'
                      }`}></i>
                    </div>
                  </div>
                </div>
              </button>
              
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pkl-green to-pkl-yellow rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/90 mb-6">
              Our support team is here to help you with any questions about PKL Token or the platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pkl-green px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-pkl-green transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-pkl-green rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-book text-white text-xl"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h4>
            <p className="text-gray-600 text-sm mb-4">Comprehensive guides and technical documentation</p>
            <a href="#" className="text-pkl-green font-semibold hover:underline">Read Docs</a>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-pkl-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-comments text-pkl-green text-xl"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Community</h4>
            <p className="text-gray-600 text-sm mb-4">Join our active community on Discord and Telegram</p>
            <a href="#" className="text-pkl-green font-semibold hover:underline">Join Now</a>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-pkl-orange rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-envelope text-white text-xl"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">Stay updated with the latest news and updates</p>
            <a href="#" className="text-pkl-green font-semibold hover:underline">Subscribe</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;