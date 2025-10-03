import { useEffect, useState, useRef } from 'react';
import { Wifi, Utensils, Car, Shield, Coffee, Waves } from 'lucide-react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary high-speed internet throughout your stay.',
    },
    {
      icon: Utensils,
      title: 'Local Cuisine',
      description: 'Experience authentic Sri Lankan flavors prepared by our expert chefs.',
    },
    {
      icon: Car,
      title: 'Free Parking',
      description: 'Secure parking facilities available for all our guests at no extra cost.',
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security ensuring your safety and peace of mind.',
    },
    {
      icon: Coffee,
      title: 'Complimentary Breakfast',
      description: 'Start your day with a delicious breakfast featuring local and international options.',
    },
    {
      icon: Waves,
      title: 'Guided Tours',
      description: 'Exclusive access to local attractions and wildlife adventures.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-600 tracking-widest text-sm uppercase mb-4">Premium Amenities</p>
          <h2 className="text-4xl md:text-6xl font-light text-neutral-900 mb-6">
            Everything You Need
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We provide world-class amenities to ensure your stay is comfortable, convenient, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-neutral-50 rounded-2xl hover:bg-amber-50 transition-all duration-500 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-8 right-8 w-16 h-16 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                <div className="relative">
                  <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-light text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
