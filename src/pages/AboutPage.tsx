import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { MapPin, Heart, Award, Users } from 'lucide-react';

const AboutPage = () => {
  const locations = [
    {
      name: 'Tissamaharama',
      units: ['Unit 1', 'Unit 2'],
      address: 'Beach Road, Tissamaharama, Southern Province, Sri Lanka',
      coordinates: { lat: 6.2819, lng: 81.2829 },
      description: 'Nestled near pristine beaches and wildlife sanctuaries.'
    },
    {
      name: 'Nuwara Eliya',
      address: 'Hill Country, Nuwara Eliya, Central Province, Sri Lanka',
      coordinates: { lat: 6.9497, lng: 80.7891 },
      description: 'Surrounded by tea plantations and misty mountains.'
    },
    {
      name: 'Kitulgala',
      address: 'Rainforest Area, Kitulgala, Sabaragamuwa Province, Sri Lanka',
      coordinates: { lat: 6.9897, lng: 80.4178 },
      description: 'Adventure paradise in the heart of the rainforest.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-400 tracking-widest text-sm uppercase mb-4">Discover Our Story</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">About Sandalu Bungalows</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Creating unforgettable experiences across Sri Lanka's most beautiful destinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-light text-neutral-900 mb-6">Our Story</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Sandalu Bungalows was born from a passion for showcasing the natural beauty and cultural richness of Sri Lanka. For over a decade, we have been welcoming travelers from around the world to experience the island's diverse landscapes and warm hospitality.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              From the sun-kissed beaches of the south to the misty highlands of the central province, and the lush rainforests in between, each of our properties offers a unique gateway to explore Sri Lanka's treasures.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              We believe in sustainable tourism and creating meaningful connections between our guests and the local communities. Every stay with us supports local artisans, farmers, and conservation efforts.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Sandalu Bungalows"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-neutral-50 rounded-2xl">
            <Heart className="mx-auto mb-4 text-amber-600" size={48} />
            <h3 className="text-2xl font-light text-neutral-900 mb-3">Our Mission</h3>
            <p className="text-neutral-700">
              To provide exceptional hospitality while preserving the natural beauty and cultural heritage of Sri Lanka.
            </p>
          </div>
          <div className="text-center p-8 bg-neutral-50 rounded-2xl">
            <Award className="mx-auto mb-4 text-amber-600" size={48} />
            <h3 className="text-2xl font-light text-neutral-900 mb-3">Excellence</h3>
            <p className="text-neutral-700">
              Award-winning service and accommodations that exceed expectations at every touchpoint.
            </p>
          </div>
          <div className="text-center p-8 bg-neutral-50 rounded-2xl">
            <Users className="mx-auto mb-4 text-amber-600" size={48} />
            <h3 className="text-2xl font-light text-neutral-900 mb-3">Community</h3>
            <p className="text-neutral-700">
              Supporting local communities and creating positive impacts wherever we operate.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-light text-neutral-900 mb-8 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-2xl font-light text-neutral-900 mb-2">{location.name}</h3>
                    {location.units && (
                      <p className="text-sm text-amber-600 mb-2">{location.units.join(' • ')}</p>
                    )}
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">{location.description}</p>
                <p className="text-sm text-neutral-600">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
