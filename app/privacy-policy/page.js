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

          <div style={{ color: '#1A1714', lineHeight: 1.85, fontSize: '1rem' }} className="space-y-6">
            <p style={{ fontSize: '0.9rem', color: '#960018', fontWeight: 500 }}>
              Ultimo aggiornamento: maggio 2026
            </p>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>1. Introduzione</h2>
              <p>
                Hotel Langhe &amp; Monferrato (di seguito "Hotel" o "noi") è consapevole dell'importanza della privacy dei nostri clienti e visitatori del sito web. Questa informativa sulla privacy spiega come raccogliamo, utilizziamo, divulghiamo e tuteliamo i vostri dati personali quando navigate sul nostro sito web, effettuate una prenotazione o interagite con i nostri servizi.
              </p>
              <p>
                Vi invitiamo a leggere attentamente questa informativa. Se non siete d'accordo con le nostre pratiche, vi preghiamo di non utilizzare i nostri servizi.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>2. Titolare del Trattamento</h2>
              <p>
                Hotel Langhe &amp; Monferrato è il titolare del trattamento dei vostri dati personali nel senso del Regolamento UE 2016/679 (GDPR).
              </p>
              <p style={{ marginTop: '1rem' }}>
                <strong>Contatti:</strong><br />
                Hotel Langhe &amp; Monferrato<br />
                Via Contessa di Castiglione, 1<br />
                14055 Costigliole d'Asti (AT) - Italy<br />
                Email: prenota@hotellanghemonferrato.com<br />
                Telefono: +39 0141 961853
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>3. Dati Personali Raccolti</h2>
              <p>
                Raccogliamo i seguenti tipi di dati personali:
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
                <li><strong>Dati di Contatto:</strong> Nome, cognome, indirizzo email, numero di telefono, indirizzo</li>
                <li><strong>Dati di Prenotazione:</strong> Date di check-in e check-out, preferenze stanza, numero di ospiti, informazioni di pagamento</li>
                <li><strong>Dati Tecnici:</strong> Indirizzo IP, tipo di browser, pagine visitate, durata della visita, cookie</li>
                <li><strong>Dati Forniti Volontariamente:</strong> Commenti, richieste speciali, preferenze personali</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>4. Finalità del Trattamento</h2>
              <p>
                Utilizziamo i vostri dati personali per:
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Processare e confermare le vostre prenotazioni</li>
                <li>Comunicare con voi riguardo le vostre prenotazioni</li>
                <li>Fornire assistenza al cliente e rispondere alle vostre domande</li>
                <li>Migliorare i nostri servizi e personalizzare la vostra esperienza</li>
                <li>Analizzare il traffico del sito web e i modelli di utilizzo</li>
                <li>Inviare newsletter e comunicazioni di marketing (solo con vostro consenso)</li>
                <li>Rispettare gli obblighi legali e fiscali</li>
                <li>Prevenire frodi e attività illegali</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>5. Base Legale del Trattamento</h2>
              <p>
                Il trattamento dei vostri dati personali si basa su:
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
                <li><strong>Esecuzione di un Contratto:</strong> Dati necessari per elaborare le vostre prenotazioni</li>
                <li><strong>Consenso:</strong> Dati raccolti solo con il vostro consenso esplicito (es. newsletter)</li>
                <li><strong>Obbligo Legale:</strong> Dati richiesti per conformarsi alle leggi applicabili</li>
                <li><strong>Interessi Legittimi:</strong> Miglioramento dei servizi e prevenzione delle frodi</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>6. Cookie</h2>
              <p>
                Il nostro sito web utilizza cookie per migliorare la vostra esperienza di navigazione. I cookie sono piccoli file di testo che vengono memorizzati sul vostro dispositivo.
              </p>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#960018', marginTop: '1.5rem', marginBottom: '0.8rem' }}>
                Tipi di Cookie:
              </h3>
              <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
                <li><strong>Cookie Necessari:</strong> Essenziali per il funzionamento del sito (es. preferenze di lingua, sessioni)</li>
                <li><strong>Cookie Analitici:</strong> Ci aiutano a comprendere come i visitatori utilizzano il nostro sito</li>
                <li><strong>Cookie di Marketing:</strong> Utilizzati per mostrare contenuti personalizzati (solo con consenso)</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                Potete gestire le preferenze sui cookie tramite il banner di consenso che appare quando visitate il nostro sito per la prima volta.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>7. Condivisione dei Dati</h2>
              <p>
                I vostri dati personali possono essere condivisi con:
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
                <li><strong>Fornitori di Servizi:</strong> Sistemi di pagamento, gestione prenotazioni, email</li>
                <li><strong>Partner Commerciali:</strong> Solo con vostro consenso per offerte speciali</li>
                <li><strong>Autorità Legali:</strong> Se richiesto dalla legge</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                Non vendiamo i vostri dati personali a terze parti.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>8. Conservazione dei Dati</h2>
              <p>
                Conserviamo i vostri dati personali per il tempo necessario a:
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Completare la vostra prenotazione e fornire assistenza post-soggiorno (fino a 3 anni)</li>
                <li>Rispettare gli obblighi legali e fiscali (fino a 10 anni per i registri contabili)</li>
                <li>Perseguire interessi legittimi (fino a quando necessario)</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                Dopo questo periodo, i dati verranno eliminati in modo sicuro.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>9. Vostri Diritti</h2>
              <p>
                Secondo il GDPR, avete i seguenti diritti:
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
                <li><strong>Diritto di Accesso:</strong> Potete richiedere una copia dei vostri dati personali</li>
                <li><strong>Diritto di Rettificazione:</strong> Potete correggere dati inaccurati</li>
                <li><strong>Diritto di Cancellazione:</strong> Potete richiedere l'eliminazione dei vostri dati ("diritto all'oblio")</li>
                <li><strong>Diritto di Limitazione:</strong> Potete limitare il trattamento dei vostri dati</li>
                <li><strong>Diritto di Portabilità:</strong> Potete ricevere i vostri dati in formato strutturato</li>
                <li><strong>Diritto di Opposizione:</strong> Potete opporvi al trattamento dei vostri dati</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                Per esercitare questi diritti, contattateci all'indirizzo <strong>prenota@hotellanghemonferrato.com</strong>.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>10. Sicurezza dei Dati</h2>
              <p>
                Implementiamo misure di sicurezza tecniche e organizzative per proteggere i vostri dati personali da accesso non autorizzato, alterazione, divulgazione o distruzione. Tuttavia, nessuna trasmissione su Internet è completamente sicura.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>11. Trasferimenti Internazionali</h2>
              <p>
                I vostri dati personali sono generalmente trattati e conservati all'interno dell'Unione Europea. Se i dati vengono trasferiti al di fuori dell'UE, garantiamo che ciò avvenga in conformità con le normative sul GDPR.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>12. Modifiche a Questa Informativa</h2>
              <p>
                Ci riserviamo il diritto di aggiornare questa informativa sulla privacy in qualsiasi momento. I cambiamenti entreranno in vigore immediatamente dopo la pubblicazione sul nostro sito web. Vi consigliamo di controllare periodicamente questa pagina per restare informati.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '0.8rem', color: '#960018' }}>13. Contattaci</h2>
              <p>
                Se avete domande su questa informativa sulla privacy o sulle nostre pratiche di trattamento dei dati, contattateci:
              </p>
              <p style={{ marginTop: '1rem' }}>
                <strong>Hotel Langhe &amp; Monferrato</strong><br />
                Via Contessa di Castiglione, 1<br />
                14055 Costigliole d'Asti (AT) - Italy<br />
                Email: <a href="mailto:prenota@hotellanghemonferrato.com" style={{ color: '#960018', textDecoration: 'none', borderBottom: '1px solid #960018' }}>prenota@hotellanghemonferrato.com</a><br />
                Telefono: <a href="tel:+390141961853" style={{ color: '#960018', textDecoration: 'none', borderBottom: '1px solid #960018' }}>+39 0141 961853</a>
              </p>
            </section>

            <div style={{
              backgroundColor: 'rgba(201, 168, 112, 0.1)',
              padding: '1.5rem',
              borderLeft: '3px solid #C9A870',
              marginTop: '3rem',
            }}>
              <p style={{ fontSize: '0.9rem', color: '#1A1714', margin: 0 }}>
                <strong>Nota Legale:</strong> Questa informativa sulla privacy è fornita a titolo informativo. Hotel Langhe &amp; Monferrato si impegna a conformarsi pienamente alla normativa vigente sulla protezione dei dati personali, incluso il GDPR (Regolamento UE 2016/679) e la normativa italiana sulla privacy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
