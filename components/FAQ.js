'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSiteLanguage from '@/hooks/useSiteLanguage';
import { t } from '@/lib/i18n';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const lang = useSiteLanguage();

  const faqs = [
    {
      question: t(lang, 'faqHome.items.0.question'),
      answer: t(lang, 'faqHome.items.0.answer')
    },
    {
      question: t(lang, 'faqHome.items.1.question'),
      answer: t(lang, 'faqHome.items.1.answer')
    },
    {
      question: t(lang, 'faqHome.items.2.question'),
      answer: t(lang, 'faqHome.items.2.answer')
    },
    {
      question: t(lang, 'faqHome.items.3.question'),
      answer: t(lang, 'faqHome.items.3.answer')
    },
    {
      question: t(lang, 'faqHome.items.4.question'),
      answer: t(lang, 'faqHome.items.4.answer')
    },
    {
      question: t(lang, 'faqHome.items.5.question'),
      answer: t(lang, 'faqHome.items.5.answer')
    },
    {
      question: t(lang, 'faqHome.items.6.question'),
      answer: t(lang, 'faqHome.items.6.answer')
    },
    {
      question: t(lang, 'faqHome.items.7.question'),
      answer: t(lang, 'faqHome.items.7.answer')
    },
    {
      question: t(lang, 'faqHome.items.8.question'),
      answer: t(lang, 'faqHome.items.8.answer')
    },
    {
      question: t(lang, 'faqHome.items.9.question'),
      answer: t(lang, 'faqHome.items.9.answer')
    },
    {
      question: t(lang, 'faqHome.items.10.question'),
      answer: t(lang, 'faqHome.items.10.answer')
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ background: '#FAF7F2', padding: '0px 0 100px' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">{t(lang, 'faqHome.label')}</p>
          <div className="gold-divider mb-5"></div>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, color: '#2C2520' }}
          >
            {t(lang, 'faqHome.title')}
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
          >
            {t(lang, 'faqHome.subtitle')}
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border-none overflow-hidden"
              style={{ 
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                border: openIndex === index ? '2px solid #C9A870' : '2px solid transparent'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                style={{ background: openIndex === index ? 'rgba(201, 168, 112, 0.05)' : 'white' }}
              >
                <span
                  className="text-lg font-semibold pr-4"
                  style={{ 
                    fontFamily: 'Lato, sans-serif', 
                    color: openIndex === index ? '#C9A870' : '#2C2520'
                  }}
                >
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 flex-shrink-0"
                  style={{ color: openIndex === index ? '#C9A870' : '#6B5E52' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p
                        className="leading-relaxed"
                        style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52', fontSize: '0.95rem' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
