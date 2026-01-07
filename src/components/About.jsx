import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
            {t('about.title')}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
