import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ValorantStatCardProps {
  rank: string;
  rr: number;
  kd: number;
  headshotPercent: number;
  winRate: number;
  mainAgent: string;
  recentMatches: { result: "win" | "loss"; score: string; map: string }[];
  actProgress: number;
}

const GameStatCard = ({
  rank,
  rr,
  kd,
  headshotPercent,
  winRate,
  mainAgent,
  recentMatches,
  actProgress,
}: ValorantStatCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-[#FF4655]/20 hover:border-[#FF4655]/40">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF4655] to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <div>
              <CardTitle className="text-lg text-white">VALORANT</CardTitle>
              <p className="text-sm text-gray-400">Онлайн сейчас</p>
            </div>
          </div>
          <Badge className="bg-gradient-to-r from-[#FF4655] to-red-600 text-white border-0">
            {rank}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
              <Icon name="Target" size={14} />
              RR
            </div>
            <div className="font-bold text-[#FF4655] text-lg">{rr}</div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
              <Icon name="Crosshair" size={14} />
              K/D
            </div>
            <div className="font-bold text-white text-lg">{kd}</div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
              <Icon name="Zap" size={14} />
              Хедшоты
            </div>
            <div className="font-bold text-yellow-400 text-lg">
              {headshotPercent}%
            </div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
              <Icon name="Trophy" size={14} />
              Винрейт
            </div>
            <div className="font-bold text-green-400 text-lg">{winRate}%</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Основной агент</span>
            <span className="text-white font-semibold">{mainAgent}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Прогресс акта</span>
            <span className="text-white font-semibold">{actProgress}%</span>
          </div>
          <Progress value={actProgress} className="h-2 bg-gray-800">
            <div
              className="h-full bg-gradient-to-r from-[#FF4655] to-red-600 rounded-full transition-all"
              style={{ width: `${actProgress}%` }}
            />
          </Progress>
        </div>

        <div className="space-y-2">
          <span className="text-gray-400 text-sm">Последние матчи</span>
          <div className="flex gap-1">
            {recentMatches.slice(0, 5).map((match, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-sm flex items-center justify-center text-xs font-bold ${
                  match.result === "win"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
                title={`${match.score} на ${match.map}`}
              >
                {match.result === "win" ? "W" : "L"}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameStatCard;
