import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppFloat = () => {
  // Replace this with his real number. Format: 972 + number without 0
  const phoneNumber = "972500000000"; 
  const message = "Hi Dave, I'm interested in piano lessons!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      {/* We use the Phone icon, or you can find a WhatsApp SVG icon */}
      <Phone size={32} fill="white" />
    </a>
  );
};

export default WhatsAppFloat;