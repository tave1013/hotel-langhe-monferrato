'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import useSiteLanguage from '@/hooks/useSiteLanguage';

export default function GuideDetailPage({ guida }) {
  const lang = useSiteLanguage();
  const isEn = lang === 'en';
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isEs = lang === 'es';

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ height: '70vh', minHeight: 500 }}>
        <div className="absolute inset-0">
          <Image
            src={guida.heroImg}
            alt={guida.nome}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
            style={{ animation: 'kenBurns 14s ease-in-out infinite alternate' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.18) 40%, rgba(10,8,6,0.85) 100%)' }} />
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0" style={{ padding: '0 max(1.5rem, calc((100% - 1280px)/2 + 1.5rem)) 3.5rem' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.1, marginBottom: '0.7rem', maxWidth: 720 }}>
            {guida.nome}
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.2rem, 2.8vw, 1.35rem)', color: '#FAF7F2', fontStyle: 'italic', marginBottom: '1.2rem', maxWidth: 600 }}>
            {guida.sottotitolo}
          </p>

          {/* Meta pills */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { icon: 'fa-map-marker-alt', text: guida.distanzaDallHotel },
              { icon: 'fa-clock', text: guida.tempoVisita },
              { icon: 'fa-bookmark', text: guida.categoria },
            ].map((m) => (
              <div key={m.text} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(10,8,6,0.55)', border: '1px solid rgba(201,168,112,0.2)', padding: '0.38rem 0.9rem', backdropFilter: 'blur(8px)' }}>
                <i className={`fa ${m.icon}`} style={{ color: '#C9A870', fontSize: '0.62rem' }}></i>
                <span className="text-[0.74rem] md:text-[0.64rem]" style={{ fontFamily: 'Lato', color: '#FAF7F2', letterSpacing: '0.04em' }}>{m.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div style={{ background: '#FAF7F2' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-14">

            {/* ── LEFT: Article content (2/3) ── */}
            <article className="lg:col-span-2">

              {/* INTRO */}
              <div style={{ padding: '2rem', background: '#fff', borderLeft: '3px solid #C9A870', marginBottom: '3rem' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', color: '#4A3D33', lineHeight: 1.85, fontStyle: 'italic' }}>
                  {guida.tagline}
                </p>
              </div>

              <p style={{ fontFamily: 'Lato', fontSize: '1.05rem', color: '#6B5E52', lineHeight: 1.9, marginBottom: '3rem' }}>
                {guida.descrizioneBreve}
              </p>

              {/* SECTIONS */}
              {guida.sezioni.map((sez, i) => (
                <section key={sez.titolo} style={{ marginBottom: '4rem' }}>
                  {/* Section number + title */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: '1.5rem' }}>
                    <div style={{ width: 38, height: 38, background: 'rgba(201,168,112,0.12)', border: '1px solid rgba(201,168,112,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 3 }}>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.72rem', fontWeight: 700, color: '#C9A870' }}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#2C2520', fontWeight: 500, lineHeight: 1.25 }}>
                      {sez.titolo}
                    </h2>
                  </div>

                {/* Image - only if sez.img exists */}
                {sez.img && (
                  <div className="overflow-hidden" style={{ marginBottom: '1.5rem', height: 380 }}>
                    <img src={sez.img} alt={sez.titolo} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                )}

                  {/* Text */}
                  {sez.testo.split('\n\n').map((para, j) => (
                    <p key={j} style={{ fontFamily: 'Lato', fontSize: '1rem', color: '#5A4D43', lineHeight: 1.9, marginBottom: '1rem' }}>{para}</p>
                  ))}

                  {/* Optional bullet list */}
                  {Array.isArray(sez.lista) && sez.lista.length > 0 && (
                    <ul style={{ margin: '0.6rem 0 1rem 1.1rem', padding: 0 }}>
                      {sez.lista.map((item) => (
                        <li key={item} style={{ fontFamily: 'Lato', fontSize: '0.98rem', color: '#5A4D43', lineHeight: 1.8, marginBottom: '0.45rem' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Optional details blocks with H3 titles */}
                  {Array.isArray(sez.dettagli) && sez.dettagli.length > 0 && (
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {sez.dettagli.map((d) => (
                        <div key={d.titolo} style={{ background: 'rgba(201,168,112,0.05)', border: '1px solid rgba(201,168,112,0.2)', padding: '0.9rem 1rem' }}>
                          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: '#2C2520', lineHeight: 1.3, marginBottom: '0.35rem', fontWeight: 700 }}>
                            {d.titolo}
                          </h3>
                          <p style={{ fontFamily: 'Lato', fontSize: '0.95rem', color: '#5A4D43', lineHeight: 1.75, marginBottom: d.href ? '0.3rem' : 0 }}>
                            {d.testo}
                          </p>
                          {d.href && (
                            <a
                              href={d.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontFamily: 'Lato',
                                fontSize: '0.86rem',
                                color: '#C9A870',
                                textDecoration: 'underline',
                                textDecorationThickness: '1px',
                                textUnderlineOffset: '2px',
                                lineHeight: 1.6,
                              }}
                            >
                              {d.linkLabel || (isEn ? 'Open on Google Maps' : isFr ? 'Ouvrir sur Google Maps' : isDe ? 'Auf Google Maps öffnen' : isEs ? 'Abrir en Google Maps' : 'Apri su Google Maps')}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Optional external links (SEO + utilità) */}
                  {Array.isArray(sez.links) && sez.links.length > 0 && (
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {sez.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: 'Lato',
                            fontSize: '0.9rem',
                            color: '#C9A870',
                            textDecoration: 'underline',
                            textDecorationThickness: '1px',
                            textUnderlineOffset: '2px',
                            lineHeight: 1.6,
                          }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: '1.2rem' }}>
                    {sez.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: 'Lato', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A870', border: '1px solid rgba(201,168,112,0.3)', padding: '0.3rem 0.72rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Photo Credits */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(201,168,112,0.08)' }}>
                    <i className="fa fa-camera" style={{ color: '#9A8A7A', fontSize: '0.7rem' }}></i>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.68rem', color: '#9A8A7A', lineHeight: 1.5 }}>
                      {isEn
                        ? 'Photo: M. Ferni (from the Facebook group "Gite fuori porta in Piemonte") – used for cover and featured image'
                        : isFr
                          ? 'Photo : M. Ferni (du groupe Facebook « Gite fuori porta in Piemonte ») – utilisée pour la couverture et l’image principale'
                          : isDe
                            ? 'Foto: M. Ferni (von der Facebook-Gruppe „Gite fuori porta in Piemonte") – verwendet für Coverfoto und Hauptbild'
                            : isEs
                              ? 'Foto: M. Ferni (del grupo de Facebook “Gite fuori porta in Piemonte”) – utilizada para portada e imagen destacada'
                            : 'Foto: M. Ferni (Dal Gruppo Facebook Gite fuori porta in Piemonte) – utilizzata per cover e featured'}
                    </span>
                  </div>

                  {/* Section divider */}
                  {i < guida.sezioni.length - 1 && (
                    <div style={{ height: 1, background: 'linear-gradient(to right, #C9A870, transparent)', marginTop: '3rem', opacity: 0.25 }}></div>
                  )}
                </section>
              ))}

              {/* INFO PRATICHE */}
              <div style={{ background: '#1A1714', padding: '2rem', marginBottom: '3rem' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#FAF7F2', marginBottom: '1.3rem', fontWeight: 500 }}>
                  <i className="fa fa-info-circle" style={{ color: '#C9A870', marginRight: 10, fontSize: '0.9rem' }}></i>
                  {isEn ? 'Practical Information' : isFr ? 'Informations Pratiques' : isDe ? 'Praktische Informationen' : isEs ? 'Información práctica' : 'Informazioni Pratiche'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: 'fa-car', label: isEn ? 'How to Get There' : isFr ? "Comment S'y Rendre" : isDe ? 'Wie man ankommt' : isEs ? 'Cómo llegar' : 'Come Arrivare', value: guida.infoPratiche.come },
                    { icon: 'fa-calendar-alt', label: isEn ? 'Best Period' : isFr ? 'Période Conseillée' : isDe ? 'Beste Jahreszeit' : isEs ? 'Mejor época' : 'Periodo Consigliato', value: guida.infoPratiche.periodo },
                    { icon: 'fa-backpack', label: isEn ? 'What to Bring' : isFr ? 'Que Prendre' : isDe ? 'Was man mitbringen sollte' : isEs ? 'Qué llevar' : 'Cosa Portare', value: guida.infoPratiche.cosaDPortare },
                    { icon: 'fa-ticket-alt', label: isEn ? 'Tickets & Costs' : isFr ? 'Billets & Coûts' : isDe ? 'Eintrittskarten & Kosten' : isEs ? 'Entradas y costes' : 'Biglietti & Costi', value: guida.infoPratiche.ingressiPaganti },
                  ].map((info) => (
                    <div key={info.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ width: 30, height: 30, background: 'rgba(201,168,112,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={`fa ${info.icon}`} style={{ color: '#C9A870', fontSize: '0.72rem' }}></i>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A870', marginBottom: 3 }}>{info.label}</div>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.78rem', color: 'rgba(245,239,228,0.62)', lineHeight: 1.6 }}>{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* ── RIGHT: Sticky sidebar ── */}
            <aside className="lg:col-span-1">
              <div style={{ position: 'sticky', top: 100 }}>

                {/* INDEX / SOMMARIO */}
                <div style={{ background: '#fff', borderTop: '2px solid #C9A870', padding: '1.5rem', marginBottom: '1.2rem' }}>
                  <h3 style={{ fontFamily: 'Lato', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A870', marginBottom: '1rem' }}>
                    {isEn ? 'In This Guide' : isFr ? 'Dans ce Guide' : isDe ? 'In diesem Reiseführer' : isEs ? 'En esta guía' : 'In Questa Guida'}
                  </h3>
                  <ol style={{ listStyle: 'none', padding: 0 }}>
                    {guida.sezioni.map((sez, i) => (
                      <li key={sez.titolo} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '0.5rem 0', borderBottom: i < guida.sezioni.length - 1 ? '1px solid rgba(201,168,112,0.1)' : 'none' }}>
                        <span style={{ fontFamily: 'Lato', fontSize: '0.65rem', color: '#C9A870', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                        <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#6B5E52', lineHeight: 1.5 }}>{sez.titolo}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* LINK INTERNI — CONVERSIONE */}
                <div style={{ background: '#fff', borderTop: '2px solid #1A1714', padding: '1.5rem', marginBottom: '1.2rem' }}>
                  <h3 style={{ fontFamily: 'Lato', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9A8A7A', marginBottom: '1rem' }}>
                    {isEn ? 'You Might Also Like' : isFr ? 'Cela Peut Aussi Vous Intéresser' : isDe ? 'Das könnte Dich auch interessieren' : isEs ? 'También te puede interesar' : 'Potrebbe Interessarti'}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {guida.linkInterni.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1rem', background: 'rgba(201,168,112,0.06)', border: '1px solid rgba(201,168,112,0.15)', textDecoration: 'none', transition: 'all 0.25s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,112,0.12)'; e.currentTarget.style.borderColor = 'rgba(201,168,112,0.4)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(201,168,112,0.06)'; e.currentTarget.style.borderColor = 'rgba(201,168,112,0.15)'; }}
                      >
                        <i className={`fa ${link.icon}`} style={{ color: '#C9A870', fontSize: '0.75rem', flexShrink: 0 }}></i>
                        <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#4A3D33', lineHeight: 1.4 }}>{link.label}</span>
                        <i className="fa fa-chevron-right" style={{ color: '#C9A870', fontSize: '0.5rem', marginLeft: 'auto' }}></i>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* PRENOTA BOX */}
                <div style={{ background: '#1A1714', padding: '1.5rem' }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', color: '#FAF7F2', fontStyle: 'italic', marginBottom: '0.9rem', lineHeight: 1.5 }}>
                    {isEn ? `Would you like to explore ${guida.nome} starting from our hotel?` : isFr ? `Souhaitez-vous explorer ${guida.nome} en partant de notre hôtel ?` : isDe ? `Möchten Sie ${guida.nome} von unserem Hotel aus erkunden?` : isEs ? `¿Te gustaría explorar ${guida.nome} partiendo de nuestro hotel?` : `Vuoi esplorare ${guida.nome} partendo dal nostro hotel?`}
                  </p>
                  <p style={{ fontFamily: 'Lato', fontSize: '0.74rem', color: 'rgba(245,239,228,0.45)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                    {isEn ? 'Our team organizes transfers, bookings and tailored itineraries. Book your stay and tell us what you want to do.' : isFr ? 'Notre équipe organise transferts, réservations et itinéraires sur mesure. Réservez votre séjour et dites-nous ce que vous souhaitez faire.' : isDe ? 'Unser Team organisiert Transfers, Reservierungen und maßgeschneiderte Reiserouten. Buchen Sie Ihren Aufenthalt und sagen Sie uns, was Sie tun möchten.' : isEs ? 'Nuestro equipo organiza traslados, reservas e itinerarios a medida. Reserva tu estancia y cuéntanos qué te gustaría hacer.' : 'Il nostro team organizza transfer, prenotazioni e itinerari su misura. Prenota il soggiorno e dicci cosa vuoi fare.'}
                  </p>
                  <Link href="/prenota" className="btn-gold" style={{ display: 'block', textAlign: 'center' }}>
                    {isEn ? 'Book Your Stay' : isFr ? 'Réservez Votre Séjour' : isDe ? 'Buchen Sie Ihren Aufenthalt' : isEs ? 'Reserva tu estancia' : 'Prenota il Soggiorno'}
                  </Link>
                  <Link href="/contatti" style={{ display: 'block', textAlign: 'center', fontFamily: 'Lato', fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.7rem', textDecoration: 'none', letterSpacing: '0.06em' }}>
                    {isEn ? 'Contact us for an itinerary' : isFr ? 'Contactez-nous pour un itinéraire' : isDe ? 'Kontaktieren Sie uns für eine Reiseroute' : isEs ? 'Contáctanos para un itinerario' : 'Contattaci per un Itinerario'}
                  </Link>
                </div>

                {/* TUTTE LE GUIDE */}
                <Link href="/territorio" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '1rem 1.2rem', background: '#fff', textDecoration: 'none', marginTop: '0.8rem', border: '1px solid rgba(201,168,112,0.15)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,112,0.15)')}
                >
                  <i className="fa fa-map" style={{ color: '#C9A870', fontSize: '0.75rem' }}></i>
                  <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#4A3D33' }}>{isEn ? 'All Area Mini Guides' : isFr ? 'Tous les Mini-Guides du Territoire' : isDe ? 'Alle Reiseführer des Gebiets' : isEs ? 'Todas las mini guías del territorio' : 'Tutte le Mini Guide del Territorio'}</span>
                  <i className="fa fa-arrow-right" style={{ color: '#C9A870', fontSize: '0.58rem', marginLeft: 'auto' }}></i>
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </div>

      {/* ── PREV / NEXT ── */}
      <div style={{ background: '#fff', borderTop: '1px solid rgba(201,168,112,0.15)', borderBottom: '1px solid rgba(201,168,112,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 items-center" style={{ height: 68 }}>
            <div>
              {guida.prev && (
                <Link href={`/territorio/${guida.prev}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Lato', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A3D33', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4A3D33')}
                >
                  <i className="fa fa-arrow-left" style={{ fontSize: '0.65rem' }}></i>
                  {isEn ? 'Previous Guide' : isFr ? 'Guide Précédent' : isDe ? 'Vorheriger Reiseführer' : isEs ? 'Guía anterior' : 'Guida Precedente'}
                </Link>
              )}
            </div>
            <div className="text-center">
              <Link href="/territorio" style={{ color: '#C9A870' }}>
                <i className="fa fa-map" style={{ fontSize: '1rem' }}></i>
              </Link>
            </div>
            <div className="text-right">
              {guida.next && (
                <Link href={`/territorio/${guida.next}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Lato', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A3D33', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4A3D33')}
                >
                  {isEn ? 'Next Guide' : isFr ? 'Guide Suivant' : isDe ? 'Nächster Reiseführer' : isEs ? 'Guía siguiente' : 'Guida Successiva'}
                  <i className="fa fa-arrow-right" style={{ fontSize: '0.65rem' }}></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── ALTRE GUIDE ── */}
      <Footer />
    </>
  );
}
