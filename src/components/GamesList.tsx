import GameStatCard from "./GameStatCard";

const GamesList = () => {
  const valorantData = {
    rank: "Immortal 2",
    rr: 1847,
    kd: 1.34,
    headshotPercent: 24,
    winRate: 67,
    mainAgent: "Jett",
    recentMatches: [
      { result: "win" as const, score: "13-8", map: "Ascent" },
      { result: "win" as const, score: "13-11", map: "Bind" },
      { result: "loss" as const, score: "10-13", map: "Haven" },
      { result: "win" as const, score: "13-6", map: "Split" },
      { result: "loss" as const, score: "8-13", map: "Pearl" },
    ],
    actProgress: 78,
  };

  return (
    <div className="max-w-md mx-auto">
      <GameStatCard {...valorantData} />
    </div>
  );
};

export default GamesList;
