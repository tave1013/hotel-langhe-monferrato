import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { rooms } from '@/lib/roomsData';
import SchemaOrg from '@/components/SchemaOrg';
import CamereClient from './CamereClient';

export const metadata = {
  title: 'Camere Hotel Langhe & Monferrato | Costigliole d\'Asti',
  description: '58 camere e suite a Costigliole d\'Asti, tra Monferrato e Langhe: Singola, Matrimoniale, Tripla, Quadrupla, Family e Suite Deluxe.',
  alternates: {
    canonical: '/camere',
  },
  openGraph: {
    title: 'Camere Hotel Langhe & Monferrato | Costigliole d\'Asti',
    description: '58 camere e suite a Costigliole d\'Asti, tra Monferrato e Langhe: Singola, Matrimoniale, Tripla, Quadrupla, Family e Suite Deluxe.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://hotellanghemonferrato.com/camere',
    images: [{ url: '/foto/Camera%20matrimoniale%20%282%29.webp', width: 1200, height: 630 }],
    updatedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camere Hotel Langhe & Monferrato | Costigliole d\'Asti',
    description: 'Scegli tra 58 camere a Costigliole d\'Asti: Singola, Matrimoniale, Tripla, Quadrupla, Suite Deluxe e Family. Colazione inclusa e prenotazione diretta.',
    images: ['/foto/Camera%20matrimoniale%20%282%29.webp'],
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
