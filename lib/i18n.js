import it from '@/locales/it.json';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';
import de from '@/locales/de.json';
import es from '@/locales/es.json';

export const dictionaries = { it, en, fr, de, es };
export const supportedLanguages = ['it', 'en', 'fr', 'de', 'es'];

export function getLang() {
  if (typeof window === 'undefined') return 'it';
  const saved = localStorage.getItem('site_lang');
  return supportedLanguages.includes(saved) ? saved : 'it';
}

export function t(lang, key) {
  const safeLang = supportedLanguages.includes(lang) ? lang : 'it';
  const source = dictionaries[safeLang] || dictionaries.it;
  const fallback = dictionaries.it;

  const read = (obj, path) => path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);

  const value = read(source, key);
  if (value !== undefined) return value;
  const fb = read(fallback, key);
  return fb !== undefined ? fb : key;
}
