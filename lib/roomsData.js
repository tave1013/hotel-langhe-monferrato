// ================================================================
// lib/roomsData.js
// Modifica qui i dati di ogni camera (testi, foto, prezzi, servizi)
// ================================================================

export const rooms = [
  {
    slug: 'standard',
    name: 'Camera Standard',
    tagline: 'Il comfort essenziale del Piemonte autentico',
    description: `La Camera Standard è il punto di partenza perfetto per scoprire le Langhe. Arredata con cura artigianale, unisce funzionalità e calore in un ambiente accogliente che profuma di territorio.

Ogni dettaglio è pensato per farti sentire a casa: dalla biancheria pregiata ai prodotti da bagno locali, dalla vista sul giardino alla luce morbida del mattino piemontese.`,
    heroImg: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1800&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80&fit=crop',
    ],
    price: 130,
    priceNote: 'per notte, colazione inclusa',
    specs: [
      { icon: 'fa-expand-arrows-alt', label: 'Dimensioni', value: '22 m²' },
      { icon: 'fa-bed', label: 'Letto', value: 'Matrimoniale' },
      { icon: 'fa-users', label: 'Ospiti', value: '2 Adulti' },
      { icon: 'fa-eye', label: 'Vista', value: 'Giardino' },
      { icon: 'fa-smoking-ban', label: 'Fumo', value: 'Non ammesso' },
      { icon: 'fa-coffee', label: 'Colazione', value: 'Inclusa' },
      { icon: 'fa-door-open', label: 'Check-in', value: 'Dalle 15:00' },
      { icon: 'fa-sign-out-alt', label: 'Check-out', value: 'Entro 11:00' },
    ],
    amenities: {
      'Bagno & Toilette': ['Doccia walk-in', 'Prodotti artigianali locali', 'Asciugacapelli', 'Accappatoi e pantofole'],
      'Comfort in Camera': ['Letto king-size', 'Biancheria 100% cotone egiziano', 'Aria condizionata', 'Cassaforte'],
      'Tecnologia': ['Smart TV 43"', 'Wi-Fi ultra veloce', 'Prese USB', 'Telefono diretto'],
      'Pasti & Bevande': ['Macchina caffè Nespresso', 'Minibar', 'Acqua minerale di benvenuto', 'Bollitore'],
    },
    policies: [
      { icon: 'fa-calendar-check', label: 'Check-in', value: 'Dalle 15:00 — Late check-in disponibile su richiesta' },
      { icon: 'fa-calendar-times', label: 'Check-out', value: 'Entro le 11:00 — Late check-out €25 (soggetto a disponibilità)' },
      { icon: 'fa-undo', label: 'Cancellazione', value: 'Gratuita fino a 48h prima dell\'arrivo' },
      { icon: 'fa-paw', label: 'Animali', value: 'Non ammessi' },
      { icon: 'fa-child', label: 'Bambini', value: 'Bambini da 12 anni — culla disponibile su richiesta' },
    ],
    prev: null,
    next: 'tripla',
  },
  {
    slug: 'tripla',
    name: 'Camera Tripla',
    tagline: 'Spazio e stile per chi viaggia in tre',
    description: `La Camera Tripla è pensata per chi viaggia con un amico o figlio adolescente, senza dover rinunciare a nulla. Tre letti, un ambiente armonioso e tutto il comfort della tradizione piemontese.

Spaziosa e funzionale, con possibilità di configurazione flessibile, è la soluzione ideale per condividere l'esperienza delle Langhe mantenendo comfort e privacy.`,
    heroImg: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1800&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80&fit=crop',
    ],
    price: 185,
    priceNote: 'per notte, colazione inclusa',
    specs: [
      { icon: 'fa-expand-arrows-alt', label: 'Dimensioni', value: '30 m²' },
      { icon: 'fa-bed', label: 'Letti', value: '1 Matrimoniale + 1 Singolo' },
      { icon: 'fa-users', label: 'Ospiti', value: '3 Adulti' },
      { icon: 'fa-eye', label: 'Vista', value: 'Vigneti' },
      { icon: 'fa-smoking-ban', label: 'Fumo', value: 'Non ammesso' },
      { icon: 'fa-coffee', label: 'Colazione', value: 'Inclusa' },
      { icon: 'fa-door-open', label: 'Check-in', value: 'Dalle 15:00' },
      { icon: 'fa-sign-out-alt', label: 'Check-out', value: 'Entro 11:00' },
    ],
    amenities: {
      'Bagno & Toilette': ['Doccia walk-in', 'Vasca da bagno', 'Prodotti artigianali locali', 'Accappatoi e pantofole'],
      'Comfort in Camera': ['Configurazione letti flessibile', 'Biancheria premium', 'Aria condizionata', 'Cassaforte'],
      'Tecnologia': ['Smart TV 50"', 'Wi-Fi ultra veloce', 'Prese USB', 'Bluetooth speaker'],
      'Pasti & Bevande': ['Macchina caffè Nespresso', 'Minibar', 'Snack di benvenuto', 'Bollitore'],
    },
    policies: [
      { icon: 'fa-calendar-check', label: 'Check-in', value: 'Dalle 15:00 — Late check-in disponibile su richiesta' },
      { icon: 'fa-calendar-times', label: 'Check-out', value: 'Entro le 11:00 — Late check-out €25 (soggetto a disponibilità)' },
      { icon: 'fa-undo', label: 'Cancellazione', value: 'Gratuita fino a 48h prima dell\'arrivo' },
      { icon: 'fa-paw', label: 'Animali', value: 'Non ammessi' },
      { icon: 'fa-child', label: 'Bambini', value: 'Bambini da 12 anni benvenuti' },
    ],
    prev: 'standard',
    next: 'quadrupla',
  },
  {
    slug: 'quadrupla',
    name: 'Camera Quadrupla',
    tagline: 'Quattro ospiti, un\'unica esperienza indimenticabile',
    description: `La Camera Quadrupla è la scelta perfetta per gruppi di amici o famiglie che vogliono condividere gli spazi senza rinunciare al comfort individuale. Quattro posti letto in un ambiente elegante e ben organizzato.

Ideale per chi viaggia con colleghi, parenti o amici e vuole vivere le Langhe insieme, mantenendo la qualità e il calore tipici del nostro hotel.`,
    heroImg: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1800&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=900&q=80&fit=crop',
    ],
    price: 240,
    priceNote: 'per notte, colazione inclusa',
    specs: [
      { icon: 'fa-expand-arrows-alt', label: 'Dimensioni', value: '40 m²' },
      { icon: 'fa-bed', label: 'Letti', value: '2 Matrimoniali' },
      { icon: 'fa-users', label: 'Ospiti', value: '4 Adulti' },
      { icon: 'fa-eye', label: 'Vista', value: 'Colline e Vigneti' },
      { icon: 'fa-smoking-ban', label: 'Fumo', value: 'Non ammesso' },
      { icon: 'fa-coffee', label: 'Colazione', value: 'Inclusa' },
      { icon: 'fa-door-open', label: 'Check-in', value: 'Dalle 15:00' },
      { icon: 'fa-sign-out-alt', label: 'Check-out', value: 'Entro 11:00' },
    ],
    amenities: {
      'Bagno & Toilette': ['Due bagni privati', 'Doccia e vasca', 'Prodotti artigianali locali', 'Accappatoi x4'],
      'Comfort in Camera': ['2 zone notte separate', 'Biancheria premium', 'Aria condizionata', 'Cassaforte grande'],
      'Tecnologia': ['Smart TV 55"', 'Wi-Fi ultra veloce', 'Prese USB doppie', 'Bluetooth speaker'],
      'Pasti & Bevande': ['Macchina caffè Nespresso', 'Minibar rifornito', 'Acqua e snack di benvenuto', 'Bollitore'],
    },
    policies: [
      { icon: 'fa-calendar-check', label: 'Check-in', value: 'Dalle 15:00 — Late check-in disponibile su richiesta' },
      { icon: 'fa-calendar-times', label: 'Check-out', value: 'Entro le 11:00 — Late check-out €30 (soggetto a disponibilità)' },
      { icon: 'fa-undo', label: 'Cancellazione', value: 'Gratuita fino a 72h prima dell\'arrivo' },
      { icon: 'fa-paw', label: 'Animali', value: 'Non ammessi' },
      { icon: 'fa-child', label: 'Bambini', value: 'Bambini benvenuti — culla gratuita' },
    ],
    prev: 'tripla',
    next: 'family',
  },
  {
    slug: 'family',
    name: 'Camera Family',
    tagline: 'La famiglia al centro, il Piemonte tutt\'intorno',
    description: `La Camera Family è stata pensata con le famiglie nel cuore. Ogni dettaglio risponde alle esigenze dei genitori e dei bambini: spazi organizzati, arredi sicuri, dotazioni pensate per i più piccoli.

Dal fasciatoio alla culla, dal kit bambini ai giochi di benvenuto — perché anche i bambini meritano un soggiorno memorabile nelle Langhe.`,
    heroImg: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1800&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80&fit=crop',
    ],
    price: 260,
    priceNote: 'per notte, colazione inclusa per tutti',
    specs: [
      { icon: 'fa-expand-arrows-alt', label: 'Dimensioni', value: '45 m²' },
      { icon: 'fa-bed', label: 'Letti', value: '1 Matrimoniale + 2 Singoli' },
      { icon: 'fa-users', label: 'Ospiti', value: '2 Adulti + 2 Bambini' },
      { icon: 'fa-eye', label: 'Vista', value: 'Giardino e Vigneti' },
      { icon: 'fa-smoking-ban', label: 'Fumo', value: 'Non ammesso' },
      { icon: 'fa-coffee', label: 'Colazione', value: 'Inclusa per tutti' },
      { icon: 'fa-door-open', label: 'Check-in', value: 'Dalle 14:00' },
      { icon: 'fa-sign-out-alt', label: 'Check-out', value: 'Entro 12:00' },
    ],
    amenities: {
      'Per i Bambini': ['Culla gratuita su richiesta', 'Kit benvenuto bambini', 'Giochi e libri', 'Menu bambini al ristorante'],
      'Bagno & Toilette': ['Vasca grande', 'Prodotti per bambini', 'Accappatoi famiglia', 'Fasciatoio'],
      'Comfort in Camera': ['Zone notte separate', 'Biancheria ipoallergenica', 'Aria condizionata silenziosa', 'Cassaforte'],
      'Servizi Extra': ['Baby sitting su prenotazione', 'Seggiolone disponibile', 'Passeggino in prestito', 'Lavanderia'],
    },
    policies: [
      { icon: 'fa-calendar-check', label: 'Check-in', value: 'Dalle 14:00 — Early check-in gratuito per famiglie (soggetto a disponibilità)' },
      { icon: 'fa-calendar-times', label: 'Check-out', value: 'Entro le 12:00 — Late check-out gratuito per famiglie (su richiesta)' },
      { icon: 'fa-undo', label: 'Cancellazione', value: 'Gratuita fino a 48h prima dell\'arrivo' },
      { icon: 'fa-paw', label: 'Animali', value: 'Non ammessi' },
      { icon: 'fa-child', label: 'Bambini', value: 'Bambini di tutte le età benvenuti — culla gratuita' },
    ],
    prev: 'quadrupla',
    next: 'suite',
  },
  {
    slug: 'suite',
    name: 'Suite Deluxe',
    tagline: 'L\'apice del lusso piemontese',
    description: `La Suite Deluxe è un'esperienza a sé. Un appartamento di lusso immerso tra le colline patrimonio UNESCO, dove ogni elemento racconta la storia delle Langhe attraverso materiali pregiati e un servizio senza pari.

Soggiorno separato, terrazza panoramica privata, spa con jacuzzi, sauna e butler dedicato. Per anniversari, luna di miele e ogni momento che merita di diventare un ricordo eterno.`,
    heroImg: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=85&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1455587734955-081b22074882?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&fit=crop',
    ],
    price: 520,
    priceNote: 'per notte — cena gourmet inclusa',
    specs: [
      { icon: 'fa-expand-arrows-alt', label: 'Dimensioni', value: '80 m²' },
      { icon: 'fa-bed', label: 'Letto', value: 'King Size Premium' },
      { icon: 'fa-users', label: 'Ospiti', value: '2 Adulti' },
      { icon: 'fa-mountain', label: 'Vista', value: 'Panoramica 180° Vigneti' },
      { icon: 'fa-spa', label: 'Spa Privata', value: 'Jacuzzi + Sauna' },
      { icon: 'fa-utensils', label: 'Cena', value: 'Gourmet Inclusa' },
      { icon: 'fa-door-open', label: 'Check-in', value: 'Dalle 14:00' },
      { icon: 'fa-sign-out-alt', label: 'Check-out', value: 'Entro 13:00' },
    ],
    amenities: {
      'Spa & Benessere Privato': ['Jacuzzi privata', 'Sauna finlandese', 'Doccia multifunzione', 'Kit benvenuto Bulgari', 'Accappatoi in cashmere'],
      'Spazi Esclusivi': ['Soggiorno separato', 'Terrazza panoramica 50m²', 'Camino a bioetanolo', 'Zona dining privata'],
      'Tecnologia Premium': ['Smart TV OLED 65"', 'Sistema audio Sonos', 'Wi-Fi dedicato', 'Tablet in camera'],
      'Gastronomia & Servizi': ['Cena gourmet inclusa', 'Champagne di benvenuto', 'Butler dedicato H24', 'Minibar premium illimitato'],
    },
    policies: [
      { icon: 'fa-calendar-check', label: 'Check-in', value: 'Dalle 14:00 — Early check-in incluso (soggetto a disponibilità)' },
      { icon: 'fa-calendar-times', label: 'Check-out', value: 'Entro le 13:00 — Late check-out incluso fino alle 15:00' },
      { icon: 'fa-undo', label: 'Cancellazione', value: 'Gratuita fino a 7 giorni prima dell\'arrivo' },
      { icon: 'fa-paw', label: 'Animali', value: 'Ammessi previo accordo — €30/notte' },
      { icon: 'fa-child', label: 'Bambini', value: 'Bambini da 12 anni — culla disponibile' },
    ],
    prev: 'family',
    next: null,
  },
];

export function getRoomBySlug(slug) {
  return rooms.find((r) => r.slug === slug) || null;
}

export function getAllRoomSlugs() {
  return rooms.map((r) => ({ slug: r.slug }));
}
