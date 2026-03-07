'use client';

import { useState } from 'react';
import Link from 'next/link';

const rooms = [
  {
    name: 'Camera Classic',
    desc: 'Eleganza essenziale con vista sui vigneti. Arredata con materiali naturali e luce morbida, per un risveglio che profuma di Langhe.',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&fit=crop',
    price: '180',
    size: '28 m²',
    guests: '2',
    features: ['Letto King Size', 'Vista Vigneti', 'Colazione Inclusa', 'Free Wi-Fi'],
    href: '/camere/classic',
  },
  {
    name: 'Camera Superior',
    desc: 'Spazi più ampi, angolo lettura e terrazza privata. Il comfort di sentirsi a casa, con il lusso di un hotel cinque stelle.',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80&fit=crop',
    price: '240',
    size: '38 m²',
    guests: '2',
    features: ['Terrazza Privata', 'Vasca Freestanding', 'Minibar Curato', 'Prodotti Artigianali'],
    href: '/camere/superior',
  },
  {
    name: 'Suite Junior',
    desc: 'Una suite che è un inno al territorio piemontese. Travi a vista, pietra locale e ogni comfort pensato per coppie esigenti.',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&fit=crop',
    price: '340',
    size: '55 m²',
    guests: '2-3',
    features: ['Soggiorno Separato', 'Jacuzzi Privata', 'Champagne al Arrivo', 'Late Check-out'],
    href: '/camere/suite-junior',
  },
  {
    name: 'Suite Deluxe',
    desc: 'L\'apice dell\'ospitalità piemontese. Panorama a 180° sulle colline, angolo cottura, spa privata e servizio butler dedicato.',
    img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80&fit=crop',
    price: '520',
    size: '80 m²',
    guests: '2-4',
    features: ['Spa Privata', 'Terrazza 50 m²', 'Butler Dedicato', 'Cena Gourmet Inclusa'],
    href: '/camere/suite-deluxe',
  },
];

export default function Rooms() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: '#F5EFE4', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Camere & Suite</p>
          <div className="gold-divider mb-5"></div>
          <h2 className="section-title mb-4">La Collezione delle Nostre Suite</h2>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.1rem',
              color: '#6B5E52',
              maxWidth: 560,
              margin: '0 auto',
              fontStyle: 'italic',
              lineHeight: 1.7,
            }}
          >
            Ogni stanza è un capitolo della storia delle Langhe, raccontato attraverso materiali pregiati e dettagli artigianali.
          </p>
        </div>

        {/* ROOM CARD — SPLIT LAYOUT */}
        <div
          style={{
            background: '#fff',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}
        >
          <div className="grid lg:grid-cols-2">
            {/* IMAGE */}
            <div className="relative overflow-hidden" style={{ minHeight: 460 }}>
              <img
                key={active}
                src={rooms[active].img}
                alt={rooms[active].name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ animation: 'fadeIn 0.6s ease forwards' }}
              />
              {/* PRICE TAG */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  background: 'rgba(10,8,6,0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.8rem 1.4rem',
                }}
              >
                <span style={{ fontFamily: 'Lato', fontSize: '0.65rem', color: '#C9A870', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 3 }}>A partire da</span>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#fff' }}>€{rooms[active].price}</span>
                <span style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}> / notte</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              {/* TABS */}
              <div className="flex gap-1 mb-8 flex-wrap">
                {rooms.map((r, i) => (
                  <button
                    key={r.name}
                    onClick={() => setActive(i)}
                    style={{
                      fontFamily: 'Lato',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.45rem 1rem',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                      background: i === active ? '#C9A870' : 'transparent',
                      color: i === active ? '#fff' : '#9A8A7A',
                      borderBottom: i === active ? 'none' : '1px solid rgba(201,168,112,0.25)',
                    }}
                  >
                    {r.name.replace('Camera ', '').replace('Suite ', 'S. ')}
                  </button>
                ))}
              </div>

              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.9rem',
                  color: '#2C2520',
                  marginBottom: '0.8rem',
                  fontWeight: 500,
                }}
              >
                {rooms[active].name}
              </h3>

              {/* Meta */}
              <div className="flex gap-4 mb-5">
                {[
                  { icon: 'fa-expand', val: rooms[active].size },
                  { icon: 'fa-user', val: `${rooms[active].guests} Ospiti` },
                ].map((m) => (
                  <span key={m.icon} style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#9A8A7A', display: 'flex', alignItems: 'center', gap: 5 }}>
                    <i className={`fa ${m.icon}`} style={{ color: '#C9A870' }}></i>
                    {m.val}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontFamily: 'Lato',
                  fontSize: '0.88rem',
                  color: '#6B5E52',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}
              >
                {rooms[active].desc}
              </p>

              {/* FEATURES */}
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {rooms[active].features.map((f) => (
                  <li key={f} style={{ fontFamily: 'Lato', fontSize: '0.78rem', color: '#4A3D33', display: 'flex', alignItems: 'center', gap: 7 }}>
                    <i className="fa fa-check" style={{ color: '#C9A870', fontSize: '0.65rem' }}></i>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <Link href="/prenota" className="btn-gold">
                  <span>Prenota Ora</span>
                </Link>
                <Link href={rooms[active].href} className="btn-outline-gold">
                  Dettagli
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
