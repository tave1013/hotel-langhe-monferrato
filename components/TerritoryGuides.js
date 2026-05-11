'use client';

import Link from 'next/link';
import Image from 'next/image';
import { guide } from '@/lib/territorioData';
import { guideEn } from '@/lib/territorioDataEn';
import { guideFr } from '@/lib/territorioDataFr';
import { guideDe } from '@/lib/territorioDataDe';
import { guideEs } from '@/lib/territorioDataEs';
import ScrollAnimation from './ScrollAnimation';
import useSiteLanguage from '@/hooks/useSiteLanguage';
import { t } from '@/lib/i18n';

export default function TerritoryGuides() {
  const lang = useSiteLanguage();
  const isEn = lang === 'en';
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isEs = lang === 'es';
  const guides = isEs ? guideEs : isDe ? guideDe : isFr ? guideFr : isEn ? guideEn : guide;

  // Prendi solo le prime 3 guide
  const topGuides = guides.slice(0, 3);

  // Funzione per troncare il testo
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <section style={{ background: '#F5EFE4', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation type="slide-up">
          <div className="text-center mb-14">
            <p className="section-label mb-3">{t(lang, 'guidesHome.label')}</p>
            <div className="gold-divider mb-5"></div>
            <h2 className="section-title mb-4">{t(lang, 'guidesHome.title')}</h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.1rem',
                color: '#6B5E52',
                maxWidth: 560,
                margin: '0 auto',
                fontStyle: 'italic',
              }}
            >
              {t(lang, 'guidesHome.subtitle')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {topGuides.map((item, i) => (
            <ScrollAnimation key={item.slug} type="slide-up" delay={i * 150}>
              <div
                className="card-hover"
                style={{ background: '#fff', overflow: 'hidden' }}
              >
                {/* Image */}
                <div className="relative" style={{ height: 220, overflow: 'hidden' }}>
                  <Image
                    src={item.img}
                    alt={item.nome}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                <div className="deal-badge">{item.distanzaDallHotel}</div>
                {/* Category tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'rgba(10,8,6,0.75)',
                    padding: '0.28rem 0.7rem',
                    fontFamily: 'Lato',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: '#FAF7F2',
                    textTransform: 'uppercase',
                  }}
                  className="md:text-[0.6rem]"
                >
                  {item.categoria}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.4rem',
                    color: '#2C2520',
                    marginBottom: '0.6rem',
                    fontWeight: 500,
                  }}
                >
                  {item.nome}
                </h3>
                <p
                  style={{
                    fontFamily: 'Lato',
                    fontSize: '1rem',
                    color: '#6B5E52',
                    lineHeight: 1.75,
                    marginBottom: '1.4rem',
                    minHeight: '88px',
                  }}
                >
                  {truncateText(item.descrizioneBreve, 140)}
                </p>

                {/* Info */}
                <div className="flex items-center justify-between mb-4">
                  <div style={{ fontFamily: 'Lato', fontSize: '0.8rem', color: '#9A8A7A' }}>
                    <i className="fa fa-clock" style={{ marginRight: 6, color: '#C9A870' }}></i>
                    {item.tempoVisita}
                  </div>
                  <div style={{ fontFamily: 'Lato', fontSize: '0.8rem', color: '#9A8A7A' }}>
                    <i className={`fa ${item.categoryIcon}`} style={{ marginRight: 6, color: '#C9A870' }}></i>
                    {item.categoria}
                  </div>
                </div>

                <Link href={`/territorio/${item.slug}`} className="btn-gold w-full text-center block">
                  <span>{t(lang, 'guidesHome.discoverGuide')}</span>
                </Link>
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Link to full guides */}
        <div className="text-center mt-10">
          <Link href="/territorio" className="btn-outline-gold">
            {t(lang, 'guidesHome.seeAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
