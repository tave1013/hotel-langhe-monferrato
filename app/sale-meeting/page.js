import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { sale } from '@/lib/saleMeetingData';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata = {
  title: 'Sale Meeting & Congressi | Hotel Langhe & Monferrato',
  description: 'Tre sale modulari per eventi aziendali, congressi e banchetti nelle Langhe. Tecnologia 4K, catering gourmet, Wi-Fi fibra. Preventivo personalizzato.',
  keywords: 'sale meeting langhe, hotel congressi piemonte, sala conferenze alba asti, eventi aziendali langhe monferrato',
  openGraph: {
    title: 'Sale Meeting & Congressi | Hotel Langhe & Monferrato',
    description: 'Tre sale modulari per eventi aziendali, congressi e banchetti nelle Langhe.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://hotel-langhe-monferrato.vercel.app/sale-meeting',
    images: [{ url: '/foto/hotel_langhe_sala_meeting_alfieri.webp', width: 1200, height: 630 }],
    updatedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sale Meeting & Congressi',
    description: 'Eventi aziendali e congressi nelle Langhe.',
    images: ['/foto/hotel_langhe_sala_meeting_alfieri.webp'],
  },
};

export default function SaleMeetingPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ height: '58vh', minHeight: 400 }}>
        <div className="absolute inset-0">
          <Image src="/foto/hotel_langhe_sala_meeting_alfieri.webp" alt="Sale Meeting Hotel Langhe" fill priority quality={85} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.55), rgba(10,8,6,0.75))' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto" style={{ margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '0.7rem' }}>Business & Congressi</p>
          <div className="gold-divider" style={{ marginBottom: '1.3rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.12, marginBottom: '1rem' }}>
            Sale Meeting & Congressi
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#fff', fontStyle: 'italic', maxWidth: 580, lineHeight: 1.7 }}>
            Organizza il tuo evento nelle Langhe UNESCO con sale modulari e servizi dedicati per rendere ogni occasione indimenticabile.
          </p>
        </div>
      </section>

      {/* STRIP KPI */}
      <div style={{ background: '#1A1714', padding: '1.8rem 1.5rem', borderBottom: '1px solid rgba(201,168,112,0.1)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: 'fa-th-large', num: '3', label: 'Sale Modulari' },
            { icon: 'fa-users', num: '400', label: 'Posti Max' },
            { icon: 'fa-wifi', num: 'Free', label: 'Nella Struttura' },
            { icon: 'fa-headset', num: '24/7', label: 'Supporto Tecnico' },
          ].map((s) => (
            <div key={s.label} style={{ padding: '0.5rem' }}>
              <i className={`fa ${s.icon}`} style={{ color: '#C9A870', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}></i>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#FAF7F2', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: 'Lato', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SALE CARDS */}
      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p className="section-label">Le Nostre Sale</p>
            <div className="gold-divider" style={{ marginBottom: '1rem' }}></div>
            <h2 className="section-title">Tre Spazi, Mille Possibilità</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {sale.map((sala, i) => (
              <ScrollAnimation key={sala.slug} type="slide-up" delay={i * 150}>
                <div id={sala.slug} style={{ background: '#fff', overflow: 'hidden', scrollMarginTop: 110 }} className="card-hover md:grid md:grid-cols-2">
                  <div className={`${i % 2 === 0 ? 'md:order-1' : 'md:order-2'} h-[220px] sm:h-[300px] md:h-full`} style={{ width: '100%', overflow: 'hidden' }}>
                  <img src={sala.img} alt={sala.nome} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }} />
                </div>
                <div className={i % 2 === 0 ? 'md:order-2' : 'md:order-1'} style={{ padding: 'clamp(1.1rem, 3vw, 2rem)' }}>
                  <p className="section-label" style={{ marginBottom: '0.5rem' }}>Sale Meeting & Congressi</p>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.45rem, 2.6vw, 1.9rem)', fontWeight: 500, color: '#2C2520', marginBottom: '0.45rem' }}>{sala.nome}</h2>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontStyle: 'italic', color: '#C9A870', marginBottom: '0.85rem' }}>{sala.sottotitolo}</p>
                  <p style={{ fontFamily: 'Lato', fontSize: '0.92rem', color: '#6B5E52', lineHeight: 1.7, marginBottom: '1rem' }}>{sala.tagline}</p>

                  {/* Info rapide */}
                  <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 8, marginBottom: '1rem' }}>
                    {sala.specs.map((spec) => (
                      <div key={spec.label} style={{ border: '1px solid rgba(201,168,112,0.18)', padding: '0.65rem 0.7rem' }}>
                        <i className={`fa ${spec.icon}`} style={{ color: '#C9A870', fontSize: '0.74rem', marginRight: 6 }}></i>
                        <span style={{ fontFamily: 'Lato', fontSize: '0.6rem', color: '#9A8A7A', letterSpacing: '0.09em', textTransform: 'uppercase' }}>{spec.label}</span>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.88rem', color: '#4A3D33', marginTop: 5 }}>{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Configurazioni pill */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1rem' }}>
                    {sala.configurazioni.map((c) => (
                      <div key={c.tipo} style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(201,168,112,0.08)', border: '1px solid rgba(201,168,112,0.2)', padding: '0.28rem 0.7rem' }}>
                        <i className={`fa ${c.icon}`} style={{ color: '#C9A870', fontSize: '0.58rem' }}></i>
                        <span style={{ fontFamily: 'Lato', fontSize: '0.76rem', color: '#6B5E52' }}>{c.tipo} {c.posti} pax</span>
                      </div>
                    ))}
                  </div>

                  {/* Dotazioni */}
                  <div className="grid md:grid-cols-2 gap-1" style={{ marginBottom: '1rem' }}>
                    {sala.dotazioni.slice(0, 6).map((dotazione) => (
                      <div key={dotazione} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '0.2rem 0', fontFamily: 'Lato', fontSize: '0.9rem', color: '#4A3D33' }}>
                        <i className="fa fa-check" style={{ color: '#C9A870', fontSize: '0.58rem', marginTop: 4, flexShrink: 0 }}></i>
                        {dotazione}
                      </div>
                    ))}
                  </div>

                  {sala.dotazioni.length > 6 && (
                    <p style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: '#9A8A7A', marginBottom: '1rem' }}>
                      + altre dotazioni disponibili su richiesta.
                    </p>
                  )}

                  {sala.nota && (
                    <div style={{ borderLeft: '2px solid #C9A870', paddingLeft: '0.8rem', marginBottom: '1rem' }}>
                      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.08rem', color: '#6B5E52', fontStyle: 'italic', lineHeight: 1.6 }}>
                        {sala.nota}
                      </p>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                    <Link href="/contatti" className="btn-gold">Richiedi Preventivo</Link>
                  </div>
                </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI INCLUSI */}
      <section style={{ background: '#1A1714', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>Tutto Incluso</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h2 className="section-title-light" style={{ marginBottom: '3rem' }}>I Servizi per il Tuo Evento</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: 'fa-wifi', label: 'Wi-Fi Free' },
              { icon: 'fa-video', label: 'Proiezione 4K' },
              { icon: 'fa-coffee', label: 'Coffee Break Gourmet' },
              { icon: 'fa-utensils', label: 'Catering & Cena Gala' },
              { icon: 'fa-parking', label: 'Parcheggio Riservato' },
              { icon: 'fa-headset', label: 'Supporto Tecnico H24' },
            ].map((s) => (
              <div key={s.label} style={{ padding: '1.5rem 1rem', border: '1px solid rgba(201,168,112,0.12)', textAlign: 'center' }}>
                <i className={`fa ${s.icon}`} style={{ color: '#C9A870', fontSize: '1.4rem', display: 'block', marginBottom: '0.8rem' }}></i>
                <div style={{ fontFamily: 'Lato', fontSize: '0.82rem', color: 'rgba(245,239,228,0.55)', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ padding: '90px 0' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600&q=75&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.8)' }} />
        </div>
        <div className="relative text-center px-6 max-w-2xl mx-auto">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>Organizziamo il Tuo Evento</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h2 className="section-title-light" style={{ marginBottom: '1rem' }}>Richiedi un Preventivo Personalizzato</h2>
          <p style={{ fontFamily: 'Lato', fontSize: 'clamp(0.95rem, 2.2vw, 1rem)', color: '#FAF7F2', lineHeight: 1.8, marginBottom: '2rem' }}>
            Il nostro team eventi risponde entro 24 ore con una proposta su misura per il tuo budget e le tue esigenze.
          </p>
          <Link href="/contatti" className="btn-gold" style={{ padding: '1rem 2.8rem' }}>Richiedi Preventivo</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
