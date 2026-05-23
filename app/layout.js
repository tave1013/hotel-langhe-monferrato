import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Script from 'next/script';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  metadataBase: new URL('https://hotel-langhe-monferrato.vercel.app'),
  title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle Costigliole d\'Asti',
  description: 'Hotel 4 stelle a Costigliole d\'Asti nel cuore di Langhe e Monferrato. Camere eleganti, eventi aziendali e prenotazione diretta al miglior prezzo garantito.',
  authors: [{ name: 'Hotel Langhe & Monferrato' }],
  openGraph: {
    title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle Costigliole d\'Asti',
    description: 'Hotel 4 stelle a Costigliole d\'Asti nel cuore di Langhe e Monferrato. Camere eleganti, eventi aziendali e prenotazione diretta al miglior prezzo garantito.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://hotel-langhe-monferrato.vercel.app',
    siteName: 'Hotel Langhe & Monferrato',
    images: [
      {
        url: '/foto/6.webp',
        width: 1200,
        height: 630,
        alt: 'Hotel Langhe & Monferrato Costigliole d\'Asti - immagine principale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle Costigliole d\'Asti',
    description: 'Hotel 4 stelle a Costigliole d\'Asti nel cuore di Langhe e Monferrato. Camere eleganti, eventi aziendali e prenotazione diretta al miglior prezzo garantito.',
    images: ['/foto/6.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        {/* ── PRECONNECT: apre connessioni TCP/TLS in anticipo ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://guida.hotellanghemonferrato.com" />

        {/* ── PRELOAD immagine LCP (prima slide hero) ──
            Questa è l'unica ottimizzazione che davvero sposta il LCP:
            il browser la mette in download PRIMA di parsare React/JS. ── */}
        <link
          rel="preload"
          as="image"
          href="/foto/hotel-langhe-monferrato.jpg"
          imageSizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 100vw"
          fetchPriority="high"
        />

        {/* ── GOOGLE FONTS: preload (scarica subito, alta priorità) ──
            NON usa rel="stylesheet" qui → non blocca il rendering iniziale.
            Il browser scarica il CSS in parallelo; viene applicato via Script
            afterInteractive (dopo la prima paint, testo già visibile in font
            di sistema grazie a font-display:swap nell'URL). ── */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap"
        />


      </head>
      <body>
        {children}
        <ClientLayout />

        {/* ── APPLICA GOOGLE FONTS dopo la prima paint ──
            I font sono già scaricati (preload sopra); questo script li "attiva"
            senza bloccare LCP/FCP. font-display:swap nell'URL evita FOIT. ── */}
        <Script id="apply-google-fonts" strategy="afterInteractive">
          {`
            (function(){
              var l = document.createElement('link');
              l.rel = 'stylesheet';
              l.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap';
              document.head.appendChild(l);
            })();
          `}
        </Script>


        {/* ── ALFRED: configurazione (deve girare PRIMA di init.js) ── */}
        <Script id="alfred-widget-config" strategy="afterInteractive">
          {`
            window.AlfredWidgetConfig = {
              baseUrl: "https://guida.hotellanghemonferrato.com",
              positionBottom: "15px",
              positionRight: "15px"
            };
          `}
        </Script>

        {/* ── ALFRED init.js: lazyOnload → carica DOPO l'evento load della pagina.
            Non tocca il main thread durante la finestra LCP/FCP.
            La config sopra (afterInteractive) gira prima, quindi l'ordine è garantito. ── */}
        <Script
          src="https://guida.hotellanghemonferrato.com/alfred-init.js"
          strategy="lazyOnload"
        />

        {/* ── ALFRED mobile UX: afterInteractive perché ha un retry loop interno
            (setInterval 250ms × 10s) → non dipende dall'ordine con init.js. ── */}
        <Script id="alfred-widget-mobile-ux" strategy="afterInteractive">
          {`
            (function () {
              const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

              const syncScrollLock = () => {
                const panel = document.querySelector('.alfred-widget-panel');
                if (!panel) return;
                const open = panel.classList.contains('open');
                document.body.style.overflow = isMobile() && open ? 'hidden' : '';
              };

              const attachObserver = () => {
                const panel = document.querySelector('.alfred-widget-panel');
                if (!panel) return false;

                syncScrollLock();
                const obs = new MutationObserver(syncScrollLock);
                obs.observe(panel, { attributes: true, attributeFilter: ['class'] });
                window.addEventListener('resize', syncScrollLock, { passive: true });
                window.addEventListener('orientationchange', syncScrollLock, { passive: true });
                return true;
              };

              if (!attachObserver()) {
                const timer = setInterval(() => {
                  if (attachObserver()) clearInterval(timer);
                }, 250);
                setTimeout(() => clearInterval(timer), 10000);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
