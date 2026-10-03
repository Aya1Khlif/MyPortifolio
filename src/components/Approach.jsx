import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';

const Approach = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('approach.title')}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('approach.desc')}
            </p>
            
            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4 rtl:ml-4 rtl:mr-0">
                        <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-1">{t('approach.strategic_title')}</h3>
                        <p className="text-gray-400 text-sm">{t('approach.strategic_desc')}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4 rtl:ml-4 rtl:mr-0">
                        <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-1">{t('approach.scalability_title')}</h3>
                        <p className="text-gray-400 text-sm">{t('approach.scalability_desc')}</p>
                    </div>
                </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <div className="text-center">
                <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    100%
                </span>
                <p className="text-xl font-medium mt-2">{t('approach.quality')}</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl text-center">
                    <span className="block text-2xl font-bold text-white">5+</span>
                    <span className="text-sm text-gray-400">{t('approach.years')}</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl text-center">
                    <span className="block text-2xl font-bold text-white">10+</span>
                    <span className="text-sm text-gray-400">{t('approach.projects')}</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
