import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = ({ text }) => {
  if (!text) return null;

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="text-start">
          <h2 className="text-3xl font-bold mb-6">{text.title}</h2>
          <p className="text-gray-400 mb-8 max-w-sm">
            {text.desc}
          </p>
          
          <div className="space-y-4">
            {/* Phone (LTR always for numbers) */}
            <a href="tel:+972546320495" className="flex items-center gap-4 text-xl hover:text-blue-400 transition-colors" dir="ltr">
              <div className="bg-gray-800 p-3 rounded-full">
                <Phone size={24} />
              </div>
              <span>054-632-0495</span>
            </a>

            {/* Email (LTR always) */}
            <a href="mailto:al.mnln@gmail.com" className="flex items-center gap-4 text-xl hover:text-blue-400 transition-colors" dir="ltr">
              <div className="bg-gray-800 p-3 rounded-full">
                <Mail size={24} />
              </div>
              <span>al.mnln@gmail.com</span>
            </a>

            {/* Address (Follows page direction) */}
            <div className="flex items-center gap-4 text-xl">
              <div className="bg-gray-800 p-3 rounded-full shrink-0">
                <MapPin size={24} />
              </div>
              <span>{text.address}</span>
            </div>
          </div>
        </div>

        {/* Map / Socials */}
        <div className="flex flex-col h-full">
          <div className="bg-gray-800 w-full h-64 rounded-2xl mb-6 overflow-hidden relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.836754060854!2d34.876543!3d32.096543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d367468641775%3A0x6700874609805045!2sDegel%20Re'uven%20St%2062%2C%20Petah%20Tikva!5e0!3m2!1sen!2sil!4v1642250000000!5m2!1sen!2sil" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen="" 
               loading="lazy"
               className="opacity-80 hover:opacity-100 transition-opacity"
             ></iframe>
          </div>
          
          {/* Social Icons */}
          <div className="mt-auto flex gap-4 justify-start">
             {/* Facebook */}
             <a 
               href="https://www.facebook.com/Alexander.Minulin/?locale=he_IL" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
               aria-label="Facebook"
             >
               <Facebook />
             </a>

             {/* Instagram */}
             <a 
               href="https://www.instagram.com/alexander_piano_teacher/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-3 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors"
               aria-label="Instagram"
             >
               <Instagram />
             </a>
          </div>
        </div>
      </div> 

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Música with Alex. {text.rights}
      </div>
    </footer>
  );
};

export default Footer;