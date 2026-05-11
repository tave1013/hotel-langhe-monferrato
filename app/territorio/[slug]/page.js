import { getGuideBySlug, getAllGuideSlugs } from '@/lib/territorioData';
import { guideEn } from '@/lib/territorioDataEn';
import GuidePageClient from '@/app/territorio/[slug]/GuidePageClient';

export async function generateStaticParams() {
  return getAllGuideSlugs();
}

export async function generateMetadata({ params }) {
  const guida = guideEn.find((g) => g.slug === params.slug) || getGuideBySlug(params.slug);
  if (!guida) return {};
  return {
    title: `${guida.nome}: ${guida.sottotitolo} | Hotel Langhe & Monferrato`,
    description: `${guida.tagline} Complete mini guide to ${guida.nome}: what to see, where to eat, practical information and how to get there from Hotel Langhe & Monferrato.`,
    keywords: `${guida.nome.toLowerCase()}, ${guida.categoria.toLowerCase()}, langhe monferrato, what to see in piedmont, hotel langhe`,
    openGraph: {
      title: `${guida.nome}: ${guida.sottotitolo}`,
      description: guida.tagline,
      images: [{ url: guida.heroImg, width: 1200, height: 630, alt: guida.nome }],
      type: 'article',
      locale: 'en_US',
    },
  };
}

export default function GuidaPage({ params }) {
  return <GuidePageClient slug={params.slug} />;
}
