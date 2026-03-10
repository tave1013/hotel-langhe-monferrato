import { rooms } from '@/lib/roomsData';
import { guide } from '@/lib/territorioData';
import { sale } from '@/lib/saleMeetingData';

export default function sitemap() {
  const baseUrl = 'https://hotel-langhe-monferrato.vercel.app';
  const currentDate = new Date().toISOString();

  // Pagine statiche principali
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/camere`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/offerte`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/territorio`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sale-meeting`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prenota`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Pagine dinamiche - Camere
  const cameraPages = rooms.map((room) => ({
    url: `${baseUrl}/camere/${room.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Pagine dinamiche - Guide territorio
  const guidePages = guide.map((guida) => ({
    url: `${baseUrl}/territorio/${guida.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Pagine dinamiche - Sale meeting
  const salePages = sale.map((sala) => ({
    url: `${baseUrl}/sale-meeting/${sala.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...cameraPages, ...guidePages, ...salePages];
}
