'use client';

import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';
import useSiteLanguage from '@/hooks/useSiteLanguage';
import { t } from '@/lib/i18n';

export default function SaleMeetingClient({ sale }) {
  const lang = useSiteLanguage();
  const isEn = lang === 'en';
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isEs = lang === 'es';

  const saleEsBySlug = {
    'conference-hall-vittorio-alfieri': {
      nome: 'Sala de Conferencias Vittorio Alfieri',
      sottotitolo: 'Sala de congresos multimedia con luz natural y oscurecimiento total',
      tagline: 'La sala principal para grandes eventos corporativos y congresos, con capacidad de hasta 400 plazas en formato plenaria.',
      specs: [
        { icon: 'fa-users', label: 'Capacidad', value: '400 plazas en plenaria' },
        { icon: 'fa-sun', label: 'Luz', value: 'Natural + oscurecible' },
        { icon: 'fa-desktop', label: 'Formato', value: 'Sala de congresos multimedia' },
      ],
      configurazioni: [
        { tipo: 'Plenaria', posti: 400, icon: 'fa-users' },
      ],
      dotazioni: [
        'Tres pantallas gigantes motorizadas',
        'Sistema de amplificación',
        'Micrófonos inalámbricos',
        '3 videoproyectores fijos',
        'Escenario para ponentes con micrófonos',
        'Grabación audio-video',
        'Láser',
        'Cámara de grabación de vídeo',
        'Flip chart móvil',
        'Acceso directo a Internet ADSL',
        'Videoconferencia',
        'Reproductor DVD y VHS',
        'Teléfono directo',
        'Regiduría técnica',
        'Servicios fotográficos bajo petición',
        'Decoraciones florales bajo petición',
      ],
    },
    'meeting-room-cesare-pavese': {
      nome: 'Sala de Reuniones Cesare Pavese',
      sottotitolo: 'Sala de reuniones conectable en audio-video con la Sala Vittorio Alfieri',
      tagline: 'Espacio ideal para reuniones, formaciones y sesiones operativas, con doble configuración de capacidad.',
      specs: [
        { icon: 'fa-users', label: 'Capacidad plenaria', value: '70 plazas' },
        { icon: 'fa-horse-head', label: 'Forma U', value: '20 plazas' },
        { icon: 'fa-link', label: 'Conexión', value: 'Audio-video con Alfieri' },
      ],
      configurazioni: [
        { tipo: 'Plenaria', posti: 70, icon: 'fa-users' },
        { tipo: 'Forma U', posti: 20, icon: 'fa-horse-head' },
      ],
      dotazioni: [
        'Pantalla gigante',
        'Sistema de amplificación',
        'Reproductor DVD y VHS',
        'Acceso directo a Internet ADSL',
        'Videoproyector fijo',
        'Micrófonos para ponentes',
        'Teléfono directo',
        'Luz natural',
      ],
    },
    'meeting-room-beppe-fenoglio': {
      nome: 'Sala de Reuniones Beppe Fenoglio',
      sottotitolo: 'Sala flexible para grupos medianos y talleres operativos',
      tagline: 'Sala dedicada a reuniones y formación, con doble configuración y posibilidad de conexión con Cesare Pavese.',
      specs: [
        { icon: 'fa-users', label: 'Capacidad plenaria', value: '60 plazas' },
        { icon: 'fa-horse-head', label: 'Forma U', value: '16 plazas' },
        { icon: 'fa-object-group', label: 'Combinable', value: 'Con la Sala Cesare Pavese' },
      ],
      configurazioni: [
        { tipo: 'Plenaria', posti: 60, icon: 'fa-users' },
        { tipo: 'Forma U', posti: 16, icon: 'fa-horse-head' },
      ],
      dotazioni: [
        'Sistema de amplificación',
        'Micrófono inalámbrico',
        'Acceso directo a Internet ADSL',
        'Micrófonos para ponentes',
        'Teléfono directo',
      ],
      nota: 'Las dos salas de reuniones pueden conectarse para obtener un espacio de 135 m² con una capacidad de 130 plazas en formato plenaria.',
    },
  };

  const saleDeBySlug = {
    'conference-hall-vittorio-alfieri': {
      nome: 'Konferenzsaal Vittorio Alfieri',
      sottotitolo: 'Multimedia-Konferenzsaal mit Tageslicht und vollständiger Verdunkelung',
      tagline: 'Der Hauptsaal für große Unternehmensveranstaltungen und Konferenzen, mit einer Kapazität von bis zu 400 Plätzen im Plenarformat.',
      specs: [
        { icon: 'fa-users', label: 'Kapazität', value: '400 Plätze im Plenarformat' },
        { icon: 'fa-sun', label: 'Licht', value: 'Tageslicht + verdunkelbar' },
        { icon: 'fa-desktop', label: 'Format', value: 'Multimedia-Konferenzsaal' },
      ],
      configurazioni: [
        { tipo: 'Plenarformat', posti: 400, icon: 'fa-users' },
      ],
      dotazioni: [
        'Drei motorisierte Riesenleinwände',
        'Verstärkersystem',
        'Kabellose Mikrofone',
        '3 feste Videoprojektoren',
        'Referentenbühne mit Mikrofonen',
        'Audio-Video-Aufzeichnung',
        'Laserstrahl',
        'Videokamera für Aufzeichnung',
        'Mobile Flipchart',
        'Direkter Internetzugang ADSL',
        'Videokonferenz',
        'DVD- und VHS-Player',
        'Direktes Telefon',
        'Technische Regie',
        'Fotographische Dienste auf Anfrage',
        'Blumenarrangements auf Anfrage',
      ],
    },
    'meeting-room-cesare-pavese': {
      nome: 'Besprechungsraum Cesare Pavese',
      sottotitolo: 'Besprechungsraum mit Audio-Video-Verbindung zum Konferenzsaal Vittorio Alfieri',
      tagline: 'Idealer Raum für Besprechungen, Schulungen und operative Sitzungen, mit dualer Kapazitätskonfiguration.',
      specs: [
        { icon: 'fa-users', label: 'Plenarkapazität', value: '70 Plätze' },
        { icon: 'fa-horse-head', label: 'U-Form', value: '20 Plätze' },
        { icon: 'fa-link', label: 'Verbindung', value: 'Audio-Video mit Alfieri' },
      ],
      configurazioni: [
        { tipo: 'Plenarformat', posti: 70, icon: 'fa-users' },
        { tipo: 'U-Form', posti: 20, icon: 'fa-horse-head' },
      ],
      dotazioni: [
        'Riesenleinwand',
        'Verstärkersystem',
        'DVD- und VHS-Player',
        'Direkter Internetzugang ADSL',
        'Fest installierter Videoprojektor',
        'Referentenmikrofone',
        'Direktes Telefon',
        'Tageslicht',
      ],
    },
    'meeting-room-beppe-fenoglio': {
      nome: 'Besprechungsraum Beppe Fenoglio',
      sottotitolo: 'Flexibler Besprechungsraum für mittlere Gruppen und operative Workshops',
      tagline: 'Raum für Besprechungen und Schulungen, mit dualer Konfiguration und Möglichkeit der Integration mit Cesare Pavese.',
      specs: [
        { icon: 'fa-users', label: 'Plenarkapazität', value: '60 Plätze' },
        { icon: 'fa-horse-head', label: 'U-Form', value: '16 Plätze' },
        { icon: 'fa-object-group', label: 'Kombinierbar', value: 'Mit Besprechungsraum Cesare Pavese' },
      ],
      configurazioni: [
        { tipo: 'Plenarformat', posti: 60, icon: 'fa-users' },
        { tipo: 'U-Form', posti: 16, icon: 'fa-horse-head' },
      ],
      dotazioni: [
        'Verstärkersystem',
        'Kabellose Mikrofone',
        'Direkter Internetzugang ADSL',
        'Referentenmikrofone',
        'Direktes Telefon',
      ],
      nota: 'Die beiden Besprechungsräume können miteinander verbunden werden, um einen 135 m² großen Raum mit einer Kapazität von 130 Plätzen im Plenarformat zu erhalten.',
    },
  };

  const saleFrBySlug = {
    'conference-hall-vittorio-alfieri': {
      nome: 'Salle de Conférence Vittorio Alfieri',
      sottotitolo: 'Salle de congrès multimédia avec lumière naturelle et occultation complète',
      tagline: "La salle principale pour les grands événements d'entreprise et congrès, avec une capacité jusqu'à 400 places en configuration plénière.",
      specs: [
        { icon: 'fa-users', label: 'Capacité', value: '400 places en plénière' },
        { icon: 'fa-sun', label: 'Lumière', value: 'Naturelle + occultable' },
        { icon: 'fa-desktop', label: 'Format', value: 'Salle de congrès multimédia' },
      ],
      configurazioni: [
        { tipo: 'Plénière', posti: 400, icon: 'fa-users' },
      ],
      dotazioni: [
        'Trois écrans géants motorisés',
        "Système d'amplification",
        'Microphones sans fil',
        '3 vidéoprojecteurs fixes',
        'Scène orateurs avec microphones',
        'Enregistrement audio-vidéo',
        'Faisceau laser',
        "Caméra d'enregistrement vidéo",
        'Tableau papier mobile',
        'Accès Internet ADSL direct',
        'Visio-conférence',
        'Lecteur DVD et VHS',
        'Téléphone direct',
        'Régie technique',
        'Services photo sur demande',
        'Décorations florales sur demande',
      ],
    },
    'meeting-room-cesare-pavese': {
      nome: 'Salle de Réunion Cesare Pavese',
      sottotitolo: 'Salle de réunion connectable en audio-vidéo avec la Salle Vittorio Alfieri',
      tagline: 'Espace idéal pour réunions, formations et sessions opérationnelles, avec double configuration de capacité.',
      specs: [
        { icon: 'fa-users', label: 'Capacité plénière', value: '70 places' },
        { icon: 'fa-horse-head', label: 'En U', value: '20 places' },
        { icon: 'fa-link', label: 'Connexion', value: 'Audio-vidéo avec Alfieri' },
      ],
      configurazioni: [
        { tipo: 'Plénière', posti: 70, icon: 'fa-users' },
        { tipo: 'En U', posti: 20, icon: 'fa-horse-head' },
      ],
      dotazioni: [
        'Écran géant',
        "Système d'amplification",
        'Lecteur DVD et VHS',
        'Accès Internet direct ADSL',
        'Vidéoprojecteur fixe',
        'Microphones orateurs',
        'Téléphone direct',
        'Lumière naturelle',
      ],
    },
    'meeting-room-beppe-fenoglio': {
      nome: 'Salle de Réunion Beppe Fenoglio',
      sottotitolo: 'Salle flexible pour groupes moyens et ateliers opérationnels',
      tagline: 'Salle dédiée aux réunions et à la formation, avec double configuration et possibilité d’intégration avec Cesare Pavese.',
      specs: [
        { icon: 'fa-users', label: 'Capacité plénière', value: '60 places' },
        { icon: 'fa-horse-head', label: 'En U', value: '16 places' },
        { icon: 'fa-object-group', label: 'Combinable', value: 'Avec la Salle Cesare Pavese' },
      ],
      configurazioni: [
        { tipo: 'Plénière', posti: 60, icon: 'fa-users' },
        { tipo: 'En U', posti: 16, icon: 'fa-horse-head' },
      ],
      dotazioni: [
        "Système d'amplification",
        'Microphone sans fil',
        'Accès Internet direct ADSL',
        'Microphones orateurs',
        'Téléphone direct',
      ],
      nota: 'Les deux salles de réunion peuvent être reliées pour obtenir un espace de 135 m² avec une capacité de 130 places en configuration plénière.',
    },
  };

  // Helper to get bilingual text
  const getLocalizedText = (text, text_it) => {
    return isEn ? (text || text_it) : (text_it || text);
  };

  const getLocalizedSala = (sala) => {
    if (isFr) {
      const fr = saleFrBySlug[sala.slug];
      if (!fr) return sala;
      return {
        ...sala,
        nome: fr.nome || sala.nome,
        sottotitolo: fr.sottotitolo || sala.sottotitolo,
        tagline: fr.tagline || sala.tagline,
        specs: fr.specs || sala.specs,
        configurazioni: fr.configurazioni || sala.configurazioni,
        dotazioni: fr.dotazioni || sala.dotazioni,
        nota: fr.nota || sala.nota,
      };
    }
    if (isDe) {
      const de = saleDeBySlug[sala.slug];
      if (!de) return sala;
      return {
        ...sala,
        nome: de.nome || sala.nome,
        sottotitolo: de.sottotitolo || sala.sottotitolo,
        tagline: de.tagline || sala.tagline,
        specs: de.specs || sala.specs,
        configurazioni: de.configurazioni || sala.configurazioni,
        dotazioni: de.dotazioni || sala.dotazioni,
        nota: de.nota || sala.nota,
      };
    }
    if (isEs) {
      const es = saleEsBySlug[sala.slug];
      if (!es) return sala;
      return {
        ...sala,
        nome: es.nome || sala.nome,
        sottotitolo: es.sottotitolo || sala.sottotitolo,
        tagline: es.tagline || sala.tagline,
        specs: es.specs || sala.specs,
        configurazioni: es.configurazioni || sala.configurazioni,
        dotazioni: es.dotazioni || sala.dotazioni,
        nota: es.nota || sala.nota,
      };
    }
    return sala;
  };

  // Helper for specs
  const getLocalizedSpec = (spec) => {
    return {
      icon: spec.icon,
      label: getLocalizedText(spec.label, spec.label_it),
      value: getLocalizedText(spec.value, spec.value_it),
    };
  };

  // Helper for configurazioni
  const getLocalizedConfig = (config) => {
    return {
      icon: config.icon,
      tipo: getLocalizedText(config.tipo, config.tipo_it),
      posti: config.posti,
    };
  };

  // Helper for dotazioni
  const getLocalizedDotazioni = (sala) => {
    if (isEn) return sala.dotazioni;
    if (isFr) return sala.dotazioni;
    if (isDe) return sala.dotazioni;
    if (isEs) return sala.dotazioni;
    return sala.dotazioni_it;
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ height: '58vh', minHeight: 400 }}>
        <div className="absolute inset-0">
          <img src="/foto/hotel_langhe_sala_meeting_alfieri.webp" alt={t(lang, 'saleMeetingPage.heroAlt')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.55), rgba(10,8,6,0.75))' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto" style={{ margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '0.7rem' }}>{t(lang, 'saleMeetingPage.heroLabel')}</p>
          <div className="gold-divider" style={{ marginBottom: '1.3rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.12, marginBottom: '1rem' }}>
            {t(lang, 'saleMeetingPage.heroTitle')}
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#fff', fontStyle: 'italic', maxWidth: 580, lineHeight: 1.7 }}>
            {t(lang, 'saleMeetingPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* STRIP KPI */}
      <div style={{ background: '#1A1714', padding: '1.8rem 1.5rem', borderBottom: '1px solid rgba(201,168,112,0.1)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: 'fa-th-large', num: '3', label: isEn ? 'Modular Rooms' : isFr ? 'Salles Modulables' : isDe ? 'Modulare Säle' : isEs ? 'Salas Modulares' : 'Sale Modulari' },
            { icon: 'fa-users', num: '400', label: isEn ? 'Max Capacity' : isFr ? 'Capacité Max' : isDe ? 'Maximale Kapazität' : isEs ? 'Capacidad Máxima' : 'Posti Max' },
            { icon: 'fa-wifi', num: isFr ? 'Gratuit' : isDe ? 'Kostenlos' : isEs ? 'Gratis' : 'Free', label: isEn ? 'Throughout Property' : isFr ? 'Dans Toute la Structure' : isDe ? 'Im gesamten Haus' : isEs ? 'En toda la estructura' : 'Nella Struttura' },
            { icon: 'fa-headset', num: '24/7', label: isEn ? 'Technical Support' : isFr ? 'Support Technique' : isDe ? 'Technischer Support' : isEs ? 'Soporte Técnico' : 'Supporto Tecnico' },
          ].map((s) => (
            <div key={s.label} style={{ padding: '0.5rem' }}>
              <i className={`fa ${s.icon}`} style={{ color: '#C9A870', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}></i>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#FAF7F2', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: 'Lato', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SALE CARDS */}
      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p className="section-label">{t(lang, 'saleMeetingPage.roomsLabel')}</p>
            <div className="gold-divider" style={{ marginBottom: '1rem' }}></div>
            <h2 className="section-title">{t(lang, 'saleMeetingPage.roomsTitle')}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {sale.map((salaRaw, i) => {
              const sala = getLocalizedSala(salaRaw);
              return (
              <ScrollAnimation key={sala.slug} type="slide-up" delay={i * 150}>
                <div id={sala.slug} style={{ background: '#fff', overflow: 'hidden', scrollMarginTop: 110 }} className="card-hover md:grid md:grid-cols-2">
                  <div className={`${i % 2 === 0 ? 'md:order-1' : 'md:order-2'} h-[220px] sm:h-[300px] md:h-full`} style={{ width: '100%', overflow: 'hidden' }}>
                    <img src={sala.img} alt={sala.nome} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }} />
                  </div>
                  <div className={i % 2 === 0 ? 'md:order-2' : 'md:order-1'} style={{ padding: 'clamp(1.1rem, 3vw, 2rem)' }}>
                    <p className="section-label" style={{ marginBottom: '0.5rem' }}>{t(lang, 'saleMeetingPage.roomLabel')}</p>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.45rem, 2.6vw, 1.9rem)', fontWeight: 500, color: '#2C2520', marginBottom: '0.45rem' }}>
                      {isFr || isDe || isEs ? sala.nome : getLocalizedText(sala.nome, sala.nome_it)}
                    </h2>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontStyle: 'italic', color: '#C9A870', marginBottom: '0.85rem' }}>
                      {isFr || isDe || isEs ? sala.sottotitolo : getLocalizedText(sala.sottotitolo, sala.sottotitolo_it)}
                    </p>
                    <p style={{ fontFamily: 'Lato', fontSize: '0.92rem', color: '#6B5E52', lineHeight: 1.7, marginBottom: '1rem' }}>
                      {isFr || isDe || isEs ? sala.tagline : getLocalizedText(sala.tagline, sala.tagline_it)}
                    </p>

                    {/* Info rapide */}
                    <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 8, marginBottom: '1rem' }}>
                      {sala.specs.map((spec) => {
                        const localSpec = getLocalizedSpec(spec);
                        return (
                          <div key={localSpec.label} style={{ border: '1px solid rgba(201,168,112,0.18)', padding: '0.65rem 0.7rem' }}>
                            <i className={`fa ${localSpec.icon}`} style={{ color: '#C9A870', fontSize: '0.74rem', marginRight: 6 }}></i>
                            <span style={{ fontFamily: 'Lato', fontSize: '0.6rem', color: '#9A8A7A', letterSpacing: '0.09em', textTransform: 'uppercase' }}>{localSpec.label}</span>
                            <div style={{ fontFamily: 'Lato', fontSize: '0.88rem', color: '#4A3D33', marginTop: 5 }}>{localSpec.value}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Configurazioni pill */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1rem' }}>
                      {sala.configurazioni.map((c) => {
                        const localConfig = getLocalizedConfig(c);
                        return (
                          <div key={localConfig.tipo} style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(201,168,112,0.08)', border: '1px solid rgba(201,168,112,0.2)', padding: '0.28rem 0.7rem' }}>
                            <i className={`fa ${localConfig.icon}`} style={{ color: '#C9A870', fontSize: '0.58rem' }}></i>
                            <span style={{ fontFamily: 'Lato', fontSize: '0.76rem', color: '#6B5E52' }}>{localConfig.tipo} {localConfig.posti} pax</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Dotazioni */}
                    <div className="grid md:grid-cols-2 gap-1" style={{ marginBottom: '1rem' }}>
                      {getLocalizedDotazioni(sala).slice(0, 6).map((dotazione) => (
                        <div key={dotazione} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '0.2rem 0', fontFamily: 'Lato', fontSize: '0.9rem', color: '#4A3D33' }}>
                          <i className="fa fa-check" style={{ color: '#C9A870', fontSize: '0.58rem', marginTop: 4, flexShrink: 0 }}></i>
                          {dotazione}
                        </div>
                      ))}
                    </div>

                    {getLocalizedDotazioni(sala).length > 6 && (
                      <p style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: '#9A8A7A', marginBottom: '1rem' }}>
                        {isEn ? '+ other amenities available upon request.' : isFr ? '+ autres équipements disponibles sur demande.' : isDe ? '+ weitere Ausstattung auf Anfrage verfügbar.' : isEs ? '+ otros equipamientos disponibles bajo petición.' : '+ altre dotazioni disponibili su richiesta.'}
                      </p>
                    )}

                    {sala.nota && (
                      <div style={{ borderLeft: '2px solid #C9A870', paddingLeft: '0.8rem', marginBottom: '1rem' }}>
                        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.08rem', color: '#6B5E52', fontStyle: 'italic', lineHeight: 1.6 }}>
                          {isFr || isDe || isEs ? sala.nota : getLocalizedText(sala.nota, sala.nota_it)}
                        </p>
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                      <Link href="/contatti" className="btn-gold">{t(lang, 'saleMeetingPage.requestQuote')}</Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );})}
          </div>
        </div>
      </section>

      {/* SERVIZI INCLUSI */}
      <section style={{ background: '#1A1714', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>{t(lang, 'saleMeetingPage.servicesLabel')}</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h2 className="section-title-light" style={{ marginBottom: '3rem' }}>{t(lang, 'saleMeetingPage.servicesTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: 'fa-wifi', label: isEn ? 'Free Wi-Fi' : isFr ? 'Wi-Fi Gratuit' : isDe ? 'Kostenloses Wi-Fi' : isEs ? 'Wi-Fi gratis' : 'Wi-Fi Free' },
              { icon: 'fa-video', label: isEn ? '4K Projection' : isFr ? 'Projection 4K' : isDe ? '4K-Projektion' : isEs ? 'Proyección 4K' : 'Proiezione 4K' },
              { icon: 'fa-coffee', label: isEn ? 'Gourmet Coffee Break' : isFr ? 'Pause-café Gourmet' : isDe ? 'Gourmet-Kaffeepause' : isEs ? 'Coffee break gourmet' : 'Coffee Break Gourmet' },
              { icon: 'fa-utensils', label: isEn ? 'Catering & Gala Dinner' : isFr ? 'Catering & Dîner de Gala' : isDe ? 'Catering & Galadinner' : isEs ? 'Catering y cena de gala' : 'Catering & Cena Gala' },
              { icon: 'fa-parking', label: isEn ? 'Reserved Parking' : isFr ? 'Parking Réservé' : isDe ? 'Reservierter Parkplatz' : isEs ? 'Aparcamiento reservado' : 'Parcheggio Riservato' },
              { icon: 'fa-headset', label: isEn ? '24/7 Technical Support' : isFr ? 'Support Technique 24/7' : isDe ? '24/7 Technischer Support' : isEs ? 'Soporte Técnico 24/7' : 'Supporto Tecnico H24' },
            ].map((s) => (
              <div key={s.label} style={{ padding: '1.5rem 1rem', border: '1px solid rgba(201,168,112,0.12)', textAlign: 'center' }}>
                <i className={`fa ${s.icon}`} style={{ color: '#C9A870', fontSize: '1.4rem', display: 'block', marginBottom: '0.8rem' }}></i>
                <div style={{ fontFamily: 'Lato', fontSize: '0.82rem', color: 'rgba(245,239,228,0.55)', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ padding: '90px 0' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600&q=75&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.8)' }} />
        </div>
        <div className="relative text-center px-6 max-w-2xl mx-auto">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>{t(lang, 'saleMeetingPage.ctaLabel')}</p>
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}></div>
          <h2 className="section-title-light" style={{ marginBottom: '1rem' }}>{t(lang, 'saleMeetingPage.ctaTitle')}</h2>
          <p style={{ fontFamily: 'Lato', fontSize: 'clamp(0.95rem, 2.2vw, 1rem)', color: '#FAF7F2', lineHeight: 1.8, marginBottom: '2rem' }}>
            {t(lang, 'saleMeetingPage.ctaText')}
          </p>
          <Link href="/contatti" className="btn-gold" style={{ padding: '1rem 2.8rem' }}>
            {t(lang, 'saleMeetingPage.requestQuote')}
          </Link>
        </div>
      </section>
    </>
  );
}
