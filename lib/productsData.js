// ================================================================
// lib/productsData.js
// Listino prodotti bar / caffetteria.
// Se un prodotto non è presente qui, l'informazione non è disponibile.
// ================================================================

export const products = [
  { name: 'Caffè', category: 'caffetteria', price: 2.0, currency: 'EUR' },
  { name: 'Caffè decaffeinato', category: 'caffetteria', price: 2.0, currency: 'EUR' },
  { name: 'Caffè corretto', category: 'caffetteria', price: 3.0, currency: 'EUR' },
  { name: 'Caffè d’orzo in tazza piccola', category: 'caffetteria', price: 2.0, currency: 'EUR' },
  { name: 'Caffè d’orzo in tazza grande', category: 'caffetteria', price: 3.5, currency: 'EUR' },
  { name: 'Cappuccino', category: 'caffetteria', price: 2.5, currency: 'EUR' },
  { name: 'Latte macchiato (nel bicchiere di vetro)', category: 'caffetteria', price: 3.0, currency: 'EUR' },
  { name: 'The', category: 'caffetteria', price: 3.0, currency: 'EUR' },
  { name: 'Cioccolata calda', category: 'caffetteria', price: 3.0, currency: 'EUR' },
  { name: 'Estathè - Coca cola lattina', category: 'bevande', price: 4.0, currency: 'EUR' },
  { name: 'Crodino', category: 'aperitivi', price: 4.0, currency: 'EUR' },
  { name: 'Campari', category: 'aperitivi', price: 4.0, currency: 'EUR' },
  { name: 'Cocktail', category: 'aperitivi', price: 7.0, currency: 'EUR' },
  { name: 'Amaro', category: 'distillati', price: 5.0, currency: 'EUR' },
  { name: 'Grappa', category: 'distillati', price: 5.0, currency: 'EUR' },
  {
    name: 'Calice di vino rosso',
    category: 'vino',
    price: 5.0,
    currency: 'EUR',
    aliases: ['vino rosso al calice', 'calice vino rosso', 'calice di rosso'],
    serviceNote: 'Per sapere quale vino rosso viene servito al calice, chiedere direttamente al bar.',
  },
  {
    name: 'Calice di vino bianco',
    category: 'vino',
    price: 5.0,
    currency: 'EUR',
    aliases: ['vino bianco al calice', 'calice vino bianco', 'calice di bianco'],
    serviceNote: 'Per sapere quale vino bianco viene servito al calice, chiedere direttamente al bar.',
  },
  { name: 'Moretti da 33cl', category: 'birra', price: 5.0, currency: 'EUR' },
  { name: 'Moretti da 66 cl', category: 'birra', price: 8.0, currency: 'EUR' },
  { name: 'Bottiglietta d’acqua in plastica', category: 'acqua', price: 2.0, currency: 'EUR' },
  { name: 'Bottiglia d’acqua in vetro', category: 'acqua', price: 3.5, currency: 'EUR' },
];

export const PRODUCT_NOT_AVAILABLE_RESPONSE = 'Non ho questa informazione nel listino prodotti disponibile.';

function normalizeProductName(value) {
  return (value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function findProductsByName(query) {
  const normalizedQuery = normalizeProductName(query);
  if (!normalizedQuery) return [];

  return products.filter((product) => {
    const searchableNames = [product.name, ...(product.aliases || [])].map(normalizeProductName);
    return searchableNames.some((normalizedName) => (
      normalizedName === normalizedQuery || normalizedName.includes(normalizedQuery) || normalizedQuery.includes(normalizedName)
    ));
  });
}

export function getProductPriceInfo(query) {
  const matches = findProductsByName(query);
  if (!matches.length) {
    return {
      found: false,
      message: PRODUCT_NOT_AVAILABLE_RESPONSE,
      matches: [],
    };
  }

  if (matches.length === 1) {
    const match = matches[0];
    return {
      found: true,
      message: `${match.name}: €${match.price.toFixed(2)}${match.serviceNote ? `. ${match.serviceNote}` : ''}`,
      matches,
    };
  }

  return {
    found: true,
    message: `${query}: ho trovato più voci nel listino (${matches.map((match) => `€${match.price.toFixed(2)}`).join(', ')}).`,
    matches,
  };
}
