'use client';

import dynamic from 'next/dynamic';

// Lazy load CookieConsent to avoid hydration issues
const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });

export default function ClientLayout() {
  return <CookieConsent />;
}
