import React from "react";

interface Benefit {
  id: string;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}

const BuyPKL = () => {
  const benefits: Benefit[] = [
    {
      id: "tournaments",
      icon: "fas fa-trophy",
      iconBg: "bg-pkl-green/10",
      title: "Exclusive Access to Tournaments",
      description:
        "Use $PKL for registration and prizes in exclusive tournaments worldwide.",
    },
    {
      id: "fees",
      icon: "fas fa-percentage",
      iconBg: "bg-pkl-yellow/20",
      title: "Reduced Marketplace Fees",
      description:
        "Lower costs for players and vendors inside PKL.CLUB marketplace.",
    },
    {
      id: "staking",
      icon: "fas fa-coins",
      iconBg: "bg-pkl-orange/10",
      title: "Staking Rewards",
      description:
        "Stake $PKL to earn yield and XP boosts in the PKL.CLUB ecosystem.",
    },
    {
      id: "governance",
      icon: "fas fa-vote-yea",
      iconBg: "bg-pkl-green/10",
      title: "Community Governance",
      description:
        "Vote on new features, tournaments, and partnerships in the DAO.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800/90 mb-6 font-luckiest-guy tracking-widest">
            Buy $PKL Token Now!
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            PKL.CLUB combines the world's fastest growing sport with blockchain
            innovation. Owning $PKL gives you more than a token — it gives you a
            place in the Pickleball revolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-scale"
              data-testid={`card-benefit-${benefit.id}`}
            >
              <div
                className={`w-16 h-16 ${benefit.iconBg} rounded-2xl bg-zinc-100 flex items-center justify-center mb-6`}
              >
                <i className={`${benefit.icon} text-pkl-green text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800/90 mb-4">
                {benefit.title}
              </h3>
              <p className="text-neutral-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyPKL;
