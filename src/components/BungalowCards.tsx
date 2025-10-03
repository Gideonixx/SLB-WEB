import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Bed, Waves } from 'lucide-react';

interface Bungalow {
  id: string;
  name: string;
  description: string;
  image: string;
  capacity: number;
  bedrooms: number;
  oceanView: boolean;
}

const BungalowCards = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  const bungalows: Bungalow[] = [
    {
      id: 'tissamaharama',
      name: 'Tissamaharama',
      description: 'Experience the perfect blend of beach relaxation and wildlife adventure in Southern Sri Lanka. Gateway to Yala National Park with pristine beaches.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920',
      capacity: 6,
      bedrooms: 3,
      oceanView: true,
    },
    {
      id: 'nuwara-eliya',
      name: 'Nuwara Eliya',
      description: 'Escape to the cool climate and scenic beauty of Sri Lanka\'s hill country paradise. Surrounded by tea plantations and misty mountains.',
      image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1920',
      capacity: 8,
      bedrooms: 4,
      oceanView: false,
    },
    {
      id: 'kitulgala',
      name: 'Kitulgala',
      description: 'Immerse yourself in thrilling adventures amidst lush rainforests and pristine rivers. Perfect for nature enthusiasts and adventure seekers.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
      capacity: 6,
      bedrooms: 3,
      oceanView: false,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.bungalow-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible && !visibleCards[index]) {
          setVisibleCards(prev => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);

  const handleCardClick = (id: string) => {
    navigate(`/location/${id}`);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-600 tracking-widest text-sm uppercase mb-4">Our Locations</p>
          <h2 className="text-4xl md:text-6xl font-light text-neutral-900 mb-6">
            Discover Sri Lanka
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our three stunning locations across Sri Lanka, each offering unique experiences from beaches to mountains to rainforests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bungalows.map((bungalow, index) => (
            <div
              key={bungalow.id}
              className={`bungalow-card group relative h-[550px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 transform ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => handleCardClick(bungalow.id)}
            >
              <div className="absolute inset-0">
                <img
                  src={bungalow.image}
                  alt={bungalow.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <Users size={18} />
                    <span className="text-sm">{bungalow.capacity} Guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Bed size={18} />
                    <span className="text-sm">{bungalow.bedrooms} Bedrooms</span>
                  </div>
                  {bungalow.oceanView && (
                    <div className="flex items-center gap-2 text-amber-400">
                      <Waves size={18} />
                    </div>
                  )}
                </div>

                <h3 className="text-3xl font-light text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {bungalow.name}
                </h3>

                <p className="text-neutral-200 leading-relaxed mb-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {bungalow.description}
                </p>

                <button className="self-start px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-150 text-sm tracking-wider">
                  View Details
                </button>
              </div>

              <div className="absolute top-6 right-6 z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform rotate-0 group-hover:rotate-45 transition-transform duration-500">
                  <span className="text-2xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BungalowCards;
