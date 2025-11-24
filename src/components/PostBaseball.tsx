import { Card } from "@/components/ui/card";

const PostBaseball = () => {
  return (
    <section className="py-16 px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            ⚾ Что делать после бейсбола
          </h2>
          <p className="text-lg text-muted-foreground font-semibold">ВТ, ЧТ, ПТ</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-card hover:shadow-hover transition-base border-4 border-secondary">
            <h3 className="text-2xl font-black text-secondary mb-4">🎯 После игры (5 минут)</h3>
            <ul className="space-y-3">
              {[
                "Растяжка бросающей руки 1 мин",
                "Растяжка плеч 1 мин",
                "Растяжка ног 1 мин",
                "Массаж предплечья 1 мин",
                "Холодный компресс (если устало) 1 мин",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-xl">•</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-8 shadow-card hover:shadow-hover transition-base border-4 border-primary">
            <h3 className="text-2xl font-black text-primary mb-4">💤 Восстановление</h3>
            <div className="space-y-4">
              {[
                { icon: "💧", text: "Пить воду", time: "Сразу!" },
                { icon: "🍎", text: "Здоровый перекус", time: "Через 30 мин" },
                { icon: "😴", text: "Сон 9-10 часов", time: "Обязательно" },
                { icon: "📵", text: "Не сидеть в телефоне", time: "1 час после" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-muted p-4 rounded-lg">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-foreground">{item.text}</div>
                    <div className="text-sm text-secondary font-semibold">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PostBaseball;
