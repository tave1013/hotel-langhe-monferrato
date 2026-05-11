'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { guide } from '@/lib/territorioData';
import { guideEn } from '@/lib/territorioDataEn';
import { guideFr } from '@/lib/territorioDataFr';
import { guideDe } from '@/lib/territorioDataDe';
import { guideEs } from '@/lib/territorioDataEs';
import useSiteLanguage from '@/hooks/useSiteLanguage';

export default function TerritorioClient() {
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
      // Keep complete base detail data (images/text) unless ES is complete
      sezioni: hasCompleteSections ? es.sezioni : g.sezioni,
      infoPratiche: es.infoPratiche ? { ...g.infoPratiche, ...es.infoPratiche } : g.infoPratiche,
      linkInterni: Array.isArray(es.linkInterni) && es.linkInterni.length > 0 ? es.linkInterni : g.linkInterni,
      prev: es.prev ?? g.prev,
      next: es.next ?? g.next,
    };
  });
  const guides = isDe ? guideDe : isFr ? guideFr : isEn ? guideEn : isEs ? guidesEsFull : guide;

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden" style={{ height: '58vh', minHeight: 400 }}>
        <div className="absolute inset-0">
          <Image
            src="/foto/alba.webp"
            alt={isEn ? 'Langhe and Monferrato landscape' : isFr ? 'Paysage des Langhe et du Monferrato' : isDe ? 'Landschaft der Langhe und des Monferrato' : isEs ? 'Paisaje de Langhe y Monferrato' : 'Paesaggio Langhe e Monferrato'}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.55), rgba(10,8,6,0.72))' }} />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pt-16 md:pt-28 lg:pt-32" style={{ margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '0.7rem' }}>{isEn ? 'Explore Our Land' : isFr ? 'Explorez Notre Terre' : isDe ? 'Erkunden Sie Unser Land' : isEs ? 'Explora Nuestra Tierra' : 'Esplora la Nostra Terra'}</p>
          <div className="gold-divider" style={{ marginBottom: '1.3rem' }}></div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.12, marginBottom: '1rem' }}>
            {isEn ? 'Territory: Langhe & Monferrato' : isFr ? 'Territoire : Langhe & Monferrato' : isDe ? 'Territorium: Langhe & Monferrato' : isEs ? 'Territorio: Langhe y Monferrato' : 'Territorio: Langhe & Monferrato'}
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#fff', fontStyle: 'italic', maxWidth: 580, lineHeight: 1.7, paddingBottom: '2rem' }}>
            {isEn
              ? "Nine carefully written mini guides to discover one of Italy's most extraordinary areas — UNESCO heritage, legendary wines, truffles, castles, e-bike routes, wine events and giant benches."
              : isFr
                ? "Neuf mini-guides rédigés avec soin pour vous faire découvrir l'un des territoires les plus extraordinaires d'Italie — patrimoine UNESCO, vins légendaires, truffes, châteaux, e-bike, événements autour du vin et bancs géants."
                : isDe
                  ? 'Neun sorgfältig verfasste Mini-Reiseführer, um eines der außergewöhnlichsten Gebiete Italiens zu entdecken — UNESCO-Welterbe, legendäre Weine, Trüffel, Schlösser, E-Bike-Strecken, Weinfeste und Riesenbänke.'
                  : isEs
                    ? 'Nueve mini guías redactadas con cuidado para descubrir uno de los territorios más extraordinarios de Italia: patrimonio UNESCO, vinos legendarios, trufas, castillos, rutas e-bike, eventos del vino y bancos gigantes.'
                  : 'Nove mini guide scritte con cura per farti scoprire uno dei territori più straordinari d\'Italia — Patrimonio UNESCO, vini leggendari, tartufi, castelli, E-bike, eventi wine e panchine giganti.'}
          </p>
        </div>
      </section>

      <div style={{ background: '#1A1714', padding: '1.8rem 1.5rem' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: 'fa-map-marker-alt', num: '9', label: isEn ? 'Mini Guides' : isFr ? 'Mini-Guides' : isDe ? 'Mini-Reiseführer' : isEs ? 'Mini Guías' : 'Mini Guide' },
            { icon: 'fa-award', num: 'UNESCO', label: isEn ? 'World Heritage' : isFr ? 'Patrimoine Mondial' : isDe ? 'Welterbe' : isEs ? 'Patrimonio Mundial' : 'Patrimonio Mondiale' },
            { icon: 'fa-wine-glass-alt', num: '19', label: isEn ? 'Recognized DOCG' : isFr ? 'DOCG Reconnues' : isDe ? 'Anerkannte DOCG' : isEs ? 'DOCG reconocidas' : 'DOCG Riconosciute' },
            { icon: 'fa-route', num: '< 40km', label: isEn ? 'Radius from Hotel' : isFr ? "Rayon depuis l'Hôtel" : isDe ? 'Radius vom Hotel' : isEs ? 'Radio desde el hotel' : "Raggio dall'Hotel" },
          ].map((s) => (
            <div key={s.label} style={{ padding: '0.5rem' }}>
              <i className={`fa ${s.icon}`} style={{ color: '#C9A870', fontSize: '1.1rem', display: 'block', marginBottom: '0.4rem' }}></i>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#FAF7F2', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: 'Lato', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ background: '#FAF7F2', padding: '80px 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="section-label">{isEn ? 'Our Mini Guides' : isFr ? 'Nos Mini-Guides' : isDe ? 'Unsere Mini-Reiseführer' : isEs ? 'Nuestras Mini Guías' : 'Le Nostre Mini Guide'}</p>
            <div className="gold-divider" style={{ marginBottom: '1rem' }}></div>
            <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto' }}>
              {isEn ? 'Experiences and Destinations Not to Miss' : isFr ? 'Expériences et Destinations à Ne Pas Manquer' : isDe ? 'Erfahrungen und Ziele, die man nicht verpassen darf' : isEs ? 'Experiencias y destinos que no te puedes perder' : 'Esperienze e Destinazioni da Non Perdere'}
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: '0.85rem', color: '#9A8A7A', maxWidth: 580, margin: '1rem auto 0', lineHeight: 1.8 }}>
              {isEn
                ? 'Langhe and Monferrato offer experiences for every kind of traveler. We selected nine stops that, in our view, are truly unmissable.'
                : isFr
                  ? 'Les Langhe et le Monferrato offrent des expériences pour chaque type de voyageur. Nous avons sélectionné neuf étapes qui, selon nous, sont incontournables.'
                  : isDe
                    ? 'Langhe und Monferrato bieten Erfahrungen für jede Art von Reisenden. Wir haben neun Stationen ausgewählt, die unserer Meinung nach wirklich unverzichtbar sind.'
                    : isEs
                      ? 'Langhe y Monferrato ofrecen experiencias para todo tipo de viajero. Hemos seleccionado nueve paradas que, en nuestra opinión, son imprescindibles.'
                    : 'Le Langhe e il Monferrato offrono esperienze per ogni tipo di viaggiatore. Abbiamo selezionato nove tappe che secondo noi non si possono perdere.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((g) => (
              <Link key={g.slug} href={`/territorio/${g.slug}`} style={{ textDecoration: 'none' }} className="card-hover group">
                <div style={{ background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="img-overlay" style={{ height: 240, position: 'relative', flexShrink: 0 }}>
                    <Image
                      src={g.img}
                      alt={g.nome}
                      fill
                      quality={80}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(201,168,112,0.9)', padding: '0.28rem 0.7rem', zIndex: 10 }}>
                      <span className="text-[0.74rem] md:text-[0.6rem]" style={{ fontFamily: 'Lato', fontWeight: 700, color: '#fff', letterSpacing: '0.05em', textAlign: 'center', display: 'block' }}>{g.distanzaDallHotel}</span>
                    </div>
                  </div>

                  <div style={{ padding: '1.4rem 1.6rem 1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#2C2520', marginBottom: '0.3rem', fontWeight: 500 }}>
                      {g.nome}
                    </h2>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', color: '#C9A870', fontStyle: 'italic', marginBottom: '0.9rem' }}>
                      {g.sottotitolo}
                    </p>
                    <p style={{ fontFamily: 'Lato', fontSize: '0.95rem', color: '#6B5E52', lineHeight: 1.75, marginBottom: '1.2rem', flexGrow: 1 }}>
                      {g.descrizioneBreve.slice(0, 140)}…
                    </p>

                    <div style={{ display: 'flex', gap: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(201,168,112,0.12)', marginBottom: '1.2rem' }}>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.78rem', color: '#9A8A7A', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <i className="fa fa-clock" style={{ color: '#C9A870', fontSize: '0.6rem' }}></i>
                        {g.tempoVisita}
                      </span>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.78rem', color: '#9A8A7A', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <i className="fa fa-map-marker-alt" style={{ color: '#C9A870', fontSize: '0.6rem' }}></i>
                        {g.distanzaDallHotel}
                      </span>
                    </div>

                    <span style={{ fontFamily: 'Lato', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A870', display: 'flex', alignItems: 'center', gap: 7 }}>
                      {isEn ? 'Read Guide' : isFr ? 'Lire le Guide' : isDe ? 'Lesen Sie den Reiseführer' : isEs ? 'Leer la guía' : 'Leggi la Guida'}
                      <i className="fa fa-arrow-right" style={{ fontSize: '0.58rem', transition: 'transform 0.2s' }}></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" style={{ padding: '90px 0' }}>
        <div className="absolute inset-0">
          <img src="/foto/alba.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.80)' }} />
        </div>
        <div className="relative text-center px-6 max-w-3xl mx-auto" style={{ margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '0.7rem' }}>{isEn ? 'Your Base Camp' : isFr ? 'Votre Camp de Base' : isDe ? 'Ihr Basislager' : isEs ? 'Tu campamento base' : 'Il Tuo Quartier Generale'}</p>
          <div className="gold-divider" style={{ marginBottom: '1.4rem' }}></div>
          <h2 className="section-title-light" style={{ marginBottom: '1rem' }}>
            {isEn ? 'Explore the Langhe from Our Hotel' : isFr ? 'Explorez les Langhe depuis Notre Hôtel' : isDe ? 'Erkunden Sie die Langhe von Unserem Hotel aus' : isEs ? 'Explora Langhe desde nuestro hotel' : 'Esplora le Langhe dal Nostro Hotel'}
          </h2>
          <p style={{ fontFamily: 'Lato', fontSize: 'clamp(0.95rem, 2.2vw, 1rem)', color: '#FAF7F2', lineHeight: 1.85, marginBottom: '2.2rem', maxWidth: 560, margin: '0 auto 2.2rem' }}>
            {isEn
              ? 'The hotel location puts you within 40 minutes of all destinations in this guide. Book your stay and let us help you design the perfect itinerary.'
              : isFr
                ? 'L’emplacement de l’hôtel vous place à moins de 40 minutes de toutes les destinations de ce guide. Réservez votre séjour et laissez-nous vous aider à construire l’itinéraire parfait.'
                : isDe
                  ? 'Der Standort des Hotels bringt Sie in weniger als 40 Minuten zu allen Zielen in diesem Reiseführer. Buchen Sie Ihren Aufenthalt und lassen Sie sich von uns helfen, die perfekte Reiseroute zusammenzustellen.'
                  : isEs
                    ? 'La ubicación del hotel te sitúa a menos de 40 minutos de todos los destinos de esta guía. Reserva tu estancia y deja que te ayudemos a crear el itinerario perfecto.'
                  : 'La posizione dell\'hotel ti mette a meno di 40 minuti da tutte le destinazioni di questa guida. Prenota il tuo soggiorno e lascia che ti aiutiamo a costruire l\'itinerario perfetto.'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/prenota" className="btn-gold" style={{ padding: '1rem 2.5rem' }}>
              {isEn ? 'Book Your Stay' : isFr ? 'Réservez Votre Séjour' : isDe ? 'Buchen Sie Ihren Aufenthalt' : isEs ? 'Reserva tu estancia' : 'Prenota il Tuo Soggiorno'}
            </Link>
            <Link href="/camere" className="btn-outline-white" style={{ padding: '1rem 2.5rem' }}>
              {isEn ? 'Discover Rooms' : isFr ? 'Découvrir les Chambres' : isDe ? 'Zimmer Entdecken' : isEs ? 'Descubrir habitaciones' : 'Scopri le Camere'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
