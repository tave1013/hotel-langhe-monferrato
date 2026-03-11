import PrenotaClient from './PrenotaClient';

export const metadata = {
  title: 'Prenota Hotel Langhe | Miglior Prezzo Garantito Online',
  description: 'Prenota direttamente sul sito ufficiale e risparmia. Camere da €120/notte, cancellazione gratuita, colazione inclusa. Miglior prezzo garantito.',
  openGraph: {
    title: 'Prenota Ora | Hotel Langhe & Monferrato',
    description: 'Prenota al miglior prezzo garantito. Cancellazione gratuita e colazione inclusa.',
    url: 'https://hotel-langhe-monferrato.vercel.app/prenota',
    images: [{ url: '/foto/hotel-langhe-monferrato.jpg', width: 1200, height: 630 }],
  },
};

export default function PrenotaPage() {
  return <PrenotaClient />;
}
