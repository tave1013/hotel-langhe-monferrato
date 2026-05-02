'use client';

import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function About() {
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
            <p className="section-label mb-3">Benvenuti</p>
            <div className="gold-divider-left mb-6"></div>
            <h2
              className="section-title mb-6"
              style={{ maxWidth: 480 }}
            >
              Un'Oasi di Relax nel Cuore del Piemonte
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
              Il luogo ideale dove soggiornare nelle Langhe e nel Monferrato
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
              L'Hotel Langhe & Monferrato, immerso nel verde del Parco della Contessa a Costigliole d'Asti, è un'oasi di tranquillità e benessere nel cuore del Piemonte. La posizione strategica, a soli 15 km da Alba, Asti e Canelli, lo rende perfetto per scoprire le colline UNESCO tra Langhe e Monferrato.
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
              In una zona Patrimonio dell’Umanità UNESCO, ricca di tradizioni, eventi culturali e itinerari enogastronomici, l’hotel offre 58 camere spaziose: Singole, Matrimoniali, Triple, Quadruple e Suite. Ogni ambiente è pensato per garantire il massimo comfort a coppie, famiglie e viaggiatori alla ricerca di relax, natura e autenticità.
            </p>

            {/* MICRO STATS */}
            <div className="flex gap-8 mb-8">
              {[
                { val: '8.2/10', src: 'Booking.com' },
                { val: '4/5', src: 'Google', icon: 'fa-star' },
                { val: '+600', src: 'Recensioni' },
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
              <span>Prenota il Tuo Soggiorno</span>
            </Link>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
