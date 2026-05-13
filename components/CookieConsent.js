'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#1A1714',
      color: '#FAF7F2',
      padding: '1rem 1.5rem',
      zIndex: 9999,
      borderTop: '3px solid #C9A870',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)',
      fontFamily: 'Lato, sans-serif',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}>
        {/* Content */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <p style={{
            fontSize: '0.95rem',
            lineHeight: 1.5,
            color: 'rgba(250, 247, 242, 0.85)',
            margin: 0,
          }}>
            Utilizziamo i cookie per migliorare la tua esperienza. <a href="/privacy-policy" style={{
              color: '#C9A870',
              textDecoration: 'none',
              fontWeight: 500,
            }}>Informativa Privacy</a>
          </p>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '0.8rem',
          flexShrink: 0,
        }}>
          <button
            onClick={handleAcceptNecessary}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '0.9rem',
              padding: '0.6rem 1.2rem',
              backgroundColor: 'transparent',
              color: '#C9A870',
              border: '1px solid #C9A870',
              borderRadius: '3px',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(201, 168, 112, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Solo Necessari
          </button>
          
          <button
            onClick={handleAcceptAll}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '0.9rem',
              padding: '0.6rem 1.2rem',
              backgroundColor: '#960018',
              color: '#FAF7F2',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A870';
              e.currentTarget.style.color = '#1A1714';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#960018';
              e.currentTarget.style.color = '#FAF7F2';
            }}
          >
            Accetta Tutti
          </button>
        </div>
      </div>
    </div>
  );
}
