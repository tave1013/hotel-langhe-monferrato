import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { rooms } from '@/lib/roomsData';

export const metadata = {
  title: 'Camere & Suite | Hotel Langhe & Monferrato',
  description: 'Scopri le nostre 5 tipologie di camere: Standard, Tripla, Quadrupla, Family e Suite Deluxe. Ogni camera è un\'esperienza unica nel cuore delle Langhe.',
};

export default function CamerePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ height: '52vh', minHeight: 360 }}>
        <div className="absolute inset-0">
          <Image
            src="/foto/Camere.webp"
            alt="Camere Hotel Langhe"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.58)' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>La Nostra Collezione</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.15 }}>
            Camere &amp; Suite
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#fff', fontStyle: 'italic', marginTop: '0.8rem', maxWidth: 500 }}>
            Ogni stanza racconta la storia delle Langhe attraverso materiali pregiati e cura artigianale.
          </p>
        </div>
      </section>

      {/* ROOMS GRID */}
      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Link key={room.slug} href={`/camere/${room.slug}`} style={{ textDecoration: 'none' }} className="card-hover group">
                <div style={{ background: '#fff', overflow: 'hidden' }}>
                  {/* Image */}
                  <div className="img-overlay" style={{ height: 255 }}>
                    <Image
                      src={room.heroImg}
                      alt={room.name}
                      fill
                      quality={80}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    {/* Price */}
                    <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(10,8,6,0.82)', padding: '0.45rem 1rem', zIndex: 10 }}>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.58rem', color: '#C9A870', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>da</span>
                      <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#fff' }}>€{room.price}</span>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.6rem', color: 'rgba(255,255,255,0.45)' }}>/notte</span>
                    </div>
                  </div>
                  {/* Info */}
                  <div style={{ padding: '1.3rem 1.5rem 1.5rem' }}>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#2C2520', marginBottom: '0.35rem', fontWeight: 500 }}>{room.name}</h2>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.92rem', color: '#9A8A7A', fontStyle: 'italic', marginBottom: '1rem' }}>{room.tagline}</p>
                    <div style={{ display: 'flex', gap: '1.1rem', flexWrap: 'wrap', marginBottom: '1.1rem' }}>
                      {room.specs.slice(0, 3).map((s) => (
                        <span key={s.label} style={{ fontFamily: 'Lato', fontSize: '0.7rem', color: '#6B5E52', display: 'flex', alignItems: 'center', gap: 5 }}>
                          <i className={`fa ${s.icon}`} style={{ color: '#C9A870', fontSize: '0.62rem' }}></i>
                          {s.value}
                        </span>
                      ))}
                    </div>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A870', display: 'flex', alignItems: 'center', gap: 6 }}>
                      Scopri la Camera <i className="fa fa-arrow-right" style={{ fontSize: '0.58rem' }}></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
