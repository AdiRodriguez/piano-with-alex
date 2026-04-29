import React from 'react';
import { Clock } from 'lucide-react';

const Services = ({ text, whatsappLink }) => {
  if (!text) return null;

  return (
    <section id="lessons" className="py-24 bg-blue-50 px-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        
        {/* The Clean Action Box - NO HEADERS */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 transform transition-all hover:shadow-2xl text-center">
            
            {/* The WhatsApp Button */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 text-white py-4 px-8 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all transform active:scale-95 text-xl tracking-wide"
            >
              {text.btn}
            </a>

            {/* "Flexible Times" Text Underneath */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 font-medium text-lg">
              <Clock size={20} className="text-blue-500" />
              <span>{text.features.flex}</span>
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default Services;