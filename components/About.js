'use client';

import Link from 'next/link';

export default function About() {
  return (
    <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE GRID */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden" style={{ height: 280 }}>
              <img
                src="/foto/hotel-langhe-monferrato.jpg"
                alt="Hotel Langhe & Monferrato vista esterna"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden" style={{ height: 200 }}>
              <img
                src="/foto/ingresso.webp"
                alt="Ingresso Hotel Langhe & Monferrato"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden" style={{ height: 200 }}>
              <img
                src="/foto/Camera-tripla.webp"
                alt="Camera tripla Hotel Langhe & Monferrato"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* FLOATING STATS */}
            <div
              style={{
                position: 'absolute',
                bottom: -20,
                right: -20,
                background: '#1A1714',
                padding: '1.4rem 1.8rem',
                zIndex: 10,
              }}
            >
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', color: '#C9A870', fontWeight: 600, lineHeight: 1 }}>98%</div>
              <div style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.68rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>
                Ospiti Soddisfatti
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <p className="section-label mb-3">Benvenuti</p>
            <div className="gold-divider-left mb-6"></div>
            <h2
              className="section-title mb-6"
              style={{ maxWidth: 480 }}
            >
              Hotel Langhe & Monferrato
            </h2>
            <p
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '1rem',
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
                fontSize: '0.9rem',
                color: '#6B5E52',
                lineHeight: 1.85,
                marginBottom: '1rem',
              }}
            >
              L’Hotel Langhe & Monferrato, immerso nel verde del Parco della Contessa a Costigliole d’Asti, è un’oasi di tranquillità e benessere nel cuore del Piemonte. La posizione strategica, a soli 15 km da Alba, Asti e Canelli, lo rende perfetto per scoprire le colline UNESCO tra Langhe e Monferrato.
            </p>
            <p
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.9rem',
                color: '#6B5E52',
                lineHeight: 1.85,
                marginBottom: '2rem',
              }}
            >
              In una zona Patrimonio dell’Umanità UNESCO, ricca di tradizioni, eventi culturali e itinerari enogastronomici, l’hotel offre 58 camere spaziose: Standard, Triple, Quadruple, Family Room e Suite. Ogni ambiente è pensato per garantire il massimo comfort a coppie, famiglie e viaggiatori alla ricerca di relax, natura e autenticità.
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
              <span>Prenota la Tua Esperienza</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
