import React from 'react';
import { Star } from 'lucide-react';

const Reviews = ({ text }) => {
  if (!text) return null;

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Colors */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{text.title}</h2>
          <div className="flex items-center justify-center gap-2">
            {/* The Google 'G' Logo (CSS only) */}
            <span className="font-bold text-xl">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </span>
            <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">
              {text.subtitle}
            </span>
            {/* 5 Stars for the overall rating */}
            <div className="flex ml-2">
               {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
               ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {text.items.map((review, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Quote Icon Decoration */}
              <div className="absolute top-4 right-4 text-blue-100 text-6xl font-serif leading-none opacity-50">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 relative z-10 leading-relaxed">
                {review.text}
              </p>

              {/* Reviewer Name */}
              <div className="flex items-center gap-3">
                {/* Random colored avatar circle */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'
                }`}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;