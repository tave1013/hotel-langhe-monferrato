import en from '@/locales/en.json';
import { rooms } from '@/lib/roomsData';
import { sale } from '@/lib/saleMeetingData';
import { guideEn } from '@/lib/territorioDataEn';

const roomsEn = rooms.map((room) => ({
  slug: room.slug,
  name: room.name,
  tagline: room.tagline,
  description: room.description,
  priceNote: room.priceNote,
  specs: (room.specs || []).map((s) => ({
    icon: s.icon,
    label: s.label,
    value: s.value,
  })),
  amenities: Object.fromEntries(
    Object.entries(room.amenities || {}).map(([category, data]) => [
      category,
      {
        icon: data.icon,
        items: data.items || [],
      },
    ]),
  ),
  policies: (room.policies || []).map((p) => ({
    icon: p.icon,
    label: p.label,
    value: p.value,
  })),
  surroundings: Object.fromEntries(
    Object.entries(room.surroundings || {}).map(([category, data]) => [
      category,
      {
        icon: data.icon,
        items: data.items || [],
      },
    ]),
  ),
}));

const meetingRoomsEn = sale.map((sala) => ({
  slug: sala.slug,
  nome: sala.nome,
  sottotitolo: sala.sottotitolo,
  tagline: sala.tagline,
  specs: (sala.specs || []).map((s) => ({
    icon: s.icon,
    label: s.label,
    value: s.value,
  })),
  configurazioni: (sala.configurazioni || []).map((c) => ({
    icon: c.icon,
    tipo: c.tipo,
    posti: c.posti,
  })),
  dotazioni: sala.dotazioni || [],
  nota: sala.nota || '',
}));

// FILE UNICO DI TRADUZIONE (INGLESE)
// Copia questo file, rinominalo (es. languagePack.fr.js), traduci i valori testuali
// e avrai tutta la lingua in un unico posto.
export const languagePackEn = {
  meta: {
    code: 'en',
    label: 'English',
    source: 'single-file-pack',
  },
  ui: en,
  data: {
    rooms: roomsEn,
    meetingRooms: meetingRoomsEn,
    territoryGuides: guideEn,
  },
};

export default languagePackEn;
