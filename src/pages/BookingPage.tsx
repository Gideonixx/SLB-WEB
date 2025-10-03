import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Calendar, Users, MapPin, Lock } from 'lucide-react';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-400 tracking-widest text-sm uppercase mb-4">Reserve Your Stay</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Book Your Experience</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Select your preferred location and dates to begin your booking.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <Lock className="text-amber-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-medium text-neutral-900 mb-2">Authentication Required</h3>
              <p className="text-neutral-700 mb-4">
                To make a booking, you need to sign in to your account or create a new one. This helps us provide you with a personalized experience and manage your reservations efficiently.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:scale-105">
                  Sign In
                </button>
                <button className="px-6 py-3 bg-white border-2 border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-all duration-300">
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-light text-neutral-900 mb-6">How Booking Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-amber-600" size={28} />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">1. Choose Location</h3>
              <p className="text-sm text-neutral-600">
                Select from Tissamaharama, Nuwara Eliya, or Kitulgala
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-amber-600" size={28} />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">2. Select Dates</h3>
              <p className="text-sm text-neutral-600">
                Check availability and choose your stay dates
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-amber-600" size={28} />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">3. Submit Request</h3>
              <p className="text-sm text-neutral-600">
                Send your booking request for admin confirmation
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-light text-neutral-900 mb-4">Need Assistance?</h3>
          <p className="text-neutral-700 mb-6">
            Our team is ready to help you plan your perfect getaway. Contact us for personalized assistance or special requests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BookingPage;
