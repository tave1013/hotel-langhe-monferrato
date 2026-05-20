import PrenotaClient from './PrenotaClient';

export const metadata = {
  title: 'Prenota Hotel Langhe | Miglior Prezzo Garantito Online',
  description: 'Prenota l\'Hotel Langhe & Monferrato a Costigliole d\'Asti. Camere da €120/notte, colazione inclusa, cancellazione gratuita. Miglior prezzo garantito online.',
  openGraph: {
    title: 'Prenota Ora | Hotel Langhe & Monferrato',
    description: 'Prenota l\'Hotel Langhe & Monferrato a Costigliole d\'Asti. Camere da €120/notte, colazione inclusa, cancellazione gratuita. Miglior prezzo garantito.',
    url: 'https://hotel-langhe-monferrato.vercel.app/prenota',
    images: [{ url: '/foto/hotel-langhe-monferrato.jpg', width: 1200, height: 630 }],
  },
};

export default function PrenotaPage() {
  return <PrenotaClient />;
}
