import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpg'; 
import alexHeroImg from '../../assets/Alex_Pic_2.jpeg'; 

const Hero = ({ text }) => {
  if (!text) return null;

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* --- LAYER 1: BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Piano Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay so we can read text and see Alex clearly */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* --- LAYER 2: CONTENT (Text + Alex) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* LEFT SIDE: TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-start text-white">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg">
              {text.title}
              <span className="block text-blue-400 mt-2">{text.subtitle}</span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-200 mb-10 drop-shadow-md leading-relaxed">
              {text.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                {text.cta_primary}
                <ArrowRight size={20} />
              </a>
              
              <a 
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <Play size={20} className="fill-current" />
                {text.cta_secondary}
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: ALEX IMAGE*/}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              
              {/* The Blue Glow Effect */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-40 transform translate-x-4 translate-y-4 animate-pulse"></div>
              
              {/* The Image Itself */}
              <img 
                src={alexHeroImg}
                alt="Alex Piano"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;