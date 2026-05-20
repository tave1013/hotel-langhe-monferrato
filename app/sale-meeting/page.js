import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { sale } from '@/lib/saleMeetingData';
import ScrollAnimation from '@/components/ScrollAnimation';
import SchemaOrg from '@/components/SchemaOrg';
import SaleMeetingClient from './SaleMeetingClient';

export const metadata = {
  title: 'Sale Meeting Langhe | Convegni e Business Hotel 4 Stelle',
  description: 'Sale meeting modulabili per eventi aziendali e congressi nelle Langhe. Tecnologia 4K, Wi-Fi gratuito e supporto organizzativo dedicato. Preventivo gratuito.',
  openGraph: {
    title: 'Sale Meeting Langhe | Convegni e Business Hotel 4 Stelle',
    description: 'Sale meeting modulabili per eventi aziendali e congressi nelle Langhe. Fino a 400 persone, tecnologia 4K e Wi-Fi gratuito. Preventivo gratuito.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://hotel-langhe-monferrato.vercel.app/sale-meeting',
    images: [{ url: '/foto/hotel_langhe_sala_meeting_alfieri.webp', width: 1200, height: 630 }],
    updatedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sale Meeting Langhe | Convegni e Business Hotel 4 Stelle',
    description: 'Sale meeting modulabili per eventi aziendali e congressi nelle Langhe. Preventivo gratuito.',
    images: ['/foto/hotel_langhe_sala_meeting_alfieri.webp'],
  },
};

export default function SaleMeetingPage() {
  return (
    <>
      <SchemaOrg />
      <Navbar />
      <SaleMeetingClient sale={sale} />
      <Footer />
    </>
  );
}
