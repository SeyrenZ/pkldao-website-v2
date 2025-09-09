import React from "react";

// Reusable Components
const FloatingElement = ({
  className,
  style,
  children,
}: {
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => (
  <div className={`absolute floating-element ${className}`} style={style}>
    {children}
  </div>
);

const FeatureItem = ({
  icon,
  iconBg,
  title,
  description,
}: {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4">
    <div
      className={`min-w-12 min-h-12 ${iconBg} rounded-full flex items-center justify-center`}
    >
      <i className={`${icon} text-lg`}></i>
    </div>
    <div>
      <h4 className="text-xl font-bold text-neutral-800/90 mb-2">{title}</h4>
      <p className="text-neutral-600">{description}</p>
    </div>
  </div>
);

const Button = ({
  variant = "primary",
  children,
  className = "",
}: {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}) => {
  const baseClasses = "px-8 py-3 rounded-xl font-bold transition-colors";
  const variants = {
    primary: "bg-pkl-green text-white hover:bg-green-600",
    secondary: "bg-pkl-yellow text-neutral-800 hover:bg-yellow-300",
    outline:
      "border-2 border-pkl-green text-pkl-green hover:bg-pkl-green hover:text-neutral-800",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Play4Pickles = () => {
  const features = [
    {
      icon: "fas fa-handshake text-white",
      iconBg: "bg-pkl-green",
      title: "Peer-to-Peer Wagering",
      description: "Risk $PKL tokens on your matches",
    },
    {
      icon: "fas fa-users text-pkl-green",
      iconBg: "bg-pkl-yellow",
      title: "Friends Can Join",
      description: "Spectators predict winners and win $PKL",
    },
    {
      icon: "fas fa-gift text-white",
      iconBg: "bg-pkl-orange",
      title: "No Fees",
      description: "Just lock small $PKL amount to access",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingElement className="top-10 right-10 opacity-30">
        <div className="w-32 h-32 bg-pkl-green/10 rounded-3xl backdrop-blur-sm"></div>
      </FloatingElement>
      <FloatingElement
        className="bottom-20 left-10 opacity-20"
        style={{ animationDelay: "3s" }}
      >
        <div className="w-24 h-24 bg-pkl-yellow/20 rounded-2xl backdrop-blur-sm"></div>
      </FloatingElement>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800/90 mb-6 font-luckiest-guy tracking-widest">
            Play 4 Pickles
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Add excitement to your matches! Risk $PKL tokens against opponents
            while friends join the fun.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Challenge Interface */}
          <div className="relative">
            {/* Phone Frame */}
            <div className="bg-neutral-900 rounded-[2.5rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300 max-w-sm mx-auto">
              {/* Phone Screen */}
              <div className="bg-white rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-neutral-100 px-6 py-2 flex justify-between items-center text-xs font-medium text-neutral-800">
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
                      <div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
                      <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
                    </div>
                    <span className="ml-2">PKL Chat</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-signal text-xs"></i>
                    <i className="fas fa-wifi text-xs"></i>
                    <i className="fas fa-battery-three-quarters text-xs"></i>
                  </div>
                </div>

                {/* Chat Header */}
                <div className="bg-pkl-green px-4 py-3 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pkl-yellow rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-pkl-green text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm">
                      Challenge Friend
                    </h3>
                    <p className="text-pkl-yellow/80 text-xs">Online now</p>
                  </div>
                  <div className="flex space-x-2">
                    <i className="fas fa-phone text-white text-sm"></i>
                    <i className="fas fa-video text-white text-sm"></i>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="bg-neutral-50 px-4 py-6 space-y-4 min-h-[300px]">
                  {/* First message - left aligned */}
                  <div className="flex justify-start">
                    <div className="bg-white text-neutral-800 px-4 py-3 rounded-2xl rounded-bl-md max-w-[70%] relative shadow-sm">
                      <div className="font-medium text-sm">
                        "Hey, let's play 4 pickles today!"
                      </div>
                      <div className="text-xs text-neutral-500 mt-1">
                        2:34 PM
                      </div>
                      {/* Chat bubble tail */}
                      <div className="absolute -bottom-1 left-3 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
                    </div>
                  </div>

                  {/* Second message - right aligned */}
                  <div className="flex justify-end">
                    <div className="bg-pkl-green text-white px-4 py-3 rounded-2xl rounded-br-md max-w-[70%] relative shadow-sm">
                      <div className="font-medium text-sm">
                        "I'll happily take your $PKL!"
                      </div>
                      <div className="text-xs text-pkl-yellow/80 mt-1">
                        2:35 PM
                      </div>
                      {/* Chat bubble tail */}
                      <div className="absolute -bottom-1 right-3 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-pkl-green"></div>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="bg-white border-t border-neutral-200 px-4 py-3 flex items-center space-x-3">
                  <div className="flex-1 bg-neutral-100 rounded-full px-4 py-2 flex items-center space-x-2">
                    <i className="fas fa-smile text-neutral-400 text-sm"></i>
                    <span className="text-neutral-400 text-sm flex-1">
                      Type a message...
                    </span>
                    <i className="fas fa-paperclip text-neutral-400 text-sm"></i>
                  </div>
                  <div className="w-8 h-8 bg-pkl-green rounded-full flex items-center justify-center">
                    <i className="fas fa-paper-plane text-white text-sm"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <FloatingElement className="-top-4 right-16 w-16 h-16 bg-pkl-yellow rounded-2xl flex items-center justify-center shadow-lg">
              <i className="fas fa-table-tennis-paddle-ball text-pkl-green text-xl"></i>
            </FloatingElement>
            <FloatingElement
              className="-bottom-4 left-16 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"
              style={{ animationDelay: "2s" }}
            >
              <i className="fas fa-coins text-pkl-green"></i>
            </FloatingElement>
          </div>

          {/* Right: Features */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center bg-pkl-green text-white px-4 py-2 rounded-full font-semibold">
              <i className="fas fa-gamepad mr-2"></i>
              <span>Competitive Gaming</span>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  iconBg={feature.iconBg}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <div className="flex sm:flex-row flex-col gap-4 pt-4">
              <Button variant="primary">Start Challenge</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Play4Pickles;
