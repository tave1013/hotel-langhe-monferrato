'use client';

import Link from 'next/link';
import Image from 'next/image';
import useSiteLanguage from '@/hooks/useSiteLanguage';
import { t } from '@/lib/i18n';

export default function CamereClient({ rooms }) {
  const lang = useSiteLanguage();
  const isEn = lang === 'en';
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isEs = lang === 'es';

  const deLabelMap = {
    'Predisposizione letto': 'Bettkonfiguration',
    Ospiti: 'Gäste',
    Frigobar: 'Minibar',
    Fumo: 'Rauchen',
    Colazione: 'Frühstück',
    Animali: 'Haustiere',
    'Check-in': 'Einchecken',
    'Check-out': 'Auschecken',
  };
  const deValueMap = {
    'Su richiesta': 'Auf Anfrage',
    '2 Adulti': '2 Erwachsene',
    '3 Adulti': '3 Erwachsene',
    '4 Adulti': '4 Erwachsene',
    'In camera': 'Im Zimmer',
    'Non ammesso': 'Nicht gestattet',
    Inclusa: 'Inbegriffen',
    'Ammessi su richiesta': 'Auf Anfrage gestattet',
    'Dalle 15:00 alle 22:30': '15:00 bis 22:30 Uhr',
    'Dalle 07:00 alle 11:00': '07:00 bis 11:00 Uhr',
  };

  const esLabelMap = {
    'Predisposizione letto': 'Configuración de la cama',
    Ospiti: 'Huéspedes',
    Frigobar: 'Minibar',
    Fumo: 'Fumar',
    Colazione: 'Desayuno',
    Animali: 'Mascotas',
    'Check-in': 'Entrada',
    'Check-out': 'Salida',
  };
  const esValueMap = {
    'Su richiesta': 'Bajo petición',
    '2 Adulti': '2 Adultos',
    '3 Adulti': '3 Adultos',
    '4 Adulti': '4 Adultos',
    'In camera': 'En la habitación',
    'Non ammesso': 'No permitido',
    Inclusa: 'Incluido',
    'Ammessi su richiesta': 'Permitidos bajo petición',
    'Dalle 15:00 alle 22:30': 'De 15:00 a 22:30',
    'Dalle 07:00 alle 11:00': 'De 07:00 a 11:00',
  };

  const frLabelMap = {
    'Predisposizione letto': 'Configuration des lits',
    Ospiti: 'Hôtes',
    Frigobar: 'Minibar',
    Fumo: 'Fumeur',
    Colazione: 'Petit-déjeuner',
    Animali: 'Animaux',
    'Check-in': 'Arrivée',
    'Check-out': 'Départ',
  };
  const frValueMap = {
    'Su richiesta': 'Sur demande',
    '2 Adulti': '2 Adultes',
    '3 Adulti': '3 Adultes',
    '4 Adulti': '4 Adultes',
    'In camera': 'Dans la chambre',
    'Non ammesso': 'Non autorisé',
    Inclusa: 'Inclus',
    'Ammessi su richiesta': 'Autorisés sur demande',
    'Dalle 15:00 alle 22:30': 'De 15h00 à 22h30',
    'Dalle 07:00 alle 11:00': 'De 07h00 à 11h00',
  };

  // Helper to get bilingual text from specs
  const getLocalizedSpec = (spec) => {
    if (isFr) {
      const baseLabel = spec.label_it || spec.label || '';
      const baseValue = spec.value_it || spec.value || '';
      return {
        ...spec,
        label: frLabelMap[baseLabel] || baseLabel,
        value: frValueMap[baseValue] || baseValue,
      };
    }
    if (isDe) {
      const baseLabel = spec.label_it || spec.label || '';
      const baseValue = spec.value_it || spec.value || '';
      return {
        ...spec,
        label: deLabelMap[baseLabel] || baseLabel,
        value: deValueMap[baseValue] || baseValue,
      };
    }
    if (isEs) {
      const baseLabel = spec.label_it || spec.label || '';
      const baseValue = spec.value_it || spec.value || '';
      return {
        ...spec,
        label: esLabelMap[baseLabel] || baseLabel,
        value: esValueMap[baseValue] || baseValue,
      };
    }
    return {
      ...spec,
      label: isEn ? (spec.label || spec.label_it) : (spec.label_it || spec.label),
      value: isEn ? (spec.value || spec.value_it) : (spec.value_it || spec.value),
    };
  };

  return (
    <>
      <section className="relative overflow-hidden" style={{ height: '52vh', minHeight: 360 }}>
        <div className="absolute inset-0">
          <Image
            src="/foto/Camere.webp"
            alt={t(lang, 'roomsListPage.heroAlt')}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.58)' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>{t(lang, 'roomsListPage.label')}</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.15 }}>
            {t(lang, 'roomsListPage.title')}
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#fff', fontStyle: 'italic', marginTop: '0.8rem', maxWidth: 500 }}>
            {t(lang, 'roomsListPage.subtitle')}
          </p>
        </div>
      </section>

      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              (() => {
                const roomName = isEn
                  ? (room.name || room.name_it)
                  : isFr
                    ? t(lang, `roomDetails.${room.slug}.name`)
                    : isDe
                      ? t(lang, `roomDetails.${room.slug}.name`)
                      : isEs
                        ? t(lang, `roomDetails.${room.slug}.name`)
                        : (room.name_it || room.name);
                const roomTagline = isEn
                  ? (room.tagline || room.tagline_it)
                  : isFr
                    ? t(lang, `roomDetails.${room.slug}.tagline`)
                    : isDe
                      ? t(lang, `roomDetails.${room.slug}.tagline`)
                      : isEs
                        ? t(lang, `roomDetails.${room.slug}.tagline`)
                        : (room.tagline_it || room.tagline);
                return (
              <Link key={room.slug} href={`/camere/${room.slug}`} style={{ textDecoration: 'none' }} className="card-hover group">
                <div style={{ background: '#fff', overflow: 'hidden' }}>
                  <div className="img-overlay" style={{ height: 255 }}>
                    <Image
                      src={room.heroImg}
                      alt={roomName}
                      fill
                      quality={80}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(10,8,6,0.82)', padding: '0.45rem 1rem', zIndex: 10 }}>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.58rem', color: '#C9A870', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>{t(lang, 'roomsListPage.from')}</span>
                      <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#fff' }}>€{room.price}</span>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.6rem', color: 'rgba(255,255,255,0.45)' }}>{t(lang, 'roomsListPage.perNight')}</span>
                    </div>
                  </div>

                  <div style={{ padding: '1.3rem 1.5rem 1.5rem' }}>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#2C2520', marginBottom: '0.35rem', fontWeight: 500 }}>{roomName}</h2>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.92rem', color: '#9A8A7A', fontStyle: 'italic', marginBottom: '1rem' }}>{roomTagline}</p>
                    <div style={{ display: 'flex', gap: '1.1rem', flexWrap: 'wrap', marginBottom: '1.1rem' }}>
                      {room.specs.slice(0, 3).map((s) => {
                        const localSpec = getLocalizedSpec(s);
                        return (
                        <span key={localSpec.label} style={{ fontFamily: 'Lato', fontSize: '0.7rem', color: '#6B5E52', display: 'flex', alignItems: 'center', gap: 5 }}>
                          <i className={`fa ${localSpec.icon}`} style={{ color: '#C9A870', fontSize: '0.62rem' }}></i>
                          {localSpec.value}
                        </span>
                        );
                      })}
                    </div>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A870', display: 'flex', alignItems: 'center', gap: 6 }}>
                      {t(lang, 'roomsListPage.discoverRoom')} <i className="fa fa-arrow-right" style={{ fontSize: '0.58rem' }}></i>
                    </span>
                  </div>
                </div>
              </Link>
                );
              })()
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
