'use client';

import ScrollAnimation from './ScrollAnimation';
import useSiteLanguage from '@/hooks/useSiteLanguage';
import { t } from '@/lib/i18n';

export default function Amenities() {
  const lang = useSiteLanguage();

  const amenities = [
    { icon: 'fa-wifi', label: t(lang, 'amenities.items.0.label'), desc: t(lang, 'amenities.items.0.desc') },
    { icon: 'fa-parking', label: t(lang, 'amenities.items.1.label'), desc: t(lang, 'amenities.items.1.desc') },
    { icon: 'fa-utensils', label: t(lang, 'amenities.items.2.label'), desc: t(lang, 'amenities.items.2.desc') },
    { icon: 'fa-gift', label: t(lang, 'amenities.items.3.label'), desc: t(lang, 'amenities.items.3.desc') },
    { icon: 'fa-briefcase', label: t(lang, 'amenities.items.4.label'), desc: t(lang, 'amenities.items.4.desc') },
    { icon: 'fa-swimming-pool', label: t(lang, 'amenities.items.5.label'), desc: t(lang, 'amenities.items.5.desc') },
  ];

  return (
    <section style={{ background: '#fff', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation type="slide-up">
          <div className="text-center mb-14">
            <p className="section-label mb-3">{t(lang, 'amenities.label')}</p>
            <div className="gold-divider mb-5"></div>
            <h2 className="section-title mb-4">{t(lang, 'amenities.title')}</h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {amenities.map((a, i) => (
            <ScrollAnimation key={a.label} type="slide-up" delay={i * 100}>
              <div className="flex items-start gap-4">
              <div style={{ flexShrink: 0, width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={`fa ${a.icon}`} style={{ fontSize: '1.8rem', color: '#C9A870' }}></i>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.28rem', fontWeight: 500, color: '#2C2520', marginBottom: '0.5rem' }}>
                  {a.label}
                </h3>
                <p style={{ fontFamily: 'Lato', fontSize: '1rem', color: '#6B5E52', lineHeight: 1.7 }}>
                  {a.desc}
                </p>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
