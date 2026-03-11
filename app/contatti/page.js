'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

function ContattiPage() {
  const [form, setForm] = useState({ nome: '', cognome: '', email: '', telefono: '', tipo: '', messaggio: '' });
  const [inviato, setInviato] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInviato(true);
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ height: '45vh', minHeight: 320 }}>
        <div className="absolute inset-0">
          <Image src="/foto/hotel-langhe-monferrato.jpg" alt="Contatti Hotel Langhe" fill priority quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.65)' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>Siamo Qui per Te</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2' }}>Contattaci</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* FORM */}
            <ScrollAnimation type="slide-up">
              <div>
                <p className="section-label" style={{ marginBottom: '0.5rem' }}>Scrivici</p>
                <div className="gold-divider-left" style={{ marginBottom: '1.2rem' }}></div>
                <h2 className="section-title" style={{ marginBottom: '0.6rem' }}>Come Possiamo Aiutarti?</h2>
                <p style={{ fontFamily: 'Lato', fontSize: '0.98rem', color: '#6B5E52', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Rispondiamo entro poche ore. Per prenotazioni urgenti chiama direttamente.
                </p>

              {inviato ? (
                <div style={{ background: '#fff', borderTop: '3px solid #C9A870', padding: '2.5rem', textAlign: 'center' }}>
                  <i className="fa fa-check-circle" style={{ color: '#C9A870', fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}></i>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#2C2520', marginBottom: '0.5rem' }}>Messaggio Inviato!</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: '0.96rem', color: '#6B5E52', lineHeight: 1.7 }}>Ti risponderemo entro 24 ore. Nel frattempo puoi chiamarci al <strong>+39 0141 961853</strong>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Nome *</label>
                      <input required value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.96rem', color: '#2C2520', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Cognome *</label>
                      <input required value={form.cognome} onChange={e => setForm({...form, cognome: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.96rem', color: '#2C2520', outline: 'none' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.96rem', color: '#2C2520', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Telefono *</label>
                    <input required value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.96rem', color: '#2C2520', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Tipo di Richiesta *</label>
                    <select required value={form.tipo} onChange={e => setForm({...form, tipo: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.96rem', color: form.tipo ? '#2C2520' : '#9A8A7A', outline: 'none' }}>
                      <option value="">Seleziona...</option>
                      <option>Prenotazione Camera</option>
                      <option>Sala Meeting / Evento</option>
                      <option>Pacchetto Offerta</option>
                      <option>Informazioni Generali</option>
                      <option>Altro</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Messaggio *</label>
                    <textarea required rows={5} value={form.messaggio} onChange={e => setForm({...form, messaggio: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.96rem', color: '#2C2520', outline: 'none', resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn-gold" style={{ alignSelf: 'flex-start', padding: '0.95rem 2.5rem' }}>
                    <i className="fa fa-paper-plane" style={{ marginRight: 8 }}></i>Invia Messaggio
                  </button>
                </form>
              )}
              </div>
            </ScrollAnimation>

            {/* INFO */}
            <ScrollAnimation type="slide-up" delay={200}>
              <div>
                <p className="section-label" style={{ marginBottom: '0.5rem' }}>Dove Siamo</p>
                <div className="gold-divider-left" style={{ marginBottom: '1.2rem' }}></div>
                <h2 className="section-title" style={{ marginBottom: '2rem' }}>Informazioni Utili</h2>

              {/* Contatti diretti */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: 'fas fa-map-marker-alt', title: 'Indirizzo', lines: ['Via Contessa di Castiglione, 1', '14055 Costigliole d\'Asti (AT) - Italy'], href: 'https://www.google.com/maps/place/Albergo+Langhe+e+Monferrato/@44.7923618,8.1585322,15z/data=!4m13!1m2!2m1!1sVia+Contessa+di+Castiglione+1,+Costigliole+d\'Asti,+Italy!3m9!1s0x47878ca2d313df7d:0xb73fca66300f6dd0!5m2!4m1!1i2!8m2!3d44.7923618!4d8.1775866!15sCjhWaWEgQ29udGVzc2EgZGkgQ2FzdGlnbGlvbmUgMSwgQ29zdGlnbGlvbGUgZCdBc3RpLCBJdGFseVo4IjZ2aWEgY29udGVzc2EgZGkgY2FzdGlnbGlvbmUgMSBjb3N0aWdsaW9sZSBkIGFzdGkgaXRhbHmSAQVob3RlbJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyeGtUbFZVYkVKbFZWRTBZakZ3ZUdGWGJEWlVWbHBhWkZZNE1WWnVZeEFC4AEA-gEFCPwBEEw!16s%2Fg%2F1vs1qrqf?hl=it-IT&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D' },
                  { icon: 'fas fa-phone', title: 'Telefono', lines: ['+39 0141 961853'], href: 'tel:+390141961853' },
                  { icon: 'fas fa-envelope', title: 'Email', lines: ['info@hotellanghemonferrato.it'], href: 'mailto:info@hotellanghemonferrato.it' },
                  { icon: 'fab fa-whatsapp', title: 'WhatsApp', lines: ['Chatta con noi ora'], href: 'https://wa.me/390141961853' },
                ].map((c) => (
                  <div key={c.title} style={{ background: '#fff', padding: '1.2rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', borderLeft: '2px solid #C9A870' }}>
                    <i className={c.icon} style={{ color: '#C9A870', fontSize: '0.9rem', marginTop: 2, width: 18 }}></i>
                    <div>
                      <div style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', marginBottom: 3 }}>{c.title}</div>
                      {c.lines.map(l => (
                        <div key={l}>
                          {c.href ? <a href={c.href} style={{ fontFamily: 'Lato', fontSize: '0.85rem', color: '#2C2520', textDecoration: 'none' }}>{l}</a> : <span style={{ fontFamily: 'Lato', fontSize: '0.85rem', color: '#2C2520' }}>{l}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Mappa a tutta larghezza */}
          <div style={{ marginTop: '3rem', position: 'relative' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.0!2d8.1775866!3d44.7923618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47878ca2d313df7d%3A0xb73fca66300f6dd0!2sAlbergo%20Langhe%20e%20Monferrato!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%" 
              height="400" 
              style={{ border: '1px solid rgba(201,168,112,0.2)' }}
              allowFullScreen="" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a 
              href="https://www.google.com/maps/place/Albergo+Langhe+e+Monferrato/@44.7923618,8.1585322,15z/data=!4m13!1m2!2m1!1sVia+Contessa+di+Castiglione+1,+Costigliole+d'Asti,+Italy!3m9!1s0x47878ca2d313df7d:0xb73fca66300f6dd0!5m2!4m1!1i2!8m2!3d44.7923618!4d8.1775866!15sCjhWaWEgQ29udGVzc2EgZGkgQ2FzdGlnbGlvbmUgMSwgQ29zdGlnbGlvbGUgZCdBc3RpLCBJdGFseVo4IjZ2aWEgY29udGVzc2EgZGkgY2FzdGlnbGlvbmUgMSBjb3N0aWdsaW9sZSBkIGFzdGkgaXRhbHmSAQVob3RlbJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyeGtUbFZVYkVKbFZWRTBZakZ3ZUdGWGJEWlVWbHBhWkZZNE1WWnVZeEFC4AEA-gEFCPwBEEw!16s%2Fg%2F1vs1qrqf?hl=it-IT&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                position: 'absolute', 
                bottom: '1rem', 
                right: '1rem', 
                background: '#fff', 
                padding: '0.7rem 1.2rem', 
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                fontFamily: 'Lato',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#2C2520',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(201,168,112,0.3)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#C9A870'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
            >
              <i className="fas fa-external-link-alt" style={{ fontSize: '0.7rem' }}></i>
              Apri in Google Maps
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Metadata per SEO (necessario wrapper per client components)
export const metadata = {
  title: 'Contatti Hotel Langhe | Info e Prenotazioni Dirette',
  description: 'Contatta Hotel Langhe & Monferrato: +39 0141 966012. Richiedi informazioni, prenota direttamente e scopri le nostre offerte esclusive.',
  openGraph: {
    title: 'Contatti | Hotel Langhe & Monferrato',
    description: 'Contattaci per informazioni e prenotazioni. Risposta entro 24 ore.',
    url: 'https://hotel-langhe-monferrato.vercel.app/contatti',
    images: [{ url: '/foto/hotel-langhe-monferrato.jpg', width: 1200, height: 630 }],
  },
};

export default ContattiPage;
