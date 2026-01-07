import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    { 
        company: t('experience.companies.extend_it.name'), 
        role: t('experience.companies.extend_it.role'), 
        desc: t('experience.companies.extend_it.desc'),
        period: '2023 - Present' 
    },
    { 
        company: t('experience.companies.master_coder.name'), 
        role: t('experience.companies.master_coder.role'), 
        desc: t('experience.companies.master_coder.desc'),
        period: '2022 - 2023' 
    },
    { 
        company: t('experience.companies.maitech.name'), 
        role: t('experience.companies.maitech.role'), 
        desc: t('experience.companies.maitech.desc'),
        period: '2021 - 2022' 
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('experience.title')}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/20 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-8"
            >
              <div className="absolute left-[-9px] rtl:right-[-9px] rtl:left-auto top-0 w-4 h-4 bg-primary rounded-full ring-4 ring-white"></div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 text-primary mr-2 rtl:ml-2 rtl:mr-0" />
                    <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                  </div>
                  <span className="text-sm text-gray-500 font-medium mt-2 sm:mt-0 bg-gray-100 px-3 py-1 rounded-full w-fit">{exp.period}</span>
                </div>
                <h4 className="text-lg text-primary font-semibold mb-2">{exp.role}</h4>
                <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
