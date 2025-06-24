import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ProfileHeader = () => {
  return (
    <Card className="bg-gradient-to-r from-gray-900 to-black border-[#FF4655]/20">
      <CardContent className="p-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF4655] to-red-600 flex items-center justify-center text-2xl font-bold text-white border-2 border-red-400"></div>
          <div className="flex-1">
            <h1 className="font-bold mb-2 mx-0 text-white text-xl">
              sxdamustd?e #FF47
            </h1>
            <p className="text-gray-300 mb-3">Immortal 3 • 467 RR • Акт 3</p>
            <div className="flex gap-2">
              <Badge className="bg-[#FF4655] text-white border-0 hover:bg-[#FF4655]/80">
                Основной Jett
              </Badge>
              <Badge
                variant="outline"
                className="border-green-400 text-green-400 bg-green-400/10"
              >
                В матче
              </Badge>
            </div>
          </div>
          <div className="text-right text-gray-300">
            <div className="text-sm">Последний матч</div>
            <div className="font-semibold text-white">Победа • 13-8</div>
            <div className="text-xs text-gray-400">15 минут назад</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;
