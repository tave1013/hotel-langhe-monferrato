'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [accepted, setAccepted] = useState(null);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowBanner(true);
    } else {
      setAccepted(consent === 'all');
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setAccepted(true);
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setAccepted(false);
    setShowBanner(false);
  };

  const handleClose = () => {
    // Closing with X also accepts necessary cookies (GDPR compliance)
    localStorage.setItem('cookieConsent', 'necessary');
    setAccepted(false);
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
      padding: '1.5rem',
      zIndex: 9999,
      borderTop: '3px solid #C9A870',
      maxHeight: '300px',
      overflowY: 'auto',
      boxShadow: '0 -2px 15px rgba(0, 0, 0, 0.3)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}>
        {/* Close button (X) */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '-10px',
            right: '0',
            background: 'none',
            border: 'none',
            color: '#C9A870',
            fontSize: '1.8rem',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#960018')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#C9A870')}
          title="Chiudi (Accetta cookie necessari)"
        >
          ✕
        </button>

        {/* Content */}
        <div style={{
          paddingRight: '2rem',
          marginBottom: '1.2rem',
        }}>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.2rem',
            marginBottom: '0.8rem',
            color: '#C9A870',
            fontWeight: 600,
          }}>
            🍪 Preferenze sui Cookie
          </h3>
          
          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: 'rgba(250, 247, 242, 0.85)',
            margin: '0 0 0.8rem 0',
          }}>
            Utilizziamo i cookie per migliorare la tua esperienza di navigazione, analizzare il traffico del sito e personalizzare i contenuti. Alcuni cookie sono essenziali per il funzionamento del sito, mentre altri ci aiutano a comprendere meglio come usi il nostro sito.
          </p>
          
          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '0.9rem',
            lineHeight: 1.5,
            color: 'rgba(250, 247, 242, 0.7)',
            margin: 0,
          }}>
            Per ulteriori informazioni, consulta la nostra <a href="/privacy-policy" style={{
              color: '#C9A870',
              textDecoration: 'none',
              borderBottom: '1px solid #C9A870',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#960018')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#C9A870')}
            >Informativa sulla Privacy</a>.
          </p>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
          <button
            onClick={handleAcceptNecessary}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '0.95rem',
              padding: '0.7rem 1.5rem',
              backgroundColor: 'rgba(201, 168, 112, 0.15)',
              color: '#C9A870',
              border: '1px solid #C9A870',
              borderRadius: '3px',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(201, 168, 112, 0.25)';
              e.currentTarget.style.borderColor = '#960018';
              e.currentTarget.style.color = '#960018';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(201, 168, 112, 0.15)';
              e.currentTarget.style.borderColor = '#C9A870';
              e.currentTarget.style.color = '#C9A870';
            }}
          >
            Solo Necessari
          </button>
          
          <button
            onClick={handleAcceptAll}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '0.95rem',
              padding: '0.7rem 1.5rem',
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

      {/* Mobile responsive styling via CSS-in-JS media query simulation */}
      <style jsx>{`
        @media (max-width: 768px) {
          button {
            font-size: 0.85rem !important;
            padding: 0.6rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
