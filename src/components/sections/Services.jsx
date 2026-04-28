import React from 'react';
import { Clock } from 'lucide-react';

const Services = ({ text, whatsappLink }) => {
  // Prevent crash if data hasn't loaded yet
  if (!text) return null;

  return (
    <section id="lessons" className="py-20 bg-blue-50 px-4">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Main Title ("Lessons") */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {text.title}
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
          {text.sub}
        </p>

        {/* The Clean Action Box */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 max-w-md mx-auto transform transition-all hover:shadow-2xl">
            
            {/* The WhatsApp Button */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 text-white py-4 px-8 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all transform active:scale-95 text-lg"
            >
              {text.btn}
            </a>

            {/* "Flexible Times" Text Underneath */}
            <div className="mt-5 flex items-center justify-center gap-2 text-gray-500 font-medium">
              <Clock size={18} className="text-blue-500" />
              <span>{text.features.flex}</span>
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default Services;