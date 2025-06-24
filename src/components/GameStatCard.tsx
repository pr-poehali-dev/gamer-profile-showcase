import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface GameStatCardProps {
  title: string;
  image: string;
  hoursPlayed: number;
  achievements: number;
  totalAchievements: number;
  completionRate: number;
  rank?: string;
  lastPlayed: string;
}

const GameStatCard = ({
  title,
  image,
  hoursPlayed,
  achievements,
  totalAchievements,
  completionRate,
  rank,
  lastPlayed,
}: GameStatCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-slate-800 border-slate-700">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={title}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex-1">
            <CardTitle className="text-lg text-white">{title}</CardTitle>
            <p className="text-sm text-slate-400">{lastPlayed}</p>
          </div>
          {rank && (
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
              {rank}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="flex items-center gap-1 text-slate-400">
              <Icon name="Clock" size={16} />
              Время в игре
            </div>
            <div className="font-semibold text-white">{hoursPlayed} ч</div>
          </div>
          <div>
            <div className="flex items-center gap-1 text-slate-400">
              <Icon name="Trophy" size={16} />
              Достижения
            </div>
            <div className="font-semibold text-white">
              {achievements}/{totalAchievements}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Прогресс</span>
            <span className="text-white font-semibold">{completionRate}%</span>
          </div>
          <Progress value={completionRate} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default GameStatCard;
