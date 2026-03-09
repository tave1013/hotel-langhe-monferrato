'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RoomPage({ room }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [specCols, setSpecCols] = useState(2);

  useEffect(() => {
    const updateSpecCols = () => setSpecCols(window.innerWidth >= 640 ? 4 : 2);
    updateSpecCols();
    window.addEventListener('resize', updateSpecCols);
    return () => window.removeEventListener('resize', updateSpecCols);
  }, []);

  const openLightbox = (idx) => { setActivePhoto(idx); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prevPhoto = () => setActivePhoto((activePhoto - 1 + room.gallery.length) % room.gallery.length);
  const nextPhoto = () => setActivePhoto((activePhoto + 1) % room.gallery.length);

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ height: '65vh', minHeight: 460 }}>
        <div className="absolute inset-0">
          <img src={room.heroImg} alt={room.name} className="w-full h-full object-cover" style={{ animation: 'kenBurns 12s ease-in-out infinite alternate' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.5) 0%, rgba(10,8,6,0.2) 50%, rgba(10,8,6,0.78) 100%)' }} />
        </div>
        <div className="relative h-full flex flex-col justify-end pb-14 px-6 max-w-7xl mx-auto">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>Camere &amp; Suite</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.1, marginBottom: '0.7rem' }}>
            {room.name}
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#fff', fontStyle: 'italic', maxWidth: 500 }}>
            {room.tagline}
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div style={{ background: '#FAF7F2' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ── LEFT (2/3) ── */}
            <div className="lg:col-span-2">

              {/* MOBILE PRICE CARD (prima della descrizione) */}
              <div className="lg:hidden" style={{ background: '#fff', borderTop: '3px solid #C9A870', padding: '1.7rem', marginBottom: '2rem', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
                <div style={{ marginBottom: '1.3rem' }}>
                  <span style={{ fontFamily: 'Lato', fontSize: '0.62rem', color: '#9A8A7A', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>A partire da</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.6rem', color: '#C9A870', fontWeight: 600 }}>€{room.price}</span>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#9A8A7A' }}>&nbsp;/ notte</span>
                  </div>
                  <span style={{ fontFamily: 'Lato', fontSize: '0.7rem', color: '#9A8A7A' }}>{room.priceNote}</span>
                </div>

                <Link href="/prenota" className="btn-gold" style={{ display: 'block', textAlign: 'center', marginBottom: '0.8rem' }}>
                  <i className="fa fa-calendar-check" style={{ marginRight: 8 }}></i>
                  Prenota Questa Camera
                </Link>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: '0.9rem', borderTop: '1px solid rgba(201,168,112,0.12)' }}>
                  {[
                    { icon: 'fa-shield-alt', text: 'Cancellazione gratuita' },
                    { icon: 'fa-tag', text: 'Miglior prezzo garantito' },
                  ].map((t) => (
                    <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <i className={`fa ${t.icon}`} style={{ color: '#C9A870', fontSize: '0.7rem', width: 14 }}></i>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: '#6B5E52' }}>{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESCRIZIONE + SPECS */}
              <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(201,168,112,0.2)' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.95rem', color: '#2C2520', marginBottom: '1.2rem', fontWeight: 500 }}>
                  Descrizione della Camera
                </h2>
                {room.description.split('\n\n').map((para, i) => (
                  <p key={i} style={{ fontFamily: 'Lato', fontSize: '1.02rem', color: '#6B5E52', lineHeight: 1.85, marginBottom: '1rem' }}>{para}</p>
                ))}

                {/* SPECS GRID — stile Booking */}
                <div className="grid grid-cols-2 sm:grid-cols-4" style={{ border: '1px solid rgba(201,168,112,0.2)', marginTop: '1.8rem' }}>
                  {room.specs.map((spec, i) => (
                    <div key={spec.label} style={{
                      padding: '1rem 1.1rem',
                      borderRight: (i + 1) % specCols !== 0 ? '1px solid rgba(201,168,112,0.2)' : 'none',
                      borderBottom: i < room.specs.length - specCols ? '1px solid rgba(201,168,112,0.2)' : 'none',
                      background: i % 2 === 0 ? '#fff' : '#FDFAF5',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
                        <i className={`fa ${spec.icon}`} style={{ color: '#C9A870', fontSize: '0.8rem', width: 14 }}></i>
                        <span style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{spec.label}</span>
                      </div>
                      <div style={{ fontFamily: 'Lato', fontSize: '0.8rem', fontWeight: 700, color: '#2C2520', paddingLeft: 21 }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* GALLERY */}
              <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(201,168,112,0.2)' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', color: '#2C2520', marginBottom: '1.2rem', fontWeight: 500 }}>Galleria Fotografica</h2>
                <div className="relative overflow-hidden cursor-pointer" style={{ height: 370, marginBottom: 8 }} onClick={() => openLightbox(activePhoto)}>
                  <img src={room.gallery[activePhoto]} alt={`${room.name} foto ${activePhoto + 1}`} className="w-full h-full object-cover" />
                  <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(10,8,6,0.7)', padding: '0.35rem 0.8rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <i className="fa fa-expand" style={{ color: '#C9A870', fontSize: '0.7rem' }}></i>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.62rem', color: '#fff', letterSpacing: '0.1em' }}>ESPANDI</span>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {room.gallery.map((img, i) => (
                    <div key={i} className="cursor-pointer overflow-hidden" style={{ height: 76, outline: i === activePhoto ? '2px solid #C9A870' : '2px solid transparent', outlineOffset: 2, transition: 'outline 0.2s' }} onClick={() => setActivePhoto(i)}>
                      <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                    </div>
                  ))}
                </div>
              </section>

              {/* DOTAZIONI */}
              <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(201,168,112,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}>
                  <i className="fa fa-star" style={{ color: '#C9A870', fontSize: '1.3rem' }}></i>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.95rem', color: '#2C2520', fontWeight: 500 }}>Ideali per il tuo soggiorno</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {Object.entries(room.amenities).map(([cat, data]) => (
                    <div key={cat} style={{ background: '#fff', padding: '1.3rem', borderTop: '2px solid #C9A870' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.8rem' }}>
                        <i className={`fa ${data.icon}`} style={{ color: '#C9A870', fontSize: '1rem', width: 20 }}></i>
                        <h3 style={{ fontFamily: 'Lato', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A870' }}>{cat}</h3>
                      </div>
                      <ul style={{ listStyle: 'none' }}>
                        {data.items.map((item) => (
                          <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '0.32rem 0', borderBottom: '1px solid rgba(201,168,112,0.07)', fontFamily: 'Lato', fontSize: '0.92rem', color: '#4A3D33' }}>
                            <i className="fa fa-check" style={{ color: '#C9A870', fontSize: '0.6rem', marginTop: 4, flexShrink: 0 }}></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* POLITICHE */}
              <section>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.95rem', color: '#2C2520', marginBottom: '1.2rem', fontWeight: 500 }}>Politiche &amp; Info Utili</h2>
                <div style={{ background: '#fff' }}>
                  {room.policies.map((policy, i) => (
                    <div key={policy.label} style={{ display: 'flex', gap: '1.1rem', padding: '1rem 1.3rem', borderBottom: i < room.policies.length - 1 ? '1px solid rgba(201,168,112,0.12)' : 'none', alignItems: 'flex-start' }}>
                      <div style={{ width: 34, height: 34, background: 'rgba(201,168,112,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={`fa ${policy.icon}`} style={{ color: '#C9A870', fontSize: '0.8rem' }}></i>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', marginBottom: 3 }}>{policy.label}</div>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.95rem', color: '#4A3D33', lineHeight: 1.6 }}>{policy.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* ── RIGHT — STICKY BOOKING ── */}
            <div className="lg:col-span-1">
              <div style={{ position: 'sticky', top: 100 }}>

                {/* PRICE CARD */}
                <div className="hidden lg:block" style={{ background: '#fff', borderTop: '3px solid #C9A870', padding: '1.7rem', marginBottom: '1rem', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
                  <div style={{ marginBottom: '1.3rem' }}>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.62rem', color: '#9A8A7A', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>A partire da</span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.6rem', color: '#C9A870', fontWeight: 600 }}>€{room.price}</span>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#9A8A7A' }}>&nbsp;/ notte</span>
                    </div>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.7rem', color: '#9A8A7A' }}>{room.priceNote}</span>
                  </div>

                  <Link href="/prenota" className="btn-gold" style={{ display: 'block', textAlign: 'center', marginBottom: '0.8rem' }}>
                    <i className="fa fa-calendar-check" style={{ marginRight: 8 }}></i>
                    Prenota Questa Camera
                  </Link>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: '0.9rem', borderTop: '1px solid rgba(201,168,112,0.12)' }}>
                    {[
                      { icon: 'fa-shield-alt', text: 'Cancellazione gratuita' },
                      { icon: 'fa-tag', text: 'Miglior prezzo garantito' },
                    ].map((t) => (
                      <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <i className={`fa ${t.icon}`} style={{ color: '#C9A870', fontSize: '0.7rem', width: 14 }}></i>
                        <span style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: '#6B5E52' }}>{t.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONTATTI RAPIDI */}
                <div style={{ background: '#fff', padding: '1.3rem', borderTop: '1px solid rgba(201,168,112,0.2)' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2C2520', marginBottom: '1rem', fontWeight: 500 }}>
                    Hai bisogno di aiuto?
                  </h3>
                  {[
                    { icon: 'fas fa-phone', iconColor: '#C9A870', bg: 'rgba(201,168,112,0.1)', label: 'Chiamaci', value: '+39 0141 961853', href: 'tel:+390141961853' },
                    { icon: 'fas fa-envelope', iconColor: '#C9A870', bg: 'rgba(201,168,112,0.1)', label: 'Scrivici', value: 'info@hotellanghemonferrato.it', href: 'mailto:info@hotellanghemonferrato.it' },
                    { icon: 'fab fa-whatsapp', iconColor: '#25D366', bg: 'rgba(37,211,102,0.1)', label: 'WhatsApp', value: 'Chatta con noi', href: 'https://wa.me/390141961853' },
                  ].map((c) => (
                    <a key={c.label} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: '0.9rem' }}>
                      <div style={{ width: 32, height: 32, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={c.icon} style={{ color: c.iconColor, fontSize: '0.8rem' }}></i>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.58rem', color: '#9A8A7A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.label}</div>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.78rem', fontWeight: 700, color: '#2C2520' }}>{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* LINK TUTTE LE CAMERE */}
                <div style={{ marginTop: '0.8rem', background: '#fff', padding: '1.1rem 1.3rem', borderTop: '1px solid rgba(201,168,112,0.2)' }}>
                  <Link href="/camere" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontFamily: 'Lato', fontSize: '0.78rem', color: '#4A3D33' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#4A3D33')}
                  >
                    <i className="fa fa-th-large" style={{ color: '#C9A870', fontSize: '0.72rem' }}></i>
                    Vedi tutte le camere
                    <i className="fa fa-arrow-right" style={{ fontSize: '0.6rem', marginLeft: 'auto' }}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PREV / NEXT ── */}
      <div style={{ background: '#fff', borderTop: '1px solid rgba(201,168,112,0.15)', borderBottom: '1px solid rgba(201,168,112,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 items-center" style={{ height: 68 }}>
            <div>
              {room.prev && (
                <Link href={`/camere/${room.prev}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Lato', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A3D33', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4A3D33')}
                >
                  <i className="fa fa-arrow-left" style={{ fontSize: '0.65rem' }}></i>
                  Precedente
                </Link>
              )}
            </div>
            <div className="text-center">
              <Link href="/camere" style={{ color: '#C9A870' }}>
                <i className="fa fa-th-large" style={{ fontSize: '1rem' }}></i>
              </Link>
            </div>
            <div className="text-right">
              {room.next && (
                <Link href={`/camere/${room.next}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Lato', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A3D33', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4A3D33')}
                >
                  Successiva
                  <i className="fa fa-arrow-right" style={{ fontSize: '0.65rem' }}></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA BOTTOM ── */}
      <section className="relative overflow-hidden" style={{ padding: '80px 0' }}>
        <div className="absolute inset-0">
          <img src="/foto/hotel-langhe-monferrato.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.78)' }} />
        </div>
        <div className="relative text-center px-6 max-w-3xl mx-auto">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>Prenota il Tuo Soggiorno</p>
          <div className="gold-divider" style={{ marginBottom: '1.4rem' }}></div>
          <h2 className="section-title-light" style={{ marginBottom: '1rem' }}>
            Pronto a Vivere l&apos;Esperienza {room.name}?
          </h2>
          <p style={{ fontFamily: 'Lato', fontSize: '0.86rem', color: '#fff', lineHeight: 1.8, marginBottom: '2rem' }}>
            Prenota direttamente sul nostro sito: miglior prezzo garantito, cancellazione gratuita e un regalo di benvenuto esclusivo.
          </p>
          <Link href="/prenota" className="btn-gold" style={{ padding: '1rem 2.8rem' }}>
            Prenota Ora — Miglior Prezzo
          </Link>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={closeLightbox}>
          <button onClick={(e) => { e.stopPropagation(); prevPhoto(); }} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: 46, height: 46, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fa fa-chevron-left"></i>
          </button>
          <img src={room.gallery[activePhoto]} alt="" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); nextPhoto(); }} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: 46, height: 46, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fa fa-chevron-right"></i>
          </button>
          <button onClick={closeLightbox} style={{ position: 'absolute', top: 18, right: 18, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: 38, height: 38, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fa fa-times"></i>
          </button>
          <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', fontFamily: 'Lato', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
            {activePhoto + 1} / {room.gallery.length}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
