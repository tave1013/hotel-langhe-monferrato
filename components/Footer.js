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
              Un rifugio di lusso immerso nei vigneti patrimonio UNESCO delle Langhe piemontesi.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'fa-instagram', href: '#' },
                { icon: 'fa-facebook-f', href: '#' },
                { icon: 'fa-tripadvisor', href: '#' },
                { icon: 'fa-pinterest-p', href: '#' },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  style={{
                    width: 34, height: 34,
                    border: '1px solid rgba(201,168,112,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A870'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#C9A870'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(201,168,112,0.25)'; }}
                >
                  <i className={`fab ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* LINKS 1 */}
          <div>
            <h4 style={{ fontFamily: 'Lato', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A870', marginBottom: '1.2rem' }}>L'Hotel</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {['La Nostra Storia', 'Camere & Suite', 'Spa & Benessere', 'Ristorante', 'Offerte Speciali'].map((item) => (
                <li key={item}>
                  <Link href="#" style={{ fontFamily: 'Lato', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LINKS 2 */}
          <div>
            <h4 style={{ fontFamily: 'Lato', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A870', marginBottom: '1.2rem' }}>Esplora Langhe</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {['Wine Tour & Degustazioni', 'Truffle Hunting', 'Gite ad Alba', 'Barolo & Barbaresco', 'Esperienze Naturalistiche'].map((item) => (
                <li key={item}>
                  <Link href="#" style={{ fontFamily: 'Lato', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {item}
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
                { icon: 'fa-map-marker-alt', text: 'Via Langhe 1, 12051 Alba (CN)' },
                { icon: 'fa-phone', text: '+39 0173 000 000' },
                { icon: 'fa-envelope', text: 'info@hotellanghemonferrato.it' },
                { icon: 'fa-clock', text: 'Check-in 15:00 · Check-out 11:00' },
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
