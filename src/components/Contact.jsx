import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    const SERVICE_ID = 'service_3vankzr';
    const TEMPLATE_ID = 'template_kj6tk6k';
    const PUBLIC_KEY = '2tVvYiFQrGsHNrF1Y';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
      }, (error) => {
          setStatus('error');
          console.error('Email failed:', error.text);
      })
      .finally(() => {
          setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
            </h2>
            <p className="text-gray-600">{t('contact.subtitle')}</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('contact.email')}</h3>
                <a href="mailto:ayatkhlif999@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                  ayatkhlif999@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('contact.phone')}</h3>
                <a href="tel:+963930256230" className="text-gray-600 hover:text-primary transition-colors" dir="ltr">
                  +963 930 256 230
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('contact.location')}</h3>
                <p className="text-gray-600">{t('contact.address')}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl shadow-lg p-8"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                ></textarea>
              </div>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Your message has been sent successfully!</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>Failed to send the message. Please try again.</span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSending}
                className="w-full bg-primary text-white py-3 rounded-lg font-medium shadow-md hover:bg-pink-600 transition-colors flex items-center justify-center disabled:opacity-70"
              >
                {isSending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {t('contact.send')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
