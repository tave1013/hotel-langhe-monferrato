'use client';

import Link from 'next/link';
import GuideDetailPage from '@/components/GuideDetailPage';
import { guide } from '@/lib/territorioData';
import { guideEn } from '@/lib/territorioDataEn';
import { guideFr } from '@/lib/territorioDataFr';
import { guideDe } from '@/lib/territorioDataDe';
import { guideEs } from '@/lib/territorioDataEs';
import useSiteLanguage from '@/hooks/useSiteLanguage';

export default function GuidePageClient({ slug }) {
  const lang = useSiteLanguage();
  const isEn = lang === 'en';
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isEs = lang === 'es';
  const esBySlug = Object.fromEntries(guideEs.map((g) => [g.slug, g]));
  const guidesEsFull = guide.map((g) => {
    const es = esBySlug[g.slug];
    if (!es) return g;

    const hasCompleteSections =
      Array.isArray(es.sezioni) &&
      Array.isArray(g.sezioni) &&
      es.sezioni.length >= g.sezioni.length;

    return {
      ...g,
      ...es,
      // Preserve full content structure to avoid losing images/text
      sezioni: hasCompleteSections ? es.sezioni : g.sezioni,
      infoPratiche: es.infoPratiche ? { ...g.infoPratiche, ...es.infoPratiche } : g.infoPratiche,
      linkInterni: Array.isArray(es.linkInterni) && es.linkInterni.length > 0 ? es.linkInterni : g.linkInterni,
      prev: es.prev ?? g.prev,
      next: es.next ?? g.next,
    };
  });
  const guides = isDe ? guideDe : isFr ? guideFr : isEn ? guideEn : isEs ? guidesEsFull : guide;
  const guida = guides.find((g) => g.slug === slug) || null;

  if (!guida) {
    return (
      <main style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', background: '#FAF7F2', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 560 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#2C2520', marginBottom: '0.8rem' }}>
            {isEn ? 'Guide not found' : isFr ? 'Guide introuvable' : isDe ? 'Reiseführer nicht gefunden' : isEs ? 'Guía no encontrada' : 'Guida non trovata'}
          </h1>
          <p style={{ fontFamily: 'Lato', color: '#6B5E52', lineHeight: 1.7, marginBottom: '1.2rem' }}>
            {isEn
              ? 'The requested guide is unavailable in this language. You can return to all territory guides.'
              : isFr
                ? "Le guide demandé n'est pas disponible dans cette langue. Vous pouvez revenir à tous les guides du territoire."
                : isDe
                  ? 'Der angeforderte Reiseführer ist in dieser Sprache nicht verfügbar. Sie können zu allen Territorialen-Führern zurückkehren.'
                  : isEs
                    ? 'La guía solicitada no está disponible en este idioma. Puedes volver a todas las guías del territorio.'
                  : 'La guida richiesta non è disponibile in questa lingua. Puoi tornare a tutte le guide del territorio.'}
          </p>
          <Link href="/territorio" className="btn-gold">
            {isEn ? 'Back to all guides' : isFr ? 'Retour à tous les guides' : isDe ? 'Zurück zu allen Reiseführern' : isEs ? 'Volver a todas las guías' : 'Torna a tutte le guide'}
          </Link>
        </div>
      </main>
    );
  }

  return <GuideDetailPage guida={guida} />;
}
