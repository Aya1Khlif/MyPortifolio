import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Building2, Banknote, Bell, MessageSquare, Globe, Zap } from 'lucide-react';

const PaymentIntegrations = () => {
  const { t } = useTranslation();

  const gateways = [
    { name: t('payments.albaraka'), icon: <Building2 className="w-8 h-8" /> },
    { name: t('payments.mtn'), icon: <Globe className="w-8 h-8" /> },
    { name: t('payments.zatca'), icon: <ShieldCheck className="w-8 h-8" /> },
    { name: t('payments.payletter'), icon: <CreditCard className="w-8 h-8" /> },
    { name: t('payments.skipcash'), icon: <Banknote className="w-8 h-8" /> },
    { name: t('payments.firebase'), icon: <Bell className="w-8 h-8" /> },
    { name: t('payments.rasa'), icon: <MessageSquare className="w-8 h-8" /> },
    { name: t('payments.websockets'), icon: <Zap className="w-8 h-8" /> },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('payments.title')}</h2>
          <p className="text-gray-500">{t('payments.description')}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {gateways.map((gateway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-secondary/20 transition-colors cursor-default"
            >
              <div className="text-primary mb-3">
                {gateway.icon}
              </div>
              <span className="font-semibold text-gray-700">{gateway.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentIntegrations;
