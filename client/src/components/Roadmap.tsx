import React from "react";

interface RoadmapItem {
  text: string;
  status: "completed" | "in-progress" | "upcoming";
}

interface RoadmapPhase {
  quarter: string;
  color: string;
  items: RoadmapItem[];
  testId: string;
}

const roadmapData: RoadmapPhase[] = [
  {
    quarter: "Q4 2025",
    color: "bg-pkl-green",
    testId: "roadmap-q4-2025",
    items: [
      { text: "$PKL Presale is completed", status: "completed" },
      { text: "$PKL token listed on Uniswap", status: "completed" },
      { text: "PKL.CLUB platform MVP is unveiled", status: "completed" },
      { text: "PKL.Club team is formed", status: "completed" },
      { text: "First PKL.CLUB event is announced", status: "in-progress" },
    ],
  },
  {
    quarter: "Q1 2026",
    color: "bg-neutral-400",
    testId: "roadmap-q1-2026",
    items: [
      {
        text: "Beta version of the PKL.CLUB platform is launched",
        status: "upcoming",
      },
      {
        text: "V1 includes profile, Play 4 Pickles and crypto wallet",
        status: "in-progress",
      },
      { text: "Major industry partners are signed", status: "upcoming" },
      { text: "PKL.CLUB CEO is hired", status: "upcoming" },
    ],
  },
  {
    quarter: "Q2 2026",
    color: "bg-neutral-400",
    testId: "roadmap-q2-2026",
    items: [
      { text: "V2 of PKL.CLUB platform is released", status: "upcoming" },
      { text: "Player and Vendor onboarding", status: "upcoming" },
      {
        text: "Mass marketing to the Pickleball industry begins",
        status: "in-progress",
      },
      { text: "Schedule of PKL.CLUB events is released", status: "upcoming" },
    ],
  },
  {
    quarter: "Q3 2026",
    color: "bg-neutral-400",
    testId: "roadmap-q3-2026",
    items: [
      { text: "V3 of PKL.CLUB platform is released", status: "upcoming" },
      {
        text: "Play 4 Pickle global is added. Risk Pickles on any match globally",
        status: "upcoming",
      },
      { text: "VR pickleball partner is acquired", status: "in-progress" },
      { text: "PKL lending is under development", status: "upcoming" },
    ],
  },
];

const getStatusIcon = (status: RoadmapItem["status"]) => {
  switch (status) {
    case "completed":
      return "fas fa-check text-pkl-green";
    case "in-progress":
      return "fas fa-clock text-neutral-400";
    case "upcoming":
      return "fas fa-clock text-neutral-400";
  }
};

const RoadmapCard: React.FC<{ phase: RoadmapPhase; isLeft: boolean }> = ({
  phase,
  isLeft,
}) => (
  <div
    className={`w-full md:w-1/2 ${
      isLeft ? "md:pr-12 md:pl-0" : "md:pl-12"
    } pl-16  `}
  >
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 w-full md:max-w-md ${
        isLeft ? "md:ml-auto" : ""
      }`}
      data-testid={phase.testId}
    >
      <h3 className="text-2xl bg-pkl-green text-white font-bold text-neutral-800/90 mb-4 px-8 py-4">
        {phase.quarter}
      </h3>
      <ul className="space-y-2 text-neutral-600 font-medium px-8 pb-4 pt-2">
        {phase.items.map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <i className={getStatusIcon(item.status)}></i>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800/90 mb-6 font-luckiest-guy tracking-widest">
            Roadmap
          </h2>
          <p className="text-xl text-neutral-600">
            The PKL.CLUB ecosystem roadmap lays out all the key developments
            that have been completed and are still upcoming.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - First segment with gradient (stops at dot 2) */}
          <div
            className="absolute md:left-1/2 left-8 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pkl-green to-pkl-yellow rounded-full"
            style={{ height: "calc(24rem + 10rem)" }}
          ></div>

          {/* Timeline Line - Second segment (neutral color for remaining dots) */}
          <div
            className="absolute md:left-1/2 left-8 transform -translate-x-1/2 w-1 bg-neutral-300 rounded-full"
            style={{
              top: "calc(24rem + 7rem)",
              height: "calc(100% - 24rem - 4rem)",
            }}
          ></div>

          {/* Phase Items */}
          <div className="space-y-24">
            {roadmapData.map((phase, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={phase.quarter} className="relative flex items-center">
                  <div
                    className={`absolute md:left-1/2 left-8 transform -translate-x-1/2 w-8 h-8 ${phase.color} rounded-full border-4 border-white shadow-lg z-10`}
                  ></div>

                  {isLeft ? (
                    <>
                      <RoadmapCard phase={phase} isLeft={true} />
                      <div className="hidden md:block md:w-1/2 ">
                        {/* Empty space for alternating layout */}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block md:w-1/2 ">
                        {/* Empty space for alternating layout */}
                      </div>
                      <RoadmapCard phase={phase} isLeft={false} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
