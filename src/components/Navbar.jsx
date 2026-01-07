import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Github, Gitlab, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('about.title'), href: '#about' },
    { name: t('skills.title'), href: '#skills' },
    { name: t('experience.title'), href: '#experience' },
    { name: t('projects.title'), href: '#projects' },
    { name: t('contact.title'), href: '#contact' },
  ];

  return (
    <>
      <div className="bg-primary text-white py-1 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex space-x-4 space-x-reverse items-center">
               <span className="text-secondary font-light tracking-wider text-xs uppercase">Full Stack Developer</span>
            </div>
            <div className="flex items-center space-x-4">
                 <a href="https://github.com/Aya1Khlif" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                     <Github className="w-5 h-5" />
                 </a>
                 <a href="https://gitlab.com/ayakhlife222" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors ml-4">
                     <Gitlab className="w-5 h-5" />
                 </a>
            </div>
        </div>
      </div>
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-pink-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary italic tracking-tight">Aya Khlif</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors border border-transparent hover:border-pink-100 bg-pink-50/0 hover:bg-pink-50"
              >
                <Globe className="w-4 h-4 mx-1" />
                {i18n.language === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-pink-50 focus:outline-none transition-all"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Drawer - Moved outside <nav> to avoid clipping */}
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] md:hidden"
          />
          
          {/* Drawer Menu (LTR) */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-xs bg-white z-[110] md:hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-pink-50 to-white">
              <span className="text-xl font-bold text-primary">Aya Khlif</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl text-gray-700 hover:text-primary hover:bg-pink-50 transition-all font-medium text-lg group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`} />
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <button
                  onClick={() => { toggleLanguage(); setIsOpen(false); }}
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-gray-50 text-gray-700 hover:bg-pink-50 hover:text-primary transition-all font-medium"
                >
                  <span className="flex items-center">
                    <Globe className="w-5 h-5 mr-3 ml-3" />
                    {i18n.language === 'ar' ? 'English' : 'العربية'}
                  </span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-center space-x-6">
              <a href="https://github.com/Aya1Khlif" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-sm text-gray-600 hover:text-primary transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://gitlab.com/ayakhlife222" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-sm text-gray-600 hover:text-orange-600 transition-all ml-4">
                <Gitlab className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
