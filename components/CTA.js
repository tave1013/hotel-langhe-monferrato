'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="relative overflow-hidden" style={{ padding: '120px 0' }}>
      {/* BG */}
      <div className="absolute inset-0">
        <Image
          src="/foto/hotel-langhe-monferrato.jpg"
          alt="Hotel Langhe & Monferrato"
          fill
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(10,8,6,0.78)' }}
        />
        {/* Decorative grain */}
        <div className="absolute inset-0" style={{ opacity: 0.03, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="section-label mb-4">Pronto per la Tua Fuga?</p>

        {/* Decorative line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
          <span style={{ width: 60, height: 1, background: 'rgba(201,168,112,0.5)', display: 'inline-block' }}></span>
          <i className="fa fa-gem" style={{ color: '#C9A870', fontSize: '0.8rem' }}></i>
          <span style={{ width: 60, height: 1, background: 'rgba(201,168,112,0.5)', display: 'inline-block' }}></span>
        </div>

        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 400,
            color: '#FAF7F2',
            lineHeight: 1.2,
            marginBottom: '1.2rem',
          }}
        >
          Sei Pronto a Vivere le Langhe<br />
          <em style={{ color: '#C9A870' }}>come Non le Hai Mai Vissute?</em>
        </h2>

        <p
          style={{
            fontFamily: 'Lato',
            fontSize: '0.95rem',
            color: '#FAF7F2',
            maxWidth: 600,
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}
        >
          Ogni soggiorno è un'occasione irripetibile. Prenota ora, scegli le date che preferisci e lascia che ci prendiamo cura di ogni dettaglio per te. Le migliori tariffe sono disponibili solo sul nostro sito ufficiale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/prenota" className="btn-gold" style={{ fontSize: '0.78rem', padding: '1.1rem 2.8rem' }}>
            <span>Prenota Direttamente. Miglior Prezzo</span>
          </Link>
          <Link href="/contatti" className="btn-outline-white" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Contattaci
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: 'fa-shield-alt', text: 'Cancellazione Gratuita' },
            { icon: 'fa-tag', text: 'Miglior Prezzo Garantito' },
          ].map((t) => (
            <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <i className={`fa ${t.icon}`} style={{ color: '#C9A870', fontSize: '0.75rem' }}></i>
              <span style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
