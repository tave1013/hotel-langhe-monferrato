'use client';

import { useState } from 'react';
import Link from 'next/link';

const rooms = [
  {
    name: 'Camera Standard',
    desc: 'Le nostre 34 Camere Standard sono ideali per coppie e viaggiatori business in cerca di comfort e tranquillità tra Langhe e Monferrato. Ambienti accoglienti, curati nei dettagli, con doccia idromassaggio per un relax completo dopo una giornata sul territorio.',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&fit=crop',
    price: '120',
    size: '22 m²',
    guests: '2',
    features: ['34 Camere Disponibili', 'Doccia Idromassaggio', 'Ideale per Coppie', 'Free Wi-Fi'],
    href: '/camere/standard',
  },
  {
    name: 'Camera Tripla',
    desc: 'Le 9 Camere Triple sono perfette per famiglie piccole o gruppi di amici. La configurazione letti è flessibile: matrimoniale + singolo oppure tre letti singoli, con vasca idromassaggio per rendere il soggiorno ancora più piacevole.',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80&fit=crop',
    price: '150',
    size: '30 m²',
    guests: '3',
    features: ['9 Camere Disponibili', 'Matrimoniale + Singolo o 3 Letti', 'Vasca Idromassaggio', 'Free Wi-Fi'],
    href: '/camere/tripla',
  },
  {
    name: 'Camera Quadrupla',
    desc: 'Le 2 Camere Quadruple sono pensate per famiglie numerose e piccoli gruppi. Possibilità di scegliere tra 2 letti matrimoniali, 4 letti singoli oppure matrimoniale + 2 singoli, con vasca idromassaggio e spazi comodi per tutti gli ospiti.',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&fit=crop',
    price: '200',
    size: '40 m²',
    guests: '4',
    features: ['2 Camere Disponibili', 'Configurazione Letti Flessibile', 'Vasca Idromassaggio', 'Free Wi-Fi'],
    href: '/camere/quadrupla',
  },
  {
    name: 'Camera Family',
    desc: 'Le 4 Family Room sono camere soppalcate ideali per chi viaggia con bambini: letto matrimoniale al piano superiore e due letti singoli al piano inferiore. Una soluzione pratica e confortevole per vivere le Langhe in famiglia.',
    img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80&fit=crop',
    price: '220',
    size: '45 m²',
    guests: '2+2',
    features: ['4 Camere Disponibili', 'Camera Soppalcata', 'Ideale per Famiglie', 'Colazione per Tutti'],
    href: '/camere/family',
  },
  {
    name: 'Suite Deluxe',
    desc: 'Le 8 Suite sono la scelta ideale per coppie che desiderano più spazio e comfort. Ambienti eleganti, atmosfera riservata e vasca idromassaggio per un soggiorno rilassante nel cuore di Costigliole d\'Asti.',
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80&fit=crop',
    price: '140',
    size: '80 m²',
    guests: '2',
    features: ['8 Suite Disponibili', 'Vasca Idromassaggio', 'Ideale per Coppie', 'Free Wi-Fi'],
    href: '/camere/suite',
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
          <h2 className="section-title mb-4">La Collezione delle Nostre Camere</h2>
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
            58 camere per vivere il territorio in un ambiente confortevole e accogliente, immerso nella natura del Parco della Contessa.
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
                <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#9A8A7A', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <i className="fa fa-user" style={{ color: '#C9A870' }}></i>
                  {rooms[active].guests} Ospiti
                </span>
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
