import { Card } from "@/components/ui/card";

const exercises = [
  {
    title: "Подтягивания для сильного броска",
    icon: "🎯",
    sets: "2-3",
    reps: "3-5 раз",
    rest: "60 секунд",
    benefits: ["Спина", "Плечи", "Сила броска"],
    technique: "Медленно подтягивайся, представляя, что бросаешь мяч.",
    secret: "Сильная спина = дальний бросок!",
    note: "(С поддержкой)",
  },
  {
    title: "Отжимания для скорости удара",
    icon: "💨",
    sets: "2-3",
    reps: "5-8 раз",
    rest: "45 секунд",
    benefits: ["Грудь", "Руки", "Сила удара"],
    technique: "Быстро отжимайся вверх - медленно вниз.",
    secret: "Сильные руки = мощный удар по мячу!",
    note: "(На коленях)",
  },
  {
    title: "Приседания для быстрого бега",
    icon: "🏃‍♂️",
    sets: "2-3",
    reps: "8-12 раз",
    rest: "45 секунд",
    benefits: ["Ноги", "Скорость", "База"],
    technique: "Приседай быстро - вставай взрывно!",
    secret: "Сильные ноги = быстрый бег по базам!",
    note: "(Быстрые ноги!)",
  },
];

const StrengthTraining = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            💪 Силовая тренировка (пн/ср)
          </h2>
          <p className="text-lg text-muted-foreground font-semibold mb-2">20-30 минут</p>
          <p className="text-xl font-bold text-secondary">⚡ Особое внимание для бейсболиста:</p>
          <p className="text-lg text-foreground font-medium">Укрепляем мышцы для броска, бега и удара!</p>
        </div>
        
        <div className="space-y-8">
          {exercises.map((exercise, index) => (
            <Card
              key={index}
              className="p-8 shadow-card hover:shadow-hover transition-base border-l-8 border-l-secondary"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">{exercise.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-primary mb-1">
                    {exercise.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{exercise.note}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="text-sm font-bold text-muted-foreground mb-1">Подходы:</div>
                      <div className="text-lg font-black text-primary">{exercise.sets}</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="text-sm font-bold text-muted-foreground mb-1">Повторения:</div>
                      <div className="text-lg font-black text-primary">{exercise.reps}</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="text-sm font-bold text-muted-foreground mb-1">Отдых:</div>
                      <div className="text-lg font-black text-primary">{exercise.rest}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-bold text-muted-foreground mb-2">💪 Для бейсбола:</div>
                    <div className="flex flex-wrap gap-2">
                      {exercise.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-sm font-bold text-muted-foreground mb-1">🎯 Техника:</div>
                    <p className="text-foreground font-medium">{exercise.technique}</p>
                  </div>
                  
                  <div className="bg-accent/20 p-4 rounded-lg border-2 border-accent">
                    <p className="text-sm font-black text-foreground">
                      ⚾ Бейсбол-секрет: <span className="text-secondary">{exercise.secret}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthTraining;
