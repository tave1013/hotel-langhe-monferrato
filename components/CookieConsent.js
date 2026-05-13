'use client';

import { useState, useEffect } from 'react';

const cookieI18n = {
  it: {
    text1: "Noi e i nostri partner utilizziamo cookie tecnici, necessari al funzionamento del sito, e cookie di profilazione e marketing — inclusi Meta Pixel, Google Analytics, Google Ads e Microsoft Clarity — per analizzare la navigazione, mostrarti contenuti personalizzati e misurare le performance delle nostre campagne pubblicitarie.",
    text2: "Puoi accettare tutti i cookie, rifiutarli o gestire le tue preferenze in qualsiasi momento. Per saperne di più leggi la nostra",
    cookiePolicyLabel: "Cookie Policy",
    and: "e la",
    privacyPolicyLabel: "Privacy Policy",
    decline: "Rifiuta",
    acceptAll: "Accetta Tutti",
    closeTitle: "Chiudi e accetta cookie necessari",
  },
  en: {
    text1: "We and our partners use technical cookies, necessary for the site to function, and profiling/marketing cookies — including Meta Pixel, Google Analytics, Google Ads and Microsoft Clarity — to analyse browsing behaviour, show you personalised content and measure the performance of our advertising campaigns.",
    text2: "You can accept all cookies, decline them or manage your preferences at any time. To learn more, please read our",
    cookiePolicyLabel: "Cookie Policy",
    and: "and our",
    privacyPolicyLabel: "Privacy Policy",
    decline: "Decline",
    acceptAll: "Accept All",
    closeTitle: "Close and accept necessary cookies only",
  },
  fr: {
    text1: "Nous et nos partenaires utilisons des cookies techniques, nécessaires au fonctionnement du site, et des cookies de profilage et de marketing — notamment Meta Pixel, Google Analytics, Google Ads et Microsoft Clarity — pour analyser la navigation, vous proposer des contenus personnalisés et mesurer les performances de nos campagnes publicitaires.",
    text2: "Vous pouvez accepter tous les cookies, les refuser ou gérer vos préférences à tout moment. Pour en savoir plus, consultez notre",
    cookiePolicyLabel: "Politique de cookies",
    and: "et notre",
    privacyPolicyLabel: "Politique de confidentialité",
    decline: "Refuser",
    acceptAll: "Tout accepter",
    closeTitle: "Fermer et accepter uniquement les cookies nécessaires",
  },
  de: {
    text1: "Wir und unsere Partner verwenden technische Cookies, die für den Betrieb der Website erforderlich sind, sowie Profiling- und Marketing-Cookies — darunter Meta Pixel, Google Analytics, Google Ads und Microsoft Clarity — um das Surfverhalten zu analysieren, Ihnen personalisierte Inhalte anzuzeigen und die Leistung unserer Werbekampagnen zu messen.",
    text2: "Sie können alle Cookies akzeptieren, ablehnen oder Ihre Einstellungen jederzeit verwalten. Weitere Informationen finden Sie in unserer",
    cookiePolicyLabel: "Cookie-Richtlinie",
    and: "und unserer",
    privacyPolicyLabel: "Datenschutzerklärung",
    decline: "Ablehnen",
    acceptAll: "Alle akzeptieren",
    closeTitle: "Schließen und nur notwendige Cookies akzeptieren",
  },
  es: {
    text1: "Nosotros y nuestros socios utilizamos cookies técnicas, necesarias para el funcionamiento del sitio, y cookies de elaboración de perfiles y marketing — incluidos Meta Pixel, Google Analytics, Google Ads y Microsoft Clarity — para analizar la navegación, mostrarle contenido personalizado y medir el rendimiento de nuestras campañas publicitarias.",
    text2: "Puede aceptar todas las cookies, rechazarlas o gestionar sus preferencias en cualquier momento. Para más información, consulte nuestra",
    cookiePolicyLabel: "Política de cookies",
    and: "y nuestra",
    privacyPolicyLabel: "Política de privacidad",
    decline: "Rechazar",
    acceptAll: "Aceptar todo",
    closeTitle: "Cerrar y aceptar solo las cookies necesarias",
  },
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [lang, setLang] = useState('it');

  useEffect(() => {
    const stored = localStorage.getItem('site_lang');
    if (stored && cookieI18n[stored]) setLang(stored);
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const T = cookieI18n[lang] || cookieI18n.it;

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
  };

  const handleManage = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
  };

  const handleClose = () => {
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
      {/* Close X button - top right */}
      <button
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'none',
          border: 'none',
          color: '#C9A870',
          fontSize: '1.6rem',
          cursor: 'pointer',
          padding: '0.3rem 0.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'color 0.2s',
          lineHeight: 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#960018';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#C9A870';
        }}
        title={T.closeTitle}
      >
        ✕
      </button>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '2rem',
        flexWrap: 'wrap',
        paddingRight: '2rem',
      }}>
        {/* Content */}
        <div style={{ flex: '1', minWidth: '280px' }}>
          <p style={{
            fontSize: '0.95rem',
            lineHeight: 1.7,
            color: 'rgba(250, 247, 242, 0.9)',
            margin: '0 0 1rem 0',
          }}>
            {T.text1}
          </p>
          <p style={{
            fontSize: '0.9rem',
            lineHeight: 1.6,
            color: 'rgba(250, 247, 242, 0.8)',
            margin: '0.8rem 0 0 0',
          }}>
            {T.text2}{' '}
            <a href="/privacy-policy" style={{
              color: '#C9A870',
              textDecoration: 'none',
              fontWeight: 600,
              borderBottom: '1px solid #C9A870',
            }}>
              {T.cookiePolicyLabel}
            </a>
            {' '}{T.and}{' '}
            <a href="/privacy-policy" style={{
              color: '#C9A870',
              textDecoration: 'none',
              fontWeight: 600,
              borderBottom: '1px solid #C9A870',
            }}>
              {T.privacyPolicyLabel}
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
            {T.decline}
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
            {T.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
