import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light text-white mb-6 tracking-wider">SANDALU</h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Experience the finest hospitality across Sri Lanka's most beautiful destinations. Creating memories that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-amber-400 transition-colors duration-300">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-6">Our Locations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/location/tissamaharama" className="hover:text-amber-400 transition-colors duration-300">
                  Tissamaharama
                </Link>
              </li>
              <li>
                <Link to="/location/nuwara-eliya" className="hover:text-amber-400 transition-colors duration-300">
                  Nuwara Eliya
                </Link>
              </li>
              <li>
                <Link to="/location/kitulgala" className="hover:text-amber-400 transition-colors duration-300">
                  Kitulgala
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+94771234567" className="hover:text-amber-400 transition-colors duration-300">
                    +94 77 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:info@sandalu.com" className="hover:text-amber-400 transition-colors duration-300">
                    info@sandalu.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p>Sandalu Bungalows</p>
                  <p>Sri Lanka</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} Sandalu Bungalows. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
