import React from "react";

// NFT Series data structure
interface NFTSeries {
  icon: string;
  iconColor: string;
  bgColor: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonColor: string;
  testId: string;
  images: string[];
}

// Feature data structure
interface Feature {
  icon: string;
  title: string;
  description: string;
  testId: string;
}

// Reusable Feature Item Component
const FeatureItem: React.FC<Feature> = ({
  icon,
  title,
  description,
  testId,
}) => (
  <div className="flex items-start space-x-4" data-testid={testId}>
    <div className="w-12 h-12 bg-pkl-yellow rounded-xl flex items-center justify-center flex-shrink-0">
      <i className={`fas ${icon} text-neutral-800/90 text-xl`}></i>
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-base text-white/80">{description}</p>
    </div>
  </div>
);

// NFT Series Card Component
const NFTSeriesCard: React.FC<NFTSeries> = ({
  icon,
  iconColor,
  bgColor,
  title,
  subtitle,
  buttonText,
  buttonColor,
  testId,
  images,
}) => (
  <div
    className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
    data-testid={testId}
  >
    <div className="text-center mb-6">
      <div className="flex justify-center space-x-2 mb-4">
        {images.map((image, index) => (
          <div key={index} className="w-20 h-20 rounded-full overflow-hidden ">
            <img
              src={image}
              alt={`${title} NFT ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold text-neutral-800/90 mb-2">{title}</h3>
      <p className="text-sm text-neutral-600 mb-4">{subtitle}</p>

      {/* Profile Pictures */}
    </div>
    <button
      className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${buttonColor}`}
    >
      {buttonText}
    </button>
  </div>
);

const ProfileNFTs = () => {
  // Feature data
  const features: Feature[] = [
    {
      icon: "fa-user-circle",
      title: "Unique Player Identity",
      description:
        "Your NFT represents you across the entire PKL.CLUB ecosystem",
      testId: "nft-feature-identity",
    },
    {
      icon: "fa-store",
      title: "OpenSea Marketplace",
      description:
        "Buy, sell, and trade PKL.CLUB NFTs on the world's largest NFT marketplace",
      testId: "nft-feature-marketplace",
    },
    {
      icon: "fa-trophy",
      title: "Collectibles Gallery",
      description:
        "Display your NFT collection in your profile for everyone to see",
      testId: "nft-feature-gallery",
    },
  ];

  // NFT Series data
  const nftSeries: NFTSeries[] = [
    {
      icon: "fa-gift",
      iconColor: "text-neutral-600",
      bgColor: "bg-neutral-100",
      title: "Funky Free NFTs",
      subtitle: "Courtesy of Crazy Pickles",
      buttonText: "FREE",
      buttonColor: "bg-neutral-200 text-neutral-800 hover:bg-neutral-300",
      testId: "nft-series-free",
      images: ["/free-1.png", "/free-2.png", "/free-3.png"],
    },
    {
      icon: "fa-star",
      iconColor: "text-pkl-green",
      bgColor: "bg-pkl-green/20",
      title: "Premium NFT Series",
      subtitle: "Courtesy of Rowdy Pickles",
      buttonText: "PAID",
      buttonColor: "bg-pkl-yellow text-neutral-800 hover:bg-yellow-300",
      testId: "nft-series-premium",
      images: ["/premium-1.png", "/premium-2.png", "/premium-3.png"],
    },
    {
      icon: "fa-gem",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      title: "Ultra Rare NFT Series",
      subtitle: "AI Generated",
      buttonText: "ULTRA RARE",
      buttonColor: "bg-purple-600 text-white hover:bg-purple-700",
      testId: "nft-series-ultra-rare",
      images: ["/rare-1.png", "/rare-2.png", "/rare-3.png"],
    },
  ];

  return (
    <section
      className="py-20 bg-pkl-green relative overflow-hidden"
      id="profile-nfts"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pkl-green/90 to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 floating-element opacity-30">
        <div className="w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
      </div>
      <div
        className="absolute bottom-20 left-20 floating-element opacity-20"
        style={{ animationDelay: "3s" }}
      >
        <div className="w-24 h-24 bg-pkl-yellow/20 rounded-2xl backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6 font-luckiest-guy tracking-widest"
            style={{
              textShadow:
                "1px 2px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 2px 0px #000, 4px 6px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            Profile NFTs
          </h2>
          <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto">
            Every player gets a profile NFT representing them in PKL.CLUB.
            Choose a free character or purchase from our collection reflecting
            Pickleball's rich history.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Profile NFT Example */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              {/* Profile Avatar */}
              <img
                src="/rare-4.png"
                alt="Cory Treverson"
                className="w-20 h-20 object-cover"
              />

              {/* Profile Info */}
              <div className="text-neutral-800 mb-6">
                <h3 className="text-2xl font-bold mb-2">Cory Treverson</h3>
                <div className="text-pkl-green font-semibold mb-4 flex items-center gap-2">
                  <div>Level 23</div>
                  <div className="w-2 h-2 bg-pkl-green rounded-full"></div>{" "}
                  <div className="text-neutral-600"> #PKL2024</div>
                </div>
                <div className="bg-[#00a86b]/10 rounded-xl px-4 py-2 inline-block">
                  <span className="text-sm font-medium text-pkl-green">
                    Profile NFT: Premium Series
                  </span>
                </div>
              </div>
            </div>

            {/* Floating NFT Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center shadow-lg floating-element">
              <i className="fas fa-image text-pkl-green text-xl"></i>
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg floating-element"
              style={{ animationDelay: "2s" }}
            >
              <i className="fas fa-palette text-pkl-green"></i>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>

        {/* NFT Series Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nftSeries.map((series, index) => (
            <NFTSeriesCard key={index} {...series} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileNFTs;
