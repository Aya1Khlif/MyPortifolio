import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import PaymentIntegrations from './components/PaymentIntegrations';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <PaymentIntegrations />
          <Approach />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
