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
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80&fit=crop"
                alt="Hotel Langhe & Monferrato vista esterna"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden" style={{ height: 200 }}>
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80&fit=crop"
                alt="Camera lusso Hotel Langhe"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden" style={{ height: 200 }}>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop"
                alt="Ristorante gourmet Langhe"
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
              Un Hotel di Lusso nel Cuore delle Langhe
            </h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.15rem',
                color: '#4A3D33',
                lineHeight: 1.8,
                fontStyle: 'italic',
                marginBottom: '1.2rem',
              }}
            >
              "Nelle Langhe, ogni tramonto è un dipinto. Ogni pasto è un ricordo. Ogni notte è un sogno."
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
              Hotel Langhe & Monferrato nasce dal desiderio di offrire molto più di un soggiorno. È un viaggio sensoriale tra i vigneti patrimonio dell'UNESCO, la gastronomia piemontese d'eccellenza e un'ospitalità che cura ogni dettaglio.
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
              Che tu cerchi una fuga romantica, una celebrazione speciale o semplicemente il piacere del relax assoluto, qui trovi tutto ciò che il tuo spirito desidera.
            </p>

            {/* MICRO STATS */}
            <div className="flex gap-8 mb-8">
              {[
                { val: '4.9/5', src: 'TripAdvisor' },
                { val: '5.4K', src: 'Recensioni' },
                { val: '4.8/5', src: 'Google' },
              ].map((s) => (
                <div key={s.src}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#C9A870', fontWeight: 600 }}>{s.val}</div>
                  <div style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', color: '#9A8A7A', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.src}</div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-gold">
              <span>La Nostra Storia</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
