import ContattiClient from './ContattiClient';

export const metadata = {
  title: 'Contatti Hotel Langhe | Info e Prenotazioni Dirette',
  description: 'Contatta l\'Hotel Langhe & Monferrato a Costigliole d\'Asti per informazioni, prenotazioni e richieste di soggiorno nel cuore di Langhe e Monferrato.',
  alternates: {
    canonical: '/contatti',
  },
  openGraph: {
    title: 'Contatti | Hotel Langhe & Monferrato',
    description: 'Contatta l\'Hotel Langhe & Monferrato a Costigliole d\'Asti per informazioni, prenotazioni e richieste di soggiorno nel cuore di Langhe e Monferrato.',
    url: 'https://hotellanghemonferrato.com/contatti',
    images: [{ url: '/foto/hotel-langhe-monferrato.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contatti | Hotel Langhe & Monferrato',
    description: 'Contatta l\'Hotel Langhe & Monferrato a Costigliole d\'Asti per informazioni e prenotazioni. Tel. +39 0141 961853, email o WhatsApp. Risposta rapida garantita.',
    images: ['/foto/hotel-langhe-monferrato.jpg'],
  },
};

export default function ContattiPage() {
  return <ContattiClient />;
}
