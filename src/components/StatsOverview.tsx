import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsOverview = () => {
  const stats = [
    {
      title: "Общее время",
      value: "920 ч",
      icon: "Clock",
      color: "text-blue-400",
    },
    {
      title: "Игр пройдено",
      value: "23",
      icon: "CheckCircle",
      color: "text-green-400",
    },
    {
      title: "Достижений",
      value: "247",
      icon: "Trophy",
      color: "text-yellow-400",
    },
    {
      title: "Средний рейтинг",
      value: "4.7",
      icon: "Star",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`${stat.color}`}>
                <Icon name={stat.icon as any} size={24} />
              </div>
              <div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.title}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
