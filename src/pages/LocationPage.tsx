import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Calendar, MapPin, Thermometer, Sun, Users, Bed, ChevronLeft, ChevronRight } from 'lucide-react';

interface LocationData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  images: string[];
  bestTimeToVisit: {
    months: string;
    temperature: string;
    activities: string[];
  };
  history: string;
  units?: Array<{
    name: string;
    capacity: number;
    bedrooms: number;
  }>;
}

const LocationPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const locationsData: Record<string, LocationData> = {
    'tissamaharama': {
      id: 'tissamaharama',
      name: 'Tissamaharama',
      tagline: 'Where Wildlife Meets the Ocean',
      description: 'Experience the perfect blend of beach relaxation and wildlife adventure in Southern Sri Lanka.',
      heroImage: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920',
      images: [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920',
      ],
      bestTimeToVisit: {
        months: 'December to March',
        temperature: '25°C - 32°C',
        activities: ['Wildlife Safari', 'Beach Activities', 'Bird Watching', 'Temple Visits', 'Water Sports'],
      },
      history: 'Tissamaharama is an ancient city with a rich heritage dating back over 2,000 years. Once a royal capital of the Ruhuna Kingdom, it is home to magnificent stupas and historical sites. Today, it serves as the gateway to Yala National Park, famous for having one of the highest leopard densities in the world. The area combines cultural significance with natural beauty, offering visitors a unique blend of history, wildlife, and coastal charm.',
      units: [
        { name: 'Unit 1', capacity: 4, bedrooms: 2 },
        { name: 'Unit 2', capacity: 6, bedrooms: 3 },
      ],
    },
    'nuwara-eliya': {
      id: 'nuwara-eliya',
      name: 'Nuwara Eliya',
      tagline: 'The Little England of Sri Lanka',
      description: 'Escape to the cool climate and scenic beauty of Sri Lanka\'s hill country paradise.',
      heroImage: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1920',
      images: [
        'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
      ],
      bestTimeToVisit: {
        months: 'January to March, July to August',
        temperature: '14°C - 20°C',
        activities: ['Tea Plantation Tours', 'Hiking', 'Boating', 'Golf', 'Strawberry Picking'],
      },
      history: 'Nuwara Eliya, perched at 1,868 meters above sea level, was developed by British colonials in the 19th century as a hill station retreat. Known as "Little England," it retains much of its colonial charm with Tudor-style architecture, manicured gardens, and a cool climate reminiscent of an English spring. The area is the heart of Sri Lanka\'s tea country, surrounded by emerald green tea plantations that produce some of the world\'s finest Ceylon tea.',
      units: [
        { name: 'Main Bungalow', capacity: 8, bedrooms: 4 },
      ],
    },
    'kitulgala': {
      id: 'kitulgala',
      name: 'Kitulgala',
      tagline: 'Adventure in the Heart of Nature',
      description: 'Immerse yourself in thrilling adventures amidst lush rainforests and pristine rivers.',
      heroImage: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1920',
      ],
      bestTimeToVisit: {
        months: 'December to April',
        temperature: '22°C - 28°C',
        activities: ['White Water Rafting', 'Canyoning', 'Bird Watching', 'Jungle Trekking', 'Waterfall Visits'],
      },
      history: 'Kitulgala is a small town nestled in the wet zone rainforest of Sri Lanka, famous for its role in the filming of "The Bridge on the River Kwai." The area is blessed with incredible biodiversity and is a paradise for nature enthusiasts and adventure seekers. The Kelani River, which flows through Kitulgala, is considered one of the best white water rafting destinations in Asia. The surrounding rainforest is home to numerous endemic species of flora and fauna.',
      units: [
        { name: 'Riverside Bungalow', capacity: 6, bedrooms: 3 },
      ],
    },
  };

  const location = id ? locationsData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (location && location.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % location.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [location]);

  const nextImage = () => {
    if (location) {
      setCurrentImageIndex((prev) => (prev + 1) % location.images.length);
    }
  };

  const prevImage = () => {
    if (location) {
      setCurrentImageIndex((prev) => (prev - 1 + location.images.length) % location.images.length);
    }
  };

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Location not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[80vh] overflow-hidden">
        <img
          src={location.heroImage}
          alt={location.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-amber-400 tracking-widest text-sm uppercase mb-4">{location.tagline}</p>
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6">{location.name}</h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
              {location.description}
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Calendar size={20} />
              <span className="tracking-wider">Book This Location</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light text-neutral-900 mb-8">Best Time to Visit</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="text-amber-600" size={32} />
                  <h3 className="text-xl font-light text-neutral-900">Ideal Months</h3>
                </div>
                <p className="text-lg text-neutral-700">{location.bestTimeToVisit.months}</p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="text-amber-600" size={32} />
                  <h3 className="text-xl font-light text-neutral-900">Temperature</h3>
                </div>
                <p className="text-lg text-neutral-700">{location.bestTimeToVisit.temperature}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-light text-neutral-900 mb-4">Popular Activities</h3>
              <div className="flex flex-wrap gap-3">
                {location.bestTimeToVisit.activities.map((activity, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-neutral-900 mb-4">History & Heritage</h3>
              <p className="text-lg text-neutral-700 leading-relaxed">{location.history}</p>
            </div>
          </div>

          <div>
            {location.units && (
              <div className="bg-neutral-50 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-light text-neutral-900 mb-6">Available Units</h3>
                <div className="space-y-4">
                  {location.units.map((unit, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-neutral-200">
                      <h4 className="text-lg font-medium text-neutral-900 mb-3">{unit.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-neutral-600">
                        <div className="flex items-center gap-2">
                          <Users size={16} />
                          <span>{unit.capacity} Guests</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bed size={16} />
                          <span>{unit.bedrooms} Bedrooms</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-neutral-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-amber-600" size={24} />
                <h3 className="text-xl font-light text-neutral-900">Location</h3>
              </div>
              <p className="text-neutral-700 mb-4">{location.name}, Sri Lanka</p>
              <Link
                to="/contact"
                className="block w-full px-6 py-3 bg-white border-2 border-neutral-300 text-neutral-900 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all duration-300 text-center"
              >
                Contact for Details
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-light text-neutral-900 mb-8 text-center">Photo Gallery</h2>
          <div className="relative">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              {location.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${location.name} ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="text-neutral-900" size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="text-neutral-900" size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {location.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'w-8 bg-amber-400' : 'w-2 bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-light text-neutral-900 mb-6">Ready to Experience {location.name}?</h2>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-10 py-5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
          >
            <Calendar size={24} />
            <span className="tracking-wider">Book Your Stay Now</span>
          </Link>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LocationPage;
