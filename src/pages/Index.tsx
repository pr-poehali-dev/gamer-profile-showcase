import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileHeader from "@/components/ProfileHeader";
import StatsOverview from "@/components/StatsOverview";
import GamesList from "@/components/GamesList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <ProfileHeader />

        <div className="mt-8">
          <Tabs defaultValue="matches" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800 border-gray-700">
              <TabsTrigger
                value="matches"
                className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#FF4655]"
              >
                Матчи
              </TabsTrigger>
              <TabsTrigger
                value="agents"
                className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#FF4655]"
              >
                Агенты
              </TabsTrigger>
              <TabsTrigger
                value="rankings"
                className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#FF4655]"
              >
                Рейтинг
              </TabsTrigger>
              <TabsTrigger
                value="clips"
                className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#FF4655]"
              >
                Клипы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="matches" className="mt-6">
              <StatsOverview />
              <GamesList />
            </TabsContent>

            <TabsContent value="agents" className="mt-6">
              <div className="text-center text-gray-400 py-12">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Статистика по агентам
                </h3>
                <p>Детальная статистика игры за разных агентов</p>
              </div>
            </TabsContent>

            <TabsContent value="rankings" className="mt-6">
              <div className="text-center text-gray-400 py-12">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Рейтинговая история
                </h3>
                <p>График изменения ранга и RR по актам</p>
              </div>
            </TabsContent>

            <TabsContent value="clips" className="mt-6">
              <div className="text-center text-gray-400 py-12">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Лучшие моменты
                </h3>
                <p>Сохранённые клипы и хайлайты матчей</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
