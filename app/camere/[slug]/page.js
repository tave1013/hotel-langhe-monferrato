import { getRoomBySlug, getAllRoomSlugs } from '@/lib/roomsData';
import RoomPage from '@/components/RoomPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllRoomSlugs();
}

export async function generateMetadata({ params }) {
  const room = getRoomBySlug(params.slug);
  if (!room) return {};
  const roomName = room.name_it || room.name;
  const roomTagline = room.tagline_it || room.tagline;
  return {
    title: `${roomName} | Hotel Langhe & Monferrato`,
    description: `${roomTagline}. Prenota la ${roomName} all'Hotel Langhe & Monferrato. Colazione inclusa, cancellazione gratuita, miglior prezzo garantito.`,
    openGraph: {
      title: `${roomName} | Hotel Langhe & Monferrato`,
      description: roomTagline,
      images: [{ url: room.heroImg, width: 1200, height: 630, alt: roomName }],
    },
  };
}

export default function RoomDetailPage({ params }) {
  const room = getRoomBySlug(params.slug);
  if (!room) notFound();
  return <RoomPage room={room} />;
}
