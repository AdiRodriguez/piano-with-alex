import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

// 1. We added 'whatsappLink' here so we can use it
const Navbar = ({ lang, setLang, text, whatsappLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleLanguage = (newLang) => {
    setLang(newLang);
    setIsLangMenuOpen(false); // Close menu after selection
  };

  const menuItems = [
    { name: text.home, href: '#home' },
    { name: text.lessons, href: '#lessons' },
    { name: text.about, href: '#about' },
    { name: text.gallery, href: '#gallery' },
    { name: text.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-blue-600">{text.logo}</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition duration-300"
              >
                {item.name}
              </a>
            ))}

            {/* Language Switcher (Desktop) */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
              >
                <Globe size={20} />
                <span className="uppercase font-bold text-sm">{lang}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-8 right-0 bg-white shadow-xl rounded-lg border border-gray-100 py-2 w-32 flex flex-col">
                  <button onClick={() => toggleLanguage('he')} className="px-4 py-2 hover:bg-blue-50 text-right">🇮🇱 עברית</button>
                  <button onClick={() => toggleLanguage('en')} className="px-4 py-2 hover:bg-blue-50 text-left">🇬🇧 English</button>
                  <button onClick={() => toggleLanguage('ru')} className="px-4 py-2 hover:bg-blue-50 text-left">🇷🇺 Русский</button>
                </div>
              )}
            </div>

            {/* CTA Button - NOW A WHATSAPP LINK */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              {text.book}
            </a>
          </div>

          {/* Mobile Controls (Hamburger + Lang) */}
          <div className="md:hidden flex items-center gap-4">
             {/* Mobile Language Toggle (Cycle through) */}
             <button 
                onClick={() => {
                  if (lang === 'he') setLang('en');
                  else if (lang === 'en') setLang('ru');
                  else setLang('he');
                }}
                className="flex items-center gap-1 text-gray-600 border border-gray-200 rounded-lg px-2 py-1"
              >
                <Globe size={16} />
                <span className="uppercase text-xs font-bold">{lang}</span>
              </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;