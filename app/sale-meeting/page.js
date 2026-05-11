import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { sale } from '@/lib/saleMeetingData';
import ScrollAnimation from '@/components/ScrollAnimation';
import SchemaOrg from '@/components/SchemaOrg';
import SaleMeetingClient from './SaleMeetingClient';

export const metadata = {
  title: 'Meeting Rooms & Congresses | Hotel Langhe | Business Events',
  description: 'Three modular meeting rooms for corporate events in Langhe. 4K technology, free Wi-Fi and dedicated organizational support. Free quote.',
  openGraph: {
    title: 'Meeting Rooms & Congresses | Hotel Langhe',
    description: 'Modular rooms for corporate events and congresses in Langhe. Up to 400 people.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://hotel-langhe-monferrato.vercel.app/sale-meeting',
    images: [{ url: '/foto/hotel_langhe_sala_meeting_alfieri.webp', width: 1200, height: 630 }],
    updatedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeting Rooms & Congresses',
    description: 'Corporate events and congresses in Langhe.',
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
