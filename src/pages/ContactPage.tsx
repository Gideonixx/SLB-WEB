import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  const locations = [
    {
      name: 'Tissamaharama - Unit 1',
      phone: '+94 77 123 4567',
      email: 'tissamaharama.unit1@sandalu.com',
      address: 'Beach Road, Tissamaharama, Southern Province',
    },
    {
      name: 'Tissamaharama - Unit 2',
      phone: '+94 77 123 4568',
      email: 'tissamaharama.unit2@sandalu.com',
      address: 'Beach Road, Tissamaharama, Southern Province',
    },
    {
      name: 'Nuwara Eliya',
      phone: '+94 77 123 4569',
      email: 'nuwaraeliya@sandalu.com',
      address: 'Hill Country, Nuwara Eliya, Central Province',
    },
    {
      name: 'Kitulgala',
      phone: '+94 77 123 4570',
      email: 'kitulgala@sandalu.com',
      address: 'Rainforest Area, Kitulgala, Sabaragamuwa Province',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-400 tracking-widest text-sm uppercase mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Contact Us</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-light text-neutral-900 mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="+94 77 123 4567"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
                  Select Location *
                </label>
                <select
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Choose a location...</option>
                  {locations.map((loc, index) => (
                    <option key={index} value={loc.name}>
                      {loc.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-light text-neutral-900 mb-8">Location Details</h2>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-xl p-6 hover:bg-amber-50 transition-colors duration-300"
                >
                  <h3 className="text-xl font-light text-neutral-900 mb-4">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Phone className="text-amber-600 flex-shrink-0 mt-1" size={18} />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-neutral-700 hover:text-amber-600 transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="text-amber-600 flex-shrink-0 mt-1" size={18} />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-neutral-700 hover:text-amber-600 transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-amber-600 flex-shrink-0 mt-1" size={18} />
                      <p className="text-neutral-700">{location.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-xl">
              <h3 className="text-xl font-light text-neutral-900 mb-3">Office Hours</h3>
              <p className="text-neutral-700 mb-2">Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p className="text-neutral-700 mb-2">Saturday - Sunday: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-neutral-600 mt-4">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
