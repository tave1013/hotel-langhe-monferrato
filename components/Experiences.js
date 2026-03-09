'use client';

import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

const experiences = [
  {
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop',
    label: 'Spa & Benessere',
    title: 'Ritrovati. Rinnovati.',
    desc: 'Un oasi di pace dedicata al benessere del corpo e della mente. Massaggi, rituali con oli essenziali delle colline e bagni curativi nell\'acqua termale.',
    href: '/esplora/spa',
    cta: 'Prenota il Tuo Rituale',
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop',
    label: 'Ristorante Gourmet',
    title: 'La Cucina delle Langhe.',
    desc: 'Il nostro chef celebra il territorio con ingredienti del km zero e ricette reinterpretate con creatività. Abbinamenti con i grandi Barolo e Barbaresco locali.',
    href: '/esplora/ristorante',
    cta: 'Prenota un Tavolo',
  },
  {
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop',
    label: 'Wine Tour & Degustazioni',
    title: 'Il Vino è Cultura.',
    desc: 'Escursioni private nelle più celebrate cantine delle Langhe, degustazioni guidate di Barolo, Barbaresco e Moscato d\'Asti con i nostri esperti sommelier.',
    href: '/esplora/wine',
    cta: 'Scopri i Tour',
  },
];

export default function Experiences() {
  return (
    <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation type="slide-up">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Esperienze Esclusive</p>
            <div className="gold-divider mb-5"></div>
            <h2 className="section-title mb-4">Vivi il Meglio delle Langhe</h2>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.1rem',
              color: '#6B5E52',
              maxWidth: 540,
              margin: '0 auto',
              fontStyle: 'italic',
            }}
          >
            Non solo un hotel. Un punto di partenza per scoprire tutto ciò che questo territorio straordinario ha da offrire.
          </p>
        </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <ScrollAnimation key={exp.title} type="slide-up" delay={i * 150}>
              <div className="card-hover group" style={{ background: '#fff', overflow: 'hidden' }}>
              {/* Image */}
              <div className="img-overlay" style={{ height: 280 }}>
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                />
                {/* Label */}
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    zIndex: 10,
                    background: 'rgba(201,168,112,0.9)',
                    padding: '0.3rem 0.8rem',
                    fontFamily: 'Lato',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#fff',
                  }}
                >
                  {exp.label}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    color: '#2C2520',
                    marginBottom: '0.7rem',
                    fontWeight: 500,
                  }}
                >
                  {exp.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Lato',
                    fontSize: '0.98rem',
                    color: '#6B5E52',
                    lineHeight: 1.75,
                    marginBottom: '1.4rem',
                  }}
                >
                  {exp.desc}
                </p>
                <Link
                  href={exp.href}
                  style={{
                    fontFamily: 'Lato',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#C9A870',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '14px')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
                >
                  {exp.cta}
                  <i className="fa fa-arrow-right" style={{ fontSize: '0.65rem' }}></i>
                </Link>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
