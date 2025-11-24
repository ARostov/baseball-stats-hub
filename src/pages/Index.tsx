import Hero from "@/components/Hero";
import WeeklySchedule from "@/components/WeeklySchedule";
import WarmupCooldown from "@/components/WarmupCooldown";
import StrengthTraining from "@/components/StrengthTraining";
import PostBaseball from "@/components/PostBaseball";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WeeklySchedule />
      <WarmupCooldown />
      <StrengthTraining />
      <PostBaseball />
      
      <footer className="gradient-hero text-white py-8 text-center">
        <div className="container mx-auto px-6">
          <p className="text-lg font-bold mb-2">⚾ Будь сильным, быстрым и выносливым!</p>
          <p className="text-sm opacity-75">Тренируйся усердно и становись чемпионом</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
