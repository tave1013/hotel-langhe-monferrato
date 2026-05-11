'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { it, enUS, fr, es } from 'date-fns/locale';
import InfoPopup from './InfoPopup';
import useSiteLanguage from '@/hooks/useSiteLanguage';
import 'react-day-picker/dist/style.css';

export default function BookingForm({ onSubmit }) {
  const lang = useSiteLanguage();
  const isEn = lang === 'en';
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isEs = lang === 'es';
  const dfLocale = isEn ? enUS : isFr ? fr : isEs ? es : it;
  const tr = (itText, enText, frText, deText, esText) => (isEn ? enText : isFr ? frText : isDe ? deText : isEs ? (esText || itText) : itText);

  const formTopRef = useRef(null);
  const calendarRef = useRef(null);
  const submittingRef = useRef(false);
  const lastSubmitTime = useRef(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    single: 0,
    matrimonial: 0,
    twin: 0,
    triple: 0,
    quadruple: 0,
    suite: 0,
    dateRange: undefined,
    colazione: '',
    lateCheckout: 'no',
    pets: 0,
    extras: [],
    message: '',
    website: '' // Honeypot field
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  const validatePhone = (phone) => {
    const digits = phone.replace(/[^\d]/g, '');
    return digits.length >= 10;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sanitizeInput = (input) => {
    return input.trim().replace(/[<>"']/g, '');
  };

  const roomFieldConfigs = [
    { key: 'single', label: tr('Singola', 'Single', 'Simple', 'Einzelzimmer', 'Individual') },
    { key: 'matrimonial', label: tr('Matrimoniale', 'Double', 'Double', 'Doppelzimmer', 'Doble') },
    { key: 'twin', label: tr('Doppia', 'Twin', 'Twin', 'Zweibettzimmer', 'Twin'), helper: tr('(letti separati)', '(separate beds)', '(lits séparés)', '(getrennte Betten)', '(camas separadas)') },
    { key: 'triple', label: tr('Tripla', 'Triple', 'Triple', 'Dreizimmerkammer', 'Triple') },
    { key: 'quadruple', label: tr('Quadrupla', 'Quadruple', 'Quadruple', 'Vierpersonenzimmer', 'Cuádruple') },
    { key: 'suite', label: 'Suite' },
  ];

  const extrasOptions = [
    { id: 'bollicine',  label: tr('Bottiglia di bollicine con 2 calici', 'Bottle of sparkling wine with 2 glasses', 'Bouteille de vin pétillant avec 2 verres', 'Flasche Schaumwein mit 2 Gläsern', 'Botella de espumante con 2 copas'), price: '20€' },
    { id: 'cantine',   label: tr('Visita alle cantine con degustazione', 'Winery visit with tasting', 'Visite de cave avec dégustation', 'Weinkellerei-Besuch mit Verkostung', 'Visita a bodegas con degustación'), price: isEn ? 'from €25 p.p.' : isFr ? 'à partir de 25€ p.p.' : isDe ? 'ab 25€ p.P.' : isEs ? 'desde 25€ p.p.' : 'da 25€ p.p.' },
    { id: 'tartufo',   label: tr('Esperienza caccia al tartufo', 'Truffle hunting experience', 'Expérience chasse à la truffe', 'Trüffelsuche-Erlebnis', 'Experiencia de caza de trufa'), price: isEn ? 'from €87 p.p.' : isFr ? 'à partir de 87€ p.p.' : isDe ? 'ab 87€ p.P.' : isEs ? 'desde 87€ p.p.' : 'da 87€ p.p.' },
    { id: 'ebike',     label: tr('Tour e-bike per le Langhe', 'Langhe e-bike tour', 'Tour e-bike dans les Langhe', 'Langhe E-Bike-Tour', 'Tour e-bike por Langhe'), price: isEn ? 'from €35 p.p.' : isFr ? 'à partir de 35€ p.p.' : isDe ? 'ab 35€ p.P.' : isEs ? 'desde 35€ p.p.' : 'da 35€ p.p.' },
    { id: 'birre',     label: tr('Tour + degustazione al birrificio del territorio', 'Local brewery tour + tasting', 'Visite + dégustation dans la brasserie locale', 'Besuch der örtlichen Brauerei + Verkostung', 'Tour + degustación en cervecería local'), price: isEn ? 'from €15 p.p.' : isFr ? 'à partir de 15€ p.p.' : isDe ? 'ab 15€ p.P.' : isEs ? 'desde 15€ p.p.' : 'da 15€ p.p.' },
  ];

  const extrasInfo = {
    bollicine: {
      title: tr('Bollicine', 'Sparkling Wine', 'Bulles de Champagne', 'Schaumwein', 'Espumante'),
      description: (
        <>
          <p className="mb-3">
            {tr(
              'Benvenuti al vostro soggiorno con una bottiglia di spumante piemontese, perfettamente fredda e accompagnata da 2 calici eleganti.',
              'Welcome your stay with a bottle of Piemontese sparkling wine, perfectly chilled and accompanied by 2 elegant glasses.',
              'Bienvenue dans votre séjour avec une bouteille de vin pétillant piémontais, parfaitement frais et accompagné de 2 élégantes flûtes.',
              'Willkommen in Ihrem Aufenthalt mit einer Flasche Piemontese-Schaumwein, perfekt gekühlt und mit 2 eleganten Gläsern.',
              'Da la bienvenida a tu estancia con una botella de espumante piamontés, perfectamente fría y acompañada de 2 copas elegantes.'
            )}
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>{tr('Cosa è incluso:', "What's included:", 'Ce qui est inclus :', 'Was ist enthalten:', 'Qué incluye:')}</h4>
          <p className="mb-3">
            {tr(
              '1 bottiglia di spumante locale con 2 calici, consegnata in camera. Perfetto per celebrazioni o momenti speciali.',
              '1 bottle of local sparkling wine with 2 glasses, delivered to your room. Perfect for celebrations or special moments.',
              '1 bouteille de vin mousseux local avec 2 flûtes, livrée dans votre chambre. Parfait pour les célébrations ou les moments spéciaux.',
              '1 Flasche lokaler Schaumwein mit 2 Gläsern, geliefert in Ihrem Zimmer. Perfekt für Feiern oder besondere Momente.',
              '1 botella de espumante local con 2 copas, entregada en tu habitación. Perfecto para celebraciones o momentos especiales.'
            )}
          </p>
          <p className="text-sm" style={{ color: '#9A8A7A' }}>
            {tr('Prezzo: 20€. Si prega di avvisare in anticipo.', 'Price: €20. Advance notice appreciated.', 'Prix : 20 €. Merci de nous prévenir à l\'avance.', 'Preis: 20€. Vorankündigung erforderlich.', 'Precio: 20€. Se recomienda avisar con antelación.')}
          </p>
        </>
      )
    },
    cantine: {
      title: tr('Visita alle Cantine', 'Winery Visit', 'Visite de Caves', 'Weinkellerei-Besuch', 'Visita a bodegas'),
      description: (
        <>
          <p className="mb-3">
            {tr(
              "Scopri le storiche cantine delle Langhe con una visita guidata esclusiva. Un'esperienza autentica tra le vigne e la tradizione vinicola piemontese.",
              'Discover the historic wineries of Langhe with an exclusive guided tour. An authentic experience among the vineyards and Piedmont winemaking tradition.',
              'Découvrez les caves historiques des Langhe lors d\'une visite guidée exclusive. Une expérience authentique au cœur des vignes et de la tradition viticole piémontaise.',
              'Entdecken Sie die historischen Weinbetriebe von Langhe mit einer exklusiven Führung. Eine authentische Erfahrung inmitten von Weinbergen und piemontesischer Weintradition.',
              'Descubre las bodegas históricas de Langhe con una visita guiada exclusiva. Una experiencia auténtica entre viñedos y tradición vinícola piamontesa.'
            )}
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>{tr('Cosa è incluso:', "What's included:", 'Ce qui est inclus :', 'Was ist enthalten:', 'Qué incluye:')}</h4>
          <p className="mb-3">
            {tr(
              'Tour guidato di una cantina locale a vostra scelta, degustazione di vini, durata circa 1,5 ore.',
              'Guided tour of a local winery of your choice, wine tasting, approximately 1.5 hours.',
              'Visite guidée d\'une cave locale de votre choix, dégustation de vins, durée environ 1h30.',
              'Führung durch einen lokalen Weinbetrieb Ihrer Wahl, Weinverkostung, ca. 1,5 Stunden.',
              'Visita guiada a una bodega local de tu elección, degustación de vinos, duración aproximada de 1,5 horas.'
            )}
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>{tr('Le cantine visitabili a scelta tra:', 'Available wineries:', 'Caves disponibles au choix :', 'Verfügbare Weinkellereien zur Auswahl:', 'Bodegas disponibles a elegir:')}</h4>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Cantine Sotterranee Bosca</li>
            <li>Cantina Ronzano</li>
            <li>Cantina Boeri</li>
          </ul>
          <p className="text-sm" style={{ color: '#9A8A7A' }}>
            {tr('Prezzo a persona: da 25€. Minimo 2 persone.', 'Price per person: from €25. Minimum 2 people.', 'Prix par personne : à partir de 25 €. Minimum 2 personnes.', 'Preis pro Person: ab 25€. Mindestens 2 Personen.', 'Precio por persona: desde 25€. Mínimo 2 personas.')}
          </p>
          <p className="text-sm mt-2" style={{ color: '#9A8A7A' }}>
            {tr(
              'Si prega di avvisare in anticipo così da poter organizzare al meglio e garantire la disponibilità dei posti.',
              'Please notify us in advance so we can best organize and ensure availability.',
              'Merci de nous prévenir à l\'avance afin que nous puissions organiser au mieux et garantir les disponibilités.',
              'Bitte benachrichtigen Sie uns im Voraus, damit wir die beste Organisation gewährleisten können.',
              'Por favor avísanos con antelación para poder organizarlo mejor y garantizar la disponibilidad.'
            )}
          </p>
        </>
      )
    },
    tartufo: {
      title: tr('Caccia al Tartufo', 'Truffle Hunting', 'Chasse à la Truffe', 'Trüffelsuche', 'Caza de trufa'),
      description: (
        <>
          <p className="mb-3">
            {tr(
              'Un\'avventura indimenticabile alla ricerca del "diamante nero" delle Langhe con cani trufolatori addestrati e un esperto tartufaio locale.',
              'An unforgettable adventure searching for the "black diamond" of Langhe with trained truffle dogs and a local expert truffle hunter.',
              'Une aventure inoubliable à la recherche du « diamant noir » des Langhe avec des chiens truffiers dressés et un expert trufficulture local.',
              'Ein unvergessliches Abenteuer auf der Suche nach dem "schwarzen Diamanten" von Langhe mit ausgebildeten Trüffelhunden und einem lokalen Experten-Trüffelsammler.',
              'Una aventura inolvidable en busca del “diamante negro” de Langhe con perros truferos entrenados y un experto local.'
            )}
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>{tr('Cosa è incluso:', "What's included:", 'Ce qui est inclus :', 'Was ist enthalten:', 'Qué incluye:')}</h4>
          <p className="mb-3">
            {tr(
              'Uscita in bosco con tartufaio professionista, ricerca e raccolta tartufi (in stagione), lezione sulla ricerca, identificazione e usi in cucina. Durata circa 1,5 ore.',
              'Forest outing with professional truffle hunter, truffle search and collection (in season), lesson on truffle hunting, identification and culinary uses. Approximately 1.5 hours.',
              'Sortie en forêt avec un trufficulture professionnel, recherche et récolte de truffes (en saison), initiation à la recherche, l\'identification et les usages culinaires. Durée environ 1h30.',
              'Waldausflug mit professionellem Trüffelsammler, Trüffelsuche und -sammlung (in der Saison), Unterricht über Trüffelsuche, Identifizierung und kulinarische Verwendung. Etwa 1,5 Stunden.',
              'Salida al bosque con buscador profesional, búsqueda y recolección de trufas (en temporada), explicación sobre identificación y uso en cocina. Duración aproximada: 1,5 horas.'
            )}
          </p>
          <div className="space-y-1 mb-3 text-sm" style={{ color: '#2C2520' }}>
            <p><span className="font-semibold">{tr('Orari disponibili', 'Available times', 'Horaires disponibles', 'Verfügbare Zeiten', 'Horarios disponibles')}</span>: 11:00, 14:30, 17:00</p>
            <p><span className="font-semibold">{tr('Disponibilità', 'Availability', 'Disponibilité', 'Verfügbarkeit', 'Disponibilidad')}</span>: {tr('non disponibile il mercoledì e il giovedì.', 'not available on Wednesdays and Thursdays.', 'non disponible le mercredi et le jeudi.', 'nicht verfügbar am Mittwoch und Donnerstag.', 'no disponible miércoles y jueves.')}</p>
            <p><span className="font-semibold">{tr('Bambini fino a 17 anni', 'Children up to 17', 'Enfants jusqu\'à 17 ans', 'Kinder bis 17 Jahre', 'Niños hasta 17 años')}</span>: {tr('ingresso gratuito.', 'free entry.', 'entrée gratuite.', 'kostenlos.', 'entrada gratuita.')}</p>
          </div>
          <p className="text-sm" style={{ color: '#9A8A7A' }}>
            {tr('Prezzo a persona: da 87€.', 'Price per person: from €87.', 'Prix par personne : à partir de 87 €.', 'Preis pro Person: ab 87€.', 'Precio por persona: desde 87€.')}
          </p>
          <p className="text-sm mt-2" style={{ color: '#9A8A7A' }}>
            {tr(
              'Si prega di avvisare in anticipo così da poter organizzare al meglio e garantire la disponibilità dei posti.',
              'Please notify us in advance so we can best organize and ensure availability.',
              'Merci de nous prévenir à l\'avance afin que nous puissions organiser au mieux et garantir les disponibilités.',
              'Bitte benachrichtigen Sie uns im Voraus, damit wir die beste Organisation gewährleisten können.',
              'Por favor avísanos con antelación para poder organizarlo mejor y garantizar la disponibilidad.'
            )}
          </p>
        </>
      )
    },
    ebike: {
      title: tr('Tour E-Bike', 'E-Bike Tour', 'Tour E-Bike', 'E-Bike-Tour', 'Tour E-Bike'),
      description: (
        <>
          <p className="mb-3">
            {tr(
              'Pedala attraverso i paesaggi mozzafiato delle Langhe con le nostre biciclette elettriche. Un modo ecologico e divertente per scoprire la regione, adatto a ogni età.',
              'Pedal through the breathtaking landscapes of Langhe with our electric bicycles. An ecological and fun way to discover the region, suitable for all ages.',
              'Parcourez les paysages à couper le souffle des Langhe à vélo électrique. Une façon écologique et ludique de découvrir la région, adaptée à tous les âges.',
              'Fahren Sie mit unseren Elektrofahrrädern durch die atemberaubende Landschaft von Langhe. Eine ökologische und unterhaltsame Möglichkeit, die Region zu erkunden, geeignet für alle Altersgruppen.',
              'Pedalea por los impresionantes paisajes de Langhe con nuestras bicicletas eléctricas. Una forma ecológica y divertida de descubrir la región, apta para todas las edades.'
            )}
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>{tr('Cosa è incluso:', "What's included:", 'Ce qui est inclus :', 'Was ist enthalten:', 'Qué incluye:')}</h4>
          <p className="mb-3">
            {tr(
              'E-bike, itinerario guidato attraverso vigne e borghi, soste panoramiche, guida locale esperta. Il noleggio comprende casco, zainetto, lucchetto, kit riparazione forature e mantellina antipioggia. Seggiolino bimbo disponibile su richiesta.',
              'E-bike, guided itinerary through vineyards and villages, scenic stops, expert local guide. Rental includes helmet, backpack, lock, repair kit and rain cape. Child seat available upon request.',
              'Vélo électrique, itinéraire guidé à travers vignes et villages, arrêts panoramiques, guide local expert. La location comprend casque, sac à dos, antivol, kit de réparation et cape de pluie. Siège enfant disponible sur demande.',
              'E-Bike, geführte Strecke durch Weinberge und Dörfer, Panoramaaussichtspunkte, sachkundiger lokaler Führer. Der Mietservice umfasst Helm, Rucksack, Schloss, Reparaturset und Regenumhang. Kindersitz auf Anfrage verfügbar.',
              'E-bike, itinerario guiado entre viñedos y pueblos, paradas panorámicas y guía local experta. El alquiler incluye casco, mochila, candado, kit de reparación y capa de lluvia. Silla para niño bajo petición.'
            )}
          </p>
          <p className="mb-3 text-sm" style={{ color: '#2C2520' }}>
            <span className="font-semibold">{tr('Percorsi disponibili', 'Available routes', 'Itinéraires disponibles', 'Verfügbare Strecken', 'Rutas disponibles')}</span>: {tr('da 40 a 80 km a seconda della scelta.', 'from 40 to 80 km depending on your choice.', 'de 40 à 80 km selon votre choix.', 'von 40 bis 80 km je nach Wahl.', 'de 40 a 80 km según la ruta elegida.')}
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>{tr('Opzioni e prezzi:', 'Options and prices:', 'Options et tarifs :', 'Optionen und Tarife:', 'Opciones y precios:')}</h4>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>{tr('Mezza giornata (8:00–12:30 oppure 15:00–19:30): 35€ a persona', 'Half day (8:00–12:30 or 15:00–19:30): €35 per person', 'Demi-journée (8h00–12h30 ou 15h00–19h30) : 35 € par personne', 'Halbtag (8:00–12:30 oder 15:00–19:30): 35€ pro Person', 'Media jornada (8:00–12:30 o 15:00–19:30): 35€ por persona')}</li>
            <li>{tr('1 giorno (8:00–19:30): 45€ a persona', '1 day (8:00–19:30): €45 per person', '1 journée (8h00–19h30) : 45 € par personne', '1 Tag (8:00–19:30): 45€ pro Person', '1 día (8:00–19:30): 45€ por persona')}</li>
            <li>{tr('2 giorni: 80€ a persona', '2 days: €80 per person', '2 jours : 80 € par personne', '2 Tage: 80€ pro Person', '2 días: 80€ por persona')}</li>
            <li>{tr('3 giorni: 110€ a persona', '3 days: €110 per person', '3 jours : 110 € par personne', '3 Tage: 110€ pro Person', '3 días: 110€ por persona')}</li>
          </ul>
          <p className="text-sm" style={{ color: '#9A8A7A' }}>
            {tr('Minimo 2 persone. Disponibilità: marzo–novembre.', 'Minimum 2 people. Available: March–November.', 'Minimum 2 personnes. Disponible : mars–novembre.', 'Mindestens 2 Personen. Verfügbar: März–November.', 'Mínimo 2 personas. Disponibilidad: marzo–noviembre.')}
          </p>
        </>
      )
    },
    birre: {
      title: tr('Birrificio del Territorio', 'Local Brewery', 'Brasserie Locale', 'Örtliche Brauerei', 'Cervecería local'),
      description: (
        <>
          <p className="mb-3">
            {tr(
              'Visita una delle migliori birraie artigianali del territorio piemontese. Scopri il processo di produzione e assaggia birre esclusive create localmente.',
              'Visit one of the best craft breweries in the Piedmont region. Discover the production process and taste exclusive beers created locally.',
              'Visitez l\'une des meilleures brasseries artisanales du Piémont. Découvrez le processus de production et dégustez des bières exclusives créées localement.',
              'Besuchen Sie eine der besten Handwerkbrauereien in der Piemont-Region. Entdecken Sie den Produktionsprozess und probieren Sie exklusive lokal hergestellte Biere.',
              'Visita una de las mejores cervecerías artesanales del Piamonte. Descubre el proceso de producción y degusta cervezas exclusivas elaboradas localmente.'
            )}
          </p>
          <h4 className="font-semibold mb-2" style={{ color: '#C9A870' }}>{tr('Cosa è incluso:', "What's included:", 'Ce qui est inclus :', 'Was ist enthalten:', 'Qué incluye:')}</h4>
          <p className="mb-3">
            {tr(
              'Tour dei reparti di produzione, degustazione di 3 birre artigianali con abbinamento di 3 assaggi, spiegazione del processo di fermentazione. Durata circa 1,5 ore. Al termine è possibile acquistare direttamente i prodotti in azienda.',
              'Tour of production departments, tasting of 3 craft beers with 3 food pairings, explanation of fermentation process. Approximately 1.5 hours. At the end you can purchase products directly from the brewery.',
              'Visite des ateliers de production, dégustation de 3 bières artisanales avec 3 accords mets-bières, explication du processus de fermentation. Durée environ 1h30. À la fin, il est possible d\'acheter les produits directement à la brasserie.',
              'Führung durch die Produktionsabteilungen, Verkostung von 3 Handwerkbieren mit 3 Speisepaaren, Erklärung des Gärungsprozesses. Etwa 1,5 Stunden. Am Ende können Sie die Produkte direkt in der Brauerei kaufen.',
              'Tour por las áreas de producción, degustación de 3 cervezas artesanales con 3 maridajes y explicación del proceso de fermentación. Duración aproximada 1,5 horas. Al final puedes comprar productos directamente en la cervecería.'
            )}
          </p>
          <p className="text-sm" style={{ color: '#9A8A7A' }}>
            {tr('Prezzo a persona: da 15€. Minimo 2 persone.', 'Price per person: from €15. Minimum 2 people.', 'Prix par personne : à partir de 15 €. Minimum 2 personnes.', 'Preis pro Person: ab 15€. Mindestens 2 Personen.', 'Precio por persona: desde 15€. Mínimo 2 personas.')}
          </p>
          <p className="text-sm mt-2" style={{ color: '#9A8A7A' }}>
            {tr(
              'Si prega di avvisare in anticipo così da poter organizzare al meglio e garantire la disponibilità dei posti.',
              'Please notify us in advance so we can best organize and ensure availability.',
              'Merci de nous prévenir à l\'avance afin que nous puissions organiser au mieux et garantir les disponibilités.',
              'Bitte benachrichtigen Sie uns im Voraus, damit wir die beste Organisation gewährleisten können.',
              'Por favor avísanos con antelación para poder organizarlo mejor y garantizar la disponibilidad.'
            )}
          </p>
        </>
      )
    },
  };

  const toggleExtra = (id) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.includes(id)
        ? prev.extras.filter(e => e !== id)
        : [...prev.extras, id],
    }));
  };

  const totalRoomsSelected = () => {
    return roomFieldConfigs.reduce((total, room) => total + (formData[room.key] || 0), 0);
  };

  const scrollToFormTop = () => {
    if (!formTopRef.current) return;
    formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const buildWhatsAppMessage = ({ checkInFormatted, checkOutFormatted, nights }) => {
    const safeName    = sanitizeInput(formData.name);
    const safeEmail   = sanitizeInput(formData.email);
    const safePhone   = sanitizeInput(formData.phone);
    const safeMessage = sanitizeInput(formData.message);

    const selectedRoomLines = [
      { label: tr('Camere Singole', 'Single Rooms', 'Chambres Simples', 'Einzelzimmer', 'Habitaciones individuales'), value: formData.single },
      { label: tr('Camere Matrimoniali', 'Double Rooms', 'Chambres Doubles', 'Doppelzimmer', 'Habitaciones dobles'), value: formData.matrimonial },
      { label: tr('Camere Doppie (letti separati)', 'Twin Rooms (separate beds)', 'Chambres Twin (lits séparés)', 'Zweibettzimmer (getrennte Betten)', 'Habitaciones twin (camas separadas)'), value: formData.twin },
      { label: tr('Camere Triple', 'Triple Rooms', 'Chambres Triples', 'Dreibettzimmer', 'Habitaciones triples'), value: formData.triple },
      { label: tr('Camere Quadruple', 'Quadruple Rooms', 'Chambres Quadruples', 'Vierpersonenzimmer', 'Habitaciones cuádruples'), value: formData.quadruple },
      { label: 'Suite', value: formData.suite },
    ]
      .filter((room) => room.value > 0)
      .map((room) => `*${room.label}:* ${room.value}`);

    const extraLabels = formData.extras.length > 0
      ? formData.extras.map(id => extrasOptions.find(o => o.id === id)?.label).filter(Boolean).join(', ')
      : tr('Nessun extra selezionato', 'No extras selected', 'Aucun extra sélectionné', 'Keine Extras ausgewählt', 'Ningún extra seleccionado');

    const lines = [
      tr('Buongiorno, vorrei richiedere disponibilita per la seguentte data:', 'Hello, I would like to request availability for the following dates:', 'Bonjour, je souhaite demander la disponibilité pour les dates suivantes :', 'Hallo, ich möchte die Verfügbarkeit für die folgenden Termine anfordern:', 'Hola, me gustaría solicitar disponibilidad para las siguientes fechas:'),
      '',
      tr('*Prenotazione*', '*Booking Request*', '*Demande de Réservation*', '*Buchungsanfrage*', '*Solicitud de reserva*'),
      `*${tr('Nome', 'Name', 'Nom', 'Name', 'Nombre')}:* ${safeName}`,
      `*${tr('Cellulare', 'Phone', 'Téléphone', 'Telefon', 'Teléfono')}:* ${safePhone}`,
      `*Email:* ${safeEmail}`,
      ...selectedRoomLines.map(line => line.replace(
        /Camere Singole|Camere Matrimoniali|Camere Doppie|Camere Triple|Camere Quadruple/g,
        (match) => {
          if (!isDe) return match;
          const mapping = {
            'Camere Singole': 'Einzelzimmer',
            'Camere Matrimoniali': 'Doppelzimmer',
            'Camere Doppie (letti separati)': 'Zweibettzimmer (getrennte Betten)',
            'Camere Triple': 'Dreibettzimmer',
            'Camere Quadruple': 'Vierpersonenzimmer'
          };
          return mapping[match] || match;
        }
      )),
      `*${tr('Check-in', 'Check-in', 'Arrivée', 'Check-in', 'Llegada')}:* ${checkInFormatted}`,
      `*${tr('Check-out', 'Check-out', 'Départ', 'Check-out', 'Salida')}:* ${checkOutFormatted}`,
      `*${tr('Notti', 'Nights', 'Nuits', 'Nächte', 'Noches')}:* ${nights}`,
      `*${tr('Colazione', 'Breakfast', 'Petit-déjeuner', 'Frühstück', 'Desayuno')}:* ${formData.colazione === 'inclusa' ? tr('Colazione inclusa', 'Breakfast included', 'Petit-déjeuner inclus', 'Frühstück inbegriffen', 'Desayuno incluido') : tr('Colazione esclusa', 'Breakfast excluded', 'Petit-déjeuner non inclus', 'Frühstück ausgeschlossen', 'Desayuno no incluido')}`,
      `*${tr('Late checkout', 'Late checkout', 'Départ tardif', 'Späte Abreise', 'Salida tardía')}:* ${formData.lateCheckout === 'si' ? tr('Sì (+15€)', 'Yes (+€15)', 'Oui (+15€)', 'Ja (+15€)', 'Sí (+15€)') : tr('No, grazie', 'No, thanks', 'Non, merci', 'Nein, danke', 'No, gracias')}`,
      `*${tr('Animali domestici', 'Pets', 'Animaux domestiques', 'Haustiere', 'Mascotas')}:* ${formData.pets > 0 ? `${formData.pets} (${formData.pets === 1 ? tr('1 animale', '1 pet', '1 animal', '1 Haustier', '1 mascota') : `${formData.pets} ${tr('animali', 'pets', 'animaux', 'Haustiere', 'mascotas')}`} - ${tr('supplemento 15€ a notte per animale', '€15 per night per pet surcharge', 'supplément de 15€ par nuit et par animal', '15€ pro Nacht pro Haustier Aufschlag', 'suplemento de 15€ por noche por mascota')})` : tr('Nessuno', 'None', 'Aucun', 'Keine', 'Ninguna')}`,
      `*${tr('Esperienze ed Extra', 'Experiences & Extras', 'Expériences & Extras', 'Erfahrungen & Extras', 'Experiencias y extras')}:* ${extraLabels}`,
      `*${tr('Messaggio', 'Message', 'Message', 'Nachricht', 'Mensaje')}:* ${safeMessage || tr('Nessuna nota aggiuntiva', 'No additional notes', 'Aucune note supplémentaire', 'Keine zusätzlichen Anmerkungen', 'Sin notas adicionales')}`,
    ];
    return lines.join('\n');
  };

  const calculateNights = () => {
    if (!formData.dateRange?.from || !formData.dateRange?.to) return 0;
    const diffTime = Math.abs(formData.dateRange.to - formData.dateRange.from);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDateRange = () => {
    if (!formData.dateRange?.from) return isEn ? 'Arrival: --/--/----   |   Departure: --/--/----' : isFr ? 'Arrivée : --/--/----   |   Départ : --/--/----' : isDe ? 'Ankunft: --/--/----   |   Abreise: --/--/----' : isEs ? 'Llegada: --/--/----   |   Salida: --/--/----' : 'Arrivo: --/--/----   |   Partenza: --/--/----';
    if (!formData.dateRange?.to) {
      return isEn
        ? `Arrival: ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale })}   |   Departure: --/--/----`
        : isFr
          ? `Arrivée : ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale })}   |   Départ : --/--/----`
          : isDe
            ? `Ankunft: ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale })}   |   Abreise: --/--/----`
            : isEs
              ? `Llegada: ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale })}   |   Salida: --/--/----`
            : `Arrivo: ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale })}   |   Partenza: --/--/----`;
    }
    return isEn
      ? `Arrival: ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale })}   |   Departure: ${format(formData.dateRange.to, 'dd/MM/yyyy', { locale: dfLocale })}`
      : isFr
        ? `Arrivée : ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale })}   |   Départ : ${format(formData.dateRange.to, 'dd/MM/yyyy', { locale: dfLocale })}`
        : isDe
          ? `Ankunft: ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale })}   |   Abreise: ${format(formData.dateRange.to, 'dd/MM/yyyy', { locale: dfLocale })}`
          : isEs
            ? `Llegada: ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale })}   |   Salida: ${format(formData.dateRange.to, 'dd/MM/yyyy', { locale: dfLocale })}`
          : `Arrivo: ${format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale })}   |   Partenza: ${format(formData.dateRange.to, 'dd/MM/yyyy', { locale: dfLocale })}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submittingRef.current || isLoading) return;
    
    // Honeypot check
    if (formData.website) {
      console.warn('Bot detected');
      return;
    }

    // Rate limiting (3 seconds between submissions)
    const now = Date.now();
    if (now - lastSubmitTime.current < 3000) {
      setErrors([tr('Attendi qualche secondo prima di inviare nuovamente', 'Please wait a few seconds before submitting again', 'Veuillez attendre quelques secondes avant de renvoyer la demande', 'Bitte warten Sie einige Sekunden, bevor Sie erneut einreichen', 'Espera unos segundos antes de volver a enviar')]);
      scrollToFormTop();
      return;
    }
    lastSubmitTime.current = now;

    submittingRef.current = true;

    const newErrors = [];

  if (!formData.name.trim())    newErrors.push(tr('Il nome è obbligatorio', 'Name is required', 'Le nom est obligatoire', 'Name ist erforderlich', 'El nombre es obligatorio'));
  if (formData.name.trim().length < 2) newErrors.push(tr('Il nome deve avere almeno 2 caratteri', 'Name must be at least 2 characters', 'Le nom doit comporter au moins 2 caractères', 'Name muss mindestens 2 Zeichen lang sein', 'El nombre debe tener al menos 2 caracteres'));
  if (!formData.email.trim())   newErrors.push(tr("L'email è obbligatoria", 'Email is required', "L'e-mail est obligatoire", 'E-Mail ist erforderlich', 'El email es obligatorio'));
  else if (!validateEmail(formData.email)) newErrors.push(tr('Inserisci un\'email valida', 'Please enter a valid email', 'Veuillez saisir une adresse e-mail valide', 'Bitte geben Sie eine gültige E-Mail-Adresse ein', 'Introduce un email válido'));
  if (!formData.phone.trim())   newErrors.push(tr('Il cellulare è obbligatorio', 'Phone is required', 'Le téléphone est obligatoire', 'Telefon ist erforderlich', 'El teléfono es obligatorio'));
  else if (!validatePhone(formData.phone)) newErrors.push(tr('Il cellulare deve contenere almeno 10 cifre', 'Phone must contain at least 10 digits', 'Le téléphone doit contenir au moins 10 chiffres', 'Telefon muss mindestens 10 Ziffern enthalten', 'El teléfono debe contener al menos 10 dígitos'));
  if (totalRoomsSelected() < 1) newErrors.push(tr('Seleziona almeno una tipologia di camera (quantità maggiore di 0)', 'Select at least one room type (quantity greater than 0)', 'Sélectionnez au moins un type de chambre (quantité supérieure à 0)', 'Wählen Sie mindestens einen Zimmertyp aus (Menge größer als 0)', 'Selecciona al menos un tipo de habitación (cantidad mayor que 0)'));
  if (!formData.colazione) newErrors.push(tr('Seleziona un\'opzione per la colazione', 'Select a breakfast option', 'Sélectionnez une option pour le petit-déjeuner', 'Wählen Sie eine Frühstücksoption aus', 'Selecciona una opción de desayuno'));
  if (!formData.dateRange?.from || !formData.dateRange?.to) newErrors.push(tr('Seleziona le date di check-in e check-out', 'Select check-in and check-out dates', "Sélectionnez les dates d'arrivée et de départ", 'Wählen Sie das Eincheck- und Abreisedatum aus', 'Selecciona las fechas de check-in y check-out'));

    if (newErrors.length > 0) {
      setErrors(newErrors);
      scrollToFormTop();
      submittingRef.current = false;
      return;
    }

    setIsLoading(true);

    try {
      const nights = calculateNights();
      const checkInFormatted  = format(formData.dateRange.from, 'dd/MM/yyyy', { locale: dfLocale });
      const checkOutFormatted = format(formData.dateRange.to,   'dd/MM/yyyy', { locale: dfLocale });

      const whatsappMessage = buildWhatsAppMessage({ checkInFormatted, checkOutFormatted, nights });
      const whatsappUrl = `https://wa.me/393518011730?text=${encodeURIComponent(whatsappMessage)}`;

      window.location.href = whatsappUrl;

      if (onSubmit) await onSubmit(formData);

      setFormData({ name: '', email: '', phone: '', single: 0, matrimonial: 0, twin: 0, triple: 0, quadruple: 0, suite: 0, dateRange: undefined, colazione: '', lateCheckout: 'no', pets: 0, extras: [], message: '', website: '' });
      setErrors([]);

    } catch (error) {
      console.error(tr('Errore apertura WhatsApp:', 'WhatsApp open error:', "Erreur lors de l'ouverture de WhatsApp :", 'WhatsApp-Fehler beim Öffnen:', 'Error al abrir WhatsApp:'), error);
      setErrors([
        tr("Si è verificato un errore durante l'apertura di WhatsApp. Riprova.", 'An error occurred while opening WhatsApp. Please try again.', 'Une erreur s\'est produite lors de l\'ouverture de WhatsApp. Veuillez réessayer.', 'Bei der Öffnung von WhatsApp ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.', 'Se produjo un error al abrir WhatsApp. Inténtalo de nuevo.'),
        `${tr('Dettaglio', 'Detail', 'Détail', 'Einzelheiten', 'Detalle')}: ${error?.message || tr('Errore sconosciuto', 'Unknown error', 'Erreur inconnue', 'Unbekannter Fehler', 'Error desconocido')}`
      ]);
      scrollToFormTop();
    } finally {
      setIsLoading(false);
      submittingRef.current = false;
    }
  };

  const updateCounter = (field, increment) => {
    setFormData(prev => {
      const newValue = prev[field] + increment;
      if (newValue < 0 || newValue > 10) return prev;
      return { ...prev, [field]: newValue };
    });
  };

  const updatePetsCounter = (increment) => {
    setFormData(prev => {
      const newValue = prev.pets + increment;
      if (newValue < 0 || newValue > 5) return prev;
      return { ...prev, pets: newValue };
    });
  };

  return (
    <div ref={formTopRef} className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, color: '#2C2520' }}>{tr('Richiedi Disponibilità', 'Request Availability', 'Demander la Disponibilité', 'Verfügbarkeit anfordern', 'Solicitar disponibilidad')}</h2>
        <div className="w-16 h-0.5 bg-[#C9A870] mx-auto mb-6"></div>
        <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.95rem' }}>
          {tr('Compila il form con i tuoi dati e le date del tuo soggiorno. Ti risponderemo al più presto per confermare la disponibilità e fornirti tutte le informazioni necessarie.', 'Fill out the form with your details and stay dates. We will reply as soon as possible to confirm availability and provide all necessary information.', 'Remplissez le formulaire avec vos coordonnées et les dates de votre séjour. Nous vous répondrons dès que possible pour confirmer la disponibilité et vous fournir toutes les informations nécessaires.', 'Füllen Sie das Formular mit Ihren Daten und den Aufenthaltsdaten aus. Wir werden uns so bald wie möglich melden, um die Verfügbarkeit zu bestätigen und alle notwendigen Informationen bereitzustellen.', 'Completa el formulario con tus datos y las fechas de tu estancia. Te responderemos lo antes posible para confirmar disponibilidad y darte toda la información necesaria.')}
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start max-w-3xl mx-auto mb-10">
          {[
            tr('Miglior prezzo garantito prenotando direttamente', 'Best price guaranteed when booking direct', 'Meilleur prix garanti en réservant en direct', 'Bestes Preis garantiert bei direkter Buchung', 'Mejor precio garantizado reservando directamente'),
            tr('Cancellazione gratuita fino a 48h prima del check-in', 'Free cancellation up to 48h before check-in', "Annulation gratuite jusqu'à 48h avant le check-in", 'Kostenlose Stornierung bis 48 Stunden vor dem Check-in', 'Cancelación gratuita hasta 48h antes del check-in'),
            tr('Assistenza dedicata per qualsiasi necessità', 'Dedicated support for any need', 'Assistance dédiée pour chaque besoin', 'Unterstützung für jede Anforderung', 'Asistencia dedicada para cualquier necesidad')
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 flex-1">
              <div className="w-6 h-6 rounded-full bg-[#C9A870] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <p className="text-gray-600 text-sm text-left" style={{ fontFamily: 'Lato, sans-serif' }}>{text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 bg-red-100 border border-red-300 rounded-lg p-4">
            {errors.map((error, idx) => (
              <p key={idx} className="text-red-700 text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>• {error}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-none p-6 md:p-10 shadow-lg" style={{ border: '1px solid rgba(201,168,112,0.2)' }}>
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NOME / EMAIL / CELLULARE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{tr('Nome', 'Name', 'Nom', 'Name', 'Nombre')}</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={isEn ? 'John Smith' : isFr ? 'Jean Dupont' : isDe ? 'Max Müller' : isEs ? 'Juan Pérez' : 'Paolo Rossi'} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={isEn ? 'john.smith@email.com' : isEs ? 'juan.perez@email.com' : 'paolo.rossi@email.it'} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
            </div>
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{tr('Cellulare', 'Phone', 'Téléphone', 'Telefon', 'Teléfono')}</label>
              <input type="tel" value={formData.phone} onChange={(e) => { const value = e.target.value; if (/^[\d+\-\s]*$/.test(value)) setFormData({ ...formData, phone: value }); }} placeholder="+39 333 1234567" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
            </div>
          </div>

          {/* TIPOLOGIE CAMERE */}
          <div>
            <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{tr('Tipologie camere', 'Room types', 'Types de chambres', 'Zimmertypen', 'Tipos de habitación')}</label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {roomFieldConfigs.map((room) => (
                <div key={room.key}>
                  <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>
                    {room.label} {room.helper ? <span style={{ textTransform: 'none', letterSpacing: 'normal', fontWeight: 600 }}>{room.helper}</span> : null}
                  </label>
                  <div className="bg-[#f5f5f5] rounded-none p-4 flex items-center justify-between">
                    <span className="text-gray-800" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}>{formData[room.key]} {formData[room.key] === 1 ? tr('camera', 'room', 'chambre', 'Zimmer', 'habitación') : tr('camere', 'rooms', 'chambres', 'Zimmer', 'habitaciones')}</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => updateCounter(room.key, -1)}
                        disabled={formData[room.key] <= 0}
                        className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData[room.key] <= 0 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`}
                        style={{ fontSize: '1.2rem', fontWeight: 600 }}
                      >
                        −
                      </button>
                      <button
                        type="button"
                        onClick={() => updateCounter(room.key, 1)}
                        disabled={formData[room.key] >= 10}
                        className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData[room.key] >= 10 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`}
                        style={{ fontSize: '1.2rem', fontWeight: 600 }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLAZIONE */}
          <div>
            <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{tr('Colazione', 'Breakfast', 'Petit-déjeuner', 'Frühstück', 'Desayuno')}</label>
            <div className="relative">
              <select
                value={formData.colazione}
                onChange={(e) => setFormData({ ...formData, colazione: e.target.value })}
                className="w-full bg-[#f5f5f5] px-4 py-4 appearance-none focus:outline-none focus:border-[#C9A870] transition-colors cursor-pointer"
                style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: formData.colazione ? '#2C2520' : '#9A8A7A', border: '1px solid #e5e7eb', borderRadius: 0 }}
              >
                <option value="" disabled>{tr('Seleziona un\'opzione...', 'Select an option...', 'Sélectionnez une option...', 'Wählen Sie eine Option...', 'Selecciona una opción...')}</option>
                <option value="inclusa">{tr('Colazione inclusa', 'Breakfast included', 'Petit-déjeuner inclus', 'Frühstück inbegriffen', 'Desayuno incluido')}</option>
                <option value="esclusa">{tr('Colazione esclusa', 'Breakfast excluded', 'Petit-déjeuner non inclus', 'Frühstück ausgeschlossen', 'Desayuno no incluido')}</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <svg className="w-4 h-4" style={{ color: '#C9A870' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          {/* LATE CHECKOUT + ANIMALI DOMESTICI */}
          <div className="space-y-5">
            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{tr('Late checkout', 'Late checkout', 'Départ tardif', 'Späte Abreise', 'Salida tardía')}</label>
              <div className="relative">
                <select
                  value={formData.lateCheckout}
                  onChange={(e) => setFormData({ ...formData, lateCheckout: e.target.value })}
                  className="w-full bg-[#f5f5f5] px-4 py-4 appearance-none focus:outline-none focus:border-[#C9A870] transition-colors cursor-pointer"
                  style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: '#2C2520', border: '1px solid #e5e7eb', borderRadius: 0 }}
                >
                  <option value="no">{tr('No, grazie', 'No, thanks', 'Non, merci', 'Nein, danke', 'No, gracias')}</option>
                  <option value="si">{tr('Sì (+15€ supplemento)', 'Yes (+€15 surcharge)', 'Oui (+15€ supplément)', 'Ja (+15€ Aufschlag)', 'Sí (+15€ suplemento)')}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="w-4 h-4" style={{ color: '#C9A870' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>
                {tr('Hai animali domestici?', 'Do you have pets?', 'Avez-vous des animaux domestiques ?', 'Haben Sie Haustiere?', '¿Tienes mascotas?')} <span style={{ textTransform: 'none', letterSpacing: 'normal', fontWeight: 600, fontSize: '0.82rem', color: '#7E6F61' }}>{tr('(+15€ a notte per animale)', '(+€15 per night per pet)', '(+15€ par nuit et par animal)', '(+15€ pro Nacht pro Haustier)', '(+15€ por noche por mascota)')}</span>
              </label>
              <div className="bg-[#f5f5f5] rounded-none p-4 flex items-center justify-between" style={{ border: '1px solid #e5e7eb' }}>
                <span className="text-gray-800" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}>{formData.pets} {formData.pets === 1 ? tr('animale', 'pet', 'animal', 'Haustier', 'mascota') : tr('animali', 'pets', 'animaux', 'Haustiere', 'mascotas')}</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updatePetsCounter(-1)}
                    disabled={formData.pets <= 0}
                    className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData.pets <= 0 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`}
                    style={{ fontSize: '1.2rem', fontWeight: 600 }}
                  >
                    −
                  </button>
                  <button
                    type="button"
                    onClick={() => updatePetsCounter(1)}
                    disabled={formData.pets >= 5}
                    className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all ${formData.pets >= 5 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-gray-400 text-gray-700 hover:border-[#C9A870] hover:text-[#C9A870] bg-white'}`}
                    style={{ fontSize: '1.2rem', fontWeight: 600 }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ESPERIENZE ED EXTRA */}
          <div>
            <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{tr('Esperienze ed extra', 'Experiences and extras', 'Expériences et extras', 'Erfahrungen und Extras', 'Experiencias y extras')} <span style={{ textTransform: 'none', letterSpacing: 'normal', fontWeight: 600, fontSize: '0.82rem', color: '#7E6F61' }}>{tr('(opzionale)', '(optional)', '(optionnel)', '(optional)', '(opcional)')}</span></label>
            <div className="bg-[#f5f5f5] px-4 py-3" style={{ border: '1px solid #e5e7eb' }}>
              <p className="text-sm mb-3" style={{ fontFamily: 'Lato, sans-serif', color: '#9A8A7A', fontStyle: 'italic', fontSize: '0.92rem' }}>{tr('Personalizza la tua esperienza nelle Langhe…', 'Customize your Langhe experience…', 'Personnalisez votre expérience dans les Langhe…', 'Passen Sie Ihr Langhe-Erlebnis an…', 'Personaliza tu experiencia en Langhe…')}</p>
              <div className="space-y-3">
                {extrasOptions.map((opt) => (
                  <div key={opt.id} className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleExtra(opt.id)}>
                    <div
                      className="flex-shrink-0 w-5 h-5 border-2 flex items-center justify-center transition-all"
                      style={{
                        borderColor: formData.extras.includes(opt.id) ? '#C9A870' : '#d1d5db',
                        backgroundColor: formData.extras.includes(opt.id) ? '#C9A870' : 'white',
                        borderRadius: 0,
                      }}
                    >
                      {formData.extras.includes(opt.id) && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      )}
                    </div>
                    <span className="flex-1" style={{ fontFamily: 'Lato, sans-serif', color: '#2C2520', fontSize: '0.96rem' }}>{opt.label}</span>
                    <span className="font-semibold" style={{ fontFamily: 'Lato, sans-serif', color: '#C9A870', fontSize: '0.86rem' }}>{opt.price}</span>
                    {extrasInfo[opt.id] && (
                      <span
                        onClick={(e) => e.stopPropagation()}
                        className="flex-shrink-0 inline-flex"
                      >
                        <InfoPopup title={extrasInfo[opt.id].title}>
                          {extrasInfo[opt.id].description}
                        </InfoPopup>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DATE SU RIGA SINGOLA */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{tr('Date soggiorno (arrivo e partenza)', 'Stay dates (arrival and departure)', 'Dates du séjour (arrivée et départ)', 'Aufenthaltsdaten (Ankunft und Abreise)', 'Fechas de estancia (llegada y salida)')}</label>
              {calculateNights() > 0 && (
                <span className="text-xs font-semibold px-2 py-1" style={{ fontFamily: 'Lato, sans-serif', background: '#C9A870', color: 'white' }}>
                  {calculateNights()} {calculateNights() === 1 ? tr('notte', 'night', 'nuit', 'Nacht', 'noche') : tr('notti', 'nights', 'nuits', 'Nächte', 'noches')}
                </span>
              )}
            </div>
            <div className="relative" ref={calendarRef}>
              <button type="button" onClick={() => setShowCalendar(!showCalendar)} className="w-full bg-[#f5f5f5] rounded-none p-4 text-left focus:outline-none hover:bg-[#eeeeee] transition-colors flex items-center justify-between min-h-[74px]" style={{ fontFamily: 'Lato, sans-serif' }}>
                <span className="text-gray-800" style={{ fontSize: '1rem' }}>{formatDateRange()}</span>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </button>
              {showCalendar && (
                <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-none shadow-lg p-4 left-0 md:left-auto md:right-0">
                  <DayPicker
                    mode="range"
                    selected={formData.dateRange}
                    onSelect={(range) => setFormData({ ...formData, dateRange: range })}
                    disabled={{ before: new Date() }}
                    locale={dfLocale}
                    styles={{
                      root: {
                        '--rdp-accent-color': '#C9A870',
                        '--rdp-accent-background-color': 'rgba(201, 168, 112, 0.2)',
                        '--rdp-range_middle-background-color': 'rgba(201, 168, 112, 0.24)',
                      },
                      chevron: { fill: '#C9A870' },
                    }}
                    modifiersStyles={{
                      selected: { backgroundColor: '#C9A870', color: '#fff' },
                      range_start: { backgroundColor: '#C9A870', color: '#fff' },
                      range_end: { backgroundColor: '#C9A870', color: '#fff' },
                      range_middle: { backgroundColor: 'rgba(201, 168, 112, 0.24)', color: '#2C2520' },
                      today: { color: '#A8854A', fontWeight: 700 },
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* MESSAGGIO */}
          <div>
            <label className="block mb-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{tr('Messaggio', 'Message', 'Message', 'Nachricht', 'Mensaje')} <span style={{ textTransform: 'none', letterSpacing: 'normal', fontWeight: 600, fontSize: '0.82rem', color: '#7E6F61' }}>{tr('(opzionale)', '(optional)', '(optionnel)', '(optional)', '(opcional)')}</span></label>
            <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={isEn ? 'Tell us your room preferences, notes, and requests...' : isFr ? 'Indiquez vos préférences de chambre, notes et demandes...' : isDe ? 'Teilen Sie Ihre Zimmerpräferenzen, Anmerkungen und Anfragen mit...' : isEs ? 'Indícanos tus preferencias de habitación, notas y solicitudes...' : 'Indica le camere: una singola, doppia...?'} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#C9A870] transition-colors resize-none" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }} />
          </div>

          {/* HONEYPOT - Hidden field for bots */}
          <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>

          {/* SUBMIT */}
          <button type="submit" disabled={isLoading} className={`w-full py-4 rounded-none text-white font-semibold transition-all ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#C9A870] hover:bg-[#A8854A]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
            {isLoading ? tr('Apertura WhatsApp...', 'Opening WhatsApp...', 'Ouverture de WhatsApp...', 'Öffnung von WhatsApp...', 'Abriendo WhatsApp...') : tr('Invia Richiesta su WhatsApp', 'Send Request on WhatsApp', 'Envoyer la Demande sur WhatsApp', 'Anfrage per WhatsApp senden', 'Enviar solicitud por WhatsApp')}
          </button>

        </form>
      </motion.div>
    </div>
  );
}