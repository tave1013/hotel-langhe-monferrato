'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0F0D0B', color: 'rgba(255,255,255,0.55)' }}>
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#FAF7F2', display: 'block' }}>Hotel Langhe</span>
              <span style={{ fontFamily: 'Lato', fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A870' }}>& Monferrato</span>
            </div>
            <p style={{ fontFamily: 'Lato', fontSize: '0.82rem', lineHeight: 1.8, marginBottom: '1.4rem', maxWidth: 240 }}>
              L'hotel Langhe&Monferrato, immerso nella natura del Parco della Contessa a Costigliole d'Asti, un'oasi di tranquillità e relax.
            </p>
          </div>

          {/* LINKS 1 */}
          <div>
            <h4 style={{ fontFamily: 'Lato', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A870', marginBottom: '1.2rem' }}>L'Hotel</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { label: 'Prenota', href: '/prenota' },
                { label: 'Camere e Suite', href: '/camere' },
                { label: 'Sale Meeting', href: '/sale-meeting' },
                { label: 'Offerte', href: '/offerte' },
                { label: 'Dove siamo', href: '/contatti' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ fontFamily: 'Lato', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LINKS 2 */}
          <div>
            <h4 style={{ fontFamily: 'Lato', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A870', marginBottom: '1.2rem' }}>Esplora il territorio</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { label: 'Asti - Il Medioevo', href: '/territorio/asti' },
                { label: 'Alba - Capitale del Gusto', href: '/territorio/alba' },
                { label: 'Cattedrali Sotterranee', href: '/territorio/cattedrali-sotterranee' },
                { label: 'I Castelli del Monferrato', href: '/territorio/castelli-monferrato' },
                { label: 'Le Big Bench', href: '/territorio/big-bench' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ fontFamily: 'Lato', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 style={{ fontFamily: 'Lato', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A870', marginBottom: '1.2rem' }}>Contatti</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { icon: 'fa-map-marker-alt', text: 'Via Contessa di Castiglione, 1 - 14055 Costigliole d\'Asti (AT) - Italy' },
                { icon: 'fa-phone', text: '+39 0141 961853' },
                { icon: 'fa-envelope', text: 'info@hotellanghemonferrato.it' },
                { icon: 'fa-clock', text: 'Check-in 14:00-22:30 · Check-out 07:00-11:00' },
              ].map((c) => (
                <li key={c.icon} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <i className={`fa ${c.icon}`} style={{ color: '#C9A870', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}></i>
                  <span style={{ fontFamily: 'Lato', fontSize: '0.8rem', lineHeight: 1.5 }}>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.2rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span style={{ fontFamily: 'Lato', fontSize: '0.72rem' }}>
            © {new Date().getFullYear()} Hotel Langhe & Monferrato. Tutti i diritti riservati.
          </span>
          <div className="flex gap-5">
            {['Privacy Policy', 'Cookie Policy', 'Termini e Condizioni'].map((item) => (
              <Link key={item} href="#" style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
