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

  const handleManage = () => {
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
      padding: '2rem 1.5rem',
      zIndex: 9999,
      borderTop: '3px solid #C9A870',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
      fontFamily: 'Lato, sans-serif',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '2rem',
        flexWrap: 'wrap',
      }}>
        {/* Content */}
        <div style={{ flex: '1', minWidth: '280px' }}>
          <p style={{
            fontSize: '0.95rem',
            lineHeight: 1.7,
            color: 'rgba(250, 247, 242, 0.9)',
            margin: '0 0 1rem 0',
          }}>
            Noi e i nostri partner utilizziamo cookie tecnici, necessari al funzionamento del sito, e cookie di profilazione e marketing — inclusi Meta Pixel, Google Analytics, Google Ads e Microsoft Clarity — per analizzare la navigazione, mostrarti contenuti personalizzati e misurare le performance delle nostre campagne pubblicitarie.
          </p>
          <p style={{
            fontSize: '0.9rem',
            lineHeight: 1.6,
            color: 'rgba(250, 247, 242, 0.8)',
            margin: '0.8rem 0 0 0',
          }}>
            Puoi accettare tutti i cookie, rifiutarli o gestire le tue preferenze in qualsiasi momento. Per saperne di più leggi la nostra{' '}
            <a href="/privacy-policy" style={{
              color: '#C9A870',
              textDecoration: 'none',
              fontWeight: 600,
              borderBottom: '1px solid #C9A870',
            }}>
              Cookie Policy
            </a>
            {' '}e la{' '}
            <a href="/privacy-policy" style={{
              color: '#C9A870',
              textDecoration: 'none',
              fontWeight: 600,
              borderBottom: '1px solid #C9A870',
            }}>
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexShrink: 0,
          alignItems: 'center',
          marginTop: '0.5rem',
        }}>
          <button
            onClick={handleManage}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '0.95rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#C9A870',
              color: '#1A1714',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(201, 168, 112, 0.85)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A870';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Rifiuta
          </button>
          
          <button
            onClick={handleAcceptAll}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '0.95rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#C9A870',
              color: '#1A1714',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(201, 168, 112, 0.85)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A870';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Accetta Tutti
          </button>
        </div>
      </div>
    </div>
  );
}
