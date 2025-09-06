import React, { useState } from "react";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is PKL.CLUB?",
      answer:
        "PKL.CLUB is the world's first decentralized Pickleball community platform powered by the $PKL token. It combines social networking, tournament management, marketplace functionality, and gamification features to create a comprehensive ecosystem for Pickleball players worldwide.",
    },
    {
      question: "What is $PKL token?",
      answer:
        "$PKL is the native utility token of the PKL.CLUB ecosystem. It's used for tournament registration, marketplace transactions, staking rewards, governance voting, and accessing premium features. Token holders receive various benefits including reduced fees, exclusive tournament access, and community governance rights.",
    },
    {
      question: "How do I stake tokens?",
      answer:
        "Staking will be available through the PKL.CLUB platform once it launches. Simply connect your wallet, choose your staking amount, and lock your tokens for various periods to earn rewards. Longer staking periods typically offer higher APY rates and additional XP bonuses.",
    },
    {
      question: "Can I use $PKL in real tournaments?",
      answer:
        "Yes! $PKL tokens can be used to register for real-world tournaments, pay for equipment in our marketplace, and win prizes in both virtual and physical competitions. We're partnering with Pickleball clubs and tournament organizers worldwide to expand real-world utility.",
    },
    {
      question: "Why should I join the presale?",
      answer:
        "Presale participants get tokens at the lowest price before public launch, early access to all PKL.CLUB features, exclusive NFT badges, founder status in the community, and higher staking rewards. It's the best opportunity to become a founding member of the Pickleball revolution.",
    },
  ];

  return (
    <section id="faq" className="py-20 hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6 font-luckiest-guy tracking-widest"
            style={{
              textShadow:
                "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
                data-testid={`faq-question-${index}`}
              >
                <span className="font-semibold text-neutral-800/90">
                  {faq.question}
                </span>
                <i
                  className={`fas transition-transform duration-300 text-neutral-400 ${
                    openFaq === index ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
              </button>
              <div
                className={`accordion-content overflow-hidden transition-all duration-300 ${
                  openFaq === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
                data-testid={`faq-answer-${index}`}
              >
                <p className="text-neutral-600 px-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
