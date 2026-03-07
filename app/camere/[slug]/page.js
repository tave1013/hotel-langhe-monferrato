import { getRoomBySlug, getAllRoomSlugs } from '@/lib/roomsData';
import RoomPage from '@/components/RoomPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllRoomSlugs();
}

export async function generateMetadata({ params }) {
  const room = getRoomBySlug(params.slug);
  if (!room) return {};
  return {
    title: `${room.name} | Hotel Langhe & Monferrato`,
    description: `${room.tagline} — Prenota la ${room.name} all'Hotel Langhe & Monferrato. Colazione inclusa, cancellazione gratuita, miglior prezzo garantito.`,
    openGraph: {
      title: `${room.name} | Hotel Langhe & Monferrato`,
      description: room.tagline,
      images: [{ url: room.heroImg, width: 1200, height: 630, alt: room.name }],
    },
  };
}

export default function RoomDetailPage({ params }) {
  const room = getRoomBySlug(params.slug);
  if (!room) notFound();
  return <RoomPage room={room} />;
}
