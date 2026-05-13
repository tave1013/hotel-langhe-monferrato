'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { privacyT } from '@/lib/privacyTranslations';

const H2 = ({ children }) => (
  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: '#960018', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 500 }}>
    {children}
  </h3>
);

const thStyle = { padding: '0.8rem', textAlign: 'left', borderBottom: '2px solid #C9A870', fontWeight: 600 };
const tdStyle = { padding: '0.8rem' };
const trStyle = { borderBottom: '1px solid #ddd' };

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useState('it');

  useEffect(() => {
    const checkLang = () => {
      const stored = localStorage.getItem('site_lang');
      if (stored && privacyT[stored]) setLang(stored);
    };

    // Check language at mount
    checkLang();

    // Listen for storage changes (works when localStorage is updated)
    window.addEventListener('storage', checkLang);

    // Listen for custom language change event (dispatched by LanguageFlags)
    window.addEventListener('site-language-change', checkLang);

    return () => {
      window.removeEventListener('storage', checkLang);
      window.removeEventListener('site-language-change', checkLang);
    };
  }, []);

  const p = privacyT[lang] || privacyT.it;

  return (
    <>
      <Navbar forceDark />
      <main style={{ background: '#FAF7F2', minHeight: '100vh', padding: '140px 0 80px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ color: '#1A1714', lineHeight: 1.8, fontSize: '1rem', fontFamily: 'Lato, sans-serif' }} className="space-y-6">

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid #C9A870', paddingBottom: '2rem' }}>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', color: '#960018', marginBottom: '0.5rem', fontWeight: 600 }}>
                {p.header.hotel}
              </h1>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1A1714', marginBottom: '1rem', fontWeight: 500 }}>
                {p.header.title}
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#960018', fontWeight: 600 }}>{p.header.gdpr}</p>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>{p.header.updated}</p>
            </div>

            {/* Section 1 */}
            <section>
              <H2>{p.s1.title}</H2>
              
              <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(201, 168, 112, 0.1)' }}>
                      <th style={thStyle}>{p.s1.colLabel}</th>
                      <th style={thStyle}>{p.s1.colValue}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.s1.r && [
                      { label: p.s1.r.company, value: 'Italimpianti S.r.l.' },
                      { label: p.s1.r.brand, value: 'Hotel Langhe & Monferrato ★★★★' },
                      { label: p.s1.r.legal, value: 'Via del Lavoro 23, 14100 Asti (AT) – Italia' },
                      { label: p.s1.r.operative, value: 'Via Contessa Di Castiglione 1, 14055 Costigliole d\'Asti (AT) – Italia' },
                      { label: p.s1.r.vat, value: '00981490055' },
                      { label: p.s1.r.phone, value: '+39 0141 274010' },
                      { label: p.s1.r.email, value: 'prenota@hotellanghemonferrato.com' },
                      { label: p.s1.r.pec, value: 'italimpiantiat@legalmail.it' },
                      { label: p.s1.r.privacy, value: p.s1.r.privacyVal }
                    ].map((row, idx) => (
                      <tr key={idx} style={trStyle}>
                        <td style={tdStyle}><strong>{row.label}</strong></td>
                        <td style={tdStyle}>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>{p.s1.desc}</p>
            </section>

            {/* Section 2 */}
            <section>
              <H2>{p.s2.title}</H2>
              <p>{p.s2.desc}</p>
            </section>

            {/* Section 3 */}
            <section>
              <H2>{p.s3.title}</H2>
              
              {p.s3.sub1 && (
                <>
                  <H3>{p.s3.sub1}</H3>
                  <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    {p.s3.items1 && p.s3.items1.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {p.s3.sub2 && (
                <>
                  <H3>{p.s3.sub2}</H3>
                  <ul style={{ marginLeft: '1.5rem' }}>
                    {p.s3.items2 && p.s3.items2.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </section>

            {/* Section 4 */}
            <section>
              <H2>{p.s4.title}</H2>
              <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(201, 168, 112, 0.1)' }}>
                      <th style={thStyle}>{p.s4.colPurpose}</th>
                      <th style={thStyle}>{p.s4.colTools}</th>
                      <th style={thStyle}>{p.s4.colBasis}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.s4.rows && p.s4.rows.map((row, idx) => (
                      <tr key={idx} style={trStyle}>
                        <td style={tdStyle}>{row[0]}</td>
                        <td style={tdStyle}>{row[1]}</td>
                        <td style={tdStyle}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {p.s4.note && (
                <p style={{ backgroundColor: 'rgba(201, 168, 112, 0.1)', padding: '1rem', borderLeft: '3px solid #C9A870', borderRadius: '3px' }}>
                  {p.s4.note}
                </p>
              )}
            </section>

            {/* Section 5 */}
            <section>
              <H2>{p.s5.title}</H2>
              {p.s5.subs && p.s5.subs.map((sub, idx) => (
                <div key={idx}>
                  <H3>{sub.title}</H3>
                  <p>{sub.text}</p>
                  {sub.link && (
                    <p>
                      <a href={sub.link} style={{ color: '#960018' }} target="_blank" rel="noopener noreferrer">
                        {sub.link}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </section>

            {/* Section 5-bis */}
            {p.s5b && (
              <section style={{ backgroundColor: 'rgba(201, 168, 112, 0.05)', padding: '1.5rem', borderRadius: '3px' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#960018', marginBottom: '1rem', fontWeight: 600 }}>
                  {p.s5b.title}
                </h2>
                <p>{p.s5b.p1}</p>
                <p>
                  {p.s5b.p2} 
                  <a href="https://www.facebook.com/legal/controller_addendum" style={{ color: '#960018' }} target="_blank" rel="noopener noreferrer">
                    https://www.facebook.com/legal/controller_addendum
                  </a>
                </p>
              </section>
            )}

            {/* Section 6 */}
            <section>
              <H2>{p.s6.title}</H2>
              <p>{p.s6.text}</p>
              <p>
                <a href="https://vercel.com/legal/privacy-policy" style={{ color: '#960018' }} target="_blank" rel="noopener noreferrer">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <H2>{p.s7.title}</H2>
              <p>{p.s7.text}</p>
            </section>

            {/* Section 8 */}
            <section>
              <H2>{p.s8.title}</H2>
              <p>{p.s8.text}</p>
            </section>

            {/* Section 9 */}
            <section>
              <H2>{p.s9.title}</H2>
              <p>{p.s9.intro}</p>
              <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
                {p.s9.items && p.s9.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '1rem' }}>
                <strong>{p.s9.note}</strong>
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <H2>{p.s10.title}</H2>
              <p>{p.s10.intro}</p>
              <div style={{ overflowX: 'auto', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(201, 168, 112, 0.1)' }}>
                      <th style={thStyle}>{p.s10.colPurpose}</th>
                      <th style={thStyle}>{p.s10.colPeriod}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.s10.rows && p.s10.rows.map((row, idx) => (
                      <tr key={idx} style={trStyle}>
                        <td style={tdStyle}>{row[0]}</td>
                        <td style={tdStyle}>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>{p.s10.closing}</p>
            </section>

            {/* Section 11 */}
            <section>
              <H2>{p.s11.title}</H2>
              <p>{p.s11.intro}</p>
              <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
                {p.s11.items && p.s11.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '1.5rem', backgroundColor: 'rgba(201, 168, 112, 0.1)', padding: '1rem', borderLeft: '3px solid #C9A870', borderRadius: '3px' }}>
                <strong>{p.s11.note}</strong>
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <H2>{p.s12.title}</H2>
              <p>{p.s12.text}</p>
            </section>

            {/* Section 13 */}
            <section>
              <H2>{p.s13.title}</H2>
              <p>{p.s13.text}</p>
            </section>

            {/* Section 14 */}
            <section>
              <H2>{p.s14.title}</H2>
              <p>{p.s14.text}</p>
            </section>

            {/* Section 15 */}
            <section>
              <H2>{p.s15.title}</H2>
              <p>{p.s15.text}</p>
            </section>

            {/* Section 16 */}
            <section>
              <H2>{p.s16.title}</H2>
              <p>{p.s16.text}</p>
            </section>

            {/* Footer */}
            <div style={{ backgroundColor: 'rgba(201, 168, 112, 0.1)', padding: '2rem', borderRadius: '3px', marginTop: '3rem', textAlign: 'center', borderTop: '2px solid #C9A870' }}>
              <p style={{ fontSize: '0.9rem', color: '#1A1714', margin: 0 }}>
                {p.footer.reg}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#1A1714', marginTop: '1rem', margin: 0 }}>
                <strong>{p.footer.company}</strong><br />
                {p.footer.address}<br />
                {p.footer.date}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
