import { Card } from "@/components/ui/card";

const WarmupCooldown = () => {
  return (
    <section className="py-16 px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            🔥 Разминка и 🧘 Заминка
          </h2>
          <p className="text-lg text-secondary font-bold">Обязательно!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-card hover:shadow-hover transition-base border-4 border-primary">
            <h3 className="text-2xl font-black text-primary mb-2">🎯 Разминка (5-7 минут)</h3>
            <p className="text-muted-foreground italic mb-6">Перед ЛЮБОЙ тренировкой и игрой</p>
            <ul className="space-y-3">
              {[
                "Бег на месте 1 мин",
                "Вращения руками 30 сек",
                "Вращения туловищем 30 сек",
                "Махи ногами 1 мин",
                "Прыжки \"звездочка\" 1 мин",
                "Легкая растяжка 2 мин",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-xl">•</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-8 shadow-card hover:shadow-hover transition-base border-4 border-accent">
            <h3 className="text-2xl font-black text-accent-foreground mb-2">🧘 Заминка (5 минут)</h3>
            <p className="text-muted-foreground italic mb-6">После ЛЮБОЙ тренировки и игры</p>
            <ul className="space-y-3">
              {[
                "Медленная ходьба 1 мин",
                "Растяжка рук и плеч 1 мин",
                "Растяжка ног 1 мин",
                "Растяжка спины 1 мин",
                "Глубокое дыхание 1 мин",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">•</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WarmupCooldown;
