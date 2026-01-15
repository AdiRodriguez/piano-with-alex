import React from 'react';
import { Check, Music, Clock, Star } from 'lucide-react';

// 1. Accept 'text' as a prop
const Services = ({ text }) => {
  // Prevent crash if data hasn't loaded yet
  if (!text) return null;

  return (
    <section id="lessons" className="py-20 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">{text.title}</h2>
          <p className="text-gray-600 mt-2">{text.sub}</p>
        </div>

        {/* The Single Big Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* Price Side */}
          <div className="bg-blue-600 p-8 md:p-12 text-white flex flex-col justify-center items-center md:w-1/3 text-center">
            <h3 className="text-xl font-medium opacity-90 mb-2">{text.per_lesson}</h3>
            <div className="text-6xl font-bold mb-2">{text.price}</div>
            {/* We can re-use the per_lesson text or add a specific subtext here if needed */}
            <p className="opacity-90 font-medium">{text.per_lesson}</p>
          </div>

          {/* Features Side */}
          <div className="p-8 md:p-12 md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-start">
              {text.sub}
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              
              {/* Feature 1: Time */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                  <Clock size={20} />
                </div>
                <div className="text-start">
                  <h4 className="font-bold text-gray-900">{text.features.time}</h4>
                  <p className="text-sm text-gray-500">{text.features.time_desc}</p>
                </div>
              </div>

              {/* Feature 2: Theory */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                  <Music size={20} />
                </div>
                <div className="text-start">
                  <h4 className="font-bold text-gray-900">{text.features.theory}</h4>
                  <p className="text-sm text-gray-500">{text.features.theory_desc}</p>
                </div>
              </div>

              {/* Feature 3: Exams */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                  <Star size={20} />
                </div>
                <div className="text-start">
                  <h4 className="font-bold text-gray-900">{text.features.exams}</h4>
                  <p className="text-sm text-gray-500">{text.features.exams_desc}</p>
                </div>
              </div>

              {/* Feature 4: Flexibility */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                  <Check size={20} />
                </div>
                <div className="text-start">
                  <h4 className="font-bold text-gray-900">{text.features.flex}</h4>
                  <p className="text-sm text-gray-500">{text.features.flex_desc}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
               <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-gray-800 transition-all transform active:scale-95">
                 {text.btn}
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;