import React from 'react';
import { Star, ExternalLink } from 'lucide-react'; // Added ExternalLink icon

const Reviews = ({ text }) => {
  if (!text) return null;

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header... (No changes here) */}
        <div className="text-center mb-12">
          {/* ... existing header code ... */}
           <h2 className="text-3xl font-bold text-gray-900 mb-2">{text.title}</h2>
           {/* ... etc ... */}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12"> {/* Added mb-12 for spacing */}
          {text.items.map((review, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* ... existing review card code ... */}
               <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 relative z-10 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
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

        {/* NEW: The "See All" Button */}
        <div className="text-center">
          <a 
            href="https://maps.app.goo.gl/zxyLuzJYiN8YAyvr6" // <--- PASTE HIS GOOGLE MAPS LINK HERE
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors border border-blue-100 hover:border-blue-300 px-6 py-3 rounded-full bg-blue-50"
          >
            {text.link_text}
            <ExternalLink size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;