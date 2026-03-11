import ContattiClient from './ContattiClient';

export const metadata = {
  title: 'Contatti Hotel Langhe | Info e Prenotazioni Dirette',
  description: 'Contatta Hotel Langhe & Monferrato: +39 0141 966012. Richiedi informazioni, prenota direttamente e scopri le nostre offerte esclusive.',
  openGraph: {
    title: 'Contatti | Hotel Langhe & Monferrato',
    description: 'Contattaci per informazioni e prenotazioni. Risposta entro 24 ore.',
    url: 'https://hotel-langhe-monferrato.vercel.app/contatti',
    images: [{ url: '/foto/hotel-langhe-monferrato.jpg', width: 1200, height: 630 }],
  },
};

export default function ContattiPage() {
  return <ContattiClient />;
}
