'use client';

import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

const deals = [
  {
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop',
    badge: 'Relax & Scoperta',
    title: 'Alla Scoperta del Monferrato',
    desc: '3 notti in camera comfort, colazione inclusa, tour delle colline UNESCO con guida privata e accesso alla spa per un relax totale.',
    price: '520',
    oldPrice: '650',
    badge2: 'Relax',
    href: '/offerte/monferrato-relax',
    persone: 2,
    notti: 3,
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop',
    badge: 'Colazione Inclusa',
    title: 'Weekend Gastronomico',
    desc: 'Immergiti nella cucina piemontese: 2 notti con colazione, cena nel ristorante gourmet e tour privato in cantina con il nostro sommelier.',
    price: '420',
    oldPrice: '540',
    badge2: 'Gourmet',
    href: '/offerte/weekend-gastronomico',
    persone: 2,
    notti: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1506361797048-46a149213205?w=800&q=80&fit=crop',
    badge: 'Pacchetto Completo',
    title: 'Scopri le Langhe in 3 Notti',
    desc: 'Il pacchetto completo: 3 notti in camera superior, colazione, wine tour UNESCO, degustazione e un pomeriggio di truffle hunting.',
    price: '860',
    oldPrice: '1050',
    badge2: 'Avventura',
    href: '/offerte/scopri-langhe',
    persone: 2,
    notti: 3,
  },
];

export default function Deals() {
  return (
    <section style={{ background: '#F5EFE4', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation type="slide-up">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Offerte Esclusive</p>
            <div className="gold-divider mb-5"></div>
            <h2 className="section-title mb-4">Proposte Pensate per Te</h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.1rem',
                color: '#6B5E52',
                maxWidth: 500,
                margin: '0 auto',
                fontStyle: 'italic',
              }}
            >
              Esperienze su misura per ogni tipo di ospite. Prenota in anticipo e risparmia fino al 20%.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <ScrollAnimation key={deal.title} type="slide-up" delay={i * 150}>
              <div
                className="card-hover"
                style={{ background: '#fff', overflow: 'hidden' }}
              >
                {/* Image */}
                <div className="relative" style={{ height: 220, overflow: 'hidden' }}>
                  <Image
                    src={deal.img}
                    alt={deal.title}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                <div className="deal-badge">{deal.badge}</div>
                {/* Category tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'rgba(10,8,6,0.75)',
                    padding: '0.28rem 0.7rem',
                    fontFamily: 'Lato',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.7)',
                    textTransform: 'uppercase',
                  }}
                >
                  {deal.badge2}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Info persone e notti */}
                <div className="flex items-center gap-4 mb-3">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <i className="fa fa-users" style={{ color: '#C9A870', fontSize: '0.85rem' }}></i>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#6B5E52', fontWeight: 600 }}>
                      {deal.persone}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <i className="fa fa-calendar-alt" style={{ color: '#C9A870', fontSize: '0.85rem' }}></i>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#6B5E52', fontWeight: 600 }}>
                      {deal.notti} {deal.notti === 1 ? 'notte' : 'notti'}
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.4rem',
                    color: '#2C2520',
                    marginBottom: '0.6rem',
                    fontWeight: 500,
                  }}
                >
                  {deal.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Lato',
                    fontSize: '0.95rem',
                    color: '#6B5E52',
                    lineHeight: 1.75,
                    marginBottom: '1.4rem',
                  }}
                >
                  {deal.desc}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span
                      style={{
                        fontFamily: 'Lato',
                        fontSize: '0.68rem',
                        color: '#9A8A7A',
                        textDecoration: 'line-through',
                        marginRight: 6,
                      }}
                    >
                      €{deal.oldPrice}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.5rem',
                        color: '#C9A870',
                        fontWeight: 600,
                      }}
                    >
                      €{deal.price}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'Lato', fontSize: '0.65rem', color: '#9A8A7A' }}>per pacchetto</span>
                </div>

                <Link href={deal.href} className="btn-gold w-full text-center block">
                  <span>Prenota Questa Offerta</span>
                </Link>
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/offerte" className="btn-outline-gold">
            Vedi Tutte le Offerte
          </Link>
        </div>
      </div>
    </section>
  );
}
