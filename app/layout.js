import './globals.css';

export const metadata = {
  metadataBase: new URL('https://hotel-langhe-monferrato.vercel.app'),
  title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle nelle Langhe',
  description: 'Hotel a Costigliole d\'Asti, punto di partenza ideale per visitare Langhe e Monferrato. Prenotazione diretta sul sito ufficiale.',
  authors: [{ name: 'Hotel Langhe & Monferrato' }],
  openGraph: {
    title: 'Hotel Langhe & Monferrato | Hotel 4 Stelle',
    description: 'Hotel a Costigliole d\'Asti, ideale per visitare Langhe e Monferrato con prenotazione diretta.',
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
    description: 'Hotel a Costigliole d\'Asti, punto di partenza ideale per visitare Langhe e Monferrato.',
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
      <body>{children}</body>
    </html>
  );
}
