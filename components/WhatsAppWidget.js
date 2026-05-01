'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

function WhatsAppIcon({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.2c-5.41 0-9.8 4.29-9.8 9.58 0 1.69.45 3.35 1.29 4.8L2 22l5.66-1.48a9.94 9.94 0 0 0 4.34 1h.01c5.4 0 9.79-4.29 9.79-9.58 0-2.56-1-4.96-2.81-6.76A9.9 9.9 0 0 0 12 2.2Zm0 17.66h-.01a8.27 8.27 0 0 1-4.22-1.15l-.3-.18-3.28.86.88-3.19-.2-.33a8.2 8.2 0 0 1-1.28-4.39c0-4.57 3.78-8.28 8.41-8.28 2.23 0 4.32.87 5.89 2.43a8.17 8.17 0 0 1 2.46 5.91c0 4.57-3.77 8.29-8.35 8.29Z"
      />
      <path
        fill="currentColor"
        d="M16.7 13.62c-.25-.12-1.49-.73-1.72-.81-.23-.08-.4-.12-.57.12-.17.24-.66.81-.8.98-.14.17-.29.19-.55.06-.25-.12-1.07-.39-2.04-1.27-.75-.67-1.25-1.49-1.4-1.74-.14-.26-.01-.39.11-.52.11-.11.25-.29.38-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.87-.21-.49-.42-.43-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.09 0 1.24.9 2.43 1.02 2.6.13.17 1.76 2.69 4.26 3.78.59.25 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.49-.61 1.69-1.2.21-.58.21-1.08.15-1.2-.06-.11-.23-.17-.48-.29Z"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showPromoBubble, setShowPromoBubble] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowPromoBubble(true);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  const whatsappUrl = useMemo(() => {
    const message = 'Buongiorno, vorrei ricevere maggiori informazioni sull\'Hotel Langhe & Monferrato.';
    return `https://wa.me/393518011730?text=${encodeURIComponent(message)}`;
  }, []);

  const handleChatOpen = () => {
    if (!privacyAccepted) return;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const dismissPromoBubble = () => {
    setShowPromoBubble(false);
  };

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[9999] flex flex-col items-end sm:bottom-6 sm:right-6">
      <div
        className={[
          'mb-3 w-[calc(100vw-2rem)] max-w-[380px] overflow-hidden rounded-3xl bg-white shadow-[0_20px_70px_rgba(0,0,0,0.22)] transition-all duration-300 ease-out',
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
        ].join(' ')}
      >
        <div className="bg-[#128C7E] px-5 py-4 text-white">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <WhatsAppIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-['Playfair_Display'] text-base font-semibold leading-tight">Hotel Langhe &amp; Monferrato</div>
                <div className="mt-1 flex items-center gap-2 text-sm text-white/90">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span>Siamo online</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-white/90 transition hover:bg-white/15 hover:text-white"
              aria-label="Chiudi widget WhatsApp"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="space-y-4 px-5 py-5">
          <div className="max-w-[88%] rounded-[22px] rounded-bl-md bg-[#F2F7F5] px-4 py-3 text-sm leading-6 text-[#2C2520] shadow-sm">
            Benvenuto all'Hotel Langhe &amp; Monferrato! Come possiamo aiutarti?
          </div>

          <label className="flex items-start gap-3 text-sm leading-5 text-[#4A3D33]">
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-[#CFCFCF] text-[#128C7E] focus:ring-[#128C7E]"
            />
            <span>
              Ho letto e accetto la{' '}
              <Link href="/privacy-policy" className="font-semibold text-[#128C7E] underline underline-offset-2">
                Privacy Policy
              </Link>
            </span>
          </label>

          <button
            type="button"
            onClick={handleChatOpen}
            disabled={!privacyAccepted}
            className={[
              'w-full rounded-full px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300',
              privacyAccepted
                ? 'bg-[#128C7E] shadow-[0_10px_30px_rgba(18,140,126,0.2)] hover:bg-[#0f7a6f]'
                : 'cursor-not-allowed bg-[#B9B9B9] opacity-90',
            ].join(' ')}
          >
            Chatta con noi
          </button>
        </div>
      </div>

      <div className="flex items-end gap-3">
        {showPromoBubble && !isOpen && (
          <div
            className="pointer-events-auto relative rounded-2xl border border-[#ECECEC] bg-white px-4 py-3 shadow-[0_14px_36px_rgba(0,0,0,0.16)]"
            style={{ width: 'min(320px, calc(100vw - 5.5rem))' }}
          >
            <div className="flex items-start gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex-1 text-left"
                aria-label="Apri chat WhatsApp"
              >
                <p className="text-sm font-semibold leading-5 text-[#2C2520] sm:text-[15px]">
                  Prenota il tuo soggiorno al prezzo più basso!
                </p>
              </button>

              <button
                type="button"
                onClick={dismissPromoBubble}
                className="-mr-1 -mt-1 rounded-full p-1 text-[#6C6C6C] transition hover:bg-[#F5F5F5] hover:text-[#2C2520]"
                aria-label="Chiudi messaggio promozionale"
              >
                <CloseIcon />
              </button>
            </div>

            <span
              aria-hidden="true"
              className="absolute -right-[11px] bottom-3 h-0 w-0 border-y-[9px] border-y-transparent border-l-[11px] border-l-[#ECECEC]"
            />
            <span
              aria-hidden="true"
              className="absolute -right-[9px] bottom-[13px] h-0 w-0 border-y-[8px] border-y-transparent border-l-[10px] border-l-white"
            />
          </div>
        )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="pointer-events-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#128C7E] shadow-[0_10px_24px_rgba(18,140,126,0.26)] transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14"
        aria-label={isOpen ? 'Chiudi chat WhatsApp' : 'Apri chat WhatsApp'}
      >
        <WhatsAppIcon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
      </button>
      </div>
    </div>
  );
}
