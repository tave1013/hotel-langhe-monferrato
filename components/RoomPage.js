'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import useSiteLanguage from '@/hooks/useSiteLanguage';
import { t } from '@/lib/i18n';

export default function RoomPage({ room }) {
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
    Cancellazione: 'Stornierung',
    Bambini: 'Kinder',
    'Metodi di pagamento': 'Zahlungsmittel',
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
    "Dalle 15:00 alle 22:30. Comunicare in anticipo l'orario di arrivo": "15:00 bis 22:30 Uhr. Bitte teilen Sie Ihre Ankunftszeit im Voraus mit.",
    "Gratuita fino a 48h prima dell'arrivo": "Kostenlos bis 48 Stunden vor Ankunft",
    "Gratuita fino a 72h prima dell'arrivo": "Kostenlos bis 72 Stunden vor Ankunft",
    'Ammessi su richiesta con supplemento di €15 al giorno': 'Auf Anfrage mit Aufpreis von 15 € pro Tag gestattet',
    'Bambini dai 6 anni in su pagano tariffa adulti': 'Kinder ab 6 Jahren zahlen Erwachsenentarif',
    'Mastercard, Visa, Maestro, Contanti': 'Mastercard, Visa, Maestro, Bargeld',
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
    Cancellazione: 'Cancelación',
    Bambini: 'Niños',
    'Metodi di pagamento': 'Métodos de pago',
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
    "Dalle 15:00 alle 22:30. Comunicare in anticipo l'orario di arrivo": 'De 15:00 a 22:30. Indique su hora de llegada con antelación.',
    "Gratuita fino a 48h prima dell'arrivo": 'Gratis hasta 48 horas antes de la llegada',
    "Gratuita fino a 72h prima dell'arrivo": 'Gratis hasta 72 horas antes de la llegada',
    'Ammessi su richiesta con supplemento di €15 al giorno': 'Permitidos bajo petición con suplemento de 15 € al día',
    'Bambini dai 6 anni in su pagano tariffa adulti': 'Los niños a partir de 6 años pagan tarifa de adulto',
    'Mastercard, Visa, Maestro, Contanti': 'Mastercard, Visa, Maestro, Efectivo',
  };
  const esAmenityCategoryMap = {
    Bathroom: 'Baño',
    'General Services': 'Servicios generales',
    'Business Services': 'Servicios de negocios',
    'Outdoor Spaces': 'Espacios exteriores',
    'In-room Services': 'Servicios en la habitación',
    'Media and Technology': 'Medios y tecnología',
    'Food & Beverage Services': 'Comida y bebida',
    Internet: 'Internet',
    Parking: 'Aparcamiento',
    'Reception Services': 'Recepción',
    'Family Entertainment': 'Entretenimiento familiar',
    'Cleaning Services': 'Servicios de limpieza',
    Pets: 'Mascotas',
    Activities: 'Actividades',
    Accessibility: 'Accesibilidad',
    'Languages Spoken': 'Idiomas hablados',
  };
  const esSurroundingsCategoryMap = {
    'Restaurants & Cafés': 'Restaurantes y cafés',
    'Public Transportation': 'Transporte público',
    Airports: 'Aeropuertos',
  };
  const esAmenityItemMap = {
    'Carta igienica': 'Papel higiénico',
    Asciugamani: 'Toallas',
    Bidet: 'Bidé',
    'Vasca o doccia': 'Bañera o ducha',
    'Bagno privato': 'Baño privado',
    WC: 'WC',
    'Prodotti da bagno in omaggio': 'Artículos de aseo gratis',
    Asciugacapelli: 'Secador de pelo',
    Doccia: 'Ducha',
    'Sala comune/zona TV': 'Sala común / zona TV',
    'Aria condizionata': 'Aire acondicionado',
    'Struttura interamente non fumatori': 'Alojamiento totalmente libre de humo',
    'Sveglia telefonica': 'Servicio de despertador',
    'Pavimento in marmo o in piastrelle': 'Suelo de mármol o baldosa',
    Riscaldamento: 'Calefacción',
    Ascensore: 'Ascensor',
    'Disponibilità di camere familiari': 'Habitaciones familiares disponibles',
    'Camere/strutture per ospiti disabili': 'Habitaciones / instalaciones para huéspedes con discapacidad',
    'Camere non fumatori': 'Habitaciones para no fumadores',
    'Sveglia/sveglia telefonica': 'Despertador / despertador telefónico',
    'Fax/fotocopiatrice (a pagamento)': 'Fax / fotocopiadora (de pago)',
    'Centro business (a pagamento)': 'Centro de negocios (de pago)',
    'Spazi per riunioni/banchetti (a pagamento)': 'Salas de reuniones / banquetes (de pago)',
    'Arredamento da esterni': 'Mobiliario de exterior',
    Terrazza: 'Terraza',
    Giardino: 'Jardín',
    'Presa elettrica vicino al letto': 'Enchufe cerca de la cama',
    'Stand appendiabiti': 'Perchero',
    'TV a schermo piatto': 'TV de pantalla plana',
    'Canali via cavo': 'Canales por cable',
    Telefono: 'Teléfono',
    TV: 'Televisión',
    'Caffetteria sul posto': 'Cafetería en el alojamiento',
    Bar: 'Bar',
    Minibar: 'Minibar',
    'Bollitore tè/macchina caffè': 'Hervidor / cafetera',
    'Internet WiFi disponibile gratuitamente in tutta la struttura': 'Wi‑Fi gratuito en todo el alojamiento',
    'Parcheggio privato disponibile gratuitamente in loco senza prenotazione': 'Aparcamiento privado gratuito en el alojamiento sin reserva',
    'Parcheggio per disabili': 'Aparcamiento accesible',
    'Fattura disponibile su richiesta': 'Factura disponible bajo petición',
    'Check-in e check-out privati': 'Check-in y check-out privados',
    'Deposito bagagli (a pagamento)': 'Guardaequipaje (de pago)',
    'Check-in e check-out express': 'Check-in y check-out exprés',
    "Area giochi all'aperto": 'Zona de juegos al aire libre',
    'Giochi da tavolo/puzzle': 'Juegos de mesa / puzles',
    'Servizio pulizie giornaliero': 'Servicio de limpieza diario',
    'Servizio lavanderia (a pagamento)': 'Servicio de lavandería (de pago)',
    'Animali ammessi su richiesta. Potrebbe essere richiesto un supplemento.': 'Se admiten mascotas bajo petición. Puede aplicarse un suplemento.',
    'Noleggio biciclette (a pagamento)': 'Alquiler de bicicletas (de pago)',
    'Tour in bicicletta (a pagamento)': 'Excursiones en bicicleta (de pago)',
    'Escursioni in bicicletta': 'Excursiones en bicicleta',
    'Accesso su sedia a rotelle': 'Accesible en silla de ruedas',
    'Piani superiori accessibili solo tramite scale': 'Plantas superiores accesibles solo por escaleras',
    'Piani superiori accessibili tramite ascensore': 'Plantas superiores accesibles por ascensor',
    'Intera unità situata al piano terra': 'Alojamiento completo en planta baja',
    Inglese: 'Inglés',
    Francese: 'Francés',
    Italiano: 'Italiano',
  };
  const esSurroundingsItemMap = {
    'Caffetteria/Bar Vino e Bottega, 1 km': 'Cafetería / Bar Vino e Bottega, 1 km',
    'Ristorante Da Maddalena, 1,2 km': 'Restaurante Da Maddalena, 1,2 km',
    'Ristorante Da Maddalena, 1.2 km': 'Restaurante Da Maddalena, 1,2 km',
    'Pasticceria Austa, 1,4 km': 'Pastelería Austa, 1,4 km',
    'Pasticceria Austa, 1.4 km': 'Pastelería Austa, 1,4 km',
    "Treno Costigliole d'Asti — 5 km": "Estación de Costigliole d'Asti — 5 km",
    "Treno Vigliano d'Asti — 7 km": "Estación de Vigliano d'Asti — 7 km",
    'Aeroporto di Cuneo - Levaldigi, 62 km': 'Aeropuerto de Cuneo - Levaldigi, 62 km',
    'Aeroporto di Torino, 73 km': 'Aeropuerto de Turín, 73 km',
    'Aeroporto di Genova-Sestri, 93 km': 'Aeropuerto de Génova-Sestri, 93 km',
  };
  const deAmenityCategoryMap = {
    Bathroom: 'Badezimmer',
    'General Services': 'Allgemeine Dienste',
    'Business Services': 'Geschäftsdienste',
    'Outdoor Spaces': 'Außenbereiche',
    'In-room Services': 'Zimmerservices',
    'Media and Technology': 'Medien und Technologie',
    'Food & Beverage Services': 'Speisen und Getränke',
    Internet: 'Internet',
    Parking: 'Parkplatz',
    'Reception Services': 'Rezeptionsdienste',
    'Family Entertainment': 'Familienunterhaltung',
    'Cleaning Services': 'Reinigungsdienste',
    Pets: 'Haustiere',
    Activities: 'Aktivitäten',
    Accessibility: 'Barrierefreiheit',
    'Languages Spoken': 'Gesprochene Sprachen',
  };
  const deSurroundingsCategoryMap = {
    'Restaurants & Cafés': 'Restaurants und Cafés',
    'Public Transportation': 'Öffentliche Verkehrsmittel',
    Airports: 'Flughäfen',
  };
  const deAmenityItemMap = {
    'Carta igienica': 'Toilettenpapier',
    Asciugamani: 'Handtücher',
    Bidet: 'Bidet',
    'Vasca o doccia': 'Badewanne oder Dusche',
    'Bagno privato': 'Privates Badezimmer',
    WC: 'WC',
    'Prodotti da bagno in omaggio': 'Kostenlose Badeartikel',
    Asciugacapelli: 'Haartrockner',
    Doccia: 'Dusche',
    'Sala comune/zona TV': 'Gemeinschaftsraum / TV-Bereich',
    'Aria condizionata': 'Klimaanlage',
    'Struttura interamente non fumatori': 'Raucherfreies Gebäude',
    'Sveglia telefonica': 'Telefonischer Weckruf',
    'Pavimento in marmo o in piastrelle': 'Marmor- oder Fliesenboden',
    Riscaldamento: 'Heizung',
    Ascensore: 'Aufzug',
    'Disponibilità di camere familiari': 'Familienzimmer verfügbar',
    'Camere/strutture per ospiti disabili': 'Zimmer / Einrichtungen für Gäste mit Behinderungen',
    'Camere non fumatori': 'Nichtraucherzimmer',
    'Sveglia/sveglia telefonica': 'Wecker / Telefonischer Weckruf',
    'Fax/fotocopiatrice (a pagamento)': 'Fax / Fotokopie (gegen Gebühr)',
    'Centro business (a pagamento)': 'Business-Center (gegen Gebühr)',
    'Spazi per riunioni/banchetti (a pagamento)': 'Tagungsräume / Banketträume (gegen Gebühr)',
    'Arredamento da esterni': 'Möbel im Freien',
    Terrazza: 'Terrasse',
    Giardino: 'Garten',
    'Presa elettrica vicino al letto': 'Steckdose neben dem Bett',
    'Stand appendiabiti': 'Kleiderständer',
    'TV a schermo piatto': 'Flachbild-TV',
    'Canali via cavo': 'Kabelkanäle',
    Telefono: 'Telefon',
    TV: 'Fernseh',
    'Caffetteria sul posto': 'Café vor Ort',
    Bar: 'Bar',
    Minibar: 'Minibar',
    'Bollitore tè/macchina caffè': 'Wasserkocher / Kaffeemaschine',
    'Internet WiFi disponibile gratuitamente in tutta la struttura': 'Kostenlos WLAN in der gesamten Unterkunft',
    'Parcheggio privato disponibile gratuitamente in loco senza prenotazione': 'Kostenlos Privatparkplatz vor Ort ohne Reservierung',
    'Parcheggio per disabili': 'Behindertengerechter Parkplatz',
    'Fattura disponibile su richiesta': 'Rechnung auf Anfrage verfügbar',
    'Check-in e check-out privati': 'Privater Check-in und Check-out',
    'Deposito bagagli (a pagamento)': 'Gepäckaufbewahrung (gegen Gebühr)',
    'Check-in e check-out express': 'Express-Check-in und Check-out',
    "Area giochi all'aperto": 'Spielplatz im Freien',
    'Giochi da tavolo/puzzle': 'Brettspiele / Puzzles',
    'Servizio pulizie giornaliero': 'Täglicher Reinigungsservice',
    'Servizio lavanderia (a pagamento)': 'Wäscheservice (gegen Gebühr)',
    'Animali ammessi su richiesta. Potrebbe essere richiesto un supplemento.': 'Haustiere auf Anfrage gestattet. Ein Aufpreis kann anfallen.',
    'Noleggio biciclette (a pagamento)': 'Fahrradverleih (gegen Gebühr)',
    'Tour in bicicletta (a pagamento)': 'Fahrradtour (gegen Gebühr)',
    'Escursioni in bicicletta': 'Fahrradausflüge',
    'Accesso su sedia a rotelle': 'Rollstuhlgerecht',
    'Piani superiori accessibili solo tramite scale': 'Obere Stockwerke nur über Treppen erreichbar',
    'Piani superiori accessibili tramite ascensore': 'Obere Stockwerke mit Aufzug erreichbar',
    'Intera unità situata al piano terra': 'Gesamte Einheit im Erdgeschoss',
    Inglese: 'Englisch',
    Francese: 'Französisch',
    Italiano: 'Italienisch',
  };
  const deSurroundingsItemMap = {
    'Caffetteria/Bar Vino e Bottega, 1 km': 'Café / Bar Vino e Bottega, 1 km',
    'Ristorante Da Maddalena, 1,2 km': 'Restaurant Da Maddalena, 1,2 km',
    'Ristorante Da Maddalena, 1.2 km': 'Restaurant Da Maddalena, 1,2 km',
    'Pasticceria Austa, 1,4 km': 'Konditorei Austa, 1,4 km',
    'Pasticceria Austa, 1.4 km': 'Konditorei Austa, 1,4 km',
    "Treno Costigliole d'Asti — 5 km": "Bahnhof Costigliole d'Asti — 5 km",
    "Treno Vigliano d'Asti — 7 km": "Bahnhof Vigliano d'Asti — 7 km",
    'Aeroporto di Cuneo - Levaldigi, 62 km': 'Flughafen Cuneo - Levaldigi, 62 km',
    'Aeroporto di Torino, 73 km': 'Flughafen Turin, 73 km',
    'Aeroporto di Genova-Sestri, 93 km': 'Flughafen Genua-Sestri, 93 km',
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
    Cancellazione: 'Annulation',
    Bambini: 'Enfants',
    'Metodi di pagamento': 'Moyens de paiement',
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
    'Dalle 15:00 alle 22:30': 'Dalle 15:00 alle 22:30',
    'Dalle 07:00 alle 11:00': 'Dalle 07:00 alle 11:00',
    "Dalle 15:00 alle 22:30. Comunicare in anticipo l'orario di arrivo": "De 15h00 à 22h30. Merci de communiquer votre heure d'arrivée à l'avance.",
    "Gratuita fino a 48h prima dell'arrivo": "Gratuite jusqu'à 48h avant l'arrivée",
    "Gratuita fino a 72h prima dell'arrivo": "Gratuite jusqu'à 72h avant l'arrivée",
    'Ammessi su richiesta con supplemento di €15 al giorno': 'Autorisés sur demande avec supplément de 15 € par jour',
    'Bambini dai 6 anni in su pagano tariffa adulti': 'Les enfants à partir de 6 ans paient le tarif adulte',
    'Mastercard, Visa, Maestro, Contanti': 'Mastercard, Visa, Maestro, Espèces',
  };
  const frAmenityCategoryMap = {
    Bathroom: 'Salle de bains',
    'General Services': 'Services généraux',
    'Business Services': "Services d'affaires",
    'Outdoor Spaces': 'Espaces extérieurs',
    'In-room Services': 'Services en chambre',
    'Media and Technology': 'Médias et technologie',
    'Food & Beverage Services': 'Restauration',
    Internet: 'Internet',
    Parking: 'Parking',
    'Reception Services': 'Services de réception',
    'Family Entertainment': 'Divertissements en famille',
    'Cleaning Services': 'Services de ménage',
    Pets: 'Animaux',
    Activities: 'Activités',
    Accessibility: 'Accessibilité',
    'Languages Spoken': 'Langues parlées',
  };
  const frSurroundingsCategoryMap = {
    'Restaurants & Cafés': 'Restaurants et cafés',
    'Public Transportation': 'Transports publics',
    Airports: 'Aéroports',
  };
  const frAmenityItemMap = {
    'Carta igienica': 'Papier toilette',
    Asciugamani: 'Serviettes',
    Bidet: 'Bidet',
    'Vasca o doccia': 'Baignoire ou douche',
    'Bagno privato': 'Salle de bains privative',
    WC: 'Toilettes',
    'Prodotti da bagno in omaggio': 'Articles de toilette offerts',
    Asciugacapelli: 'Sèche-cheveux',
    Doccia: 'Douche',
    'Sala comune/zona TV': 'Salon commun / espace TV',
    'Aria condizionata': 'Climatisation',
    'Struttura interamente non fumatori': 'Établissement entièrement non-fumeurs',
    'Sveglia telefonica': 'Service de réveil téléphonique',
    'Pavimento in marmo o in piastrelle': 'Sol en marbre ou carrelage',
    Riscaldamento: 'Chauffage',
    Ascensore: 'Ascenseur',
    'Disponibilità di camere familiari': 'Chambres familiales disponibles',
    'Camere/strutture per ospiti disabili': 'Chambres / équipements pour les personnes à mobilité réduite',
    'Camere non fumatori': 'Chambres non-fumeurs',
    'Sveglia/sveglia telefonica': 'Réveil / service de réveil',
    'Fax/fotocopiatrice (a pagamento)': 'Fax / photocopies (en supplément)',
    'Centro business (a pagamento)': "Centre d'affaires (en supplément)",
    'Spazi per riunioni/banchetti (a pagamento)': 'Salles de réunion / banquet (en supplément)',
    'Arredamento da esterni': "Mobilier d'extérieur",
    Terrazza: 'Terrasse',
    Giardino: 'Jardin',
    'Presa elettrica vicino al letto': 'Prise près du lit',
    'Stand appendiabiti': 'Portant',
    'TV a schermo piatto': 'Télévision à écran plat',
    'Canali via cavo': 'Chaînes du câble',
    Telefono: 'Téléphone',
    TV: 'Télévision',
    'Caffetteria sul posto': 'Café sur place',
    Bar: 'Bar',
    Minibar: 'Minibar',
    'Bollitore tè/macchina caffè': 'Bouilloire / machine à café',
    'Internet WiFi disponibile gratuitamente in tutta la struttura': 'Connexion Wi-Fi gratuite dans tout l’établissement',
    'Parcheggio privato disponibile gratuitamente in loco senza prenotazione': 'Parking privé gratuit sur place, sans réservation',
    'Parcheggio per disabili': 'Parking accessible',
    'Fattura disponibile su richiesta': 'Facture disponible sur demande',
    'Check-in e check-out privati': 'Enregistrement et départ privés',
    'Deposito bagagli (a pagamento)': 'Bagagerie (en supplément)',
    'Check-in e check-out express': 'Enregistrement et départ express',
    "Area giochi all'aperto": 'Aire de jeux extérieure',
    'Giochi da tavolo/puzzle': 'Jeux de société / puzzles',
    'Servizio pulizie giornaliero': 'Service de ménage quotidien',
    'Servizio lavanderia (a pagamento)': 'Service de blanchisserie (en supplément)',
    'Animali ammessi su richiesta. Potrebbe essere richiesto un supplemento.': 'Animaux admis sur demande. Un supplément peut s’appliquer.',
    'Noleggio biciclette (a pagamento)': 'Location de vélos (en supplément)',
    'Tour in bicicletta (a pagamento)': 'Tours à vélo (en supplément)',
    'Escursioni in bicicletta': 'Excursions à vélo',
    'Accesso su sedia a rotelle': 'Accessible en fauteuil roulant',
    'Piani superiori accessibili solo tramite scale': 'Étages supérieurs accessibles uniquement par les escaliers',
    'Piani superiori accessibili tramite ascensore': 'Étages supérieurs accessibles par ascenseur',
    'Intera unità situata al piano terra': 'Logement entièrement situé au rez-de-chaussée',
    Inglese: 'Anglais',
    Francese: 'Français',
    Italiano: 'Italien',
  };
  const frSurroundingsItemMap = {
    'Caffetteria/Bar Vino e Bottega, 1 km': 'Café / bar Vino e Bottega, 1 km',
    'Ristorante Da Maddalena, 1,2 km': 'Restaurant Da Maddalena, 1,2 km',
    'Ristorante Da Maddalena, 1.2 km': 'Restaurant Da Maddalena, 1,2 km',
    'Pasticceria Austa, 1,4 km': 'Pâtisserie Austa, 1,4 km',
    'Pasticceria Austa, 1.4 km': 'Pâtisserie Austa, 1,4 km',
    "Treno Costigliole d'Asti — 5 km": "Gare de Costigliole d'Asti — 5 km",
    "Treno Vigliano d'Asti — 7 km": "Gare de Vigliano d'Asti — 7 km",
    'Aeroporto di Cuneo - Levaldigi, 62 km': 'Aéroport de Cuneo - Levaldigi, 62 km',
    'Aeroporto di Torino, 73 km': 'Aéroport de Turin, 73 km',
    'Aeroporto di Genova-Sestri, 93 km': 'Aéroport de Gênes-Sestri, 93 km',
  };
  const roomName = isEn
    ? (room.name || room.name_it)
    : isFr
      ? t(lang, `roomDetails.${room.slug}.name`)
      : isDe
        ? t(lang, `roomDetails.${room.slug}.name`)
        : isEs
          ? t(lang, `roomDetails.${room.slug}.name`)
          : room.name_it;
  const roomTagline = isEn
    ? (room.tagline || room.tagline_it)
    : isFr
      ? t(lang, `roomDetails.${room.slug}.tagline`)
      : isDe
        ? t(lang, `roomDetails.${room.slug}.tagline`)
        : isEs
          ? t(lang, `roomDetails.${room.slug}.tagline`)
          : room.tagline_it;
  const roomDescription = isEn
    ? (room.description || room.description_it)
    : isFr
      ? t(lang, `roomDetails.${room.slug}.description`)
      : isDe
        ? t(lang, `roomDetails.${room.slug}.description`)
        : isEs
          ? t(lang, `roomDetails.${room.slug}.description`)
          : room.description_it;
  const priceNote = isEn
    ? (room.priceNote || 'per night (breakfast excluded)')
    : isFr
      ? 'par nuit (petit-déjeuner non inclus)'
      : isDe
        ? 'pro Nacht (Frühstück nicht inbegriffen)'
        : isEs
          ? 'por noche (desayuno no incluido)'
          : room.priceNote_it;
  const [activePhoto, setActivePhoto] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [specCols, setSpecCols] = useState(2);

  // Helper function to get bilingual text from specs, amenities, policies
  const getBilingualText = (obj, lang) => {
    if (!obj) return obj;
    if (typeof obj === 'string') return obj;
    if (Array.isArray(obj)) {
      return obj.map(item => {
        if (typeof item === 'string') return item;
        if (item.label && item.label_it) {
          return { ...item, label: lang === 'en' ? item.label : item.label_it };
        }
        if (item.value && item.value_it) {
          return { ...item, value: lang === 'en' ? item.value : item.value_it };
        }
        return item;
      });
    }
    if (item.label && item.label_it) {
      return { ...obj, label: lang === 'en' ? obj.label : obj.label_it };
    }
    if (obj.value && obj.value_it) {
      return { ...obj, value: lang === 'en' ? obj.value : obj.value_it };
    }
    return obj;
  };

  // Get bilingual specs and filter out _it fields from values/labels
  const getLocalizedSpecs = () => {
    return room.specs.map(spec => ({
      icon: spec.icon,
      label: isEn
        ? (spec.label || spec.label_it)
        : isFr
          ? (frLabelMap[spec.label_it || spec.label] || spec.label_it || spec.label)
          : isDe
            ? (deLabelMap[spec.label_it || spec.label] || spec.label_it || spec.label)
            : isEs
              ? (esLabelMap[spec.label_it || spec.label] || spec.label_it || spec.label)
            : (spec.label_it || spec.label),
      value: isEn
        ? (spec.value || spec.value_it)
        : isFr
          ? (frValueMap[spec.value_it || spec.value] || spec.value_it || spec.value)
          : isDe
            ? (deValueMap[spec.value_it || spec.value] || spec.value_it || spec.value)
            : isEs
              ? (esValueMap[spec.value_it || spec.value] || spec.value_it || spec.value)
            : (spec.value_it || spec.value),
    }));
  };

  // Get localized amenities 
  const getLocalizedAmenities = () => {
    const localized = {};
    Object.entries(room.amenities).forEach(([cat, data]) => {
      const localCat = isEn
        ? cat
        : isFr
          ? (frAmenityCategoryMap[cat] || cat)
          : isDe
            ? (deAmenityCategoryMap[cat] || cat)
            : isEs
              ? (esAmenityCategoryMap[cat] || cat)
            : cat;
      localized[localCat] = {
        icon: data.icon,
        items: isEn
          ? data.items
          : isFr
            ? (data.items_it || data.items || []).map((item, index) => frAmenityItemMap[item] || data.items?.[index] || item)
            : isDe
              ? (data.items_it || data.items || []).map((item, index) => deAmenityItemMap[item] || data.items?.[index] || item)
              : isEs
                ? (data.items_it || data.items || []).map((item, index) => esAmenityItemMap[item] || data.items?.[index] || item)
              : data.items_it,
      };
    });
    return localized;
  };

  // Get localized policies
  const getLocalizedPolicies = () => {
    return room.policies.map(policy => ({
      icon: policy.icon,
      label: isEn
        ? (policy.label || policy.label_it)
        : isFr
          ? (frLabelMap[policy.label_it || policy.label] || policy.label_it || policy.label)
          : isDe
            ? (deLabelMap[policy.label_it || policy.label] || policy.label_it || policy.label)
            : isEs
              ? (esLabelMap[policy.label_it || policy.label] || policy.label_it || policy.label)
            : (policy.label_it || policy.label),
      value: isEn
        ? (policy.value || policy.value_it)
        : isFr
          ? (frValueMap[policy.value_it || policy.value] || policy.value_it || policy.value)
          : isDe
            ? (deValueMap[policy.value_it || policy.value] || policy.value_it || policy.value)
            : isEs
              ? (esValueMap[policy.value_it || policy.value] || policy.value_it || policy.value)
            : (policy.value_it || policy.value),
    }));
  };

  // Get localized surroundings
  const getLocalizedSurroundings = () => {
    const localized = {};
    Object.entries(room.surroundings).forEach(([cat, data]) => {
      const localCat = isEn
        ? cat
        : isFr
          ? (frSurroundingsCategoryMap[cat] || cat)
          : isDe
            ? (deSurroundingsCategoryMap[cat] || cat)
            : isEs
              ? (esSurroundingsCategoryMap[cat] || cat)
            : cat;
      localized[localCat] = {
        icon: data.icon,
        items: isEn
          ? data.items
          : isFr
            ? (data.items_it || data.items || []).map((item, index) => frSurroundingsItemMap[item] || data.items?.[index] || item)
            : isDe
              ? (data.items_it || data.items || []).map((item, index) => deSurroundingsItemMap[item] || data.items?.[index] || item)
              : isEs
                ? (data.items_it || data.items || []).map((item, index) => esSurroundingsItemMap[item] || data.items?.[index] || item)
              : data.items_it,
      };
    });
    return localized;
  };

  useEffect(() => {
    const updateSpecCols = () => setSpecCols(window.innerWidth >= 640 ? 4 : 2);
    updateSpecCols();
    window.addEventListener('resize', updateSpecCols);
    return () => window.removeEventListener('resize', updateSpecCols);
  }, []);

  const openLightbox = (idx) => { setActivePhoto(idx); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prevPhoto = () => setActivePhoto((activePhoto - 1 + room.gallery.length) % room.gallery.length);
  const nextPhoto = () => setActivePhoto((activePhoto + 1) % room.gallery.length);

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ height: '65vh', minHeight: 460 }}>
        <div className="absolute inset-0">
          <Image
            src={room.heroImg}
            alt={roomName}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
            style={{ animation: 'kenBurns 12s ease-in-out infinite alternate' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.5) 0%, rgba(10,8,6,0.2) 50%, rgba(10,8,6,0.78) 100%)' }} />
        </div>
        <div className="relative h-full flex flex-col justify-end pb-14 px-6 max-w-7xl mx-auto">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>{t(lang, 'roomPage.label')}</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, color: '#FAF7F2', lineHeight: 1.1, marginBottom: '0.7rem' }}>
            {roomName}
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#fff', fontStyle: 'italic', maxWidth: 500 }}>
            {roomTagline}
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div style={{ background: '#FAF7F2' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ── LEFT (2/3) ── */}
            <div className="lg:col-span-2">

              {/* MOBILE PRICE CARD (prima della descrizione) */}
              <div className="lg:hidden" style={{ background: '#fff', borderTop: '3px solid #C9A870', padding: '1.7rem', marginBottom: '2rem', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
                <div style={{ marginBottom: '1.3rem' }}>
                  <span style={{ fontFamily: 'Lato', fontSize: '0.62rem', color: '#9A8A7A', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>{t(lang, 'roomPage.startingFrom')}</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.6rem', color: '#C9A870', fontWeight: 600 }}>€{room.price}</span>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#9A8A7A' }}>&nbsp;{t(lang, 'roomPage.perNight')}</span>
                  </div>
                  <span style={{ fontFamily: 'Lato', fontSize: '0.7rem', color: '#9A8A7A' }}>{priceNote}</span>
                </div>

                <Link href="/prenota" className="btn-gold" style={{ display: 'block', textAlign: 'center', marginBottom: '0.8rem' }}>
                  <i className="fa fa-calendar-check" style={{ marginRight: 8 }}></i>
                  {t(lang, 'roomPage.bookStay')}
                </Link>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: '0.9rem', borderTop: '1px solid rgba(201,168,112,0.12)' }}>
                  {[
                    { icon: 'fa-shield-alt', text: t(lang, 'roomPage.freeCancellation') },
                    { icon: 'fa-tag', text: t(lang, 'roomPage.bestPrice') },
                  ].map((t) => (
                    <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <i className={`fa ${t.icon}`} style={{ color: '#C9A870', fontSize: '0.7rem', width: 14 }}></i>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: '#6B5E52' }}>{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESCRIZIONE + SPECS */}
              <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(201,168,112,0.2)' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.95rem', color: '#2C2520', marginBottom: '1.2rem', fontWeight: 500 }}>
                  {t(lang, 'roomPage.roomDescription')}
                </h2>
                {roomDescription.split('\n\n').map((para, i) => (
                  <p key={i} style={{ fontFamily: 'Lato', fontSize: '1.02rem', color: '#6B5E52', lineHeight: 1.85, marginBottom: '1rem' }}>{para}</p>
                ))}

                {/* SPECS GRID — stile Booking */}
                <div className="grid grid-cols-2 sm:grid-cols-4" style={{ border: '1px solid rgba(201,168,112,0.2)', marginTop: '1.8rem' }}>
                  {getLocalizedSpecs().map((spec, i) => (
                    <div key={spec.label} style={{
                      padding: '1rem 1.1rem',
                      borderRight: (i + 1) % specCols !== 0 ? '1px solid rgba(201,168,112,0.2)' : 'none',
                      borderBottom: i < getLocalizedSpecs().length - specCols ? '1px solid rgba(201,168,112,0.2)' : 'none',
                      background: i % 2 === 0 ? '#fff' : '#FDFAF5',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
                        <i className={`fa ${spec.icon}`} style={{ color: '#C9A870', fontSize: '0.8rem', width: 14 }}></i>
                        <span style={{ fontFamily: 'Lato', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A' }}>{spec.label}</span>
                      </div>
                      <div style={{ fontFamily: 'Lato', fontSize: '0.8rem', fontWeight: 700, color: '#2C2520', paddingLeft: 21 }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* GALLERY */}
              <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(201,168,112,0.2)' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', color: '#2C2520', marginBottom: '1.2rem', fontWeight: 500 }}>{t(lang, 'roomPage.gallery')}</h2>
                <div className="relative overflow-hidden cursor-pointer" style={{ height: 370, marginBottom: 8 }} onClick={() => openLightbox(activePhoto)}>
                  <img src={room.gallery[activePhoto]} alt={`${roomName} foto ${activePhoto + 1}`} className="w-full h-full object-cover" />
                  <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(10,8,6,0.7)', padding: '0.35rem 0.8rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <i className="fa fa-expand" style={{ color: '#C9A870', fontSize: '0.7rem' }}></i>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.62rem', color: '#fff', letterSpacing: '0.1em' }}>{t(lang, 'roomPage.expand')}</span>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {room.gallery.map((img, i) => (
                    <div key={i} className="cursor-pointer overflow-hidden" style={{ height: 76, outline: i === activePhoto ? '2px solid #C9A870' : '2px solid transparent', outlineOffset: 2, transition: 'outline 0.2s' }} onClick={() => setActivePhoto(i)}>
                      <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                    </div>
                  ))}
                </div>
              </section>

              {/* DOTAZIONI */}
              <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(201,168,112,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}>
                  <i className="fa fa-star" style={{ color: '#C9A870', fontSize: '1.3rem' }}></i>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.95rem', color: '#2C2520', fontWeight: 500 }}>{t(lang, 'roomPage.idealForStay')}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {Object.entries(getLocalizedAmenities()).map(([cat, data]) => (
                    <div key={cat} style={{ background: '#fff', padding: '1.3rem', borderTop: '2px solid #C9A870' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.8rem' }}>
                        <i className={`fa ${data.icon}`} style={{ color: '#C9A870', fontSize: '1rem', width: 20 }}></i>
                        <h3 style={{ fontFamily: 'Lato', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A870' }}>{cat}</h3>
                      </div>
                      <ul style={{ listStyle: 'none' }}>
                        {data.items.map((item) => (
                          <li key={typeof item === 'string' ? item : item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '0.32rem 0', borderBottom: '1px solid rgba(201,168,112,0.07)', fontFamily: 'Lato', fontSize: '0.92rem', color: '#4A3D33' }}>
                            <i className="fa fa-check" style={{ color: '#C9A870', fontSize: '0.6rem', marginTop: 4, flexShrink: 0 }}></i>
                            {typeof item === 'string' ? (
                              item
                            ) : (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#4A3D33', textDecoration: 'none' }}
                              >
                                {item.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* DINTORNI DELL'HOTEL */}
              <section style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(201,168,112,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}>
                  <i className="fa fa-map-marker-alt" style={{ color: '#C9A870', fontSize: '1.3rem' }}></i>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.95rem', color: '#2C2520', fontWeight: 500 }}>{t(lang, 'roomPage.surroundings')}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {Object.entries(getLocalizedSurroundings()).map(([cat, data]) => (
                    <div key={cat} style={{ background: '#fff', padding: '1.3rem', borderTop: '2px solid #C9A870' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.8rem' }}>
                        <i className={`fa ${data.icon}`} style={{ color: '#C9A870', fontSize: '1rem', width: 20 }}></i>
                        <h3 style={{ fontFamily: 'Lato', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A870' }}>{cat}</h3>
                      </div>
                      <ul style={{ listStyle: 'none' }}>
                        {data.items.map((item) => (
                          <li key={typeof item === 'string' ? item : item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '0.32rem 0', borderBottom: '1px solid rgba(201,168,112,0.07)', fontFamily: 'Lato', fontSize: '0.92rem', color: '#4A3D33' }}>
                            <i className="fa fa-check" style={{ color: '#C9A870', fontSize: '0.6rem', marginTop: 4, flexShrink: 0 }}></i>
                            {typeof item === 'string' ? (
                              item
                            ) : (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#4A3D33', textDecoration: 'none' }}
                              >
                                {item.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* POLITICHE */}
              <section>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.95rem', color: '#2C2520', marginBottom: '1.2rem', fontWeight: 500 }}>{t(lang, 'roomPage.policies')}</h2>
                <div style={{ background: '#fff' }}>
                  {getLocalizedPolicies().map((policy, i) => (
                    <div key={policy.label} style={{ display: 'flex', gap: '1.1rem', padding: '1rem 1.3rem', borderBottom: i < getLocalizedPolicies().length - 1 ? '1px solid rgba(201,168,112,0.12)' : 'none', alignItems: 'flex-start' }}>
                      <div style={{ width: 34, height: 34, background: 'rgba(201,168,112,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={`fa ${policy.icon}`} style={{ color: '#C9A870', fontSize: '0.8rem' }}></i>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A8A7A', marginBottom: 3 }}>{policy.label}</div>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.95rem', color: '#4A3D33', lineHeight: 1.6 }}>{policy.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* ── RIGHT — STICKY BOOKING ── */}
            <div className="lg:col-span-1">
              <div style={{ position: 'sticky', top: 100 }}>

                {/* PRICE CARD */}
                <div className="hidden lg:block" style={{ background: '#fff', borderTop: '3px solid #C9A870', padding: '1.7rem', marginBottom: '1rem', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
                  <div style={{ marginBottom: '1.3rem' }}>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.62rem', color: '#9A8A7A', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>{t(lang, 'roomPage.startingFrom')}</span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.6rem', color: '#C9A870', fontWeight: 600 }}>€{room.price}</span>
                      <span style={{ fontFamily: 'Lato', fontSize: '0.75rem', color: '#9A8A7A' }}>&nbsp;{t(lang, 'roomPage.perNight')}</span>
                    </div>
                    <span style={{ fontFamily: 'Lato', fontSize: '0.7rem', color: '#9A8A7A' }}>{priceNote}</span>
                  </div>

                  <Link href="/prenota" className="btn-gold" style={{ display: 'block', textAlign: 'center', marginBottom: '0.8rem' }}>
                    <i className="fa fa-calendar-check" style={{ marginRight: 8 }}></i>
                    {t(lang, 'roomPage.bookStay')}
                  </Link>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: '0.9rem', borderTop: '1px solid rgba(201,168,112,0.12)' }}>
                    {[
                      { icon: 'fa-shield-alt', text: t(lang, 'roomPage.freeCancellation') },
                      { icon: 'fa-tag', text: t(lang, 'roomPage.bestPrice') },
                    ].map((t) => (
                      <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <i className={`fa ${t.icon}`} style={{ color: '#C9A870', fontSize: '0.7rem', width: 14 }}></i>
                        <span style={{ fontFamily: 'Lato', fontSize: '0.72rem', color: '#6B5E52' }}>{t.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONTATTI RAPIDI */}
                <div style={{ background: '#fff', padding: '1.3rem', borderTop: '1px solid rgba(201,168,112,0.2)' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2C2520', marginBottom: '1rem', fontWeight: 500 }}>
                    {t(lang, 'roomPage.needHelp')}
                  </h3>
                  {[
                    { icon: 'fas fa-phone', iconColor: '#C9A870', bg: 'rgba(201,168,112,0.1)', label: t(lang, 'roomPage.callUs'), value: '+39 0141 961853', href: 'tel:+390141961853' },
                    { icon: 'fas fa-envelope', iconColor: '#C9A870', bg: 'rgba(201,168,112,0.1)', label: t(lang, 'roomPage.writeUs'), value: 'info@hotellanghemonferrato.it', href: 'mailto:info@hotellanghemonferrato.it' },
                    { icon: 'fab fa-whatsapp', iconColor: '#25D366', bg: 'rgba(37,211,102,0.1)', label: 'WhatsApp', value: t(lang, 'roomPage.chatWithUs'), href: 'https://wa.me/390141961853' },
                  ].map((c) => (
                    <a key={c.label} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: '0.9rem' }}>
                      <div style={{ width: 32, height: 32, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={c.icon} style={{ color: c.iconColor, fontSize: '0.8rem' }}></i>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.58rem', color: '#9A8A7A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.label}</div>
                        <div style={{ fontFamily: 'Lato', fontSize: '0.78rem', fontWeight: 700, color: '#2C2520' }}>{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* LINK TUTTE LE CAMERE */}
                <div style={{ marginTop: '0.8rem', background: '#fff', padding: '1.1rem 1.3rem', borderTop: '1px solid rgba(201,168,112,0.2)' }}>
                  <Link href="/camere" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontFamily: 'Lato', fontSize: '0.78rem', color: '#4A3D33' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#4A3D33')}
                  >
                    <i className="fa fa-th-large" style={{ color: '#C9A870', fontSize: '0.72rem' }}></i>
                    {t(lang, 'roomPage.seeAllRooms')}
                    <i className="fa fa-arrow-right" style={{ fontSize: '0.6rem', marginLeft: 'auto' }}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PREV / NEXT ── */}
      <div style={{ background: '#fff', borderTop: '1px solid rgba(201,168,112,0.15)', borderBottom: '1px solid rgba(201,168,112,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 items-center" style={{ height: 68 }}>
            <div>
              {room.prev && (
                <Link href={`/camere/${room.prev}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Lato', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A3D33', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4A3D33')}
                >
                  <i className="fa fa-arrow-left" style={{ fontSize: '0.65rem' }}></i>
                  {t(lang, 'roomPage.previous')}
                </Link>
              )}
            </div>
            <div className="text-center">
              <Link href="/camere" style={{ color: '#C9A870' }}>
                <i className="fa fa-th-large" style={{ fontSize: '1rem' }}></i>
              </Link>
            </div>
            <div className="text-right">
              {room.next && (
                <Link href={`/camere/${room.next}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Lato', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A3D33', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A870')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4A3D33')}
                >
                  {t(lang, 'roomPage.next')}
                  <i className="fa fa-arrow-right" style={{ fontSize: '0.65rem' }}></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA BOTTOM ── */}
      <section className="relative overflow-hidden" style={{ padding: '80px 0' }}>
        <div className="absolute inset-0">
          <img src="/foto/hotel-langhe-monferrato.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.78)' }} />
        </div>
        <div className="relative text-center px-6 max-w-3xl mx-auto">
          <p className="section-label" style={{ marginBottom: '0.6rem' }}>{t(lang, 'roomPage.bookStay')}</p>
          <div className="gold-divider" style={{ marginBottom: '1.4rem' }}></div>
          <h2 className="section-title-light" style={{ marginBottom: '1rem' }}>
            {t(lang, 'roomPage.readyExperience')} {roomName}?
          </h2>
          <p style={{ fontFamily: 'Lato', fontSize: '0.86rem', color: '#fff', lineHeight: 1.8, marginBottom: '2rem' }}>
            {t(lang, 'roomPage.bottomText')}
          </p>
          <Link href="/prenota" className="btn-gold" style={{ padding: '1rem 2.8rem' }}>
            {t(lang, 'roomPage.bookNowBestPrice')}
          </Link>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={closeLightbox}>
          <button onClick={(e) => { e.stopPropagation(); prevPhoto(); }} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: 46, height: 46, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fa fa-chevron-left"></i>
          </button>
          <img src={room.gallery[activePhoto]} alt="" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); nextPhoto(); }} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: 46, height: 46, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fa fa-chevron-right"></i>
          </button>
          <button onClick={closeLightbox} style={{ position: 'absolute', top: 18, right: 18, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: 38, height: 38, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fa fa-times"></i>
          </button>
          <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', fontFamily: 'Lato', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
            {activePhoto + 1} / {room.gallery.length}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
