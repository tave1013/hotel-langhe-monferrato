'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

const slides = [
  {
    img: '/foto/hotel-langhe-monferrato.jpg',
    label: 'Un\'Oasi di Relax nelle Langhe',
    title: 'Soggiorna all\'Hotel\nLanghe & Monferrato',
    sub: 'Nel verde del Parco della Contessa a Costigliole d\'Asti, a pochi chilometri dalle eccellenze UNESCO delle Langhe e del Monferrato.',
    showStars: true,
  },
  {
    img: '/foto/piscina_oasi_blu_costigliole_asti.webp',
    label: 'Piscina Immersa nella Natura',
    title: 'La Piscina Immersa\nnella Natura',
    sub: 'Lasciati avvolgere dal silenzio e dalla natura del Parco della Contessa. La nostra piscina aperta nel periodo estivo è il posto perfetto per rilassarti e rigenerarti.',
    showStars: false,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (current >= slides.length) {
      setCurrent(0);
    }
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 9000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current] || slides[0];

  return (
    <section className="relative min-h-[110vh] md:min-h-[680px] overflow-hidden" aria-label="Hero">
      {/* BG IMAGE */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: animating ? 0 : 1 }}
      >
        <div className="absolute inset-0 md:animate-ken-burns hero-bg-image">
          <Image
            key={slide.img}
            src={slide.img}
            alt={slide.label}
            fill
            priority={current === 0}
            quality={90}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 22%' }}
          />
        </div>
        {/* Layered overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,8,6,0.82) 0%, rgba(10,8,6,0.60) 60%, rgba(10,8,6,0.75) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.90) 0%, transparent 50%)' }} />
      </div>

      {/* CONTENT */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 pt-20">
        <div
          key={current}
          style={{ animation: 'fadeUp 0.9s ease forwards' }}
        >
          {/* Eyebrow */}
          <ScrollAnimation type="slide-up" duration="slow">
            <div className={`${slide.showStars ? 'hidden' : 'hidden md:flex'} items-center justify-center gap-4 mb-5 mt-[5px] md:mt-0`}>
              <span style={{ width: 40, height: 1, background: '#C9A870', display: 'inline-block' }}></span>
              <span className="section-label">{slide.label}</span>
              <span style={{ width: 40, height: 1, background: '#C9A870', display: 'inline-block' }}></span>
            </div>
          </ScrollAnimation>

          {/* Stars */}
          {slide.showStars && (
            <ScrollAnimation type="slide-up" duration="slow" delay={100}>
              <div className="stars mb-4 text-center mt-14 md:mt-6">★★★★</div>
            </ScrollAnimation>
          )}

          {/* H1 */}
          <ScrollAnimation type="slide-up" duration="slow" delay={200}>
            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                fontWeight: 400,
                color: '#FAF7F2',
                lineHeight: 1.15,
                marginBottom: '1.4rem',
                whiteSpace: 'pre-line',
                letterSpacing: '-0.01em',
                maxWidth: '800px',
              }}
            >
              {slide.title}
            </h1>
          </ScrollAnimation>

          {/* Subtitle */}
          <ScrollAnimation type="slide-up" duration="slow" delay={300}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                color: '#fff',
                maxWidth: '560px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
              }}
            >
              {slide.sub}
            </p>
          </ScrollAnimation>

          {/* CTA Buttons */}
          <ScrollAnimation type="slide-up" duration="slow" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-0">
              <Link href="/prenota" className="btn-gold">
                <span>Prenota il Tuo Soggiorno</span>
              </Link>
              <Link href="/camere" className="btn-outline-white">
                Scopri le Camere
              </Link>
            </div>
          </ScrollAnimation>

          {/* MOBILE ARROWS */}
          <div className="md:hidden flex items-center justify-between w-full max-w-md mx-auto px-2" style={{ marginTop: 60, marginBottom: 10 }}>
            {[{ dir: -1, icon: 'fa-chevron-left' }, { dir: 1, icon: 'fa-chevron-right' }].map(({ dir, icon }) => (
              <button
                key={dir}
                onClick={() => goTo((current + slides.length + dir) % slides.length)}
                style={{
                  width: 44,
                  height: 44,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  transition: 'all 0.2s',
                }}
              >
                <i className={`fa ${icon}`}></i>
              </button>
            ))}
          </div>

          <div className="md:hidden flex justify-center gap-3 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 32 : 8,
                  height: 2,
                  background: i === current ? '#C9A870' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* REVIEW BADGE */}
        <div
          className="mb-32 md:mb-20"
          style={{
            marginTop: '5.5rem',
            display: 'flex',
            gap: '2.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { val: '8.2/10', label: 'Su Booking.com', icon: 'fa-bed' },
            { val: '4/5', label: 'Google Review', icon: 'fa-star' },
            { val: '+600', label: 'Recensioni Verificate', icon: 'fa-heart' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <i className={`fa ${item.icon}`} style={{ color: '#C9A870', fontSize: '1rem' }}></i>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#FAF7F2', fontWeight: 600 }}>{item.val}</div>
                <div style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 32 : 8,
              height: 2,
              background: i === current ? '#C9A870' : 'rgba(255,255,255,0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>

      {/* PREV / NEXT */}
      {[{ dir: -1, icon: 'fa-chevron-left', side: 'left-6' }, { dir: 1, icon: 'fa-chevron-right', side: 'right-6' }].map(({ dir, icon, side }) => (
        <button
          key={dir}
          onClick={() => goTo((current + slides.length + dir) % slides.length)}
          className={`absolute top-1/2 -translate-y-1/2 ${side} z-10 hidden md:flex`}
          style={{
            width: 44, height: 44,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A870'; e.currentTarget.style.borderColor = '#C9A870'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
        >
          <i className={`fa ${icon}`}></i>
        </button>
      ))}

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-2 z-10">
        <span style={{ fontFamily: 'Lato', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', writingMode: 'vertical-lr' }}>Scorri</span>
        <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, rgba(201,168,112,0.8), transparent)' }}></div>
      </div>
    </section>
  );
}
