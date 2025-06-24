import GameStatCard from "./GameStatCard";

const GamesList = () => {
  const games = [
    {
      title: "Cyberpunk 2077",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
      hoursPlayed: 127,
      achievements: 35,
      totalAchievements: 44,
      completionRate: 85,
      rank: "Легенда",
      lastPlayed: "2 часа назад",
    },
    {
      title: "The Witcher 3",
      image:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=400&fit=crop",
      hoursPlayed: 256,
      achievements: 51,
      totalAchievements: 53,
      completionRate: 96,
      rank: "Мастер",
      lastPlayed: "3 дня назад",
    },
    {
      title: "Elden Ring",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      hoursPlayed: 89,
      achievements: 28,
      totalAchievements: 42,
      completionRate: 67,
      lastPlayed: "1 неделю назад",
    },
    {
      title: "Red Dead Redemption 2",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      hoursPlayed: 178,
      achievements: 47,
      totalAchievements: 52,
      completionRate: 90,
      rank: "Ковбой",
      lastPlayed: "2 недели назад",
    },
    {
      title: "Baldur's Gate 3",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
      hoursPlayed: 203,
      achievements: 39,
      totalAchievements: 54,
      completionRate: 72,
      lastPlayed: "5 дней назад",
    },
    {
      title: "Hogwarts Legacy",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      hoursPlayed: 67,
      achievements: 22,
      totalAchievements: 35,
      completionRate: 63,
      lastPlayed: "1 месяц назад",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game, index) => (
        <GameStatCard key={index} {...game} />
      ))}
    </div>
  );
};

export default GamesList;
