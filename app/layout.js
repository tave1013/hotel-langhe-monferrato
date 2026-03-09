import './globals.css';

export const metadata = {
  title: 'Hotel Langhe & Monferrato | Lusso nel Cuore del Piemonte',
  description: 'Scopri Hotel Langhe & Monferrato: camere di lusso, piscina, ristorante gourmet e spa nel cuore delle Langhe. Prenota ora la tua esperienza indimenticabile.',
  keywords: 'hotel langhe, hotel monferrato, hotel lusso piemonte, spa langhe, ristorante gourmet alba',
  openGraph: {
    title: 'Hotel Langhe & Monferrato | Lusso nel Cuore del Piemonte',
    description: 'Camere di lusso, piscina panoramica, ristorante gourmet e spa. Un rifugio esclusivo immerso nei vigneti delle Langhe.',
    type: 'website',
    locale: 'it_IT',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
        </noscript>
        
        {/* Font Awesome async */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
          media="print" 
          onLoad="this.media='all'" 
        />
        <noscript>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
