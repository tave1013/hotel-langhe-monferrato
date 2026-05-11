'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import useSiteLanguage from '@/hooks/useSiteLanguage';

export default function ContattiClient() {
  const lang = useSiteLanguage();
  const isEn = lang === 'en';
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isEs = lang === 'es';
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
          <Image src="/foto/hotel-langhe-monferrato.jpg" alt={isEn ? 'Hotel Langhe contacts' : isFr ? 'Contacts Hotel Langhe' : isEs ? 'Contactos Hotel Langhe' : 'Contatti Hotel Langhe'} fill priority quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.65)' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>{isEn ? 'We Are Here for You' : isFr ? 'Nous Sommes Là pour Vous' : isDe ? 'Wir Sind Für Sie Da' : isEs ? 'Estamos aquí para ti' : 'Siamo Qui per Te'}</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2' }}>{isEn ? 'Contact Us' : isFr ? 'Contactez-nous' : isDe ? 'Kontaktieren Sie Uns' : isEs ? 'Contáctanos' : 'Contattaci'}</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* FORM */}
            <ScrollAnimation type="slide-up">
              <div>
                <p className="section-label" style={{ marginBottom: '0.5rem' }}>{isEn ? 'Write to us' : isFr ? 'Écrivez-nous' : isDe ? 'Schreiben Sie Uns' : isEs ? 'Escríbenos' : 'Scrivici'}</p>
                <div className="gold-divider-left" style={{ marginBottom: '1.2rem' }}></div>
                <h2 className="section-title" style={{ marginBottom: '0.6rem' }}>{isEn ? 'How can we help you?' : isFr ? 'Comment Pouvons-nous Vous Aider ?' : isDe ? 'Wie Können Wir Ihnen Helfen?' : isEs ? '¿Cómo podemos ayudarte?' : 'Come Possiamo Aiutarti?'}</h2>
                <p style={{ fontFamily: 'Lato', fontSize: '0.98rem', color: '#6B5E52', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {isEn ? 'We usually reply within a few hours. For urgent bookings, please call us directly.' : isFr ? 'Nous répondons généralement en quelques heures. Pour les réservations urgentes, appelez-nous directement.' : isDe ? 'Wir Antworten Normalerweise Innerhalb Weniger Stunden. Für Dringende Buchungen Rufen Sie Uns Bitte Direkt An.' : isEs ? 'Normalmente respondemos en pocas horas. Para reservas urgentes, llámanos directamente.' : 'Rispondiamo entro poche ore. Per prenotazioni urgenti chiama direttamente.'}
                </p>

              {inviato ? (
                <div className="bg-white shadow-lg p-10 text-center" style={{ border: '1px solid rgba(201,168,112,0.2)', borderTop: '3px solid #C9A870' }}>
                  <i className="fa fa-check-circle" style={{ color: '#C9A870', fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}></i>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#2C2520', marginBottom: '0.5rem' }}>{isEn ? 'Message sent!' : isFr ? 'Message envoyé !' : isDe ? 'Nachricht Gesendet!' : isEs ? '¡Mensaje enviado!' : 'Messaggio Inviato!'}</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: '0.96rem', color: '#6B5E52', lineHeight: 1.7 }}>{isEn ? <>We will reply within 24 hours. In the meantime, call us at <strong>+39 0141 961853</strong>.</> : isFr ? <>Nous vous répondrons dans les 24 heures. En attendant, vous pouvez nous appeler au <strong>+39 0141 961853</strong>.</> : isDe ? <>Wir Antworten Innerhalb Von 24 Stunden. In Der Zwischenzeit Können Sie Uns Unter <strong>+39 0141 961853</strong> Anrufen.</> : isEs ? <>Te responderemos en 24 horas. Mientras tanto, puedes llamarnos al <strong>+39 0141 961853</strong>.</> : <>Ti risponderemo entro 24 ore. Nel frattempo puoi chiamarci al <strong>+39 0141 961853</strong>.</>}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{isEn ? 'First Name *' : isFr ? 'Prénom *' : isDe ? 'Vorname *' : isEs ? 'Nombre *' : 'Nome *'}</label>
                        <input required value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
                      </div>
                      <div>
                        <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{isEn ? 'Last Name *' : isFr ? 'Nom *' : isDe ? 'Nachname *' : isEs ? 'Apellidos *' : 'Cognome *'}</label>
                        <input required value={form.cognome} onChange={e => setForm({...form, cognome: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Email *</label>
                        <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
                      </div>
                      <div>
                        <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{isEn ? 'Phone *' : isFr ? 'Téléphone *' : isDe ? 'Telefon *' : isEs ? 'Teléfono *' : 'Telefono *'}</label>
                        <input required value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{isEn ? 'Request Type *' : isFr ? 'Type de Demande *' : isDe ? 'Anfrageart *' : isEs ? 'Tipo de solicitud *' : 'Tipo di Richiesta *'}</label>
                      <select required value={form.tipo} onChange={e => setForm({...form, tipo: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: form.tipo ? '#2C2520' : '#9A8A7A' }}>
                        <option value="">{isEn ? 'Select...' : isFr ? 'Sélectionner...' : isDe ? 'Auswählen...' : isEs ? 'Selecciona...' : 'Seleziona...'}</option>
                        <option>{isEn ? 'Room Booking' : isFr ? 'Réservation Chambre' : isDe ? 'Zimmerbuchung' : isEs ? 'Reserva de habitación' : 'Prenotazione Camera'}</option>
                        <option>{isEn ? 'Meeting Room / Event' : isFr ? 'Salle de Réunion / Événement' : isDe ? 'Besprechungsraum / Veranstaltung' : isEs ? 'Sala de reuniones / Evento' : 'Sala Meeting / Evento'}</option>
                        <option>{isEn ? 'Special Offer Package' : isFr ? 'Forfait Offre Spéciale' : isDe ? 'Sonderangebotspauschale' : isEs ? 'Paquete oferta especial' : 'Pacchetto Offerta'}</option>
                        <option>{isEn ? 'General Information' : isFr ? 'Informations Générales' : isDe ? 'Allgemeine Informationen' : isEs ? 'Información general' : 'Informazioni Generali'}</option>
                        <option>{isEn ? 'Other' : isFr ? 'Autre' : isDe ? 'Sonstiges' : isEs ? 'Otro' : 'Altro'}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{isEn ? 'Message *' : isFr ? 'Message *' : isDe ? 'Nachricht *' : isEs ? 'Mensaje *' : 'Messaggio *'}</label>
                      <textarea required rows={5} value={form.messaggio} onChange={e => setForm({...form, messaggio: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="w-full py-4 rounded-none text-white font-semibold transition-all bg-[#C9A870] hover:bg-[#A8854A]" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                      <i className="fa fa-paper-plane" style={{ marginRight: 8 }}></i>{isEn ? 'Send Message' : isFr ? 'Envoyer le Message' : isDe ? 'Nachricht Senden' : isEs ? 'Enviar mensaje' : 'Invia Messaggio'}
                    </button>
                </form>
              )}
              </div>
            </ScrollAnimation>

            {/* INFO */}
            <ScrollAnimation type="slide-up" delay={200}>
              <div>
                <p className="section-label" style={{ marginBottom: '0.5rem' }}>{isEn ? 'Where We Are' : isFr ? 'Où Nous Sommes' : isDe ? 'Wo Wir Sind' : isEs ? 'Dónde estamos' : 'Dove Siamo'}</p>
                <div className="gold-divider-left" style={{ marginBottom: '1.2rem' }}></div>
                <h2 className="section-title" style={{ marginBottom: '2rem' }}>{isEn ? 'Useful Information' : isFr ? 'Informations Utiles' : isDe ? 'Nützliche Informationen' : isEs ? 'Información útil' : 'Informazioni Utili'}</h2>

              {/* Contatti diretti */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: 'fas fa-map-marker-alt', title: isEn ? 'Address' : isFr ? 'Adresse' : isDe ? 'Adresse' : isEs ? 'Dirección' : 'Indirizzo', lines: ['Via Contessa di Castiglione, 1', '14055 Costigliole d\'Asti (AT) - Italy'], href: 'https://www.google.com/maps/place/Albergo+Langhe+e+Monferrato/@44.7923618,8.1585322,15z/data=!4m13!1m2!2m1!1sVia+Contessa+di+Castiglione+1,+Costigliole+d\'Asti,+Italy!3m9!1s0x47878ca2d313df7d:0xb73fca66300f6dd0!5m2!4m1!1i2!8m2!3d44.7923618!4d8.1775866!15sCjhWaWEgQ29udGVzc2EgZGkgQ2FzdGlnbGlvbmUgMSwgQ29zdGlnbGlvbGUgZCdBc3RpLCBJdGFseVo4IjZ2aWEgY29udGVzc2EgZGkgY2FzdGlnbGlvbmUgMSBjb3N0aWdsaW9sZSBkIGFzdGkgaXRhbHmSAQVob3RlbJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyeGtUbFZVYkVKbFZWRTBZakZ3ZUdGWGJEWlVWbHBhWkZZNE1WWnVZeEFC4AEA-gEFCPwBEEw!16s%2Fg%2F1vs1qrqf?hl=it-IT&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D' },
                  { icon: 'fas fa-phone', title: isEn ? 'Phone' : isFr ? 'Téléphone' : isDe ? 'Telefon' : isEs ? 'Teléfono' : 'Telefono', lines: ['+39 0141 961853'], href: 'tel:+390141961853' },
                  { icon: 'fas fa-envelope', title: 'Email', lines: ['info@hotellanghemonferrato.it'], href: 'mailto:info@hotellanghemonferrato.it' },
                  { icon: 'fab fa-whatsapp', title: 'WhatsApp', lines: [isEn ? 'Chat with us now' : isFr ? 'Discutez avec nous maintenant' : isDe ? 'Chatten Sie Jetzt Mit Uns' : isEs ? 'Chatea con nosotros ahora' : 'Chatta con noi ora'], href: 'https://wa.me/390141961853' },
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
              {isEn ? 'Open in Google Maps' : isFr ? 'Ouvrir dans Google Maps' : isEs ? 'Abrir en Google Maps' : 'Apri in Google Maps'}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
