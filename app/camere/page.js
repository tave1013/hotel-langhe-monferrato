import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { rooms } from '@/lib/roomsData';
import SchemaOrg from '@/components/SchemaOrg';
import CamereClient from './CamereClient';

export const metadata = {
  title: 'Camere e Suite Hotel Langhe | 5 Tipologie Disponibili',
  description: '58 camere nelle Langhe: Singola, Matrimoniale, Tripla, Quadrupla e Suite Deluxe. Comfort e prenotazione diretta sul sito ufficiale.',
  openGraph: {
    title: 'Camere e Suite | Hotel Langhe & Monferrato',
    description: '58 camere tra Singola, Matrimoniale, Tripla, Quadrupla e Suite Deluxe nel cuore di Langhe e Monferrato.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://hotel-langhe-monferrato.vercel.app/camere',
    images: [{ url: '/foto/Camere.webp', width: 1200, height: 630 }],
    updatedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camere & Suite | Hotel Langhe & Monferrato',
    description: 'Scopri le nostre 5 tipologie di camere nel cuore delle Langhe.',
    images: ['/foto/Camere.webp'],
  },
};

export default function CamerePage() {
  return (
    <>
      <SchemaOrg />
      <Navbar />
      <CamereClient rooms={rooms} />

      <Footer />
    </>
  );
}
