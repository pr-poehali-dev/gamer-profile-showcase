import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsOverview = () => {
  const valorantStats = [
    {
      title: "Текущий ранг",
      value: "Immortal 2",
      icon: "Crown",
      color: "text-purple-400",
    },
    {
      title: "Всего матчей",
      value: "6856",
      icon: "Activity",
      color: "text-[#FF4655]",
    },
    {
      title: "Винрейт",
      value: "67%",
      icon: "TrendingUp",
      color: "text-green-400",
    },
    {
      title: "Любимый агент",
      value: "Jett",
      icon: "User",
      color: "text-blue-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {valorantStats.map((stat, index) => (
        <Card
          key={index}
          className="bg-gray-900 border-gray-700 hover:border-[#FF4655]/40 transition-colors"
        >
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`${stat.color}`}>
                <Icon name={stat.icon as any} size={24} />
              </div>
              <div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.title}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
