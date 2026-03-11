import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { guide } from '@/lib/territorioData';
import SchemaOrg from '@/components/SchemaOrg';

export const metadata = {
  title: 'Cosa Vedere nelle Langhe | Guida Territorio e Attrazioni',
  description: 'Scopri Asti, Alba e il tartufo, Cattedrali Sotterranee di Canelli, castelli del Monferrato e Big Bench. Mini guide per il tuo soggiorno nelle Langhe.',
  openGraph: {
    title: 'Territorio Langhe e Monferrato | Guide e Attrazioni',
    description: 'Guide pratiche per esplorare Langhe e Monferrato: arte, vino, gastronomia e natura.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://hotel-langhe-monferrato.vercel.app/territorio',
    images: [{ url: '/foto/alba.webp', width: 1200, height: 630 }],
    updatedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Territorio: Langhe & Monferrato',
    description: 'Mini guide pratiche per esplorare le Langhe e il Monferrato.',
    images: ['/foto/alba.webp'],
  },
};

export default function TerritorioPage() {
  return (
    <>
      <SchemaOrg />
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ height: '58vh', minHeight: 400 }}>
        <div className="absolute inset-0">
          <Image
            src="/foto/alba.webp"
            alt="Paesaggio Langhe e Monferrato"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.55), rgba(10,8,6,0.72))' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto" style={{ margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '0.7rem' }}>Esplora la Nostra Terra</p>
          <div className="gold-divider" style={{ marginBottom: '1.3rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.12, marginBottom: '1rem' }}>
            Territorio: Langhe &amp; Monferrato
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#fff', fontStyle: 'italic', maxWidth: 580, lineHeight: 1.7 }}>
            Sei mini guide scritte con cura per farti scoprire uno dei territori più straordinari d&apos;Italia — Patrimonio UNESCO, vini leggendari, tartufi, castelli e panchine giganti.
          </p>
        </div>
      </section>

      {/* ===== INTRO STRIP ===== */}
      <div style={{ background: '#1A1714', padding: '1.8rem 1.5rem' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: 'fa-map-marker-alt', num: '6', label: 'Mini Guide' },
            { icon: 'fa-award', num: 'UNESCO', label: 'Patrimonio Mondiale' },
            { icon: 'fa-wine-glass-alt', num: '19', label: 'DOCG Riconosciute' },
            { icon: 'fa-route', num: '< 40km', label: 'Raggio dall\'Hotel' },
          ].map((s) => (
            <div key={s.label} style={{ padding: '0.5rem' }}>
              <i className={`fa ${s.icon}`} style={{ color: '#C9A870', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}></i>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#FAF7F2', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: 'Lato', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CARD GRID ===== */}
      <section style={{ background: '#FAF7F2', padding: '80px 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="section-label">Le Nostre Mini Guide</p>
            <div className="gold-divider" style={{ marginBottom: '1rem' }}></div>
            <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto' }}>
              Esperienze e Destinazioni da Non Perdere
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: '0.85rem', color: '#9A8A7A', maxWidth: 580, margin: '1rem auto 0', lineHeight: 1.8 }}>
              Le Langhe e il Monferrato offrono esperienze per ogni tipo di viaggiatore. Abbiamo selezionato le sei tappe che secondo noi non si possono perdere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guide.map((g) => (
              <Link key={g.slug} href={`/territorio/${g.slug}`} style={{ textDecoration: 'none' }} className="card-hover group">
                <div style={{ background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>

                  {/* Image */}
                  <div className="img-overlay" style={{ height: 240, position: 'relative', flexShrink: 0 }}>
                    <Image
                      src={g.img}
                      alt={g.nome}
                      fill
                      quality={80}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    {/* Distance */}
                    <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(201,168,112,0.9)', padding: '0.28rem 0.7rem', zIndex: 10 }}>
                      <span className="text-[0.74rem] md:text-[0.6rem]" style={{ fontFamily: 'Lato', fontWeight: 700, color: '#fff', letterSpacing: '0.05em', textAlign: 'center', display: 'block' }}>{g.distanzaDallHotel}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.4rem 1.6rem 1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#2C2520', marginBottom: '0.3rem', fontWeight: 500 }}>
                      {g.nome}
                    </h2>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', color: '#C9A870', fontStyle: 'italic', marginBottom: '0.9rem' }}>
                      {g.sottotitolo}
                    </p>
                    <p style={{ fontFamily: 'Lato', fontSize: '0.8rem', color: '#6B5E52', lineHeight: 1.75, marginBottom: '1.2rem', flexGrow: 1 }}>
                      {g.descrizioneBreve.slice(0, 140)}…
                    </p>

                    {/* Meta info */}
                    <div style={{ display: 'flex', gap: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(201,168,112,0.12)', marginBottom: '1.2rem' }}>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.66rem', color: '#9A8A7A', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <i className="fa fa-clock" style={{ color: '#C9A870', fontSize: '0.6rem' }}></i>
                        {g.tempoVisita}
                      </span>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.66rem', color: '#9A8A7A', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <i className="fa fa-map-marker-alt" style={{ color: '#C9A870', fontSize: '0.6rem' }}></i>
                        {g.distanzaDallHotel}
                      </span>
                    </div>

                    <span style={{ fontFamily: 'Lato', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A870', display: 'flex', alignItems: 'center', gap: 7 }}>
                      Leggi la Guida
                      <i className="fa fa-arrow-right" style={{ fontSize: '0.58rem', transition: 'transform 0.2s' }}></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA PRENOTAZIONE ===== */}
      <section className="relative overflow-hidden" style={{ padding: '90px 0' }}>
        <div className="absolute inset-0">
          <img src="/foto/alba.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.80)' }} />
        </div>
        <div className="relative text-center px-6 max-w-3xl mx-auto" style={{ margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '0.7rem' }}>Il Tuo Quartier Generale</p>
          <div className="gold-divider" style={{ marginBottom: '1.4rem' }}></div>
          <h2 className="section-title-light" style={{ marginBottom: '1rem' }}>
            Esplora le Langhe dal Nostro Hotel
          </h2>
          <p style={{ fontFamily: 'Lato', fontSize: 'clamp(0.95rem, 2.2vw, 1rem)', color: '#FAF7F2', lineHeight: 1.85, marginBottom: '2.2rem', maxWidth: 560, margin: '0 auto 2.2rem' }}>
            La posizione dell&apos;hotel ti mette a meno di 40 minuti da tutte le destinazioni di questa guida. Prenota il tuo soggiorno e lascia che ti aiutiamo a costruire l&apos;itinerario perfetto.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/prenota" className="btn-gold" style={{ padding: '1rem 2.5rem' }}>
              Prenota il Tuo Soggiorno
            </Link>
            <Link href="/camere" className="btn-outline-white" style={{ padding: '1rem 2.5rem' }}>
              Scopri le Camere
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
