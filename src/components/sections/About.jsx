import React from 'react';
import { CheckCircle2 } from 'lucide-react'; 
import aboutImage from '../../assets/Alex_Pic_1.jpeg';

const About = ({ text }) => {
  if (!text) return null;

  return (
    <section id="about" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          {/* 1. Image Side */}
          
          <div className="w-full md:w-1/2 relative md:sticky md:top-24 mb-12 md:mb-0"> 
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute top-4 left-4 w-full h-full border-4 border-blue-100 rounded-2xl -z-10"></div>
              
              {/* Image */}
              <img 
                src={aboutImage}
                alt="Alexander Minulin" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="font-bold text-3xl">{text.badge_years}</p>
                <p className="text-sm opacity-90">{text.badge_text}</p>
              </div>
            </div>
          </div>

          {/* 2. Text Side */}
          <div className="w-full md:w-1/2 text-start">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {text.title}
            </h2>
            
            {/* Paragraphs */}
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p className="font-medium text-gray-900">{text.p1}</p>
              <p>{text.p2}</p>
              <p>{text.p3}</p>
            </div>

            {/* Skills Grid */}
            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">{text.skills_title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {text.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xl font-bold text-blue-600 italic">
              {text.closing}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;