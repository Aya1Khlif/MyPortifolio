import React from 'react';
import { Github, Gitlab } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Aya Khlif. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6 rtl:space-x-reverse">
            <a 
              href="https://github.com/Aya1Khlif" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://gitlab.com/ayakhlife222" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitLab"
            >
              <Gitlab className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
