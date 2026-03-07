// ================================================================
// lib/territorioData.js
// Mini guide del territorio — modifica testi, foto e link interni
// ================================================================

export const guide = [
  {
    slug: 'asti',
    nome: 'Asti',
    sottotitolo: 'Il Cuore del Medioevo Piemontese',
    categoria: 'Città d\'Arte',
    categoryIcon: 'fa-landmark',
    distanzaDallHotel: '25 km dall\'hotel',
    tempoVisita: 'Mezza giornata',
    img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1800&q=85&fit=crop',
    tagline: 'Torri medievali, il Palio storico e il Moscato più celebre d\'Italia: Asti è una città che sorprende.',
    descrizioneBreve: 'Asti è una delle città medievali meglio conservate del Piemonte. Con le sue torri gentilizie, la maestosa Cattedrale di Santa Maria Assunta e la vivace Piazza Alfieri, è una tappa obbligatoria per chi visita le Langhe.',
    sezioni: [
      {
        titolo: 'Le Torri Medievali: Il Skyline del Passato',
        img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80&fit=crop',
        testo: `Nel Medioevo, Asti vantava oltre 120 torri gentilizie — simbolo di potere delle famiglie nobili in perenne rivalità. Oggi ne rimangono una ventina, tra cui la Torre Rossa (Torre di San Secondo), il campanile romanico di Sant'Andrea e la Torre Troyana. Passeggiando per il centro storico, il visitatore si ritrova catapultato in un'atmosfera senza tempo, dove ogni pietra racconta secoli di storia comunale.

La torre più iconica è la Torre Rossa, costruita con mattoni in cotto rossastro che risplendono al tramonto. Situata in Piazza Roma, è il punto di partenza ideale per un giro del centro storico a piedi, che si snoda tra vicoli lastricati, botteghe artigiane e caffè storici.`,
        tags: ['Arte', 'Architettura', 'Storia'],
      },
      {
        titolo: 'La Cattedrale di Santa Maria Assunta',
        img: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=900&q=80&fit=crop',
        testo: `La Cattedrale di Asti è una delle più importanti opere di arte gotica del Piemonte. Costruita a partire dal XIII secolo, custodisce un ciclo di affreschi straordinario e un pavimento cosmatesco che vale da solo il viaggio. La facciata, con le sue tre portali e la finestra a rosone, è un libro di pietra che racconta la fede e la maestria artigiana del Medioevo.

All'interno, la navata centrale è sorretta da colonne in marmo e pietra calcarea locale, e le volte a crociera creano un'acustica che rende ogni visita un'esperienza quasi mistica. Durante i mesi autunnali, quando la luce entra obliqua dai finestroni, l'effetto è semplicemente mozzafiato.`,
        tags: ['Religioso', 'Arte', 'Gotico'],
      },
      {
        titolo: 'Il Palio di Asti: La Corsa più Antica d\'Italia',
        img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=900&q=80&fit=crop',
        testo: `Ogni terza domenica di settembre, Asti si trasforma. Il Palio di Asti — documentato per la prima volta nel 1275 — è considerato il palio medievale più antico d\'Italia, antecedente persino al più famoso Palio di Siena. Tredici borghi e rioni cittadini si sfidano in una corsa di cavalli a pelo intorno all\'ovale di Piazza Alfieri, preceduta da un grandioso corteo in abiti d\'epoca.

Per chi ha la fortuna di visitare Asti a settembre, assistere al Palio è un'emozione travolgente: il rombo degli zoccoli sul tufo, le bandiere dei rioni che sventolano, la folla che urla il nome del proprio cavallo. È un rito collettivo che ha attraversato sette secoli senza perdere un grammo della sua intensità.`,
        tags: ['Evento', 'Tradizione', 'Settembre'],
      },
      {
        titolo: 'Moscato d\'Asti e Asti Spumante: I Vini della Dolcezza',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80&fit=crop',
        testo: `Asti non è solo arte e storia: è anche la capitale mondiale del Moscato. Il Moscato d'Asti DOCG e l'Asti Spumante DOCG sono tra i vini più conosciuti e amati nel mondo, prodotti esclusivamente da uve Moscato Bianco coltivate nelle colline intorno alla città.

Il Moscato d'Asti è dolce, floreale, con note di pesca bianca e albicocca, e una bassa gradazione alcolica che lo rende perfetto come aperitivo o con i dessert piemontesi. L'Asti Spumante è invece vivace e frizzante, ideale per i brindisi. Una visita alle cantine storiche nelle colline astigiane è un'esperienza che coinvolge tutti i sensi.`,
        tags: ['Vino', 'DOCG', 'Enologia'],
      },
      {
        titolo: 'Dove Mangiare: I Sapori Autentici dell\'Astigiano',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&fit=crop',
        testo: `La cucina astigiana è robusta, schietta e legata al territorio. Non si può lasciare Asti senza aver assaggiato il Bollito misto — un grande classico della domenica piemontese servito con salse verdi e rosse — e i tajarin al ragù d'anatra, sottilissime tagliatelle all'uovo tirate a mano.

In Piazza Alfieri e nelle vie del centro si concentrano le migliori osterie e trattorie, alcune aperte da generazioni. Per i dolci, le pasticcerie storiche propongono torcetti, amaretti morbidi, meringhe alla nocciola e il celebre "Bonet", un budino di cioccolato e amaretti tipicamente piemontese.`,
        tags: ['Gastronomia', 'Ristoranti', 'Tipico'],
      },
    ],
    infoPratiche: {
      come: 'In auto dall\'hotel: 25 minuti via SP456. In treno: stazione di Asti con collegamenti frequenti.',
      periodo: 'Tutto l\'anno. Settembre per il Palio.',
      cosaDPortare: 'Scarpe comode per il centro storico. Macchina fotografica!',
      ingressiPaganti: 'Museo Civico e Torre Troyana: €5 a persona. Cattedrale: gratuita.',
    },
    linkInterni: [
      { label: 'Soggiorna con noi: Camera Standard', href: '/camere/standard', icon: 'fa-bed' },
      { label: 'Pacchetto Weekend Gastronomico', href: '/offerte/weekend-gastronomico', icon: 'fa-tag' },
      { label: 'Wine Tour & Cantine', href: '/territorio', icon: 'fa-wine-glass-alt' },
    ],
    prev: null,
    next: 'alba',
  },

  {
    slug: 'alba',
    nome: 'Alba',
    sottotitolo: 'La Capitale del Gusto e del Tartufo',
    categoria: 'Città Gourmet',
    categoryIcon: 'fa-utensils',
    distanzaDallHotel: '15 km dall\'hotel',
    tempoVisita: 'Una giornata intera',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85&fit=crop',
    tagline: 'La città delle cento torri, del tartufo bianco e del Barolo: Alba è il cuore gastronomico del Piemonte.',
    descrizioneBreve: 'Alba è una delle città più affascinanti delle Langhe. Elegante e raccolta, è famosa in tutto il mondo per il suo Tartufo Bianco, per il Barolo e per una tradizione gastronomica di altissimo livello che ha ispirato chef stellati da ogni angolo del pianeta.',
    sezioni: [
      {
        titolo: 'Via Maestra e il Centro Storico: Passeggiare nel Medioevo',
        img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80&fit=crop',
        testo: `Il cuore di Alba è Via Vittorio Emanuele II, chiamata dai locali "Via Maestra": un elegante corso porticato che attraversa il centro storico da un estremo all'altro. Qui si alternano boutique di moda, enoteche raffinate, pasticcerie storiche e ristoranti premiati.

Le torri medievali di Alba — un tempo erano cento, oggi ne restano una quindicina — punteggiano il cielo sopra i tetti in cotto, creando un profilo urbano unico. La Cattedrale di San Lorenzo, costruita in stile gotico-lombardo, domina la piazza principale ed è un capolavoro di architettura sacra. Gli affreschi interni, attribuiti a maestranze lombarde del XV secolo, sono di rara bellezza.`,
        tags: ['Architettura', 'Passeggiata', 'Storia'],
      },
      {
        titolo: 'La Fiera del Tartufo Bianco: Un Mese di Magia',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&fit=crop',
        testo: `Ogni anno, da ottobre a novembre, Alba ospita la Fiera Internazionale del Tartufo Bianco — la più importante al mondo. Il Tartufo Bianco d'Alba (Tuber magnatum Pico) è il più pregiato tra tutti i tartufi: il suo profumo intenso e inebriante, con note di miele, aglio e fieno, è assolutamente inconfondibile.

Durante la Fiera, il centro storico si trasforma in un palcoscenico gastronomico: banchi di trifolau che vendono i loro tesori, ristoranti che propongono menu speciali, degustazioni guidate e aste internazionali dove i tartufi più grandi vengono battuti a cifre da capogiro. Nel 2023, un esemplare da 850 grammi è stato venduto per oltre 100.000 euro.`,
        tags: ['Tartufo', 'Fiera', 'Autunno'],
      },
      {
        titolo: 'Barolo e Barbaresco: I Re dei Vini Italiani',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80&fit=crop',
        testo: `Alba è il cuore del territorio del Barolo e del Barbaresco, due vini rossi DOCG considerati tra i più grandi al mondo. Prodotti da uve Nebbiolo in purezza, si distinguono per la complessità aromatica, la struttura tannica imponente e una longevità straordinaria: i Barolo di grande annata possono invecchiare per 30-40 anni.

Le strade del Barolo — che si snodano tra Barolo, Castiglione Falletto, Serralunga d'Alba, La Morra e Verduno — offrono paesaggi di colline pettinate dai filari che sembrano quadri impressionisti. Ogni cantina ha la sua storia, la sua filosofia produttiva, la sua personalità. Una degustazione con vista sulle vigne è un'esperienza che rimane nella memoria per sempre.`,
        tags: ['Vino', 'Barolo', 'DOCG'],
      },
      {
        titolo: 'La Nocciola Piemonte IGP: Il Tesoro dei Boschi',
        img: 'https://images.unsplash.com/photo-1446825899151-5b6ba4a1f8a4?w=900&q=80&fit=crop',
        testo: `Le colline intorno ad Alba sono punteggiate di noccioli: la Nocciola Piemonte IGP (varietà Tonda Gentile delle Langhe) è considerata la migliore al mondo, e non è un caso che sia l'ingrediente segreto della Nutella di Ferrero, azienda nata proprio ad Alba nel 1946.

Il connubio tra nocciola e cioccolato fondente è il tema ricorrente della pasticceria albese. Non si può lasciare Alba senza una scatola di "gianduiotti", i tradizionali cioccolatini piemontesi dalla forma a barchetta rovesciata, o senza una Torta di nocciole da portare a casa. Le pasticcerie storiche del centro propongono una varietà di dolci alla nocciola che testimonia la profondità di questa tradizione.`,
        tags: ['Nocciola', 'Gastronomia', 'Tradizione'],
      },
      {
        titolo: 'I Murales di Alba: Arte Contemporanea tra i Vicoli',
        img: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=900&q=80&fit=crop',
        testo: `Negli ultimi anni, Alba ha aggiunto un altro strato alla sua identità culturale: un percorso di street art di altissima qualità. Numerosi artisti italiani e internazionali hanno trasformato muri, facciate e cortili del centro storico in gallerie a cielo aperto, creando un dialogo sorprendente tra contemporaneità e architettura medievale.

Il percorso si snoda per le vie del centro e può essere esplorato autonomamente con la mappa disponibile all'Ufficio Turistico. Alcune opere sono dedicate alla tradizione locale — il tartufo, le vigne, il Palio degli Asini — mentre altre sono libere interpretazioni artistiche che aggiungono colore e vitalità alla città.`,
        tags: ['Arte', 'Street Art', 'Cultura'],
      },
    ],
    infoPratiche: {
      come: 'In auto dall\'hotel: 15 minuti. In bici: percorso cicloturistico segnalato.',
      periodo: 'Tutto l\'anno. Ottobre-Novembre per la Fiera del Tartufo.',
      cosaDPortare: 'Appetite! E una borsa frigo per i prodotti da portare a casa.',
      ingressiPaganti: 'La maggior parte delle attrazioni è gratuita. Degustazioni in cantina: €15-30.',
    },
    linkInterni: [
      { label: 'Pacchetto Caccia al Tartufo', href: '/territorio/caccia-tartufo', icon: 'fa-search' },
      { label: 'Suite Deluxe — Il Massimo del Lusso', href: '/camere/suite', icon: 'fa-star' },
      { label: 'Wine Tour & Cantine con Sommelier', href: '/territorio', icon: 'fa-wine-bottle' },
    ],
    prev: 'asti',
    next: 'cattedrali-sotterranee',
  },

  {
    slug: 'cattedrali-sotterranee',
    nome: 'Cattedrali Sotterranee',
    sottotitolo: 'Il Mondo Segreto Sotto Canelli',
    categoria: 'Esperienza Unica',
    categoryIcon: 'fa-dungeon',
    distanzaDallHotel: '20 km dall\'hotel',
    tempoVisita: 'Mezza giornata',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85&fit=crop',
    tagline: 'Sotto le colline di Canelli si nasconde un patrimonio UNESCO unico al mondo: chilometri di cantine scavate nel tufo.',
    descrizioneBreve: 'Le Cattedrali Sotterranee di Canelli sono uno dei luoghi più affascinanti e meno conosciuti del Piemonte. Riconosciute dall\'UNESCO come parte del Paesaggio Vitivinicolo delle Langhe-Roero e Monferrato nel 2014, queste cantine storiche scavate nel tufo sono un viaggio nel tempo e nella storia della spumantistica italiana.',
    sezioni: [
      {
        titolo: 'Un Patrimonio UNESCO Sotto Terra',
        img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=900&q=80&fit=crop',
        testo: `Canelli, piccolo comune in provincia di Asti, è la patria dello spumante italiano. Fu qui che nel 1865 Carlo Gancia mise a punto il primo spumante italiano con il metodo classico, dando vita a una tradizione che avrebbe conquistato il mondo. Sotto la collina che ospita il castello medievale si aprono oltre 20 chilometri di gallerie scavate nel tufo, la roccia vulcanica porosa che regola naturalmente temperatura (12°C costanti) e umidità — condizioni perfette per la rifermentazione e l'affinamento dei vini spumanti.

L'UNESCO, nel riconoscere nel 2014 il Paesaggio Vitivinicolo del Piemonte come Patrimonio dell'Umanità, ha incluso esplicitamente le Cattedrali Sotterranee come elemento di straordinario valore culturale e storico.`,
        tags: ['UNESCO', 'Patrimonio', 'Storia'],
      },
      {
        titolo: 'L\'Architettura del Silenzio',
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop',
        testo: `Scendere nelle cantine di Canelli è come entrare in una navata di cattedrale: alti soffitti a volta, pilastri di tufo modellati dall'acqua e dal lavoro umano, luci soffuse che creano giochi d'ombra sulle file infinite di bottiglie disposte nelle riddling rack. Il silenzio è quasi totale, interrotto solo dal gocciolio dell'acqua e dal proprio respiro.

Le cantine più importanti visitabili sono quelle di Gancia, Contratto, Bosca e Coppo. Ognuna ha una personalità diversa: alcune sono essenziali e asciutte, altre sono arricchite da opere d'arte, anfore romane ritrovate durante gli scavi, e installazioni artistiche contemporanee che dialogano con la tradizione. Le gallerie si intrecciano e si sovrappongono su più livelli, creando un labirinto affascinante che ha ispirato scrittori e artisti.`,
        tags: ['Architettura', 'Cantine', 'Arte'],
      },
      {
        titolo: 'Alta Langa DOCG: Lo Spumante delle Eccellenze',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80&fit=crop',
        testo: `Nelle cantine di Canelli nasce l'Alta Langa DOCG, lo spumante piemontese di metodo classico prodotto con uve Pinot Nero e Chardonnay coltivate ad alta quota sulle colline delle Langhe. Con un minimo di 30 mesi sui lieviti (60 per la Riserva), è uno spumante di grande complessità e raffinatezza, capace di competere con i migliori Champagne francesi.

La degustazione nelle gallerie, al fresco naturale dei 12°C, con un calice che rispecchia il silenzio e la bellezza del luogo, è un'esperienza sensoriale che va ben oltre la semplice degustazione di vino: è una connessione profonda con la storia di un territorio.`,
        tags: ['Spumante', 'Degustazione', 'Alta Langa'],
      },
      {
        titolo: 'Come Organizzare la Visita',
        img: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=900&q=80&fit=crop',
        testo: `Le visite alle Cattedrali Sotterranee si prenotano direttamente presso le cantine. Le cantine Contratto (Via G.B. Giuliani, 56) e Gancia (Corso Libero Grassi, 1) offrono tour guidati in italiano, inglese e francese con orari fissi, incluso un momento di degustazione finale.

Si consiglia di portare un golfino o una giacca leggera: la temperatura costante di 12°C è piacevole in estate ma può sembrare fredda se si viene dal caldo. Le gallerie sono parzialmente illuminate ma l'ambiente è suggestivo: fotografi e appassionati di Instagram troveranno angoli straordinari. Il tour completo dura circa 90 minuti.`,
        tags: ['Info', 'Visita', 'Prenotazione'],
      },
    ],
    infoPratiche: {
      come: 'In auto dall\'hotel: 20 minuti. Parcheggio gratuito a Canelli.',
      periodo: 'Tutto l\'anno. Prenotazione consigliata in alta stagione.',
      cosaDPortare: 'Un golfino (12°C nelle gallerie). Fotocamera.',
      ingressiPaganti: 'Tour + degustazione: €15-25 a persona. Prenotare in anticipo.',
    },
    linkInterni: [
      { label: 'Wine Tour & Cantine con il Nostro Sommelier', href: '/territorio', icon: 'fa-wine-glass-alt' },
      { label: 'Fuga Romantica con Spa — Offerta Speciale', href: '/offerte/fuga-romantica', icon: 'fa-heart' },
      { label: 'Camera Standard — Soggiorna con Noi', href: '/camere/standard', icon: 'fa-bed' },
    ],
    prev: 'alba',
    next: 'caccia-tartufo',
  },

  {
    slug: 'caccia-tartufo',
    nome: 'La Caccia al Tartufo',
    sottotitolo: 'Un Rito Antico tra i Boschi del Monferrato',
    categoria: 'Esperienza Autentica',
    categoryIcon: 'fa-paw',
    distanzaDallHotel: 'Nei boschi intorno all\'hotel',
    tempoVisita: 'Mattina presto (3-4 ore)',
    img: 'https://images.unsplash.com/photo-1446825899151-5b6ba4a1f8a4?w=800&q=80&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1446825899151-5b6ba4a1f8a4?w=1800&q=85&fit=crop',
    tagline: 'Seguire un trifolau e il suo cane tra i boschi all\'alba è un\'emozione primordiale che connette con la terra delle Langhe.',
    descrizioneBreve: 'La caccia al tartufo nelle Langhe e nel Monferrato non è un\'attività turistica: è un rito antico, tramandato di padre in figlio, che ha plasticato la cultura e l\'identità di questo territorio. Partecipare con un trifolau — il cercatore di tartufi piemontese — è un\'esperienza autentica e indimenticabile.',
    sezioni: [
      {
        titolo: 'Il Trifolau: Il Guardiano di un Segreto Antico',
        img: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=900&q=80&fit=crop',
        testo: `Il trifolau è una figura mitica nel panorama culturale piemontese. Di solito uomo di mezza età o anziano, conosce ogni angolo dei boschi della sua zona, ogni albero sotto cui il tartufo bianco (Tuber magnatum Pico) o il più comune tartufo nero pregiato (Tuber melanosporum) tendono a crescere. I suoi segreti — i luoghi esatti della raccolta — vengono custoditi gelosamente e trasmessi solo ai figli o ai nipoti più fidati.

I trifolau escono quasi sempre all'alba, quando il terreno è umido di rugiada e i profumi del bosco si alzano nell'aria fresca del mattino. Escono soli o in coppia, seguiti sempre da uno o due cani addestrati appositamente. Il silenzio è fondamentale: i tartufi si "ascoltano" quasi quanto si cercano.`,
        tags: ['Tradizione', 'Cultura', 'Territorio'],
      },
      {
        titolo: 'Il Cane da Tartufo: L\'Inseparabile Compagno',
        img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=80&fit=crop',
        testo: `Il cane da tartufo non è una razza specifica ma un'attitudine, coltivata con anni di addestramento paziente. Le razze più utilizzate sono il Lagotto Romagnolo, il Bracco Italiano e i meticci locali, spesso nati in famiglie di trifolau e addestrati fin da cuccioli. Il legame tra il trifolau e il suo cane è assoluto: si guardano, si capiscono, comunicano con occhiate e gesti minimi affinati in anni di uscite insieme.

L'addestramento inizia quando il cucciolo ha pochi mesi: prima con palline intrise di profumo di tartufo, poi con tartufi veri nascosti nel terreno. Un cane ben addestrato è in grado di individuare tartufi sepolti fino a 50 centimetri di profondità, orientandosi con il fiuto in modo che gli esseri umani non potrebbero mai replicare. L'investimento in un buon cane da tartufo può superare i 5.000 euro.`,
        tags: ['Animali', 'Addestramento', 'Tradizione'],
      },
      {
        titolo: 'Quando Cercare: Le Stagioni del Tartufo',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&fit=crop',
        testo: `Il Tartufo Bianco d'Alba (Tuber magnatum Pico) è il re assoluto: disponibile esclusivamente da settembre a dicembre, è il più raro e costoso al mondo. Il suo profumo intenso e la consistenza vellutata lo rendono insostituibile su tajarin, uova al tegamino, fonduta e risotto. In stagione, il prezzo può raggiungere i 3.000-5.000 euro al chilogrammo.

Il Tartufo Nero Pregiato (Tuber melanosporum) si raccoglie da dicembre a marzo e ha un profumo più terroso e persistente, ottimo per salse, carpacci e condimenti. Il Tartufo d'Estate o Scorzone (Tuber aestivum) è presente da maggio a settembre, meno pregiato ma accessibile. Il Bianchetto (Tuber borchii) si trova invece tra gennaio e aprile, con un profumo pungente e caratteristico.`,
        tags: ['Stagioni', 'Tartufo Bianco', 'Info'],
      },
      {
        titolo: 'Partecipare alla Caccia: Come Funziona',
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop',
        testo: `Partecipare a una caccia al tartufo guidata è la maniera più autentica per vivere questa tradizione. L'esperienza inizia solitamente all'alba: si parte a piedi nel bosco con il trifolau e i suoi cani, camminando lentamente tra faggi, querce e tigli, mentre la luce del mattino filtra tra i rami. Quando il cane marca un punto, si assiste al momento magico dello scavo, con il trifolau che recupera delicatamente il tartufo con una paletta apposita.

Al termine della ricerca, ci si siede a tavola per una colazione o merenda rustica con prodotti locali. Alcuni pacchetti includono anche una degustazione dei tartufi trovati direttamente a tavola, conditi semplicemente con olio extravergine locale e pane di Langa. Noi organizziamo questa esperienza direttamente con trifolau locali: chiedete al nostro concierge per prenotare.`,
        tags: ['Esperienza', 'Prenotazione', 'Autentico'],
      },
    ],
    infoPratiche: {
      come: 'L\'esperienza parte direttamente dall\'hotel con guida locale.',
      periodo: 'Settembre-Dicembre per il tartufo bianco. Tutto l\'anno per altre varietà.',
      cosaDPortare: 'Scarpe da trekking, abbigliamento caldo a strati, macchina fotografica.',
      ingressiPaganti: 'Esperienza guidata: €50-80 a persona. Include colazione rustica.',
    },
    linkInterni: [
      { label: 'Prenota la Caccia al Tartufo — Contattaci', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Pacchetto "Scopri le Langhe in 3 Notti"', href: '/offerte/scopri-le-langhe', icon: 'fa-tag' },
      { label: 'Suite Deluxe — Con Cena Gourmet al Tartufo', href: '/camere/suite', icon: 'fa-star' },
    ],
    prev: 'cattedrali-sotterranee',
    next: 'castelli-monferrato',
  },

  {
    slug: 'castelli-monferrato',
    nome: 'I Castelli del Monferrato',
    sottotitolo: 'Cavalieri, Vigneti e Panorami Mozzafiato',
    categoria: 'Percorso Storico',
    categoryIcon: 'fa-chess-rook',
    distanzaDallHotel: '10-40 km dall\'hotel',
    tempoVisita: 'Una giornata intera',
    img: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1800&q=85&fit=crop',
    tagline: 'Il Monferrato è punteggiato di castelli medievali che emergono dai vigneti come giganti di pietra addormentati.',
    descrizioneBreve: 'Nessuna altra provincia italiana concentra tanti castelli in così poca distanza. Il Monferrato e le Langhe ospitano oltre 150 tra castelli, rocche e torri medievali, molti dei quali visitabili o adibiti a cantine, agriturismi e resort di lusso. Un itinerario tra i castelli è un viaggio visuale e storico attraverso secoli di storia piemontese.',
    sezioni: [
      {
        titolo: 'Castello di Grinzane Cavour: Il Più Amato delle Langhe',
        img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80&fit=crop',
        testo: `Il Castello di Grinzane Cavour, a 6 km da Alba, è uno dei castelli più visitati del Piemonte e patrimonio UNESCO dal 2014. Camillo Benso, Conte di Cavour — il padre del Risorgimento italiano — fu sindaco del comune di Grinzane per 17 anni e qui visse a lungo, contribuendo alla modernizzazione della viticoltura locale e alla diffusione internazionale del Barolo.

Il castello ospita oggi il Museo Etnografico e del Vino delle Langhe (con una straordinaria collezione di attrezzi per la viticoltura del XIX secolo) e una prestigiosa cantina dove vengono prodotti alcuni dei migliori Barolo della zona. Ogni anno, in autunno, il castello è teatro dell'asta del Tartufo Bianco — l'asta di tartufi più famosa e seguita al mondo, con acquirenti da ogni continente.`,
        tags: ['UNESCO', 'Cavour', 'Museo'],
      },
      {
        titolo: 'Castello di Uviglie: Il Vino nella Rocca',
        img: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=900&q=80&fit=crop',
        testo: `Il Castello di Uviglie, nel comune di Rosignano Monferrato, è uno degli esempi più affascinanti di castello trasformato in azienda vitivinicola. Costruito nel XII secolo come fortezza difensiva, oggi produce il Grignolino del Monferrato Casalese — un vino rosso leggero, elegante e profumatissimo, considerato tra i più peculiari del panorama piemontese.

La visita al castello include i saloni storici con affreschi e arredi originali, le cantine nella rocca e una degustazione di vini aziendali. Il punto panoramico sulle colline del Monferrato è uno dei migliori della zona: in giornate limpide si vede fino alle Alpi.`,
        tags: ['Vino', 'Panorama', 'Degustazione'],
      },
      {
        titolo: 'Castello di Camino: Il Monumento Vivente',
        img: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=900&q=80&fit=crop',
        testo: `Il Castello di Camino è una delle residenze storiche più importanti del Monferrato. Abitato ininterrottamente dalla stessa famiglia — i Marchesi Gozani di Treville — da oltre quattrocento anni, è un monumento vivente alla continuità storica e all'attaccamento al territorio. L'attuale proprietario, il Marchese Antonio Gozani, organizza personalmente visite guidate nelle sale del castello, raccontando secoli di storia con la competenza e la passione di chi quella storia la porta nel proprio DNA.

Il castello custodisce collezioni di armature, dipinti fiamminghi, mobili d'epoca e una biblioteca storica di straordinario valore. Il parco romantico, con cedri del Libano centenari e sentieri nascosti, è una delle rarità botaniche del Piemonte.`,
        tags: ['Residenza Storica', 'Arte', 'Visita Guidata'],
      },
      {
        titolo: 'Castello di Serralunga d\'Alba: La Fortezza dei Barolo',
        img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80&fit=crop',
        testo: `Il Castello di Serralunga d'Alba è tra i castelli medievali meglio conservati di tutto il Piemonte. Costruito dai Falletti nel XIV secolo in forme di castello a motta — con una sola torre cilindrica posta su un poggio artificiale — è uno dei rari esempi di castello-residenza del periodo visconteo-angioino ancora intatti.

Dall'alto della torre si gode una delle viste più belle sulle Langhe: le colline dei Barolo si stendono fino all'orizzonte, alternate ai vigneti di Nebbiolo, Dolcetto e Barbera che hanno reso questo territorio famoso nel mondo. La visita guidata dura circa un'ora e include tutte le sale storiche, compresi il camino monumentale della sala dei cavalieri e i sotterranei.`,
        tags: ['Medievale', 'Barolo', 'Panorama'],
      },
    ],
    infoPratiche: {
      come: 'Percorso in auto: si possono visitare 2-3 castelli in una giornata. Tour organizzato disponibile.',
      periodo: 'Aprile-Ottobre. Verificare apertura singoli castelli (alcuni chiusi in inverno).',
      cosaDPortare: 'Scarpe comode, documento d\'identità per alcuni ingressi, macchina fotografica.',
      ingressiPaganti: 'Variable: €5-12 a persona. Alcuni includono degustazione.',
    },
    linkInterni: [
      { label: 'Tour dei Castelli con Transfer Privato', href: '/contatti', icon: 'fa-car' },
      { label: 'Scopri le Langhe in 3 Notti — Pacchetto', href: '/offerte/scopri-le-langhe', icon: 'fa-tag' },
      { label: 'Camera Tripla o Quadrupla — Viaggiate in Gruppo', href: '/camere/tripla', icon: 'fa-users' },
    ],
    prev: 'caccia-tartufo',
    next: 'big-bench',
  },

  {
    slug: 'big-bench',
    nome: 'Le Big Bench',
    sottotitolo: 'Il Mondo Visto da una Panchina Gigante',
    categoria: 'Esperienza Iconica',
    categoryIcon: 'fa-image',
    distanzaDallHotel: '5-35 km dall\'hotel',
    tempoVisita: 'Mezza giornata o itinerario di un giorno',
    img: 'https://images.unsplash.com/photo-1506361797048-46a149213205?w=800&q=80&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1506361797048-46a149213205?w=1800&q=85&fit=crop',
    tagline: 'Le Grandi Panchine Colorate di Chris Bangle sono diventate un simbolo del Piemonte nel mondo: semplici, giocose, e con viste indimenticabili.',
    descrizioneBreve: 'Le Big Bench Community Project nasce da un\'idea del designer americano Chris Bangle, che nel 2010 posizionò una grande panchina rossa sul suo terreno a Clavesana, nelle Langhe. Quella panchina gigante — 6 volte più grande di una normale — è diventata un fenomeno globale: oggi ne esistono oltre 100 in tutto il Piemonte e centinaia nel resto d\'Italia e del mondo.',
    sezioni: [
      {
        titolo: 'L\'Idea di Chris Bangle: Design che Trasforma il Paesaggio',
        img: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=900&q=80&fit=crop',
        testo: `Chris Bangle è uno dei designer automobilistici più influenti del XX secolo: è l'uomo che ha rivoluzionato l'estetica di BMW tra il 1992 e il 2009, progettando modelli iconici come la Serie 7, la Serie 5 E60 e la Z4. Dopo aver lasciato BMW, Bangle si è trasferito con la famiglia nelle Langhe, innamorato di questa terra.

Nel 2010, sul suo terreno di Clavesana, ha costruito e posizionato una panchina di legno rossa, grande 6 volte rispetto alla norma, di fronte a una vista straordinaria sulle colline. L'idea era semplice: sedersi su quella panchina fa sentire di nuovo bambini, ridimensiona la prospettiva umana rispetto al paesaggio, e crea un momento di gioia genuina. Fotografata da migliaia di persone e condivisa sui social, quella panchina ha cambiato la percezione turistica di un intero territorio.`,
        tags: ['Design', 'Origini', 'Chris Bangle'],
      },
      {
        titolo: 'Le Big Bench delle Langhe e del Monferrato',
        img: 'https://images.unsplash.com/photo-1506361797048-46a149213205?w=900&q=80&fit=crop',
        testo: `Oggi le Big Bench nel territorio delle Langhe e del Monferrato sono oltre 30, ognuna in una posizione diversa, ognuna con una vista unica. Sono distribuite tra le colline del Barolo (panchine a La Morra, Castiglione Falletto, Serralunga d'Alba), del Moscato (Santo Stefano Belbo, Canelli, Castiglione Tinella) e del Monferrato (Grazzano Badoglio, Portacomaro).

Ogni panchina ha un colore diverso — rosso, giallo, verde, blu, arancione, viola — e spesso il colore è scelto per richiamare qualcosa di specifico del territorio: il rosso del Barolo, il giallo dei boschi in autunno, il bianco della neve sulle Alpi in lontananza. Molte panchine sono posizionate su terreni privati, in accordo con il Big Bench Community Project, e sono raggiungibili a piedi da un parcheggio nelle vicinanze.`,
        tags: ['Langhe', 'Monferrato', 'Itinerario'],
      },
      {
        titolo: 'L\'Itinerario delle Big Bench: Una Giornata Speciale',
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop',
        testo: `Costruire un itinerario delle Big Bench è un modo originale e allegro di scoprire le Langhe. Si possono visitare 4-5 panchine in una giornata, alternando la guida a brevi camminate nei vigneti. La mappa completa delle Big Bench è disponibile sul sito ufficiale bigbenchcommunityproject.org e sull'app dedicata.

La Big Bench più fotografata e visitata rimane quella rossa originale di Clavesana, con vista sulla Valle del Tanaro. Ma quelle di Monteu Roero, affacciate sui calanchi del Roero, e quelle di Mango, con vista sul castello e sui vigneti del Moscato, sono altrettanto spettacolari. In autunno, quando le vigne si tingono di rosso e arancione, le fotografie che si scattano sono di una bellezza assoluta.`,
        tags: ['Itinerario', 'Fotografia', 'Autunno'],
      },
      {
        titolo: 'Perché Tutti Se ne Innamorano',
        img: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=900&q=80&fit=crop',
        testo: `Il fenomeno delle Big Bench funziona perché tocca qualcosa di universale: il senso di meraviglia dell'infanzia, il piacere di sentirsi piccoli di fronte alla grandezza del paesaggio, il gioco collettivo del fotografarsi. Non c'è barriera linguistica, non servono spiegazioni culturali — si sale sulla panchina e si sorride. Fine.

Sono anche un potente strumento di marketing territoriale: migliaia di foto geo-taggate condivise ogni anno sui social portano visibilità globale alle Langhe e al Monferrato, convincendo persone dall'altra parte del mondo che queste colline meritano un viaggio. Il progetto di Chris Bangle ha dimostrato che il design, applicato con intelligenza al paesaggio, può trasformare un territorio in una destinazione iconica.`,
        tags: ['Turismo', 'Social', 'Marketing'],
      },
    ],
    infoPratiche: {
      come: 'In auto: mappa disponibile su bigbenchcommunityproject.org. Alcune raggiungibili in bicicletta.',
      periodo: 'Tutto l\'anno. Settembre-Novembre per colori autunnali straordinari.',
      cosaDPortare: 'Scarpe comode, smartphone carico, voglia di sorridere!',
      ingressiPaganti: 'Tutte gratuite e aperte al pubblico.',
    },
    linkInterni: [
      { label: 'Camera Family — Portate i Bambini!', href: '/camere/family', icon: 'fa-child' },
      { label: 'E-Bike Tour delle Langhe — Chiedici', href: '/contatti', icon: 'fa-bicycle' },
      { label: 'Pacchetto Weekend — 2 Notti e Big Bench', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'castelli-monferrato',
    next: null,
  },
];

export function getGuideBySlug(slug) {
  return guide.find((g) => g.slug === slug) || null;
}

export function getAllGuideSlugs() {
  return guide.map((g) => ({ slug: g.slug }));
}
