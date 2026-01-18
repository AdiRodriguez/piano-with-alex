import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import Reviews from './components/sections/Reviews';
import Gallery from './components/sections/Gallery';


import { content } from './data/content';

function App() {
  // 1. State for Language (Default to Hebrew 'he')
  const [lang, setLang] = useState('he');
  
  // 2. Get the specific text for the current language
  const text = content[lang];

  // 3. Effect to handle RTL/LTR direction of the HTML tag
  useEffect(() => {
    document.documentElement.dir = text.dir;
    document.documentElement.lang = lang;
  }, [lang, text.dir]);

  return (

    <div className="bg-white min-h-screen font-sans relative transition-all duration-300">
      
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        text={text.nav} 
        whatsappLink={text.contact.whatsapp_link}
      />
      
      <main>
        <Hero text={text.hero} /> 
        <About text={text.about} />  
        <Reviews text={text.reviews} />  
        <Services 
        text={text.pricing}
        whatsappLink={text.contact.whatsapp_link}
         /> 
        <Gallery text={text.gallery} /> 
           
      </main>

      <Footer text={text.contact} />      
      
      <WhatsAppFloat whatsappLink={text.contact.whatsapp_link} />
    </div>
  );
}

export default App;