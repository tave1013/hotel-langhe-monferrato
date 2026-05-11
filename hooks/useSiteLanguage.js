'use client';

import { useEffect, useState } from 'react';
import { getLang } from '@/lib/i18n';

export default function useSiteLanguage() {
  const [lang, setLang] = useState('it');

  useEffect(() => {
    setLang(getLang());

    const onStorage = () => setLang(getLang());
    const onCustom = (e) => setLang(e?.detail || getLang());

    window.addEventListener('storage', onStorage);
    window.addEventListener('site-language-change', onCustom);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('site-language-change', onCustom);
    };
  }, []);

  return lang;
}
