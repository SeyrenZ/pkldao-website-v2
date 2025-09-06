import React from "react";

interface BackgroundImage {
  src: string;
  className: string;
  animationDelay: string;
}

interface TokenDistribution {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  color: string;
  strokeColor: string;
  strokeDasharray: string;
  strokeDashoffset: string;
}

const backgroundImages: BackgroundImage[] = [
  {
    src: "/corner-circle.svg",
    className:
      "absolute bottom-0 left-0 lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[80px] h-[80px] animate-fade-up-right",
    animationDelay: "100ms",
  },
  {
    src: "/corner-circle-top-right.svg",
    className:
      "absolute top-0 right-0 lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[150px] hidden sm:block animate-fade-down-left",
    animationDelay: "200ms",
  },
  {
    src: "/corner-circle-bottom-right.svg",
    className:
      "absolute bottom-0 right-0 lg:w-[130px] lg:h-[130px] md:w-[80px] md:h-[80px] w-[50px] h-[50px] animate-fade-up-left",
    animationDelay: "300ms",
  },
  {
    src: "/circle-left.svg",
    className:
      "absolute left-0 bottom-0 top-0 my-auto hidden sm:block animate-fade-right",
    animationDelay: "400ms",
  },
];

const tokenDistributions: TokenDistribution[] = [
  {
    id: "presale",
    name: "Presale",
    amount: 2000000000,
    percentage: 20,
    color: "bg-pkl-yellow",
    strokeColor: "#c4f000",
    strokeDasharray: "100.53 401.06",
    strokeDashoffset: "0",
  },
  {
    id: "development",
    name: "Development",
    amount: 2500000000,
    percentage: 25,
    color: "bg-pkl-green",
    strokeColor: "#00a86b",
    strokeDasharray: "125.66 401.06",
    strokeDashoffset: "-100.53",
  },
  {
    id: "staking",
    name: "Staking",
    amount: 1500000000,
    percentage: 15,
    color: "bg-pkl-orange",
    strokeColor: "#ff533e",
    strokeDasharray: "75.40 401.06",
    strokeDashoffset: "-226.19",
  },
  {
    id: "partners",
    name: "Partners",
    amount: 1500000000,
    percentage: 15,
    color: "bg-indigo-500",
    strokeColor: "#4f46e5",
    strokeDasharray: "75.40 401.06",
    strokeDashoffset: "-301.59",
  },
  {
    id: "exchanges",
    name: "Exchanges",
    amount: 1500000000,
    percentage: 15,
    color: "bg-cyan-500",
    strokeColor: "#06b6d4",
    strokeDasharray: "75.40 401.06",
    strokeDashoffset: "-376.99",
  },
  {
    id: "founders",
    name: "Founders Fund",
    amount: 1000000000,
    percentage: 10,
    color: "bg-amber-500",
    strokeColor: "#f59e0b",
    strokeDasharray: "50.27 401.06",
    strokeDashoffset: "-452.39",
  },
];

const BackgroundImageComponent: React.FC<{ image: BackgroundImage }> = ({
  image,
}) => (
  <img
    src={image.src}
    alt="bg"
    className={image.className}
    style={{ animationDelay: image.animationDelay }}
  />
);

const PieChartSegment: React.FC<{ distribution: TokenDistribution }> = ({
  distribution,
}) => (
  <circle
    cx="100"
    cy="100"
    r="80"
    fill="transparent"
    stroke={distribution.strokeColor}
    strokeWidth="20"
    strokeDasharray={distribution.strokeDasharray}
    strokeDashoffset={distribution.strokeDashoffset}
  />
);

const DistributionItem: React.FC<{ distribution: TokenDistribution }> = ({
  distribution,
}) => (
  <div
    className="flex items-center justify-between bg-white rounded-xl shadow-lg p-3"
    data-testid={`distribution-${distribution.id}`}
  >
    <div className="flex items-center space-x-3">
      <div className={`w-4 h-4 ${distribution.color} rounded-full`}></div>
      <span className="font-semibold text-neutral-800/90">
        {distribution.name}
      </span>
    </div>
    <span className="font-bold text-neutral-800/90">
      {distribution.amount.toLocaleString()}
    </span>
  </div>
);

const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="py-20 bg-gradient-to-br from-pkl-green via-[#00d084] to-pkl-yellow text-white relative"
    >
      {backgroundImages.map((image, index) => (
        <BackgroundImageComponent key={index} image={image} />
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-8xl font-bold mb-6"
            style={{
              textShadow:
                "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            $PKL Tokenomics
          </h2>
          <p
            className="text-2xl lg:text-3xl text-pkl-yellow font-semibold"
            style={{
              textShadow:
                "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            Total Supply: 10,000,000,000 $PKL
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Pie Chart */}
          <div className="relative">
            <div className="w-96 h-96 mx-auto relative">
              {/* SVG Pie Chart */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full transform -rotate-90"
              >
                {tokenDistributions.map((distribution, index) => (
                  <PieChartSegment key={index} distribution={distribution} />
                ))}
                {/* Outline circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="transparent"
                  stroke="#0b0b0b"
                  strokeWidth="0.5"
                />
                {/* Inner outline circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="transparent"
                  stroke="#0b0b0b"
                  strokeWidth="0.5"
                />
              </svg>

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/logo.svg" alt="pkl-logo" className="w-24 h-24" />
              </div>

              {/* Percentage Labels */}
              <div
                className="absolute top-14 -right-2 text-xl font-bold tracking-widest"
                style={{
                  textShadow:
                    "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
                }}
              >
                {tokenDistributions[0].percentage}%
              </div>
              <div
                className="absolute top-64 -right-8 text-xl font-bold tracking-widest"
                style={{
                  textShadow:
                    "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
                }}
              >
                {tokenDistributions[1].percentage}%
              </div>
              <div
                className="absolute -bottom-5 right-44 text-xl font-bold tracking-widest"
                style={{
                  textShadow:
                    "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
                }}
              >
                {tokenDistributions[2].percentage}%
              </div>
              <div
                className="absolute bottom-20 -left-5 text-xl font-bold tracking-widest"
                style={{
                  textShadow:
                    "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
                }}
              >
                {tokenDistributions[3].percentage}%
              </div>
              <div
                className="absolute top-20 -left-4 text-xl font-bold tracking-widest"
                style={{
                  textShadow:
                    "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
                }}
              >
                {tokenDistributions[4].percentage}%
              </div>
              <div
                className="absolute -top-6 left-40 text-xl font-bold tracking-widest"
                style={{
                  textShadow:
                    "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
                }}
              >
                {tokenDistributions[5].percentage}%
              </div>
            </div>
          </div>

          {/* Right: Distribution Details */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wide mb-6">
              Token Distribution
            </h3>

            <div className="space-y-4">
              {tokenDistributions.map((distribution) => (
                <DistributionItem
                  key={distribution.id}
                  distribution={distribution}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
