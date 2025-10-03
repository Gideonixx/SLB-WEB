import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const CTASection = () => {
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
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Book Your Stay"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 to-neutral-900/70" />
          </div>

          <div className="relative px-8 py-20 md:py-32 md:px-16 max-w-3xl">
            <p className="text-amber-400 tracking-widest text-sm uppercase mb-4">Start Your Journey</p>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-xl text-neutral-200 mb-10 leading-relaxed">
              Book your perfect getaway today and discover the magic of Sri Lanka. Whether you seek adventure, relaxation, or cultural immersion, we have the perfect location for you.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Calendar size={24} />
                <span className="text-lg tracking-wider">Book Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg transition-all duration-300"
              >
                <span className="text-lg tracking-wider">View Gallery</span>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-neutral-300">
              <div>
                <div className="text-3xl font-light text-white mb-1">Free Cancellation</div>
                <div className="text-sm">Cancel up to 48 hours before</div>
              </div>
              <div>
                <div className="text-3xl font-light text-white mb-1">Best Price</div>
                <div className="text-sm">Guaranteed lowest rates</div>
              </div>
              <div>
                <div className="text-3xl font-light text-white mb-1">24/7 Support</div>
                <div className="text-sm">Always here to help</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
