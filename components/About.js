'use client';

import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';
import useSiteLanguage from '@/hooks/useSiteLanguage';
import { t } from '@/lib/i18n';

export default function About() {
  const lang = useSiteLanguage();

  return (
    <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE GRID */}
          <ScrollAnimation type="slide-up">
            <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden" style={{ height: 280 }}>
              <Image
                src="/foto/hotel-langhe-monferrato.jpg"
                alt="Hotel Langhe & Monferrato vista esterna"
                width={800}
                height={280}
                quality={85}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden" style={{ height: 200 }}>
              <Image
                src="/foto/ingresso.webp"
                alt="Ingresso Hotel Langhe & Monferrato"
                width={400}
                height={200}
                quality={70}
                priority
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden" style={{ height: 200 }}>
              <Image
                src="/foto/Camera-tripla.webp"
                alt="Camera tripla Hotel Langhe & Monferrato"
                width={400}
                height={200}
                quality={80}
                priority
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>


            </div>
          </ScrollAnimation>

          {/* TEXT */}
          <ScrollAnimation type="slide-up" delay={200}>
            <div>
            <p className="section-label mb-3">{t(lang, 'about.label')}</p>
            <div className="gold-divider-left mb-6"></div>
            <h2
              className="section-title mb-6"
              style={{ maxWidth: 480 }}
            >
              {t(lang, 'about.title')}
            </h2>
            <p
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '1.1rem',
                color: '#4A3D33',
                lineHeight: 1.8,
                fontWeight: 700,
                marginBottom: '1.2rem',
              }}
            >
              {t(lang, 'about.subtitle')}
            </p>
            <p
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '1rem',
                color: '#6B5E52',
                lineHeight: 1.85,
                marginBottom: '1rem',
              }}
            >
              {t(lang, 'about.p1')}
            </p>
            <p
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '1rem',
                color: '#6B5E52',
                lineHeight: 1.85,
                marginBottom: '2rem',
              }}
            >
              {t(lang, 'about.p2')}
            </p>

            {/* MICRO STATS */}
            <div className="flex gap-8 mb-8">
              {[
                { val: '8.2/10', src: 'Booking.com' },
                { val: '4/5', src: 'Google', icon: 'fa-star' },
                { val: '+600', src: t(lang, 'about.reviews') },
              ].map((s) => (
                <div key={s.src}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {s.icon && <i className={`fa ${s.icon}`} style={{ color: '#C9A870', fontSize: '0.8rem' }}></i>}
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#C9A870', fontWeight: 600 }}>{s.val}</div>
                  </div>
                  <div style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', color: '#9A8A7A', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.src}</div>
                </div>
              ))}
            </div>

            <Link href="/prenota" className="btn-gold">
              <span>{t(lang, 'about.bookCta')}</span>
            </Link>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
