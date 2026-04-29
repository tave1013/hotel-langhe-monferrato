'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#0F0D0B', color: 'rgba(255,255,255,0.55)' }}>
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/foto/logo_hotel_langhe_monferrato_asti_2026.webp"
                alt="Hotel Langhe & Monferrato"
                width={160}
                height={70}
                style={{ height: 'auto', width: 'auto', maxHeight: 70, marginBottom: '1rem' }}
              />
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
                { label: 'Prenota', href: '/prenota', external: false },
                { label: 'Camere e Suite', href: '/camere', external: false },
                { label: 'Sale Meeting', href: '/sale-meeting', external: false },
                { label: 'Offerte', href: '/offerte', external: false },
                { label: 'Dove siamo', href: 'https://www.google.com/maps/place/Albergo+Langhe+e+Monferrato/@44.7923618,8.1750117,17z/data=!3m1!4b1!4m9!3m8!1s0x47878ca2d313df7d:0xb73fca66300f6dd0!5m2!4m1!1i2!8m2!3d44.7923618!4d8.1775866!16s%2Fg%2F1vs1qrqf?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D', external: true },
              ].map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Lato', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} style={{ fontFamily: 'Lato', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      {item.label}
                    </Link>
                  )}
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
                { label: 'I Castelli del Monferrato', href: '/territorio/castelli-del-monferrato' },
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
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <i className="fa fa-map-marker-alt" style={{ color: '#C9A870', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}></i>
                <a href="https://www.google.com/maps/place/Albergo+Langhe+e+Monferrato/@44.7923618,8.1750117,17z/data=!3m1!4b1!4m9!3m8!1s0x47878ca2d313df7d:0xb73fca66300f6dd0!5m2!4m1!1i2!8m2!3d44.7923618!4d8.1775866!16s%2Fg%2F1vs1qrqf?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Lato', fontSize: '0.8rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  Via Contessa di Castiglione, 1 - 14055 Costigliole d'Asti (AT) - Italy
                </a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <i className="fa fa-phone" style={{ color: '#C9A870', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}></i>
                <a href="tel:+390141961853" style={{ fontFamily: 'Lato', fontSize: '0.8rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  +39 0141 961853
                </a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <i className="fa fa-envelope" style={{ color: '#C9A870', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}></i>
                <a href="mailto:info@hotellanghemonferrato.it" style={{ fontFamily: 'Lato', fontSize: '0.8rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  info@hotellanghemonferrato.it
                </a>
              </li>
              {[
                { icon: 'fa-clock', text: 'Check-in 15:00-22:30 · Check-out 07:00-11:00' },
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
          <div style={{ fontFamily: 'Lato', fontSize: '0.72rem', textAlign: 'center' }}>
            <div>© {new Date().getFullYear()} Hotel Langhe & Monferrato. Tutti i diritti riservati.</div>
            <div style={{ marginTop: '0.3rem', color: 'rgba(255,255,255,0.4)' }}>P.Iva 00981490055 - CIR 005050-ALB-00001</div>
          </div>
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
