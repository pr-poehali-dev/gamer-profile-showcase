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
          <Tabs defaultValue="games" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
              <TabsTrigger
                value="profile"
                className="text-slate-300 data-[state=active]:text-white"
              >
                Профиль
              </TabsTrigger>
              <TabsTrigger
                value="games"
                className="text-slate-300 data-[state=active]:text-white"
              >
                Игры
              </TabsTrigger>
              <TabsTrigger
                value="ratings"
                className="text-slate-300 data-[state=active]:text-white"
              >
                Рейтинги
              </TabsTrigger>
              <TabsTrigger
                value="gallery"
                className="text-slate-300 data-[state=active]:text-white"
              >
                Галерея
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <div className="text-center text-slate-400 py-12">
                <h3 className="text-xl font-semibold mb-2">Раздел профиля</h3>
                <p>Здесь будет подробная информация о игроке</p>
              </div>
            </TabsContent>

            <TabsContent value="games" className="mt-6">
              <StatsOverview />
              <GamesList />
            </TabsContent>

            <TabsContent value="ratings" className="mt-6">
              <div className="text-center text-slate-400 py-12">
                <h3 className="text-xl font-semibold mb-2">
                  Рейтинги и достижения
                </h3>
                <p>Здесь будут отображаться рейтинги по играм</p>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6">
              <div className="text-center text-slate-400 py-12">
                <h3 className="text-xl font-semibold mb-2">
                  Галерея скриншотов
                </h3>
                <p>Здесь будут скриншоты из игр</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
