import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890';
  const message = encodeURIComponent("Hi, I'd like to inquire about booking at Sandalu Bungalows.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle size={28} className="text-white" strokeWidth={2} />
        </div>
      </div>
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-neutral-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
