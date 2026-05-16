'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';
import useSiteLanguage from '@/hooks/useSiteLanguage';
import { t } from '@/lib/i18n';

const rooms = [
  {
    id: 'single',
    img: '/foto/suite.webp',
    price: '90',
    size: '22 m²',
    guests: '1',
    href: '/camere/singola',
  },
  {
    id: 'double',
    img: '/foto/Camera matrimoniale (2).webp',
    price: '120',
    size: '22 m²',
    guests: '2',
    href: '/camere/standard',
  },
  {
    id: 'triple',
    img: '/foto/Camera-tripla.webp',
    price: '150',
    size: '30 m²',
    guests: '3',
    href: '/camere/tripla',
  },
  {
    id: 'quadruple',
    img: '/foto/quadrupla.webp',
    price: '200',
    size: '40 m²',
    guests: '4',
    href: '/camere/quadrupla',
  },
  {
    id: 'suite',
    img: '/foto/suite.webp',
    price: '140',
    size: '80 m²',
    guests: '2',
    href: '/camere/suite',
  },
];

export default function Rooms() {
  const [active, setActive] = useState(0);
  const lang = useSiteLanguage();

  const activeRoom = rooms[active];
  const roomName = t(lang, `roomsHome.rooms.${activeRoom.id}.name`);
  const roomDesc = t(lang, `roomsHome.rooms.${activeRoom.id}.desc`);
  const roomFeatures = t(lang, `roomsHome.rooms.${activeRoom.id}.features`);

  return (
    <section style={{ background: '#F5EFE4', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <ScrollAnimation type="fade-in">
          <div className="text-center mb-14">
            <p className="section-label mb-3">{t(lang, 'roomsHome.label')}</p>
            <div className="gold-divider mb-5"></div>
            <h2 className="section-title mb-4">{t(lang, 'roomsHome.title')}</h2>
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
            {t(lang, 'roomsHome.intro')}
          </p>
        </div>
        </ScrollAnimation>

        {/* ROOM CARD — SPLIT LAYOUT */}
        <ScrollAnimation type="slide-up">
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
              <Image
                key={active}
                src={rooms[active].img}
                alt={roomName}
                fill
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
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
                <span style={{ fontFamily: 'Lato', fontSize: '0.65rem', color: '#C9A870', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 3 }}>{t(lang, 'roomsHome.startingFrom')}</span>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#fff' }}>€{rooms[active].price}</span>
                <span style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}> {t(lang, 'roomsHome.perNight')}</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              {/* TABS */}
              <div className="flex gap-1 mb-8 flex-wrap">
                {rooms.map((r, i) => (
                  <button
                    key={r.id}
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
                      background: i === active ? 'var(--button-gold)' : 'transparent',
                      color: i === active ? '#fff' : '#9A8A7A',
                      borderBottom: i === active ? 'none' : '1px solid rgba(201,168,112,0.25)',
                    }}
                  >
                    {t(lang, `roomsHome.rooms.${r.id}.tab`)}
                  </button>
                ))}
              </div>

              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.95rem',
                  color: '#2C2520',
                  marginBottom: '0.8rem',
                  fontWeight: 500,
                }}
              >
                {roomName}
              </h3>

              {/* Meta */}
              <div className="flex gap-4 mb-5">
                <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#9A8A7A', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <i className="fa fa-user" style={{ color: '#C9A870' }}></i>
                  {rooms[active].guests} {t(lang, 'roomsHome.guests')}
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'Lato',
                  fontSize: '1.02rem',
                  color: '#6B5E52',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}
              >
                {roomDesc}
              </p>

              {/* FEATURES */}
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {roomFeatures.map((f) => (
                  <li key={f} style={{ fontFamily: 'Lato', fontSize: '0.78rem', color: '#4A3D33', display: 'flex', alignItems: 'center', gap: 7 }}>
                    <i className="fa fa-check" style={{ color: '#C9A870', fontSize: '0.65rem' }}></i>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/prenota" className="btn-gold text-center" style={{ padding: '0.75rem 1.4rem', fontSize: '0.62rem' }}>
                  <span>{t(lang, 'roomsHome.bookNow')}</span>
                </Link>
                <Link href={rooms[active].href} className="btn-outline-gold text-center" style={{ padding: '0.75rem 1.4rem', fontSize: '0.62rem' }}>
                  {t(lang, 'roomsHome.details')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
