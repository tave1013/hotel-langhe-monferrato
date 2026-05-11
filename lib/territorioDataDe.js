// ================================================================
// lib/territorioDataDe.js
// Deutsche Version der Territory Mini-Guides
// ================================================================

export const guideDe = [
  {
    slug: 'asti',
    nome: 'Asti',
    sottotitolo: 'Vollständiger Reiseführer zur Stadt der großen Weine',
    categoria: 'Kunststadt',
    categoryIcon: 'fa-landmark',
    distanzaDallHotel: '8 km vom Hotel',
    tempoVisita: 'Halber oder ganzer Tag',
    img: '/foto/Asti.webp',
    heroImg: '/foto/Asti.webp',
    tagline:
      'Was man in Asti sehen, wo man essen, welche Weingüter besuchen und wann man hinreisen sollte: ein vollständiger Reiseführer zur Stadt mit dem ältesten Palio Italiens.',
    descrizioneBreve:
      'Asti ist eine der reichsten und vielschichtigsten Städte Piemonts. Als römische Gründung und später mächtige mittelalterliche Gemeinde ist sie heute ein lebhaftes Reiseziel, in dem die Palio-Tradition und bedeutende DOCG-Weine auf eine authentische Gastronomie treffen. Von Costigliole d\'Asti aus erreicht man die Stadt in unter 10 Minuten.',
    sezioni: [
      {
        titolo: 'Ein bisschen Geschichte: von Hasta Pompeia bis zum Palio',
        testo: `Asti wurde von den Römern zwischen dem 2. und 1. Jahrhundert v. Chr. unter dem Namen Hasta Pompeia gegründet, wahrscheinlich zu Ehren des Konsuls Gnaeus Pompeius Strabo. Eindeutige Spuren des römischen Asti sind noch heute zu sehen: die Domus Romana mit originalen Bodenmosaiken, die Krypta von Sant'Anastasio und der Rote Turm, das älteste Denkmal der Stadt.

Im Mittelalter wurde Asti zu einer der mächtigsten Kommunen Piemonts. Adelige Familien errichteten über hundert Türme als Machtsymbole – rund zwanzig davon sind noch heute im historischen Zentrum zu sehen. Der Palio von Asti, erstmals 1275 urkundlich erwähnt, ist in schriftlichen Quellen älter als der berühmte Palio von Siena. Vittorio Alfieri, einer der bedeutendsten italienischen Dramatiker des 18. Jahrhunderts, wurde 1749 in Asti geboren.`,
        lista: [
          'Römische Ursprünge und die Gründung von Hasta Pompeia',
          'Mittelalterlicher Aufstieg: die Stadt der hundert Türme',
          'Der Palio von Asti: 750 Jahre ununterbrochene Tradition',
          'Vittorio Alfieri: Dramatiker und europäischer Intellektueller',
        ],
        links: [
          { label: 'Roter Turm, Google Maps', href: 'https://maps.google.com/?q=Torre+Rossa+Asti' },
          { label: 'Palazzo Alfieri und Alfieri-Museum, Google Maps', href: 'https://maps.google.com/?q=Palazzo+Alfieri+Asti' },
        ],
        tags: ['Geschichte von Asti', 'Hasta Pompeia', 'Mittelalterlicher Palio'],
      },
      {
        titolo: 'Was man in Asti sehen sollte: 10 Orte, die man nicht verpassen darf',
        img: '/foto/asti-monumenti.webp',
        testo: `Das historische Zentrum von Asti ist kompakt und lässt sich in wenigen Stunden zu Fuß erkunden. Wenn Sie Asti an einem Tag besichtigen möchten, beginnen Sie am Piazza Alfieri und spazieren Sie entlang des Corso Vittorio Alfieri durch Arkaden, mittelalterliche Türme und Adelspaläste. Für die Museen lohnt sich das Smart Ticket (10 Euro, Zugang zu 7 Standorten).

Wenn Sie bei uns übernachten, können Sie Asti in Ihrem eigenen Tempo erkunden und ohne Eile ins Hotel zurückkehren.`,
        dettagli: [
          {
            titolo: 'Kathedrale Santa Maria Assunta',
            testo:
              'Die größte Kathedrale Piemonts: über 80 Meter lang, aus rotem Backstein und Sandstein erbaut. Zwischen dem 11. und 14. Jahrhundert errichtet, ist sie ein herausragendes Beispiel piemontesisch-lombardischer Gotik mit Fresken aus dem 14. Jahrhundert, einem Polyptychon von Gandolfino da Roreto und einem geschnitzten Holzchor aus dem 15. Jahrhundert.',
            href: 'https://maps.google.com/?q=Cattedrale+Santa+Maria+Assunta+Asti',
            linkLabel: 'Kathedrale Santa Maria Assunta, Google Maps',
          },
          {
            titolo: 'Torre Troyana (Uhrenturm)',
            testo:
              'Das markanteste Wahrzeichen Astis: 44 Meter hoch, 199 Stufen bis zu einem 360°-Panoramablick über die Altstadt, die Hügel des Monferrato und den Alpenbogen. Im 13. Jahrhundert von der Familie Troya erbaut, beherbergt er heute die Glocke von 1531, eine der ältesten noch funktionierenden Glocken Piemonts.',
            href: 'https://maps.google.com/?q=Torre+Troyana+Asti',
            linkLabel: 'Torre Troyana, Google Maps',
          },
          {
            titolo: 'Stiftskirche San Secondo',
            testo:
              'Eine der ältesten gotischen Kirchen der Stadt, dem Schutzpatron Astis geweiht. Zwischen Mitte des 13. Jahrhunderts und 1462 an der Stelle errichtet, wo der heilige Secondo im 2. Jahrhundert das Martyrium erlitt. Sie bewahrt eine Krypta aus dem 6.–7. Jahrhundert mit einem silbernen Reliquiar aus dem 16. Jahrhundert.',
            href: 'https://maps.google.com/?q=Collegiata+San+Secondo+Asti',
            linkLabel: 'Stiftskirche San Secondo, Google Maps',
          },
          {
            titolo: 'Roter Turm',
            testo:
              'Das älteste Denkmal Astis: Seine 16-seitige kreisförmige Gestalt stammt aus dem 1. Jahrhundert n. Chr., als er Teil des römischen Stadttors war. Seinen Namen verdankt er der warmen Farbe der ursprünglichen römischen Backsteine – ein Fragment des Kaiserreichs, das zwei Jahrtausende überdauert hat.',
            href: 'https://maps.google.com/?q=Torre+Rossa+Asti',
            linkLabel: 'Roter Turm, Google Maps',
          },
          {
            titolo: 'Palazzo Alfieri und Alfieri-Museum',
            testo:
              'Der barocke Palast, in dem der Dramatiker Vittorio Alfieri 1749 geboren wurde. Heute beherbergt er ein Museum mit Manuskripten, seltenen Ausgaben seiner Tragödien, persönlichen Gegenständen und Dokumenten, die den Lebensweg eines bemerkenswert modernen europäischen Intellektuellen nachzeichnen.',
            href: 'https://maps.google.com/?q=Palazzo+Alfieri+Asti',
            linkLabel: 'Palazzo Alfieri, Google Maps',
          },
          {
            titolo: 'Palazzo Mazzetti und Stadtmuseum',
            testo:
              'Das wichtigste Stadtmuseum Astis in einem der schönsten Barockgebäude der Stadt. Im Inneren: freskierte Säle, städtische Kunstsammlungen mit Gemälden der piemontesischen Schule und archäologische Funde. Hauptverkaufsstelle für das Smart Ticket der Stadtmuseen.',
            href: 'https://maps.google.com/?q=Palazzo+Mazzetti+Asti',
            linkLabel: 'Palazzo Mazzetti, Google Maps',
          },
          {
            titolo: 'Krypta Sant\'Anastasio und Domus Romana',
            testo:
              'Für das Verständnis der historischen Schichten Astis: Die Krypta ist eine teilweise unterirdische romanische Kirche mit mittelalterlichen Säulen und Kapitellen. Die Domus Romana zeigt Überreste eines Patrizierhauses aus der Kaiserzeit mit originalen Bodenmosaiken in situ.',
            href: 'https://maps.google.com/?q=Cripta+Sant+Anastasio+Asti',
            linkLabel: 'Krypta Sant\'Anastasio, Google Maps',
          },
          {
            titolo: 'Komplex San Pietro in Consavia',
            testo:
              'Einer der weniger bekannten, aber faszinierendsten Orte Astis. Im 12. Jahrhundert erbaut, umfasst er eine Rundkirche nach dem Vorbild des Heiligen Grabes in Jerusalem (eine in Piemont sehr seltene Form), die Kapelle Valperga und einen Kreuzgang aus dem 15. Jahrhundert.',
            href: 'https://maps.google.com/?q=Complesso+San+Pietro+Consavia+Asti',
            linkLabel: 'San Pietro in Consavia, Google Maps',
          },
          {
            titolo: 'Piazza Alfieri',
            testo:
              'Der Hauptplatz von Asti mit Arkaden aus dem 18. Jahrhundert und einem zentralen Brunnen. Er ist das gesellschaftliche Herz der Stadt: Wochenmarkt, Veranstaltungen und Aperitifs. Im September verwandelt er sich in die Arena des historischen Palio.',
            href: 'https://maps.google.com/?q=Piazza+Alfieri+Asti',
            linkLabel: 'Piazza Alfieri, Google Maps',
          },
          {
            titolo: 'Corso Vittorio Alfieri',
            testo:
              'Das Rückgrat des historischen Zentrums: eine Fußgängerachse, die die Stadt vom Roten Turm bis zur Torre Troyana durchzieht. Etwas mehr als ein Kilometer mit tausend Jahren Stadtgeschichte, Adelspalästen aus dem 17.–18. Jahrhundert, Backsteinturm, Traditionskaféés und dem täglichen Flanierweg der Astigiani.',
            href: 'https://maps.google.com/?q=Corso+Vittorio+Alfieri+Asti',
            linkLabel: 'Corso Vittorio Alfieri, Google Maps',
          },
        ],
        tags: ['Was man in Asti sehen sollte', 'Historisches Zentrum Asti', 'Mittelalterliche Türme'],
      },
      {
        titolo: 'Weine aus Asti: 700 Jahre Weingeschichte',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80&fit=crop',
        testo: `Asti ist weltweit ein Synonym für Wein. 1865 kreierte Carlo Gancia in Canelli den ersten italienischen Schaumwein und wandte dabei in der Champagne erlernte Techniken auf lokale Moscato-Trauben an. Im 20. Jahrhundert verfeinerte Federico Martinotti das Martinotti-Verfahren (auch Charmat-Methode) zur schnelleren Schaumweinherstellung. 2014 wurde die Weinlandschaft von Langhe, Roero und Monferrato zum UNESCO-Welterbe ernannt.

Heute produziert die Region Asti einige der bekanntesten DOCG-Weine Italiens: Barbera d'Asti, Asti Spumante, Moscato d'Asti, Grignolino d'Asti und Ruché di Castagnole Monferrato. Für einen vollständigen Weinurlaub übernachten Sie bei uns – wir helfen Ihnen, maßgeschneiderte Touren und Verkostungen zu organisieren.`,
        lista: [
          'Barbera d\'Asti DOCG: der Seelenwein der Region Asti',
          'Asti Spumante DOCG: der meistexportierte süße Schaumwein der Welt',
          'Moscato d\'Asti DOCG: aromatisch, zart, 5,5 % Alkohol',
          'Grignolino d\'Asti DOC: diskrete Eleganz und feine Tannine',
          'Ruché di Castagnole Monferrato DOCG: der seltenste Wein Piemonts',
        ],
        tags: ['Weine aus Asti', 'Barbera DOCG', 'Moscato DOCG'],
      },
      {
        titolo: 'Weingüter rund um Asti besuchen',
        img: '/foto/coppo-cantine-canelli-piemonte.webp',
        testo: `Weingüter in der Region Asti bieten authentische Erlebnisse inmitten von Weinbergen, Schlössern und historischen Kellern. Die meisten erfordern eine Reservierung einige Tage im Voraus. Viele bieten auch Mittagessen oder Weinsnacks an.

Wenn Sie eine Weinroute zwischen Asti, Canelli und dem Monferrato planen möchten, können wir Ihnen bei Buchungen und Transfers von unserem Hotel aus helfen.`,
        dettagli: [
          {
            titolo: 'Tenuta Montemagno',
            testo:
              'Ein historisches Weingut in den Hügeln des Monferrato, überragt vom mittelalterlichen Schloss Montemagno. Es bietet geführte Verkostungen, Unterkunft im Relais und außergewöhnliche Panoramablicke. Produziert Barbera d\'Asti, Grignolino und Moscato.',
            href: 'https://maps.google.com/?q=Tenuta+Montemagno+Asti',
            linkLabel: 'Tenuta Montemagno, Google Maps',
          },
          {
            titolo: 'Cantine Coppo, Canelli',
            testo:
              'Historisches Weingut in Canelli, seit 1892 aktiv. Bekannt für Barbera Camp du Rouss und Moscato d\'Asti. Die historischen unterirdischen Keller von Canelli (UNESCO) sind teilweise besichtigbar: ein doppeltes Erlebnis aus Wein und unterirdischer Architektur.',
            href: 'https://maps.google.com/?q=Cantine+Coppo+Canelli',
            linkLabel: 'Cantine Coppo, Google Maps',
          },
          {
            titolo: 'Gancia, Canelli',
            testo:
              'Das Weingut, in dem Carlo Gancia 1865 den ersten italienischen Schaumwein kreierte. Ein Schlüsselort der Weingeschichte. Die historischen unterirdischen Keller von Gancia sind Teil des UNESCO-Systems der Unterirdischen Kathedralen von Canelli (seit 2014).',
            href: 'https://maps.google.com/?q=Gancia+Canelli',
            linkLabel: 'Gancia, Google Maps',
          },
        ],
        tags: ['Weingüter bei Asti', 'Monferrato Weintour', 'Barbera Verkostungen'],
      },
      {
        titolo: 'Wo man in Asti essen kann: empfohlene Restaurants',
        testo: `Die Küche Astis ist deftig, ehrlich und tief in der lokalen Tradition verwurzelt. Reservierungen im Voraus sind besonders an Wochenenden und während des Palio unerlässlich.

Wenn Sie ein kulinarisches Wochenende zwischen Asti und der Umgebung planen, übernachten Sie bei uns und kombinieren Sie Michelin-Küche, historische Tavernen und Weinguts-Verkostungen.`,
        dettagli: [
          {
            titolo: 'Trattoria Astigiana',
            testo:
              'Ein historischer Name in der piemontesischen Gastronomie. Agnolotti del plin, gemischtes Siedfleisch, Tajarin mit Ragù, Bonet und Haselnusskuchen. Menüs zwischen 40 und 50 Euro, mit einem Weinkeller voller Weine aus Asti und den Langhe.',
            href: 'https://maps.google.com/?q=Trattoria+Astigiana+Asti',
            linkLabel: 'Trattoria Astigiana, Google Maps',
          },
          {
            titolo: 'Osteria del Palio',
            testo:
              'Nur wenige Schritte vom Piazza Alfieri entfernt. Atmosphäre eines alten Landgasthofs, mit Küche aus lokalen Zutaten: Tajarin, Rindfleisch in Barbera geschmort, Hügelkäse und traditionelle Desserts. Hervorragende lokale Weinkarte.',
            href: 'https://maps.google.com/?q=Osteria+del+Palio+Asti',
            linkLabel: 'Osteria del Palio, Google Maps',
          },
          {
            titolo: 'Tacabanda',
            testo:
              'Ein Restaurant, das zur lokalen Referenz in Asti geworden ist. Das Team beschäftigt Menschen mit Behinderungen in einem Projekt, das Küche und soziale Werte verbindet. Saisonale Speisekarte aus kurzen Lieferketten: Fassona-Rind, Tajarin mit Butter und Trüffel, gekochter Kaninchensalami mit Thunfischsauce.',
            href: 'https://maps.google.com/?q=Tacabanda+Asti',
            linkLabel: 'Tacabanda, Google Maps',
          },
        ],
        tags: ['Wo man in Asti isst', 'Restaurants in Asti', 'Piemontesische Küche'],
      },
      {
        titolo: 'Was man in Asti essen sollte: typische Gerichte',
        img: '/foto/brasato.webp',
        testo: `Die Küche Astis hat eine tiefe und unverwechselbare kulinarische Tradition. Wenn Sie eine kulinarische Tour in Asti planen, sind dies die Aromen, die Sie unbedingt probieren sollten.`,
        lista: [
          'Agnolotti del plin: handgekneifene gefüllte frische Pasta',
          'Tajarin mit 40 Eigelb: hauchdünne Eiernudeln',
          'Rindfleisch in Barbera geschmort: Fassona-Fleisch langsam im Wein gegart',
          'Rohes Hackfleisch vom Messer: handgehacktes Rinderfilet',
          'Bonet: Schokoladen- und Amaretti-Pudding',
          'Haselnusskuchen mit Tonda Gentile (Piemont PGI)',
          'Merenda sinoira: großzügiger piemontesischer Aperitifsnack',
        ],
        tags: ['Typische Gerichte aus Asti', 'Küche des Monferrato', 'Piemont Essen und Wein'],
      },
      {
        titolo: 'Wie man von Costigliole d\'Asti nach Asti kommt',
        testo: `Asti liegt nur 8 km von Costigliole d'Asti entfernt: mit dem Auto dauert die Fahrt etwa 10 Minuten. Das historische Zentrum hat ZTL-Beschränkungszonen, daher empfiehlt es sich, in umliegenden Bereichen zu parken (Piazza Alfieri, kostenloser Parkplatz) und zu Fuß weiterzugehen.

Für ein entspanntes Wochenende im Monferrato übernachten Sie bei uns und besuchen Sie Asti, Alba, Canelli und Nizza Monferrato in einfachen Tagesetappen.`,
        lista: [
          'Mit dem Auto: SP456 Richtung Asti, ca. 10 Minuten',
          'Mit dem Zug: Bahnverbindung mit schneller Verbindung',
          'Mit dem Fahrrad: flache Route entlang des Tanaro, ca. 35 Minuten',
        ],
        links: [
          { label: 'Route Costigliole d\'Asti → Asti, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Asti' },
        ],
        tags: ['Wie man nach Asti kommt', 'Parken in Asti', 'Wochenende im Monferrato'],
      },
      {
        titolo: 'Wann man Asti besuchen sollte: Jahreszeiten und Tipps',
        testo: `Asti ist das ganze Jahr über perfekt. Herbst ist die Hauptsaison: Ernte, Palio, Douja d'Or und die Farben der Weinberge. Aber auch Frühling (weniger überfüllt), Sommer (Aperitifs unter Arkaden) und Winter (intime Atmosphäre) haben ihren Reiz.

Wenn Sie den Palio erleben möchten, buchen Sie Ihren Aufenthalt weit im Voraus: Der dritte Sonntag im September ist das meisterwartete Ereignis des Jahres.`,
        lista: [
          'Frühling: mildes Wetter, wenig Trubel, entspanntes Tempo',
          'Sommer: beschatteter Corso Alfieri, Platzaperitifs, Kulturveranstaltungen',
          'Herbst: Palio, Douja d\'Or, Ernte, außergewöhnliche Farben',
          'Winter: ruhige Atmosphäre, Weihnachtsmärkte, offene Weinkeller',
          'Smart Ticket €10 für 7 Museen: lohnenswert ab 3 Besuchen',
        ],
        tags: ['Wann nach Asti', 'Palio di Asti', 'Reisetipps Asti'],
      },
    ],
    infoPratiche: {
      come: 'Vom Hotel nach Asti: ca. 10 Minuten mit dem Auto (8 km). Historisches Zentrum zu Fuß erkundbar.',
      periodo: 'Ganzjährig. Hochsaison: September (Palio), Ende August (Douja d\'Or).',
      cosaDPortare: 'Bequeme Schuhe, Smart Ticket für Museen, Restaurant-/Weingutsreservierungen.',
      ingressiPaganti: 'Smart Ticket €10 für 7 Museumsstandorte. Torre Troyana inbegriffen.',
    },
    linkInterni: [
      { label: 'Buchen Sie Ihren Aufenthalt im Monferrato', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Kontaktieren Sie uns für eine Asti + Weingüter-Route', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Entdecken Sie unsere Wein- & Genussangebote', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: null,
    next: 'alba',
  },

  {
    slug: 'alba',
    nome: 'Alba',
    sottotitolo: 'Vollständiger Reiseführer zur Stadt der hundert Türme',
    categoria: 'Genussstadt',
    categoryIcon: 'fa-utensils',
    distanzaDallHotel: '15 km vom Hotel',
    tempoVisita: 'Ein ganzer Tag',
    img: '/foto/alba-italia.webp',
    heroImg: '/foto/alba-italia.webp',
    tagline:
      'Was man in Alba sehen, wo man essen, welche Weingüter besuchen und wann man hinreisen sollte: ein praktischer und vollständiger Reiseführer zum Herzen der Langhe.',
    descrizioneBreve:
      'Alba ist die Hauptstadt der Langhe und eines der besten kulinarischen Reiseziele Piemonts. In diesem Reiseführer finden Sie Geschichte, die wichtigsten Sehenswürdigkeiten im historischen Zentrum, Weingüter in der Nähe, empfohlene Restaurants, lokale Weine, praktische Tipps und sofort abrufbare Google Maps-Links. Wenn Sie die Stadt in Ruhe genießen möchten, ist unser Hotel die ideale Basis für einen Aufenthalt zwischen Alba, Barolo und dem Monferrato.',
    sezioni: [
      {
        titolo: 'Ein bisschen Geschichte: von Alba Pompeia bis zur UNESCO-Stadt',
        testo: `Albas Ursprünge reichen bis in die Jungsteinzeit zurück, doch mit den Römern wurde es zu Alba Pompeia, einem strategischen Zentrum an antiken piemontesischen Handelsrouten. Unter dem historischen Zentrum sind noch heute das Forum, das Theater und Überreste der römischen Stadt über die Route Alba Sotterranea zu besichtigen.

Im Mittelalter wurde Alba zur "Stadt der hundert Türme", einem Symbol adeliger Familienmacht. Im 20. Jahrhundert erlebte die Stadt ein entscheidendes Kapitel mit dem partisanischen Widerstand, den Beppe Fenoglio beschrieben hat. Heute ist Alba auch ein Symbol der italienischen Esskultur: UNESCO für Weinlandschaften (2014) und UNESCO Creative City of Gastronomy (2017).`,
        lista: [
          'Vorgeschichtliche Ursprünge und römische Gründung als Alba Pompeia',
          'Mittelalterliche Türme und Handelswachstum zwischen Langhe und Ligurien',
          'Widerstand 1944 und kulturelle Identität der Stadt',
          'UNESCO-Anerkennungen für Wein und Landschaft',
        ],
        links: [
          { label: 'Alba Sotterranea, Google Maps', href: 'https://maps.google.com/?q=Alba+Sotterranea+Alba' },
          { label: 'Städtisches Museum Federico Eusebio, Google Maps', href: 'https://maps.google.com/?q=Museo+Federico+Eusebio+Alba' },
        ],
        tags: ['Geschichte von Alba', 'Alba Pompeia', 'UNESCO'],
      },
      {
        titolo: 'Was man in Alba sehen sollte: 10 Stationen im historischen Zentrum',
        img: '/foto/alba-italia.webp',
        testo: `Wenn Sie Alba an einem Tag erkunden möchten, beginnen Sie am Piazza Risorgimento und spazieren Sie entlang der Via Maestra durch Arkaden, Geschäfte und historische Cafés. Das Zentrum ist kompakt und leicht zu Fuß zu erkunden.

Zu den Hauptattraktionen zählen die Kathedrale San Lorenzo, mittelalterliche Türme, die Loggia dei Mercanti, die Kirche San Domenico, das Casa Fenoglio, das Teatro Sociale und die Piazza Michele Ferrero. Wenn Sie Alba ohne Hast genießen möchten, bleiben Sie mindestens eine Nacht: Das Zentrum ist abends noch bezaubernder.`,
        lista: [
          'Piazza Risorgimento und Kathedrale San Lorenzo',
          'Via Vittorio Emanuele II (Via Maestra)',
          'Mittelalterliche Türme, Loggia dei Mercanti und Kirche San Domenico',
          'Beppe Fenoglio Hausmuseum und Giorgio Busca Theater',
          'Piazza Michele Ferrero und Alba-Brunnen',
        ],
        links: [
          { label: 'Piazza Risorgimento, Google Maps', href: 'https://maps.google.com/?q=Piazza+Risorgimento+Alba+Cuneo' },
          { label: 'Kathedrale San Lorenzo, Google Maps', href: 'https://maps.google.com/?q=Cattedrale+San+Lorenzo+Alba+Cuneo' },
          { label: 'Via Vittorio Emanuele (Via Maestra), Google Maps', href: 'https://maps.google.com/?q=Via+Vittorio+Emanuele+Alba+Cuneo' },
          { label: 'Kirche San Domenico, Google Maps', href: 'https://maps.google.com/?q=Chiesa+San+Domenico+Alba+Cuneo' },
        ],
        tags: ['Was man in Alba sehen sollte', 'Historisches Zentrum Alba', 'Wochenende in Alba'],
      },
      {
        titolo: 'Weingüter rund um Alba besuchen',
        testo: `Weingüter in der Nähe von Alba gehören zu den meistbesuchten in Italien und verbinden große internationale Namen mit kleinen familiengeführten Betrieben. Die meisten erfordern Reservierungen, besonders an Wochenenden und im Herbst.

Für ein vollständiges Erlebnis empfehlen wir eine geführte Verkostung plus ein Mittagessen im Weingut. Wenn Sie bei uns übernachten, helfen wir Ihnen, eine Weinroute zwischen Alba, Barolo, Barbaresco und Serralunga zu planen und die Fahrzeiten zu optimieren.`,
        dettagli: [
          {
            titolo: 'Ceretto, Monsordo Bernardina (Alba)',
            testo:
              'Eine historische Weinfamilie in den Langhe: Die Tätigkeit begann in den 1930er Jahren und wurde von der zweiten Generation erweitert, die Ceretto internationale Anerkennung brachte. Heute ist das Weingut Monsordo Bernardina eine Referenz für Touren und Verkostungen in der Region Alba, mit starkem Fokus auf die lokale Esskultur.',
            href: 'https://maps.google.com/?q=Cantina+Ceretto+Monsordo+Bernardina+Alba',
            linkLabel: 'Ceretto Monsordo Bernardina, Google Maps',
          },
          {
            titolo: 'Fontanafredda, Serralunga d\'Alba',
            testo:
              'Gegründet 1878 von Emanuele Alberto di Mirafiore, ist es eines der bekanntesten Weingüter im Barolo-Gebiet. Der Komplex bewahrt das historische Dorfbild mit Kellern, Landgebäuden und geführten Routen: ein wichtiger Halt, um die Produktionsgeschichte des Barolo zu verstehen.',
            href: 'https://maps.google.com/?q=Cantina+Fontanafredda+Serralunga+d%27Alba',
            linkLabel: 'Fontanafredda, Google Maps',
          },
          {
            titolo: 'Schloss Grinzane Cavour, Regionale Enoteca',
            testo:
              'Das mit Camillo Benso Graf von Cavour verbundene Schloss beherbergt die Regionale Enoteca Cavour Piemonts mit einer großen Auswahl lokaler Weine. Empfehlenswert, um Geschichte, UNESCO-Langhe-Panorama und eine Einführung in Barolo- und Barbaresco-Weine an einem Ort zu verbinden.',
            href: 'https://maps.google.com/?q=Castello+Grinzane+Cavour',
            linkLabel: 'Schloss Grinzane Cavour, Google Maps',
          },
        ],
        tags: ['Weingüter bei Alba', 'Langhe Weintour', 'Barolo Verkostungen'],
      },
      {
        titolo: 'Weine aus Alba: Barolo, Barbaresco und die wichtigsten DOC-Weine',
        testo: `Alba zu verstehen bedeutet, die Langhe-Weine zu verstehen. Nebbiolo ist die Leitsorte hinter Barolo DOCG und Barbaresco DOCG: langlebige, komplexe Weine, die zu den renommiertesten der Welt gehören.

Neben diesen großen Rotweinen gibt es Dolcetto d'Alba DOC, Barbera d'Alba DOC und Moscato d'Asti DOCG. Eine Verkostung mit einem lokalen Sommelier ist der schnellste Weg, Lagen, Jahrgänge und Stile zu verstehen. Bitten Sie uns um eine maßgeschneiderte Route für Ihren Alba-Weinurlaub.`,
        lista: [
          'Barolo DOCG: kraftvolle Struktur und sehr langer Ausbau',
          'Barbaresco DOCG: feiner und eleganter, mit großer Harmonie',
          'Dolcetto d\'Alba DOC: der Alltagswein der Tradition',
          'Barbera d\'Alba DOC: frisch, vielseitig, perfekt zum Essen',
          'Moscato d\'Asti DOCG: aromatisch, leicht und tief lokal verwurzelt',
        ],
        tags: ['Weine aus Alba', 'Barolo DOCG', 'Barbaresco DOCG'],
      },
      {
        titolo: 'Wo man in Alba essen kann: empfohlene Restaurants',
        testo: `Das Speisen in Alba deckt alle Bedürfnisse ab: Michelin-Sterneküche, historische Osterien, traditionelle Piole und informelle Weinbars. Vorausreservierungen sind an Wochenenden und während der Weißen Trüffelmesse unerlässlich.

Wenn Sie einen kulinarischen Langhe-Urlaub möchten, übernachten Sie bei uns und kombinieren Sie Gourmet-Dinner, traditionelle Trattorias und Weinguts-Verkostungen ohne Planungsstress.`,
        dettagli: [
          {
            titolo: 'Piazza Duomo, Feinküche in Alba',
            testo:
              'Restaurant unter Chefkoch Enrico Crippa, ausgezeichnet mit 3 Michelin-Sternen. Eine der wichtigsten Adressen der zeitgenössischen italienischen Gastronomie, mit einer Küche, die stark mit Saisonalität und lokalen Zutaten verbunden ist.',
            href: 'https://maps.google.com/?q=Ristorante+Piazza+Duomo+Alba',
            linkLabel: 'Piazza Duomo, Google Maps',
          },
          {
            titolo: 'La Piola, piemontesische Tradition im Zentrum',
            testo:
              'Im Herzen von Alba gelegen, ist dies das informelle Lokal derselben Eigentümer wie das Piazza Duomo. Es serviert piemontesische Klassiker (Tajarin, Plin, Vitello Tonnato) in einem verfeinerten, aber zugänglichen Stil: eine großartige Option für ein typisches Abendessen.',
            href: 'https://maps.google.com/?q=La+Piola+Alba+Piemonte',
            linkLabel: 'La Piola, Google Maps',
          },
          {
            titolo: 'Osteria dell\'Arco, lokale Küche',
            testo:
              'Seit 1986 aktiv, ein historischer Name für traditionelle piemontesische Küche in Alba. Bekannt für seine Weinauswahl und Gerichte aus der lokalen Gastronomikultur, mit Aufmerksamkeit für Saisonalität und kurze Lieferketten.',
            href: 'https://maps.google.com/?q=Osteria+dell%27Arco+Alba',
            linkLabel: 'Osteria dell\'Arco, Google Maps',
          },
        ],
        tags: ['Wo man in Alba isst', 'Restaurants in Alba', 'Piemontesische Küche'],
      },
      {
        titolo: 'Was man in Alba essen sollte: typische Gerichte',
        testo: `Die Küche Albas ist einer der Hauptgründe, die Stadt zu besuchen. Wenn Sie eine kulinarische Tour in Alba planen, sind dies die unverzichtbaren Aromen.

Bester Tipp: Probieren Sie mindestens ein Degustationsmenü und ein Abendessen in einer traditionellen Osteria, um sowohl Köcheküche als auch lokale Tradition zu genießen.`,
        lista: [
          'Tajarin mit Butter und Salbei',
          'Plin-Ravioli',
          'Rohes Rindfleisch nach Alba-Art',
          'Vitello Tonnato',
          'Rindfleisch in Barolo geschmort',
          'Bonet und Desserts mit piemontesischen Haselnüssen PGI',
        ],
        tags: ['Typische Gerichte aus Alba', 'Langhe Küche', 'Piemont Essen und Wein'],
      },
      {
        titolo: 'Wie man von Costigliole d\'Asti nach Alba kommt',
        testo: `Alba liegt etwa 20 km von Costigliole d'Asti entfernt: mit dem Auto dauert die Fahrt ca. 22 Minuten. Das Zentrum hat ZTL-Zonen, daher empfiehlt es sich, auf dem äußeren Ring zu parken und zu Fuß weiterzugehen.

Für ein entspanntes Langhe-Wochenende ist es am einfachsten, in der Gegend zu übernachten und Alba gemeinsam mit Barbaresco, Neive und Canelli in Tagesetappen zu besuchen.`,
        lista: [
          'Mit dem Auto: SP456 Richtung Süd, ca. 22 Minuten',
          'Mit dem Fahrrad: landschaftlich reizvolle Hügelroute mit moderatem Höhenunterschied',
          'Mit dem Zug: über Asti mit Ankunft am Bahnhof Alba',
        ],
        links: [
          { label: 'Route Costigliole d\'Asti → Alba, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Alba+Cuneo' },
        ],
        tags: ['Wie man nach Alba kommt', 'Parken in Alba', 'Langhe Wochenende'],
      },
      {
        titolo: 'Wann man Alba besuchen sollte: Jahreszeiten und Tipps',
        testo: `Alba ist das ganze Jahr über ein perfektes Reiseziel: Frühling für Weinberg- und Dorfwanderungen, Sommer für lebhafte Piazze und Aperitifs, Herbst für Trüffel und Laubfärbung, Winter für intime Gourmeterlebnisse.

Oktober und November sind die belebtesten Monate: Wenn Sie eine bessere Verfügbarkeit und einen ruhigeren Besuch wünschen, buchen Sie Ihren Aufenthalt weit im Voraus.`,
        lista: [
          'Frühling: ideales Wetter, weniger Besucher, entspanntes Tempo',
          'Sommer: Abendveranstaltungen, Weinbars und Terrassen',
          'Herbst: Weiße Trüffelmesse und spektakuläre Farben',
          'Winter: intime Atmosphäre und großartige Rotweine zum Verkosten',
          'Praktischer Tipp: bequeme Schuhe und frühzeitige Buchungen',
        ],
        tags: ['Wann nach Alba', 'Trüffelmesse', 'Reisetipps Alba'],
      },
    ],
    infoPratiche: {
      come: 'Vom Hotel nach Alba: ca. 15 Minuten mit dem Auto. Von Costigliole d\'Asti: ca. 22 Minuten. Historisches Zentrum zu Fuß erkundbar.',
      periodo: 'Ganzjährig. Hochsaison: Oktober–November (Weiße Trüffelmesse).',
      cosaDPortare: 'Bequeme Schuhe, Restaurant-/Weingutsreservierungen, leichte Jacke im Frühling/Herbst.',
      ingressiPaganti: 'Historisches Zentrum größtenteils kostenlos. Weinguts-Touren und Verkostungen: durchschnittlich €20–45.',
    },
    linkInterni: [
      { label: 'Buchen Sie Ihren Aufenthalt in den Langhe', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Kontaktieren Sie uns für eine Alba + Weingüter-Route', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Entdecken Sie unsere Wein- & Genussangebote', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'asti',
    next: 'cattedrali-sotterranee',
  },

  {
    slug: 'cattedrali-sotterranee',
    nome: 'Unterirdische Kathedralen von Canelli',
    sottotitolo: 'Vollständiger Reiseführer zu den UNESCO-Weinkellern',
    categoria: 'Einzigartiges Erlebnis',
    categoryIcon: 'fa-dungeon',
    distanzaDallHotel: '26 km vom Hotel',
    tempoVisita: 'Halber Tag',
    img: '/foto/le-cattedrali-sotterranee.webp',
    heroImg: '/foto/le-cattedrali-sotterranee.webp',
    tagline:
      'Was man in den Unterirdischen Kathedralen von Canelli besuchen kann, wie man bucht und was einen erwartet: vollständiger Reiseführer zum UNESCO-Welterbe unter den Hügeln.',
    descrizioneBreve:
      'Unter den Straßen von Canelli verbirgt sich eine Parallelstadt: in Tuffstein gehauene Galerien und Tunnel, hohe Backsteingewölbe und Tausende von Flaschen, die im Dunkeln reifen. Als UNESCO-Welterbe seit 2014 anerkannt, sind die Unterirdischen Kathedralen eine Reise durch die Geschichte des italienischen Schaumweins. Von Costigliole d\'Asti aus ist man in etwa 30 Minuten dort.',
    sezioni: [
      {
        titolo: 'Ein UNESCO-Welterbe unter der Erde',
        img: '/foto/le-cattedrali-sotterranee.webp',
        testo: `Canelli ist die Heimat des italienischen Schaumweins. 1865 entwickelte Carlo Gancia den ersten italienischen Schaumwein mit in der Champagne erlernten Techniken. Unter den Hügeln erstrecken sich über 20 Kilometer Tunnel, die in Tuffstein gehauen sind: poröses Vulkangestein, das natürlich Temperatur (konstant 12–14 °C) und Feuchtigkeit reguliert – ideale Bedingungen für die Nachgärung und Weinreifung.

Als die UNESCO 2014 die Weinlandschaft Piemonts anerkannte, wurden die Unterirdischen Kathedralen ausdrücklich als Stätte von außergewöhnlichem kulturellen und historischen Wert einbezogen. Die wichtigsten besichtigbaren Keller sind Bosca, Gancia, Contratto und Coppo.`,
        lista: [
          'Über 20 km in Tuffstein gehauene Galerien',
          'Konstante Temperatur von 12–14 °C ganzjährig',
          'UNESCO-Anerkennung im Jahr 2014',
          'Geschichte des italienischen Schaumweins seit 1865',
        ],
        tags: ['UNESCO Canelli', 'Unterirdische Kathedralen', 'Weltkulturerbe'],
      },
      {
        titolo: 'Cantine Bosca: Geschichte und vollständige Besichtigung',
        img: '/foto/volte-imponenti.webp',
        testo: `Die Cantine Bosca gehören zu den ältesten und interessantesten Kellern der Region. 1831 von Pietro Bosca gegründet, hat das Unternehmen die sechste Generation erreicht. In den unterirdischen Galerien reift noch heute die Riserva del Nonno, ein Schaumwein nach klassischer Methode, der zentral für die Identität des Weinguts ist.

Seit 2010 bieten die Keller eine multisensorische Route: Lichter, Klänge, Projektionen und Dauerinstallationen begleiten die Besucher durch die unterirdischen Schiffe. Die Tour dauert etwa 40–50 Minuten bei konstanten 15 °C, mit etwa vierzig Stufen auf der Route. Sie endet im Weinshop des Weinguts.

Wenn Sie bei uns übernachten, können wir Ihre Buchung mit einem exklusiven Rabatt für die Cantine Bosca arrangieren.`,
        dettagli: [
          {
            titolo: 'Cantine Bosca, Via G.B. Giuliani, 23',
            testo:
              'Multisensorisches Erlebnis mit Lichtern, Klängen und Dauerinstallationen seit 2015. Tour 40–50 Minuten, abschließende Verkostung inklusive (Klassische Methode + Charmat-Methode). Reservierung erforderlich, kostenlose Stornierung bis 24h vorher. Kosten ca. €25 pro Person, freier Eintritt für Minderjährige und Einwohner.',
            href: 'https://www.google.com/maps/place/Cantine+Bosca/@44.7204368,8.2824925,17z/data=!3m1!4b1!4m6!3m5!1s0x47878846fd837c8b:0xf5ac119b934811f0!8m2!3d44.7204368!4d8.2850674!16s%2Fg%2F11b77qh7gd?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D',
            linkLabel: 'Cantine Bosca, Google Maps',
          },
        ],
        tags: ['Cantine Bosca', 'Kellerbesichtigung Canelli', 'Schaumwein-Verkostung'],
      },
      {
        titolo: 'Kathedralen-Weine: Klassische Methode und Alta Langa',
        testo: `Die Keller von Canelli produzieren Alta Langa DOCG, den piemontesischen Schaumwein nach klassischer Methode aus Pinot Noir und Chardonnay-Trauben. Mit mindestens 30 Monaten Hefelagerung (60 für die Riserva) ist es ein hochkomplexer Schaumwein, der mit den besten französischen Champagnern konkurrieren kann.

Die Verkostung in den Galerien, in der natürlichen Kühle von 12–14 °C, ist ein sinnliches Erlebnis, das über das einfache Probieren hinausgeht: Sie schafft eine tiefe Verbindung mit der lokalen Geschichte. Wenn Sie die piemontesischen Schaumweine eingehend erkunden möchten, übernachten Sie bei uns und wir organisieren eine vollständige Tour zwischen Canelli, Asti und Alba.`,
        lista: [
          'Alta Langa DOCG: Klassische Methode mit 30–60 Monaten Ausbau',
          'Moscato d\'Asti DOCG: aromatisch und süß',
          'Barbera d\'Asti DOCG: lokaler Rotwein',
          'Riserva del Nonno (Bosca): historischer Hausschaumwein',
        ],
        tags: ['Alta Langa DOCG', 'Klassische Methode Schaumwein', 'Weine aus Canelli'],
      },
      {
        titolo: 'Veranstaltungen in den Unterirdischen Kathedralen',
        testo: `Die Cantine Bosca nehmen das ganze Jahr über an den wichtigsten lokalen Veranstaltungen teil, mit buchungsfreien offenen Besichtigungen und offenen Verkostungsformaten.`,
        lista: [
          'Cantine Aperte (Mai): offene Galerien ohne Pflichtbuchung',
          'Vendemmia Cantine Aperte (September/Oktober): Besuch während der Erntesaison',
          'Canelli Città del Vino (Sommer): spezielle Verkostungen und Gastproduzenten',
        ],
        tags: ['Veranstaltungen in Canelli', 'Cantine Aperte', 'Weinlese'],
      },
      {
        titolo: 'Anreise und praktische Informationen',
        testo: `Canelli liegt 26 km von Costigliole d'Asti entfernt: mit dem Auto dauert die Fahrt durchschnittlich etwa 30 Minuten. Empfohlene Parkplätze: Via Giuliani, Via Alba oder Piazza Gioberti.

Eine Buchung ist Pflicht, mit kostenloser Stornierung bis 24 Stunden vorher. Bringen Sie einen Pullover mit: Konstante 15 °C fühlen sich im Sommer angenehm an, können aber im Winter kühl sein. Touren sind auf Italienisch und Englisch verfügbar.

Um über unser Hotel zu buchen und einen exklusiven Rabatt zu erhalten, kontaktieren Sie uns direkt.`,
        lista: [
          'Mit dem Auto: 26 km, ca. 30 Minuten von Costigliole d\'Asti',
          'Kostenloses Parken im Stadtzentrum von Canelli',
          'Reservierung erforderlich (kostenlose Stornierung bis 24h vorher)',
          'Tour + Verkostung: ca. €25 pro Person',
          'Jacke oder Pullover mitbringen (12–15 °C Temperatur)',
        ],
        links: [
          { label: 'Route Costigliole d\'Asti → Canelli, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Canelli' },
        ],
        tags: ['Wie man nach Canelli kommt', 'Kellerbuchung', 'Praktische Infos'],
      },
      {
        titolo: 'Wann man die Unterirdischen Kathedralen besuchen sollte',
        img: '/foto/cantine-soto-terra.webp',
        testo: `Die Unterirdischen Kathedralen können das ganze Jahr über besucht werden. Die stabile Temperatur macht sie im Sommer angenehm und im Winter atmosphärisch. Mai und September sind die besten Zeiten für Veranstaltungen wie die Cantine Aperte.

Wenn Sie Canelli in aller Ruhe genießen und auch Alba, Asti und das Monferrato besuchen möchten, übernachten Sie bei uns: Wir sind eine ideale Basis für ein vollständiges Wein-&-Genuss-Wochenende.`,
        lista: [
          'Frühling: ideales Wetter, Cantine Aperte im Mai',
          'Sommer: kühle Galerien, Canelli Città del Vino',
          'Herbst: Weinlese, Vendemmia Cantine Aperte',
          'Winter: stimmungsvolle Atmosphäre, weniger Touristen',
        ],
        tags: ['Wann man Canelli besucht', 'Beste Jahreszeiten', 'Kellerveranstaltungen'],
      },
    ],
    infoPratiche: {
      come: 'Vom Hotel nach Canelli: ca. 30 Minuten mit dem Auto (26 km). Kostenloses Parken im Stadtzentrum.',
      periodo: 'Ganzjährig. Reservierung erforderlich. Hauptveranstaltungen: Mai und September.',
      cosaDPortare: 'Jacke oder Pullover (12–15 °C in den Galerien), bequeme Schuhe, Kamera.',
      ingressiPaganti: 'Tour + Verkostung ca. €25 pro Person. Exklusiver Rabatt bei Buchung über unser Hotel.',
    },
    linkInterni: [
      { label: 'Buchen Sie Ihren Aufenthalt und erhalten Sie Rabatt bei Cantine Bosca', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Kontaktieren Sie uns für eine vollständige Wein-&-Genuss-Tour', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Entdecken Sie unsere Weintouren-Angebote', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'alba',
    next: 'caccia-al-tartufo',
  },

  {
    slug: 'caccia-al-tartufo',
    nome: 'Trüffelsuche in den Langhe und im Monferrato',
    sottotitolo: 'Vollständiger Reiseführer zum unterirdischen Gold',
    categoria: 'Lokale Erlebnisse',
    categoryIcon: 'fa-paw',
    distanzaDallHotel: 'Wälder zwischen Costigliole, Alba und Monferrato',
    tempoVisita: '1 Stunde / halber Tag mit Alba',
    img: '/foto/tartufo-bianco.webp',
    heroImg: '/foto/tartufo-bianco.webp',
    tagline:
      'Der Alba-Weißtrüffel ist das kostbarste Symbol der Langhe: an einer Suche mit einem Trifulau und einem ausgebildeten Hund teilzunehmen ist eines der authentischsten Erlebnisse Piemonts.',
    descrizioneBreve:
      'Es gibt einen Duft, den man nie vergisst: erdig, intensiv, wild und verfeinert. Es ist der Duft des Alba-Weißtrüffels (Tuber magnatum Pico). In den Langhe und im Monferrato ist die Trüffelsuche ein über Generationen von Trifulau weitergegebenes Ritual: im Morgengrauen aufbrechen, dem Hund folgen und auf die Entdeckung warten. In diesem Reiseführer finden Sie Saisonalität, private Truffle Trail-Erlebnisse mit der Familie Ronzano, Highlights der Trüffelmesse Alba, praktische Tipps und ein Wochenendprogramm.',
    sezioni: [
      {
        titolo: 'Der Alba-Weißtrüffel: das unterirdische Gold der Langhe',
        img: '/foto/tartufo-bianco.webp',
        testo: `In den Langhe und im Monferrato ist die Trüffelsuche nicht nur eine Aktivität: Es ist ein uraltes Ritual, das unter den Trifulau weitergegeben wird, den Trüffeljägern. Im Morgengrauen bricht man mit einem ausgebildeten Hund in den Wald auf, wandert zwischen Eichen und Weiden und hört auf das Land, um den Moment zu warten, in dem der Hund die richtige Stelle anzeigt.

Der absolute Star ist der Alba-Weißtrüffel (Tuber magnatum Pico), die wertvollste und begehrteste Sorte. Es ist ein Erlebnis, das tief mit der Identität dieser Region verbunden ist und die Art und Weise, wie man die Landschaft betrachtet, völlig verändert, wenn man es einmal erlebt hat.`,
        lista: [
          'Intensiver und unverwechselbarer Duft von Tuber magnatum Pico',
          'Über Generationen von Trifulau weitergegebene Tradition',
          'Suche im Morgengrauen im Wald mit ausgebildeten Hunden',
          'Identitätsprägendes Erlebnis der Langhe und des Monferrato',
        ],
        tags: ['Alba-Weißtrüffel', 'Trifulau', 'Authentisches Erlebnis'],
      },
      {
        titolo: 'Trüffelsaison',
        img: '/foto/Ricerca-tartufo.webp',
        testo: `Der Alba-Weißtrüffel reift zwischen September und Dezember, mit Aromahöhepunkt im Oktober und November. In dieser Zeit erwacht die gesamte Region: Märkte, Osterien und Weingüter drehen sich um die Trüffelkultur.

Andere Sorten sind das ganze Jahr über verfügbar: Schwarzer Sommertrüffel (Tuber aestivum) von Mai bis August und Bianchetto (Tuber borchii) von Januar bis April. Jede Saison bietet also etwas zum Suchen.`,
        lista: [
          'Alba-Weißtrüffel: September → Dezember',
          'Hauptsaison: Oktober und November',
          'Schwarzer Sommertrüffel: Mai → August',
          'Bianchetto: Januar → April',
        ],
        tags: ['Trüffelsaison', 'Tuber magnatum', 'Tuber aestivum'],
      },
      {
        titolo: 'Die Suche erleben mit Truffle Trail und der Familie Ronzano',
        img: '/foto/Tartufai.webp',
        testo: `Um die Trüffelsuche hautnah zu erleben, arbeiten wir mit Truffle Trail zusammen, organisiert von der Familie Ronzano aus Costigliole d'Asti: Trifulau seit drei Generationen.

Die Tenuta Ronzano entstand aus der Vision von Renato Ronzano. Heute führt Giovanni die Tradition fort (seit 1963 in der Trüffelwelt aktiv), Marco kümmert sich um Auswahl und Vertrieb, und Gianluca ist für die Hundeausbildung und die Feldsuche zuständig. Die Exkursion dauert etwa eine Stunde und ist privat, nur für Ihre Gruppe reserviert.`,
        dettagli: [
          {
            titolo: 'So funktioniert das Truffle Trail-Erlebnis',
            testo:
              'Treffpunkt im Wald der Tenuta Ronzano (Standort nach der Buchung mitgeteilt). 1) Einführung in die Geschichte, Arten und Ökologie des Trüffels. 2) Betreten des Waldes mit ausgebildeten Hunden. 3) Suchphase und Lesen der Hundesignale. 4) Entdeckung und Trüffelbewertung durch Berühren und Riechen mit Expertenführung.',
            href: 'https://www.truffletrail.it',
            linkLabel: 'Offizielle Truffle Trail-Website',
          },
          {
            titolo: 'Schnellkontakt für Truffle Trail',
            testo: 'Direktes WhatsApp für praktische Informationen zum Erlebnis.',
            href: 'https://wa.me/393475806188',
            linkLabel: 'Truffle Trail WhatsApp (+39 347 580 6188)',
          },
        ],
        tags: ['Truffle Trail', 'Familie Ronzano', 'Private Trüffelsuche'],
      },
      {
        titolo: 'Exklusiver Rabatt für Hotelgäste',
        testo: `Gäste des Hotel Langhe & Monferrato erhalten einen Sondertarif für das Truffle Trail-Erlebnis.

Um mit diesem Sondertarif zu buchen, wenden Sie sich einfach an unsere Rezeption: Wir organisieren alles, vom Zeitfenster bis zum Treffpunkt. Buchen Sie nicht direkt online, bevor Sie uns kontaktieren, damit Sie vom Partnertarif profitieren können.`,
        tags: ['Hotelgast-Rabatt', 'Betreute Buchung', 'Partnererlebnis'],
      },
      {
        titolo: 'Die Internationale Trüffelmesse Alba',
        testo: `Jeden Herbst veranstaltet Alba die Trüffelmesse, eine der führenden Wein- & Genussveranstaltungen Italiens. Während die Trüffelsuche Sie in den Wald führt, bringt Sie die Messe ins Herz der lokalen Kultur.

Hier finden Sie den Welttrüffelmarkt, Kochshows, Weinverkostungen, Kochkurse und kulturelle Aktivitäten für Erwachsene und Kinder. Dieser Reiseführer ist zeitlos: Für aktualisierte Termine und das Programm besuchen Sie immer die offiziellen Messekanäle.`,
        lista: [
          'Welttrüffelmarkt mit Qualitätskommission',
          'Kochshows und Gourmet-Abendveranstaltungen',
          'Geführte sensorische Trüffelanalyse mit Experten',
          'Weinverkostungen von Barolo, Barbaresco, Nebbiolo und Moscato',
          'Familienfreundliche Aktivitäten und lokale Folklore',
        ],
        links: [
          { label: 'Offizielle Trüffelmesse-Website', href: 'https://www.fieradeltartufo.org' },
          { label: 'Messegelände, Google Maps', href: 'https://maps.google.com/?q=Piazza+Medford+3+Alba' },
        ],
        tags: ['Trüffelmesse', 'Alba', 'Wein- & Genussveranstaltungen'],
      },
      {
        titolo: 'Wie man sein Trüffelwochenende organisiert',
        img: '/foto/Cane-cerca-tartufo.webp',
        testo: `Ein idealer Plan: morgens im Wald mit Truffle Trail in Costigliole, nachmittags in Alba zwischen historischem Zentrum und Trüffelmarkt, abends in einer Osteria mit Tajarin, Eiern oder Trüffelfondue.

Um Stress und Fahrzeiten zu reduzieren, fragen Sie an unserer Rezeption: Wir erstellen ein maßgeschneidertes Programm und koordinieren die Buchungen mit Partneranbietern.`,
        lista: [
          'Morgen: Trüffelsuche im Wald',
          'Nachmittag: Alba und Trüffelmarkt',
          'Abend: traditionelles Abendessen mit Trüffelgerichten',
        ],
        links: [
          { label: 'Route Costigliole d\'Asti → Alba, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Alba+Cuneo' },
        ],
        tags: ['Trüffelwochenende', 'Langhe Programm', 'Maßgeschneiderte Erlebnisse'],
      },
    ],
    infoPratiche: {
      come: 'Treffpunkt im Wald der Tenuta Ronzano (Costigliole d\'Asti). Alba liegt ca. 30 km vom Hotel entfernt, unter 40 Minuten mit dem Auto.',
      periodo: 'Ganzjährig (Trüffelart wechselt je nach Saison). Weißtrüffelsaison: September–Dezember.',
      cosaDPortare: 'Bequeme oder Trekkingschuhe, Schichtkleidung, leichte Jacke, aufgeladenes Smartphone.',
      ingressiPaganti: 'Privates Truffle Trail-Erlebnis mit Sondertarifen für Hotelgäste (auf Anfrage an der Rezeption).',
    },
    linkInterni: [
      { label: 'Buchen Sie Ihren Aufenthalt und aktivieren Sie den Truffle Trail-Rabatt', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Kontaktieren Sie uns für die Trüffelsuche', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Entdecken Sie unsere Wein- & Genussangebote', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'cattedrali-sotterranee',
    next: 'castelli-del-monferrato',
  },

  {
    slug: 'castelli-del-monferrato',
    nome: 'Schlösser im Monferrato und in den Langhe',
    sottotitolo: 'Vollständiger Reiseführer zu Festungen, Geschichte und UNESCO-Landschaften',
    categoria: 'Lokale Erlebnisse',
    categoryIcon: 'fa-chess-rook',
    distanzaDallHotel: 'Von 5 Minuten bis 1 Stunde vom Hotel',
    tempoVisita: 'Ein ganzer Tag',
    img: '/foto/castelli-nel-monferrato.webp',
    heroImg: '/foto/castelli-nel-monferrato.webp',
    tagline:
      'Ein in Stein gebautes Territorium: Schlösser, Festungen und historische Residenzen zwischen Monferrato und Langhe, mit perfekten Routen ab unserem Hotel.',
    descrizioneBreve:
      'Monferrato und Langhe gehören zu den Gebieten Italiens mit der höchsten Schlossdichte pro Quadratkilometer. Sie sind nicht nur Überreste: In ihnen lebten Adelige, Diplomaten, Könige und Schlüsselfiguren der Epoche der italienischen Einigung. Vom Schloss Costigliole d\'Asti, nur wenige Minuten vom Hotel entfernt, bis zu Festungen inmitten von UNESCO-Weinbergen: Dieser Reiseführer sammelt die malerischsten Stationen mit praktischen Infos und nützlichen Links.',
    sezioni: [
      {
        titolo: 'Ein in Stein gebautes Territorium',
        img: '/foto/castello-di-tagliolo-piemonte.webp',
        testo: `Monferrato und Langhe haben eine der höchsten Schlosskonzentrationen pro Quadratkilometer in Italien. Diese Herrenhäuser sind nicht nur Denkmäler: Sie haben die italienische Geschichte geprägt, und viele sind heute besichtigbar, restauriert und in kulturelle und Wein-&-Genuss-Routen integriert.

Vom Schloss über Costigliole d'Asti bis zu den Festungen inmitten von UNESCO-Weinbergen ist jede Station eine Reise durch Geschichte, verflochten mit Piemonts ikonischster Weinlandschaft.`,
        lista: [
          'Mittelalterliche Schlösser, Festungen und Adelswohnsitze',
          'Verbindungen zur italienischen Einigung, Diplomatie und Lokalgeschichte',
          'Einfache Tagesrouten',
          'Mögliche Kombinationen mit Weingütern und Dörfern',
        ],
        tags: ['Schlösser im Monferrato', 'UNESCO Langhe', 'Historische Routen'],
      },
      {
        titolo: 'Schlösser, die man nicht verpassen sollte',
        img: '/foto/castelli-nel-monferrato.webp',
        testo: `Hier sind die interessantesten Schlösser zwischen Costigliole, Langhe und Monferrato, mit historischen Hintergründen und praktischen Details für eine gut organisierte Tour.`,
        dettagli: [
          {
            titolo: 'Schloss Costigliole d\'Asti',
            testo:
              'Das symbolträchtige Schloss des Dorfes, vom gesamten Tal aus sichtbar. Erste Aufzeichnungen datieren aus dem Jahr 1061. Es entwickelte sich von einer mittelalterlichen Festung zur Adelswohnsitz und verbindet Architektur nach Entwürfen von Benedetto Alfieri, einen monumentalen Eingang von Filippo Juvarra und eine neomittelalterliche Wiederbelebung im 19. Jahrhundert. Heute beherbergt es das ICIF, das Konsortium Barbera d\'Asti und Monferrato-Weine und ist Teil der Castelli Aperti. Der Vordergarten ist seit 1928 ein öffentlicher Park.',
            href: 'https://maps.google.com/?q=Piazza+Vittorio+Emanuele+II+Costigliole+d%27Asti',
            linkLabel: 'Schloss Costigliole, Google Maps',
          },
          {
            titolo: 'Schloss Grinzane Cavour',
            testo:
              'Im Herzen der UNESCO-Langhe gelegen, verbunden mit Camillo Benso Graf von Cavour, der 17 Jahre lang Bürgermeister von Grinzane war und eine Schlüsselfigur bei der Modernisierung des lokalen Weinbaus war. Heute beherbergt es das Langhe-Museum, Cavour-Andenken, die Regionale Enoteca Cavour Piemonts und die Weltauktion des Alba-Weißtrüffels.',
            href: 'https://maps.google.com/?q=Via+Castello+5+Grinzane+Cavour',
            linkLabel: 'Schloss Grinzane Cavour, Google Maps',
          },
          {
            titolo: 'Paläologen-Schloss, Casale Monferrato',
            testo:
              'Wichtige Festung des Markgraftums Monferrato, erbaut ab 1352 im Auftrag von Giovanni II. Paläologe. Im Laufe der Jahrhunderte unter den Gonzaga und später unter den Savoyen erweitert, bewahrt es Patrouillengehwege, Unterkellerungen und Reliefs der historischen Dynastien Aleramo, Paläologen und Gonzaga. Heute beherbergt es auch die Regionale Enoteca des Monferrato.',
            href: 'https://maps.google.com/?q=Piazza+Castello+Casale+Monferrato',
            linkLabel: 'Paläologen-Schloss, Google Maps',
          },
          {
            titolo: 'Schloss Camino',
            testo:
              'Eines der malerischsten Schlösser der Region mit einem 44 Meter hohen quadratischen Turm. Die Ursprünge reichen bis ins 11. Jahrhundert zurück; jahrhundertelang war es mit der Familie Scarampi verbunden. Es ist in Privatbesitz und öffnet bei besonderen Anlässen mit geführten Besichtigungen und Weinguts-Verkostungen.',
            href: 'https://maps.google.com/?q=Via+Castello+30+Camino+AL',
            linkLabel: 'Schloss Camino, Google Maps',
          },
          {
            titolo: 'Schloss Cereseto',
            testo:
              'Panoramaherrensitz im unteren Casale Monferrato-Gebiet, geschätzt für seine Lage, Ecktürme und die umgebende Weinbergslandschaft. Mittelalterlichen Ursprungs, verdankt sein heutiges Erscheinungsbild geschichteten Restaurierungen, die seinen Charme bewahrt haben.',
            href: 'https://maps.google.com/?q=Castello+di+Cereseto',
            linkLabel: 'Schloss Cereseto, Google Maps',
          },
        ],
        tags: ['Costigliole d\'Asti', 'Grinzane Cavour', 'Casale Monferrato'],
      },
      {
        titolo: 'Wie man einen Schlossausflug organisiert',
        testo: `Die Umgebung des Hotels ist ideal für Halb- oder Ganztagesrouten. Wir helfen Ihnen dabei, Ihre Route je nach Jahreszeit, Öffnungszeiten und Interessen (Geschichte, Aussicht, Verkostungen, Dörfer) zu planen.`,
        lista: [
          'Morgenroute: Schloss Costigliole (zu Fuß) + historisches Zentrum',
          'Ganztages-Langhe-Route: Grinzane Cavour + Alba',
          'Ganztages-Monferrato-Route: Camino + Casale Monferrato',
          'Empfohlene Kombination: Schlösser + Weingüter + Mittagessen in der Osteria',
        ],
        links: [
          { label: 'Schloss Costigliole d\'Asti, Google Maps', href: 'https://maps.google.com/?q=Piazza+Vittorio+Emanuele+II+Costigliole+d%27Asti' },
          { label: 'Schloss Grinzane Cavour, Offizielle Website', href: 'https://www.castellogrinzane.com' },
        ],
        tags: ['Schlossroute', 'Monferrato Wochenende', 'Rezeptionstipps'],
      },
    ],
    infoPratiche: {
      come: 'Idealer Start von unserem Hotel: Costigliole zu Fuß, Grinzane ca. 40 Min., Casale ca. 50 Min., Camino ca. 55 Min., Cereseto ca. 1 Stunde.',
      periodo: 'Ganzjährig. Immer spezielle Öffnungszeiten und Pläne für jedes Schloss prüfen.',
      cosaDPortare: 'Bequeme Schuhe, Ausweis, Kamera und leichte Jacke für abendliche Besuche.',
      ingressiPaganti: 'Kosten variieren je nach Ort. Beispiel Grinzane Cavour: voll €8, ermäßigt €6, Kinder 6–14 €3.',
    },
    linkInterni: [
      { label: 'Kontaktieren Sie uns für eine individuelle Schlossroute', href: '/contatti', icon: 'fa-car' },
      { label: 'Buchen Sie Ihren Aufenthalt im Herzen des Monferrato', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Entdecken Sie Wochenendangebote zwischen Schlössern und Weingütern', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'caccia-al-tartufo',
    next: 'big-bench',
  },

  {
    slug: 'big-bench',
    nome: 'Big Benches: Riesenbänke in Piemont',
    sottotitolo: 'Sitzen Sie auf einer Bank und fühlen Sie sich wieder wie ein Kind',
    categoria: 'Lokale Erlebnisse',
    categoryIcon: 'fa-chair',
    distanzaDallHotel: '5–35 km vom Hotel',
    tempoVisita: 'Halber Tag oder ganztägige Route',
    img: '/foto/le-grandi-panchine.webp',
    heroImg: '/foto/le-grandi-panchine.webp',
    tagline:
      'Stellen Sie sich vor, Sie sitzen auf einer Bank, die so groß ist, dass die umliegenden Hügel weiter, die Weinberge tiefer und der Himmel höher erscheinen. Das ist der Big Bench-Effekt: eine bunte Riesenbank, die Ihre Perspektive auf alles verändert.',
    descrizioneBreve:
      'Big Benches sind riesige Kunstinstallationen, entstanden aus einer Idee des amerikanischen Designers Chris Bangle im Jahr 2010. Heute gibt es über 300 weltweit, die meisten konzentriert in Piemont und im Gebiet Langhe-Monferrato. Jede Bank bietet einen spektakulären Ausblick und einen einfachen, fast kindlichen Moment, der die Art und Weise verändert, wie man die Region erlebt. Vom Hotel aus sind die nächsten nur wenige Minuten entfernt.',
    sezioni: [
      {
        titolo: 'Auf einer Bank sitzen und sich wieder wie ein Kind fühlen',
        img: '/foto/le-grandi-panchine.webp',
        testo: `Stellen Sie sich vor, Sie sitzen auf einer Bank, die so groß ist, dass die Hügel um Sie herum noch weiter erscheinen, die Weinberge tiefer, der Himmel höher. Ihre Füße berühren den Boden nicht, und die Aussicht öffnet sich auf eine Art und Weise, die Sie noch nie zuvor gesehen haben. Ein einfacher, fast kindlicher Moment, der Ihre Perspektive auf alles verändert.

Das ist der Effekt einer Big Bench: eine bunte Riesenbank, etwa zweieinhalb Meter hoch und drei Meter breit, die an spektakulären Panoramapunkten über den piemontesischen Hügeln aufgestellt ist.

Es ist nicht nur eine Kunstinstallation oder ein spielerisches Objekt. Hinter jeder Riesenbank steckt ein Projekt, das die Art und Weise, wie dieses Land erlebt und erzählt wird, verändert hat.`,
        tags: ['Erlebnis', 'Design', 'Aussichtspunkt'],
      },
      {
        titolo: 'Das Projekt: eine Geschichte, die als Spiel begann',
        testo: `Alles begann 2010 in einem Weiler von Clavesana in den Langhe, wo der amerikanische Designer Chris Bangle 2009 mit seiner Frau Catherine gezogen war. Bangle ist kein gewöhnlicher Designer: Er arbeitete für Fiat und Alfa Romeo und leitete später über zwanzig Jahre lang das Designzentrum von BMW, bevor er die Langhe als sein Zuhause wählte.

An einem Nachmittag baute Chris mit Freunden und Nachbarn die erste Riesenbank auf einem Grundstück in Clavesana. Die Idee war einfach und brillant: etwas schaffen, das den Menschen hilft, sich wieder wie Kinder zu fühlen angesichts des wunderbaren Langhe-Panoramas.

Die Reaktion der Menschen war unmittelbar: Sie kamen, kletterten hinauf, fotografierten und staunten. Was als freundschaftliche Idee begann, wurde schnell zu etwas Größerem.

2010 wurde das Big Bench Community Project (BBCP) von Chris und Catherine Bangle als gemeinnützige Organisation gegründet, mit einem klaren Ziel: lokale Gemeinschaften unterstützen, lokales Handwerk fördern und den Tourismus durch Riesenbänke an Panoramaplätzen stärken. Das Bankdesign, urheberrechtlich geschützt, wird kostenlos an diejenigen vergeben, die eine bauen möchten, sofern sie alle Elemente des ursprünglichen Konzepts respektieren.

Von dieser ersten roten Bank in Clavesana hat sich das Projekt dramatisch entwickelt: Heute gibt es weltweit mehr als 300 Big Benches, in allen italienischen Regionen und mehreren ausländischen Ländern, von Schottland bis in die Vereinigten Staaten. Piemont, und insbesondere Langhe und Monferrato, bleibt das Herz des Projekts und das Gebiet mit der höchsten Dichte.`,
        tags: ['Geschichte', 'Chris Bangle', 'BBCP'],
      },
      {
        titolo: 'Der Big Bench-Pass',
        testo: `Einer der beliebtesten Teile des Projekts ist der offizielle Big Bench-Pass: ein Heftchen, das man an vielen Stempelstellen in der Region kaufen und beim Besuch der Bänke ausfüllen kann. Jede Big Bench hat einen einzigartigen Stempel, der den Ort und die Bank darstellt.

Es ist zu einem kleinen Erkundungsspiel geworden, das Erwachsene und Kinder gleichermaßen lieben: Jeder gesammelte Stempel bedeutet einen besuchten Hügel, einen entdeckten Aussichtspunkt, ein erkundetes Dorf.

Pässe und Stempel sind in Bars, Agriturismi, Weingütern und lokalen Geschäften in der Nähe jeder Bank erhältlich.`,
        tags: ['Pass', 'Spiel', 'Erkundung'],
      },
      {
        titolo: 'Big Benches in der Nähe des Hotels',
        testo: `Costigliole d'Asti liegt in einem der reichsten Big Bench-Gebiete der Region. Hier sind die vom Hotel aus leicht erreichbaren Bänke, mit Tipps für einen Tag voller Aussichten und Staunen.`,
        dettagli: [
          {
            titolo: 'Big Bench Nr. 17, Costigliole d\'Asti (Bricco Lu\')',
            testo:
              'Unsere Heimatbank, braun gefärbt. Am Aussichtspunkt Bricco Lu\' gelegen, bietet sie ein spektakuläres Panorama der Asti-Hügel in Richtung Monferrato und Langhe. Perfekt für einen Sonnenuntergangs-Spaziergang, buchstäblich nur wenige Minuten vom Hotel entfernt. Sie ist eine der zwei Big Benches in Costigliole.',
            href: 'https://maps.google.com/?q=Big+Bench+17+Costigliole+d%27Asti+Bricco+Lu',
            linkLabel: 'Big Bench Nr. 17, Google Maps',
          },
          {
            titolo: 'Big Bench Nr. 18, Costigliole d\'Asti (Strada Castelletto)',
            testo:
              'Die zweite Costigliole-Bank, orange gefärbt. In der Strada Castelletto gelegen, bietet sie einen etwas anderen Blick über die Asti-Hügel im Vergleich zu Nr. 17. Costigliole ist eine der wenigen Gemeinden mit zwei Bänken.',
            href: 'https://maps.google.com/?q=Big+Bench+18+Costigliole+d%27Asti+Castelletto',
            linkLabel: 'Big Bench Nr. 18, Google Maps',
          },
          {
            titolo: 'Big Bench Nr. 10, Castelnuovo Calcea',
            testo:
              'Violette Bank inmitten der Natur im Lacourt-Park, erreichbar über einen Feldweg durch Weinberge. Castelnuovo Calcea ist ein kleines Dorf im Asti-Gebiet wenige Kilometer von Costigliole entfernt. Der Kontrast zwischen violetter Bank und grünen Reben ist eine der fotogenischsten Szenen der Region.',
            href: 'https://maps.google.com/?q=Big+Bench+10+Castelnuovo+Calcea',
            linkLabel: 'Big Bench Nr. 10, Google Maps',
          },
          {
            titolo: 'Big Bench Nr. 24, Moasca',
            testo:
              'Rosa Bank mit Blick auf die Asti-Weinberge. Moasca ist ein kleines Dorf zwischen Costigliole und Canelli, im Herzen des Barbera d\'Asti-Landes. Die Bank befindet sich auf der Piazza Castello, dem panoramischsten Punkt des Ortes. Entfernung: ca. 12 km vom Hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+24+Moasca',
            linkLabel: 'Big Bench Nr. 24, Google Maps',
          },
          {
            titolo: 'Big Bench Nr. 26, Coazzolo',
            testo:
              'Eines der kleinsten und ruhigsten Dörfer der Region, Coazzolo überblickt die Grenzhügel zwischen den Provinzen Asti und Cuneo. Seine Bank bietet weite Blicke nach Süden in Richtung der Langhe. Ein ruhiger und weniger belebter Ort, perfekt für Einsamkeit und Kontemplation. Entfernung: ca. 15 km vom Hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+26+Coazzolo',
            linkLabel: 'Big Bench Nr. 26, Google Maps',
          },
          {
            titolo: 'Big Bench Nr. 30, Canelli',
            testo:
              'Moscato-gelbe Bank, inspiriert vom bekanntesten Wein der Region. Auf dem Hügel Merlini gelegen, mit spektakulärem Blick nach Norden über die Canelli-Hügel und die darunter versteckten Unterirdischen Kathedralen. Canelli ist auch die Schaumweinstadt Piemonts, mit historischen Kellern im UNESCO-Welterbe. Entfernung: ca. 26 km vom Hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+30+Canelli',
            linkLabel: 'Big Bench Nr. 30, Google Maps',
          },
          {
            titolo: 'Big Bench Nr. 25, Fontanile',
            testo:
              'Bank in den Hügeln des Oberen Monferrato, in einer authentischen und wenig befahrenen ländlichen Umgebung. Fontanile ist eines der weniger bekannten Reiseziele der Region, ideal für Besucher, die über die üblichen Routen hinausgehen und ruhige Ecken entdecken möchten. Entfernung: ca. 18 km vom Hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+25+Fontanile',
            linkLabel: 'Big Bench Nr. 25, Google Maps',
          },
          {
            titolo: 'Big Bench Nr. 14, Alba (Gebiet Scaparone)',
            testo:
              'Weiter entfernt, aber im Herzen der UNESCO-Langhe gelegen, bietet diese Bank im Scaparone-Gebiet von Alba spektakuläre Weinbergsblicke über die Barolo- und Barbaresco-Zonen. Kombinieren Sie sie mit einem Stadtbesuch für ein vollständiges Erlebnis. Entfernung: ca. 35 km vom Hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+14+Alba+Scaparone',
            linkLabel: 'Big Bench Nr. 14, Google Maps',
          },
          {
            titolo: 'Big Bench Nr. 23, Neive',
            testo:
              'Neive ist eines der schönsten Dörfer Italiens und seine Big Bench liegt in einer atemberaubenden Panoramaposition über den Langhe-Hügeln. Kombinieren Sie sie mit einem Spaziergang durch das historische Zentrum mit engen mittelalterlichen Gassen, historischen Kellern und der Atmosphäre eines authentischen piemontesischen Dorfes. Entfernung: ca. 38 km vom Hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+23+Neive',
            linkLabel: 'Big Bench Nr. 23, Google Maps',
          },
        ],
        tags: ['Nahe Bänke', 'Route', 'Entfernungen'],
      },
      {
        titolo: 'Wie man eine Big Bench-Tour organisiert',
        testo: `Eine mögliche Halbtagsroute in der Nähe des Hotels:

Morgen: Beginnen Sie mit Big Bench Nr. 17 am Bricco Lu' (Costigliole) im besten Licht, dann weiter nach Castelnuovo Calcea (Nr. 10) und Moasca (Nr. 24). Frühstück oder Snack an Partnerstellen für Pass-Stempel.

Nachmittag: Weiter nach Coazzolo (Nr. 26) und Canelli (Nr. 30), mit einem Stopp, um das historische Zentrum und die UNESCO-Unterirdischen Keller zu bewundern.

Eine längere Langhe-Route kombiniert Alba (Nr. 14), Neive (Nr. 23) und eine Weinguts-Verkostung.

Die Rezeption des Hotels hilft Ihnen, die beste Route je nach Jahreszeit, Sonnenuntergangszeit und Anzahl der gewünschten Stempel zu planen. Wir empfehlen Sonnenuntergangsbesuche für Goldlicht-Fotografie: unvergessliche Momente.`,
        tags: ['Route', 'Planung', 'Praktische Tipps'],
      },
      {
        titolo: 'Offizielle Ressourcen',
        testo: `Das Big Bench Community Project stellt verschiedene Tools zur Verfügung, um einen vollständigen Besuch zu planen:

Interaktive Karte: auf der offiziellen Website und auf Google Maps durch Suche nach "Big Bench" verfügbar. Sie hilft, alle Bänke per GPS zu lokalisieren und die beste Route zu planen.

Offizieller Pass: erhältlich in Bars, Agriturismi, Weingütern und Museen in der Nähe der Big Benches. Jede Bank hat einen einzigartigen Stempel.

Soziale Medien: Folgen Sie #BigBench auf Instagram für Inspiration, Besucherfotos und Projekt-Updates.

Im Herbst, wenn die Weinberge sich rot und orange färben, sind die Fotos außergewöhnlich schön. Planen Sie Ihren Besuch, um die spektakulärsten saisonalen Farben zu genießen.`,
        links: [
          { label: 'Offizielle Big Bench Community Project-Website', href: 'https://www.bigbenchcommunityproject.org/' },
          { label: 'Interaktive Karte auf Google Maps', href: 'https://www.google.com/maps/search/Big+Bench/' },
          { label: '#BigBench auf Instagram folgen', href: 'https://www.instagram.com/explore/tags/bigbench/' },
        ],
        tags: ['Ressourcen', 'Informationen', 'Planung'],
      },
    ],
    infoPratiche: {
      come: 'Mit dem Auto: direkt ab der Rezeption erreichbar. Einige sind auch mit kurzen Spaziergängen von nahegelegenen Parkplätzen zugänglich. Karte unter bigbenchcommunityproject.org verfügbar.',
      periodo: 'Ganzjährig. Am besten: September–November für Herbstfarben. Mai–Juni für üppig grüne Landschaften.',
      cosaDPortare: 'Bequeme Schuhe, aufgeladenes Smartphone (für Fotos), Pass für Stempel, Sonnenschutz, Kamera.',
      ingressiPaganti: 'Alle kostenlos und öffentlich zugänglich. Pass: ca. 10 Euro.',
    },
    linkInterni: [
      { label: 'Familienzimmer, bringen Sie die Kinder mit!', href: '/camere/quadrupla', icon: 'fa-child' },
      { label: 'Alba: Vollständiger Reiseführer', href: '/territorio/alba', icon: 'fa-map' },
      { label: 'Canelli und die Unterirdischen Kathedralen', href: '/territorio/cattedrali-sotterranee', icon: 'fa-wine-bottle' },
      { label: 'Wochenendpaket: 2 Nächte und Bänke', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'castelli-del-monferrato',
    next: 'ebike-monferrato',
  },

  {
    slug: 'ebike-monferrato',
    nome: 'E-Bike im Monferrato und in den Langhe',
    sottotitolo: 'Reiseführer zu malerischen Routen mit Girobike',
    categoria: 'Natur & Outdoor',
    categoryIcon: 'fa-bicycle',
    distanzaDallHotel: 'Canelli und Umgebung (10–25 km)',
    tempoVisita: 'Halber Tag, ganzer Tag oder mehrtägig',
    img: '/foto/giro-in -biciletta-nel-monferrato.webp',
    heroImg: '/foto/giro-in -biciletta-nel-monferrato.webp',
    tagline:
      'Fahren Sie durch UNESCO-Weinberge, Schlösser und historische Dörfer mit maßgeschneiderten E-Bike-Routen: leicht zu folgen, für alle Niveaus geeignet und perfekt für eine entspannte Entdeckung der Region.',
    descrizioneBreve:
      'Girobike, mit Sitz in Canelli, bietet Elektrofahrradverleih an, um Langhe und Monferrato auf einfache und nachhaltige Weise zu erkunden. Auch untrainierte Fahrer können Hügel und malerische Routen bequem bewältigen. Vom Hotel aus können wir das gesamte Erlebnis für Sie organisieren: Route, Buchung, Logistik und Transfers auf Wunsch.',
    sezioni: [
      {
        titolo: 'Girobike-Service: E-Bike-Freiheit für alle',
        testo: `Girobike ist ein spezialisierter E-Bike-Service ab Canelli. Pedalunterstützende Fahrräder ermöglichen es, hügelige Strecken mit weniger Aufwand zu bewältigen und dabei die Freude am langsamen Reisen zu behalten.

Es ist ideal für Paare, Familien und kleine Gruppen, die die Landschaft ohne Stress genießen möchten: Weinberge, weiße Straßen, UNESCO-Aussichtspunkte und authentische Dörfer.`,
        lista: [
          'E-Bikes auch für untrainierte Fahrer geeignet',
          'Malerische Routen durch Langhe, Roero und Monferrato',
          'Langsamer, nachhaltiger, immersiver Tourismus',
          'Erlebnis anpassbar nach Level und Dauer',
        ],
        tags: ['E-Bike', 'Girobike', 'Sanfter Tourismus'],
      },
      {
        titolo: 'Selbstgeführte oder geführte Touren: Wählen Sie Ihren Stil',
        testo: `Sie können zwischen zwei praktischen Formaten wählen.

Für selbstgeführte Touren werden GPX-Tracks bereitgestellt, die auf dem Smartphone mit kostenlosen Apps geladen werden können: Die Routenführung ist intuitiv. Alternativ können Sie professionelle Führung anfordern, um Nebenstraßen und weniger bekannte Orte zu entdecken.`,
        lista: [
          'Selbstgeführte Touren mit GPX-Tracks',
          'Touren mit qualifiziertem Guide',
          'Wenig befahrene Routen',
          'Planungsunterstützung vor der Abfahrt',
        ],
        tags: ['GPX', 'Qualifizierter Guide', 'Individuelle Routen'],
      },
      {
        titolo: 'Top 5 empfohlene Routen',
        testo: `Die Region bietet sehr unterschiedliche Routen, von entspannt bis sportlich. Hier sind die meistgefragten, alle anpassbar an Ihre Gruppe.

Für jedes Programm können wir Wein-&-Genuss-Stopps und landschaftliche Punkte empfehlen, die sich ideal für Fotos und Pausen eignen.`,
        dettagli: [
          {
            titolo: 'Canelli-Umgebung (Moscato-Tour), ca. 40 km',
            testo: 'Blicke über die Moscato-Weinberge rund um Canelli, mit sanften Anstiegen und perfekten Abschnitten, um in den Rhythmus des unterstützten Radfahrens zu kommen.',
          },
          {
            titolo: 'Richtung Acqui Terme, ca. 62 km',
            testo: 'Eine Route, die Natur und Geschichte verbindet, bis zur von den Römern gegründeten Thermenstadt, bekannt für die La-Bollente-Quelle.',
          },
          {
            titolo: 'Barbaresco und historische Dörfer, ca. 62 km',
            testo: 'Eine Kultur-und-Landschafts-Route durch Barbaresco, Neive und Treiso, mit vielen Aussichten zwischen Weinbergen und Schlössern.',
          },
          {
            titolo: 'Nizza und Barbera-Gebiet, ca. 70 km',
            testo: 'Tour mit Fokus auf die Barbera d\'Asti-Produktionszonen, durch eine der ikonischsten Weinlandschaften Piemonts.',
          },
          {
            titolo: 'Roccaverano und Alta Langa, ca. 77 km Rundkurs',
            testo: 'Anspruchsvollere Route mit größerem Höhenunterschied, ideal für diejenigen, die einen intensiven Tag zwischen Hügeln und Hochlanddörfern erleben möchten.',
          },
        ],
        tags: ['E-Bike-Routen', 'Canelli', 'Monferrato'],
      },
      {
        titolo: 'Verfügbare Dauer und vollständige Organisation über das Hotel',
        testo: `Das Erlebnis kann in mehreren Formaten geplant werden: halber Tag, ganzer Tag, 2 Tage oder 3 Tage. Je nach verfügbarer Zeit planen wir ein ausgewogenes Programm zwischen Fahren, Verkostungen und Besichtigungen.

Für maximalen Komfort kann unser Team das gesamte Erlebnis einschließlich zusätzlicher Services (Transfer auf Wunsch) organisieren, damit Sie nur das Territorium genießen müssen.`,
        lista: [
          'Halbtagsformat',
          'Ganztagsformat',
          '2- oder 3-Tagesprogramme',
          'Hotelunterstützung für Logistik und Buchungen',
        ],
        tags: ['Maßgeschneiderte Route', 'Transfer', 'Organisiertes Erlebnis'],
      },
    ],
    infoPratiche: {
      come: 'Abfahrt im Canelli-Gebiet. Vom Hotel aus können wir Zeitplan, Treffpunkt und Logistik koordinieren, einschließlich Transferservices auf Wunsch.',
      periodo: 'Empfohlen von März bis November. Verfügbarkeit variiert je nach Wetter und Saison.',
      cosaDPortare: 'Sportschuhe, Wasser, Sonnenbrille, Sonnenschutz, leichte Windjacke, aufgeladenes Smartphone.',
      ingressiPaganti: 'Verschiedene Formeln verfügbar (halber Tag, ganzer Tag, 2–3 Tage). Fragen Sie an der Rezeption nach dem besten Paket für Ihren Aufenthalt.',
    },
    linkInterni: [
      { label: 'Kontaktieren Sie uns für eine maßgeschneiderte E-Bike-Tour', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Buchen Sie Ihren Aufenthalt und organisieren Sie das Erlebnis', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Entdecken Sie weitere Aktivitäten in der Region', href: '/territorio', icon: 'fa-map' },
    ],
    prev: 'big-bench',
    next: 'birrificio-nicese',
  },

  {
    slug: 'birrificio-nicese',
    nome: 'Nuovo Birrificio Nicese',
    sottotitolo: 'Produktionstour und Handwerksverkostung',
    categoria: 'Lokale Verkostung',
    categoryIcon: 'fa-beer',
    distanzaDallHotel: 'Nizza Monferrato (ca. 15 km)',
    tempoVisita: '1,5 – 2 Stunden',
    img: '/foto/birrificio-nicese-nizza-monferrato.webp',
    heroImg: '/foto/birrificio-nicese-nizza-monferrato.webp',
    tagline:
      'Ein immersives Craft-Bier-Erlebnis durch Produktionsanlagen, Braumeister-Geschichten und geführte Verkostung verschiedener Stile.',
    descrizioneBreve:
      'Nuovo Birrificio Nicese entstand aus einer klaren handwerklichen Vision: ausgewählte Rohstoffe, Aufmerksamkeit für natürliche Zeiten und starke lokale Verwurzelung. Der Besuch ist perfekt für Gäste, die über den Wein hinausgehen und eine weitere lokale Exzellenz entdecken möchten. Vom Hotel aus können wir das vollständige Erlebnis organisieren, damit Sie die Verkostung in völligem Komfort genießen können.',
    sezioni: [
      {
        titolo: 'Das Wesen der Brauerei: Handwerk und Territorium',
        testo: `Das Brauereibrojekt basiert auf einer klaren Philosophie: Qualität, lokale Identität und Produktionsprozesse, die die Reifezeiten respektieren.

Jedes Bier wird durch ein Gleichgewicht aus Technik und handwerklicher Sensibilität geschaffen, mit Stilen, die Aromen, aromatische Klarheit und Trinkbarkeit hervorheben.`,
        lista: [
          'Sorgfältige Auswahl der Rohstoffe',
          'Handwerksproduktion in kleinen Chargen',
          'Kontrolle der Gärungs- und Reifephasen',
          'Territoriale Identität in jedem Etikett',
        ],
        tags: ['Craft Beer', 'Lokale Produktion', 'Qualität'],
      },
      {
        titolo: 'Das vollständige Erlebnis: Tour + Storytelling + Verkostung',
        testo: `Der Besuch führt Gäste ins Herz der Brauerei: von den Brauräumen bis zu den Fermentern, mit Abschluss im Verkostungsbereich.

Während der Route werden alle Produktionsphasen klar erklärt, von der Vermahlung bis zur Gärung, mit Fokus auf Zutaten, Stile und sensorische Unterschiede.`,
        dettagli: [
          {
            titolo: 'Produktionstour',
            testo: 'Zugang zum technischen Bereich, um Ausrüstung, Prozessschritte und Werkzeuge der Handwerksproduktion zu beobachten.',
          },
          {
            titolo: 'Braumeister-Storytelling',
            testo: 'Erklärung der Produktionsentscheidungen und technischen Geheimnisse, die Aroma, Struktur und Biercharakter definieren.',
          },
          {
            titolo: 'Geführte Verkostung',
            testo: 'Verkostung der verfügbaren Biere mit Hinweisen zu Aromen, Stilen und Kombinationen in einem authentischen, geselligen Rahmen.',
          },
        ],
        tags: ['Brauerei-Tour', 'Braumeister', 'Verkostung'],
      },
      {
        titolo: 'Was der Besuch typischerweise umfasst',
        testo: `Das Erlebnis eignet sich sowohl für kleine Gruppen als auch für einzelne Enthusiasten, mit geführter Begleitung von Anfang bis Ende.

Am Ende ist es möglich, Biere direkt im Brauereiladen zu kaufen.`,
        lista: [
          'Dedizierter Guide während der Tour',
          'Technische Erklärung der Handwerksmethode',
          'Verkostung der verfügbaren Biere',
          'Direktkauf im Firmengeschäft',
        ],
        tags: ['Erlebnispaket', 'Bierverkostung', 'Brauereiladen'],
      },
      {
        titolo: 'Warum man es mit einem Monferrato-Tagesausflug kombinieren sollte',
        testo: `Nizza Monferrato ist ein perfekter Stopp in einem Programm zwischen Weinbergen, Dörfern und Radrouten. Dieses Erlebnis passt sehr gut zu einer E-Bike-Tour im "Nizza-und-Barbera"-Gebiet und schafft einen vollen Tag mit Outdoor-Aktivitäten und Verkostungen.

Für maximalen Komfort müssen Sie nichts selbst organisieren: Wir können den vollständigen Besuch entsprechend Ihrem Zeitplan koordinieren.`,
        lista: [
          'Ideal nach einer Radtour durch Weinberge',
          'Perfekt für Paare und Freundesgruppen',
          'Eine authentische Alternative zu weinexklusiven Verkostungen',
          'Von unserem Team koordiniertes Erlebnis',
        ],
        tags: ['Nizza Monferrato', 'Lokales Erlebnis', 'Kombinierte Route'],
      },
    ],
    infoPratiche: {
      come: 'Nizza Monferrato-Gebiet (AT), ca. 15 km vom Hotel. Wir können Erlebnis und Logistik entsprechend Ihrem Zeitplan organisieren.',
      periodo: 'Ganzjährig nach Terminplan verfügbar. Vorausbuchung über unser Team wird empfohlen.',
      cosaDPortare: 'Bequeme Kleidung, aufgeladenes Telefon, optional leichte Jacke für Produktionsbereiche.',
      ingressiPaganti: 'Tour und Verkostung mit variablen Formeln je nach Gruppengröße. Kontaktieren Sie uns und wir finden die beste Option.',
    },
    linkInterni: [
      { label: 'Kontaktieren Sie uns für die Brauereibesichtigung', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Buchen Sie Ihren Aufenthalt und genießen Sie das vollständige Erlebnis', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Entdecken Sie auch den Monferrato E-Bike-Reiseführer', href: '/territorio/ebike-monferrato', icon: 'fa-bicycle' },
    ],
    prev: 'ebike-monferrato',
    next: 'nizza-e-barbera',
  },

  {
    slug: 'nizza-e-barbera',
    nome: 'Nizza è Barbera',
    sottotitolo: '2026 Reiseführer zur Nizza DOCG-Veranstaltung',
    categoria: 'Wein- & Genussveranstaltung',
    categoryIcon: 'fa-wine-glass-alt',
    distanzaDallHotel: '17 km vom Hotel (ca. 23 Min.)',
    tempoVisita: 'Halber Tag oder ganzer Tag',
    img: '/foto/Nizza e barbera nizza monferrato.webp',
    heroImg: '/foto/Nizza e barbera nizza monferrato.webp',
    tagline:
      'Entdecken Sie Nizza è Barbera in Nizza Monferrato: Barbera Forum, Verkostungen, Masterclasses und praktische Tipps zur Anreise von Costigliole d\'Asti.',
    descrizioneBreve:
      'Wenn Sie im Hotel Langhe & Monferrato übernachten, befinden Sie sich am perfekten Ort, um Nizza è Barbera zu erleben, eine der authentischsten Weinveranstaltungen Piemonts. In diesem Reiseführer finden Sie, was zu tun ist, was zu verkosten ist, wie man den Besuch organisiert und warum man den Tag in eine UNESCO-Weinbergs-und-Dorf-Tour im Monferrato verwandeln sollte.',
    sezioni: [
      {
        titolo: 'Nizza è Barbera: Was es ist und warum es die Reise wert ist',
        testo: `Nizza è Barbera ist das große Weinfest, das jeden Mai das historische Zentrum von Nizza Monferrato belebt. Die Veranstaltung feiert Barbera in seinen identitätsstärksten Ausdrucksformen durch ein stadtweites Programm mit Verkostungen, Produzententreffen, Weinpunkten und kulturellen Momenten.

Für Besucher, die das Monferrato erkunden, ist es eine ideale Gelegenheit, die Nizza DOCG aus nächster Nähe zu entdecken, eine Top-Appellation, die eine der am meisten entwickelten Formen der piemontesischen Barbera darstellt.`,
        lista: [
          'Führende Wein- & Genussveranstaltung im Monferrato',
          'Fokus auf Nizza DOCG und Barbera d\'Asti DOCG',
          'Weitverbreitete Verkostungen im Stadtzentrum von Nizza Monferrato',
          'Authentische Atmosphäre auf Plätzen, historischen Straßen und bei lokalen Produzenten',
        ],
        links: [
          { label: 'Offizielle Nizza è Barbera-Website', href: 'https://nizzaebarbera.wine/' },
          { label: 'Nizza Monferrato, Google Maps', href: 'https://maps.google.com/?q=Nizza+Monferrato' },
        ],
        tags: ['Nizza è Barbera', 'Piemonter Weinveranstaltung', 'Nizza Monferrato'],
      },
      {
        titolo: 'Was man während der Veranstaltung tun kann: Forum, Weinpunkte und lokale Küche',
        testo: `Das Herzstück der Veranstaltung ist das Barbera Forum, wo man viele Produzenten treffen und mehrere Etiketten vergleichend verkosten kann. Im Stadtzentrum ermöglichen Weinpunkte, das Territorium Glas für Glas zu entdecken, während man durch die Dorfgassen schlendert.

Neben dem Wein ist die Gastronomie unverzichtbar: An Ständen, Lokalen und Restaurants kann man lokale Spezialitäten kosten wie Belecauda (Nizza Farinata) und andere traditionelle piemontesische Gerichte.`,
        dettagli: [
          {
            titolo: 'Barbera Forum',
            testo: 'Hauptverkostungsbereich mit Produzenten und Verkostungstheken für Nizza DOCG und territoriale Barbera-Interpretationen.',
          },
          {
            titolo: 'Verkostungen im historischen Zentrum',
            testo: 'Weinpunkte und önologische Routen durch die Straßen von Nizza Monferrato, ideal für ein dynamisches und geselliges Erlebnis.',
          },
          {
            titolo: 'Lokale Aromen',
            testo: 'Street Food und lokale Küche mit traditionellen Rezepten, perfekte Begleitung zu den Veranstaltungsweinen.',
          },
        ],
        tags: ['Barbera Forum', 'Nizza DOCG Verkostung', 'Monferrato Essen & Wein'],
      },
      {
        titolo: 'Anreise von Costigliole d\'Asti: praktischer Reiseführer',
        testo: `Vom Hotel Langhe & Monferrato aus erreichen Sie Nizza Monferrato in ca. 23 Minuten mit dem Auto (17 km). Die Route ist unkompliziert und malerisch, ideal für einen entspannten Tagesausflug.

An Veranstaltungstagen ist der Besucherandrang groß: Wir empfehlen, früh aufzubrechen und an Außenbereichen zu parken, dann zu den Veranstaltungspunkten zu Fuß weiterzugehen.`,
        lista: [
          'Hotel → Nizza Monferrato Entfernung: ca. 17 km',
          'Durchschnittliche Fahrzeit: ca. 23 Minuten',
          'Empfohlene Abfahrt: später Morgen oder früher Nachmittag',
          'Empfohlenes Parken: ausgewiesene Bereiche nahe Zentrum/Bahnhof',
        ],
        links: [
          { label: 'Route Hotel → Nizza Monferrato (Google Maps)', href: 'https://maps.google.com/?saddr=Hotel+Langhe+Monferrato+Costigliole+d%27Asti&daddr=Nizza+Monferrato' },
        ],
        tags: ['Wie man nach Nizza Monferrato kommt', 'Veranstaltungsparken', 'Ausflug von Costigliole'],
      },
      {
        titolo: 'Hoteltipp: Den Tag in eine UNESCO-Weintour verwandeln',
        testo: `Vor oder nach der Veranstaltung können Sie das Erlebnis mit einer Mini-Route durch die UNESCO-Hügel und Weinberge zwischen Costigliole d'Asti und dem Nizza DOCG-Gebiet ergänzen.

Es ist eine kurze Route voller außergewöhnlicher Blicke: Weinreihen, Dörfer und Schlösser, die die Weinidentität des Monferrato erzählen. Zurück im Hotel genießen Sie vollständige Entspannung, um den Tag auf die beste Weise abzuschließen.`,
        lista: [
          'UNESCO-Blicke zwischen Costigliole und Nizza Monferrato',
          'Ideal mit einem Weinguts-Besuch',
          'Perfekt für Paare und Wein-&-Genuss-Enthusiasten',
          'Rückkehr ins Hotel in unter 30 Minuten',
        ],
        tags: ['Monferrato Weintour', 'UNESCO-Weinberge', 'Wein-&-Genuss-Wochenende'],
      },
      {
        titolo: 'FAQ 2026: Termine, Buchungen und nützliche Tipps',
        testo: `Offizielle Termine werden jedes Jahr von den Veranstaltern bekannt gegeben. Normalerweise findet die Veranstaltung am zweiten Maiwochenende statt (für 2026 ca. 8.–11. Mai, zu bestätigen).

Um die Veranstaltung optimal zu genießen, buchen Sie sowohl Ihren Aufenthalt als auch eventuelle Masterclasses oder dedizierten Verkostungszugang rechtzeitig im Voraus.`,
        lista: [
          'Wann: normalerweise zweites Maiwochenende (offizielle Termine auf der Website)',
          'Buchungen: empfohlen für Forum/Masterclasses und dringend empfohlen für Unterkunft',
          'Familienfreundliche Veranstaltung: ja, gesellige Atmosphäre und begehbares Zentrum',
          'Praktischer Tipp: bequeme Schuhe, Wasser und aufgeladenes Telefon für Karten und Tickets',
        ],
        links: [
          { label: 'Offizielles 2026 Programm und Updates', href: 'https://nizzaebarbera.wine/' },
        ],
        tags: ['Nizza è Barbera 2026', 'Weinveranstaltungs-FAQ', 'Monferrato-Wochenende buchen'],
      },
    ],
    infoPratiche: {
      come: 'Vom Hotel nach Nizza Monferrato: ca. 17 km, durchschnittlich 23 Minuten mit dem Auto.',
      periodo: 'Jährliche Veranstaltung im Mai. Offizielle Termine jedes Jahr auf der Veranstalter-Website prüfen.',
      cosaDPortare: 'Bequeme Schuhe, optional leichte Abend-Jacke, aufgeladenes Telefon und Buchungen/Tickets griffbereit.',
      ingressiPaganti: 'Abhängig vom Programm: einige Bereiche/Veranstaltungen können Tickets oder Akkreditierung erfordern. Offizielle Website prüfen.',
    },
    linkInterni: [
      { label: 'Buchen Sie Ihren Aufenthalt für Nizza è Barbera', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Kontaktieren Sie uns für Ihr Weinwochenende', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Entdecken Sie weitere lokale Reiseführer', href: '/territorio', icon: 'fa-map' },
    ],
    prev: 'birrificio-nicese',
    next: null,
  },
];

export function getGuideBySlugDe(slug) {
  return guideDe.find((g) => g.slug === slug) || null;
}

export function getAllGuideSlugsDe() {
  return guideDe.map((g) => g.slug);
}
