// ================================================================
// lib/territorioData.js
// Mini guide del territorio — modifica testi, foto e link interni
// ================================================================

export const guide = [
  {
    slug: 'asti',
    nome: 'Asti',
    sottotitolo: 'Guida Completa alla Città dei Grandi Vini',
    categoria: 'Città d\'Arte',
    categoryIcon: 'fa-landmark',
    distanzaDallHotel: '8 km dall\'hotel',
    tempoVisita: 'Mezza giornata o giornata intera',
    img: '/foto/asti.webp',
    heroImg: '/foto/asti.webp',
    tagline: 'Cosa vedere ad Asti, dove mangiare, le migliori cantine e quando visitarla: guida completa alla città del Palio più antico d\'Italia.',
    descrizioneBreve: 'Asti è una delle città più ricche e stratificate del Piemonte. Fondata dai Romani, trasformata in potente comune medievale, è oggi una città viva dove la tradizione del Palio e dei grandi vini DOCG si intreccia con una scena gastronomica autentica e radicata. Da Costigliole d\'Asti si raggiunge in meno di 10 minuti.',
    sezioni: [
      {
        titolo: 'Un po\' di storia: da Hasta Pompeia al Palio',
        testo: `Asti fu fondata dai Romani tra il II e il I secolo avanti Cristo con il nome di Hasta Pompeia, probabilmente in onore del console Gneo Pompeo Strabone. Dell'Asti romana restano tracce concrete: la Domus Romana con mosaici pavimentali originali, la Cripta di Sant'Anastasio e la Torre Rossa, il monumento più antico della città con origini romane.

Nel Medioevo Asti divenne uno dei comuni più potenti del Piemonte. Le famiglie nobili costruirono oltre cento torri come simboli di potere: oggi ne sopravvivono una ventina nel centro storico. Il Palio di Asti, documentato dal 1275, è più antico nei documenti scritti del celebre Palio di Siena. Vittorio Alfieri, uno dei drammaturghi italiani più importanti del Settecento, nacque ad Asti nel 1749.`,
        lista: [
          'Origini romane e fondazione di Hasta Pompeia',
          'Boom medievale: la città delle cento torri',
          'Il Palio di Asti: 750 anni di tradizione ininterrotta',
          'Vittorio Alfieri: drammaturgo e intellettuale europeo',
        ],
        links: [
          { label: 'Torre Rossa — Google Maps', href: 'https://maps.google.com/?q=Torre+Rossa+Asti' },
          { label: 'Palazzo Alfieri e Museo Alfieriano — Google Maps', href: 'https://maps.google.com/?q=Palazzo+Alfieri+Asti' },
        ],
        tags: ['Storia di Asti', 'Hasta Pompeia', 'Palio medievale'],
      },
      {
        titolo: 'Cosa vedere ad Asti: 10 luoghi da non perdere',
        img: '/foto/asti-monumenti.webp',
        testo: `Il centro storico di Asti è compatto e visitabile a piedi in poche ore. Se stai cercando cosa fare ad Asti in una giornata, parti da Piazza Alfieri e percorri Corso Vittorio Alfieri tra portici, torri medievali e palazzi nobiliari. Per visitare i musei conviene acquistare lo Smart Ticket (10 euro, dà accesso a 7 siti).

Se soggiorni da noi, puoi visitare Asti con calma e tornare in hotel senza fretta.`,
        dettagli: [
          {
            titolo: 'Cattedrale di Santa Maria Assunta',
            testo: 'La più grande cattedrale del Piemonte: oltre 80 metri di lunghezza, realizzata in mattoni rossi e pietra arenaria. Costruita tra l\'XI e il XIV secolo, è un esempio straordinario del gotico lombardo piemontese con affreschi trecenteschi, polittico di Gandolfino da Roreto e coro ligneo intagliato del XV secolo.',
            href: 'https://maps.google.com/?q=Cattedrale+Santa+Maria+Assunta+Asti',
            linkLabel: 'Cattedrale di Santa Maria Assunta — Google Maps',
          },
          {
            titolo: 'Torre Troyana (Torre dell\'Orologio)',
            testo: 'Il simbolo più riconoscibile di Asti: 44 metri di altezza, 199 gradini per una vista a 360° sul centro storico, le colline del Monferrato e l\'arco alpino. Eretta nel XIII secolo dalla famiglia dei Troya, oggi ospita la campana del 1531, una delle più antiche del Piemonte ancora funzionanti.',
            href: 'https://maps.google.com/?q=Torre+Troyana+Asti',
            linkLabel: 'Torre Troyana — Google Maps',
          },
          {
            titolo: 'Collegiata di San Secondo',
            testo: 'Una delle chiese gotiche più antiche della città, dedicata al patrono di Asti. Costruita dalla metà del 1200 fino al 1462, sorge nel luogo dove San Secondo subì il martirio nel II secolo. Conserva la cripta del VI-VII secolo con reliquiario in argento del 1500.',
            href: 'https://maps.google.com/?q=Collegiata+San+Secondo+Asti',
            linkLabel: 'Collegiata di San Secondo — Google Maps',
          },
          {
            titolo: 'Torre Rossa',
            testo: 'Il monumento più antico di Asti: la sua forma circolare a 16 lati risale al I secolo dopo Cristo, quando era parte della porta romana di ingresso alla città. Il nome deriva dal colore caldo dei mattoni romani originari. Un frammento di Roma imperiale sopravvissuto intatto per duemila anni.',
            href: 'https://maps.google.com/?q=Torre+Rossa+Asti',
            linkLabel: 'Torre Rossa — Google Maps',
          },
          {
            titolo: 'Palazzo Alfieri e Museo Alfieriano',
            testo: 'Il palazzo barocco dove nacque nel 1749 il drammaturgo Vittorio Alfieri. Oggi ospita il museo con manoscritti, edizioni rare delle sue tragedie, oggetti personali e documenti che raccontano il percorso di un intellettuale europeo di straordinaria modernità.',
            href: 'https://maps.google.com/?q=Palazzo+Alfieri+Asti',
            linkLabel: 'Palazzo Alfieri — Google Maps',
          },
          {
            titolo: 'Palazzo Mazzetti e Museo Civico',
            testo: 'Il principale museo civico di Asti, ospitato in uno dei migliori esempi di architettura barocca della città. All\'interno: ambienti affrescati, collezione civica d\'arte con dipinti di scuola piemontese, reperti archeologici. Punto vendita dello Smart Ticket per i musei cittadini.',
            href: 'https://maps.google.com/?q=Palazzo+Mazzetti+Asti',
            linkLabel: 'Palazzo Mazzetti — Google Maps',
          },
          {
            titolo: 'Cripta di Sant\'Anastasio e Domus Romana',
            testo: 'Per capire la stratificazione storica di Asti: la Cripta è una chiesa romanica parzialmente ipogea con colonne e capitelli medievali. La Domus Romana mostra i resti di un\'abitazione patrizia di età imperiale con mosaici pavimentali originali ancora in situ.',
            href: 'https://maps.google.com/?q=Cripta+Sant+Anastasio+Asti',
            linkLabel: 'Cripta di Sant\'Anastasio — Google Maps',
          },
          {
            titolo: 'Complesso di San Pietro in Consavia',
            testo: 'Uno dei luoghi meno conosciuti ma più affascinanti di Asti. Costruito nel XII secolo, comprende una chiesa rotonda edificata ad imitazione del Santo Sepolcro di Gerusalemme (forma rarissima in Piemonte), la cappella Valperga e il chiostro quattrocentesco.',
            href: 'https://maps.google.com/?q=Complesso+San+Pietro+Consavia+Asti',
            linkLabel: 'Complesso di San Pietro in Consavia — Google Maps',
          },
          {
            titolo: 'Piazza Alfieri',
            testo: 'La piazza principale di Asti, con portici settecenteschi e fontana centrale. È il salotto della città in ogni stagione: mercato settimanale, eventi, aperitivi. Ogni settembre diventa l\'arena del Palio storico, con una trasformazione totale in ippodromo a cielo aperto.',
            href: 'https://maps.google.com/?q=Piazza+Alfieri+Asti',
            linkLabel: 'Piazza Alfieri — Google Maps',
          },
          {
            titolo: 'Corso Vittorio Alfieri',
            testo: 'La spina dorsale del centro storico: un asse pedonale che attraversa la città da Torre Rossa fino a Torre Troyana. Poco più di un chilometro che racchiude mille anni di storia urbana, palazzi nobiliari del Seicento e Settecento, torri in mattoni rossi, bar storici e il luogo dove Asti passeggia ogni pomeriggio.',
            href: 'https://maps.google.com/?q=Corso+Vittorio+Alfieri+Asti',
            linkLabel: 'Corso Vittorio Alfieri — Google Maps',
          },
        ],
        tags: ['Cosa vedere ad Asti', 'Centro storico Asti', 'Torri medievali'],
      },
      {
        titolo: 'I vini di Asti: 700 anni di storia enologica',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80&fit=crop',
        testo: `Asti è sinonimo di vino in tutto il mondo. Nel 1865 Carlo Gancia creò a Canelli il primo spumante italiano, applicando le tecniche apprese in Champagne all'uva Moscato locale. Nel XX secolo Federico Martinotti perfezionò il Metodo Martinotti (o Charmat) per la spumantizzazione rapida. Nel 2014 il paesaggio vitivinicolo delle Langhe, Roero e Monferrato fu riconosciuto Patrimonio UNESCO.

Oggi l'Astigiano produce alcuni dei vini DOCG più celebri d'Italia: Barbera d'Asti, Asti Spumante, Moscato d'Asti, Grignolino d'Asti, Ruché di Castagnole Monferrato. Per una vacanza enogastronomica completa, soggiorna da noi e organizzeremo tour e degustazioni su misura.`,
        lista: [
          'Barbera d\'Asti DOCG: il vino dell\'anima astigiana',
          'Asti Spumante DOCG: lo spumante dolce più esportato al mondo',
          'Moscato d\'Asti DOCG: aromatico, delicato, 5,5° di alcol',
          'Grignolino d\'Asti DOC: eleganza discreta e tannini fini',
          'Ruché di Castagnole Monferrato DOCG: il vino più raro del Piemonte',
        ],
        tags: ['Vini di Asti', 'Barbera DOCG', 'Moscato DOCG'],
      },
      {
        titolo: 'Cantine da visitare nei dintorni di Asti',
        img: '/foto/coppo-cantine-canelli-piemonte.webp',
        testo: `Le cantine dell'Astigiano offrono esperienze autentiche tra vigneti, castelli e cantine storiche. Quasi tutte richiedono prenotazione con qualche giorno di anticipo. Molte propongono anche pranzo o merenda in cantina.

Se vuoi costruire un itinerario vino tra Asti, Canelli e Monferrato, possiamo aiutarti con prenotazioni e transfer dal nostro hotel.`,
        dettagli: [
          {
            titolo: 'Tenuta Montemagno',
            testo: 'Tenuta storica immersa nelle colline del Monferrato, con il castello medievale di Montemagno che domina la vigna. Offre degustazioni guidate, ospitalità nel relais e vista panoramica straordinaria. Produce Barbera d\'Asti, Grignolino e Moscato.',
            href: 'https://maps.google.com/?q=Tenuta+Montemagno+Asti',
            linkLabel: 'Tenuta Montemagno — Google Maps',
          },
          {
            titolo: 'Cantine Coppo — Canelli',
            testo: 'Storica cantina di Canelli attiva dal 1892. Famosa per la Barbera Camp du Rouss e per il Moscato d\'Asti. Le cantine storiche sotterranee di Canelli (Patrimonio UNESCO) sono in parte visitabili: un\'esperienza doppia tra vino e architettura ipogea.',
            href: 'https://maps.google.com/?q=Cantine+Coppo+Canelli',
            linkLabel: 'Cantine Coppo — Google Maps',
          },
          {
            titolo: 'Gancia — Canelli',
            testo: 'La cantina dove nel 1865 Carlo Gancia creò il primo spumante italiano. Un luogo di storia enologica assoluta. Le cantine storiche ipogee di Gancia fanno parte del sistema delle Cattedrali Sotterranee di Canelli, Patrimonio UNESCO dal 2014.',
            href: 'https://maps.google.com/?q=Gancia+Canelli',
            linkLabel: 'Gancia — Google Maps',
          },
        ],
        tags: ['Cantine Asti', 'Wine tour Monferrato', 'Degustazioni Barbera'],
      },
      {
        titolo: 'Dove mangiare ad Asti: ristoranti consigliati',
        testo: `La cucina astigiana è robusta, schietta e legata al territorio. Prenotare in anticipo è fondamentale nei fine settimana e durante il Palio.

Se vuoi un weekend gastronomico tra Asti e dintorni, soggiorna da noi e alterna ristoranti stellati, osterie storiche e degustazioni in cantina.`,
        dettagli: [
          {
            titolo: 'Trattoria Astigiana',
            testo: 'Storica insegna nel panorama gastronomico piemontese. Agnolotti del plin, bolliti misti, tajarin al ragù, bonet e torta di nocciole. Menu degustazione tra i 40 e i 50 euro, con cantina che valorizza i vini dell\'Astigiano e delle Langhe.',
            href: 'https://maps.google.com/?q=Trattoria+Astigiana+Asti',
            linkLabel: 'Trattoria Astigiana — Google Maps',
          },
          {
            titolo: 'Osteria del Palio',
            testo: 'A pochi passi da Piazza Alfieri. Ambiente che richiama le vecchie osterie di campagna, cucina che valorizza le materie prime del territorio: tajarin, brasato al Barbera, formaggi delle colline, dolci della tradizione. Ottima carta dei vini locali.',
            href: 'https://maps.google.com/?q=Osteria+del+Palio+Asti',
            linkLabel: 'Osteria del Palio — Google Maps',
          },
          {
            titolo: 'Tacabanda',
            testo: 'Il ristorante che ha conquistato Asti. A lavorare qui sono ragazzi e ragazze con disabilità, in un progetto dove la cucina si unisce all\'etica. Cucina stagionale e filiera corta: carne di Fassona, tajarin al burro e tartufo, salame cotto di coniglio con salsa tonnata.',
            href: 'https://maps.google.com/?q=Tacabanda+Asti',
            linkLabel: 'Tacabanda — Google Maps',
          },
        ],
        tags: ['Dove mangiare Asti', 'Ristoranti Asti', 'Cucina piemontese'],
      },
      {
        titolo: 'Cosa mangiare ad Asti: piatti tipici',
        img: '/foto/brasato.webp',
        testo: `La cucina astigiana ha una tradizione gastronomica profonda e riconoscibile. Se stai pianificando un itinerario food ad Asti, questi sono i sapori imprescindibili.`,
        lista: [
          'Agnolotti del plin: pasta fresca ripiena, pizzicata a mano',
          'Tajarin ai 40 tuorli: tagliolini finissimi di pasta all\'uovo',
          'Brasato al Barbera: carne di Fassona brasata per ore nel vino',
          'Carne cruda battuta al coltello: filetto tritato a coltello',
          'Bonet: budino al cioccolato e amaretti',
          'Torta di nocciole Tonda Gentile del Piemonte IGP',
          'Merenda sinoira: aperitivo piemontese abbondante',
        ],
        tags: ['Piatti tipici Asti', 'Cucina Monferrato', 'Enogastronomia Piemonte'],
      },
      {
        titolo: 'Come arrivare ad Asti da Costigliole d\'Asti',
        testo: `Asti dista solo 8 km da Costigliole d'Asti: in auto il tragitto medio è di circa 10 minuti. Il centro storico ha zone ZTL: conviene parcheggiare nelle aree limitrofe (Piazza Alfieri, parcheggi gratuiti) e proseguire a piedi.

Per un weekend nel Monferrato senza fretta, soggiorna da noi e visita Asti, Alba, Canelli e Nizza Monferrato in tappe giornaliere comode.`,
        lista: [
          'In auto: SP456 direzione Asti, circa 10 minuti',
          'In treno: linea ferroviaria con collegamento rapido',
          'In bici: percorso pianeggiante lungo il Tanaro, circa 35 minuti',
        ],
        links: [
          { label: 'Percorso Costigliole d\'Asti → Asti — Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Asti' },
        ],
        tags: ['Come arrivare ad Asti', 'Parcheggi Asti', 'Weekend Monferrato'],
      },
      {
        titolo: 'Quando visitare Asti: stagioni e consigli',
        testo: `Asti è perfetta tutto l'anno. L'autunno è la stagione regina: vendemmia, Palio, Douja d'Or e colori delle vigne. Ma anche primavera (meno affollata), estate (aperitivi nei portici) e inverno (atmosfera raccolta) hanno il loro fascino.

Se vuoi vivere il Palio, prenota il soggiorno con largo anticipo: la terza domenica di settembre è l'evento più atteso dell'anno.`,
        lista: [
          'Primavera: clima mite, poca folla, ritmo rilassato',
          'Estate: Corso Alfieri all\'ombra, aperitivi in piazza, eventi culturali',
          'Autunno: Palio, Douja d\'Or, vendemmia, colori straordinari',
          'Inverno: atmosfera silenziosa, mercatini natalizi, cantine aperte',
          'Smart Ticket 10€ per 7 musei: conviene se ne visiti almeno tre',
        ],
        tags: ['Quando andare ad Asti', 'Palio di Asti', 'Consigli viaggio Asti'],
      },
    ],
    infoPratiche: {
      come: 'Dall\'hotel ad Asti: circa 10 minuti in auto (8 km). Centro storico visitabile a piedi.',
      periodo: 'Tutto l\'anno. Alta stagione: settembre (Palio), fine agosto (Douja d\'Or).',
      cosaDPortare: 'Scarpe comode, Smart Ticket se visiti musei, prenotazioni ristoranti/cantine.',
      ingressiPaganti: 'Smart Ticket 10€ per 7 siti museali. Torre Troyana inclusa.',
    },
    linkInterni: [
      { label: 'Prenota il tuo soggiorno nel Monferrato', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contattaci per itinerario Asti + cantine', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Scopri le nostre offerte food & wine', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: null,
    next: 'alba',
  },

  {
    slug: 'alba',
    nome: 'Alba',
    sottotitolo: 'Guida Completa alla Città delle Cento Torri',
    categoria: 'Città Gourmet',
    categoryIcon: 'fa-utensils',
    distanzaDallHotel: '15 km dall\'hotel',
    tempoVisita: 'Una giornata intera',
    img: '/foto/alba-italia.webp',
    heroImg: '/foto/alba-italia.webp',
    tagline: 'Cosa vedere ad Alba, dove mangiare, quali cantine visitare e quando andare: una guida pratica e completa per vivere il cuore delle Langhe.',
    descrizioneBreve: 'Alba è la capitale delle Langhe, una delle migliori destinazioni enogastronomiche in Piemonte. In questa guida trovi storia, tappe imperdibili nel centro storico, cantine vicino ad Alba, ristoranti consigliati, vini del territorio, consigli pratici e link Google Maps pronti da aprire. Se vuoi viverla con calma, il nostro hotel è la base ideale per un soggiorno tra Alba, Barolo e Monferrato.',
    sezioni: [
      {
        titolo: 'Un po\' di storia: da Alba Pompeia alla città UNESCO',
        testo: `Le origini di Alba risalgono al Neolitico, ma con i Romani diventa Alba Pompeia, centro strategico tra vie commerciali e traffici del Piemonte antico. Nel sottosuolo del centro storico sono ancora visibili foro, teatro e resti dell\'antica città romana con il percorso di Alba Sotterranea.

Nel Medioevo Alba diventa la "Città delle Cento Torri", simbolo di potere delle famiglie nobiliari. Nel Novecento la città vive un capitolo decisivo con la Resistenza partigiana raccontata da Beppe Fenoglio. Oggi Alba è anche città simbolo dell\'enogastronomia italiana: UNESCO per i paesaggi vitivinicoli (2014) e Città Creativa UNESCO per la Gastronomia (2017).`,
        lista: [
          'Origini preistoriche e fondazione romana di Alba Pompeia',
          'Torri medievali e sviluppo commerciale tra Langhe e Liguria',
          'Resistenza del 1944 e identità culturale della città',
          'Riconoscimenti UNESCO che valorizzano vino e territorio',
        ],
        links: [
          { label: 'Alba Sotterranea — Google Maps', href: 'https://maps.google.com/?q=Alba+Sotterranea+Alba' },
          { label: 'Museo Civico Federico Eusebio — Google Maps', href: 'https://maps.google.com/?q=Museo+Federico+Eusebio+Alba' },
        ],
        tags: ['Storia di Alba', 'Alba Pompeia', 'UNESCO'],
      },
      {
        titolo: 'Cosa vedere ad Alba: 10 tappe nel centro storico',
        img: '/foto/alba-italia.webp',
        testo: `Se stai cercando cosa fare ad Alba in un giorno, parti da Piazza Risorgimento e percorri Via Maestra tra portici, botteghe e caffè storici. Il centro è compatto e si visita facilmente a piedi.

Tra i punti più belli: Cattedrale di San Lorenzo, torri medievali, Loggia dei Mercanti, Chiesa di San Domenico, Casa Fenoglio, Teatro Sociale e Piazza Michele Ferrero. Se vuoi visitare Alba senza fretta, prenota almeno una notte: la sera il centro è ancora più suggestivo.`,
        lista: [
          'Piazza Risorgimento e Duomo di San Lorenzo',
          'Via Vittorio Emanuele II (Via Maestra)',
          'Torri medievali, Loggia dei Mercanti e Chiesa di San Domenico',
          'Casa Museo Beppe Fenoglio e Teatro Sociale Giorgio Busca',
          'Piazza Michele Ferrero e Fontana di Alba',
        ],
        links: [
          { label: 'Piazza Risorgimento — Google Maps', href: 'https://maps.google.com/?q=Piazza+Risorgimento+Alba+Cuneo' },
          { label: 'Cattedrale di San Lorenzo — Google Maps', href: 'https://maps.google.com/?q=Cattedrale+San+Lorenzo+Alba+Cuneo' },
          { label: 'Via Vittorio Emanuele (Via Maestra) — Google Maps', href: 'https://maps.google.com/?q=Via+Vittorio+Emanuele+Alba+Cuneo' },
          { label: 'Chiesa di San Domenico — Google Maps', href: 'https://maps.google.com/?q=Chiesa+San+Domenico+Alba+Cuneo' },
        ],
        tags: ['Cosa vedere ad Alba', 'Centro storico Alba', 'Weekend Alba'],
      },
      {
        titolo: 'Cantine da visitare nei dintorni di Alba',
        testo: `Le cantine vicino ad Alba sono tra le più richieste d\'Italia: alternano grandi nomi internazionali e piccole realtà familiari. Quasi tutte lavorano su prenotazione, soprattutto nei weekend e in autunno.

Per un\'esperienza completa consigliamo degustazione guidata + pranzo in cantina. Se soggiorni da noi, possiamo aiutarti a costruire un itinerario vino tra Alba, Barolo, Barbaresco e Serralunga ottimizzando tempi e spostamenti.`,
        dettagli: [
          {
            titolo: 'Ceretto — Monsordo Bernardina (Alba)',
            testo: 'Famiglia storica del vino nelle Langhe: l\'attività nasce negli anni Trenta e si consolida con la seconda generazione, che porta il marchio Ceretto a una notorietà internazionale. Oggi la tenuta di Monsordo Bernardina è uno dei riferimenti per visite e degustazioni in zona Alba, con forte attenzione anche alla cultura gastronomica locale.',
            href: 'https://maps.google.com/?q=Cantina+Ceretto+Monsordo+Bernardina+Alba',
            linkLabel: 'Ceretto Monsordo Bernardina — Google Maps',
          },
          {
            titolo: 'Fontanafredda — Serralunga d\'Alba',
            testo: 'Fondata nel 1878 da Emanuele Alberto di Mirafiore, è tra le aziende più note del territorio del Barolo. Il complesso conserva l\'impianto storico del borgo, con cantine, edifici rurali e percorsi guidati: una tappa utile per capire la storia produttiva del Barolo e l\'evoluzione dell\'enologia langarola.',
            href: 'https://maps.google.com/?q=Cantina+Fontanafredda+Serralunga+d%27Alba',
            linkLabel: 'Fontanafredda — Google Maps',
          },
          {
            titolo: 'Castello di Grinzane Cavour — Enoteca Regionale',
            testo: 'Il castello, legato alla figura di Camillo Benso Conte di Cavour, ospita l\'Enoteca Regionale Piemontese Cavour con ampia selezione di etichette del territorio. È una visita consigliata per unire storia, panorama sulle Langhe UNESCO e introduzione ai vini di Barolo e Barbaresco in un unico luogo.',
            href: 'https://maps.google.com/?q=Castello+Grinzane+Cavour',
            linkLabel: 'Castello di Grinzane Cavour — Google Maps',
          },
        ],
        tags: ['Cantine Alba', 'Wine tour Langhe', 'Degustazioni Barolo'],
      },
      {
        titolo: 'Il vino di Alba: Barolo, Barbaresco e grandi DOC',
        testo: `Capire Alba significa capire il vino delle Langhe. Il Nebbiolo è il vitigno simbolo, da cui nascono Barolo DOCG e Barbaresco DOCG: vini longevi, complessi, tra i più prestigiosi al mondo.

Accanto ai grandi rossi trovi Dolcetto d\'Alba DOC, Barbera d\'Alba DOC e Moscato d\'Asti DOCG. Una degustazione con sommelier locale è il modo più rapido per distinguere cru, annate e stili. Per il tuo soggiorno enogastronomico ad Alba, chiedici un percorso su misura.`,
        lista: [
          'Barolo DOCG: struttura potente e lunghissimo invecchiamento',
          'Barbaresco DOCG: più fine ed elegante, grande armonia',
          'Dolcetto d\'Alba DOC: il vino quotidiano della tradizione',
          'Barbera d\'Alba DOC: fresco, versatile, perfetto a tavola',
          'Moscato d\'Asti DOCG: aromatico, leggero e identitario',
        ],
        tags: ['Vini di Alba', 'Barolo DOCG', 'Barbaresco DOCG'],
      },
      {
        titolo: 'Dove mangiare ad Alba: ristoranti consigliati',
        testo: `La ristorazione ad Alba copre tutte le esigenze: alta cucina stellata, osterie storiche, piola tradizionale e wine bar informali. Prenotare in anticipo è fondamentale nei fine settimana e durante la Fiera del Tartufo.

Se vuoi una vacanza food & wine nelle Langhe, puoi soggiornare da noi e alternare cene gourmet, trattorie tipiche e degustazioni in cantina senza stress organizzativo.`,
        dettagli: [
          {
            titolo: 'Piazza Duomo — Alta cucina ad Alba',
            testo: 'Ristorante guidato dallo chef Enrico Crippa e riconosciuto con 3 stelle Michelin. È uno degli indirizzi più importanti della ristorazione italiana contemporanea, con cucina fortemente legata a stagionalità e ingredienti del territorio.',
            href: 'https://maps.google.com/?q=Ristorante+Piazza+Duomo+Alba',
            linkLabel: 'Piazza Duomo — Google Maps',
          },
          {
            titolo: 'La Piola — Tradizione piemontese centrale',
            testo: 'In pieno centro ad Alba, è il locale più informale della stessa proprietà di Piazza Duomo. Propone classici della cucina piemontese (tajarin, plin, vitello tonnato) con approccio curato ma accessibile: ottima scelta per una cena tipica senza formalità.',
            href: 'https://maps.google.com/?q=La+Piola+Alba+Piemonte',
            linkLabel: 'La Piola — Google Maps',
          },
          {
            titolo: 'Osteria dell\'Arco — Cucina del territorio',
            testo: 'Attiva dal 1986, è un nome storico per chi cerca cucina piemontese tradizionale ad Alba. È nota per la selezione di vini e per piatti legati alla cultura gastronomica locale, con attenzione alla stagionalità e ai prodotti di filiera corta.',
            href: 'https://maps.google.com/?q=Osteria+dell%27Arco+Alba',
            linkLabel: 'Osteria dell\'Arco — Google Maps',
          },
        ],
        tags: ['Dove mangiare Alba', 'Ristoranti Alba', 'Cucina piemontese'],
      },
      {
        titolo: 'Cosa mangiare ad Alba: piatti tipici da provare',
        testo: `La cucina albese è uno dei motivi principali per visitare la città. Se stai pianificando un itinerario gastronomico ad Alba, questi sono i sapori imprescindibili.

Il consiglio migliore: prova almeno un menu degustazione e una cena in osteria tradizionale, così vivi sia la cucina d\'autore sia la tradizione locale.`,
        lista: [
          'Tajarin al burro e salvia',
          'Ravioli del plin',
          'Carne cruda all\'albese',
          'Vitello tonnato',
          'Brasato al Barolo',
          'Bonet e dolci alla nocciola piemontese IGP',
        ],
        tags: ['Piatti tipici Alba', 'Cucina delle Langhe', 'Enogastronomia Piemonte'],
      },
      {
        titolo: 'Come arrivare ad Alba da Costigliole d\'Asti',
        testo: `Alba dista circa 20 km da Costigliole d\'Asti: in auto il tragitto medio è di circa 22 minuti. Il centro ha zone ZTL, quindi conviene parcheggiare nella cerchia esterna e proseguire a piedi.

Per un weekend nelle Langhe senza fretta, la soluzione più comoda è soggiornare in zona e visitare Alba insieme a Barbaresco, Neive e Canelli in tappe giornaliere.`,
        lista: [
          'In auto: SP456 in direzione sud, circa 22 minuti',
          'In bici: percorso collinare panoramico con dislivello moderato',
          'In treno: passaggio da Asti e arrivo alla stazione di Alba',
        ],
        links: [
          { label: 'Percorso Costigliole d\'Asti → Alba — Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Alba+Cuneo' },
        ],
        tags: ['Come arrivare ad Alba', 'Parcheggi Alba', 'Weekend Langhe'],
      },
      {
        titolo: 'Quando visitare Alba: stagioni e consigli utili',
        testo: `Alba è una destinazione perfetta tutto l\'anno: primavera per passeggiate tra vigne e borghi, estate per aperitivi e piazze vive, autunno per tartufo e foliage, inverno per esperienze gourmet più intime.

Ottobre e novembre sono i mesi più richiesti: se vuoi trovare disponibilità migliore e vivere la città con calma, conviene prenotare il soggiorno con largo anticipo.`,
        lista: [
          'Primavera: clima ideale, meno affollamento, ritmo rilassato',
          'Estate: eventi serali, enoteche e dehors',
          'Autunno: Fiera del Tartufo Bianco e colori spettacolari',
          'Inverno: atmosfera raccolta e grandi rossi da degustare',
          'Consiglio pratico: scarpe comode e prenotazioni anticipate',
        ],
        tags: ['Quando andare ad Alba', 'Fiera del Tartufo', 'Consigli viaggio Alba'],
      },
    ],
    infoPratiche: {
      come: 'Dall\'hotel ad Alba: circa 15 minuti in auto. Da Costigliole d\'Asti: circa 22 minuti. Centro storico visitabile a piedi.',
      periodo: 'Tutto l\'anno. Alta stagione: ottobre-novembre (Fiera del Tartufo Bianco).',
      cosaDPortare: 'Scarpe comode, prenotazioni ristoranti/cantine, giacca leggera in primavera-autunno.',
      ingressiPaganti: 'Centro storico in gran parte gratuito. Tour e degustazioni in cantina: mediamente €20-45.',
    },
    linkInterni: [
      { label: 'Prenota il tuo soggiorno nelle Langhe', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contattaci per itinerario Alba + cantine', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Scopri le nostre offerte food & wine', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'asti',
    next: 'cattedrali-sotterranee',
  },

  {
    slug: 'cattedrali-sotterranee',
    nome: 'Cattedrali Sotterranee di Canelli',
    sottotitolo: 'Guida Completa alle Cantine Patrimonio UNESCO',
    categoria: 'Esperienza Unica',
    categoryIcon: 'fa-dungeon',
    distanzaDallHotel: '26 km dall\'hotel',
    tempoVisita: 'Mezza giornata',
    img: '/foto/le-cattedrali-sotterranee.webp',
    heroImg: '/foto/le-cattedrali-sotterranee.webp',
    tagline: 'Cosa visitare alle Cattedrali Sotterranee di Canelli, come prenotare e cosa aspettarsi: guida completa al patrimonio UNESCO sotto le colline.',
    descrizioneBreve: 'Sotto le strade di Canelli esiste una città parallela: gallerie e tunnel scavati nel tufo, volte in mattoni alte e silenziose, migliaia di bottiglie in affinamento al buio. Riconosciute Patrimonio UNESCO nel 2014, le Cattedrali Sotterranee sono un viaggio nella storia della spumantistica italiana. Da Costigliole d\'Asti si raggiunge in circa 30 minuti.',
    sezioni: [
      {
        titolo: 'Un patrimonio UNESCO sotto terra',
        img: '/foto/le-cattedrali-sotterranee.webp',
        testo: `Canelli è la patria dello spumante italiano. Nel 1865 Carlo Gancia mise a punto il primo spumante italiano applicando le tecniche apprese in Champagne. Sotto le colline si aprono oltre 20 chilometri di gallerie scavate nel tufo: roccia vulcanica porosa che regola naturalmente temperatura (12-14°C costanti) e umidità, condizioni perfette per rifermentazione e affinamento dei vini.

L'UNESCO, nel riconoscere nel 2014 il Paesaggio Vitivinicolo del Piemonte come Patrimonio dell'Umanità, ha incluso esplicitamente le Cattedrali Sotterranee come elemento di straordinario valore culturale e storico. Le cantine visitabili principali sono Bosca, Gancia, Contratto e Coppo.`,
        lista: [
          'Oltre 20 km di gallerie scavate nel tufo',
          'Temperature costanti di 12-14°C tutto l\'anno',
          'Riconoscimento UNESCO 2014',
          'Storia della spumantistica italiana dal 1865',
        ],
        tags: ['UNESCO Canelli', 'Cattedrali Sotterranee', 'Patrimonio mondiale'],
      },
      {
        titolo: 'Cantine Bosca: storia e visita completa',
        img: '/foto/volte-imponenti.webp',
        testo: `Le Cantine Bosca sono tra le più antiche e originali da visitare. Fondata nel 1831 da Pietro Bosca, l'azienda è arrivata alla sesta generazione della stessa famiglia. Nelle gallerie sotterranee matura ancora oggi la Riserva del Nonno, spumante Metodo Classico cuore della produzione aziendale.

Dal 2010 le cantine sono aperte con un percorso multisensoriale: luci, suoni, proiezioni e installazioni permanenti accompagnano i visitatori lungo le navate sotterranee. Il tour dura circa 40-50 minuti di camminata a 15°C costanti, con una quarantina di scalini lungo il tragitto. Al termine si accede all'enoteca aziendale.

Se soggiorni da noi, possiamo organizzare prenotazione con sconto esclusivo per le Cantine Bosca.`,
        dettagli: [
          {
            titolo: 'Cantine Bosca — Via G.B. Giuliani, 23',
            testo: 'Esperienza multisensoriale con luci, suoni e installazioni permanenti dal 2015. Tour 40-50 minuti, degustazione finale inclusa (Metodo Classico + Metodo Charmat). Prenotazione obbligatoria, cancellazione gratuita fino a 24h prima. Costo circa 25€ a persona, ingresso gratuito per minorenni e residenti.',
            href: 'https://www.google.com/maps/place/Cantine+Bosca/@44.7204368,8.2824925,17z/data=!3m1!4b1!4m6!3m5!1s0x47878846fd837c8b:0xf5ac119b934811f0!8m2!3d44.7204368!4d8.2850674!16s%2Fg%2F11b77qh7gd?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D',
            linkLabel: 'Cantine Bosca — Google Maps',
          },
        ],
        tags: ['Cantine Bosca', 'Visita cantina Canelli', 'Degustazione spumante'],
      },
      {
        titolo: 'I vini delle Cattedrali: Metodo Classico e Alta Langa',
        testo: `Nelle cantine di Canelli nasce l'Alta Langa DOCG, lo spumante piemontese di metodo classico prodotto con uve Pinot Nero e Chardonnay. Con un minimo di 30 mesi sui lieviti (60 per la Riserva), è uno spumante di grande complessità capace di competere con i migliori Champagne francesi.

La degustazione nelle gallerie, al fresco naturale dei 12-14°C, è un'esperienza sensoriale che va oltre il semplice assaggio: è una connessione profonda con la storia del territorio. Se vuoi approfondire la conoscenza della spumantistica piemontese, soggiorna da noi e organizzeremo un tour completo tra Canelli, Asti e Alba.`,
        lista: [
          'Alta Langa DOCG: Metodo Classico con 30-60 mesi di affinamento',
          'Moscato d\'Asti DOCG: aromatico e dolce',
          'Barbera d\'Asti DOCG: vino rosso del territorio',
          'Riserva del Nonno (Bosca): spumante storico aziendale',
        ],
        tags: ['Alta Langa DOCG', 'Spumante Metodo Classico', 'Vini Canelli'],
      },
      {
        titolo: 'Eventi alle Cattedrali Sotterranee',
        testo: `Le Cantine Bosca partecipano ai principali eventi del territorio durante l'anno, con visite senza prenotazione obbligatoria e degustazioni in formula aperta.`,
        lista: [
          'Cantine Aperte (maggio): gallerie aperte al pubblico senza prenotazione',
          'Cantine Aperte in Vendemmia (settembre/ottobre): visita in piena vendemmia',
          'Canelli Città del Vino (estate): degustazioni speciali e produttori esterni',
        ],
        tags: ['Eventi Canelli', 'Cantine Aperte', 'Vendemmia'],
      },
      {
        titolo: 'Come arrivare e informazioni pratiche',
        testo: `Canelli dista 26 km da Costigliole d'Asti: in auto il tragitto medio è di circa 30 minuti. Parcheggio consigliato in Via Giuliani, Via Alba o Piazza Gioberti.

Prenotazione obbligatoria con cancellazione gratuita fino a 24 ore prima. Portate un maglione: 15°C costanti sono gradevoli in estate ma si sentono in inverno. Le visite sono disponibili in italiano e inglese.

Per prenotare tramite la nostra struttura e ricevere uno sconto esclusivo, contattaci direttamente.`,
        lista: [
          'In auto: 26 km, circa 30 minuti da Costigliole d\'Asti',
          'Parcheggio gratuito in centro a Canelli',
          'Prenotazione obbligatoria (cancellazione gratuita 24h prima)',
          'Costo visita + degustazione: circa 25€ a persona',
          'Portare giacca o maglione (temperatura 12-15°C)',
        ],
        links: [
          { label: 'Percorso Costigliole d\'Asti → Canelli — Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Canelli' },
        ],
        tags: ['Come arrivare Canelli', 'Prenotazione cantine', 'Info pratiche'],
      },
      {
        titolo: 'Quando visitare le Cattedrali Sotterranee',
        img: '/foto/cantine-soto-terra.webp',
        testo: `Le Cattedrali Sotterranee sono visitabili tutto l'anno. La temperatura costante delle gallerie le rende piacevoli in estate e suggestive in inverno. Maggio e settembre sono i periodi migliori per eventi come Cantine Aperte.

Se vuoi vivere Canelli con calma e visitare anche Alba, Asti e il Monferrato, soggiorna da noi: siamo la base ideale per un weekend enogastronomico completo.`,
        lista: [
          'Primavera: clima ideale, Cantine Aperte in maggio',
          'Estate: fresco nelle gallerie, Canelli Città del Vino',
          'Autunno: vendemmia, Cantine Aperte in Vendemmia',
          'Inverno: atmosfera suggestiva, pochi turisti',
        ],
        tags: ['Quando visitare Canelli', 'Stagioni migliori', 'Eventi cantine'],
      },
    ],
    infoPratiche: {
      come: 'Dall\'hotel a Canelli: circa 30 minuti in auto (26 km). Parcheggio gratuito in centro.',
      periodo: 'Tutto l\'anno. Prenotazione obbligatoria. Eventi principali: maggio e settembre.',
      cosaDPortare: 'Giacca o maglione (12-15°C nelle gallerie), scarpe comode, fotocamera.',
      ingressiPaganti: 'Tour + degustazione circa 25€ a persona. Sconto esclusivo prenotando tramite il nostro hotel.',
    },
    linkInterni: [
      { label: 'Prenota soggiorno e ricevi sconto Cantine Bosca', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contattaci per tour enogastronomico completo', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Scopri le nostre offerte wine tour', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'alba',
    next: 'caccia-al-tartufo',
  },

  {
    slug: 'caccia-al-tartufo',
    nome: 'Caccia al Tartufo nelle Langhe e Monferrato',
    sottotitolo: 'Guida Completa all’Oro Sotterraneo',
    categoria: 'Esperienze nel Territorio',
    categoryIcon: 'fa-paw',
    distanzaDallHotel: 'Boschi tra Costigliole, Alba e Monferrato',
    tempoVisita: '1 ora / mezza giornata con Alba',
    img: '/foto/tartufo-bianco.webp',
    heroImg: '/foto/tartufo-bianco.webp',
    tagline: 'Il Tartufo Bianco d\'Alba è il simbolo più prezioso delle Langhe: vivere una ricerca con trifulau e cane addestrato è una delle esperienze più autentiche del Piemonte.',
    descrizioneBreve: 'C\'è un profumo che non si dimentica: terroso, intenso, selvatico e raffinato. È quello del Tartufo Bianco d\'Alba (Tuber magnatum Pico). Nelle Langhe e nel Monferrato la caccia al tartufo è un rito tramandato tra generazioni di trifulau: uscire all\'alba nei boschi, seguire il cane, attendere il ritrovamento. In questa guida trovi stagionalità, esperienza privata con Truffle Trail e famiglia Ronzano, Fiera del Tartufo di Alba, consigli pratici e itinerario weekend.',
    sezioni: [
      {
        titolo: 'Il Tartufo Bianco d\'Alba: l\'oro sotterraneo delle Langhe',
        img: '/foto/tartufo-bianco.webp',
        testo: `Nelle Langhe e nel Monferrato, la caccia al tartufo non è solo un\'attività: è un rito antico, tramandato tra i trifulau, i cercatori di tartufo. Si esce all\'alba nei boschi con il cane addestrato, si cammina tra querce e salici in ascolto del territorio, si aspetta il momento in cui l\'animale segnala il punto giusto.

Il protagonista assoluto è il Tartufo Bianco d\'Alba (Tuber magnatum Pico), il più prezioso e ricercato. Un\'esperienza che appartiene profondamente all\'identità di questa terra e che, vissuta sul campo, cambia completamente il modo di guardare il territorio.`,
        lista: [
          'Profumo intenso e inconfondibile del Tuber magnatum Pico',
          'Tradizione tramandata tra generazioni di trifulau',
          'Ricerca nei boschi all\'alba con cane addestrato',
          'Esperienza identitaria delle Langhe e del Monferrato',
        ],
        tags: ['Tartufo Bianco d\'Alba', 'Trifulau', 'Esperienza autentica'],
      },
      {
        titolo: 'La stagione del tartufo',
        img: '/foto/Ricerca-tartufo.webp',
        testo: `Il Tartufo Bianco d\'Alba matura tra settembre e dicembre, con picco aromatico tra ottobre e novembre. In questo periodo il territorio si anima: mercati, osterie e cantine ruotano attorno al tartufo.

Durante l\'anno sono presenti anche altre varietà: Tartufo Nero Estivo (Tuber aestivum) tra maggio e agosto e Bianchetto (Tuber borchii) tra gennaio e aprile. In ogni stagione, quindi, c\'è qualcosa da cercare.`,
        lista: [
          'Tartufo Bianco d\'Alba: settembre → dicembre',
          'Picco di stagione: ottobre e novembre',
          'Nero Estivo: maggio → agosto',
          'Bianchetto: gennaio → aprile',
        ],
        tags: ['Stagionalità tartufo', 'Tuber magnatum', 'Tuber aestivum'],
      },
      {
        titolo: 'Vivi la ricerca con Truffle Trail e la famiglia Ronzano',
        img: '/foto/Tartufai.webp',
        testo: `Per vivere in prima persona la caccia al tartufo, abbiamo una partnership con Truffle Trail, esperienza organizzata dalla famiglia Ronzano di Costigliole d\'Asti: trifulau da tre generazioni.

La Tenuta Ronzano nasce dalla visione di Renato Ronzano. Oggi la tradizione prosegue con Giovanni (attivo dal 1963 nel mondo del tartufo), Marco (selezione e distribuzione del prodotto) e Gianluca (addestramento cani e ricerca sul campo). L\'escursione dura circa un\'ora ed è privata, riservata solo al tuo gruppo.`,
        dettagli: [
          {
            titolo: 'Come si svolge l\'esperienza Truffle Trail',
            testo: 'Ritrovo nei boschi della Tenuta Ronzano (posizione inviata dopo prenotazione). 1) Introduzione su storia, specie ed ecologia del tartufo. 2) Ingresso nel bosco con cani addestrati. 3) Fase di ricerca e lettura dei segnali del cane. 4) Ritrovamento e valutazione del tartufo al tatto e all\'olfatto con guida esperta.',
            href: 'https://www.truffletrail.it',
            linkLabel: 'Sito ufficiale Truffle Trail',
          },
          {
            titolo: 'Contatto rapido Truffle Trail',
            testo: 'WhatsApp diretto per informazioni operative sull\'esperienza.',
            href: 'https://wa.me/393475806188',
            linkLabel: 'WhatsApp Truffle Trail (+39 347 580 6188)',
          },
        ],
        tags: ['Truffle Trail', 'Famiglia Ronzano', 'Caccia privata al tartufo'],
      },
      {
        titolo: 'Sconto riservato agli ospiti dell\'hotel',
        testo: `Gli ospiti dell\'Hotel Langhe & Monferrato hanno accesso a una tariffa dedicata sull\'esperienza Truffle Trail.

Per prenotare con sconto riservato è sufficiente passare dalla nostra reception: organizziamo tutto noi, dall\'orario al punto di ritrovo. Non prenotare direttamente online prima di averci scritto, così puoi accedere alla tariffa convenzionata.`,
        tags: ['Sconto ospiti hotel', 'Prenotazione assistita', 'Esperienza convenzionata'],
      },
      {
        titolo: 'La Fiera Internazionale del Tartufo Bianco d\'Alba',
        testo: `Ogni anno, nel periodo autunnale, Alba ospita la Fiera del Tartufo: uno dei principali appuntamenti enogastronomici italiani. Se la caccia al tartufo ti porta nei boschi, la Fiera ti porta nel cuore della cultura del territorio.

Qui trovi il Mercato Mondiale del Tartufo, cooking show, degustazioni vini, corsi di cucina e attività culturali per adulti e bambini. La guida resta evergreen: per programma aggiornato e calendario ufficiale verifica sempre i canali dell\'Ente Fiera.`,
        lista: [
          'Mercato Mondiale del Tartufo con Commissione Qualità',
          'Cooking show e tramonti gourmet',
          'Analisi sensoriale del tartufo con esperti',
          'Wine tasting su Barolo, Barbaresco, Nebbiolo e Moscato',
          'Attività family-friendly e folklore locale',
        ],
        links: [
          { label: 'Sito ufficiale Fiera del Tartufo', href: 'https://www.fieradeltartufo.org' },
          { label: 'Ente Fiera — Google Maps', href: 'https://maps.google.com/?q=Piazza+Medford+3+Alba' },
        ],
        tags: ['Fiera del Tartufo', 'Alba', 'Eventi enogastronomici'],
      },
      {
        titolo: 'Come organizzare il tuo weekend del tartufo',
        img: '/foto/Cane-cerca-tartufo.webp',
        testo: `Un programma ideale: mattina nei boschi con Truffle Trail a Costigliole, pomeriggio ad Alba tra centro storico e mercato del tartufo, sera in osteria con tajarin, uova al tegamino o fonduta al tartufo.

Per evitare stress e perdere meno tempo negli spostamenti, chiedi alla reception: costruiamo un itinerario su misura e gestiamo le prenotazioni con partner convenzionati.`,
        lista: [
          'Mattina: caccia al tartufo nei boschi',
          'Pomeriggio: Alba e mercato del tartufo',
          'Sera: cena tipica con piatti al tartufo',
        ],
        links: [
          { label: 'Percorso Costigliole d\'Asti → Alba — Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Alba+Cuneo' },
        ],
        tags: ['Weekend del tartufo', 'Itinerario Langhe', 'Esperienze personalizzate'],
      },
    ],
    infoPratiche: {
      come: 'Punto di ritrovo nei boschi della Tenuta Ronzano (Costigliole d\'Asti). Alba dista circa 30 km dall\'hotel, meno di 40 minuti in auto.',
      periodo: 'Tutto l\'anno (varia la specie di tartufo). Stagione del Bianco: settembre-dicembre.',
      cosaDPortare: 'Scarpe comode o trekking, abbigliamento a strati, giacca leggera, smartphone carico.',
      ingressiPaganti: 'Esperienza privata Truffle Trail con tariffa dedicata per ospiti hotel (su richiesta in reception).',
    },
    linkInterni: [
      { label: 'Prenota il soggiorno e attiva lo sconto Truffle Trail', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contattaci per prenotare la caccia al tartufo', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Scopri le offerte food & wine', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'cattedrali-sotterranee',
    next: 'castelli-del-monferrato',
  },

  {
    slug: 'castelli-del-monferrato',
    nome: 'Castelli del Monferrato e delle Langhe',
    sottotitolo: 'Guida Completa tra Manieri, Storia e Paesaggi UNESCO',
    categoria: 'Esperienze nel Territorio',
    categoryIcon: 'fa-chess-rook',
    distanzaDallHotel: 'Da 5 minuti a 1 ora dall\'hotel',
    tempoVisita: 'Una giornata intera',
    img: '/foto/castelli-nel-monferrato.webp',
    heroImg: '/foto/castelli-nel-monferrato.webp',
    tagline: 'Un territorio costruito sulla pietra: castelli, rocche e dimore storiche tra Monferrato e Langhe, con itinerari perfetti partendo dal nostro hotel.',
    descrizioneBreve: 'Monferrato e Langhe sono tra le aree italiane con la più alta concentrazione di castelli per chilometro quadrato. Non sono solo reliquie del passato: hanno ospitato nobili, diplomatici, re e protagonisti del Risorgimento. Dal Castello di Costigliole d\'Asti, a pochi minuti dall\'hotel, fino ai manieri tra i vigneti UNESCO, questa guida raccoglie le tappe più suggestive con informazioni pratiche e link utili.',
    sezioni: [
      {
        titolo: 'Un territorio costruito sulla pietra',
        img: '/foto/castello-di-tagliolo-piemonte.webp',
        testo: `Il Monferrato e le Langhe sono tra le regioni italiane con la più alta concentrazione di castelli per chilometro quadrato. Questi manieri non sono solo monumenti: hanno plasmato la storia d\'Italia e oggi molti sono visitabili, restaurati e inseriti in percorsi culturali ed enogastronomici.

Dal castello che domina Costigliole d\'Asti fino ai manieri immersi nei vigneti UNESCO, ogni tappa è un viaggio nella storia che si intreccia con il paesaggio vitivinicolo più iconico del Piemonte.`,
        lista: [
          'Castelli medievali, fortezze e dimore nobiliari',
          'Legami con Risorgimento, diplomazia e storia locale',
          'Itinerari facilmente organizzabili in giornata',
          'Possibilità di abbinare visite a cantine e borghi',
        ],
        tags: ['Castelli Monferrato', 'Langhe UNESCO', 'Itinerari storici'],
      },
      {
        titolo: 'I castelli da non perdere',
        img: '/foto/castelli-nel-monferrato.webp',
        testo: `Qui trovi i manieri più interessanti da visitare tra Costigliole, Langhe e Monferrato, con contesto storico e informazioni utili per organizzare al meglio la giornata.`,
        dettagli: [
          {
            titolo: 'Castello di Costigliole d\'Asti',
            testo: 'Il castello simbolo del borgo, visibile da tutta la valle. Le prime notizie risalgono al 1061. Passato da fortezza medievale a dimora nobiliare, unisce architettura ispirata a Benedetto Alfieri, ingresso monumentale di Filippo Juvarra e revival neomedievale ottocentesco. Oggi ospita ICIF, Consorzio Barbera d\'Asti e Vini del Monferrato e fa parte di Castelli Aperti. Il giardino antistante è parco pubblico dal 1928.',
            href: 'https://maps.google.com/?q=Piazza+Vittorio+Emanuele+II+Costigliole+d%27Asti',
            linkLabel: 'Castello di Costigliole — Google Maps',
          },
          {
            titolo: 'Castello di Grinzane Cavour',
            testo: 'Nel cuore delle Langhe UNESCO, è legato alla figura di Camillo Benso Conte di Cavour, sindaco di Grinzane per 17 anni e protagonista della modernizzazione vitivinicola locale. Oggi ospita Museo delle Langhe, Cimeli Cavouriani, Enoteca Regionale Piemontese Cavour e l\'Asta Mondiale del Tartufo Bianco d\'Alba.',
            href: 'https://maps.google.com/?q=Via+Castello+5+Grinzane+Cavour',
            linkLabel: 'Castello di Grinzane Cavour — Google Maps',
          },
          {
            titolo: 'Castello dei Paleologi — Casale Monferrato',
            testo: 'Grande fortezza del Marchesato del Monferrato, costruita dal 1352 su ordine di Giovanni II Paleologo. Evoluta nei secoli con i Gonzaga e poi in età sabauda, conserva cammini di ronda, sotterranei e bassorilievi dei casati storici Aleramo, Paleologi e Gonzaga. Oggi è anche sede dell\'Enoteca Regionale del Monferrato.',
            href: 'https://maps.google.com/?q=Piazza+Castello+Casale+Monferrato',
            linkLabel: 'Castello dei Paleologi — Google Maps',
          },
          {
            titolo: 'Castello di Camino',
            testo: 'Uno dei castelli più scenografici del territorio, con torrione quadrangolare alto 44 metri. Le origini risalgono all\'XI secolo; per secoli fu legato alla famiglia Scarampi. Oggi è proprietà privata e apre in occasioni speciali con visite guidate e degustazioni della tenuta.',
            href: 'https://maps.google.com/?q=Via+Castello+30+Camino+AL',
            linkLabel: 'Castello di Camino — Google Maps',
          },
          {
            titolo: 'Castello di Cereseto',
            testo: 'Maniero panoramico del Basso Monferrato Casalese, molto apprezzato per posizione, torri angolari e contesto paesaggistico tra vigneti. Le origini sono medievali e l\'aspetto attuale deriva da restauri e stratificazioni storiche che ne hanno conservato il fascino.',
            href: 'https://maps.google.com/?q=Castello+di+Cereseto',
            linkLabel: 'Castello di Cereseto — Google Maps',
          },
        ],
        tags: ['Costigliole d\'Asti', 'Grinzane Cavour', 'Casale Monferrato'],
      },
      {
        titolo: 'Come organizzare una giornata tra i castelli',
        testo: `Il territorio attorno all\'hotel si presta a itinerari di mezza giornata o giornata intera. Possiamo aiutarti a costruire il percorso in base a stagione, orari di apertura e interessi (storia, panorami, degustazioni, borghi).`,
        lista: [
          'Itinerario mattina: Castello di Costigliole (a piedi) + centro storico',
          'Itinerario giornata Langhe: Grinzane Cavour + Alba',
          'Itinerario giornata Monferrato: Camino + Casale Monferrato',
          'Abbinamento consigliato: castelli + cantine + pranzo in osteria',
        ],
        links: [
          { label: 'Castello di Costigliole d\'Asti — Google Maps', href: 'https://maps.google.com/?q=Piazza+Vittorio+Emanuele+II+Costigliole+d%27Asti' },
          { label: 'Castello di Grinzane Cavour — Sito ufficiale', href: 'https://www.castellogrinzane.com' },
        ],
        tags: ['Itinerario castelli', 'Weekend Monferrato', 'Consigli reception'],
      },
    ],
    infoPratiche: {
      come: 'Partenza ideale dal nostro hotel: Costigliole a piedi, Grinzane ~40 min, Casale ~50 min, Camino ~55 min, Cereseto ~1 ora.',
      periodo: 'Tutto l\'anno. Verificare sempre aperture straordinarie e orari dei singoli castelli.',
      cosaDPortare: 'Scarpe comode, documento, fotocamera e una giacca leggera per visite serali.',
      ingressiPaganti: 'Costi variabili per sito. Esempio Grinzane Cavour: intero 8€, ridotto 6€, bambini 6-14 anni 3€.',
    },
    linkInterni: [
      { label: 'Contattaci per itinerario castelli personalizzato', href: '/contatti', icon: 'fa-car' },
      { label: 'Prenota il soggiorno nel cuore del Monferrato', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Scopri offerte weekend tra castelli e cantine', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'caccia-al-tartufo',
    next: 'big-bench',
  },

  {
    slug: 'big-bench',
    nome: 'Le Big Bench: le Panchine Giganti del Piemonte',
    sottotitolo: 'Sedersi su una Panchina e Tornare Bambini',
    categoria: 'Esperienze nel Territorio',
    categoryIcon: 'fa-chair',
    distanzaDallHotel: '5-35 km dall\'hotel',
    tempoVisita: 'Mezza giornata o itinerario di un giorno',
    img: '/foto/le-grandi-panchine.webp',
    heroImg: '/foto/le-grandi-panchine.webp',
    tagline: 'Immagina di sederti su una panchina così grande da far sembrare le colline intorno ancora più vaste, i vigneti ancora più profondi, il cielo ancora più alto. Questo è l\'effetto di una Big Bench, una panchina gigante colorata che ti cambia la prospettiva su tutto.',
    descrizioneBreve: 'Le Big Bench sono installazioni artistiche giganti nate da un\'idea del designer americano Chris Bangle nel 2010. Oggi ne esistono oltre 300 nel mondo, concentrate soprattutto nel Piemonte e nelle Langhe del Monferrato. Ogni panchina offre una vista spettacolare e un momento semplice, quasi infantile, che trasforma il modo di vivere il territorio. Dall\'hotel, le più vicine si raggiungono in pochi minuti.',
    sezioni: [
      {
        titolo: 'Sedersi su una Panchina e Tornare Bambini',
        img: '/foto/le-grandi-panchine.webp',
        testo: `Immagina di sederti su una panchina così grande da far sembrare le colline intorno a te ancora più vaste, i vigneti ancora più profondi, il cielo ancora più alto. Le gambe che non toccano terra, il panorama che si apre davanti a te come non l'avevi mai visto. Un momento semplice, quasi infantile, che ti cambia la prospettiva su tutto.

Questo è l'effetto di una Big Bench, una panchina gigante colorata alta circa due metri e mezzo e larga tre, posizionata in punti panoramici spettacolari tra le colline del Piemonte.

Non si tratta solo di un'installazione artistica o di un gioco. Dietro ogni grande panchina c'è un progetto che ha trasformato il modo in cui questo territorio viene vissuto e raccontato.`,
        tags: ['Esperienza', 'Design', 'Panorama'],
      },
      {
        titolo: 'Il Progetto: una Storia Nata per Gioco',
        testo: `Tutto comincia nel 2010 in una borgata di Clavesana, nelle Langhe, dove un designer americano di nome Chris Bangle si è trasferito con la moglie Catherine nel 2009. Bangle non è un designer qualunque: ha lavorato per Fiat, Alfa Romeo e infine come direttore del centro stile BMW per oltre vent'anni, prima di scegliere le Langhe come sua casa definitiva.

Un pomeriggio con un gruppo di amici e vicini di casa, Chris costruisce la prima panchina gigante sul terreno di Clavesana. L'idea è tanto semplice quanto geniale: realizzare qualcosa che faccia tornare un po' bambini davanti al meraviglioso panorama delle Langhe. Una panchina fuori scala, che ribalta il punto di vista e restituisce al paesaggio tutta la sua grandezza.

La risposta è immediata: le persone arrivano, salgono, fotografano, si meravigliano. Quella che era una trovata tra amici diventa rapidamente qualcosa di più grande.

Nel 2010 nasce il Big Bench Community Project (BBCP), organizzazione no profit fondata da Chris e Catherine Bangle con un obiettivo preciso: promuovere le comunità locali, sostenere le eccellenze artigiane del territorio e valorizzare il turismo attraverso la costruzione di panchine giganti in luoghi panoramici. Il design delle panchine, protetto da copyright, viene concesso gratuitamente a chiunque voglia costruirne una, a patto di rispettare tutti gli elementi che caratterizzano il progetto originale.

Da quella prima panchina rossa di Clavesana il progetto è cresciuto in modo straordinario: oggi le Big Bench sono oltre 300 nel mondo, presenti in tutte le regioni d'Italia e in diversi paesi stranieri, dalla Scozia agli Stati Uniti. Il Piemonte, e in particolare le Langhe e il Monferrato, rimangono il cuore del progetto e la zona con la concentrazione più alta di panchine.`,
        tags: ['Storia', 'Chris Bangle', 'BBCP'],
      },
      {
        titolo: 'Il Passaporto delle Big Bench',
        testo: `Uno degli aspetti più apprezzati del progetto è il passaporto ufficiale delle Big Bench: un libretto che si acquista in molti punti timbro del territorio e che si riempie via via che si visitano le panchine. Ogni Big Bench ha un timbro unico che racconta il luogo e la panchina stessa.

È diventato un piccolo gioco di esplorazione del territorio, amato sia dagli adulti che dai bambini: ogni timbro raccolto è una collina visitata, un panorama scoperto, un borgo conosciuto.

Il passaporto si acquista e i timbri si raccolgono presso locali, agriturismi, cantine ed esercizi commerciali situati vicino a ciascuna panchina.`,
        tags: ['Passaporto', 'Gioco', 'Esplorazione'],
      },
      {
        titolo: 'Le Big Bench Vicine all\'Hotel',
        testo: `Costigliole d'Asti è nel cuore di una delle zone più ricche di Big Bench dell'intera regione. Ecco le panchine raggiungibili facilmente dal nostro hotel, con qualche indicazione per organizzare una giornata all'insegna del panorama e della meraviglia.`,
        dettagli: [
          {
            titolo: 'Big Bench n. 17 — Costigliole d\'Asti (Bricco Lu\')',
            testo: 'La panchina di casa nostra, color marrone. Posizionata al belvedere di Bricco Lu\', offre una vista spettacolare sulle colline astigiane con lo sguardo che si apre verso il Monferrato e le Langhe. Perfetta per una passeggiata al tramonto, letteralmente a pochi minuti dall\'hotel. È una delle due Big Bench di Costigliole.',
            href: 'https://maps.google.com/?q=Big+Bench+17+Costigliole+d%27Asti+Bricco+Lu',
            linkLabel: 'Big Bench n. 17 — Google Maps',
          },
          {
            titolo: 'Big Bench n. 18 — Costigliole d\'Asti (Strada Castelletto)',
            testo: 'La seconda panchina di Costigliole, color arancione. Posizionata in Strada Castelletto, offre una vista leggermente diversa dalla n. 17 sulle colline astigiane. Costigliole è uno dei pochi comuni ad averne ben due, segno dell\'importanza del territorio nel Big Bench Community Project.',
            href: 'https://maps.google.com/?q=Big+Bench+18+Costigliole+d%27Asti+Castelletto',
            linkLabel: 'Big Bench n. 18 — Google Maps',
          },
          {
            titolo: 'Big Bench n. 10 — Castelnuovo Calcea',
            testo: 'Panchina viola, immersa nella natura del parco Lacourt, raggiungibile seguendo una strada sterrata tra i vigneti. Castelnuovo Calcea è un piccolo borgo astigiano a pochi chilometri da Costigliole, noto per i suoi vini. Il contrasto tra il viola della panchina e il verde dei filari è uno dei più fotogenici della zona.',
            href: 'https://maps.google.com/?q=Big+Bench+10+Castelnuovo+Calcea',
            linkLabel: 'Big Bench n. 10 — Google Maps',
          },
          {
            titolo: 'Big Bench n. 24 — Moasca',
            testo: 'Panchina rosa, con vista sui vigneti dell\'Astigiano. Moasca è un borgo minuscolo tra Costigliole e Canelli, nel cuore della Barbera d\'Asti. La panchina si trova in Piazza Castello, nel punto più panoramico del paese. Distanza: circa 12 km dall\'hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+24+Moasca',
            linkLabel: 'Big Bench n. 24 — Google Maps',
          },
          {
            titolo: 'Big Bench n. 26 — Coazzolo',
            testo: 'Uno dei borghi più piccoli e silenziosi della zona, Coazzolo si affaccia sulle colline di confine tra Asti e il Cuneese. La sua panchina offre una vista ampia verso sud, in direzione delle Langhe. Un luogo tranquillo e meno affollato, perfetto per chi ama la solitudine e la contemplazione. Distanza: circa 15 km dall\'hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+26+Coazzolo',
            linkLabel: 'Big Bench n. 26 — Google Maps',
          },
          {
            titolo: 'Big Bench n. 30 — Canelli',
            testo: 'Panchina color giallo moscato, ispirata al vino più famoso di queste colline. Si trova sul bricco di Regione Merlini, orientata verso nord con una vista spettacolare sulle colline di Canelli e sulle Cattedrali Sotterranee che si nascondono sotto i vigneti. Canelli è anche la città delle bollicine piemontesi, con le sue cantine storiche incluse nel sito UNESCO. Distanza: circa 26 km dall\'hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+30+Canelli',
            linkLabel: 'Big Bench n. 30 — Google Maps',
          },
          {
            titolo: 'Big Bench n. 25 — Fontanile',
            testo: 'Panchina nelle colline dell\'Alto Monferrato, in un contesto rurale autentico e poco frequentato. Fontanile è una delle mete meno battute della zona, perfetta per chi vuole uscire dai percorsi più noti e scoprire angoli tranquilli del territorio. Ideale per una visita contemplativa e fotografica. Distanza: circa 18 km dall\'hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+25+Fontanile',
            linkLabel: 'Big Bench n. 25 — Google Maps',
          },
          {
            titolo: 'Big Bench n. 14 — Alba (Loc. Scaparone)',
            testo: 'Più lontana ma nel cuore delle Langhe UNESCO, questa panchina si trova nella località Scaparone di Alba con una vista spettacolare sui vigneti di Barolo e Barbaresco. Da abbinare a una visita in città per un\'esperienza completa nel cuore delle più prestigiose zone vinicole piemontesi. Distanza: circa 35 km dall\'hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+14+Alba+Scaparone',
            linkLabel: 'Big Bench n. 14 — Google Maps',
          },
          {
            titolo: 'Big Bench n. 23 — Neive',
            testo: 'Neive è uno dei borghi più belli d\'Italia e la sua Big Bench si trova in una posizione panoramica mozzafiato sulle colline delle Langhe. Da abbinare a una passeggiata nel centro storico del paese, con le sue strette vie medievali, le cantine storiche e l\'atmosfera di un autentico villaggio piemontese. Distanza: circa 38 km dall\'hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+23+Neive',
            linkLabel: 'Big Bench n. 23 — Google Maps',
          },
        ],
        tags: ['Panchine Vicine', 'Itinerario', 'Distanze'],
      },
      {
        titolo: 'Come Organizzare un Tour delle Big Bench',
        testo: `Un itinerario possibile per una mezza giornata vicino all'hotel:

Mattina: Inizia con la Big Bench n. 17 a Bricco Lu' (Costigliole) al momento della luce migliore, poi prosegui verso Castelnuovo Calcea (n. 10) e Moasca (n. 24). Colazione o merenda in uno dei locali convenzionati per il timbro del passaporto.

Pomeriggio: Continua verso Coazzolo (n. 26) e Canelli (n. 30), con sosta per ammirare il centro storico e le cantine sotterranee UNESCO.

Un itinerario più lungo verso le Langhe combina Alba (n. 14), Neive (n. 23) e una visita a una cantina per la degustazione: consentirai una mezza giornata tra panchine e Barolo.

La reception dell'hotel può aiutarti a costruire il percorso migliore in base alla stagione, all'orario del tramonto e al numero di tappe che vuoi raccogliere nel passaporto. Consigliamo di visitare le Big Bench al tramonto per fotografare con la luce dorata: momenti indimenticabili.`,
        tags: ['Itinerario', 'Organizzazione', 'Consigli Pratici'],
      },
      {
        titolo: 'Risorse Ufficiali',
        testo: `Il Big Bench Community Project mette a disposizione dei visitatori diversi strumenti per organizzare una visita completa:

Mappa interattiva: disponibile sul sito ufficiale e su Google Maps cercando "Big Bench". Permette di localizzare tutte le panchine con GPS e di pianificare il percorso ottimale.

Passaporto ufficiale: acquistabile presso locali, agriturismi, cantine e musei vicino alle Big Bench. Ogni panchina ha un timbro unico.

Social media: segui #BigBench su Instagram per ispirazioni, foto da altri visitatori e aggiornamenti sul progetto.

In autunno, quando le vigne si tingono di rosso e arancione, le fotografie che si scattano sono di una bellezza assoluta. Pianifica la tua visita per approfittare dei colori stagionali più spettacolari.`,
        links: [
          { label: 'Sito Ufficiale Big Bench Community Project', href: 'https://www.bigbenchcommunityproject.org/' },
          { label: 'Mappa Interattiva su Google Maps', href: 'https://www.google.com/maps/search/Big+Bench/' },
          { label: 'Seguici su Instagram — #BigBench', href: 'https://www.instagram.com/explore/tags/bigbench/' },
        ],
        tags: ['Risorse', 'Informazioni', 'Pianificazione'],
      },
    ],
    infoPratiche: {
      come: 'In auto: raggiungibili dalla reception. Alcune a piedi dalle parcheggi nelle vicinanze. Mappa disponibile su bigbenchcommunityproject.org.',
      periodo: 'Tutto l\'anno. Consigliato: settembre-novembre per colori autunnali straordinari. Maggio-giugno per paesaggio verde lussureggiante.',
      cosaDPortare: 'Scarpe comode, smartphone carico (per fotografie), passaporto per i timbri, protezione solare, macchina fotografica.',
      ingressiPaganti: 'Tutte gratuite e aperte al pubblico. Passaporto: circa 10 euro.',
    },
    linkInterni: [
      { label: 'Camere Family — Portate i Bambini!', href: '/camere/family', icon: 'fa-child' },
      { label: 'Alba: Guida Completa', href: '/territorio/alba', icon: 'fa-map' },
      { label: 'Canelli e le Cattedrali Sotterranee', href: '/territorio/cattedrali-sotterranee', icon: 'fa-wine-bottle' },
      { label: 'Pacchetto Weekend — 2 Notti e Panchine', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'castelli-del-monferrato',
    next: null,
  },
];

export function getGuideBySlug(slug) {
  return guide.find((g) => g.slug === slug) || null;
}

export function getAllGuideSlugs() {
  return guide.map((g) => ({ slug: g.slug }));
}
