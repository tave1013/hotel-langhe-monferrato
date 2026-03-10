import './globals.css';

export const metadata = {
  metadataBase: new URL('https://hotel-langhe-monferrato.vercel.app'),
  title: 'Hotel Langhe & Monferrato | Lusso nel Cuore del Piemonte',
  description: 'Scopri Hotel Langhe & Monferrato: camere di lusso, piscina, ristorante gourmet e spa nel cuore delle Langhe. Prenota ora la tua esperienza indimenticabile.',
  keywords: 'hotel langhe, hotel monferrato, hotel lusso piemonte, spa langhe, ristorante gourmet alba',
  authors: [{ name: 'Hotel Langhe & Monferrato' }],
  openGraph: {
    title: 'Hotel Langhe & Monferrato | Lusso nel Cuore del Piemonte',
    description: 'Camere di lusso, piscina panoramica, ristorante gourmet e spa. Un rifugio esclusivo immerso nei vigneti delle Langhe.',
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
    title: 'Hotel Langhe & Monferrato | Lusso nel Cuore del Piemonte',
    description: 'Camere di lusso, piscina panoramica, ristorante gourmet e spa. Un rifugio esclusivo immerso nei vigneti delle Langhe.',
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
        
        {/* Font Awesome - load normally for icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
