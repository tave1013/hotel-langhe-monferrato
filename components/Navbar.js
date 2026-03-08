'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// ================================================================
// MENU PRINCIPALE — modifica qui voci e link
// ================================================================
const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Camere & Suite',
    href: '/camere',
    dropdown: [
      { label: 'Camera Standard',   href: '/camere/standard' },
      { label: 'Camera Tripla',     href: '/camere/tripla' },
      { label: 'Camera Quadrupla',  href: '/camere/quadrupla' },
      { label: 'Camera Family',     href: '/camere/family' },
      { label: 'Suite Deluxe',      href: '/camere/suite' },
    ],
  },
  {
    label: 'Sale Meeting',
    href: '/sale-meeting',
  },
  {
    label: 'Territorio',
    href: '/territorio',
    dropdown: [
      { label: 'Asti — Il Medioevo',          href: '/territorio/asti' },
      { label: 'Alba — Capitale del Gusto',   href: '/territorio/alba' },
      { label: 'Cattedrali Sotterranee',      href: '/territorio/cattedrali-sotterranee' },
      { label: 'Caccia al Tartufo',           href: '/territorio/caccia-tartufo' },
      { label: 'Castelli del Monferrato',     href: '/territorio/castelli-monferrato' },
      { label: 'Le Big Bench',                href: '/territorio/big-bench' },
    ],
  },
  { label: 'Offerte',  href: '/offerte' },
  { label: 'Contatti', href: '/contatti' },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(null); // label del dropdown aperto

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(15,13,11,0.97)' : 'linear-gradient(to bottom, rgba(15,13,11,0.82), transparent)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,112,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* ── LOGO ── */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#FAF7F2', display: 'block', lineHeight: 1.1 }}>
            Hotel Langhe
          </span>
          <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A870' }}>
            &amp; Monferrato
          </span>
        </Link>

        {/* ── DESKTOP NAV ── */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="dropdown-parent">
                {/* Cliccando la voce principale va alla pagina listing */}
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'Lato, sans-serif', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.82)', textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: 5, transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
                >
                  {link.label}
                  <i className="fa fa-chevron-down" style={{ fontSize: '0.5rem', marginTop: 1 }}></i>
                </Link>

                {/* Dropdown */}
                <div className="dropdown-menu">
                  {link.dropdown.map((item) => (
                    <Link key={item.href} href={item.href} className="dropdown-item">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'Lato, sans-serif', fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.82)', textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* ── CTA DESKTOP ── */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+390141961853" style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
            <i className="fa fa-phone" style={{ color: '#C9A870', marginRight: 6 }}></i>
            +39 0141 961853
          </a>
          <Link href="/prenota" className="btn-gold">Prenota Ora</Link>
        </div>

        {/* ── HAMBURGER (solo mobile/tablet) ── */}
        <button
          className="flex flex-col gap-[5px] lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Apri menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: 24, height: 1.5, background: '#fff',
              transition: 'all 0.3s',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <div className="lg:hidden" style={{
        background: 'rgba(10,8,6,0.98)',
        maxHeight: menuOpen ? '100vh' : 0,
        overflow: 'hidden',
        transition: 'max-height 0.45s ease',
        borderTop: menuOpen ? '1px solid rgba(201,168,112,0.15)' : 'none',
      }}>
        <div style={{ padding: '1.5rem 1.5rem 2rem' }}>
          {navLinks.map((link) => (
            <div key={link.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.3rem', marginBottom: '0.3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: 'Lato', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', padding: '0.7rem 0', display: 'block' }}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() => setMobileOpen(mobileOpen === link.label ? null : link.label)}
                    style={{ background: 'none', border: 'none', color: '#C9A870', cursor: 'pointer', padding: '0.5rem' }}
                  >
                    <i className={`fa fa-chevron-${mobileOpen === link.label ? 'up' : 'down'}`} style={{ fontSize: '0.65rem' }}></i>
                  </button>
                )}
              </div>
              {link.dropdown && mobileOpen === link.label && (
                <div style={{ paddingLeft: '1rem', borderLeft: '1px solid rgba(201,168,112,0.25)', marginBottom: '0.5rem' }}>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setMenuOpen(false); setMobileOpen(null); }}
                      style={{ display: 'block', fontFamily: 'Lato', fontSize: '0.74rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', padding: '0.45rem 0' }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/prenota" className="btn-gold" style={{ marginTop: '1.2rem', display: 'block', textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
            Prenota Ora
          </Link>
        </div>
      </div>
    </header>
  );
}
