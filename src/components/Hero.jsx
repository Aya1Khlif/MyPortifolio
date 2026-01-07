import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Floating animation for skill cards
  const floatingVariant = {
    animate: (i) => ({
      y: [0, -15, 0],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-20">
      
      {/* Abstract Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-yellow-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/70 backdrop-blur-sm border border-pink-100 shadow-sm">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 font-semibold text-sm tracking-widest uppercase">
                    {t('hero.subtitle').split('|')[0] || "Full Stack Developer"}
                </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.greeting') || (isRTL ? "مرحباً، أنا" : "Hello, I'm")} <br />
              <span className="text-primary relative inline-block">
                {t('hero.title')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary z-[-1]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.49993 148.796 -4.50005 197.994 3.00002" stroke="currentColor" strokeWidth="3"></path></svg>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {t('hero.description')}
            </motion.p>

            <motion.div variants={itemVariants} className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <a 
                href="#projects"
                className="group relative px-8 py-3.5 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-pink-600 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {t('hero.cta')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
                </span>
              </a>
              <a 
                href="#contact"
                className="px-8 py-3.5 bg-white text-gray-800 border border-gray-200 rounded-full font-medium shadow-sm hover:shadow-md hover:border-primary/30 hover:bg-pink-50/50 transition-all flex items-center justify-center"
              >
                {t('contact.title')}
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className={`mt-12 flex items-center gap-8 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'} grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500`}>
                {/* Tech Stack Logos (Placeholders or Icons) */}
                <div className="flex flex-col items-center gap-1 group">
                    <div className="p-3 bg-blue-50 rounded-xl group-hover:scale-110 transition-transform">
                         <Code className="w-6 h-6 text-blue-500"/>
                    </div>
                    <span className="text-xs font-medium">React</span>
                </div>
                <div className="flex flex-col items-center gap-1 group">
                    <div className="p-3 bg-green-50 rounded-xl group-hover:scale-110 transition-transform">
                         <Database className="w-6 h-6 text-green-500"/>
                    </div>
                    <span className="text-xs font-medium">Node</span>
                </div>
                 <div className="flex flex-col items-center gap-1 group">
                    <div className="p-3 bg-purple-50 rounded-xl group-hover:scale-110 transition-transform">
                         <Layout className="w-6 h-6 text-purple-500"/>
                    </div>
                    <span className="text-xs font-medium">Design</span>
                </div>
            </motion.div>

          </motion.div>

          {/* Graphical/Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-square">
                {/* Floating Glass Cards */}
                <motion.div 
                    custom={0}
                    variants={floatingVariant}
                    animate="animate"
                    className="absolute top-0 right-10 z-20 bg-white/40 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/60 w-48 hidden md:block"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-3/4 bg-gray-200/50 rounded"></div>
                        <div className="h-2 w-1/2 bg-gray-200/50 rounded"></div>
                    </div>
                </motion.div>

                 <motion.div 
                    custom={1}
                    variants={floatingVariant}
                    animate="animate"
                    className="absolute bottom-10 -left-4 z-20 bg-white/40 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/60 flex items-center gap-3 pr-8 hidden md:flex"
                >
                    <div className="bg-primary/20 p-2 rounded-lg">
                        <HeartIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-500">Experience</div>
                        <div className="font-bold text-gray-800">3+ Years</div>
                    </div>
                </motion.div>

                {/* Main Profile Image Circle */}
                <div className="absolute inset-4 bg-gradient-to-tr from-pink-100 to-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white/50 flex items-center justify-center">
                    {/* Placeholder for Profile Image */}
                    <div className="text-center p-8">
                         <span className="text-8xl block mb-4">👩‍💻</span>
                         <div className="w-32 h-2 bg-gray-100 rounded-full mx-auto mb-2"></div>
                         <div className="w-20 h-2 bg-gray-100 rounded-full mx-auto"></div>
                    </div>
                     {/* 
                     Tip for user: Replace the content of this div with:
                     <img src="/path-to-your-image.jpg" alt="Aya Khlif" className="w-full h-full object-cover" />
                     */}
                </div>
                
                {/* Decorative Rings */}
                <div className="absolute -inset-4 border border-dashed border-gray-300 rounded-[2.5rem] -z-10 animate-spin-slow"></div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};
const HeartIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
)

export default Hero;
