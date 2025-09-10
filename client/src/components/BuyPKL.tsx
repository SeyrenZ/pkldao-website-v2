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
      id: "membership",
      icon: "fas fa-id-card",
      iconBg: "bg-pkl-green/10",
      title: "Platform Membership Access",
      description:
        "Your $PKL tokens unlock premium features, exclusive events, and community benefits.",
    },
    {
      id: "rewards",
      icon: "fas fa-gift",
      iconBg: "bg-pkl-yellow/20",
      title: "Play-to-Earn Rewards",
      description:
        "Earn $PKL through gameplay, achievements, and community participation — not speculation.",
    },
    {
      id: "utility",
      icon: "fas fa-shopping-cart",
      iconBg: "bg-pkl-orange/10",
      title: "Real Utility & Commerce",
      description:
        "Use $PKL for tournament fees, marketplace purchases, and club memberships across the ecosystem.",
    },
    {
      id: "governance",
      icon: "fas fa-users",
      iconBg: "bg-blue-500/10",
      title: "Community Participation",
      description:
        "Participate in community decisions and feature development through our corporate governance structure.",
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
            $PKL tokens are utility tokens that power real engagement in the
            Pickleball community. Join a platform built for players, clubs, and
            vendors to connect, compete, and grow together.
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
