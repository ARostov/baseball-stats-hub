const Hero = () => {
  return (
    <section className="relative gradient-hero text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white rounded-full opacity-20"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-block">
            <div className="text-7xl mb-4">⚾</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            Фитнес-план для<br />
            <span className="text-secondary">бейсболиста 10 лет</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white/90 max-w-2xl mx-auto">
            Сила + скорость + координация для чемпиона!
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"></div>
    </section>
  );
};

export default Hero;
