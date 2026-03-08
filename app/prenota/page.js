'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrenotaPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ camera: '', checkin: '', checkout: '', adulti: '2', bambini: '0', nome: '', cognome: '', email: '', telefono: '', note: '' });
  const [inviato, setInviato] = useState(false);

  const camere = [
    { slug: 'standard', nome: 'Camera Standard', prezzo: '€130', letto: 'Matrimoniale · 22m²' },
    { slug: 'tripla', nome: 'Camera Tripla', prezzo: '€185', letto: '1 Matrimoniale + 1 Singolo · 30m²' },
    { slug: 'quadrupla', nome: 'Camera Quadrupla', prezzo: '€240', letto: '2 Matrimoniali · 40m²' },
    { slug: 'family', nome: 'Camera Family', prezzo: '€260', letto: 'Matrimoniale + 2 Singoli · 45m²' },
    { slug: 'suite', nome: 'Suite Deluxe', prezzo: '€520', letto: 'King Size + Spa Privata · 80m²' },
  ];

  const inputStyle = { width: '100%', border: '1px solid rgba(201,168,112,0.3)', background: '#fff', padding: '0.8rem 1rem', fontFamily: 'Lato', fontSize: '0.84rem', color: '#2C2520', outline: 'none' };
  const labelStyle = { fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', display: 'block', marginBottom: '0.4rem' };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ height: '42vh', minHeight: 300 }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1800&q=85&fit=crop" alt="Prenota Hotel Langhe" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.65)' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>Miglior Prezzo Garantito</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2' }}>Prenota il Tuo Soggiorno</h1>
        </div>
      </section>

      {/* STEPS */}
      <div style={{ background: '#1A1714', padding: '1.2rem 0', borderBottom: '1px solid rgba(201,168,112,0.15)' }}>
        <div className="max-w-3xl mx-auto px-6 flex justify-center gap-0">
          {[{ n: 1, label: 'Scegli la Camera' }, { n: 2, label: 'Date & Ospiti' }, { n: 3, label: 'Dati Personali' }].map((s, i) => (
            <div key={s.n} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: step >= s.n ? '#C9A870' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Lato', fontSize: '0.72rem', fontWeight: 700, color: step >= s.n ? '#fff' : 'rgba(255,255,255,0.3)', transition: 'all 0.3s' }}>{s.n}</div>
                <span style={{ fontFamily: 'Lato', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: step >= s.n ? '#C9A870' : 'rgba(255,255,255,0.25)' }}>{s.label}</span>
              </div>
              {i < 2 && <div style={{ width: 40, height: 1, background: step > s.n ? '#C9A870' : 'rgba(255,255,255,0.1)', margin: '0 0.8rem' }}></div>}
            </div>
          ))}
        </div>
      </div>

      {/* FORM CONTENT */}
      <section style={{ background: '#FAF7F2', padding: '60px 0 80px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* MAIN */}
            <div className="lg:col-span-2">

              {/* STEP 1: Camera */}
              {step === 1 && (
                <div>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', color: '#2C2520', marginBottom: '1.5rem', fontWeight: 500 }}>Seleziona la Camera</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {camere.map((c) => (
                      <div key={c.slug} onClick={() => setForm({ ...form, camera: c.slug })} style={{ background: '#fff', padding: '1.2rem 1.5rem', border: form.camera === c.slug ? '2px solid #C9A870' : '2px solid transparent', outline: '1px solid rgba(201,168,112,0.2)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.2s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${form.camera === c.slug ? '#C9A870' : '#ccc'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            {form.camera === c.slug && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C9A870' }}></div>}
                          </div>
                          <div>
                            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#2C2520', fontWeight: 500 }}>{c.nome}</div>
                            <div style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: '#9A8A7A', marginTop: 2 }}>{c.letto}</div>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#C9A870' }}>{c.prezzo}</div>
                          <div style={{ fontFamily: 'Lato', fontSize: '0.6rem', color: '#9A8A7A' }}>/ notte</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => form.camera && setStep(2)} className="btn-gold" style={{ marginTop: '1.5rem', opacity: form.camera ? 1 : 0.4 }}>
                    Continua <i className="fa fa-arrow-right" style={{ marginLeft: 8 }}></i>
                  </button>
                </div>
              )}

              {/* STEP 2: Date */}
              {step === 2 && (
                <div>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', color: '#2C2520', marginBottom: '1.5rem', fontWeight: 500 }}>Date e Ospiti</h2>
                  <div style={{ background: '#fff', padding: '2rem', borderTop: '2px solid #C9A870', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label style={labelStyle}>Check-in *</label>
                        <input type="date" required value={form.checkin} onChange={e => setForm({ ...form, checkin: e.target.value })} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Check-out *</label>
                        <input type="date" required value={form.checkout} onChange={e => setForm({ ...form, checkout: e.target.value })} style={inputStyle} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label style={labelStyle}>Adulti</label>
                        <select value={form.adulti} onChange={e => setForm({ ...form, adulti: e.target.value })} style={inputStyle}>
                          {[1,2,3,4].map(n => <option key={n} value={n}>{n} Adult{n === 1 ? 'o' : 'i'}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Bambini</label>
                        <select value={form.bambini} onChange={e => setForm({ ...form, bambini: e.target.value })} style={inputStyle}>
                          {[0,1,2,3].map(n => <option key={n} value={n}>{n === 0 ? 'Nessuno' : `${n} Bambin${n === 1 ? 'o' : 'i'}`}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.5rem' }}>
                    <button onClick={() => setStep(1)} className="btn-outline-gold">
                      <i className="fa fa-arrow-left" style={{ marginRight: 8 }}></i>Indietro
                    </button>
                    <button onClick={() => form.checkin && form.checkout && setStep(3)} className="btn-gold" style={{ opacity: form.checkin && form.checkout ? 1 : 0.4 }}>
                      Continua <i className="fa fa-arrow-right" style={{ marginLeft: 8 }}></i>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Dati */}
              {step === 3 && !inviato && (
                <div>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', color: '#2C2520', marginBottom: '1.5rem', fontWeight: 500 }}>I Tuoi Dati</h2>
                  <div style={{ background: '#fff', padding: '2rem', borderTop: '2px solid #C9A870', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div className="grid grid-cols-2 gap-4">
                      <div><label style={labelStyle}>Nome *</label><input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} style={inputStyle} /></div>
                      <div><label style={labelStyle}>Cognome *</label><input required value={form.cognome} onChange={e => setForm({ ...form, cognome: e.target.value })} style={inputStyle} /></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><label style={labelStyle}>Email *</label><input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} /></div>
                      <div><label style={labelStyle}>Telefono</label><input value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} style={inputStyle} /></div>
                    </div>
                    <div>
                      <label style={labelStyle}>Note o Richieste Speciali</label>
                      <textarea rows={3} value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.5rem' }}>
                    <button onClick={() => setStep(2)} className="btn-outline-gold">
                      <i className="fa fa-arrow-left" style={{ marginRight: 8 }}></i>Indietro
                    </button>
                    <button onClick={() => form.nome && form.email && setInviato(true)} className="btn-gold" style={{ opacity: form.nome && form.email ? 1 : 0.4 }}>
                      <i className="fa fa-check" style={{ marginRight: 8 }}></i>Invia Richiesta
                    </button>
                  </div>
                </div>
              )}

              {/* CONFERMA */}
              {inviato && (
                <div style={{ background: '#fff', borderTop: '3px solid #C9A870', padding: '3rem', textAlign: 'center' }}>
                  <i className="fa fa-check-circle" style={{ color: '#C9A870', fontSize: '3rem', display: 'block', marginBottom: '1.2rem' }}></i>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#2C2520', marginBottom: '0.6rem', fontWeight: 400 }}>Richiesta Inviata!</h2>
                  <p style={{ fontFamily: 'Lato', fontSize: '0.84rem', color: '#6B5E52', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 2rem' }}>
                    Abbiamo ricevuto la tua richiesta di prenotazione. Riceverai una conferma via email entro poche ore con tutti i dettagli.
                  </p>
                  <Link href="/" className="btn-gold">Torna alla Home</Link>
                </div>
              )}
            </div>

            {/* SIDEBAR RIEPILOGO */}
            <div>
              <div style={{ position: 'sticky', top: 100, background: '#fff', borderTop: '3px solid #C9A870', padding: '1.5rem', boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#2C2520', marginBottom: '1.2rem', fontWeight: 500 }}>Riepilogo</h3>
                {[
                  { label: 'Camera', value: form.camera ? camere.find(c => c.slug === form.camera)?.nome : '—' },
                  { label: 'Check-in', value: form.checkin || '—' },
                  { label: 'Check-out', value: form.checkout || '—' },
                  { label: 'Ospiti', value: form.adulti ? `${form.adulti} adulti, ${form.bambini} bambini` : '—' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.55rem 0', borderBottom: '1px solid rgba(201,168,112,0.1)' }}>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.68rem', color: '#9A8A7A', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{row.label}</span>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.78rem', fontWeight: 700, color: '#2C2520' }}>{row.value}</span>
                  </div>
                ))}

                <div style={{ marginTop: '1.3rem', paddingTop: '1rem', borderTop: '1px solid rgba(201,168,112,0.2)' }}>
                  {[
                    { icon: 'fa-shield-alt', text: 'Cancellazione gratuita' },
                    { icon: 'fa-tag', text: 'Miglior prezzo garantito' },
                    { icon: 'fa-lock', text: 'Nessun addebito immediato' },
                  ].map(t => (
                    <div key={t.text} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '0.35rem 0' }}>
                      <i className={`fa ${t.icon}`} style={{ color: '#C9A870', fontSize: '0.65rem', width: 14 }}></i>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: '#6B5E52' }}>{t.text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(201,168,112,0.15)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Lato', fontSize: '0.7rem', color: '#9A8A7A', marginBottom: '0.5rem' }}>Preferisci prenotare per telefono?</p>
                  <a href="tel:+390141961853" style={{ fontFamily: 'Lato', fontSize: '0.8rem', fontWeight: 700, color: '#C9A870', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, textDecoration: 'none' }}>
                    <i className="fa fa-phone" style={{ fontSize: '0.7rem' }}></i>+39 0141 961853
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
