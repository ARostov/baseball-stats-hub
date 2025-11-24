import { Card } from "@/components/ui/card";

const days = [
  {
    day: "ПОНЕДЕЛЬНИК",
    icon: "✅",
    title: "Силовая тренировка",
    duration: "20-30 минут",
    color: "bg-primary text-primary-foreground",
  },
  {
    day: "ВТОРНИК",
    icon: "⚾",
    title: "Бейсбол 2ч + Растяжка",
    duration: "🧘",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    day: "СРЕДА",
    icon: "✅",
    title: "Силовая тренировка",
    duration: "20-30 минут",
    color: "bg-primary text-primary-foreground",
  },
  {
    day: "ЧЕТВЕРГ",
    icon: "⚾",
    title: "Бейсбол 2ч + Заминка",
    duration: "🧘",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    day: "ПЯТНИЦА",
    icon: "⚾",
    title: "Бейсбол 2ч + Восстановление",
    duration: "🚶",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    day: "СУББОТА",
    icon: "🚴",
    title: "Активный отдых",
    duration: "Велосипед, игры",
    color: "bg-accent text-accent-foreground",
  },
  {
    day: "ВОСКРЕСЕНЬЕ",
    icon: "🛌",
    title: "Полный отдых",
    duration: "Восстановление",
    color: "bg-muted text-muted-foreground",
  },
];

const WeeklySchedule = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            🗓️ Недельное расписание
          </h2>
          <p className="text-lg text-muted-foreground font-semibold">С учетом бейсбола</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {days.map((item, index) => (
            <Card
              key={index}
              className={`${item.color} p-6 shadow-card hover:shadow-hover transition-base cursor-pointer transform hover:scale-105 border-4 border-white baseball-stitching`}
            >
              <div className="text-center space-y-3">
                <div className="text-sm font-black tracking-wider opacity-90">
                  {item.day}
                </div>
                <div className="text-5xl">{item.icon}</div>
                <div className="font-bold text-lg leading-tight">{item.title}</div>
                <div className="text-sm opacity-90 font-medium">{item.duration}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklySchedule;
