import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ProfileHeader = () => {
  return (
    <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700">
      <CardContent className="p-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white">
            ГК
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white mb-2">
              GamerKing2024
            </h1>
            <p className="text-slate-300 mb-3">
              Уровень 47 • В игре уже 3 года
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-purple-500 text-white">
                Про игрок
              </Badge>
              <Badge
                variant="outline"
                className="border-blue-400 text-blue-400"
              >
                Онлайн
              </Badge>
            </div>
          </div>
          <div className="text-right text-slate-300">
            <div className="text-sm">Последняя игра</div>
            <div className="font-semibold text-white">2 часа назад</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;
