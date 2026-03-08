'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContattiPage() {
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', tipo: '', messaggio: '' });
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
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1800&q=85&fit=crop" alt="Contatti Hotel Langhe" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.65)' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>Siamo Qui per Te</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 400, color: '#FAF7F2' }}>Contattaci</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* FORM */}
            <div>
              <p className="section-label" style={{ marginBottom: '0.5rem' }}>Scrivici</p>
              <div className="gold-divider-left" style={{ marginBottom: '1.2rem' }}></div>
              <h2 className="section-title" style={{ marginBottom: '0.6rem' }}>Come Possiamo Aiutarti?</h2>
              <p style={{ fontFamily: 'Lato', fontSize: '0.84rem', color: '#6B5E52', lineHeight: 1.8, marginBottom: '2rem' }}>
                Rispondiamo entro poche ore. Per prenotazioni urgenti chiama direttamente.
              </p>

              {inviato ? (
                <div style={{ background: '#fff', borderTop: '3px solid #C9A870', padding: '2.5rem', textAlign: 'center' }}>
                  <i className="fa fa-check-circle" style={{ color: '#C9A870', fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}></i>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#2C2520', marginBottom: '0.5rem' }}>Messaggio Inviato!</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: '0.82rem', color: '#6B5E52', lineHeight: 1.7 }}>Ti risponderemo entro 24 ore. Nel frattempo puoi chiamarci al <strong>+39 0141 961853</strong>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Nome e Cognome *</label>
                      <input required value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.84rem', color: '#2C2520', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.84rem', color: '#2C2520', outline: 'none' }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Telefono</label>
                      <input value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.84rem', color: '#2C2520', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Tipo di Richiesta</label>
                      <select value={form.tipo} onChange={e => setForm({...form, tipo: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.84rem', color: form.tipo ? '#2C2520' : '#9A8A7A', outline: 'none' }}>
                        <option value="">Seleziona...</option>
                        <option>Prenotazione Camera</option>
                        <option>Sala Meeting / Evento</option>
                        <option>Pacchetto Offerta</option>
                        <option>Informazioni Generali</option>
                        <option>Altro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' }}>Messaggio *</label>
                    <textarea required rows={5} value={form.messaggio} onChange={e => setForm({...form, messaggio: e.target.value})} style={{ width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.75rem 1rem', fontFamily: 'Lato', fontSize: '0.84rem', color: '#2C2520', outline: 'none', resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn-gold" style={{ alignSelf: 'flex-start', padding: '0.95rem 2.5rem' }}>
                    <i className="fa fa-paper-plane" style={{ marginRight: 8 }}></i>Invia Messaggio
                  </button>
                </form>
              )}
            </div>

            {/* INFO */}
            <div>
              <p className="section-label" style={{ marginBottom: '0.5rem' }}>Dove Siamo</p>
              <div className="gold-divider-left" style={{ marginBottom: '1.2rem' }}></div>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>Informazioni Utili</h2>

              {/* Contatti diretti */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: 'fa-map-marker-alt', title: 'Indirizzo', lines: ['Via Contessa di Castiglione, 1', '14055 Costigliole d\'Asti (AT) - Italy'] },
                  { icon: 'fa-phone', title: 'Telefono', lines: ['+39 0141 961853'], href: 'tel:+390141961853' },
                  { icon: 'fa-envelope', title: 'Email', lines: ['info@hotellanghemonferrato.it'], href: 'mailto:info@hotellanghemonferrato.it' },
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

              {/* Orari */}
              <div style={{ background: '#1A1714', padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#FAF7F2', marginBottom: '1rem', fontWeight: 400 }}>
                  <i className="fa fa-clock" style={{ color: '#C9A870', marginRight: 8 }}></i>Orari Reception
                </h3>
                {[
                  ['Check-in', 'Dalle 15:00'],
                  ['Check-out', 'Entro le 11:00'],
                  ['Reception', 'Aperta 24/7'],
                  ['Ristorante pranzo', '12:30 – 14:30'],
                  ['Ristorante cena', '19:30 – 22:00'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.45rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontFamily: 'Lato', fontSize: '0.78rem' }}>
                    <span style={{ color: 'rgba(245,239,228,0.45)' }}>{k}</span>
                    <span style={{ color: '#FAF7F2', fontWeight: 700 }}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Mappa placeholder */}
              <div style={{ background: 'rgba(201,168,112,0.08)', border: '1px solid rgba(201,168,112,0.2)', height: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <i className="fa fa-map" style={{ color: '#C9A870', fontSize: '1.8rem' }}></i>
                <span style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: '#9A8A7A', letterSpacing: '0.08em' }}>APRI SU GOOGLE MAPS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
