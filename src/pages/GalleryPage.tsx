import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Filter } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  location: string;
  unit?: string;
  alt: string;
}

const GalleryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const galleryImages: GalleryImage[] = [
    { id: 1, url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920', location: 'tissamaharama', unit: 'unit1', alt: 'Tissamaharama Unit 1' },
    { id: 2, url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920', location: 'tissamaharama', unit: 'unit1', alt: 'Tissamaharama Unit 1' },
    { id: 3, url: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1920', location: 'tissamaharama', unit: 'unit2', alt: 'Tissamaharama Unit 2' },
    { id: 4, url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920', location: 'tissamaharama', unit: 'unit2', alt: 'Tissamaharama Unit 2' },
    { id: 5, url: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1920', location: 'nuwara-eliya', alt: 'Nuwara Eliya' },
    { id: 6, url: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1920', location: 'nuwara-eliya', alt: 'Nuwara Eliya' },
    { id: 7, url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920', location: 'kitulgala', alt: 'Kitulgala' },
    { id: 8, url: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1920', location: 'kitulgala', alt: 'Kitulgala' },
    { id: 9, url: 'https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&w=1920', location: 'nuwara-eliya', alt: 'Nuwara Eliya' },
    { id: 10, url: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1920', location: 'kitulgala', alt: 'Kitulgala' },
  ];

  const filters = [
    { id: 'all', name: 'All Locations' },
    { id: 'tissamaharama', name: 'Tissamaharama' },
    { id: 'tissamaharama-unit1', name: 'Tissamaharama - Unit 1' },
    { id: 'tissamaharama-unit2', name: 'Tissamaharama - Unit 2' },
    { id: 'nuwara-eliya', name: 'Nuwara Eliya' },
    { id: 'kitulgala', name: 'Kitulgala' },
  ];

  const filteredImages = galleryImages.filter(image => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'tissamaharama') return image.location === 'tissamaharama';
    if (selectedFilter === 'tissamaharama-unit1') return image.location === 'tissamaharama' && image.unit === 'unit1';
    if (selectedFilter === 'tissamaharama-unit2') return image.location === 'tissamaharama' && image.unit === 'unit2';
    return image.location === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-400 tracking-widest text-sm uppercase mb-4">Explore Our Properties</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Gallery</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Discover the beauty and elegance of our bungalows across Sri Lanka's most breathtaking destinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4">
          <Filter className="text-neutral-600 flex-shrink-0" size={20} />
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-light">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg">No images found for this filter.</p>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;
