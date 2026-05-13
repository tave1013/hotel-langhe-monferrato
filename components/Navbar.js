'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageFlags from '@/components/LanguageFlags';
import useSiteLanguage from '@/hooks/useSiteLanguage';
import { t } from '@/lib/i18n';

// ================================================================
// MENU PRINCIPALE — modifica qui voci e link
// ================================================================
const navLinks = [
  { key: 'home', href: '/' },
  {
    key: 'roomsSuite',
    href: '/camere',
    dropdown: [
      { key: 'single', href: '/camere/singola' },
      { key: 'double', href: '/camere/standard' },
      { key: 'triple', href: '/camere/tripla' },
      { key: 'quadruple', href: '/camere/quadrupla' },
      { key: 'suite', href: '/camere/suite' },
    ],
  },
  {
    key: 'meetingRooms',
    href: '/sale-meeting',
  },
  {
    key: 'territory',
    href: '/territorio',
    dropdown: [
      { key: 'asti', href: '/territorio/asti' },
      { key: 'alba', href: '/territorio/alba' },
      { key: 'cathedrals', href: '/territorio/cattedrali-sotterranee' },
      { key: 'truffle', href: '/territorio/caccia-al-tartufo' },
      { key: 'castles', href: '/territorio/castelli-del-monferrato' },
      { key: 'bigBench', href: '/territorio/big-bench' },
      { key: 'nizza', href: '/territorio/nizza-e-barbera' },
    ],
  },
  { key: 'contacts', href: '/contatti' },
];

export default function Navbar({ forceDark = false }) {
  const lang = useSiteLanguage();
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(null); // label del dropdown aperto

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = forceDark || scrolled || menuOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isDark ? 'rgba(15,13,11,0.97)' : 'linear-gradient(to bottom, rgba(15,13,11,0.82), transparent)',
        backdropFilter: isDark ? 'blur(12px)' : 'none',
        borderBottom: isDark ? '1px solid rgba(201,168,112,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* ── LOGO ── */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/foto/logo_hotel_langhe_monferrato_asti_2026.webp"
            alt="Hotel Langhe & Monferrato"
            width={140}
            height={60}
            style={{ height: 'auto', width: 'auto', maxHeight: 50 }}
            priority
          />
        </Link>

        {/* ── DESKTOP NAV ── */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const label = t(lang, `nav.${link.key}`);
            return link.dropdown ? (
              <div key={link.key} className="dropdown-parent">
                {/* Cliccando la voce principale va alla pagina listing */}
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'Lato, sans-serif', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.82)', textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: 5, transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--button-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
                >
                  {label}
                  <i className="fa fa-chevron-down" style={{ fontSize: '0.5rem', marginTop: 1 }}></i>
                </Link>

                {/* Dropdown */}
                <div className="dropdown-menu">
                  {link.dropdown.map((item) => (
                    <Link key={item.href} href={item.href} className="dropdown-item">
                      {link.key === 'territory'
                        ? t(lang, `nav.territoryItems.${item.key}`)
                        : t(lang, `nav.rooms.${item.key}`)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div key={link.key} style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'Lato, sans-serif', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.82)', textDecoration: 'none', transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--button-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
                >
                  {label}
                </Link>
                {link.key === 'contacts' && <LanguageFlags />}
              </div>
            );
          })}
        </nav>

        {/* ── CTA DESKTOP ── */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+390141961853" style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
            <i className="fa fa-phone" style={{ color: '#C9A870', marginRight: 6 }}></i>
            +39 0141 961853
          </a>
          <Link href="/prenota" className="btn-gold">{t(lang, 'nav.bookNow')}</Link>
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
        borderTop: menuOpen ? '1px solid rgba(150,0,24,0.28)' : 'none',
      }}>
        <div style={{ padding: '1.5rem 1.5rem 2rem' }}>
          {navLinks.map((link) => {
            const label = t(lang, `nav.${link.key}`);
            return (
            <div key={link.key} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.3rem', marginBottom: '0.3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: 'Lato', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', padding: '0.7rem 0', display: 'block' }}
                >
                  {label}
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() => setMobileOpen(mobileOpen === link.key ? null : link.key)}
                    style={{ background: 'none', border: 'none', color: '#C9A870', cursor: 'pointer', padding: '0.5rem' }}
                  >
                    <i className={`fa fa-chevron-${mobileOpen === link.key ? 'up' : 'down'}`} style={{ fontSize: '0.65rem' }}></i>
                  </button>
                )}
              </div>
              {link.dropdown && mobileOpen === link.key && (
                <div style={{ paddingLeft: '1rem', borderLeft: '1px solid rgba(150,0,24,0.35)', marginBottom: '0.5rem' }}>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setMenuOpen(false); setMobileOpen(null); }}
                      style={{ display: 'block', fontFamily: 'Lato', fontSize: '0.86rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', padding: '0.45rem 0' }}
                    >
                      {link.key === 'territory'
                        ? t(lang, `nav.territoryItems.${item.key}`)
                        : t(lang, `nav.rooms.${item.key}`)}
                    </Link>
                  ))}
                </div>
              )}
              {link.key === 'contacts' && (
                <div style={{ paddingLeft: '0.05rem', paddingBottom: '0.65rem' }}>
                  <LanguageFlags mobile />
                </div>
              )}
            </div>
          );})}
          <Link href="/prenota" className="btn-gold" style={{ marginTop: '1.2rem', display: 'block', textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
            {t(lang, 'nav.bookNow')}
          </Link>
        </div>
      </div>
    </header>
  );
}
