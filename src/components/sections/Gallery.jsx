import React from 'react';
import { motion } from 'framer-motion';
import pic1 from '../../assets/Alex_Gallary_1.jpg'
import pic2 from '../../assets/Alex_Gallary_2.jpg'
import pic3 from '../../assets/Alex_Gallary_3.jpg'
import pic4 from '../../assets/Alex_Gallary_4.jpg'
import pic5 from '../../assets/Alex_Gallary_5.jpg'
import pic6 from '../../assets/Alex_Gallary_6.jpg'
import pic7 from '../../assets/Alex_Gallary_7.jpg'
import pic8 from '../../assets/Alex_Gallary_8.jpg'
import pic9 from '../../assets/Alex_Gallary_9.jpg'
import pic10 from '../../assets/Alex_Gallary_10.jpg'
import pic11 from '../../assets/Alex_Gallary_11.jpg'
import pic12 from '../../assets/Alex_Gallary_12.jpg'
import pic13 from '../../assets/Alex_Gallary_13.jpg'
import pic14 from '../../assets/Alex_Gallary_14.jpg'
import pic15 from '../../assets/Alex_Gallary_15.jpg'

// Temporary Placeholders - Replace these imports with your real assets later!
// import img1 from '../../assets/img1.jpg';
const images = [pic1, pic2, pic3, pic4, pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic12,pic13,pic14,pic15];

const Gallery = ({ text }) => {
  if (!text) return null;

  return (
    <section id="gallery" className="py-16 bg-white overflow-hidden" dir="ltr">
      
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-bold text-gray-900">{text.title}</h2>
        <p className="text-gray-500 mt-2">{text.subtitle}</p>
      </div>

      {/* The Moving Marquee */}
      <div className="relative w-full">
        {/* Gradients to fade edges (Optional style touch) */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

{/* The Track */}
        <div className="flex">
          <motion.div
            className="flex gap-4 min-w-max" 
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 120, /* Slower speed since the strip is longer now */
            }}
          >
            {/* DUPLICATE 4 TIMES to ensure infinite loop on wide screens */}
            {[...images, ...images, ...images, ...images].map((src, index) => (
              <div 
                key={index} 
                className="w-64 h-48 md:w-80 md:h-60 flex-shrink-0 rounded-xl overflow-hidden shadow-md"
              >
                <img 
                  src={src} 
                  alt="Piano Lesson Moment" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Gallery;