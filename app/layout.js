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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
