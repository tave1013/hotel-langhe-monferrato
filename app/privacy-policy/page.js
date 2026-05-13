import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Hotel Langhe & Monferrato',
  description: 'Informativa privacy ai sensi del GDPR per Hotel Langhe & Monferrato.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#FAF7F2', minHeight: '100vh', padding: '140px 0 80px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ color: '#1A1714', lineHeight: 1.8, fontSize: '1rem', fontFamily: 'Lato, sans-serif' }} className="space-y-6">
            
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid #C9A870', paddingBottom: '2rem' }}>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', color: '#960018', marginBottom: '0.5rem', fontWeight: 600 }}>
                HOTEL LANGHE &amp; MONFERRATO ★★★★
              </h1>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1A1714', marginBottom: '1rem', fontWeight: 500 }}>
                INFORMATIVA SUL TRATTAMENTO DEI DATI PERSONALI
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#960018', fontWeight: 600 }}>
                ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR)
              </p>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                Ultimo aggiornamento: 13 maggio 2026
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                1. Titolare del Trattamento
              </h2>
              <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(201, 168, 112, 0.1)' }}>
                      <th style={{ padding: '0.8rem', textAlign: 'left', borderBottom: '2px solid #C9A870', fontWeight: 600 }}>Dato</th>
                      <th style={{ padding: '0.8rem', textAlign: 'left', borderBottom: '2px solid #C9A870', fontWeight: 600 }}>Valore</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}><strong>Ragione sociale</strong></td>
                      <td style={{ padding: '0.8rem' }}>Italimpianti S.r.l.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}><strong>Brand / Nome commerciale</strong></td>
                      <td style={{ padding: '0.8rem' }}>Hotel Langhe &amp; Monferrato ★★★★</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}><strong>Sede legale (Italimpianti S.r.l.)</strong></td>
                      <td style={{ padding: '0.8rem' }}>Via del Lavoro 23, 14100 Asti (AT) – Italia</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}><strong>Sede operativa (Hotel)</strong></td>
                      <td style={{ padding: '0.8rem' }}>Via Contessa Di Castiglione 1, 14055 Costigliole d'Asti (AT) – Italia</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}><strong>Codice Fiscale / P.IVA</strong></td>
                      <td style={{ padding: '0.8rem' }}>00981490055</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}><strong>Telefono</strong></td>
                      <td style={{ padding: '0.8rem' }}>+39 0141 274010</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}><strong>E-mail</strong></td>
                      <td style={{ padding: '0.8rem' }}>prenota@hotellanghemonferrato.com</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}><strong>PEC</strong></td>
                      <td style={{ padding: '0.8rem' }}>italimpiantiat@legalmail.it</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.8rem' }}><strong>Responsabile Privacy interno</strong></td>
                      <td style={{ padding: '0.8rem' }}>Da nominare – contattare via e-mail o PEC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Italimpianti S.r.l. è la società titolare del trattamento che gestisce, tra le proprie attività, l'Hotel Langhe &amp; Monferrato, struttura alberghiera a quattro stelle con sede in Asti. Nel presente documento i termini "Titolare" e "Hotel" si riferiscono pertanto a Italimpianti S.r.l. nella sua veste di gestore della predetta struttura ricettiva e del relativo sito web.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                2. Consenso e Ricontatto da Parte dell'Hotel
              </h2>
              <p>
                Accettando la presente Informativa e, ove richiesto, prestando il proprio consenso, l'interessato autorizza espressamente Hotel Langhe &amp; Monferrato (Italimpianti S.r.l.) a ricontattarlo tramite i recapiti forniti (telefono, WhatsApp, e-mail) per finalità di marketing diretto, invio di offerte, promozioni, pacchetti speciali e comunicazioni commerciali relative ai servizi dell'Hotel. Il consenso è liberamente revocabile in qualsiasi momento, senza conseguenze, scrivendo ai recapiti indicati nell'art. 1.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                3. Tipologie di Dati Personali Trattati
              </h2>
              
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#960018', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 500 }}>
                3.1 Dati forniti direttamente dall'interessato
              </h3>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li>Nome, cognome, numero di telefono cellulare, indirizzo e-mail;</li>
                <li>Messaggi e contenuti trasmessi tramite WhatsApp Business o contatto telefonico;</li>
                <li>Preferenze di soggiorno, richieste speciali e manifestazioni di interesse ai servizi dell'Hotel.</li>
              </ul>

              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#960018', marginBottom: '0.8rem', fontWeight: 500 }}>
                3.2 Dati raccolti automaticamente tramite il sito web
              </h3>
              <ul style={{ marginLeft: '1.5rem' }}>
                <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, durata della sessione, URL di provenienza, data e ora di accesso – trattati anche tramite l'infrastruttura Vercel Inc.;</li>
                <li><strong>Dati comportamentali:</strong> movimenti del mouse, clic, scroll, registrazioni di sessione anonimizzate – raccolti tramite Microsoft Clarity;</li>
                <li><strong>Dati analitici aggregati:</strong> metriche di traffico, provenienza geografica, dispositivi – raccolti tramite Google Analytics 4;</li>
                <li><strong>Dati di retargeting:</strong> cookie ID, identificativi pubblicitari, hash anonimi di e-mail o telefono – trattati tramite Meta Pixel e Google Ads.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                4. Finalità e Basi Giuridiche del Trattamento
              </h2>
              <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(201, 168, 112, 0.1)' }}>
                      <th style={{ padding: '0.8rem', textAlign: 'left', borderBottom: '2px solid #C9A870', fontWeight: 600 }}>Finalità</th>
                      <th style={{ padding: '0.8rem', textAlign: 'left', borderBottom: '2px solid #C9A870', fontWeight: 600 }}>Strumenti</th>
                      <th style={{ padding: '0.8rem', textAlign: 'left', borderBottom: '2px solid #C9A870', fontWeight: 600 }}>Base giuridica (art. 6 GDPR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>A – Risposta a richieste e preventivi</td>
                      <td style={{ padding: '0.8rem' }}>WhatsApp, Zoho Mail, telefono</td>
                      <td style={{ padding: '0.8rem' }}>Art. 6.1.b) – misure precontrattuali</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>B – Ricontatto commerciale utenti interessati</td>
                      <td style={{ padding: '0.8rem' }}>WhatsApp, Zoho Mail, telefono</td>
                      <td style={{ padding: '0.8rem' }}>Art. 6.1.b) / 6.1.f) – legittimo interesse</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>C – Marketing: offerte, promozioni, pacchetti</td>
                      <td style={{ padding: '0.8rem' }}>WhatsApp, Zoho Mail, telefono</td>
                      <td style={{ padding: '0.8rem' }}>Art. 6.1.a) – consenso espresso</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>D – Retargeting Meta e Google</td>
                      <td style={{ padding: '0.8rem' }}>Meta Pixel, Google Ads</td>
                      <td style={{ padding: '0.8rem' }}>Art. 6.1.a) – consenso cookie banner</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>E – Analisi comportamento utenti</td>
                      <td style={{ padding: '0.8rem' }}>Google Analytics 4, Microsoft Clarity</td>
                      <td style={{ padding: '0.8rem' }}>Art. 6.1.a) – consenso cookie banner</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>F – Misurazione performance campagne</td>
                      <td style={{ padding: '0.8rem' }}>Google Ads, Meta Pixel</td>
                      <td style={{ padding: '0.8rem' }}>Art. 6.1.a) / 6.1.f)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>G – Comunicazioni transazionali</td>
                      <td style={{ padding: '0.8rem' }}>Zoho Mail</td>
                      <td style={{ padding: '0.8rem' }}>Art. 6.1.b) – esecuzione contrattuale</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>H – Prevenzione frodi</td>
                      <td style={{ padding: '0.8rem' }}>Log di sistema</td>
                      <td style={{ padding: '0.8rem' }}>Art. 6.1.f) – legittimo interesse</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.8rem' }}>I – Adempimenti legali, fiscali e contabili</td>
                      <td style={{ padding: '0.8rem' }}>–</td>
                      <td style={{ padding: '0.8rem' }}>Art. 6.1.c) – obbligo di legge</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ backgroundColor: 'rgba(201, 168, 112, 0.1)', padding: '1rem', borderLeft: '3px solid #C9A870', borderRadius: '3px' }}>
                Il consenso alle finalità C, D ed E è revocabile in qualsiasi momento. La revoca non pregiudica la liceità del trattamento effettuato anteriormente (art. 7, par. 3, GDPR).
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                5. Strumenti di Tracciamento e Fornitori Terzi
              </h2>
              
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: '#960018', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 500 }}>5.1 Meta Pixel (Facebook Pixel)</h3>
              <p>Il sito utilizza Meta Pixel, strumento di tracciamento fornito da Meta Platforms Ireland Ltd. (4 Grand Canal Square, Dublino 2, Irlanda). Consente di misurare le conversioni delle campagne pubblicitarie su Facebook e Instagram, creare audience personalizzate e attivare il retargeting verso utenti che hanno visitato il sito. I dati possono essere trasmessi su server negli USA con garanzie ai sensi del Data Privacy Framework EU-USA. Informativa: <a href="https://www.facebook.com/privacy/policy/" style={{ color: '#960018' }}>https://www.facebook.com/privacy/policy/</a></p>

              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: '#960018', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 500 }}>5.2 Google Analytics 4</h3>
              <p>Il sito utilizza Google Analytics 4, fornito da Google Ireland Ltd. (Gordon House, Barrow Street, Dublino 4, Irlanda). Raccoglie dati di navigazione in forma aggregata e pseudonimizzata per analizzare il comportamento degli utenti. Gli indirizzi IP sono anonimizzati prima della trasmissione. Opt-out: <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: '#960018' }}>https://tools.google.com/dlpage/gaoptout</a></p>

              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: '#960018', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 500 }}>5.3 Google Ads</h3>
              <p>Il Titolare utilizza Google Ads (Google Ireland Ltd.) per campagne pubblicitarie su rete di ricerca, display e remarketing. I dati possono transitare su server negli USA nell'ambito del Data Privacy Framework EU-USA.</p>

              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: '#960018', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 500 }}>5.4 Microsoft Clarity</h3>
              <p>Il sito utilizza Microsoft Clarity, fornito da Microsoft Ireland Operations Ltd. (One Microsoft Place, South County Business Park, Leopardstown, Dublino 18, Irlanda). Registra sessioni di navigazione anonimizzate per migliorare l'usabilità del sito. I dati sono conservati per 30 giorni. Informativa: <a href="https://privacy.microsoft.com/privacystatement" style={{ color: '#960018' }}>https://privacy.microsoft.com/privacystatement</a></p>

              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: '#960018', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 500 }}>5.5 Zoho Mail</h3>
              <p>Per le comunicazioni via e-mail il Titolare utilizza Zoho Mail, fornito da Zoho Corporation B.V. (Beneluxlaan 4B, 3527 HX Utrecht, Paesi Bassi), che agisce quale Responsabile del Trattamento. Informativa: <a href="https://www.zoho.com/privacy.html" style={{ color: '#960018' }}>https://www.zoho.com/privacy.html</a></p>

              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: '#960018', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 500 }}>5.6 Google reCAPTCHA</h3>
              <p>I moduli di contatto presenti sul sito utilizzano Google reCAPTCHA, servizio anti-spam fornito da Google Ireland Ltd. Il servizio raccoglie e analizza il comportamento dell'utente (indirizzo IP, movimenti del mouse, dati di sessione) al fine di distinguere le interazioni umane da quelle automatizzate. Informativa Google: <a href="https://policies.google.com/privacy" style={{ color: '#960018' }}>https://policies.google.com/privacy</a></p>
            </section>

            {/* Section 5-bis */}
            <section style={{ backgroundColor: 'rgba(201, 168, 112, 0.05)', padding: '1.5rem', borderRadius: '3px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#960018', marginBottom: '1rem', fontWeight: 600 }}>
                5-bis. Contitolarità con Meta Platforms Ireland Ltd.
              </h2>
              <p>
                Ai sensi della giurisprudenza della Corte di Giustizia dell'UE (sentenza C-40/17, Fashion ID, del 29 luglio 2019), l'utilizzo del Meta Pixel comporta una relazione di contitolarità del trattamento tra il Titolare e Meta Platforms Ireland Ltd.
              </p>
              <p>
                In qualità di contitolari, il Titolare e Meta hanno stipulato un accordo di contitolarità (Controller Addendum) ai sensi dell'art. 26 GDPR, disponibile all'indirizzo: <a href="https://www.facebook.com/legal/controller_addendum" style={{ color: '#960018' }}>https://www.facebook.com/legal/controller_addendum</a>
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                6. Infrastruttura di Hosting: Vercel Inc.
              </h2>
              <p>
                Il sito è ospitato su infrastruttura cloud fornita da Vercel Inc. (340 Pine Street, Suite 701, San Francisco, CA 94104, USA), Responsabile del Trattamento ex art. 28 GDPR. I dati di navigazione transitano attraverso i server Vercel. Il trasferimento verso gli USA avviene tramite Clausole Contrattuali Standard (SCC) e nel rispetto del Data Privacy Framework EU-USA. Informativa: <a href="https://vercel.com/legal/privacy-policy" style={{ color: '#960018' }}>https://vercel.com/legal/privacy-policy</a>
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                7. Trasferimento di Dati verso Paesi Extra-UE
              </h2>
              <p>
                Nella gestione del sito web, i dati personali degli utenti potrebbero essere trasferiti su server ubicati negli Stati Uniti d'America. Il trasferimento avviene nel rispetto della Decisione di Adeguatezza della Commissione Europea n. 2023/1795 del 10 luglio 2023, che ha istituito il Data Privacy Framework EU-USA (DPF).
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                8. Trattamento tramite WhatsApp Business
              </h2>
              <p>
                Il Titolare utilizza WhatsApp Business (Meta Platforms Ireland Ltd.) per ricevere richieste e inviare comunicazioni commerciali. L'invio di comunicazioni promozionali tramite WhatsApp richiede il preventivo consenso espresso dell'interessato. I messaggi transitano sui server di Meta. L'interessato può bloccare le comunicazioni in qualsiasi momento.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                9. Comunicazione e Destinatari dei Dati
              </h2>
              <p>I dati potranno essere comunicati, nei limiti strettamente necessari, alle seguenti categorie di destinatari:</p>
              <ul style={{ marginLeft: '1.5rem' }}>
                <li>Personale autorizzato di Italimpianti S.r.l. addetto alla gestione dell'Hotel;</li>
                <li>Fornitori IT e di hosting: Vercel Inc., Zoho Corporation, Microsoft, Google, Meta;</li>
                <li>Piattaforme advertising: Meta Platforms Ireland Ltd., Google Ireland Ltd.;</li>
                <li>Consulenti esterni (commercialisti, legali, revisori) nei limiti degli obblighi di legge;</li>
                <li>Autorità pubbliche e giudiziarie nei casi previsti dalla normativa vigente.</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                <strong>I dati non sono venduti né ceduti a terzi per finalità proprie di questi ultimi.</strong>
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                10. Periodo di Conservazione dei Dati
              </h2>
              <p>
                I dati personali sono conservati per il tempo strettamente necessario all'erogazione dei servizi richiesti e al perseguimento delle finalità per cui sono stati raccolti.
              </p>
              <div style={{ overflowX: 'auto', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(201, 168, 112, 0.1)' }}>
                      <th style={{ padding: '0.8rem', textAlign: 'left', borderBottom: '2px solid #C9A870', fontWeight: 600 }}>Finalità / Strumento</th>
                      <th style={{ padding: '0.8rem', textAlign: 'left', borderBottom: '2px solid #C9A870', fontWeight: 600 }}>Periodo di conservazione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>Contatti commerciali (finalità A, B)</td>
                      <td style={{ padding: '0.8rem' }}>24 mesi dall'ultimo contatto utile</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>Marketing e promozioni (finalità C)</td>
                      <td style={{ padding: '0.8rem' }}>Fino a revoca del consenso, max 24 mesi</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>Retargeting – Meta Pixel, Google Ads (D)</td>
                      <td style={{ padding: '0.8rem' }}>Durata campagna + max 12 mesi</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>Analytics – Google Analytics 4 (E)</td>
                      <td style={{ padding: '0.8rem' }}>26 mesi (conforme Linee Guida Garante)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>Microsoft Clarity – sessioni (E)</td>
                      <td style={{ padding: '0.8rem' }}>30 giorni</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>E-mail – Zoho Mail, comunicazioni transazionali (G)</td>
                      <td style={{ padding: '0.8rem' }}>5 anni dalla comunicazione</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.8rem' }}>Prevenzione frodi e log di sicurezza (H)</td>
                      <td style={{ padding: '0.8rem' }}>12 mesi, salvo necessità di conservazione per indagini</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.8rem' }}>Obblighi legali, fiscali e contabili (I)</td>
                      <td style={{ padding: '0.8rem' }}>10 anni (art. 2220 c.c. e D.P.R. 600/1973)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Scaduti i termini indicati, i dati vengono cancellati in modo sicuro o resi definitivamente anonimi e non ricollegabili all'interessato.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                11. Diritti dell'Interessato
              </h2>
              <p>
                Ai sensi degli artt. 15-22 GDPR, l'interessato può esercitare in qualsiasi momento i seguenti diritti scrivendo al Titolare ai recapiti indicati nell'art. 1:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
                <li><strong>Revocare il consenso (art. 7.3 GDPR):</strong> L'interessato può revocare in qualsiasi momento il consenso al trattamento dei propri dati.</li>
                <li><strong>Opporsi al trattamento (art. 21 GDPR):</strong> L'interessato può opporsi al trattamento dei propri dati adducendo motivi connessi alla propria situazione particolare.</li>
                <li><strong>Accedere ai propri dati (art. 15 GDPR):</strong> L'interessato ha diritto di ottenere conferma del trattamento e di accedere ai propri dati.</li>
                <li><strong>Rettificare i propri dati (art. 16 GDPR):</strong> L'interessato ha diritto di ottenere la rettifica dei dati inesatti.</li>
                <li><strong>Ottenere la limitazione del trattamento (art. 18 GDPR):</strong> L'interessato può richiedere che il trattamento sia limitato alla sola conservazione.</li>
                <li><strong>Diritto all'oblio (art. 17 GDPR):</strong> L'interessato ha diritto di ottenere la cancellazione dei propri dati personali.</li>
                <li><strong>Portabilità dei dati (art. 20 GDPR):</strong> L'interessato ha diritto di ricevere i propri dati in un formato strutturato.</li>
                <li><strong>Proporre reclamo:</strong> L'interessato ha diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" style={{ color: '#960018' }}>www.garanteprivacy.it</a>, tel. +39 06 69677 1).</li>
              </ul>
              <p style={{ marginTop: '1.5rem', backgroundColor: 'rgba(201, 168, 112, 0.1)', padding: '1rem', borderLeft: '3px solid #C9A870', borderRadius: '3px' }}>
                <strong>Il Titolare risponde alle richieste di esercizio dei diritti entro 30 giorni dal ricevimento.</strong>
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                12. Assenza di Decisioni Automatizzate e Profilazione
              </h2>
              <p>
                Il Titolare dichiara che nella gestione dei dati personali non vengono adottati processi decisionali basati unicamente sul trattamento automatizzato che producano effetti giuridici sull'interessato. Le attività di analisi comportamentale e di retargeting pubblicitario non determinano alcuna decisione automatizzata con effetti sulla sfera giuridica dell'interessato.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                13. Cookie e Tecnologie di Tracciamento
              </h2>
              <p>
                Il sito utilizza cookie tecnici (necessari al funzionamento) e cookie di profilazione/marketing (Meta Pixel, Google Analytics 4, Google Ads, Microsoft Clarity). I cookie non tecnici sono installati esclusivamente previo consenso espresso tramite cookie banner, conforme al Provvedimento del Garante n. 231 del 10 giugno 2021. Il consenso può essere revocato in qualsiasi momento tramite le impostazioni del banner o del browser.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                14. Misure di Sicurezza
              </h2>
              <p>
                Il Titolare adotta misure tecniche e organizzative adeguate ai sensi dell'art. 32 GDPR, tra cui: crittografia in transito (HTTPS/TLS), controllo degli accessi basato sul principio del need-to-know, backup periodici, monitoraggio delle vulnerabilità e piani di risposta agli incidenti.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                15. Tutela dei Minori
              </h2>
              <p>
                I servizi digitali del Titolare non sono destinati a soggetti di età inferiore a 16 anni. Qualora vengano rilevati dati di minori raccolti senza il consenso del titolare della responsabilità genitoriale, il Titolare provvederà alla loro immediata cancellazione.
              </p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#960018', marginBottom: '1.2rem', fontWeight: 600, borderBottom: '2px solid #C9A870', paddingBottom: '0.5rem' }}>
                16. Modifiche alla Presente Informativa
              </h2>
              <p>
                Il Titolare si riserva di aggiornare la presente Informativa in caso di variazioni normative o modifiche ai trattamenti effettuati. Le modifiche sostanziali saranno comunicate tramite avviso sul sito o via e-mail. La versione vigente è sempre consultabile sul sito ufficiale dell'Hotel.
              </p>
            </section>

            {/* Footer */}
            <div style={{ backgroundColor: 'rgba(201, 168, 112, 0.1)', padding: '2rem', borderRadius: '3px', marginTop: '3rem', textAlign: 'center', borderTop: '2px solid #C9A870' }}>
              <p style={{ fontSize: '0.9rem', color: '#1A1714', margin: 0 }}>
                Informativa redatta ai sensi del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 s.m.i.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#1A1714', marginTop: '1rem', margin: 0 }}>
                <strong>Italimpianti S.r.l. – Hotel Langhe &amp; Monferrato</strong><br />
                Via del Lavoro 23, 14100 Asti (AT)<br />
                13 maggio 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
