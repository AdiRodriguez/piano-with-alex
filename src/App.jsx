import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import Reviews from './components/sections/Reviews';
import Gallery from './components/sections/Gallery';

// Import the text data
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
    // We pass the 'lang' and 'text' props down to components that need them
    <div className="bg-white min-h-screen font-sans relative transition-all duration-300">
      
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        text={text.nav} 
      />
      
      <main>
        {/* We pass specific sections of text to each component */}
        <Hero text={text.hero} />  
        <Reviews text={text.reviews} />  
        <About text={text.about} />    
        <Services text={text.pricing} /> 
        <Gallery text={text.gallery} /> 
           
      </main>

      <Footer text={text.contact} />      
      
      <WhatsAppFloat />
    </div>
  );
}

export default App;