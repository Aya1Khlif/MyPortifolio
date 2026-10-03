import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages } from 'lucide-react';

const Education = () => {
  const { t } = useTranslation();

  const cards = [
    {
      id: 'degree',
      title: t('education.degree_title'),
      icon: <GraduationCap className="w-6 h-6" />,
      items: [t('education.degree')]
    },
    {
      id: 'certs',
      title: t('education.certs_title'),
      icon: <Award className="w-6 h-6" />,
      items: [
        'Full Stack Development - Focal X',
        'Front-end ReactJS - Focal X',
        'Back-end Laravel - VECA',
        "Master's Certificate in Laravel Framework - Coursera",
        'Certificate of Appreciation in Front-end Development - Maad Solutions'
      ]
    },
    {
      id: 'languages',
      title: t('education.languages_title'),
      icon: <Languages className="w-6 h-6" />,
      items: [t('education.arabic'), t('education.english')]
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('education.title')}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-secondary/30 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4 rtl:mr-4 rtl:ml-0">{card.title}</h3>
              </div>
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
