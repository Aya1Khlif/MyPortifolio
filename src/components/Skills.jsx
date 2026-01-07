import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, Database, Layers, Terminal, Bot } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    { 
      id: 'languages',
      title: t('skills.languages'), 
      icon: <Code2 className="w-6 h-6" />,
      items: ['PHP', 'JavaScript', 'Python', 'C#'] 
    },
    { 
      id: 'frontend',
      title: t('skills.frontend'), 
      icon: <Layers className="w-6 h-6" />,
      items: ['React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'Framer Motion'] 
    },
    { 
      id: 'backend',
      title: t('skills.backend'), 
      icon: <Server className="w-6 h-6" />,
      items: ['Laravel', 'CodeIgniter', 'Django', 'REST APIs'] 
    },
    { 
      id: 'mobile',
      title: t('skills.mobile'), 
      icon: <Smartphone className="w-6 h-6" />,
      items: ['React Native'] 
    },
     { 
      id: 'ai',
      title: t('skills.ai'), 
      icon: <Bot className="w-6 h-6" />,
      items: ['Rasa', 'Flask API', 'AI Chatbots'] 
    },
    { 
      id: 'databases',
      title: t('skills.databases'), 
      icon: <Database className="w-6 h-6" />,
      items: ['Firebase', 'WebSockets', 'MySQL', 'PostgreSQL', 'Facebook Graph API'] 
    },
    { 
      id: 'devops',
      title: t('skills.devops'), 
      icon: <Terminal className="w-6 h-6" />,
      items: ['Linux CLI', 'VPS (Hostinger)', 'Sahara Server', 'cPanel'] 
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('skills.title')}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-secondary/30 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4 rtl:mr-4 rtl:ml-0">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 text-gray-700 border border-gray-200 rounded-md text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
