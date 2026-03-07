'use client';

import Link from 'next/link';

export default function VideoBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: 500 }}
    >
      {/* BG IMAGE (replace with <video> tag if you have a video file) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1800&q=80&fit=crop"
          alt="Piscina panoramica Hotel Langhe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,8,6,0.85) 40%, rgba(10,8,6,0.45))' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* TEXT */}
        <div style={{ maxWidth: 600 }}>
          <p className="section-label mb-4">Scopri l'Hotel</p>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#FAF7F2',
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: '1.2rem',
            }}
          >
            Vivi l'Esperienza<br />
            <em style={{ color: '#C9A870' }}>Langhe & Monferrato</em>
          </h2>
          <p
            style={{
              fontFamily: 'Lato',
              fontSize: '0.92rem',
              color: 'rgba(245,239,228,0.75)',
              lineHeight: 1.8,
              marginBottom: '2rem',
              maxWidth: 480,
            }}
          >
            Dalla colazione con i prodotti del territorio alla degustazione serale dei grandi vini piemontesi — ogni momento qui è un ricordo da portare con sé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/prenota" className="btn-gold">
              <span>Prenota il Tuo Soggiorno</span>
            </Link>
            <Link href="/esplora" className="btn-outline-white">
              Esplora i Servizi
            </Link>
          </div>
        </div>

        {/* PLAY BUTTON + KEY NUMBERS */}
        <div className="flex flex-col items-center gap-8">
          {/* Play Button */}
          <button
            style={{
              width: 80,
              height: 80,
              border: '2px solid #C9A870',
              borderRadius: '50%',
              background: 'rgba(201,168,112,0.15)',
              color: '#C9A870',
              fontSize: '1.4rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              paddingLeft: '4px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A870'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(201,168,112,0.15)'; e.currentTarget.style.color = '#C9A870'; }}
            aria-label="Guarda il video"
          >
            <i className="fa fa-play"></i>
          </button>
          <span style={{ fontFamily: 'Lato', fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Guarda il Video</span>

          {/* Key Numbers */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { val: '15+', label: 'Anni di Eccellenza' },
              { val: '5★', label: 'Stelle di Lusso' },
              { val: '32', label: 'Camere Esclusive' },
              { val: '100%', label: 'Prodotti Locali' },
            ].map((n) => (
              <div key={n.label} className="text-center">
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#C9A870', fontWeight: 600 }}>{n.val}</div>
                <div style={{ fontFamily: 'Lato', fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
