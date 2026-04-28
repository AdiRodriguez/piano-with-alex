import React from 'react';

const Videos = ({ text }) => {
  if (!text || !text.items) return null;

  return (
    <section id="videos" className="py-20 bg-gray-50 px-4 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{text.title}</h2>
          <p className="text-gray-600 text-lg">{text.subtitle}</p>
        </div>

        {/* 1. THE MOST IMPORTANT VIDEO (Piano) - Full Width */}
        <div className="mb-12">
          <div className="relative pt-[56.25%] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 bg-black">
            <iframe 
              src={`https://www.youtube.com/embed/${text.items[0].id}?rel=0`}
              title={text.items[0].title}
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="text-center mt-4 text-xl font-bold text-gray-900">
            {text.items[0].title}
          </h3>
        </div>

        {/* 2. THE OTHER TWO VIDEOS (Keyboard & Flute) - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8">
          {text.items.slice(1).map((video, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative pt-[56.25%] w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-center mt-4 text-lg font-bold text-gray-700">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Videos;