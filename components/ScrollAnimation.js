'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ScrollAnimation - Animazioni decorative allo scroll.
 * Il contenuto è SEMPRE visibile (nessuna opacity:0 mai).
 * L'animazione aggiunge solo un leggero transform quando l'elemento entra nel viewport.
 */
export default function ScrollAnimation({ 
  children, 
  type = 'slide-up', 
  delay = 0,
  threshold = 0.05
}) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '100px 0px 0px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`scroll-anim scroll-anim--${type}${animated ? ' scroll-anim--done' : ''}${
        delay > 0 ? ` delay-${delay}` : ''
      }`}
    >
      {children}
    </div>
  );
}
