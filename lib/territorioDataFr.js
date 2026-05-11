// ================================================================
// lib/territorioDataFr.js
// Version française des mini-guides du territoire
// ================================================================

export const guideFr = [
  {
    slug: 'asti',
    nome: 'Asti',
    sottotitolo: 'Guide complet de la ville des grands vins',
    categoria: 'Ville d\'art',
    categoryIcon: 'fa-landmark',
    distanzaDallHotel: '8 km de l\'hôtel',
    tempoVisita: 'Demi-journée ou journée complète',
    img: '/foto/Asti.webp',
    heroImg: '/foto/Asti.webp',
    tagline:
      'Que voir à Asti, où manger, quelles sont les meilleures caves et quand la visiter : un guide complet de la ville du plus ancien Palio d\'Italie.',
    descrizioneBreve:
      'Asti est l\'une des villes les plus riches et les plus stratifiées du Piémont. Fondée par les Romains puis devenue une puissante commune médiévale, c\'est aujourd\'hui une ville vivante où la tradition du Palio et les grands vins DOCG se mêlent à une scène gastronomique authentique. Depuis Costigliole d\'Asti, on y arrive en moins de 10 minutes.',
    sezioni: [
      {
        titolo: 'Un peu d\'histoire : de Hasta Pompeia au Palio',
        testo: `Asti a été fondée par les Romains entre le IIe et le Ier siècle avant J.-C. sous le nom de Hasta Pompeia, probablement en l'honneur du consul Cnaeus Pompeius Strabo. Des traces concrètes de l'Asti romaine subsistent encore : la Domus Romana avec ses mosaïques d'origine, la crypte de Sant'Anastasio et la Torre Rossa, le monument le plus ancien de la ville, d'origine romaine.

Au Moyen Âge, Asti devient l'une des communes les plus puissantes du Piémont. Les familles nobles y font construire plus d'une centaine de tours comme symbole de pouvoir : une vingtaine subsistent encore dans le centre historique. Le Palio d'Asti, attesté dès 1275, est plus ancien dans les sources écrites que le célèbre Palio de Sienne. Vittorio Alfieri, l'un des plus grands dramaturges italiens du XVIIIe siècle, est né à Asti en 1749.`,
        lista: [
          'Origines romaines et fondation de Hasta Pompeia',
          'Essor médiéval : la ville aux cent tours',
          'Le Palio d\'Asti : 750 ans de tradition ininterrompue',
          'Vittorio Alfieri : dramaturge et intellectuel européen',
        ],
        links: [
          { label: 'Torre Rossa, Google Maps', href: 'https://maps.google.com/?q=Torre+Rossa+Asti' },
          { label: 'Palazzo Alfieri et musée Alfieriano, Google Maps', href: 'https://maps.google.com/?q=Palazzo+Alfieri+Asti' },
        ],
        tags: ['Histoire d\'Asti', 'Hasta Pompeia', 'Palio médiéval'],
      },
      {
        titolo: 'Que voir à Asti : 10 lieux à ne pas manquer',
        img: '/foto/asti-monumenti.webp',
        testo: `Le centre historique d'Asti est compact et se visite facilement à pied en quelques heures. Si vous cherchez que faire à Asti en une journée, commencez par Piazza Alfieri puis longez Corso Vittorio Alfieri entre arcades, tours médiévales et palais nobles. Pour les musées, le Smart Ticket est avantageux (10 euros pour 7 sites).

En séjournant chez nous, vous pourrez visiter Asti tranquillement et rentrer à l'hôtel sans vous presser.`,
        dettagli: [
          {
            titolo: 'Cathédrale Santa Maria Assunta',
            testo:
              'La plus grande cathédrale du Piémont : plus de 80 mètres de long, construite en briques rouges et en grès. Édifiée entre le XIe et le XIVe siècle, elle est un remarquable exemple de gothique lombard-piémontais, avec des fresques du XIVe siècle, un polyptyque de Gandolfino da Roreto et un chœur en bois sculpté du XVe siècle.',
            href: 'https://maps.google.com/?q=Cattedrale+Santa+Maria+Assunta+Asti',
            linkLabel: 'Cathédrale Santa Maria Assunta, Google Maps',
          },
          {
            titolo: 'Torre Troyana (tour de l\'horloge)',
            testo:
              'Le symbole le plus reconnaissable d\'Asti : 44 mètres de haut, 199 marches pour une vue à 360° sur le centre historique, les collines du Monferrato et l\'arc alpin. Érigée au XIIIe siècle par la famille Troya, elle abrite aujourd\'hui la cloche de 1531, l\'une des plus anciennes du Piémont encore en activité.',
            href: 'https://maps.google.com/?q=Torre+Troyana+Asti',
            linkLabel: 'Torre Troyana, Google Maps',
          },
          {
            titolo: 'Collégiale San Secondo',
            testo:
              'L\'une des plus anciennes églises gothiques de la ville, dédiée au saint patron d\'Asti. Construite du milieu du XIIIe siècle jusqu\'en 1462 à l\'emplacement du martyre de saint Secondo au IIe siècle. Elle conserve une crypte des VIe-VIIe siècles avec un reliquaire en argent du XVIe siècle.',
            href: 'https://maps.google.com/?q=Collegiata+San+Secondo+Asti',
            linkLabel: 'Collégiale San Secondo, Google Maps',
          },
          {
            titolo: 'Torre Rossa',
            testo:
              'Le monument le plus ancien d\'Asti : sa forme circulaire à 16 côtés remonte au Ier siècle apr. J.-C., lorsqu\'elle faisait partie de la porte romaine d\'entrée de la ville. Son nom vient de la couleur chaude des briques romaines d\'origine. Un fragment de la Rome impériale conservé depuis deux mille ans.',
            href: 'https://maps.google.com/?q=Torre+Rossa+Asti',
            linkLabel: 'Torre Rossa, Google Maps',
          },
          {
            titolo: 'Palazzo Alfieri et musée Alfieriano',
            testo:
              'Le palais baroque où naquit en 1749 le dramaturge Vittorio Alfieri. Il abrite aujourd\'hui un musée avec manuscrits, éditions rares de ses tragédies, objets personnels et documents retraçant le parcours d\'un intellectuel européen d\'une modernité remarquable.',
            href: 'https://maps.google.com/?q=Palazzo+Alfieri+Asti',
            linkLabel: 'Palazzo Alfieri, Google Maps',
          },
          {
            titolo: 'Palazzo Mazzetti et musée civique',
            testo:
              'Le principal musée civique d\'Asti, installé dans l\'un des plus beaux exemples d\'architecture baroque de la ville. À l\'intérieur : salons décorés de fresques, collections d\'art civique avec peintures d\'école piémontaise et vestiges archéologiques. Principal point de vente du Smart Ticket pour les musées de la ville.',
            href: 'https://maps.google.com/?q=Palazzo+Mazzetti+Asti',
            linkLabel: 'Palazzo Mazzetti, Google Maps',
          },
          {
            titolo: 'Crypte de Sant\'Anastasio et Domus Romana',
            testo:
              'Pour comprendre les différentes strates historiques d\'Asti : la crypte est une église romane partiellement souterraine avec colonnes et chapiteaux médiévaux. La Domus Romana présente les restes d\'une demeure patricienne de l\'époque impériale avec des mosaïques d\'origine encore en place.',
            href: 'https://maps.google.com/?q=Cripta+Sant+Anastasio+Asti',
            linkLabel: 'Crypte de Sant\'Anastasio, Google Maps',
          },
          {
            titolo: 'Complexe de San Pietro in Consavia',
            testo:
              'L\'un des lieux les moins connus mais les plus fascinants d\'Asti. Construit au XIIe siècle, il comprend une église ronde inspirée du Saint-Sépulcre de Jérusalem (forme très rare dans le Piémont), la chapelle Valperga et un cloître du XVe siècle.',
            href: 'https://maps.google.com/?q=Complesso+San+Pietro+Consavia+Asti',
            linkLabel: 'Complexe de San Pietro in Consavia, Google Maps',
          },
          {
            titolo: 'Piazza Alfieri',
            testo:
              'La place principale d\'Asti, avec ses arcades du XVIIIe siècle et sa fontaine centrale. C\'est le cœur de la vie de la ville en toute saison : marché hebdomadaire, événements et apéritifs. Chaque mois de septembre, elle devient l\'arène du Palio historique, transformée en hippodrome à ciel ouvert.',
            href: 'https://maps.google.com/?q=Piazza+Alfieri+Asti',
            linkLabel: 'Piazza Alfieri, Google Maps',
          },
          {
            titolo: 'Corso Vittorio Alfieri',
            testo:
              'L\'axe principal du centre historique : un parcours piéton qui traverse la ville de la Torre Rossa à la Torre Troyana. Un peu plus d\'un kilomètre qui concentre mille ans d\'histoire urbaine, des palais nobles des XVIIe et XVIIIe siècles, des tours en briques rouges, des cafés historiques et le lieu où Asti se promène chaque après-midi.',
            href: 'https://maps.google.com/?q=Corso+Vittorio+Alfieri+Asti',
            linkLabel: 'Corso Vittorio Alfieri, Google Maps',
          },
        ],
        tags: ['Que voir à Asti', 'Centre historique d\'Asti', 'Tours médiévales'],
      },
      {
        titolo: 'Les vins d\'Asti : 700 ans d\'histoire viticole',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80&fit=crop',
        testo: `Asti est synonyme de vin dans le monde entier. En 1865, Carlo Gancia crée à Canelli le premier vin mousseux italien en appliquant aux raisins de Moscato locaux les techniques apprises en Champagne. Au XXe siècle, Federico Martinotti perfectionne la méthode Martinotti (ou Charmat) pour une prise de mousse plus rapide. En 2014, le paysage viticole des Langhe, du Roero et du Monferrato est inscrit au patrimoine mondial de l'UNESCO.

Aujourd'hui, la région d'Asti produit quelques-uns des DOCG les plus célèbres d'Italie : Barbera d'Asti, Asti Spumante, Moscato d'Asti, Grignolino d'Asti et Ruché di Castagnole Monferrato. Pour un séjour œnogastronomique complet, séjournez chez nous et nous vous aiderons à organiser des visites et dégustations sur mesure.`,
        lista: [
          'Barbera d\'Asti DOCG : le vin de l\'âme astigiane',
          'Asti Spumante DOCG : le mousseux doux le plus exporté au monde',
          'Moscato d\'Asti DOCG : aromatique, délicat, 5,5 % d\'alcool',
          'Grignolino d\'Asti DOC : élégance discrète et tanins fins',
          'Ruché di Castagnole Monferrato DOCG : le vin le plus rare du Piémont',
        ],
        tags: ['Vins d\'Asti', 'Barbera DOCG', 'Moscato DOCG'],
      },
      {
        titolo: 'Caves à visiter autour d\'Asti',
        img: '/foto/coppo-cantine-canelli-piemonte.webp',
        testo: `Les caves de l'Astigiano offrent des expériences authentiques entre vignobles, châteaux et caves historiques. La plupart demandent une réservation quelques jours à l'avance. Beaucoup proposent aussi un déjeuner ou un en-cas à la cave.

Si vous souhaitez créer un itinéraire viticole entre Asti, Canelli et le Monferrato, nous pouvons vous aider avec les réservations et les transferts depuis notre hôtel.`,
        dettagli: [
          {
            titolo: 'Tenuta Montemagno',
            testo:
              'Domaine historique niché dans les collines du Monferrato, avec le château médiéval de Montemagno dominant les vignes. Il propose des dégustations guidées, un hébergement en relais et des vues panoramiques extraordinaires. On y produit Barbera d\'Asti, Grignolino et Moscato.',
            href: 'https://maps.google.com/?q=Tenuta+Montemagno+Asti',
            linkLabel: 'Tenuta Montemagno, Google Maps',
          },
          {
            titolo: 'Cantine Coppo, Canelli',
            testo:
              'Cave historique de Canelli active depuis 1892. Célèbre pour la Barbera Camp du Rouss et le Moscato d\'Asti. Les caves historiques souterraines de Canelli (UNESCO) se visitent en partie : une double expérience entre vin et architecture souterraine.',
            href: 'https://maps.google.com/?q=Cantine+Coppo+Canelli',
            linkLabel: 'Cantine Coppo, Google Maps',
          },
          {
            titolo: 'Gancia, Canelli',
            testo:
              'La cave où Carlo Gancia créa en 1865 le premier vin mousseux italien. Un lieu majeur de l\'histoire du vin. Les caves historiques souterraines de Gancia font partie du système UNESCO des Cathédrales souterraines de Canelli depuis 2014.',
            href: 'https://maps.google.com/?q=Gancia+Canelli',
            linkLabel: 'Gancia, Google Maps',
          },
        ],
        tags: ['Caves Asti', 'Wine tour Monferrato', 'Dégustations de Barbera'],
      },
      {
        titolo: 'Où manger à Asti : restaurants recommandés',
        testo: `La cuisine d'Asti est généreuse, sincère et profondément liée au territoire. Réserver à l'avance est essentiel le week-end et pendant la période du Palio.

Si vous voulez un week-end gastronomique entre Asti et ses environs, séjournez chez nous et combinez tables étoilées, osterie historiques et dégustations en cave.`,
        dettagli: [
          {
            titolo: 'Trattoria Astigiana',
            testo:
              'Une adresse historique de la gastronomie piémontaise. Agnolotti del plin, bolliti misti, tajarin au ragù, bonet et gâteau aux noisettes. Menu dégustation entre 40 et 50 euros, avec une cave mettant à l\'honneur les vins de l\'Astigiano et des Langhe.',
            href: 'https://maps.google.com/?q=Trattoria+Astigiana+Asti',
            linkLabel: 'Trattoria Astigiana, Google Maps',
          },
          {
            titolo: 'Osteria del Palio',
            testo:
              'À quelques pas de Piazza Alfieri. Une atmosphère inspirée des anciennes auberges de campagne, avec une cuisine centrée sur les produits du territoire : tajarin, bœuf braisé à la Barbera, fromages des collines et desserts traditionnels. Excellente carte de vins locaux.',
            href: 'https://maps.google.com/?q=Osteria+del+Palio+Asti',
            linkLabel: 'Osteria del Palio, Google Maps',
          },
          {
            titolo: 'Tacabanda',
            testo:
              'Le restaurant devenu une référence à Asti. L\'équipe comprend des personnes en situation de handicap dans un projet où la cuisine rencontre l\'engagement social. Carte de saison et circuit court : bœuf Fassona, tajarin au beurre et à la truffe, salami cuit de lapin à la sauce tonnata.',
            href: 'https://maps.google.com/?q=Tacabanda+Asti',
            linkLabel: 'Tacabanda, Google Maps',
          },
        ],
        tags: ['Où manger à Asti', 'Restaurants à Asti', 'Cuisine piémontaise'],
      },
      {
        titolo: 'Que manger à Asti : plats emblématiques',
        img: '/foto/brasato.webp',
        testo: `La cuisine d'Asti possède une tradition gastronomique profonde et reconnaissable. Si vous préparez un itinéraire gourmand à Asti, voici les saveurs incontournables.`,
        lista: [
          'Agnolotti del plin : pâtes fraîches farcies pincées à la main',
          'Tajarin aux 40 jaunes d\'œufs : tagliolini très fins à la pâte aux œufs',
          'Bœuf braisé à la Barbera : viande Fassona mijotée longuement dans le vin',
          'Viande crue coupée au couteau : filet haché au couteau',
          'Bonet : flan au chocolat et aux amaretti',
          'Gâteau aux noisettes Tonda Gentile du Piémont IGP',
          'Merenda sinoira : apéritif piémontais copieux',
        ],
        tags: ['Plats typiques d\'Asti', 'Cuisine du Monferrato', 'Œnogastronomie du Piémont'],
      },
      {
        titolo: 'Comment rejoindre Asti depuis Costigliole d\'Asti',
        testo: `Asti n'est qu'à 8 km de Costigliole d'Asti : en voiture, le trajet dure environ 10 minutes. Le centre historique comporte des zones ZTL : il est conseillé de se garer dans les parkings proches (Piazza Alfieri, parkings gratuits) puis de continuer à pied.

Pour un week-end dans le Monferrato sans stress, séjournez chez nous et visitez Asti, Alba, Canelli et Nizza Monferrato en étapes quotidiennes confortables.`,
        lista: [
          'En voiture : SP456 direction Asti, environ 10 minutes',
          'En train : ligne ferroviaire avec liaison rapide',
          'À vélo : itinéraire plat le long du Tanaro, environ 35 minutes',
        ],
        links: [
          { label: 'Itinéraire Costigliole d\'Asti → Asti, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Asti' },
        ],
        tags: ['Comment aller à Asti', 'Parkings à Asti', 'Week-end Monferrato'],
      },
      {
        titolo: 'Quand visiter Asti : saisons et conseils',
        testo: `Asti est parfaite toute l'année. L'automne est la saison reine : vendanges, Palio, Douja d'Or et couleurs des vignes. Mais le printemps (moins fréquenté), l'été (apéritifs sous les arcades) et l'hiver (atmosphère plus intime) ont aussi beaucoup de charme.

Si vous souhaitez vivre le Palio, réservez votre séjour très à l'avance : le troisième dimanche de septembre est l'événement le plus attendu de l'année.`,
        lista: [
          'Printemps : climat doux, peu de foule, rythme détendu',
          'Été : Corso Alfieri à l\'ombre, apéritifs sur les places, événements culturels',
          'Automne : Palio, Douja d\'Or, vendanges, couleurs extraordinaires',
          'Hiver : atmosphère calme, marchés de Noël, caves ouvertes',
          'Smart Ticket 10 € pour 7 musées : rentable dès trois visites',
        ],
        tags: ['Quand aller à Asti', 'Palio d\'Asti', 'Conseils voyage Asti'],
      },
    ],
    infoPratiche: {
      come: 'De l\'hôtel à Asti : environ 10 minutes en voiture (8 km). Centre historique visitable à pied.',
      periodo: 'Toute l\'année. Haute saison : septembre (Palio), fin août (Douja d\'Or).',
      cosaDPortare: 'Chaussures confortables, Smart Ticket pour les musées, réservations de restaurants/caves.',
      ingressiPaganti: 'Smart Ticket 10 € pour 7 sites muséaux. Torre Troyana incluse.',
    },
    linkInterni: [
      { label: 'Réservez votre séjour dans le Monferrato', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contactez-nous pour un itinéraire Asti + caves', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Découvrez nos offres food & wine', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: null,
    next: 'alba',
  },

  {
    slug: 'alba',
    nome: 'Alba',
    sottotitolo: 'Guide complet de la ville aux cent tours',
    categoria: 'Ville gourmet',
    categoryIcon: 'fa-utensils',
    distanzaDallHotel: '15 km de l\'hôtel',
    tempoVisita: 'Une journée complète',
    img: '/foto/alba-italia.webp',
    heroImg: '/foto/alba-italia.webp',
    tagline:
      'Que voir à Alba, où manger, quelles caves visiter et quand y aller : un guide pratique et complet pour découvrir le cœur des Langhe.',
    descrizioneBreve:
      'Alba est la capitale des Langhe, l\'une des meilleures destinations œnogastronomiques du Piémont. Dans ce guide, vous trouverez l\'histoire de la ville, les incontournables du centre historique, les caves près d\'Alba, des restaurants recommandés, les vins du territoire, des conseils pratiques et des liens Google Maps prêts à l\'emploi. Si vous voulez la découvrir sans vous presser, notre hôtel est la base idéale pour un séjour entre Alba, Barolo et Monferrato.',
    sezioni: [
      {
        titolo: 'Un peu d\'histoire : d\'Alba Pompeia à la ville UNESCO',
        testo: `Les origines d'Alba remontent au Néolithique, mais avec les Romains elle devient Alba Pompeia, centre stratégique des anciennes routes commerciales du Piémont. Sous le centre historique, on peut encore voir le forum, le théâtre et les vestiges de la ville romaine grâce au parcours Alba Sotterranea.

Au Moyen Âge, Alba devient la « ville aux cent tours », symbole du pouvoir des familles nobles. Au XXe siècle, la ville vit un chapitre décisif avec la Résistance racontée par Beppe Fenoglio. Aujourd'hui, Alba est aussi un symbole de la gastronomie italienne : UNESCO pour ses paysages viticoles (2014) et Ville créative UNESCO de la gastronomie (2017).`,
        lista: [
          'Origines préhistoriques et fondation romaine d\'Alba Pompeia',
          'Tours médiévales et essor commercial entre Langhe et Ligurie',
          'La Résistance de 1944 et l\'identité culturelle de la ville',
          'Reconnaissances UNESCO mettant en valeur le vin et le territoire',
        ],
        links: [
          { label: 'Alba Sotterranea, Google Maps', href: 'https://maps.google.com/?q=Alba+Sotterranea+Alba' },
          { label: 'Musée civique Federico Eusebio, Google Maps', href: 'https://maps.google.com/?q=Museo+Federico+Eusebio+Alba' },
        ],
        tags: ['Histoire d\'Alba', 'Alba Pompeia', 'UNESCO'],
      },
      {
        titolo: 'Que voir à Alba : 10 étapes dans le centre historique',
        img: '/foto/alba-italia.webp',
        testo: `Si vous cherchez que faire à Alba en une journée, commencez par Piazza Risorgimento puis promenez-vous le long de Via Maestra entre arcades, boutiques et cafés historiques. Le centre est compact et se visite facilement à pied.

Parmi les incontournables : la cathédrale San Lorenzo, les tours médiévales, la Loggia dei Mercanti, l'église San Domenico, la Casa Fenoglio, le Teatro Sociale et Piazza Michele Ferrero. Si vous voulez visiter Alba sans courir, restez au moins une nuit : le centre est encore plus charmant le soir.`,
        lista: [
          'Piazza Risorgimento et cathédrale San Lorenzo',
          'Via Vittorio Emanuele II (Via Maestra)',
          'Tours médiévales, Loggia dei Mercanti et église San Domenico',
          'Maison-musée Beppe Fenoglio et Teatro Sociale Giorgio Busca',
          'Piazza Michele Ferrero et fontaine d\'Alba',
        ],
        links: [
          { label: 'Piazza Risorgimento, Google Maps', href: 'https://maps.google.com/?q=Piazza+Risorgimento+Alba+Cuneo' },
          { label: 'Cathédrale San Lorenzo, Google Maps', href: 'https://maps.google.com/?q=Cattedrale+San+Lorenzo+Alba+Cuneo' },
          { label: 'Via Vittorio Emanuele (Via Maestra), Google Maps', href: 'https://maps.google.com/?q=Via+Vittorio+Emanuele+Alba+Cuneo' },
          { label: 'Église San Domenico, Google Maps', href: 'https://maps.google.com/?q=Chiesa+San+Domenico+Alba+Cuneo' },
        ],
        tags: ['Que voir à Alba', 'Centre historique d\'Alba', 'Week-end à Alba'],
      },
      {
        titolo: 'Caves à visiter autour d\'Alba',
        testo: `Les caves proches d'Alba figurent parmi les plus recherchées d'Italie, mêlant grandes maisons internationales et petites exploitations familiales. La plupart travaillent sur réservation, surtout le week-end et en automne.

Pour une expérience complète, nous conseillons une dégustation guidée avec déjeuner en cave. Si vous séjournez chez nous, nous pouvons vous aider à construire un itinéraire viticole entre Alba, Barolo, Barbaresco et Serralunga en optimisant les temps de trajet.`,
        dettagli: [
          {
            titolo: 'Ceretto, Monsordo Bernardina (Alba)',
            testo:
              'Famille historique du vin dans les Langhe : l\'activité commence dans les années 1930 et se développe avec la deuxième génération, qui donne à Ceretto une renommée internationale. Aujourd\'hui, le domaine Monsordo Bernardina est une référence pour les visites et dégustations dans la région d\'Alba, avec une attention particulière portée aussi à la culture gastronomique locale.',
            href: 'https://maps.google.com/?q=Cantina+Ceretto+Monsordo+Bernardina+Alba',
            linkLabel: 'Ceretto Monsordo Bernardina, Google Maps',
          },
          {
            titolo: 'Fontanafredda, Serralunga d\'Alba',
            testo:
              'Fondée en 1878 par Emanuele Alberto de Mirafiore, c\'est l\'une des maisons les plus connues du territoire du Barolo. Le complexe conserve la structure historique du village, avec caves, bâtiments ruraux et parcours guidés : une étape essentielle pour comprendre l\'histoire de la production du Barolo et l\'évolution de l\'œnologie des Langhe.',
            href: 'https://maps.google.com/?q=Cantina+Fontanafredda+Serralunga+d%27Alba',
            linkLabel: 'Fontanafredda, Google Maps',
          },
          {
            titolo: 'Château de Grinzane Cavour, œnothèque régionale',
            testo:
              'Le château, lié à Camillo Benso comte de Cavour, abrite l\'œnothèque régionale piémontaise Cavour avec une large sélection d\'étiquettes du territoire. Visite recommandée pour combiner histoire, panorama sur les Langhe UNESCO et introduction aux vins de Barolo et Barbaresco en un seul lieu.',
            href: 'https://maps.google.com/?q=Castello+Grinzane+Cavour',
            linkLabel: 'Château de Grinzane Cavour, Google Maps',
          },
        ],
        tags: ['Caves Alba', 'Wine tour Langhe', 'Dégustations de Barolo'],
      },
      {
        titolo: 'Les vins d\'Alba : Barolo, Barbaresco et grands DOC',
        testo: `Comprendre Alba, c'est comprendre les vins des Langhe. Le Nebbiolo est le cépage symbole, à l'origine des Barolo DOCG et Barbaresco DOCG : des vins de longue garde, complexes et parmi les plus prestigieux au monde.

À côté de ces grands rouges, on trouve le Dolcetto d'Alba DOC, la Barbera d'Alba DOC et le Moscato d'Asti DOCG. Une dégustation avec un sommelier local est le moyen le plus rapide de distinguer crus, millésimes et styles. Pour votre séjour œnogastronomique à Alba, demandez-nous un itinéraire sur mesure.`,
        lista: [
          'Barolo DOCG : structure puissante et très longue garde',
          'Barbaresco DOCG : plus fin et élégant, avec une grande harmonie',
          'Dolcetto d\'Alba DOC : le vin quotidien de la tradition',
          'Barbera d\'Alba DOC : frais, polyvalent, parfait à table',
          'Moscato d\'Asti DOCG : aromatique, léger et profondément local',
        ],
        tags: ['Vins d\'Alba', 'Barolo DOCG', 'Barbaresco DOCG'],
      },
      {
        titolo: 'Où manger à Alba : restaurants recommandés',
        testo: `À Alba, l'offre culinaire couvre tous les styles : haute cuisine étoilée, osterie historiques, piole traditionnelles et bars à vin informels. Réserver à l'avance est indispensable le week-end et pendant la Foire de la truffe blanche.

Si vous voulez des vacances food & wine dans les Langhe, séjournez chez nous et combinez dîners gastronomiques, trattorie typiques et dégustations en cave sans stress d'organisation.`,
        dettagli: [
          {
            titolo: 'Piazza Duomo, haute cuisine à Alba',
            testo:
              'Restaurant dirigé par le chef Enrico Crippa et récompensé de 3 étoiles Michelin. C\'est l\'une des adresses les plus importantes de la cuisine italienne contemporaine, avec une cuisine fortement liée à la saisonnalité et aux ingrédients du territoire.',
            href: 'https://maps.google.com/?q=Ristorante+Piazza+Duomo+Alba',
            linkLabel: 'Piazza Duomo, Google Maps',
          },
          {
            titolo: 'La Piola, tradition piémontaise au centre',
            testo:
              'En plein centre d\'Alba, c\'est la table la plus informelle de la même propriété que Piazza Duomo. On y sert les classiques piémontais (tajarin, plin, vitello tonnato) dans un style soigné mais accessible : un excellent choix pour un dîner typique sans formalité.',
            href: 'https://maps.google.com/?q=La+Piola+Alba+Piemonte',
            linkLabel: 'La Piola, Google Maps',
          },
          {
            titolo: 'Osteria dell\'Arco, cuisine du territoire',
            testo:
              'Active depuis 1986, c\'est un nom historique pour ceux qui recherchent la cuisine piémontaise traditionnelle à Alba. Elle est réputée pour sa sélection de vins et ses plats liés à la culture gastronomique locale, avec une attention à la saisonnalité et aux circuits courts.',
            href: 'https://maps.google.com/?q=Osteria+dell%27Arco+Alba',
            linkLabel: 'Osteria dell\'Arco, Google Maps',
          },
        ],
        tags: ['Où manger à Alba', 'Restaurants à Alba', 'Cuisine piémontaise'],
      },
      {
        titolo: 'Que manger à Alba : plats à goûter absolument',
        testo: `La cuisine albese est l'une des principales raisons de visiter la ville. Si vous préparez un itinéraire gastronomique à Alba, voici les saveurs à ne pas manquer.

Le meilleur conseil : essayez au moins un menu dégustation et un dîner dans une osteria traditionnelle afin de découvrir à la fois la cuisine d'auteur et la tradition locale.`,
        lista: [
          'Tajarin au beurre et à la sauge',
          'Raviolis del plin',
          'Viande crue à l\'albese',
          'Vitello tonnato',
          'Bœuf braisé au Barolo',
          'Bonet et desserts à la noisette du Piémont IGP',
        ],
        tags: ['Plats typiques d\'Alba', 'Cuisine des Langhe', 'Œnogastronomie du Piémont'],
      },
      {
        titolo: 'Comment rejoindre Alba depuis Costigliole d\'Asti',
        testo: `Alba se trouve à environ 20 km de Costigliole d'Asti : en voiture, le trajet moyen dure autour de 22 minutes. Le centre comporte des zones ZTL, il est donc préférable de se garer sur le pourtour et de continuer à pied.

Pour un week-end relax dans les Langhe, la solution la plus confortable est de séjourner dans la région et de visiter Alba avec Barbaresco, Neive et Canelli en étapes quotidiennes.`,
        lista: [
          'En voiture : SP456 vers le sud, environ 22 minutes',
          'À vélo : itinéraire vallonné panoramique avec dénivelé modéré',
          'En train : passage par Asti et arrivée à la gare d\'Alba',
        ],
        links: [
          { label: 'Itinéraire Costigliole d\'Asti → Alba, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Alba+Cuneo' },
        ],
        tags: ['Comment aller à Alba', 'Parkings à Alba', 'Week-end Langhe'],
      },
      {
        titolo: 'Quand visiter Alba : saisons et conseils utiles',
        testo: `Alba est une destination parfaite toute l'année : le printemps pour les promenades entre vignes et villages, l'été pour les places animées et les apéritifs, l'automne pour les truffes et le feuillage, l'hiver pour des expériences gastronomiques plus intimistes.

Octobre et novembre sont les mois les plus demandés : si vous voulez plus de disponibilité et une visite plus calme, mieux vaut réserver votre séjour très à l'avance.`,
        lista: [
          'Printemps : météo idéale, moins de foule, rythme détendu',
          'Été : événements en soirée, bars à vin et terrasses',
          'Automne : Foire de la truffe blanche et couleurs spectaculaires',
          'Hiver : atmosphère intimiste et grands rouges à déguster',
          'Conseil pratique : chaussures confortables et réservations anticipées',
        ],
        tags: ['Quand aller à Alba', 'Foire de la truffe', 'Conseils voyage Alba'],
      },
    ],
    infoPratiche: {
      come: 'De l\'hôtel à Alba : environ 15 minutes en voiture. Depuis Costigliole d\'Asti : environ 22 minutes. Centre historique visitable à pied.',
      periodo: 'Toute l\'année. Haute saison : octobre-novembre (Foire de la truffe blanche).',
      cosaDPortare: 'Chaussures confortables, réservations de restaurants/caves, veste légère au printemps et en automne.',
      ingressiPaganti: 'Centre historique en grande partie gratuit. Visites et dégustations en cave : en moyenne 20 à 45 €.',
    },
    linkInterni: [
      { label: 'Réservez votre séjour dans les Langhe', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contactez-nous pour un itinéraire Alba + caves', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Découvrez nos offres food & wine', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'asti',
    next: 'cattedrali-sotterranee',
  },

  {
    slug: 'cattedrali-sotterranee',
    nome: 'Cathédrales souterraines de Canelli',
    sottotitolo: 'Guide complet des caves classées à l\'UNESCO',
    categoria: 'Expérience unique',
    categoryIcon: 'fa-dungeon',
    distanzaDallHotel: '26 km de l\'hôtel',
    tempoVisita: 'Demi-journée',
    img: '/foto/le-cattedrali-sotterranee.webp',
    heroImg: '/foto/le-cattedrali-sotterranee.webp',
    tagline:
      'Que visiter dans les cathédrales souterraines de Canelli, comment réserver et à quoi s\'attendre : guide complet du patrimoine UNESCO sous les collines.',
    descrizioneBreve:
      'Sous les rues de Canelli existe une ville parallèle : galeries et tunnels creusés dans le tuf, hautes voûtes de briques silencieuses et milliers de bouteilles vieillissant dans l\'obscurité. Classées au patrimoine mondial de l\'UNESCO en 2014, les cathédrales souterraines sont un voyage dans l\'histoire du vin mousseux italien. Depuis Costigliole d\'Asti, on y arrive en environ 30 minutes.',
    sezioni: [
      {
        titolo: 'Un patrimoine UNESCO sous terre',
        img: '/foto/le-cattedrali-sotterranee.webp',
        testo: `Canelli est la patrie du vin mousseux italien. En 1865, Carlo Gancia y met au point le premier mousseux italien en appliquant les techniques apprises en Champagne. Sous les collines s'étendent plus de 20 kilomètres de galeries creusées dans le tuf : une roche volcanique poreuse qui régule naturellement la température (12 à 14°C constants) et l'humidité, conditions idéales pour la refermentation et l'élevage des vins.

Lorsque l'UNESCO a reconnu en 2014 le paysage viticole du Piémont comme patrimoine mondial, les cathédrales souterraines ont été explicitement incluses comme élément d'une valeur culturelle et historique exceptionnelle. Les principales caves visitables sont Bosca, Gancia, Contratto et Coppo.`,
        lista: [
          'Plus de 20 km de galeries creusées dans le tuf',
          'Température constante de 12 à 14°C toute l\'année',
          'Reconnaissance UNESCO en 2014',
          'Histoire du vin mousseux italien depuis 1865',
        ],
        tags: ['UNESCO Canelli', 'Cathédrales souterraines', 'Patrimoine mondial'],
      },
      {
        titolo: 'Caves Bosca : histoire et visite complète',
        img: '/foto/volte-imponenti.webp',
        testo: `Les caves Bosca comptent parmi les plus anciennes et les plus originales à visiter. Fondée en 1831 par Pietro Bosca, l'entreprise en est aujourd'hui à sa sixième génération. Dans les galeries souterraines vieillit encore la Riserva del Nonno, un mousseux de méthode classique au cœur de l'identité de la maison.

Depuis 2010, les caves proposent un parcours multisensoriel : lumières, sons, projections et installations permanentes accompagnent les visiteurs le long des nefs souterraines. La visite dure environ 40 à 50 minutes à une température constante de 15°C, avec une quarantaine de marches sur le parcours. Elle se termine à la boutique de la cave.

Si vous séjournez chez nous, nous pouvons organiser votre réservation avec une remise exclusive pour les caves Bosca.`,
        dettagli: [
          {
            titolo: 'Cantine Bosca, Via G.B. Giuliani, 23',
            testo:
              'Expérience multisensorielle avec lumières, sons et installations permanentes depuis 2015. Visite de 40 à 50 minutes, dégustation finale incluse (méthode classique + méthode Charmat). Réservation obligatoire, annulation gratuite jusqu\'à 24 h avant. Tarif d\'environ 25 € par personne, entrée gratuite pour les mineurs et les résidents.',
            href: 'https://www.google.com/maps/place/Cantine+Bosca/@44.7204368,8.2824925,17z/data=!3m1!4b1!4m6!3m5!1s0x47878846fd837c8b:0xf5ac119b934811f0!8m2!3d44.7204368!4d8.2850674!16s%2Fg%2F11b77qh7gd?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D',
            linkLabel: 'Cantine Bosca, Google Maps',
          },
        ],
        tags: ['Caves Bosca', 'Visite de cave à Canelli', 'Dégustation de mousseux'],
      },
      {
        titolo: 'Les vins des cathédrales : méthode classique et Alta Langa',
        testo: `Dans les caves de Canelli naît l'Alta Langa DOCG, le vin mousseux piémontais de méthode classique élaboré à partir de Pinot Noir et de Chardonnay. Avec au moins 30 mois sur lies (60 pour la Riserva), c'est un vin mousseux d'une grande complexité, capable de rivaliser avec les meilleurs champagnes français.

La dégustation dans les galeries, à la fraîcheur naturelle de 12 à 14°C, est une expérience sensorielle qui va bien au-delà d'une simple dégustation : elle crée un lien profond avec l'histoire du territoire. Si vous souhaitez approfondir les vins mousseux piémontais, séjournez chez nous et nous organiserons un circuit complet entre Canelli, Asti et Alba.`,
        lista: [
          'Alta Langa DOCG : méthode classique avec 30 à 60 mois d\'élevage',
          'Moscato d\'Asti DOCG : aromatique et doux',
          'Barbera d\'Asti DOCG : vin rouge du territoire',
          'Riserva del Nonno (Bosca) : mousseux historique de la maison',
        ],
        tags: ['Alta Langa DOCG', 'Mousseux méthode classique', 'Vins de Canelli'],
      },
      {
        titolo: 'Événements aux cathédrales souterraines',
        testo: `Les caves Bosca participent aux principaux événements du territoire tout au long de l'année, avec des visites sans réservation obligatoire et des dégustations en format libre.`,
        lista: [
          'Cantine Aperte (mai) : galeries ouvertes au public sans réservation obligatoire',
          'Cantine Aperte pendant les vendanges (septembre/octobre) : visite en pleine récolte',
          'Canelli Città del Vino (été) : dégustations spéciales et producteurs invités',
        ],
        tags: ['Événements Canelli', 'Cantine Aperte', 'Vendanges'],
      },
      {
        titolo: 'Comment y aller et informations pratiques',
        testo: `Canelli se trouve à 26 km de Costigliole d'Asti : en voiture, le trajet moyen dure environ 30 minutes. Parkings conseillés : Via Giuliani, Via Alba ou Piazza Gioberti.

La réservation est obligatoire, avec annulation gratuite jusqu'à 24 heures avant. Prévoyez un pull : 15°C sont agréables en été mais frais en hiver. Les visites sont disponibles en italien et en anglais.

Pour réserver par notre intermédiaire et bénéficier d'une remise exclusive, contactez-nous directement.`,
        lista: [
          'En voiture : 26 km, environ 30 minutes depuis Costigliole d\'Asti',
          'Parking gratuit dans le centre de Canelli',
          'Réservation obligatoire (annulation gratuite jusqu\'à 24 h avant)',
          'Visite + dégustation : environ 25 € par personne',
          'Prévoir une veste ou un pull (température 12 à 15°C)',
        ],
        links: [
          { label: 'Itinéraire Costigliole d\'Asti → Canelli, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Canelli' },
        ],
        tags: ['Comment aller à Canelli', 'Réservation cave', 'Infos pratiques'],
      },
      {
        titolo: 'Quand visiter les cathédrales souterraines',
        img: '/foto/cantine-soto-terra.webp',
        testo: `Les cathédrales souterraines se visitent toute l'année. La température stable les rend agréables en été et particulièrement évocatrices en hiver. Mai et septembre sont les meilleures périodes pour profiter d'événements comme Cantine Aperte.

Si vous souhaitez découvrir Canelli à un rythme détendu tout en visitant aussi Alba, Asti et le Monferrato, séjournez chez nous : nous sommes une base idéale pour un week-end œnogastronomique complet.`,
        lista: [
          'Printemps : météo idéale, Cantine Aperte en mai',
          'Été : galeries fraîches, Canelli Città del Vino',
          'Automne : vendanges, Cantine Aperte des vendanges',
          'Hiver : atmosphère évocatrice, moins de touristes',
        ],
        tags: ['Quand visiter Canelli', 'Meilleures saisons', 'Événements en cave'],
      },
    ],
    infoPratiche: {
      come: 'De l\'hôtel à Canelli : environ 30 minutes en voiture (26 km). Parking gratuit dans le centre.',
      periodo: 'Toute l\'année. Réservation obligatoire. Principaux événements : mai et septembre.',
      cosaDPortare: 'Veste ou pull (12 à 15°C dans les galeries), chaussures confortables, appareil photo.',
      ingressiPaganti: 'Visite + dégustation environ 25 € par personne. Remise exclusive en réservant via notre hôtel.',
    },
    linkInterni: [
      { label: 'Réservez votre séjour et profitez d\'une remise Bosca Cellars', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contactez-nous pour un circuit food & wine complet', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Découvrez nos offres wine tour', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'alba',
    next: 'caccia-al-tartufo',
  },

  {
    slug: 'caccia-al-tartufo',
    nome: 'Chasse à la truffe dans les Langhe et le Monferrato',
    sottotitolo: 'Guide complet de l\'or souterrain',
    categoria: 'Expériences locales',
    categoryIcon: 'fa-paw',
    distanzaDallHotel: 'Bois entre Costigliole, Alba et Monferrato',
    tempoVisita: '1 heure / demi-journée avec Alba',
    img: '/foto/tartufo-bianco.webp',
    heroImg: '/foto/tartufo-bianco.webp',
    tagline:
      'La truffe blanche d\'Alba est le symbole le plus précieux des Langhe : participer à une recherche avec un trifulau et son chien dressé est l\'une des expériences les plus authentiques du Piémont.',
    descrizioneBreve:
      'Il existe un parfum qu\'on n\'oublie jamais : terreux, intense, sauvage et raffiné. C\'est celui de la truffe blanche d\'Alba (Tuber magnatum Pico). Dans les Langhe et le Monferrato, la recherche de la truffe est un rituel transmis par des générations de trifulau : partir à l\'aube, suivre le chien et attendre la découverte. Dans ce guide, vous trouverez la saisonnalité, l\'expérience privée Truffle Trail avec la famille Ronzano, les temps forts de la Foire de la truffe d\'Alba, des conseils pratiques et une idée de week-end.',
    sezioni: [
      {
        titolo: 'La truffe blanche d\'Alba : l\'or souterrain des Langhe',
        img: '/foto/tartufo-bianco.webp',
        testo: `Dans les Langhe et le Monferrato, la chasse à la truffe n'est pas une simple activité : c'est un rite ancien transmis entre trifulau, les chercheurs de truffes. À l'aube, on entre dans les bois avec un chien dressé, on marche entre chênes et saules en écoutant la terre, puis on attend le moment où le chien signale l'endroit juste.

La vedette absolue est la truffe blanche d'Alba (Tuber magnatum Pico), la variété la plus précieuse et la plus recherchée. C'est une expérience profondément liée à l'identité de cette région et, une fois vécue, elle change complètement le regard que l'on porte sur le paysage.`,
        lista: [
          'Parfum intense et inimitable du Tuber magnatum Pico',
          'Tradition transmise de génération en génération chez les trifulau',
          'Recherches à l\'aube dans les bois avec des chiens dressés',
          'Expérience identitaire des Langhe et du Monferrato',
        ],
        tags: ['Truffe blanche d\'Alba', 'Trifulau', 'Expérience authentique'],
      },
      {
        titolo: 'Saison de la truffe',
        img: '/foto/Ricerca-tartufo.webp',
        testo: `La truffe blanche d'Alba arrive à maturité entre septembre et décembre, avec un pic aromatique en octobre et novembre. Durant cette période, tout le territoire s'anime : marchés, osterie et caves tournent autour de la culture de la truffe.

D'autres variétés sont disponibles pendant l'année : la truffe noire d'été (Tuber aestivum) de mai à août et le Bianchetto (Tuber borchii) de janvier à avril. Chaque saison offre donc quelque chose à chercher.`,
        lista: [
          'Truffe blanche d\'Alba : septembre → décembre',
          'Haute saison : octobre et novembre',
          'Truffe noire d\'été : mai → août',
          'Bianchetto : janvier → avril',
        ],
        tags: ['Saisonnalité de la truffe', 'Tuber magnatum', 'Tuber aestivum'],
      },
      {
        titolo: 'Vivez la recherche avec Truffle Trail et la famille Ronzano',
        img: '/foto/Tartufai.webp',
        testo: `Pour vivre la recherche de truffes en première personne, nous collaborons avec Truffle Trail, organisé par la famille Ronzano de Costigliole d'Asti : trifulau depuis trois générations.

La Tenuta Ronzano est née de la vision de Renato Ronzano. Aujourd'hui, la tradition continue avec Giovanni (actif dans le monde de la truffe depuis 1963), Marco (sélection et distribution) et Gianluca (dressage des chiens et recherche sur le terrain). L'excursion dure environ une heure et elle est privée, réservée uniquement à votre groupe.`,
        dettagli: [
          {
            titolo: 'Comment fonctionne l\'expérience Truffle Trail',
            testo:
              'Rendez-vous dans les bois de la Tenuta Ronzano (lieu communiqué après réservation). 1) Introduction à l\'histoire, aux espèces et à l\'écologie de la truffe. 2) Entrée dans les bois avec les chiens dressés. 3) Phase de recherche et lecture des signaux du chien. 4) Découverte et évaluation de la truffe par le toucher et l\'odorat avec les explications d\'un expert.',
            href: 'https://www.truffletrail.it',
            linkLabel: 'Site officiel de Truffle Trail',
          },
          {
            titolo: 'Contact rapide pour Truffle Trail',
            testo: 'WhatsApp direct pour les informations pratiques sur l\'expérience.',
            href: 'https://wa.me/393475806188',
            linkLabel: 'WhatsApp Truffle Trail (+39 347 580 6188)',
          },
        ],
        tags: ['Truffle Trail', 'Famille Ronzano', 'Chasse privée à la truffe'],
      },
      {
        titolo: 'Remise réservée aux clients de l\'hôtel',
        testo: `Les hôtes de l'Hotel Langhe & Monferrato peuvent bénéficier d'un tarif dédié pour l'expérience Truffle Trail.

Pour réserver à ce tarif spécial, il suffit de passer par notre réception : nous organisons tout, du créneau horaire au point de rendez-vous. Ne réservez pas directement en ligne avant de nous avoir contactés, afin de profiter du tarif partenaire.`,
        tags: ['Remise clients hôtel', 'Réservation assistée', 'Expérience partenaire'],
      },
      {
        titolo: 'La Foire internationale de la truffe blanche d\'Alba',
        testo: `Chaque automne, Alba accueille la Foire de la truffe, l'un des plus grands événements œnogastronomiques d'Italie. Si la chasse à la truffe vous emmène dans les bois, la Foire vous plonge au cœur de la culture locale.

Vous y trouverez le Marché mondial de la truffe, des cooking shows, des dégustations de vins, des cours de cuisine et des activités culturelles pour adultes et enfants. Ce guide est intemporel : pour les dates et le programme mis à jour, consultez toujours les canaux officiels de la Foire.`,
        lista: [
          'Marché mondial de la truffe avec Commission de qualité',
          'Cooking shows et événements gourmet au coucher du soleil',
          'Analyse sensorielle guidée de la truffe avec des experts',
          'Dégustations de Barolo, Barbaresco, Nebbiolo et Moscato',
          'Activités familiales et folklore local',
        ],
        links: [
          { label: 'Site officiel de la Foire de la truffe', href: 'https://www.fieradeltartufo.org' },
          { label: 'Lieu de la foire, Google Maps', href: 'https://maps.google.com/?q=Piazza+Medford+3+Alba' },
        ],
        tags: ['Foire de la truffe', 'Alba', 'Événements œnogastronomiques'],
      },
      {
        titolo: 'Comment organiser votre week-end truffe',
        img: '/foto/Cane-cerca-tartufo.webp',
        testo: `Programme idéal : matinée dans les bois avec Truffle Trail à Costigliole, après-midi à Alba entre centre historique et marché de la truffe, soirée dans une osteria avec tajarin, œufs ou fondue à la truffe.

Pour réduire le stress et les temps de trajet, demandez à notre réception : nous créons un itinéraire sur mesure et gérons les réservations avec nos partenaires.`,
        lista: [
          'Matin : chasse à la truffe dans les bois',
          'Après-midi : Alba et marché de la truffe',
          'Soir : dîner traditionnel autour de plats à la truffe',
        ],
        links: [
          { label: 'Itinéraire Costigliole d\'Asti → Alba, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Alba+Cuneo' },
        ],
        tags: ['Week-end truffe', 'Itinéraire Langhe', 'Expériences sur mesure'],
      },
    ],
    infoPratiche: {
      come: 'Point de rendez-vous dans les bois de la Tenuta Ronzano (Costigliole d\'Asti). Alba se trouve à environ 30 km de l\'hôtel, soit moins de 40 minutes en voiture.',
      periodo: 'Toute l\'année (l\'espèce de truffe varie selon la saison). Saison de la truffe blanche : septembre-décembre.',
      cosaDPortare: 'Chaussures confortables ou de trekking, vêtements en couches, veste légère, smartphone bien chargé.',
      ingressiPaganti: 'Expérience privée Truffle Trail avec tarifs dédiés pour les clients de l\'hôtel (sur demande à la réception).',
    },
    linkInterni: [
      { label: 'Réservez votre séjour et activez la remise Truffle Trail', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contactez-nous pour réserver votre chasse à la truffe', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Découvrez les offres food & wine', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'cattedrali-sotterranee',
    next: 'castelli-del-monferrato',
  },

  {
    slug: 'castelli-del-monferrato',
    nome: 'Châteaux du Monferrato et des Langhe',
    sottotitolo: 'Guide complet des forteresses, de l\'histoire et des paysages UNESCO',
    categoria: 'Expériences locales',
    categoryIcon: 'fa-chess-rook',
    distanzaDallHotel: 'De 5 minutes à 1 heure de l\'hôtel',
    tempoVisita: 'Une journée complète',
    img: '/foto/castelli-nel-monferrato.webp',
    heroImg: '/foto/castelli-nel-monferrato.webp',
    tagline:
      'Un territoire bâti en pierre : châteaux, forteresses et résidences historiques entre Monferrato et Langhe, avec des itinéraires parfaits au départ de notre hôtel.',
    descrizioneBreve:
      'Le Monferrato et les Langhe font partie des zones d\'Italie ayant la plus forte densité de châteaux au kilomètre carré. Ce ne sont pas de simples vestiges : ils ont accueilli des nobles, des diplomates, des rois et des figures clés de l\'unification italienne. Du château de Costigliole d\'Asti, à quelques minutes de l\'hôtel, aux forteresses au milieu des vignobles UNESCO, ce guide rassemble les étapes les plus panoramiques avec informations pratiques et liens utiles.',
    sezioni: [
      {
        titolo: 'Un territoire bâti en pierre',
        img: '/foto/castello-di-tagliolo-piemonte.webp',
        testo: `Le Monferrato et les Langhe comptent parmi les plus fortes concentrations de châteaux au kilomètre carré en Italie. Ces demeures ne sont pas seulement des monuments : elles ont façonné l'histoire italienne, et beaucoup se visitent aujourd'hui, restaurées et intégrées à des parcours culturels et œnogastronomiques.

Du château dominant Costigliole d'Asti aux forteresses au cœur des vignobles UNESCO, chaque étape est un voyage dans l'histoire mêlée au paysage viticole le plus emblématique du Piémont.`,
        lista: [
          'Châteaux médiévaux, forteresses et résidences nobles',
          'Liens avec l\'unification italienne, la diplomatie et l\'histoire locale',
          'Itinéraires faciles sur une journée',
          'Possibilité de combiner avec caves et villages',
        ],
        tags: ['Châteaux du Monferrato', 'UNESCO Langhe', 'Itinéraires historiques'],
      },
      {
        titolo: 'Les châteaux à ne pas manquer',
        img: '/foto/castelli-nel-monferrato.webp',
        testo: `Voici les châteaux les plus intéressants à visiter entre Costigliole, les Langhe et le Monferrato, avec contexte historique et détails pratiques pour bien organiser votre journée.`,
        dettagli: [
          {
            titolo: 'Château de Costigliole d\'Asti',
            testo:
              'Le château emblématique du village, visible depuis toute la vallée. Les premières traces remontent à 1061. Évolué d\'une forteresse médiévale en résidence noble, il combine une architecture inspirée de Benedetto Alfieri, une entrée monumentale de Filippo Juvarra et un renouveau néomédiéval du XIXe siècle. Il abrite aujourd\'hui l\'ICIF, le Consortium Barbera d\'Asti et vins du Monferrato, et fait partie de Castelli Aperti. Le jardin avant est un parc public depuis 1928.',
            href: 'https://maps.google.com/?q=Piazza+Vittorio+Emanuele+II+Costigliole+d%27Asti',
            linkLabel: 'Château de Costigliole, Google Maps',
          },
          {
            titolo: 'Château de Grinzane Cavour',
            testo:
              'Au cœur des Langhe UNESCO, lié à Camillo Benso comte de Cavour, maire de Grinzane pendant 17 ans et figure clé de la modernisation viticole locale. Il abrite aujourd\'hui le musée des Langhe, des souvenirs de Cavour, l\'œnothèque régionale piémontaise Cavour et la vente aux enchères mondiale de la truffe blanche d\'Alba.',
            href: 'https://maps.google.com/?q=Via+Castello+5+Grinzane+Cavour',
            linkLabel: 'Château de Grinzane Cavour, Google Maps',
          },
          {
            titolo: 'Château des Paleologi, Casale Monferrato',
            testo:
              'Grande forteresse du marquisat de Monferrato, construite à partir de 1352 sur ordre de Giovanni II Paleologo. Agrandie au fil des siècles sous les Gonzague puis sous les Savoie, elle conserve chemins de ronde, espaces souterrains et reliefs des dynasties historiques Aleramo, Paleologi et Gonzaga. Elle accueille aujourd\'hui également l\'œnothèque régionale du Monferrato.',
            href: 'https://maps.google.com/?q=Piazza+Castello+Casale+Monferrato',
            linkLabel: 'Château des Paleologi, Google Maps',
          },
          {
            titolo: 'Château de Camino',
            testo:
              'L\'un des châteaux les plus panoramiques de la région, avec une tour quadrangulaire de 44 mètres. Ses origines remontent au XIe siècle ; il a longtemps été lié à la famille Scarampi. Il est privé et ouvre à certaines occasions avec visites guidées et dégustations du domaine.',
            href: 'https://maps.google.com/?q=Via+Castello+30+Camino+AL',
            linkLabel: 'Château de Camino, Google Maps',
          },
          {
            titolo: 'Château de Cereseto',
            testo:
              'Demeure panoramique dans la partie basse de Casale Monferrato, appréciée pour sa position, ses tours d\'angle et le paysage viticole environnant. D\'origine médiévale, son apparence actuelle résulte de restaurations successives qui ont préservé tout son charme.',
            href: 'https://maps.google.com/?q=Castello+di+Cereseto',
            linkLabel: 'Château de Cereseto, Google Maps',
          },
        ],
        tags: ['Costigliole d\'Asti', 'Grinzane Cavour', 'Casale Monferrato'],
      },
      {
        titolo: 'Comment organiser une journée châteaux',
        testo: `La région autour de l'hôtel est idéale pour des itinéraires d'une demi-journée ou d'une journée entière. Nous pouvons vous aider à construire votre parcours selon la saison, les horaires d'ouverture et vos centres d'intérêt (histoire, panoramas, dégustations, villages).`,
        lista: [
          'Parcours matin : château de Costigliole (à pied) + centre historique',
          'Journée Langhe : Grinzane Cavour + Alba',
          'Journée Monferrato : Camino + Casale Monferrato',
          'Combo conseillé : châteaux + caves + déjeuner en osteria',
        ],
        links: [
          { label: 'Château de Costigliole d\'Asti, Google Maps', href: 'https://maps.google.com/?q=Piazza+Vittorio+Emanuele+II+Costigliole+d%27Asti' },
          { label: 'Château de Grinzane Cavour, site officiel', href: 'https://www.castellogrinzane.com' },
        ],
        tags: ['Itinéraire châteaux', 'Week-end Monferrato', 'Conseils réception'],
      },
    ],
    infoPratiche: {
      come: 'Départ idéal depuis notre hôtel : Costigliole à pied, Grinzane ~40 min, Casale ~50 min, Camino ~55 min, Cereseto ~1 heure.',
      periodo: 'Toute l\'année. Vérifiez toujours les ouvertures spéciales et horaires de chaque château.',
      cosaDPortare: 'Chaussures confortables, pièce d\'identité, appareil photo et veste légère pour les visites en soirée.',
      ingressiPaganti: 'Tarifs variables selon le site. Exemple Grinzane Cavour : plein tarif 8 €, réduit 6 €, enfants 6-14 ans 3 €.',
    },
    linkInterni: [
      { label: 'Contactez-nous pour un itinéraire châteaux sur mesure', href: '/contatti', icon: 'fa-car' },
      { label: 'Réservez votre séjour au cœur du Monferrato', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Découvrez les offres week-end entre châteaux et caves', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'caccia-al-tartufo',
    next: 'big-bench',
  },

  {
    slug: 'big-bench',
    nome: 'Big Benches : les bancs géants du Piémont',
    sottotitolo: 'Asseyez-vous sur un banc et redevenez enfant',
    categoria: 'Expériences locales',
    categoryIcon: 'fa-chair',
    distanzaDallHotel: '5 à 35 km de l\'hôtel',
    tempoVisita: 'Demi-journée ou itinéraire sur la journée',
    img: '/foto/le-grandi-panchine.webp',
    heroImg: '/foto/le-grandi-panchine.webp',
    tagline:
      'Imaginez vous asseoir sur un banc si grand que les collines paraissent plus vastes, les vignes plus profondes et le ciel plus haut. C\'est l\'effet Big Bench : un banc géant coloré qui change votre perspective sur tout.',
    descrizioneBreve:
      'Les Big Benches sont des installations artistiques géantes nées d\'une idée du designer américain Chris Bangle en 2010. Il en existe aujourd\'hui plus de 300 dans le monde, principalement concentrées au Piémont et dans la zone Langhe-Monferrato. Chaque banc offre une vue spectaculaire et un moment simple, presque enfantin, qui transforme votre manière de vivre le territoire. Depuis l\'hôtel, les plus proches sont à quelques minutes seulement.',
    sezioni: [
      {
        titolo: 'Asseyez-vous sur un banc et redevenez enfant',
        img: '/foto/le-grandi-panchine.webp',
        testo: `Imaginez vous asseoir sur un banc si grand que les collines autour de vous paraissent encore plus vastes, les vignobles plus profonds et le ciel plus haut. Vos pieds ne touchent pas le sol, et la vue s'ouvre d'une façon totalement nouvelle. Un moment simple, presque enfantin, qui change votre perspective sur tout.

C'est cela, l'effet Big Bench : un banc géant coloré d'environ deux mètres cinquante de haut et trois mètres de large, installé dans des points panoramiques spectaculaires des collines piémontaises.

Ce n'est pas seulement une installation artistique ni un objet ludique. Derrière chaque banc géant se cache un projet qui a transformé la façon de vivre et de raconter cette terre.`,
        tags: ['Expérience', 'Design', 'Point de vue'],
      },
      {
        titolo: 'Le projet : une histoire née comme un jeu',
        testo: `Tout a commencé en 2010 dans un hameau de Clavesana, dans les Langhe, où le designer américain Chris Bangle s'est installé avec sa femme Catherine en 2009. Bangle n'est pas un designer ordinaire : il a travaillé pour Fiat et Alfa Romeo, puis dirigé pendant plus de vingt ans le centre de design de BMW, avant de choisir les Langhe comme maison.

Un après-midi, avec des amis et des voisins, Chris construit le premier banc géant sur un terrain de Clavesana. L'idée est simple et brillante : créer quelque chose qui aide les gens à retrouver un regard d'enfant face au merveilleux panorama des Langhe.

La réaction est immédiate : les gens viennent, montent dessus, prennent des photos et s'émerveillent. Ce qui avait commencé comme une idée conviviale devient rapidement quelque chose de beaucoup plus grand.

En 2010 naît le Big Bench Community Project (BBCP), une association sans but lucratif fondée par Chris et Catherine Bangle, avec un objectif clair : soutenir les communautés locales, promouvoir l'artisanat du territoire et valoriser le tourisme grâce à des bancs géants installés dans des lieux panoramiques. Le design du banc, protégé par copyright, est concédé gratuitement à ceux qui souhaitent en construire un, à condition de respecter tous les éléments du concept original.

Depuis ce premier banc rouge de Clavesana, le projet s'est développé de manière extraordinaire : on compte aujourd'hui plus de 300 Big Benches dans le monde, dans toutes les régions d'Italie et dans plusieurs pays étrangers, de l'Écosse aux États-Unis. Le Piémont, et en particulier les Langhe et le Monferrato, restent le cœur du projet et la zone la plus dense.`,
        tags: ['Histoire', 'Chris Bangle', 'BBCP'],
      },
      {
        titolo: 'Le passeport Big Bench',
        testo: `L'un des aspects les plus appréciés du projet est le passeport officiel Big Bench : un petit livret que l'on peut acheter dans de nombreux points tampons de la région et compléter au fur et à mesure des visites. Chaque Big Bench possède un tampon unique représentant le lieu et le banc.

C'est devenu un petit jeu d'exploration adoré autant des adultes que des enfants : chaque tampon collectionné correspond à une colline visitée, un point de vue découvert, un village exploré.

Les passeports et tampons sont disponibles dans les bars, agriturismi, caves et commerces locaux proches de chaque banc.`,
        tags: ['Passeport', 'Jeu', 'Exploration'],
      },
      {
        titolo: 'Big Benches près de l\'hôtel',
        testo: `Costigliole d'Asti se trouve dans l'une des zones les plus riches en Big Benches de la région. Voici les bancs facilement accessibles depuis notre hôtel, avec quelques conseils pour organiser une journée entre panoramas et émerveillement.`,
        dettagli: [
          {
            titolo: 'Big Bench n° 17, Costigliole d\'Asti (Bricco Lu\')',
            testo:
              'Notre banc de référence, de couleur marron. Situé au belvédère de Bricco Lu\', il offre un panorama spectaculaire sur les collines d\'Asti vers le Monferrato et les Langhe. Parfait pour une promenade au coucher du soleil, à seulement quelques minutes de l\'hôtel. C\'est l\'une des deux Big Benches de Costigliole.',
            href: 'https://maps.google.com/?q=Big+Bench+17+Costigliole+d%27Asti+Bricco+Lu',
            linkLabel: 'Big Bench n° 17, Google Maps',
          },
          {
            titolo: 'Big Bench n° 18, Costigliole d\'Asti (Strada Castelletto)',
            testo:
              'Le deuxième banc de Costigliole, de couleur orange. Situé sur la Strada Castelletto, il offre un point de vue légèrement différent sur les collines d\'Asti par rapport au n° 17. Costigliole est l\'une des rares communes à posséder deux bancs, preuve de son importance dans le Big Bench Community Project.',
            href: 'https://maps.google.com/?q=Big+Bench+18+Costigliole+d%27Asti+Castelletto',
            linkLabel: 'Big Bench n° 18, Google Maps',
          },
          {
            titolo: 'Big Bench n° 10, Castelnuovo Calcea',
            testo:
              'Banc violet immergé dans la nature dans le parc Lacourt, accessible par un chemin de terre à travers les vignes. Castelnuovo Calcea est un petit village de l\'Astigiano à quelques kilomètres de Costigliole, connu pour ses vins. Le contraste entre le banc violet et les rangs verts est l\'une des scènes les plus photogéniques de la région.',
            href: 'https://maps.google.com/?q=Big+Bench+10+Castelnuovo+Calcea',
            linkLabel: 'Big Bench n° 10, Google Maps',
          },
          {
            titolo: 'Big Bench n° 24, Moasca',
            testo:
              'Banc rose avec vue sur les vignobles de l\'Astigiano. Moasca est un tout petit village entre Costigliole et Canelli, au cœur du pays de la Barbera d\'Asti. Le banc se trouve sur la Piazza Castello, le point le plus panoramique du bourg. Distance : environ 12 km de l\'hôtel.',
            href: 'https://maps.google.com/?q=Big+Bench+24+Moasca',
            linkLabel: 'Big Bench n° 24, Google Maps',
          },
          {
            titolo: 'Big Bench n° 26, Coazzolo',
            testo:
              'L\'un des villages les plus petits et les plus paisibles de la région, Coazzolo domine les collines frontalières entre les provinces d\'Asti et de Cuneo. Son banc offre de larges vues vers le sud, en direction des Langhe. Un lieu calme et peu fréquenté, parfait pour la solitude et la contemplation. Distance : environ 15 km de l\'hôtel.',
            href: 'https://maps.google.com/?q=Big+Bench+26+Coazzolo',
            linkLabel: 'Big Bench n° 26, Google Maps',
          },
          {
            titolo: 'Big Bench n° 30, Canelli',
            testo:
              'Banc jaune Moscato inspiré du vin le plus célèbre de la région. Situé sur la colline Merlini, il regarde vers le nord avec une vue spectaculaire sur les collines de Canelli et les cathédrales souterraines cachées sous les vignes. Canelli est aussi la ville piémontaise du vin mousseux, avec des caves historiques classées à l\'UNESCO. Distance : environ 26 km de l\'hôtel.',
            href: 'https://maps.google.com/?q=Big+Bench+30+Canelli',
            linkLabel: 'Big Bench n° 30, Google Maps',
          },
          {
            titolo: 'Big Bench n° 25, Fontanile',
            testo:
              'Banc situé dans les collines du Haut Monferrato, dans un cadre rural authentique et moins fréquenté. Fontanile est l\'une des destinations les moins connues de la région, idéale pour ceux qui souhaitent sortir des circuits classiques et découvrir des coins paisibles. Parfait pour les visites contemplatives et la photographie. Distance : environ 18 km de l\'hôtel.',
            href: 'https://maps.google.com/?q=Big+Bench+25+Fontanile',
            linkLabel: 'Big Bench n° 25, Google Maps',
          },
          {
            titolo: 'Big Bench n° 14, Alba (zone Scaparone)',
            testo:
              'Plus éloigné, mais au cœur des Langhe UNESCO, ce banc se trouve dans la zone de Scaparone à Alba et offre de spectaculaires vues sur les vignobles du Barolo et du Barbaresco. À combiner avec une visite de la ville pour une expérience complète dans l\'une des zones viticoles les plus prestigieuses du Piémont. Distance : environ 35 km de l\'hôtel.',
            href: 'https://maps.google.com/?q=Big+Bench+14+Alba+Scaparone',
            linkLabel: 'Big Bench n° 14, Google Maps',
          },
          {
            titolo: 'Big Bench n° 23, Neive',
            testo:
              'Neive est l\'un des plus beaux villages d\'Italie et sa Big Bench bénéficie d\'une position panoramique à couper le souffle sur les collines des Langhe. À combiner avec une promenade dans le centre historique, entre ruelles médiévales, caves historiques et atmosphère d\'un vrai bourg piémontais. Distance : environ 38 km de l\'hôtel.',
            href: 'https://maps.google.com/?q=Big+Bench+23+Neive',
            linkLabel: 'Big Bench n° 23, Google Maps',
          },
        ],
        tags: ['Bancs à proximité', 'Itinéraire', 'Distances'],
      },
      {
        titolo: 'Comment organiser un tour Big Bench',
        testo: `Voici un itinéraire possible sur une demi-journée près de l'hôtel :

Matin : commencez par la Big Bench n° 17 à Bricco Lu' (Costigliole) à la meilleure lumière, puis continuez vers Castelnuovo Calcea (n° 10) et Moasca (n° 24). Prenez le petit-déjeuner ou une pause dans les établissements partenaires pour obtenir les tampons du passeport.

Après-midi : poursuivez vers Coazzolo (n° 26) et Canelli (n° 30), avec un arrêt pour admirer le centre historique et les caves souterraines UNESCO.

Un itinéraire plus long dans les Langhe peut combiner Alba (n° 14), Neive (n° 23) et une dégustation en cave.

La réception de l'hôtel peut vous aider à construire le meilleur parcours selon la saison, l'heure du coucher du soleil et le nombre de tampons que vous souhaitez collectionner. Nous recommandons les visites au coucher du soleil pour la lumière dorée : des moments inoubliables.`,
        tags: ['Itinéraire', 'Organisation', 'Conseils pratiques'],
      },
      {
        titolo: 'Ressources officielles',
        testo: `Le Big Bench Community Project met à disposition plusieurs outils pour organiser une visite complète :

Carte interactive : disponible sur le site officiel et sur Google Maps en recherchant « Big Bench ». Elle permet de localiser tous les bancs avec GPS et de planifier le meilleur itinéraire.

Passeport officiel : disponible dans des bars, agriturismi, caves et musées proches des Big Benches. Chaque banc possède un tampon unique.

Réseaux sociaux : suivez #BigBench sur Instagram pour trouver de l'inspiration, voir les photos des visiteurs et suivre les nouveautés du projet.

En automne, lorsque les vignes deviennent rouges et orange, les photos sont particulièrement belles. Organisez votre visite pour profiter des couleurs saisonnières les plus spectaculaires.`,
        links: [
          { label: 'Site officiel Big Bench Community Project', href: 'https://www.bigbenchcommunityproject.org/' },
          { label: 'Carte interactive sur Google Maps', href: 'https://www.google.com/maps/search/Big+Bench/' },
          { label: 'Suivre #BigBench sur Instagram', href: 'https://www.instagram.com/explore/tags/bigbench/' },
        ],
        tags: ['Ressources', 'Informations', 'Organisation'],
      },
    ],
    infoPratiche: {
      come: 'En voiture : accès direct depuis la réception. Certains bancs sont aussi accessibles avec une courte marche depuis les parkings voisins. Carte disponible sur bigbenchcommunityproject.org.',
      periodo: 'Toute l\'année. Meilleure période : septembre-novembre pour les couleurs d\'automne. Mai-juin pour des paysages très verts.',
      cosaDPortare: 'Chaussures confortables, smartphone chargé (pour les photos), passeport pour les tampons, protection solaire, appareil photo.',
      ingressiPaganti: 'Tous gratuits et ouverts au public. Passeport : environ 10 euros.',
    },
    linkInterni: [
      { label: 'Chambres quadruples, venez avec les enfants !', href: '/camere/quadrupla', icon: 'fa-child' },
      { label: 'Alba : guide complet', href: '/territorio/alba', icon: 'fa-map' },
      { label: 'Canelli et les cathédrales souterraines', href: '/territorio/cattedrali-sotterranee', icon: 'fa-wine-bottle' },
      { label: 'Forfait week-end : 2 nuits et bancs géants', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'castelli-del-monferrato',
    next: 'ebike-monferrato',
  },

  {
    slug: 'ebike-monferrato',
    nome: 'E-bike dans le Monferrato et les Langhe',
    sottotitolo: 'Guide des itinéraires panoramiques avec Girobike',
    categoria: 'Outdoor & nature',
    categoryIcon: 'fa-bicycle',
    distanzaDallHotel: 'Canelli et alentours (10-25 km)',
    tempoVisita: 'Demi-journée, journée complète ou plusieurs jours',
    img: '/foto/giro-in -biciletta-nel-monferrato.webp',
    heroImg: '/foto/giro-in -biciletta-nel-monferrato.webp',
    tagline:
      'Parcourez les vignobles UNESCO, les châteaux et les villages historiques avec des itinéraires e-bike sur mesure : faciles à suivre, adaptés à tous les niveaux et parfaits pour découvrir la région en douceur.',
    descrizioneBreve:
      'Girobike, basé à Canelli, propose la location de vélos électriques pour explorer les Langhe et le Monferrato de manière simple et durable. Même sans entraînement particulier, il est possible d\'affronter confortablement les collines et les routes panoramiques. Depuis l\'hôtel, nous pouvons organiser toute l\'expérience pour vous : itinéraire, réservation, logistique et transferts sur demande.',
    sezioni: [
      {
        titolo: 'Le service Girobike : la liberté de l\'e-bike pour tous',
        testo: `Girobike est un service spécialisé dans l'e-bike avec départ de Canelli. Les vélos à assistance électrique permettent d'affronter les portions vallonnées avec moins d'effort tout en conservant le plaisir du voyage lent.

C'est l'idéal pour les couples, les familles et les petits groupes qui veulent profiter du paysage sans stress : vignobles, routes blanches, panoramas UNESCO et villages authentiques.`,
        lista: [
          'E-bikes adaptés même aux personnes peu entraînées',
          'Itinéraires panoramiques entre Langhe, Roero et Monferrato',
          'Tourisme lent, durable et immersif',
          'Expérience personnalisable selon le niveau et la durée',
        ],
        tags: ['E-bike', 'Girobike', 'Tourisme lent'],
      },
      {
        titolo: 'Autoguidé ou guidé : choisissez votre style',
        testo: `Vous pouvez choisir entre deux formules pratiques.

Pour les circuits autoguidés, des traces GPX sont fournies afin de les charger sur votre smartphone avec des applications gratuites : le suivi de l'itinéraire est intuitif. Sinon, vous pouvez demander l'accompagnement d'un guide professionnel pour découvrir des routes secondaires et des endroits moins connus.`,
        lista: [
          'Circuits autoguidés avec traces GPX',
          'Tours avec guide qualifié',
          'Routes à faible circulation',
          'Assistance à l\'organisation avant le départ',
        ],
        tags: ['GPX', 'Guide qualifié', 'Itinéraires sur mesure'],
      },
      {
        titolo: 'Top 5 des itinéraires conseillés',
        testo: `La région offre des itinéraires très différents, du plus relax au plus sportif. Voici les parcours les plus demandés, tous adaptables à votre groupe.

Pour chaque itinéraire, nous pouvons vous recommander des haltes food & wine et des points panoramiques idéaux pour les photos et les pauses.`,
        dettagli: [
          {
            titolo: 'Autour de Canelli (Moscato Tour), environ 40 km',
            testo: 'Panoramas sur les vignobles de Moscato autour de Canelli, avec des montées douces et des portions parfaites pour prendre le rythme du vélo à assistance électrique.',
          },
          {
            titolo: 'Vers Acqui Terme, environ 62 km',
            testo: 'Un itinéraire mêlant nature et histoire, jusqu\'à la ville thermale d\'origine romaine connue pour la source de La Bollente.',
          },
          {
            titolo: 'Barbaresco et villages historiques, environ 62 km',
            testo: 'Un itinéraire entre culture et paysage à travers Barbaresco, Neive et Treiso, avec de nombreux panoramas entre vignes et châteaux.',
          },
          {
            titolo: 'Nizza et la zone de la Barbera, environ 70 km',
            testo: 'Circuit centré sur les zones de production de la Barbera d\'Asti, traversant l\'un des paysages viticoles les plus emblématiques du Piémont.',
          },
          {
            titolo: 'Roccaverano et Alta Langa, boucle d\'environ 77 km',
            testo: 'Itinéraire plus exigeant avec davantage de dénivelé, idéal pour ceux qui souhaitent une journée intense entre collines et villages de hauteur.',
          },
        ],
        tags: ['Itinéraires e-bike', 'Canelli', 'Monferrato'],
      },
      {
        titolo: 'Durées disponibles et organisation complète via l\'hôtel',
        testo: `L'expérience peut être organisée sous plusieurs formats : demi-journée, journée complète, 2 jours ou 3 jours. En fonction de votre temps disponible, nous construisons un programme équilibré entre pédalage, dégustations et visites.

Pour un confort maximal, notre équipe peut organiser l'expérience de bout en bout, y compris les services supplémentaires (transfert sur demande), afin que vous n'ayez plus qu'à profiter du territoire.`,
        lista: [
          'Formule demi-journée',
          'Formule journée complète',
          'Programmes sur 2 ou 3 jours',
          'Assistance de l\'hôtel pour logistique et réservations',
        ],
        tags: ['Itinéraire sur mesure', 'Transfert', 'Expérience organisée'],
      },
    ],
    infoPratiche: {
      come: 'Départ dans la zone de Canelli. Depuis l\'hôtel, nous pouvons coordonner l\'horaire, le point de rendez-vous et la logistique, y compris les services de transfert sur demande.',
      periodo: 'Recommandé de mars à novembre. La disponibilité varie selon la météo et la saison.',
      cosaDPortare: 'Chaussures de sport, eau, lunettes de soleil, crème solaire, coupe-vent léger, smartphone chargé.',
      ingressiPaganti: 'Différentes formules disponibles (demi-journée, journée complète, 2-3 jours). Demandez à la réception le forfait le plus adapté à votre séjour.',
    },
    linkInterni: [
      { label: 'Contactez-nous pour un tour e-bike sur mesure', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Réservez votre séjour et organisez l\'expérience', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Découvrez d\'autres activités sur le territoire', href: '/territorio', icon: 'fa-map' },
    ],
    prev: 'big-bench',
    next: 'birrificio-nicese',
  },

  {
    slug: 'birrificio-nicese',
    nome: 'Nuovo Birrificio Nicese',
    sottotitolo: 'Visite de production et dégustation artisanale',
    categoria: 'Dégustation locale',
    categoryIcon: 'fa-beer',
    distanzaDallHotel: 'Nizza Monferrato (environ 15 km)',
    tempoVisita: '1 h 30 - 2 h',
    img: '/foto/birrificio-nicese-nizza-monferrato.webp',
    heroImg: '/foto/birrificio-nicese-nizza-monferrato.webp',
    tagline:
      'Une expérience immersive dans la bière artisanale, à travers les espaces de production, les récits des brasseurs et une dégustation guidée de différents styles.',
    descrizioneBreve:
      'Nuovo Birrificio Nicese est né d\'une vision artisanale claire : matières premières sélectionnées, respect des temps naturels et fort ancrage territorial. La visite est parfaite pour les hôtes qui veulent aller au-delà du vin et découvrir une autre excellence locale. Depuis l\'hôtel, nous pouvons organiser l\'expérience complète afin que vous profitiez de la dégustation en toute sérénité.',
    sezioni: [
      {
        titolo: 'L\'esprit de la brasserie : artisanat et territoire',
        testo: `Le projet de la brasserie repose sur une philosophie claire : qualité, identité locale et procédés de production respectueux des temps de maturation.

Chaque bière naît d'un équilibre entre technique et sensibilité artisanale, avec des styles qui mettent en valeur les arômes, la clarté aromatique et la buvabilité.`,
        lista: [
          'Sélection rigoureuse des matières premières',
          'Production artisanale en petits lots',
          'Contrôle des phases de fermentation et de maturation',
          'Identité territoriale dans chaque étiquette',
        ],
        tags: ['Bière artisanale', 'Production locale', 'Qualité'],
      },
      {
        titolo: 'L\'expérience complète : visite + récit + dégustation',
        testo: `La visite emmène les hôtes au cœur de la brasserie : des salles de brassage aux fermenteurs, jusqu'à l'espace dégustation.

Tout au long du parcours, les différentes étapes de production sont expliquées de manière claire, du concassage à la fermentation, avec un focus sur les ingrédients, les styles et les différences sensorielles.`,
        dettagli: [
          {
            titolo: 'Visite de production',
            testo: 'Accès à la zone technique pour observer les équipements, les phases du procédé et les outils utilisés dans la production artisanale.',
          },
          {
            titolo: 'Récit des brasseurs',
            testo: 'Explication des choix de production et des secrets techniques qui définissent l\'arôme, la structure et le caractère de la bière.',
          },
          {
            titolo: 'Dégustation guidée',
            testo: 'Dégustation des bières disponibles avec notes sur les arômes, les styles et les accords, dans une ambiance authentique et conviviale.',
          },
        ],
        tags: ['Visite de brasserie', 'Maître brasseur', 'Dégustation'],
      },
      {
        titolo: 'Ce que la visite comprend généralement',
        testo: `L'expérience convient aussi bien aux petits groupes qu'aux passionnés individuels, avec un accompagnement guidé du début à la fin.

À la fin, il est possible d'acheter les bières directement à la boutique de la brasserie.`,
        lista: [
          'Guide dédié pendant la visite',
          'Explication technique de la méthode artisanale',
          'Dégustation des bières disponibles',
          'Achat direct à la boutique de l\'entreprise',
        ],
        tags: ['Forfait expérience', 'Dégustation de bière', 'Boutique de brasserie'],
      },
      {
        titolo: 'Pourquoi l\'associer à une journée dans le Monferrato',
        testo: `Nizza Monferrato est une étape parfaite dans un itinéraire entre vignobles, villages et routes cyclables. Cette expérience se combine très bien avec une sortie e-bike dans la zone « Nizza et Barbera », pour créer une journée complète entre plein air et dégustation.

Pour un maximum de confort, vous n'avez rien à organiser par vous-même : nous pouvons coordonner l'ensemble de la visite selon votre programme.`,
        lista: [
          'Idéal après une balade à vélo dans les vignobles',
          'Parfait pour les couples et les groupes d\'amis',
          'Une alternative authentique aux dégustations centrées uniquement sur le vin',
          'Expérience coordonnée par notre équipe',
        ],
        tags: ['Nizza Monferrato', 'Expérience locale', 'Itinéraire combiné'],
      },
    ],
    infoPratiche: {
      come: 'Zone de Nizza Monferrato (AT), à environ 15 km de l\'hôtel. Nous pouvons organiser l\'expérience et la logistique selon votre programme.',
      periodo: 'Disponible toute l\'année selon les horaires. Réservation anticipée via notre équipe recommandée.',
      cosaDPortare: 'Tenue confortable, téléphone chargé, veste légère facultative pour les zones de production.',
      ingressiPaganti: 'Visite et dégustation avec différentes formules selon la taille du groupe. Contactez-nous et nous construirons la meilleure option.',
    },
    linkInterni: [
      { label: 'Contactez-nous pour organiser la visite de la brasserie', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Réservez votre séjour et profitez de l\'expérience complète', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Découvrez aussi le guide e-bike du Monferrato', href: '/territorio/ebike-monferrato', icon: 'fa-bicycle' },
    ],
    prev: 'ebike-monferrato',
    next: 'nizza-e-barbera',
  },

  {
    slug: 'nizza-e-barbera',
    nome: 'Nizza è Barbera',
    sottotitolo: 'Guide 2026 de l\'événement Nizza DOCG',
    categoria: 'Événement food & wine',
    categoryIcon: 'fa-wine-glass-alt',
    distanzaDallHotel: '17 km de l\'hôtel (environ 23 min)',
    tempoVisita: 'Demi-journée ou journée complète',
    img: '/foto/Nizza e barbera nizza monferrato.webp',
    heroImg: '/foto/Nizza e barbera nizza monferrato.webp',
    tagline:
      'Découvrez Nizza è Barbera à Nizza Monferrato : Barbera Forum, dégustations, masterclasses et conseils pratiques pour y aller depuis Costigliole d\'Asti.',
    descrizioneBreve:
      'Si vous séjournez à l\'Hotel Langhe & Monferrato, vous êtes au bon endroit pour vivre Nizza è Barbera, l\'un des événements viticoles les plus authentiques du Piémont. Dans ce guide, vous trouverez quoi faire, quoi déguster, comment organiser votre visite et pourquoi transformer cette journée en parcours entre villages et vignobles UNESCO du Monferrato.',
    sezioni: [
      {
        titolo: 'Nizza è Barbera : de quoi s\'agit-il et pourquoi le déplacement vaut la peine',
        testo: `Nizza è Barbera est la grande fête du vin qui anime chaque mois de mai le centre historique de Nizza Monferrato. L'événement célèbre la Barbera dans ses expressions les plus identitaires à travers un programme diffus de dégustations, de rencontres avec les producteurs, de wine points et de moments culturels.

Pour les visiteurs qui explorent le Monferrato, c'est une occasion idéale de découvrir de près la Nizza DOCG, une appellation phare qui représente l'une des formes les plus abouties de la Barbera piémontaise.`,
        lista: [
          'Événement œnogastronomique majeur du Monferrato',
          'Focus sur la Nizza DOCG et la Barbera d\'Asti DOCG',
          'Dégustations dans tout le centre de Nizza Monferrato',
          'Atmosphère authentique entre places, rues historiques et producteurs locaux',
        ],
        links: [
          { label: 'Site officiel Nizza è Barbera', href: 'https://nizzaebarbera.wine/' },
          { label: 'Nizza Monferrato, Google Maps', href: 'https://maps.google.com/?q=Nizza+Monferrato' },
        ],
        tags: ['Nizza è Barbera', 'Événement vin au Piémont', 'Nizza Monferrato'],
      },
      {
        titolo: 'Que faire pendant l\'événement : forum, wine points et cuisine locale',
        testo: `Le cœur de l'événement est le Barbera Forum, où vous pouvez rencontrer de nombreux producteurs et comparer différentes étiquettes. Dans le centre-ville, les wine points permettent de découvrir le territoire verre après verre en flânant dans les ruelles du bourg.

À côté du vin, la gastronomie tient une place essentielle : entre stands, établissements et restaurants, vous pourrez goûter des spécialités locales comme la belecauda (farinata de Nizza) et d'autres plats traditionnels piémontais.`,
        dettagli: [
          {
            titolo: 'Barbera Forum',
            testo: 'Espace principal de dégustation avec producteurs et comptoirs dédiés à la Nizza DOCG et aux différentes interprétations territoriales de la Barbera.',
          },
          {
            titolo: 'Dégustations dans le centre historique',
            testo: 'Wine points et parcours œnologiques dans les rues de Nizza Monferrato, idéals pour une expérience dynamique et conviviale.',
          },
          {
            titolo: 'Saveurs locales',
            testo: 'Street food et cuisine locale avec des recettes traditionnelles, parfaites avec les vins de l\'événement.',
          },
        ],
        tags: ['Barbera Forum', 'Dégustation Nizza DOCG', 'Food & wine Monferrato'],
      },
      {
        titolo: 'Comment y aller depuis Costigliole d\'Asti : guide pratique',
        testo: `Depuis l'Hotel Langhe & Monferrato, vous rejoignez Nizza Monferrato en environ 23 minutes en voiture (17 km). Le trajet est fluide et panoramique, idéal pour une excursion d'une journée sans stress.

Les jours d'événement, l'affluence est importante : nous conseillons de partir tôt et de se garer dans les zones extérieures, puis de rejoindre les lieux de l'événement à pied.`,
        lista: [
          'Distance hôtel → Nizza Monferrato : environ 17 km',
          'Temps de trajet moyen : environ 23 minutes',
          'Départ conseillé : fin de matinée ou début d\'après-midi',
          'Parkings conseillés : zones dédiées près du centre/de la gare',
        ],
        links: [
          { label: 'Itinéraire Hôtel → Nizza Monferrato (Google Maps)', href: 'https://maps.google.com/?saddr=Hotel+Langhe+Monferrato+Costigliole+d%27Asti&daddr=Nizza+Monferrato' },
        ],
        tags: ['Comment aller à Nizza Monferrato', 'Parking événement', 'Excursion depuis Costigliole'],
      },
      {
        titolo: 'Conseil hôtel : transformez la journée en wine tour UNESCO',
        testo: `Avant ou après l'événement, vous pouvez compléter l'expérience avec un mini-itinéraire au milieu des collines et vignobles UNESCO entre Costigliole d'Asti et la zone de la Nizza DOCG.

C'est un parcours court mais riche en panoramas extraordinaires : rangs de vignes, villages et châteaux racontent l'identité viticole du Monferrato. De retour à l'hôtel, profitez d'un moment de détente pour terminer la journée de la meilleure manière.`,
        lista: [
          'Panoramas UNESCO entre Costigliole et Nizza Monferrato',
          'Idéal avec une visite de cave',
          'Parfait pour les couples et les amateurs d\'œnogastronomie',
          'Retour à l\'hôtel en moins de 30 minutes',
        ],
        tags: ['Wine tour Monferrato', 'Vignobles UNESCO', 'Week-end food & wine'],
      },
      {
        titolo: 'FAQ 2026 : dates, réservations et conseils utiles',
        testo: `Les dates officielles sont publiées chaque année par les organisateurs. En général, l'événement a lieu pendant le deuxième week-end de mai (pour 2026 autour du 8-11 mai, à confirmer).

Pour profiter de l'événement au mieux, réservez très à l'avance votre séjour ainsi que les éventuelles masterclasses ou accès dédiés aux dégustations.`,
        lista: [
          'Quand : généralement le deuxième week-end de mai (dates officielles sur le site)',
          'Réservations : conseillées pour le forum/masterclasses et fortement recommandées pour l\'hébergement',
          'Événement adapté aux familles : oui, ambiance conviviale et centre piéton',
          'Conseil pratique : chaussures confortables, eau et téléphone chargé pour cartes et billets',
        ],
        links: [
          { label: 'Programme officiel 2026 et mises à jour', href: 'https://nizzaebarbera.wine/' },
        ],
        tags: ['Nizza è Barbera 2026', 'FAQ événement vin', 'Réserver un week-end Monferrato'],
      },
    ],
    infoPratiche: {
      come: 'De l\'hôtel à Nizza Monferrato : environ 17 km, soit 23 minutes en voiture.',
      periodo: 'Événement annuel en mai. Vérifiez les dates officielles chaque année sur le site des organisateurs.',
      cosaDPortare: 'Chaussures confortables, veste légère facultative pour le soir, téléphone chargé et réservations/billets à portée de main.',
      ingressiPaganti: 'Selon le programme : certaines zones ou activités peuvent nécessiter un billet ou une accréditation. Vérifiez le site officiel.',
    },
    linkInterni: [
      { label: 'Réservez votre séjour pour Nizza è Barbera', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contactez-nous pour organiser votre week-end vin', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Découvrez d\'autres guides locaux', href: '/territorio', icon: 'fa-map' },
    ],
    prev: 'birrificio-nicese',
    next: null,
  },
];

export function getGuideBySlugFr(slug) {
  return guideFr.find((g) => g.slug === slug) || null;
}

export function getAllGuideSlugsFr() {
  return guideFr.map((g) => ({ slug: g.slug }));
}
