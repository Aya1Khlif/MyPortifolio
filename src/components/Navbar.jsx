import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Github, Gitlab } from 'lucide-react';
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
            <span className="text-2xl font-bold text-primary">Aya Khlif</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Globe className="w-4 h-4 mx-1" />
                {i18n.language === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center w-full text-left text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
              >
                <Globe className="w-4 h-4 mx-1" />
                {i18n.language === 'ar' ? 'English' : 'العربية'}
              </button>
               <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-100 mt-2">
                 <a href="https://github.com/Aya1Khlif" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                     <Github className="w-5 h-5" />
                     <span className="ml-2 text-sm">GitHub</span>
                 </a>
                 <a href="https://gitlab.com/ayakhlife222" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary transition-colors ml-4">
                     <Gitlab className="w-5 h-5" />
                     <span className="ml-2 text-sm">GitLab</span>
                 </a>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
};

export default Navbar;
