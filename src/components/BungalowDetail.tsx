import { JSX, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Bed, Waves, Wifi, Coffee, Wind, Tv, Car, Shield, Calendar, MapPin } from 'lucide-react';

interface BungalowData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  images: string[];
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  oceanView: boolean;
  features: string[];
  amenities: { icon: string; name: string }[];
}

const BungalowDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const bungalowsData: Record<string, BungalowData> = {
    'ocean-villa': {
      id: 'ocean-villa',
      name: 'Ocean Villa',
      tagline: 'Where Luxury Meets the Sea',
      description: 'An exquisite beachfront villa offering unparalleled ocean views and ultimate privacy.',
      longDescription: 'Our Ocean Villa represents the pinnacle of beachfront luxury. Wake up to the sound of gentle waves and enjoy breakfast on your private terrace overlooking the pristine coastline. This villa features floor-to-ceiling windows that frame the endless ocean horizon, a private infinity pool that seems to merge with the sea, and direct access to a secluded stretch of white sandy beach. Every detail has been carefully curated to create an atmosphere of refined elegance and tranquil sophistication.',
      price: 450,
      images: [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920',
      ],
      capacity: 2,
      bedrooms: 1,
      bathrooms: 2,
      oceanView: true,
      features: [
        'Private infinity pool',
        'Direct beach access',
        'King-size bed with premium linens',
        'Outdoor shower',
        'Private terrace with ocean views',
        'Luxury bathroom with soaking tub',
      ],
      amenities: [
        { icon: 'wifi', name: 'High-Speed WiFi' },
        { icon: 'coffee', name: 'Coffee Maker' },
        { icon: 'wind', name: 'Air Conditioning' },
        { icon: 'tv', name: 'Smart TV' },
        { icon: 'car', name: 'Free Parking' },
        { icon: 'shield', name: '24/7 Security' },
      ],
    },
    'family-retreat': {
      id: 'family-retreat',
      name: 'Family Retreat',
      tagline: 'Creating Memories Together',
      description: 'A spacious haven designed for families to bond and create unforgettable moments.',
      longDescription: 'The Family Retreat is thoughtfully designed to accommodate families of all sizes while maintaining an atmosphere of luxury and comfort. With three beautifully appointed bedrooms, expansive living areas, and a private garden, this bungalow offers the perfect balance of togetherness and personal space. Children will love the dedicated play area and easy beach access, while parents can relax in the sophisticated living spaces or enjoy sunset cocktails on the large veranda. Modern amenities blend seamlessly with warm, inviting decor to create a true home away from home.',
      price: 650,
      images: [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1920',
      ],
      capacity: 6,
      bedrooms: 3,
      bathrooms: 3,
      oceanView: true,
      features: [
        'Three spacious bedrooms',
        'Large private garden',
        'Full kitchen and dining area',
        'Children play area',
        'Multiple outdoor seating areas',
        'Beach toys and equipment',
      ],
      amenities: [
        { icon: 'wifi', name: 'High-Speed WiFi' },
        { icon: 'coffee', name: 'Full Kitchen' },
        { icon: 'wind', name: 'Air Conditioning' },
        { icon: 'tv', name: 'Multiple Smart TVs' },
        { icon: 'car', name: 'Free Parking' },
        { icon: 'shield', name: '24/7 Security' },
      ],
    },
    'sunset-suite': {
      id: 'sunset-suite',
      name: 'Sunset Suite',
      tagline: 'Watch the World Paint Itself Gold',
      description: 'An elegant suite positioned perfectly to capture the most spectacular sunsets.',
      longDescription: 'The Sunset Suite offers an unparalleled vantage point to witness nature\'s daily masterpiece. Perched on an elevated position, this suite provides panoramic views of the coastline where the sun dips into the ocean each evening in a display of golden and crimson hues. The interior reflects the warm tones of sunset with sophisticated, contemporary design. Two beautifully appointed bedrooms, a luxurious living area, and a secluded terrace create an intimate retreat perfect for couples or small families seeking tranquility and romance. Every evening becomes a celebration as you watch the sky transform from your private sanctuary.',
      price: 550,
      images: [
        'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920',
      ],
      capacity: 4,
      bedrooms: 2,
      bathrooms: 2,
      oceanView: true,
      features: [
        'Panoramic sunset views',
        'Private secluded terrace',
        'Two master bedrooms',
        'Modern luxury interiors',
        'Romantic ambiance lighting',
        'Premium sound system',
      ],
      amenities: [
        { icon: 'wifi', name: 'High-Speed WiFi' },
        { icon: 'coffee', name: 'Coffee & Bar' },
        { icon: 'wind', name: 'Air Conditioning' },
        { icon: 'tv', name: 'Smart TV' },
        { icon: 'car', name: 'Free Parking' },
        { icon: 'shield', name: '24/7 Security' },
      ],
    },
  };

  const bungalow = id ? bungalowsData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (bungalow && bungalow.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % bungalow.images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [bungalow]);

  if (!bungalow) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Bungalow not found</p>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      wifi: <Wifi size={24} />,
      coffee: <Coffee size={24} />,
      wind: <Wind size={24} />,
      tv: <Tv size={24} />,
      car: <Car size={24} />,
      shield: <Shield size={24} />,
    };
    return icons[iconName] || <Wifi size={24} />;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[70vh] overflow-hidden">
        {bungalow.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${bungalow.name} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <button
          onClick={() => navigate('/')}
          className={`absolute top-24 left-8 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div
          className={`absolute bottom-12 left-8 right-8 max-w-4xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-amber-400 tracking-widest text-sm uppercase mb-4">{bungalow.tagline}</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-4">{bungalow.name}</h1>
          <p className="text-xl text-neutral-200 mb-6">{bungalow.description}</p>

          <div className="flex items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>{bungalow.capacity} Guests</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed size={20} />
              <span>{bungalow.bedrooms} Bedrooms</span>
            </div>
            {bungalow.oceanView && (
              <div className="flex items-center gap-2 text-amber-400">
                <Waves size={20} />
                <span>Ocean View</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-light text-neutral-900 mb-6">About This Bungalow</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">{bungalow.longDescription}</p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-light text-neutral-900 mb-6">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bungalow.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-neutral-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-neutral-900 mb-6">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {bungalow.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-xl hover:bg-amber-50 transition-colors duration-300"
                  >
                    <div className="text-amber-600 mb-3">{getIcon(amenity.icon)}</div>
                    <span className="text-sm text-neutral-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-neutral-50 rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <p className="text-sm text-neutral-600 mb-2">Starting from</p>
                <p className="text-4xl font-light text-neutral-900">
                  ${bungalow.price}
                  <span className="text-lg text-neutral-600">/night</span>
                </p>
              </div>

              <button className="w-full mb-4 px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
                <Calendar size={20} />
                <span className="tracking-wider">Book Now</span>
              </button>

              <button className="w-full px-6 py-4 bg-white border-2 border-neutral-300 text-neutral-900 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all duration-300 tracking-wider">
                Check Availability
              </button>

              <div className="mt-8 pt-8 border-t border-neutral-200">
                <div className="flex items-start gap-3 text-neutral-700">
                  <MapPin size={20} className="mt-1 text-amber-600" />
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-sm">Sandalu Bungalows, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="text-sm text-neutral-600 mb-2">Need help?</p>
                <p className="text-sm text-neutral-700">Contact us for more information or special requests.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BungalowDetail;
