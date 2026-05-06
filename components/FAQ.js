'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quali sono gli orari di check-in e check-out?",
      answer: "Il check-in è disponibile dalle ore 15:00. Se arrivi prima, puoi lasciare i bagagli in hotel e goderti il territorio mentre la camera viene preparata. Il check-out è entro le ore 11:00. Se hai bisogno di flessibilità, contattaci prima del tuo arrivo: in base alla disponibilità, possiamo valutare un late check-out senza costi aggiuntivi."
    },
    {
      question: "È possibile portare animali domestici in hotel?",
      answer: "Sì, accettiamo animali domestici di piccola e media taglia con un supplemento di €15 al giorno. Ti chiediamo di segnalarlo al momento della prenotazione, così da organizzare al meglio l'accoglienza del tuo amico a quattro zampe. Alcune aree dell'hotel potrebbero avere restrizioni, per garantire il comfort e la tranquillità di tutti gli ospiti."
    },
    {
      question: "La colazione è inclusa nella tariffa?",
      answer: "Dipende dalla tariffa scelta al momento della prenotazione. Molti dei nostri pacchetti includono una ricca colazione a buffet. Per verificare cosa è incluso nella tua prenotazione, controlla i dettagli al momento della scelta della tariffa o contattaci direttamente."
    },
    {
      question: "C'è un ristorante o un bar in hotel?",
      answer: "All\'interno della struttura è disponibile la zona bar, dove serviamo una ricca colazione a buffet. Per pranzo e cena, il servizio di ristorazione è disponibile su richiesta o in convenzione con partner locali, con possibilità di degustare prodotti tipici del territorio. Il nostro staff è felice di consigliarti le migliori osterie e ristoranti delle Langhe e del Monferrato nelle vicinanze."
    },
    {
      question: "L'hotel dispone di sale meeting o spazi per eventi?",
      answer: "Sì, disponiamo di sale meeting attrezzate per ospitare riunioni di lavoro, eventi aziendali e occasioni speciali. Le nostre sale sono dotate di attrezzatura audiovisiva e possono essere configurate in base alle tue esigenze. Per informazioni sulla capienza, i servizi disponibili e i preventivi, contattaci direttamente: costruiremo insieme la soluzione più adatta al tuo evento."
    },
    {
      question: "C'è un parcheggio in hotel? È a pagamento?",
      answer: "Sì, l'hotel dispone di un ampio parcheggio esterno gratuito direttamente davanti alla struttura. Non è necessaria la prenotazione: il parcheggio è a disposizione di tutti gli ospiti per tutta la durata del soggiorno."
    },
    {
      question: "L'hotel ha una piscina?",
      answer: "La piscina non si trova all\'interno dell\'hotel ma è accessibile nel Parco della Contessa, all\'interno del nostro complesso turistico, aperta solo nella stagione estiva. È aperta anche al pubblico, ma gli ospiti dell\'Hotel Langhe & Monferrato possono accedervi gratuitamente. Per informazioni sugli orari, chiedi direttamente alla nostra reception al momento del check-in."
    },
    {
      question: "Come posso raggiungere l'hotel da Asti, Alba o Torino? C'è il trasporto pubblico?",
      answer: "L'Hotel Langhe & Monferrato si trova a Costigliole d'Asti, comodamente raggiungibile in auto: circa 15 minuti da Asti, 30 minuti da Alba e meno di un'ora da Torino. Ti consigliamo di viaggiare in auto per poter esplorare liberamente le colline del territorio. Se arrivi in treno, la stazione più vicina è quella di Asti, da cui puoi raggiungere Costigliole in taxi o con navetta privata. Contattaci e ti aiutiamo a organizzare il trasferimento."
    },
    {
      question: "È possibile avere una culla in camera?",
      answer: "Sì, l'hotel mette a disposizione culle per i più piccoli, completamente gratuite e fornite direttamente dalla struttura. La disponibilità è limitata, quindi ti consigliamo di farne richiesta già in fase di prenotazione così da poterla riservare con certezza. Faremo in modo che tutto sia pronto per il vostro arrivo."
    },
    {
      question: "Sono celiaco: è possibile avere prodotti senza glutine a colazione?",
      answer: "Assolutamente sì. Il nostro buffet della colazione è attrezzato per accogliere ospiti con esigenze alimentari specifiche, inclusa la celiachia, con una selezione di prodotti certificati senza glutine. Per permetterci di organizzare al meglio il tuo soggiorno e garantirti un'esperienza su misura, ti chiediamo di indicarlo al momento della prenotazione. Siamo sempre disponibili a trovare soluzioni personalizzate per qualsiasi altra necessità o intolleranza alimentare."
    },
    {
      question: "Ci sono orari di ingresso da rispettare se torniamo tardi da una passeggiata o da una serata fuori?",
      answer: "No, nessun vincolo di orario. A ogni ospite viene consegnato un codice personale di accesso che permette di entrare nella struttura in piena autonomia e a qualsiasi ora, senza dover dipendere dalla reception. In questo modo potrete vivere il vostro soggiorno con la massima libertà. Naturalmente, se aveste bisogno di assistenza o supporto in qualsiasi momento, siamo sempre a vostra disposizione anche tramite chat presente sul sito."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ background: '#FAF7F2', padding: '0px 0 100px' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">FAQ</p>
          <div className="gold-divider mb-5"></div>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, color: '#2C2520' }}
          >
            Domande Frequenti
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52' }}
          >
            Tutto quello che devi sapere per organizzare al meglio il tuo soggiorno.
            Se hai altre domande, non esitare a contattarci.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border-none overflow-hidden"
              style={{ 
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                border: openIndex === index ? '2px solid #C9A870' : '2px solid transparent'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                style={{ background: openIndex === index ? 'rgba(201, 168, 112, 0.05)' : 'white' }}
              >
                <span
                  className="text-lg font-semibold pr-4"
                  style={{ 
                    fontFamily: 'Lato, sans-serif', 
                    color: openIndex === index ? '#C9A870' : '#2C2520'
                  }}
                >
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 flex-shrink-0"
                  style={{ color: openIndex === index ? '#C9A870' : '#6B5E52' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p
                        className="leading-relaxed"
                        style={{ fontFamily: 'Lato, sans-serif', color: '#6B5E52', fontSize: '0.95rem' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
