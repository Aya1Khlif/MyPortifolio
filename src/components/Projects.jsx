import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.extend_platform'),
      description: t('projects.extend_desc'),
      tags: ['Laravel', 'Facebook Graph API', 'Automation'],
      icon: '🚀'
    },
    {
      title: t('projects.motobox'),
      description: t('projects.motobox_desc'),
      tags: ['React Native', 'Laravel', 'WebSockets', 'Firebase'],
      icon: '📦'
    },
    {
      title: t('projects.circuit_store'),
      description: t('projects.circuit_desc'),
      tags: ['E-commerce', 'ERP Integration', 'Qatar Market'],
      icon: '🛍️'
    },
    {
      title: t('projects.tourism'),
      description: t('projects.tourism_desc'),
      tags: ['Booking Engine', 'Tourism', 'Dashboard'],
      icon: '🏨'
    },
    {
      title: t('projects.real_estate'),
      description: t('projects.real_estate_desc'),
      tags: ['Property Mgmt', 'Sales', 'Admin Portal'],
      icon: '🏠'
    },
    {
      title: t('projects.sports_club'),
      description: t('projects.sports_club_desc'),
      tags: ['Python', 'Flask', 'Rasa AI', 'Bot'],
      icon: '🤖'
    },
    {
      title: t('projects.admin_system'),
      description: t('projects.admin_system_desc'),
      tags: ['Internal Tool', 'Task Mgmt', 'Efficiency'],
      icon: '📊'
    },
    {
      title: t('projects.printing'),
      description: t('projects.printing_desc'),
      tags: ['Branding', 'Portfolio', 'cPanel'],
      icon: '🎨'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="h-32 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center border-b border-gray-100">
                <span className="text-5xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed h-24 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-secondary/20 text-primary rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
