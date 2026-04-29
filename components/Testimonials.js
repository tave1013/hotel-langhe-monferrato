'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const testimonials = [
  {
    text: "La Struttura vanta camere spaziose, moderne, pulite e con ampi terrazzi che affacciano sul suggestivo Parco della Contessa. E' presente un grande parcheggio gratuito. La colazione è molto abbondante, varia e ricca di prodotti del territorio. Staff gentilissimo e disponibile.",
    name: 'Alice B.',
    origin: 'Milano',
    rating: 5,
    platform: 'Google',
  },
  {
    text: "Un bellissimo albergo ubicato in un posto un pochino isolato, ma vicinissimo al centro. Adatto a chi vuole passare una vacanza di completo relax e silenzio, visitando le splendide cantine della zona. Colazione molto varia, camere grandi, pulite e piene di comfort. In ultimo ma da non sottovalutare, il personale simpatico e professionale, i prezzi sono bassi per i servizi offerti.",
    name: 'Antonio B.',
    origin: 'Torino',
    rating: 5,
    platform: 'Google',
  },
  {
    text: 'Ottima struttura davvero! Personale gentile e disponibile. Camere pulite ed ambiente accogliente. Anche il contesto esterno merita e vale la pena esplorarlo con lunghe passeggiate. Ci siamo trovati tutti benissimo. Consigliatissimo!',
    name: 'Andrea T.',
    origin: 'Roma',
    rating: 5,
    platform: 'Booking.com',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const t = testimonials[active];

  const goNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const deltaX = endX - touchStartX.current;
    const deltaY = endY - touchStartY.current;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) goNext();
      else goPrev();
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section style={{ background: '#1A1714', padding: '100px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Image + Stats */}
          <ScrollAnimation type="slide-up">
            <div>
              <p className="section-label mb-3">Recensioni Verificate</p>
              <div className="gold-divider-left mb-6"></div>
              <h2 className="section-title-light mb-6" style={{ maxWidth: 420 }}>
                I Nostri Ospiti Parlano di Noi
              </h2>
            <p
              style={{
                fontFamily: 'Lato',
                fontSize: '0.98rem',
                color: 'rgba(245,239,228,0.55)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              Cerchiamo sempre di fare meglio per rendere ogni soggiorno speciale. Ecco cosa dicono alcuni dei nostri ospiti.
            </p>

            {/* Platform stats */}
            <div className="flex gap-8">
              {[
                { val: '8.2/10', label: 'Booking.com', icon: 'fa-bed' },
                { val: '4/5', label: 'Google', icon: 'fa-star' },
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
          </ScrollAnimation>

          {/* RIGHT: Testimonial */}
          <ScrollAnimation type="slide-up" delay={200}>
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{
                background: '#231F1A',
                padding: '2.5rem',
                borderTop: '2px solid #C9A870',
                position: 'relative',
                touchAction: 'pan-y',
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
                  fontSize: '1.22rem',
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
                  <div style={{ fontFamily: 'Lato', fontSize: '0.7rem', color: '#C9A870', letterSpacing: '0.08em', marginTop: 3 }}>{t.platform}</div>
                </div>
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
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
