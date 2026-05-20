import './globals.css';
import Script from 'next/script';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  metadataBase: new URL('https://hotel-langhe-monferrato.vercel.app'),
  title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle Costigliole d\'Asti',
  description: 'Hotel 4 stelle a Costigliole d\'Asti tra Langhe e Monferrato. Camere eleganti, piscina, ristorante gourmet e SPA. Prenota direttamente sul sito ufficiale.',
  authors: [{ name: 'Hotel Langhe & Monferrato' }],
  openGraph: {
    title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle Costigliole d\'Asti',
    description: 'Hotel 4 stelle a Costigliole d\'Asti tra Langhe e Monferrato. Camere eleganti, piscina, ristorante gourmet e SPA. Prenota direttamente sul sito ufficiale.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://hotel-langhe-monferrato.vercel.app',
    siteName: 'Hotel Langhe & Monferrato',
    images: [
      {
        url: '/foto/hotel-langhe-monferrato.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotel Langhe & Monferrato - Vista esterna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle Costigliole d\'Asti',
    description: 'Hotel 4 stelle a Costigliole d\'Asti tra Langhe e Monferrato. Camere eleganti, piscina, ristorante gourmet e SPA. Prenota direttamente sul sito ufficiale.',
    images: ['/foto/hotel-langhe-monferrato.jpg'],
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
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* Google Fonts con font-display swap per evitare FOIT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        {children}
        <ClientLayout />

        {/* Configurazione globale del Widget di Alfred - Dominio Reale */}
        <Script id="alfred-widget-config" strategy="afterInteractive">
          {`
            window.AlfredWidgetConfig = {
              baseUrl: "https://guida.hotellanghemonferrato.com",
              positionBottom: "15px",
              positionRight: "15px"
            };
          `}
        </Script>

        {/* Caricamento dello script dal dominio corretto */}
        <Script
          src="https://guida.hotellanghemonferrato.com/alfred-init.js"
          strategy="afterInteractive"
        />

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
