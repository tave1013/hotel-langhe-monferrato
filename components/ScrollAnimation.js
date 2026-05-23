'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ScrollAnimation - Componente per animazioni eleganti allo scroll
 * Tipo di animazioni disponibili:
 * - fade-in: semplice dissolvenza
 * - slide-up: slide dal basso (default, più comune)
 * - slide-left: slide da sinistra
 * - slide-right: slide da destra
 * - scale: leggero zoom in
 */

export default function ScrollAnimation({ 
  children, 
  type = 'slide-up', 
  delay = 0,
  duration = 'normal',
  threshold = 0.1 
}) {
  const ref = useRef(null);
  // Inizia come visibile: contenuto sempre leggibile anche prima dell'hydration JS
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    const el = ref.current;
    if (!el) return;

    // Se l'elemento è già visibile nel viewport al caricamento, animalo subito
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold]);

  const animationClass = `scroll-${type}`;
  const delayClass = delay > 0 ? `delay-${delay}` : '';
  const durationClass = duration !== 'normal' ? `duration-${duration}` : '';

  // Prima dell'hydration: nessuna classe animazione → contenuto visibile normalmente
  if (!mounted) {
    return <div>{children}</div>;
  }

  const animateClass = isVisible ? 'animate' : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${animateClass} ${delayClass} ${durationClass}`}
    >
      {children}
    </div>
  );
}
