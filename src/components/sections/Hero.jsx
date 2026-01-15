import React from 'react';
import { ArrowRight } from 'lucide-react';
// 1. Import the real photo
import heroImage from '../../assets/Alex_Pic_2.jpeg';

const Hero = ({ text }) => {
  if (!text) return null;

  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-2xl opacity-70 transform translate-x-4 translate-y-4"></div>
            
            {/* 2. Use the imported variable here */}
            <img 
              src={heroImage} 
              alt={text.title} /* Pro tip: Use dynamic alt text for SEO */
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl z-10"
            />
          </div>
        </div>

        {/* Text Side (No changes needed here) */}
        <div className="w-full md:w-1/2 md:order-1 text-center md:text-start">
           {/* ... existing text code ... */}
           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
             {text.title} <br className="hidden md:block" />
             <span className="text-blue-600">{text.subtitle}</span>
           </h1>
           {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default Hero;