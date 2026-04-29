import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Hotel Langhe & Monferrato',
  description: 'Informativa privacy di Hotel Langhe & Monferrato.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#FAF7F2', minHeight: '100vh', padding: '140px 0 80px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-3">Privacy Policy</p>
          <div className="gold-divider-left mb-6"></div>
          <h1 className="section-title mb-6">Informativa sul trattamento dei dati personali</h1>

          <div style={{ color: '#4A3D33', lineHeight: 1.85, fontSize: '1rem' }} className="space-y-6">
            <p>
              Hotel Langhe &amp; Monferrato tratta i dati personali nel rispetto della normativa vigente in materia di protezione dei dati personali.
              Le informazioni eventualmente inviate tramite moduli di contatto, email, telefono o WhatsApp vengono utilizzate esclusivamente per rispondere alle richieste ricevute,
              gestire prenotazioni, fornire assistenza e adempiere agli obblighi di legge.
            </p>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#2C2520' }}>Dati raccolti</h2>
              <p>
                Possiamo raccogliere dati anagrafici, recapiti, informazioni relative al soggiorno e qualsiasi altro dato fornito spontaneamente dall’utente durante la richiesta di informazioni o la prenotazione.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#2C2520' }}>Finalità del trattamento</h2>
              <p>
                I dati sono trattati per dare seguito alle richieste dell’utente, inviare informazioni sui servizi della struttura, gestire il rapporto precontrattuale e contrattuale,
                nonché per obblighi amministrativi, fiscali e normativi.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#2C2520' }}>Conservazione e sicurezza</h2>
              <p>
                I dati vengono conservati per il tempo strettamente necessario al conseguimento delle finalità per cui sono stati raccolti e protetti con misure tecniche e organizzative adeguate.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#2C2520' }}>Diritti dell’interessato</h2>
              <p>
                In qualsiasi momento è possibile richiedere accesso, aggiornamento, rettifica, cancellazione o limitazione del trattamento dei propri dati, nei limiti previsti dalla legge,
                contattando direttamente la struttura.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#2C2520' }}>Contatti</h2>
              <p>
                Per ogni richiesta relativa alla privacy è possibile contattare Hotel Langhe &amp; Monferrato tramite i recapiti presenti nel sito ufficiale.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
