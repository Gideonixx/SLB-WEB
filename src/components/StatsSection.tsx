import { useEffect, useState, useRef } from 'react';
import { Award, Users, MapPin, Heart } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({ guests: 0, locations: 0, years: 0, rating: 0 });

  const finalStats = {
    guests: 5000,
    locations: 3,
    years: 12,
    rating: 4.9,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          guests: Math.floor(finalStats.guests * progress),
          locations: Math.floor(finalStats.locations * progress),
          years: Math.floor(finalStats.years * progress),
          rating: parseFloat((finalStats.rating * progress).toFixed(1)),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: `${counts.guests.toLocaleString()}+`,
      label: 'Happy Guests',
    },
    {
      icon: MapPin,
      value: counts.locations,
      label: 'Premium Locations',
    },
    {
      icon: Award,
      value: `${counts.years}+`,
      label: 'Years Experience',
    },
    {
      icon: Heart,
      value: counts.rating,
      label: 'Guest Rating',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-amber-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={32} />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-amber-100 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
