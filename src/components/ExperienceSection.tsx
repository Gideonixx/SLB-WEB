import { useEffect, useState, useRef } from 'react';
import { Mountain, Palmtree, Compass } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="text-amber-600 tracking-widest text-sm uppercase mb-4">Unforgettable Experiences</p>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Explore the Beauty of Sri Lanka
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              From pristine beaches to misty mountains and lush rainforests, each location offers unique experiences that will create memories lasting a lifetime. Discover wildlife, culture, and natural wonders at every turn.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palmtree className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">Beach Paradise</h3>
                  <p className="text-neutral-600">
                    Golden sands, crystal waters, and stunning sunsets await at our coastal locations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mountain className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">Mountain Retreats</h3>
                  <p className="text-neutral-600">
                    Cool climates, tea plantations, and breathtaking views in the hill country.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Compass className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">Adventure Awaits</h3>
                  <p className="text-neutral-600">
                    White water rafting, wildlife safaris, and jungle trekking experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amber-600 rounded-2xl transform rotate-3" />
              <img
                src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Sri Lanka Experience"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-400 rounded-2xl -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
