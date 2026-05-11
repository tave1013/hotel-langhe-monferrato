'use client';

import { useEffect, useRef, useState } from 'react';

const languages = [
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
];

export default function LanguageFlags({ mobile = false }) {
  const [active, setActive] = useState('it');
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('site_lang');
    if (saved && languages.some((l) => l.code === saved)) setActive(saved);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const switchLanguage = (code) => {
    setActive(code);
    localStorage.setItem('site_lang', code);
    window.dispatchEvent(new CustomEvent('site-language-change', { detail: code }));
    setOpen(false);
  };

  const activeLang = languages.find((l) => l.code === active) || languages[0];
  const otherLanguages = languages.filter((l) => l.code !== activeLang.code);

  if (mobile) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginTop: 6,
          flexWrap: 'wrap',
        }}
        aria-label="Selettore lingua"
      >
        {languages.map((lang) => {
          const isActive = lang.code === active;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => switchLanguage(lang.code)}
              title={lang.label}
              aria-label={lang.label}
              style={{
                background: 'transparent',
                border: isActive ? '1px solid rgba(201,168,112,0.8)' : '1px solid transparent',
                borderRadius: 6,
                cursor: 'pointer',
                fontSize: '1.08rem',
                lineHeight: 1,
                padding: '4px 6px',
                boxShadow: isActive ? '0 0 10px rgba(201,168,112,0.35)' : 'none',
                opacity: isActive ? 1 : 0.85,
              }}
            >
              {lang.flag}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      style={{
        position: 'relative',
        display: 'inline-flex',
        marginTop: mobile ? 6 : 0,
      }}
      aria-label="Selettore lingua"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title={activeLang.label}
        aria-label={activeLang.label}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: mobile ? '1.08rem' : '0.95rem',
          lineHeight: 1,
          padding: mobile ? '2px 2px' : '1px 2px',
          color: '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span>{activeLang.flag}</span>
        <i className={`fa fa-chevron-${open ? 'up' : 'down'}`} style={{ fontSize: '0.55rem', color: '#C9A870' }}></i>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: mobile ? 'auto' : 0,
            left: mobile ? 0 : 'auto',
            background: 'rgba(15,13,11,0.98)',
            border: '1px solid rgba(201,168,112,0.35)',
            minWidth: mobile ? 130 : 116,
            zIndex: 300,
            padding: '0.35rem',
            boxShadow: '0 12px 28px rgba(0,0,0,0.35)',
          }}
        >
          {otherLanguages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => switchLanguage(lang.code)}
              title={lang.label}
              aria-label={lang.label}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: mobile ? '1.03rem' : '0.9rem',
                padding: '0.35rem 0.45rem',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#fff',
              }}
            >
              <span>{lang.flag}</span>
              <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
                {lang.code}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
