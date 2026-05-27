'use client';

import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

const images = [
  {
    src: '/foto/Camera matrimoniale.webp',
    alt: 'Camera matrimoniale Hotel Langhe e Monferrato Costigliole d\'Asti',
  },
  {
    src: '/foto/Suite divanetti.webp',
    alt: 'Suite con salottino Hotel Langhe e Monferrato',
  },
  {
    src: '/foto/Reception 4.webp',
    alt: 'Reception Hotel Langhe e Monferrato Asti',
  },
  {
    src: '/foto/langhe-monferrato.webp',
    alt: 'Paesaggio colline Langhe e Monferrato UNESCO',
  },
];

export default function ExperienceShowcase() {
  return (
    <section style={{ background: '#FFFFFF', padding: '100px 0 110px' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
          className="experience-grid"
        >
          {/* LEFT: Text */}
          <ScrollAnimation type="slide-up">
            <div>
              <p className="section-label mb-3">Il tuo soggiorno</p>
              <div className="gold-divider-left mb-6"></div>
              <h2 className="section-title mb-6" style={{ maxWidth: 440 }}>
                Tra Langhe e Monferrato,<br />a due passi da Asti
              </h2>
              <p
                style={{
                  fontFamily: 'Lato',
                  fontSize: '1rem',
                  color: 'var(--text-mid)',
                  lineHeight: 1.85,
                  marginBottom: '1.6rem',
                }}
              >
                All&apos;Hotel Langhe &amp; Monferrato trovi ambienti curati, comfort
                moderno e un&apos;accoglienza autentica nel cuore del Piemonte.
                Ogni spazio è pensato per farti vivere il territorio con calma:
                dalle colline patrimonio UNESCO alle esperienze enogastronomiche
                tra vigneti e cantine storiche.
              </p>
              <p
                style={{
                  fontFamily: 'Lato',
                  fontSize: '1rem',
                  color: 'var(--text-mid)',
                  lineHeight: 1.85,
                }}
              >
                Che tu stia viaggiando in coppia, in famiglia o per lavoro, qui
                trovi un punto di partenza ideale tra Asti, Alba e i borghi delle
                Langhe. Relax, gusto e territorio in un unico soggiorno.
              </p>
            </div>
          </ScrollAnimation>

          {/* RIGHT: Staggered image grid */}
          <ScrollAnimation type="slide-up" delay={150}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
              }}
            >
              {/* col 1: prima immagine più alta, seconda normale */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: 0 }}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '260px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 45vw, 22vw"
                  />
                </div>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 45vw, 22vw"
                  />
                </div>
              </div>

              {/* col 2: sfasata verso il basso */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '40px' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={images[1].src}
                    alt={images[1].alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 45vw, 22vw"
                  />
                </div>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '260px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={images[3].src}
                    alt={images[3].alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 45vw, 22vw"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
