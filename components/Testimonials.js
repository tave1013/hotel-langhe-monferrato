'use client';

import { useState } from 'react';

const testimonials = [
  {
    text: "Una delle esperienze più belle della nostra vita. La camera con vista sui vigneti al tramonto è qualcosa che non dimenticheremo mai. Il ristorante poi è un'altra storia: il risotto al Barolo era di un'altra dimensione.",
    name: 'Marco & Laura',
    origin: 'Milano',
    rating: 5,
    platform: 'TripAdvisor',
    date: 'Ottobre 2024',
  },
  {
    text: "Siamo venuti per il nostro anniversario e l'hotel ha curato ogni minimo dettaglio. Dalla bottiglia di Barbaresco in camera all'arrivederci con i nostri dolci preferiti. Torneremo sicuramente, è il posto perfetto per staccare.",
    name: 'Alessia T.',
    origin: 'Torino',
    rating: 5,
    platform: 'Google',
    date: 'Settembre 2024',
  },
  {
    text: 'La spa è semplicemente paradisiaca. Ho fatto il percorso benessere di tre ore e sono uscita completamente rigenerata. Lo staff è attento, discreto e professionale. Un hotel che capisce davvero il concetto di lusso.',
    name: 'Francesca M.',
    origin: 'Roma',
    rating: 5,
    platform: 'Booking.com',
    date: 'Agosto 2024',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section style={{ background: '#1A1714', padding: '100px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Image + Stats */}
          <div>
            <p className="section-label mb-3">Recensioni Verificate</p>
            <div className="gold-divider-left mb-6"></div>
            <h2 className="section-title-light mb-6" style={{ maxWidth: 420 }}>
              I Nostri Ospiti Parlano di Noi
            </h2>
            <p
              style={{
                fontFamily: 'Lato',
                fontSize: '0.88rem',
                color: 'rgba(245,239,228,0.55)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              Le recensioni dei nostri ospiti sono il nostro vanto più grande. Ecco cosa dicono coloro che hanno scelto Hotel Langhe & Monferrato.
            </p>

            {/* Platform stats */}
            <div className="flex gap-8">
              {[
                { val: '4.9/5', label: 'TripAdvisor', icon: 'fa-star' },
                { val: '9.4/10', label: 'Booking.com', icon: 'fa-bed' },
                { val: '4.8/5', label: 'Google', icon: 'fa-google' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <i className={`fa ${s.icon}`} style={{ color: '#C9A870', fontSize: '0.85rem' }}></i>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#FAF7F2', fontWeight: 600 }}>{s.val}</span>
                  </div>
                  <div style={{ fontFamily: 'Lato', fontSize: '0.62rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Testimonial */}
          <div>
            <div
              style={{
                background: '#231F1A',
                padding: '2.5rem',
                borderTop: '2px solid #C9A870',
                position: 'relative',
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  position: 'absolute',
                  top: -16,
                  left: '2.5rem',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '5rem',
                  color: '#C9A870',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                "
              </div>

              <div className="stars mb-4" style={{ fontSize: '0.85rem', color: '#C9A870' }}>
                {'★'.repeat(t.rating)}
              </div>

              <p
                key={active}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.1rem',
                  color: 'rgba(245,239,228,0.85)',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  marginBottom: '1.8rem',
                  animation: 'fadeIn 0.5s ease forwards',
                }}
              >
                {t.text}
              </p>

              <div className="flex justify-between items-end">
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#FAF7F2', fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontFamily: 'Lato', fontSize: '0.7rem', color: '#C9A870', letterSpacing: '0.08em', marginTop: 3 }}>{t.origin} · {t.platform}</div>
                </div>
                <span style={{ fontFamily: 'Lato', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>{t.date}</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? 32 : 8,
                    height: 2,
                    background: i === active ? '#C9A870' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
