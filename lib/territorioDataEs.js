// ================================================================
// lib/territorioData.js
// Mini guide del territorio, modifica testi, foto e link interni
// ================================================================

export const guideEs = [
  {
    slug: 'asti',
    nome: 'Asti',
    sottotitolo: 'Guía completa de la ciudad de los grandes vinos',
    categoria: 'Ciudad de Arte',
    categoryIcon: 'fa-landmark',
    distanzaDallHotel: '8 kilómetros del hotel',
    tempoVisita: 'Medio día o día completo',
    img: '/foto/Asti.webp',
    heroImg: '/foto/Asti.webp',
    tagline: 'Qué ver en Asti, dónde comer, las mejores bodegas y cuándo visitarla: guía completa de la ciudad del Palio más antiguo de Italia.',
    descrizioneBreve: 'Asti es una de las ciudades más ricas y estratificadas del Piamonte. Fundada por los romanos, transformada en un poderoso municipio medieval, es hoy una ciudad viva donde la tradición del Palio y los grandes vinos DOCG se entrelaza con un panorama gastronómico auténtico y arraigado. Desde Costigliole d\'Asti se puede llegar en menos de 10 minutos.',
    sezioni: [
      {
        titolo: 'Un poco de historia: de Hasta Pompeia al Palio',
        testo: `Asti fue fundada por los romanos entre los siglos II y I a.C. con el nombre de Hasta Pompeia, probablemente en honor al cónsul Gneo Pompeo Estrabón. De la Asti romana quedan vestigios concretos: la Domus Romana con mosaicos originales en el suelo, la Cripta de Sant'Anastasio y la Torre Roja, el monumento de origen romano más antiguo de la ciudad.

En la Edad Media, Asti se convirtió en uno de los municipios más poderosos del Piamonte. Las familias nobles construyeron más de cien torres como símbolo de poder: hoy sobreviven unas veinte en el centro histórico. El Palio de Asti, documentado desde 1275, es más antiguo en documentos escritos que el famoso Palio de Siena. Vittorio Alfieri, uno de los dramaturgos italianos más importantes del siglo XVIII, nació en Asti en 1749.`,
        lista: [
          'Orígenes romanos y fundación de Hasta Pompeia',
          'Boom medieval: la ciudad de las cien torres',
          'El Palio de Asti: 750 años de tradición ininterrumpida',
          'Vittorio Alfieri: dramaturgo e intelectual europeo',
        ],
        links: [
          { label: 'Torre Roja, Google Maps', href: 'https://maps.google.com/?q=Torre+Rossa+Asti' },
          { label: 'Palacio Alfieri y Museo Alfieriano, Google Maps', href: 'https://maps.google.com/?q=Palazzo+Alfieri+Asti' },
        ],
        tags: ['Historia de Asti', 'Hasta Pompeya', 'Palio medieval'],
      },
      {
        titolo: 'Qué ver en Asti: 10 lugares que no debes perderte',
        img: '/foto/asti-monumenti.webp',
        testo: `El centro histórico de Asti es compacto y se puede visitar a pie en pocas horas. Si buscas qué hacer en Asti en un día, empieza desde Piazza Alfieri y camina por Corso Vittorio Alfieri entre pórticos, torres medievales y palacios nobles. Para visitar los museos lo mejor es adquirir el Smart Ticket (10 euros, da acceso a 7 sitios).

Si te alojas con nosotros podrás visitar Asti tranquilamente y regresar al hotel sin prisas.`,
        dettagli: [
          {
            titolo: 'Catedral de Santa María Asunta',
            testo: 'La catedral más grande del Piamonte: más de 80 metros de largo, construida con ladrillos rojos y piedra arenisca. Construido entre los siglos XI y XIV, es un extraordinario ejemplo del gótico lombardo piamontés con frescos del siglo XIV, un políptico de Gandolfino da Roreto y un coro de madera tallada del siglo XV.',
            href: 'https://maps.google.com/?q=Cattedrale+Santa+Maria+Assunta+Asti',
            linkLabel: 'Catedral de Santa María Asunta, Google Maps',
          },
          {
            titolo: 'Torre Troyana (Torre del Reloj)',
            testo: 'El símbolo más reconocible de Asti: 44 metros de altura, 199 escalones para una vista de 360° del centro histórico, las colinas de Monferrato y los Alpes. Construida en el siglo XIII por la familia Troya, hoy alberga la campana de 1531, una de las más antiguas del Piamonte que aún está en funcionamiento.',
            href: 'https://maps.google.com/?q=Torre+Troyana+Asti',
            linkLabel: 'Torre Troyana, Google Maps',
          },
          {
            titolo: 'Colegiata de San Segundo',
            testo: 'Una de las iglesias góticas más antiguas de la ciudad, dedicada al santo patrón de Asti. Construido desde mediados del siglo XII hasta 1462, se encuentra en el lugar donde San Secondo sufrió el martirio en el siglo II. Conserva la cripta de los siglos VI-VII con un relicario de plata del siglo XVI.',
            href: 'https://maps.google.com/?q=Collegiata+San+Secondo+Asti',
            linkLabel: 'Colegiata de San Secondo, Google Maps',
          },
          {
            titolo: 'Torre Roja',
            testo: 'El monumento más antiguo de Asti: su forma circular de 16 lados data del siglo I d.C., cuando formaba parte de la puerta de entrada romana a la ciudad. El nombre deriva del color cálido de los ladrillos romanos originales. Un fragmento de la Roma imperial que ha sobrevivido intacto durante dos mil años.',
            href: 'https://maps.google.com/?q=Torre+Rossa+Asti',
            linkLabel: 'Torre Roja, Google Maps',
          },
          {
            titolo: 'Palacio Alfieri y Museo Alfieriano',
            testo: 'El palacio barroco donde nació el dramaturgo Vittorio Alfieri en 1749. Hoy alberga el museo con manuscritos, ediciones raras de sus tragedias, objetos personales y documentos que cuentan la historia de un intelectual europeo de extraordinaria modernidad.',
            href: 'https://maps.google.com/?q=Palazzo+Alfieri+Asti',
            linkLabel: 'Palacio Alfieri, Google Maps',
          },
          {
            titolo: 'Palacio Mazzetti y Museo Cívico',
            testo: 'El principal museo cívico de Asti, ubicado en uno de los mejores ejemplos de arquitectura barroca de la ciudad. En el interior: salas con frescos, colección de arte cívico con pinturas de la escuela piamontesa, hallazgos arqueológicos. Punto de venta Smart Ticket para museos de la ciudad.',
            href: 'https://maps.google.com/?q=Palazzo+Mazzetti+Asti',
            linkLabel: 'Palacio Mazzetti, Google Maps',
          },
          {
            titolo: 'Cripta de Sant\'Anastasio y Domus Romana',
            testo: 'Para comprender la estratificación histórica de Asti: la Cripta es una iglesia románica parcialmente subterránea con columnas y capiteles medievales. La Domus Romana muestra los restos de una casa patricia de la época imperial con mosaicos originales en el suelo aún in situ.',
            href: 'https://maps.google.com/?q=Cripta+Sant+Anastasio+Asti',
            linkLabel: 'Cripta de Sant\'Anastasio, Google Maps',
          },
          {
            titolo: 'Complejo de San Pietro en Consavia',
            testo: 'Uno de los lugares menos conocidos pero más fascinantes de Asti. Construido en el siglo XII, incluye una iglesia circular construida a imitación del Santo Sepulcro de Jerusalén (una forma muy rara en el Piamonte), la capilla de Valperga y el claustro del siglo XV.',
            href: 'https://maps.google.com/?q=Complesso+San+Pietro+Consavia+Asti',
            linkLabel: 'Complejo de San Pietro in Consavia, Google Maps',
          },
          {
            titolo: 'Plaza Alfieri',
            testo: 'La plaza principal de Asti, con pórticos del siglo XVIII y fuente central. Es el salón de la ciudad en todas las estaciones: mercado semanal, eventos, aperitivos. Cada septiembre se convierte en el escenario del histórico Palio, con una transformación total en un hipódromo al aire libre.',
            href: 'https://maps.google.com/?q=Piazza+Alfieri+Asti',
            linkLabel: 'Plaza Alfieri, Google Maps',
          },
          {
            titolo: 'Corso Vittorio Alfieri',
            testo: 'La columna vertebral del centro histórico: un eje peatonal que cruza la ciudad desde Torre Rossa hasta Torre Troyana. Poco más de un kilómetro que encierra mil años de historia urbana, palacios nobles de los siglos XVII y XVIII, torres de ladrillo rojo, bares históricos y el lugar por el que Asti pasea cada tarde.',
            href: 'https://maps.google.com/?q=Corso+Vittorio+Alfieri+Asti',
            linkLabel: 'Corso Vittorio Alfieri, Google Maps',
          },
        ],
        tags: ['Qué ver en Asti', 'Centro histórico de Asti', 'Torres medievales'],
      },
      {
        titolo: 'Los vinos de Asti: 700 años de historia vitivinícola',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80&fit=crop',
        testo: `Asti es sinónimo de vino en todo el mundo. En 1865, Carlo Gancia creó el primer vino espumoso italiano en Canelli, aplicando las técnicas aprendidas en Champagne a la uva local Moscato. En el siglo XX, Federico Martinotti perfeccionó el Método Martinotti (o Charmat) para la producción rápida de vino espumoso. En 2014, el paisaje vitivinícola de Langhe, Roero y Monferrato fue declarado Patrimonio de la Humanidad por la UNESCO.

Hoy en día, la zona de Asti produce algunos de los vinos DOCG más famosos de Italia: Barbera d'Asti, Asti Spumante, Moscato d'Asti, Grignolino d'Asti, Ruché di Castagnole Monferrato. Para unas vacaciones enogastronómicas completas, quédese con nosotros y organizaremos visitas y catas a medida.`,
        lista: [
          'Barbera d\'Asti DOCG: el vino del alma de Asti',
          'Asti Spumante DOCG: el vino espumoso dulce más exportado del mundo',
          'Moscato d\'Asti DOCG: aromático, delicado, 5,5% de alcohol',
          'Grignolino d\'Asti DOC: elegancia discreta y taninos finos',
          'Ruché di Castagnole Monferrato DOCG: el vino más raro del Piamonte',
        ],
        tags: ['Vinos de Asti', 'Barbera DOCG', 'Moscato DOCG'],
      },
      {
        titolo: 'Bodegas para visitar en Asti',
        img: '/foto/coppo-cantine-canelli-piemonte.webp',
        testo: `Las bodegas de la zona de Asti ofrecen experiencias auténticas entre viñedos, castillos y bodegas históricas. Casi todos requieren reserva con unos días de antelación. Muchos también ofrecen almuerzos o meriendas en la bodega.

Si desea crear un itinerario enológico entre Asti, Canelli y Monferrato, podemos ayudarle con reservas y traslados desde nuestro hotel.`,
        dettagli: [
          {
            titolo: 'finca montemagno',
            testo: 'Finca histórica inmersa en las colinas de Monferrato, con el castillo medieval de Montemagno dominando el viñedo. Ofrece catas guiadas, hospitalidad en los relais y extraordinarias vistas panorámicas. Produce Barbera d\'Asti, Grignolino y Moscato.',
            href: 'https://maps.google.com/?q=Tenuta+Montemagno+Asti',
            linkLabel: 'Tenuta Montemagno, Google Maps',
          },
          {
            titolo: 'Bodegas Coppo, Canelli',
            testo: 'Bodega histórica Canelli activa desde 1892. Famosa por Barbera Camp du Rouss y Moscato d\'Asti. Las históricas bodegas subterráneas de Canelli (Patrimonio Mundial de la UNESCO) se pueden visitar en parte: una doble experiencia entre vino y arquitectura subterránea.',
            href: 'https://maps.google.com/?q=Cantine+Coppo+Canelli',
            linkLabel: 'Bodegas Coppo, Google Maps',
          },
          {
            titolo: 'Gancia, Canelli',
            testo: 'La bodega donde Carlo Gancia creó el primer vino espumoso italiano en 1865. Un lugar de absoluta historia del vino. Las históricas bodegas subterráneas de Gancia forman parte del sistema de las Catedrales Subterráneas de Canelli, declaradas Patrimonio de la Humanidad por la UNESCO desde 2014.',
            href: 'https://maps.google.com/?q=Gancia+Canelli',
            linkLabel: 'Gancia, Google Maps',
          },
        ],
        tags: ['Bodegas Asti', 'Ruta del vino Monferrato', 'Catas de barbera'],
      },
      {
        titolo: 'Dónde comer en Asti: restaurantes recomendados',
        testo: `La cocina de Asti es contundente, sencilla y ligada al territorio. Es imprescindible reservar con antelación los fines de semana y durante el Palio.

Si quieres un fin de semana gastronómico en Asti y sus alrededores, quédate con nosotros y alterna restaurantes con estrellas, tabernas históricas y degustaciones en la bodega.`,
        dettagli: [
          {
            titolo: 'Trattoria Astigiana',
            testo: 'Signo histórico en el panorama gastronómico piamontés. Agnolotti del plin, carnes cocidas mixtas, tajarín con ragú, bonet y pastel de avellanas. Menú degustación entre 40 y 50 euros, con una bodega que destaca los vinos de la zona de Asti y las Langhe.',
            href: 'https://maps.google.com/?q=Trattoria+Astigiana+Asti',
            linkLabel: 'Trattoria Astigiana, Google Maps',
          },
          {
            titolo: 'Osteria del Palio',
            testo: 'A pocos pasos de Piazza Alfieri. Un ambiente que recuerda a antiguas tabernas campesinas, una cocina que realza las materias primas de la zona: tajarín, estofado de barbera, quesos del monte, postres tradicionales. Excelente carta de vinos locales.',
            href: 'https://maps.google.com/?q=Osteria+del+Palio+Asti',
            linkLabel: 'Osteria del Palio, Google Maps',
          },
          {
            titolo: 'Tacabanda',
            testo: 'El restaurante que conquistó Asti. Aquí trabajan niños y niñas con discapacidad, en un proyecto donde la cocina se combina con la ética. Cocina de temporada y cadena corta: carne de fassona, tajarín con mantequilla y trufa, salami de conejo cocido con salsa de atún.',
            href: 'https://maps.google.com/?q=Tacabanda+Asti',
            linkLabel: 'Tacabanda, Google Maps',
          },
        ],
        tags: ['Dónde comer Asti', 'Restaurantes de Asti', 'cocina piamontesa'],
      },
      {
        titolo: 'Qué comer en Asti: platos típicos',
        img: '/foto/brasato.webp',
        testo: `La cocina de Asti tiene una tradición gastronómica profunda y reconocible. Si estás planeando un itinerario gastronómico en Asti, estos son los sabores imprescindibles.`,
        lista: [
          'Agnolotti del plin: pasta fresca rellena, pellizcada a mano',
          'Tajarín con 40 yemas de huevo: tagliolini de pasta al huevo muy fino',
          'Estofado con Barbera: carne de Fassona estofada durante horas en vino',
          'Carne cruda batida a cuchillo: filete picado a cuchillo',
          'Bonet: pudín de chocolate y galletas amaretti',
          'Torta de avellanas Tonda Gentile del Piamonte IGP',
          'Merenda sinoira: abundante aperitivo piamontés',
        ],
        tags: ['Platos típicos de Asti', 'cocina monferrato', 'Comida y vino del Piamonte'],
      },
      {
        titolo: 'Cómo llegar a Asti desde Costigliole d\'Asti',
        testo: `Asti está a sólo 8 km de Costigliole d'Asti: en coche el trayecto medio es de unos 10 minutos. El centro histórico tiene zonas ZTL: lo mejor es aparcar en los alrededores (Piazza Alfieri, aparcamiento gratuito) y continuar a pie.

Para un fin de semana sin prisas en Monferrato, quédese con nosotros y visite Asti, Alba, Canelli y Nizza Monferrato en cómodas etapas diarias.`,
        lista: [
          'En coche: SP456 en dirección Asti, unos 10 minutos.',
          'En tren: línea ferroviaria con conexión rápida',
          'En bicicleta: ruta llana por el Tanaro, unos 35 minutos',
        ],
        links: [
          { label: 'Ruta Costigliole d\'Asti → Asti, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Asti' },
        ],
        tags: ['Cómo llegar a Asti', 'parkings asti', 'Fin de semana de Monferrato'],
      },
      {
        titolo: 'Cuándo visitar Asti: estaciones y consejos',
        testo: `Asti es perfecta durante todo el año. El otoño es la estación reina: cosecha, Palio, Douja d'Or y colores de los viñedos. Pero la primavera (menos concurrida), el verano (aperitivos en los pórticos) y el invierno (ambiente acogedor) también tienen su encanto.

Si quieres vivir el Palio, reserva tu estancia con mucha antelación: el tercer domingo de septiembre es el evento más esperado del año.`,
        lista: [
          'Primavera: tiempo templado, pocas aglomeraciones, ritmo relajado',
          'Verano: Corso Alfieri a la sombra, aperitivos en la plaza, eventos culturales',
          'Otoño: Palio, Douja d\'Or, vendimia, colores extraordinarios',
          'Invierno: atmósfera silenciosa, mercados navideños, bodegas abiertas',
          'Smart Ticket 10€ para 7 museos: merece la pena si visitas al menos tres',
        ],
        tags: ['Cuando ir a Asti', 'Palio de Asti', 'Consejos de viaje para Asti'],
      },
    ],
    infoPratiche: {
      come: 'Del hotel a Asti: unos 10 minutos en coche (8 km). El centro histórico se puede visitar a pie.',
      periodo: 'Todo el año. Temporada alta: septiembre (Palio), finales de agosto (Douja d\'Or).',
      cosaDPortare: 'Zapatos cómodos, Smart Ticket si visitas museos, reservas en restaurantes/bodegas.',
      ingressiPaganti: 'Smart Ticket 10€ para 7 sitios de museos. Torre Troyana incluida.',
    },
    linkInterni: [
      { label: 'Reserva tu estancia en Monferrato', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contáctanos para el itinerario Asti + bodegas', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Descubra nuestras ofertas enogastronómicas', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: null,
    next: 'alba',
  },

  {
    slug: 'alba',
    nome: 'Amanecer',
    sottotitolo: 'Guía completa de la ciudad de las cien torres',
    categoria: 'Ciudad Gourmet',
    categoryIcon: 'fa-utensils',
    distanzaDallHotel: '15 kilómetros del hotel',
    tempoVisita: 'un dia completo',
    img: '/foto/alba-italia.webp',
    heroImg: '/foto/alba-italia.webp',
    tagline: 'Qué ver en Alba, dónde comer, qué bodegas visitar y cuándo ir: una guía práctica y completa para vivir el corazón de las Langhe.',
    descrizioneBreve: 'Alba es la capital de Langhe, uno de los mejores destinos gastronómicos y enológicos del Piamonte. En esta guía encontrarás historia, paradas imprescindibles en el centro histórico, bodegas cerca de Alba, restaurantes recomendados, vinos locales, consejos prácticos y enlaces de Google Maps listos para abrir. Si quieres vivirlo con tranquilidad, nuestro hotel es la base ideal para una estancia entre Alba, Barolo y Monferrato.',
    sezioni: [
      {
        titolo: 'Un poco de historia: de Alba Pompeia a la ciudad UNESCO',
        testo: `Los orígenes de Alba se remontan al Neolítico, pero con los romanos se convirtió en Alba Pompeia, un centro estratégico entre las rutas comerciales y el comercio del antiguo Piamonte. En el subsuelo del centro histórico aún son visibles el foro, el teatro y los restos de la antigua ciudad romana con la ruta Alba Sotterranea.

En la Edad Media Alba se convirtió en la "Ciudad de las Cien Torres", símbolo del poder de las familias nobles. En el siglo XX la ciudad vivió un capítulo decisivo con la resistencia partidista contada por Beppe Fenoglio. Hoy Alba es también una ciudad simbólica de la comida y el vino italiano: UNESCO para los paisajes vitivinícolas (2014) y UNESCO Ciudad Creativa para la Gastronomía (2017).`,
        lista: [
          'Orígenes prehistóricos y fundación romana de Alba Pompeia',
          'Torres medievales y desarrollo comercial entre Langhe y Liguria',
          'Resistencia de 1944 e identidad cultural de la ciudad',
          'Reconocimientos de la UNESCO que ponen en valor el vino y el territorio',
        ],
        links: [
          { label: 'Amanecer subterráneo, Google Maps', href: 'https://maps.google.com/?q=Alba+Sotterranea+Alba' },
          { label: 'Museo Cívico Federico Eusebio, Google Maps', href: 'https://maps.google.com/?q=Museo+Federico+Eusebio+Alba' },
        ],
        tags: ['Historia de Alba', 'Alba Pompeya', 'UNESCO'],
      },
      {
        titolo: 'Qué ver en Alba: 10 paradas en el centro histórico',
        img: '/foto/alba-italia.webp',
        testo: `Si buscas qué hacer en Alba en un día, comienza en Piazza Risorgimento y camina por Via Maestra entre galerías históricas, tiendas y cafés. El centro es compacto y se puede visitar fácilmente a pie.

Entre los puntos más bellos: Catedral de San Lorenzo, torres medievales, Loggia dei Mercanti, Iglesia de San Domenico, Casa Fenoglio, Teatro Sociale y Piazza Michele Ferrero. Si quieres visitar Alba sin prisas, reserva al menos una noche: por la tarde el centro es aún más evocador.`,
        lista: [
          'Piazza Risorgimento y Catedral de San Lorenzo',
          'Via Vittorio Emanuele II (Via Maestra)',
          'Torres medievales, Loggia dei Mercanti e Iglesia de San Domenico',
          'Casa Museo Beppe Fenoglio y Teatro Social Giorgio Busca',
          'Piazza Michele Ferrero y Fuente de Alba',
        ],
        links: [
          { label: 'Plaza del Resurgimiento, Google Maps', href: 'https://maps.google.com/?q=Piazza+Risorgimento+Alba+Cuneo' },
          { label: 'Catedral de San Lorenzo, Google Maps', href: 'https://maps.google.com/?q=Cattedrale+San+Lorenzo+Alba+Cuneo' },
          { label: 'Via Vittorio Emanuele (Via Maestra), Google Maps', href: 'https://maps.google.com/?q=Via+Vittorio+Emanuele+Alba+Cuneo' },
          { label: 'Iglesia de San Doménico, Google Maps', href: 'https://maps.google.com/?q=Chiesa+San+Domenico+Alba+Cuneo' },
        ],
        tags: ['Qué ver en Alba', 'centro histórico de alba', 'Amanecer de fin de semana'],
      },
      {
        titolo: 'Bodegas para visitar en Alba',
        testo: `Las bodegas cercanas a Alba se encuentran entre las más buscadas de Italia: alternan entre grandes nombres internacionales y pequeñas empresas familiares. Casi todos trabajan bajo reserva, especialmente los fines de semana y en otoño.

Para una experiencia completa recomendamos una cata guiada + almuerzo en bodega. Si te alojas con nosotros, podemos ayudarte a construir un itinerario enológico entre Alba, Barolo, Barbaresco y Serralunga, optimizando el tiempo y el viaje.`,
        dettagli: [
          {
            titolo: 'Ceretto, Monsordo Bernardina (Alba)',
            testo: 'Familia vitivinícola histórica en Langhe: la empresa nació en los años 30 y se consolidó con la segunda generación, que llevó la marca Ceretto a la fama internacional. Hoy la finca Monsordo Bernardina es una de las referencias para visitas y degustaciones en la zona de Alba, con especial atención también a la cultura gastronómica local.',
            href: 'https://maps.google.com/?q=Cantina+Ceretto+Monsordo+Bernardina+Alba',
            linkLabel: 'Ceretto Monsordo Bernardina, Google Maps',
          },
          {
            titolo: 'Fontanafredda, Serralunga d\'Alba',
            testo: 'Fundada en 1878 por Emanuele Alberto di Mirafiore, se encuentra entre las empresas más conocidas de la zona de Barolo. El complejo conserva el trazado histórico del pueblo, con bodegas, edificios rurales y visitas guiadas: una parada útil para comprender la historia de la producción de Barolo y la evolución de la vinificación de Langhe.',
            href: 'https://maps.google.com/?q=Cantina+Fontanafredda+Serralunga+d%27Alba',
            linkLabel: 'Fontanafredda, Google Maps',
          },
          {
            titolo: 'Castillo de Grinzane Cavour, tienda de vinos regionales',
            testo: 'El castillo, vinculado a la figura de Camillo Benso Conte di Cavour, alberga la Enoteca Regional Cavour Piamonte con una amplia selección de marcas locales. Es una visita recomendada para combinar historia, panorama de las Langhe de la UNESCO y introducción a los vinos de Barolo y Barbaresco en un solo lugar.',
            href: 'https://maps.google.com/?q=Castello+Grinzane+Cavour',
            linkLabel: 'Castillo de Grinzane Cavour, Google Maps',
          },
        ],
        tags: ['Bodegas Alba', 'Rutas del vino en Langhe', 'Degustaciones de Barolo'],
      },
      {
        titolo: 'El vino de Alba: Barolo, Barbaresco y grandes DOC',
        testo: `Comprender Alba significa comprender el vino de las Langhe. Nebbiolo es la variedad de uva simbólica de la que nacen Barolo DOCG y Barbaresco DOCG: vinos longevos y complejos, entre los más prestigiosos del mundo.

Además de los grandes tintos, encontrará Dolcetto d\\'Alba DOC, Barbera d\\'Alba DOC y Moscato d\\'Asti DOCG. Una degustación con un sumiller local es la forma más rápida de distinguir crus, añadas y estilos. Para tu estancia enogastronómica en Alba, consúltanos un itinerario a medida.`,
        lista: [
          'Barolo DOCG: estructura potente y crianza muy larga',
          'Barbaresco DOCG: más refinado y elegante, gran armonía',
          'Dolcetto d\'Alba DOC: el vino de la tradición de todos los días',
          'Barbera d\'Alba DOC: fresco, versátil, perfecto en la mesa',
          'Moscato d\'Asti DOCG: aromático, ligero e identificativo',
        ],
        tags: ['Vinos de Alba', 'Barolo DOCG', 'Barbaresco DOCG'],
      },
      {
        titolo: 'Dónde comer en Alba: restaurantes recomendados',
        testo: `El catering en Alba cubre todas las necesidades: alta cocina con estrellas, tabernas históricas, piola tradicional y vinotecas informales. Es imprescindible reservar con antelación los fines de semana y durante la Feria de la Trufa.

Si desea pasar unas vacaciones enogastronómicas en las Langhe, puede alojarse con nosotros y alternar cenas gourmet, trattorias típicas y degustaciones en la bodega sin estrés organizativo.`,
        dettagli: [
          {
            titolo: 'Piazza Duomo, alta cocina en Alba',
            testo: 'Restaurante dirigido por el chef Enrico Crippa y reconocido con 3 estrellas Michelin. Es una de las direcciones más importantes de la restauración italiana contemporánea, con una cocina fuertemente ligada a la estacionalidad y a los ingredientes locales.',
            href: 'https://maps.google.com/?q=Ristorante+Piazza+Duomo+Alba',
            linkLabel: 'Plaza del Duomo, Google Maps',
          },
          {
            titolo: 'La Piola, tradición central piamontesa',
            testo: 'En el centro de Alba, es el local más informal de la misma propiedad que Piazza Duomo. Ofrece clásicos de la cocina piamontesa (tajarin, plin, vitello tonnato) con un enfoque refinado pero accesible: una excelente opción para una cena típica sin formalidades.',
            href: 'https://maps.google.com/?q=La+Piola+Alba+Piemonte',
            linkLabel: 'La Piola, Google Maps',
          },
          {
            titolo: 'Osteria dell\'Arco, cocina local',
            testo: 'Activo desde 1986, es un nombre histórico para quienes buscan cocina tradicional piamontesa en Alba. Es conocido por su selección de vinos y platos vinculados a la cultura gastronómica local, con atención a la estacionalidad y los productos de cadena corta.',
            href: 'https://maps.google.com/?q=Osteria+dell%27Arco+Alba',
            linkLabel: 'Osteria dell\'Arco, Google Maps',
          },
        ],
        tags: ['Dónde comer Alba', 'Restaurantes Alba', 'cocina piamontesa'],
      },
      {
        titolo: 'Qué comer en Alba: platos típicos para probar',
        testo: `La gastronomía alba es uno de los principales motivos para visitar la ciudad. Si estás planeando un itinerario gastronómico en Alba, estos son los sabores imprescindibles.

El mejor consejo: prueba al menos un menú degustación y una cena en una taberna tradicional, para vivir al mismo tiempo la cocina de autor y la tradición local.`,
        lista: [
          'Tajarín con mantequilla y salvia',
          'Raviolis del plin',
          'Carne cruda de Alba',
          'Ternera con salsa de atún',
          'Estofado en Barolo',
          'Postres piamonteses de avellanas Bonet e IGP',
        ],
        tags: ['Platos típicos de Alba', 'cocina de las lenguas', 'Comida y vino del Piamonte'],
      },
      {
        titolo: 'Cómo llegar a Alba desde Costigliole d\'Asti',
        testo: `Alba está a unos 20 km de Costigliole d\\'Asti: en coche el trayecto medio es de unos 22 minutos. El centro tiene zonas de tráfico restringido, por lo que lo mejor es aparcar en la rotonda exterior y continuar a pie.

Para un fin de semana tranquilo en Langhe, la solución más cómoda es quedarse en la zona y visitar Alba junto con Barbaresco, Neive y Canelli en etapas diarias.`,
        lista: [
          'En coche: SP456 sur, aproximadamente 22 minutos',
          'En bicicleta: ruta panorámica montañosa con un desnivel moderado.',
          'En tren: paso desde Asti y llegada a la estación de Alba',
        ],
        links: [
          { label: 'Ruta Costigliole d\'Asti → Alba, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Alba+Cuneo' },
        ],
        tags: ['Cómo llegar a Alba', 'parkings alba', 'Fin de semana en Langhe'],
      },
      {
        titolo: 'Cuándo visitar Alba: estaciones y consejos útiles',
        testo: `Alba es un destino perfecto durante todo el año: primavera para paseos por viñedos y pueblos, verano para aperitivos y plazas animadas, otoño para trufas y follaje, invierno para experiencias gourmet más íntimas.

Octubre y noviembre son los meses más populares: si quieres encontrar mejor disponibilidad y vivir la ciudad con tranquilidad, lo mejor es reservar tu estancia con mucha antelación.`,
        lista: [
          'Primavera: clima ideal, menos gente, ritmo relajado',
          'Verano: veladas, vinotecas y dehors.',
          'Otoño: Feria de la Trufa Blanca y colores espectaculares',
          'Invierno: ambiente acogedor y excelentes tintos para degustar',
          'Consejos prácticos: calzado cómodo y reservas anticipadas',
        ],
        tags: ['Cuando ir a Alba', 'Feria de la Trufa', 'Consejos de viaje para Alba'],
      },
    ],
    infoPratiche: {
      come: 'Del hotel a Alba: aproximadamente 15 minutos en coche. Desde Costigliole d\'Asti: unos 22 minutos. El centro histórico se puede visitar a pie.',
      periodo: 'Todo el año. Temporada alta: Octubre-Noviembre (Feria de la Trufa Blanca).',
      cosaDPortare: 'Zapatos cómodos, reservas en restaurante/bodega, chaqueta ligera en primavera-otoño.',
      ingressiPaganti: 'Centro histórico en gran medida gratuito. Visitas y degustaciones en la bodega: una media de 20-45 euros.',
    },
    linkInterni: [
      { label: 'Reserva tu estancia en las Langhe', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contáctanos para el itinerario Alba + bodegas', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Descubra nuestras ofertas enogastronómicas', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'asti',
    next: 'cattedrali-sotterranee',
  },

  {
    slug: 'cattedrali-sotterranee',
    nome: 'Catedrales subterráneas de Canelli',
    sottotitolo: 'Guía completa de bodegas declaradas Patrimonio de la UNESCO',
    categoria: 'Experiencia única',
    categoryIcon: 'fa-dungeon',
    distanzaDallHotel: '26 kilómetros del hotel',
    tempoVisita: 'Medio dia',
    img: '/foto/le-cattedrali-sotterranee.webp',
    heroImg: '/foto/le-cattedrali-sotterranee.webp',
    tagline: 'Qué visitar en las catedrales subterráneas de Canelli, cómo reservar y qué esperar: guía completa del patrimonio de la UNESCO bajo las colinas.',
    descrizioneBreve: 'Bajo las calles de Canelli hay una ciudad paralela: galerías y túneles excavados en la toba, bóvedas de ladrillo altas y silenciosas, miles de botellas envejeciendo en la oscuridad. Reconocidas como Patrimonio de la Humanidad por la UNESCO en 2014, las Catedrales Subterráneas son un viaje a la historia del vino espumoso italiano. Desde Costigliole d\'Asti se llega en unos 30 minutos.',
    sezioni: [
      {
        titolo: 'Un sitio subterráneo patrimonio de la UNESCO',
        img: '/foto/le-cattedrali-sotterranee.webp',
        testo: `Canelli es la cuna del vino espumoso italiano. En 1865 Carlo Gancia desarrolló el primer vino espumoso italiano aplicando las técnicas aprendidas en Champaña. Bajo las colinas hay más de 20 kilómetros de túneles excavados en la toba: roca volcánica porosa que regula naturalmente la temperatura (entre 12 y 14°C constantes) y la humedad, condiciones perfectas para la fermentación y el afinamiento de los vinos.

La UNESCO, al reconocer el Paisaje Vitivinícola del Piamonte como Patrimonio de la Humanidad en 2014, incluyó explícitamente las Catedrales Subterráneas como un elemento de extraordinario valor cultural e histórico. Las principales bodegas que se pueden visitar son Bosca, Gancia, Contract y Coppo.`,
        lista: [
          'Más de 20 kilómetros de túneles excavados en la toba',
          'Temperaturas constantes de 12-14°C durante todo el año.',
          'Riconoscimento UNESCO 2014',
          'Historia del vino espumoso italiano desde 1865',
        ],
        tags: ['UNESCO Canelli', 'Catedrales subterráneas', 'Patrimonio Mundial'],
      },
      {
        titolo: 'Bodegas Bosca: historia y visita completa',
        img: '/foto/volte-imponenti.webp',
        testo: `Las Bodegas de la Bosca se encuentran entre las más antiguas y originales para visitar. Fundada en 1831 por Pietro Bosca, la empresa llega a la sexta generación de la misma familia. La Riserva del Nonno, el vino espumoso del Método Clásico que constituye el corazón de la producción de la empresa, todavía hoy madura en los túneles subterráneos.

Desde 2010, las bodegas están abiertas con un viaje multisensorial: luces, sonidos, proyecciones e instalaciones permanentes acompañan a los visitantes a lo largo de los pasillos subterráneos. El recorrido dura aproximadamente 40-50 minutos de caminata a una temperatura constante de 15°C, con alrededor de cuarenta pasos a lo largo del camino. Al final se accede a la tienda de vinos de la empresa.

Si te alojas con nosotros, podemos organizarte una reserva con un descuento exclusivo para las Bodegas Bosca.`,
        dettagli: [
          {
            titolo: 'Bodegas Bosca, Via G.B. Giuliani, 23 años.',
            testo: 'Experiencia multisensorial con luces, sonidos e instalaciones permanentes desde 2015. Tour 40-50 minutos, degustación final incluida (Método Clásico + Método Charmat). Se requiere reserva, cancelación gratuita hasta 24 horas de antelación. Cuesta unos 25€ por persona, entrada gratuita para menores y residentes.',
            href: 'https://www.google.com/maps/place/Cantine+Bosca/@44.7204368,8.2824925,17z/data=!3m1!4b1!4m6!3m5!1s0x47878846fd837c8b:0xf5ac119b934811f0!8m2!3d44.7204368!4d8.2850674!16s%2Fg%2F11b77qh7gd?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D',
            linkLabel: 'Bodegas Bosca, Google Maps',
          },
        ],
        tags: ['Bodegas Bosca', 'Visita la bodega Canelli', 'Cata de vinos espumosos'],
      },
      {
        titolo: 'Los vinos de las Catedrales: Método Clásico y Alta Langa',
        testo: `Alta Langa DOCG nace en las bodegas de Canelli, el vino espumoso piamontés de método clásico elaborado con uvas Pinot Nero y Chardonnay. Con un mínimo de 30 meses sobre lías (60 el Reserva), es un espumoso de gran complejidad capaz de competir con los mejores champagnes franceses.

Degustar en las galerías, al fresco natural de 12-14°C, es una experiencia sensorial que va más allá de la simple degustación: es una conexión profunda con la historia de la zona. Si quieres profundizar en tus conocimientos sobre los vinos espumosos piamonteses, quédate con nosotros y te organizaremos un recorrido completo entre Canelli, Asti y Alba.`,
        lista: [
          'Alta Langa DOCG: Método Clásico con 30-60 meses de perfeccionamiento',
          'Moscato d\'Asti DOCG: aromático y dulce',
          'Barbera d\'Asti DOCG: vino tinto local',
          'Riserva del Nonno (Bosca): vino espumoso de empresa histórica',
        ],
        tags: ['Alta Langa DOCG', 'Vino espumoso método clásico', 'vinos canelli'],
      },
      {
        titolo: 'Eventos en las catedrales subterráneas',
        testo: `Las Bodegas Bosca participan durante todo el año en los principales eventos locales, con visitas sin reserva obligatoria y degustaciones al aire libre.`,
        lista: [
          'Open Cellars (mayo): galerías abiertas al público sin reservas',
          'Bodegas Abiertas en Vendimia (Septiembre/Octubre): visita en plena vendimia',
          'Canelli Ciudad del Vino (verano): catas especiales y productores externos',
        ],
        tags: ['Canelli eventos', 'bodegas abiertas', 'Cosecha'],
      },
      {
        titolo: 'Cómo llegar e información práctica.',
        testo: `Canelli está a 26 km de Costigliole d'Asti: el trayecto medio en coche es de unos 30 minutos. Aparcamiento recomendado en Via Giuliani, Via Alba o Piazza Gioberti.

Se requiere reserva con cancelación gratuita hasta 24 horas de antelación. Llevar un jersey: 15°C constantes son agradables en verano pero perceptibles en invierno. Las visitas están disponibles en italiano e inglés.

Para reservar a través de nuestras instalaciones y recibir un descuento exclusivo, contáctenos directamente.`,
        lista: [
          'En coche: 26 km, unos 30 minutos desde Costigliole d\'Asti',
          'Aparcamiento gratuito en el centro de Canelli.',
          'Se requiere reserva (cancelación gratuita con 24 horas de antelación)',
          'Coste visita + degustación: aproximadamente 25€ por persona',
          'Traer chaqueta o suéter (temperatura 12-15°C)',
        ],
        links: [
          { label: 'Ruta Costigliole d\'Asti → Canelli, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Canelli' },
        ],
        tags: ['Cómo llegar a Canelli', 'Reserva de bodega', 'Información práctica'],
      },
      {
        titolo: 'Cuándo visitar las catedrales subterráneas',
        img: '/foto/cantine-soto-terra.webp',
        testo: `Las Catedrales Subterráneas se pueden visitar durante todo el año. La temperatura constante de los túneles los hace agradables en verano y evocadores en invierno. Mayo y septiembre son las mejores épocas para eventos como Cantine Aperte.

Si quieres vivir Canelli con tranquilidad y también visitar Alba, Asti y Monferrato, quédate con nosotros: somos la base ideal para un fin de semana enológico completo.`,
        lista: [
          'Primavera: clima ideal, bodegas abiertas en mayo',
          'Verano: fresco en las galerías, Canelli Ciudad del Vino',
          'Otoño: cosecha, bodegas abiertas en cosecha',
          'Invierno: ambiente sugerente, pocos turistas.',
        ],
        tags: ['Cuándo visitar Canelli', 'Mejores temporadas', 'Eventos en bodega'],
      },
    ],
    infoPratiche: {
      come: 'Del hotel a Canelli: unos 30 minutos en coche (26 km). Aparcamiento gratuito en el centro.',
      periodo: 'Todo el año. Se requiere reserva. Principales eventos: mayo y septiembre.',
      cosaDPortare: 'Chaqueta o suéter (12-15°C en los túneles), calzado cómodo, cámara fotográfica.',
      ingressiPaganti: 'Visita + degustación alrededor de 25 euros por persona. Descuento exclusivo al reservar a través de nuestro hotel.',
    },
    linkInterni: [
      { label: 'Reserva tu estancia y recibe un descuento en Cantine Bosca', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contáctenos para un recorrido completo enogastronómico.', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Descubre nuestras ofertas de tours enológicos', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'alba',
    next: 'caccia-al-tartufo',
  },

  {
    slug: 'caccia-al-tartufo',
    nome: 'Caza de trufas en Langhe y Monferrato',
    sottotitolo: 'Guía completa del oro subterráneo',
    categoria: 'Experiencias en el Territorio',
    categoryIcon: 'fa-paw',
    distanzaDallHotel: 'Bosques entre Costigliole, Alba y Monferrato',
    tempoVisita: '1 hora/medio día con Alba',
    img: '/foto/tartufo-bianco.webp',
    heroImg: '/foto/tartufo-bianco.webp',
    tagline: 'La Trufa Blanca de Alba es el símbolo más preciado de las Langhe: vivir una búsqueda con un trifulau y un perro adiestrado es una de las experiencias más auténticas del Piamonte.',
    descrizioneBreve: 'Hay un aroma que nunca olvidarás: terroso, intenso, salvaje y refinado. Se trata de la Trufa Blanca de Alba (Tuber magnatum Pico). En Langhe y Monferrato, la caza de la trufa es un ritual transmitido de generación en generación de trifulau: salir al bosque al amanecer, seguir al perro, esperar el descubrimiento. En esta guía encontrarás estacionalidad, experiencia privada con Ruta de la Trufa y la familia Ronzano, Feria de la Trufa de Alba, consejos prácticos e itinerario de fin de semana.',
    sezioni: [
      {
        titolo: 'La Trufa Blanca de Alba: el oro subterráneo de las Langhe',
        img: '/foto/tartufo-bianco.webp',
        testo: `En Langhe y Monferrato, la caza de trufas no es sólo una actividad: es un antiguo ritual, transmitido de generación en generación entre los trifulau, los cazadores de trufas. Sales al amanecer al bosque con tu perro adiestrado, caminas entre robles y sauces escuchando el territorio, esperando el momento en que el animal señale el lugar correcto.

La protagonista absoluta es la Trufa Blanca de Alba (Tuber magnatum Pico), la más preciada y buscada. Una experiencia que pertenece profundamente a la identidad de esta tierra y que, vivida en el campo, cambia por completo la forma de mirar el territorio.`,
        lista: [
          'Aroma intenso e inconfundible de Tuber magnatum Pico',
          'Tradición transmitida entre generaciones de trifulau',
          'Búsqueda en el bosque al amanecer con un perro adiestrado',
          'Experiencia de identidad de Langhe y Monferrato',
        ],
        tags: ['Trufa Blanca de Alba', 'Trifulau', 'Experiencia autentica'],
      },
      {
        titolo: 'La temporada de la trufa',
        img: '/foto/Ricerca-tartufo.webp',
        testo: `La Trufa Blanca de Alba madura entre septiembre y diciembre, con un pico aromático entre octubre y noviembre. En esta época la zona cobra vida: mercados, tabernas y bodegas giran en torno a la trufa.

Durante el año también existen otras variedades: Trufa Negra de Verano (Tuber aestivum) entre mayo y agosto y Bianchetto (Tuber borchii) entre enero y abril. Por tanto, en cada estación hay algo que buscar.`,
        lista: [
          'Trufa Blanca Alba: Septiembre → Diciembre',
          'Temporada alta: octubre y noviembre',
          'Verano Negro: Mayo → Agosto',
          'Bianchetto: enero → abril',
        ],
        tags: ['Estacionalidad de la trufa', 'tubérculo magnatum', 'Tuber aestivum'],
      },
      {
        titolo: 'Experimenta la búsqueda con Truffle Trail y la familia Ronzano.',
        img: '/foto/Tartufai.webp',
        testo: `Para vivir de primera mano la caza de la trufa, colaboramos con Truffle Trail, una experiencia organizada por la familia Ronzano de Costigliole d\\'Asti: trifulau desde hace tres generaciones.

Tenuta Ronzano nació de la visión de Renato Ronzano. Hoy la tradición continúa con Giovanni (activo desde 1963 en el mundo de la trufa), Marco (selección y distribución del producto) y Gianluca (entrenamiento canino e investigación de campo). La excursión dura aproximadamente una hora y es privada, reservada sólo para tu grupo.`,
        dettagli: [
          {
            titolo: 'Cómo funciona la experiencia Truffle Trail',
            testo: 'Encuentro en el bosque de Tenuta Ronzano (ubicación enviada después de la reserva). 1) Introducción sobre la historia, especies y ecología de la trufa. 2) Entrada al bosque con perros adiestrados. 3) Fase de investigación y lectura de las señales del perro. 4) Encontrar y evaluar la trufa mediante el tacto y el olfato con un guía experto.',
            href: 'https://www.truffletrail.it',
            linkLabel: 'Sitio web oficial de la Ruta de la Trufa',
          },
          {
            titolo: 'Ruta de la Trufa de Contacto Rápido',
            testo: 'WhatsApp directo para información operativa de la experiencia.',
            href: 'https://wa.me/393475806188',
            linkLabel: 'WhatsApp Ruta de la Trufa (+39 347 580 6188)',
          },
        ],
        tags: ['Ruta de la Trufa', 'familia ronzano', 'Caza privada de trufas'],
      },
      {
        titolo: 'Descuento reservado para huéspedes del hotel.',
        testo: `Los huéspedes del Hotel Langhe & Monferrato tienen acceso a una tarifa específica en la experiencia Truffle Trail.

Para reservar con descuento reservado simplemente pásate por nuestra recepción: nosotros lo organizamos todo, desde la hora hasta el punto de encuentro. No reserve directamente online antes de escribirnos, así podrá acceder a la tarifa con descuento.`,
        tags: ['Descuento para huéspedes del hotel', 'Reserva asistida', 'Experiencia afiliada'],
      },
      {
        titolo: 'La Feria Internacional de la Trufa Blanca de Alba',
        testo: `Cada año, en otoño, Alba acoge la Feria de la Trufa: uno de los principales eventos enogastronómicos italianos. Si la caza de la trufa te lleva al bosque, la Feria te lleva al corazón de la cultura de la zona.

Aquí encontrarás el Mercado Mundial de la Trufa, shows de cocina, catas de vino, clases de cocina y actividades culturales para adultos y niños. La guía sigue siendo imperecedera: consulte siempre los canales de la Autoridad de Ferias para conocer el programa actualizado y el calendario oficial.`,
        lista: [
          'Mercado Mundial de la Trufa con Comisión de Calidad',
          'Shows de cocina y atardeceres gourmet.',
          'Análisis sensorial de trufas con expertos',
          'Cata de vinos en Barolo, Barbaresco, Nebbiolo y Moscato.',
          'Actividades familiares y folklore local.',
        ],
        links: [
          { label: 'Web oficial de la Feria de la Trufa', href: 'https://www.fieradeltartufo.org' },
          { label: 'Autoridad justa, Google Maps', href: 'https://maps.google.com/?q=Piazza+Medford+3+Alba' },
        ],
        tags: ['Feria de la Trufa', 'Amanecer', 'Eventos gastronómicos y enológicos.'],
      },
      {
        titolo: 'Cómo organizar tu fin de semana de trufas',
        img: '/foto/Cane-cerca-tartufo.webp',
        testo: `Un programa ideal: mañana en el bosque con la Ruta de la Trufa en Costigliole, tarde en Alba entre el centro histórico y el mercado de la trufa, tarde en la taberna con tajarín, huevos fritos o fondue de trufa.

Para evitar el estrés y perder menos tiempo en viajes, pregunta en recepción: elaboramos un itinerario a medida y gestionamos las reservas con socios afiliados.`,
        lista: [
          'Mañana: caza de trufas en el bosque.',
          'Tarde: Amanecer y mercado de trufas.',
          'Noche: cena típica con platos de trufa.',
        ],
        links: [
          { label: 'Ruta Costigliole d\'Asti → Alba, Google Maps', href: 'https://maps.google.com/?saddr=Costigliole+d%27Asti&daddr=Alba+Cuneo' },
        ],
        tags: ['Fin de semana de trufa', 'Itinerario de las Langhe', 'Experiencias personalizadas'],
      },
    ],
    infoPratiche: {
      come: 'Punto de encuentro en el bosque de Tenuta Ronzano (Costigliole d\'Asti). Alba está a unos 30 km del hotel, menos de 40 minutos en coche.',
      periodo: 'Todo el año (las especies de trufas varían). Temporada blanca: septiembre-diciembre.',
      cosaDPortare: 'Zapatos cómodos o de trekking, ropa en capas, chaqueta ligera, smartphone cargado.',
      ingressiPaganti: 'Experiencia privada Truffle Trail con tarifa exclusiva para los huéspedes del hotel (bajo petición en recepción).',
    },
    linkInterni: [
      { label: 'Reserva tu estancia y activa el descuento Truffle Trail', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contáctanos para reservar tu caza de trufas', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Descubre las ofertas enogastronómicas', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'cattedrali-sotterranee',
    next: 'castelli-del-monferrato',
  },

  {
    slug: 'castelli-del-monferrato',
    nome: 'Castillos de Monferrato y Langhe',
    sottotitolo: 'Guía completa de mansiones, historia y paisajes de la UNESCO',
    categoria: 'Experiencias en el Territorio',
    categoryIcon: 'fa-chess-rook',
    distanzaDallHotel: 'De 5 minutos a 1 hora desde el hotel.',
    tempoVisita: 'un dia completo',
    img: '/foto/castelli-nel-monferrato.webp',
    heroImg: '/foto/castelli-nel-monferrato.webp',
    tagline: 'Un territorio construido sobre piedra: castillos, fortalezas y casas históricas entre Monferrato y Langhe, con itinerarios perfectos desde nuestro hotel.',
    descrizioneBreve: 'Monferrato y Langhe se encuentran entre las zonas italianas con mayor concentración de castillos por kilómetro cuadrado. No son sólo reliquias del pasado: albergaron a nobles, diplomáticos, reyes y protagonistas del Risorgimento. Desde el castillo de Costigliole d\'Asti, a pocos minutos del hotel, hasta las mansiones entre viñedos declarados Patrimonio de la Humanidad por la UNESCO, esta guía recoge las paradas más evocadoras con información práctica y enlaces útiles.',
    sezioni: [
      {
        titolo: 'Un territorio construido sobre piedra',
        img: '/foto/castello-di-tagliolo-piemonte.webp',
        testo: `Monferrato y Langhe se encuentran entre las regiones italianas con mayor concentración de castillos por kilómetro cuadrado. Estas mansiones no son sólo monumentos: han dado forma a la historia de Italia y hoy muchas de ellas pueden visitarse, restaurarse e incluirse en itinerarios culturales, gastronómicos y enológicos.

Desde el castillo que domina Costigliole d\\'Asti hasta las mansiones inmersas en los viñedos de la UNESCO, cada parada es un viaje a través de la historia entrelazada con el paisaje vitivinícola más emblemático del Piamonte.`,
        lista: [
          'Castillos medievales, fortalezas y casas nobles',
          'Vínculos con el Risorgimento, diplomacia e historia local',
          'Itinerarios que se pueden organizar fácilmente durante el día.',
          'Posibilidad de combinar visitas a bodegas y pueblos.',
        ],
        tags: ['Castillos de Monferrato', 'Langhe UNESCO', 'Itinerarios históricos'],
      },
      {
        titolo: 'Castillos que no te puedes perder',
        img: '/foto/castelli-nel-monferrato.webp',
        testo: `Aquí encontrarás las casas solariegas más interesantes para visitar entre Costigliole, Langhe y Monferrato, con contexto histórico e información útil para organizar mejor tu día.`,
        dettagli: [
          {
            titolo: 'Castillo de Costigliole d\'Asti',
            testo: 'El castillo, símbolo del pueblo, visible desde el otro lado del valle. Los primeros registros se remontan al año 1061. Habiendo pasado de fortaleza medieval a residencia noble, combina una arquitectura inspirada en Benedetto Alfieri, una entrada monumental de Filippo Juvarra y un renacimiento neomedieval del siglo XIX. Hoy alberga ICIF, Consorzio Barbera d\'Asti y Vini del Monferrato y forma parte de Castelli Aperti. El jardín de enfrente es parque público desde 1928.',
            href: 'https://maps.google.com/?q=Piazza+Vittorio+Emanuele+II+Costigliole+d%27Asti',
            linkLabel: 'Castillo de Costigliole, Google Maps',
          },
          {
            titolo: 'Castillo de Grinzane Cavour',
            testo: 'En el corazón de las Langhe de la UNESCO, está vinculado a la figura de Camillo Benso Conte di Cavour, alcalde de Grinzane desde hace 17 años y protagonista de la modernización vitivinícola local. Hoy alberga el Museo Langhe, las Reliquias Cavourianas, la Enoteca Regional Cavour Piamonte y la Subasta Mundial de Trufa Blanca Alba.',
            href: 'https://maps.google.com/?q=Via+Castello+5+Grinzane+Cavour',
            linkLabel: 'Castillo de Grinzane Cavour, Google Maps',
          },
          {
            titolo: 'Castillo Paleólogo, Casale Monferrato',
            testo: 'Gran fortaleza del Marquesado de Monferrato, construida a partir de 1352 por orden de Juan II Paleólogo. Evolucionado a lo largo de los siglos con los Gonzaga y luego en época de Saboya, conserva caminos de ronda, pasajes subterráneos y bajorrelieves de las familias históricas Aleramo, Paleólogos y Gonzaga. Hoy también alberga la Enoteca Regional de Monferrato.',
            href: 'https://maps.google.com/?q=Piazza+Castello+Casale+Monferrato',
            linkLabel: 'Castillo Paleologi, Google Maps',
          },
          {
            titolo: 'Castillo del Camino',
            testo: 'Uno de los castillos más pintorescos de la zona, con una torre cuadrangular de 44 metros de altura. Los orígenes se remontan al siglo XI; durante siglos estuvo vinculado a la familia Scarampi. Hoy es de propiedad privada y abre en ocasiones especiales con visitas guiadas y degustaciones de la finca.',
            href: 'https://maps.google.com/?q=Via+Castello+30+Camino+AL',
            linkLabel: 'Castillo del Camino, Google Maps',
          },
          {
            titolo: 'Castillo de Cereseto',
            testo: 'Mansión panorámica del Bajo Monferrato Casalese, muy apreciada por su posición, sus torres esquineras y su contexto paisajístico entre viñedos. Los orígenes son medievales y el aspecto actual deriva de restauraciones y estratificaciones históricas que han conservado su encanto.',
            href: 'https://maps.google.com/?q=Castello+di+Cereseto',
            linkLabel: 'Castillo de Cereseto, Google Maps',
          },
        ],
        tags: ['Costigliole d\'Asti', 'Grinzane Cavour', 'Casale Monferrato'],
      },
      {
        titolo: 'Cómo organizar un día entre los castillos',
        testo: `Los alrededores del hotel son aptos para itinerarios de medio día o de día completo. Podemos ayudarte a construir la ruta en función de la temporada, horarios e intereses (historia, vistas, degustaciones, pueblos).`,
        lista: [
          'Itinerario de mañana: Castillo de Costigliole (a pie) + centro histórico',
          'Itinerario del día en Langhe: Grinzane Cavour + Alba',
          'Itinerario del día Monferrato: Camino + Casale Monferrato',
          'Maridaje recomendado: castillos + bodegas + almuerzo en taberna',
        ],
        links: [
          { label: 'Castillo de Costigliole d\'Asti, Google Maps', href: 'https://maps.google.com/?q=Piazza+Vittorio+Emanuele+II+Costigliole+d%27Asti' },
          { label: 'Castillo de Grinzane Cavour, sitio web oficial', href: 'https://www.castellogrinzane.com' },
        ],
        tags: ['Itinerario de los castillos', 'Fin de semana de Monferrato', 'Consejos de recepción'],
      },
    ],
    infoPratiche: {
      come: 'Salida ideal desde nuestro hotel: Costigliole a pie, Grinzane ~40 min, Casale ~50 min, Camino ~55 min, Cereseto ~1 hora.',
      periodo: 'Todo el año. Compruebe siempre las aperturas extraordinarias y los horarios de apertura de cada castillo.',
      cosaDPortare: 'Zapatos cómodos, documento, cámara fotográfica y chaqueta ligera para visitas nocturnas.',
      ingressiPaganti: 'Costos variables por sitio. Ejemplo Grinzane Cavour: precio completo 8 €, precio reducido 6 €, niños de 6 a 14 años 3 €.',
    },
    linkInterni: [
      { label: 'Contáctenos para un itinerario personalizado del castillo', href: '/contatti', icon: 'fa-car' },
      { label: 'Reserva tu estancia en el corazón de Monferrato', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Descubre ofertas de fin de semana entre castillos y bodegas', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'caccia-al-tartufo',
    next: 'big-bench',
  },

  {
    slug: 'big-bench',
    nome: 'El Gran Banco: los bancos gigantes del Piamonte',
    sottotitolo: 'Siéntate en un banco y vuelve a ser niño',
    categoria: 'Experiencias en el Territorio',
    categoryIcon: 'fa-chair',
    distanzaDallHotel: '5-35 km del hotel',
    tempoVisita: 'Itinerario de medio día o un día.',
    img: '/foto/le-grandi-panchine.webp',
    heroImg: '/foto/le-grandi-panchine.webp',
    tagline: 'Imagínese sentado en un banco tan grande que hace que las colinas circundantes parezcan aún más grandes, los viñedos aún más profundos y el cielo aún más alto. Este es el efecto de un Big Bench, un banco gigante y colorido que cambia tu perspectiva de todo.',
    descrizioneBreve: 'Los Big Benches son instalaciones artísticas gigantes que nacieron de una idea del diseñador estadounidense Chris Bangle en 2010. Hoy en día existen más de 300 en el mundo, concentrados principalmente en Piamonte y las Langhe del Monferrato. Cada banco ofrece una vista espectacular y un momento simple, casi infantil, que transforma la forma en que experimentamos el área. Desde el hotel se puede llegar a los más cercanos en pocos minutos.',
    sezioni: [
      {
        titolo: 'Siéntate en un banco y vuelve a ser niño',
        img: '/foto/le-grandi-panchine.webp',
        testo: `Imagínese sentado en un banco tan grande que hace que las colinas a su alrededor parezcan aún más grandes, los viñedos aún más profundos y el cielo aún más alto. Las piernas que no tocan el suelo, el panorama que se abre frente a ti como nunca antes lo habías visto. Un momento sencillo, casi infantil, que cambia tu perspectiva sobre todo.

Este es el efecto de un Big Bench, un banco gigante de colores de unos dos metros y medio de alto y tres de ancho, situado en espectaculares puntos panorámicos entre las colinas del Piamonte.

Esto no es sólo una instalación de arte o un juego. Detrás de cada gran banco hay un proyecto que ha transformado la manera de vivir y hablar de este territorio.`,
        tags: ['Experiencia', 'Diseño', 'Panorama'],
      },
      {
        titolo: 'El proyecto: una historia nacida para jugar',
        testo: `Todo empezó en 2010 en una aldea de Clavesana, en las Langhe, donde un diseñador americano llamado Chris Bangle se mudó con su esposa Catherine en 2009. Bangle no es un diseñador cualquiera: trabajó para Fiat, Alfa Romeo y finalmente como director del centro de estilo BMW durante más de veinte años, antes de elegir Langhe como su hogar definitivo.

Una tarde con un grupo de amigos y vecinos, Chris construye el primer banco gigante en el terreno de Clavesana. La idea es tan simple como brillante: crear algo que te haga sentir como un niño nuevamente frente al maravilloso panorama de Langhe. Un banco fuera de escala, que invierte el punto de vista y confiere al paisaje toda su grandeza.

La respuesta es inmediata: la gente llega, sube, toma fotografías, queda asombrada. Lo que era un truco entre amigos rápidamente se convierte en algo más grande.

En 2010 nació The Big Bench Community Project (BBCP), una organización sin fines de lucro fundada por Chris y Catherine Bangle con un objetivo específico: promover las comunidades locales, apoyar la excelencia artesanal local y mejorar el turismo a través de la construcción de bancos gigantes en lugares panorámicos. El diseño de los bancos, protegidos por derechos de autor, se entrega de forma gratuita a quien quiera construir uno, siempre que respeten todos los elementos que caracterizan el proyecto original.

Desde aquel primer banco rojo en Clavesana el proyecto ha crecido de manera extraordinaria: hoy existen más de 300 Big Benches en el mundo, presentes en todas las regiones de Italia y en varios países extranjeros, desde Escocia hasta Estados Unidos. Piamonte, y en particular Langhe y Monferrato, siguen siendo el corazón del proyecto y la zona con mayor concentración de bancos.`,
        tags: ['Historia', 'Brazalete Chris', 'BBCP'],
      },
      {
        titolo: 'El pasaporte del gran banco',
        testo: `Uno de los aspectos más apreciados del proyecto es el pasaporte oficial del Big Bench: un cuadernillo que se puede adquirir en numerosos puntos de venta de sellos de la zona y que se rellena a medida que se visitan los bancos. Cada Big Bench tiene un sello único que cuenta la historia del lugar y del banco en sí.

Se ha convertido en un pequeño juego de exploración del territorio, apreciado tanto por adultos como por niños: cada sello recogido es una colina visitada, un panorama descubierto, un pueblo conocido.

El pasaporte se puede adquirir y recoger los sellos en clubes, masías, bodegas y comercios situados cerca de cada banco.`,
        tags: ['Pasaporte', 'Juego', 'Exploración'],
      },
      {
        titolo: 'Los Grandes Bancos Cerca del Hotel',
        testo: `Costigliole d'Asti se encuentra en el corazón de una de las zonas de Big Bench más ricas de toda la región. A continuación os dejamos los bancos a los que se puede llegar fácilmente desde nuestro hotel, con algunas indicaciones para organizar un día lleno de vistas y maravillas.`,
        dettagli: [
          {
            titolo: 'Banco grande núm. 17, Costigliole d\'Asti (Bricco Lu\')',
            testo: 'El banco de nuestra casa, marrón. Situado en el mirador de Bricco Lu\', ofrece una vista espectacular de las colinas de Asti con una vista que se abre hacia Monferrato y las Langhe. Perfecto para dar un paseo al atardecer, literalmente a minutos del hotel. Es uno de los dos grandes bancos de Costigliole.',
            href: 'https://maps.google.com/?q=Big+Bench+17+Costigliole+d%27Asti+Bricco+Lu',
            linkLabel: 'Banco grande núm. 17, mapas de Google',
          },
          {
            titolo: 'Banco grande núm. 18, Costigliole d\'Asti (Strada Castelletto)',
            testo: 'Segundo banco de Costigliole, naranja. Situado en Strada Castelletto, ofrece una vista ligeramente diferente a la del n. 17 en las colinas de Asti. Costigliole es uno de los pocos municipios que tiene dos, señal de la importancia del territorio en el Proyecto Comunitario Big Bench.',
            href: 'https://maps.google.com/?q=Big+Bench+18+Costigliole+d%27Asti+Castelletto',
            linkLabel: 'Banco grande núm. 18, mapas de Google',
          },
          {
            titolo: 'Banco grande núm. 10, Castelnuovo Calcea',
            testo: 'Banco violeta, inmerso en la naturaleza del parque Lacourt, al que se puede llegar siguiendo un camino de tierra entre viñedos. Castelnuovo Calcea es un pequeño pueblo de Asti a pocos kilómetros de Costigliole, conocido por sus vinos. El contraste entre el violeta del banco y el verde de las filas es uno de los más fotogénicos de la zona.',
            href: 'https://maps.google.com/?q=Big+Bench+10+Castelnuovo+Calcea',
            linkLabel: 'Banco grande núm. 10, mapas de Google',
          },
          {
            titolo: 'Banco grande núm. 24, Moasca',
            testo: 'Banco rosa, con vistas a los viñedos de Asti. Moasca es un pequeño pueblo entre Costigliole y Canelli, en el corazón de Barbera d\'Asti. El banco está situado en Piazza Castello, en el punto más panorámico de la ciudad. Distancia: aproximadamente 12 km desde el hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+24+Moasca',
            linkLabel: 'Banco grande núm. 24, mapas de Google',
          },
          {
            titolo: 'Banco grande núm. 26, Coazzolo',
            testo: 'Coazzolo, uno de los pueblos más pequeños y tranquilos de la zona, domina las colinas fronterizas entre Asti y Cuneo. Su banco ofrece una amplia vista hacia el sur, hacia Langhe. Un lugar tranquilo y menos masificado, perfecto para los amantes de la soledad y la contemplación. Distancia: aproximadamente 15 km desde el hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+26+Coazzolo',
            linkLabel: 'Banco grande núm. 26, mapas de Google',
          },
          {
            titolo: 'Banco grande núm. 30, Canelli',
            testo: 'Banco amarillo moscato, inspirado en el vino más famoso de estos cerros. Está situado en el límite de la Región Merlini, orientado hacia el norte con una vista espectacular de las colinas Canelli y las Catedrales Subterráneas que se esconden bajo los viñedos. Canelli es también la ciudad de las burbujas piamontesas, con sus bodegas históricas incluidas en el sitio de la UNESCO. Distancia: aproximadamente 26 km desde el hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+30+Canelli',
            linkLabel: 'Banco grande núm. 30, mapas de Google',
          },
          {
            titolo: 'Banco grande núm. 25, Fontanile',
            testo: 'Banco en las colinas del Alto Monferrato, en un contexto rural auténtico y poco frecuentado. Fontanile es uno de los destinos menos transitados de la zona, perfecto para aquellos que quieren salir de las rutas más conocidas y descubrir rincones tranquilos de la zona. Ideal para una visita contemplativa y fotográfica. Distancia: aproximadamente 18 km desde el hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+25+Fontanile',
            linkLabel: 'Banco grande núm. 25, mapas de Google',
          },
          {
            titolo: 'Banco grande núm. 14, Alba (Loc. Scaparone)',
            testo: 'Más lejos, pero en el corazón de las Langhe de la UNESCO, este banco se encuentra en la zona de Scaparone en Alba con una vista espectacular de los viñedos de Barolo y Barbaresco. Se combinará con una visita a la ciudad para vivir una experiencia completa en el corazón de las zonas vitivinícolas piamontesas más prestigiosas. Distancia: aproximadamente 35 km desde el hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+14+Alba+Scaparone',
            linkLabel: 'Banco grande núm. 14, mapas de Google',
          },
          {
            titolo: 'Banco grande núm. 23, Neive',
            testo: 'Neive es uno de los pueblos más bellos de Italia y su Big Bench se encuentra en una posición panorámica impresionante en las colinas de Langhe. Se combinará con un paseo por el centro histórico de la ciudad, con sus estrechas calles medievales, sus bodegas históricas y el ambiente de un auténtico pueblo piamontés. Distancia: aproximadamente 38 km desde el hotel.',
            href: 'https://maps.google.com/?q=Big+Bench+23+Neive',
            linkLabel: 'Banco grande núm. 23, mapas de Google',
          },
        ],
        tags: ['Bancos cercanos', 'Itinerario', 'Distancias'],
      },
      {
        titolo: 'Cómo organizar un recorrido por el Big Bench',
        testo: `Un posible itinerario para medio día cerca del hotel:

Mañana: Comience con Big Bench #1. 17 hasta Bricco Lu' (Costigliole) en el momento del mejor semáforo, luego continuar hacia Castelnuovo Calcea (n. 10) y Moasca (n. 24). Desayuno o merienda en uno de los locales asociados para el sellado del pasaporte.

Por la tarde: Continuación hacia Coazzolo (n. 26) y Canelli (n. 30), con una parada para admirar el centro histórico y las bodegas subterráneas de la UNESCO.

Un itinerario más largo a las Langhe combina Alba (n° 14), Neive (n° 23) y una visita a una bodega para degustar: se permitirá medio día de bancos y Barolo.

La recepción del hotel puede ayudarle a diseñar la mejor ruta en función de la temporada, la hora del atardecer y el número de etapas que desee recoger en su pasaporte. Recomendamos visitar el Gran Banco al atardecer para tomar fotografías con la luz dorada: momentos inolvidables.`,
        tags: ['Itinerario', 'Organización', 'Consejos prácticos'],
      },
      {
        titolo: 'Recursos oficiales',
        testo: `El Proyecto Comunitario Big Bench ofrece a los visitantes diversas herramientas para organizar una visita completa:

Mapa interactivo: disponible en el sitio web oficial y en Google Maps buscando "Big Bench". Permite localizar todos los bancos con GPS y planificar la ruta óptima.

Pasaporte oficial: se puede adquirir en discotecas, masías, bodegas y museos cercanos al Big Bench. Cada banco tiene un sello único.

Redes sociales: siga #BigBench en Instagram para obtener inspiración, fotos de otros visitantes y actualizaciones del proyecto.

En otoño, cuando los viñedos se tiñen de rojos y naranjas, las fotografías tomadas son de absoluta belleza. Planifica tu visita para aprovechar los colores más espectaculares de la temporada.`,
        links: [
          { label: 'Sitio oficial del proyecto comunitario Big Bench', href: 'https://www.bigbenchcommunityproject.org/' },
          { label: 'Mapa interactivo en Google Maps', href: 'https://www.google.com/maps/search/Big+Bench/' },
          { label: 'Síguenos en Instagram, #BigBench', href: 'https://www.instagram.com/explore/tags/bigbench/' },
        ],
        tags: ['Recursos', 'Información', 'Planificación'],
      },
    ],
    infoPratiche: {
      come: 'En coche: accesible desde recepción. Algunos caminan desde aparcamientos cercanos. Mapa disponible en bigbenchcommunityproject.org.',
      periodo: 'Todo el año. Recomendado: Septiembre-noviembre para disfrutar de los impresionantes colores del otoño. Mayo-junio para disfrutar de un paisaje verde y exuberante.',
      cosaDPortare: 'Zapatos cómodos, smartphone cargado (para fotografías), pasaporte para sellos, bloqueador solar, cámara fotográfica.',
      ingressiPaganti: 'Todo gratuito y abierto al público. Pasaporte: unos 10 euros.',
    },
    linkInterni: [
      { label: 'Habitaciones Cuádruples, ¡Trae a los Niños!', href: '/camere/quadrupla', icon: 'fa-child' },
      { label: 'Amanecer: Guía completa', href: '/territorio/alba', icon: 'fa-map' },
      { label: 'Canelli y las catedrales subterráneas', href: '/territorio/cattedrali-sotterranee', icon: 'fa-wine-bottle' },
      { label: 'Paquete Fin de Semana, 2 Noches y Bancos', href: '/offerte', icon: 'fa-tag' },
    ],
    prev: 'castelli-del-monferrato',
    next: 'ebike-monferrato',
  },

  {
    slug: 'ebike-monferrato',
    nome: 'Bicicleta eléctrica entre Monferrato y Langhe',
    sottotitolo: 'Guía de Rutas Panorámicas con Girobike',
    categoria: 'Aire libre y naturaleza',
    categoryIcon: 'fa-bicycle',
    distanzaDallHotel: 'Canelli y alrededores (10-25 km)',
    tempoVisita: 'Medio día, día completo o varios días',
    img: '/foto/giro-in -biciletta-nel-monferrato.webp',
    heroImg: '/foto/giro-in -biciletta-nel-monferrato.webp',
    tagline: 'Pedalea entre viñedos, castillos y pueblos históricos de la UNESCO con itinerarios en bicicleta eléctrica hechos a medida: fáciles de seguir, aptos para todos los niveles y perfectos para experimentar la zona sin prisas.',
    descrizioneBreve: 'Girobike, con sede en Canelli, ofrece alquiler de bicicletas eléctricas con pedaleo para explorar Langhe y Monferrato de una manera sencilla y sostenible. Incluso aquellos que no están entrenados pueden afrontar subidas y rutas panorámicas con gran comodidad. Desde el hotel podemos organizarte la experiencia completa: itinerario, reserva, apoyo logístico y, si lo solicitas, traslado desde/hacia la salida.',
    sezioni: [
      {
        titolo: 'El servicio Girobike: libertad de bicicletas eléctricas para todos',
        testo: `Girobike es un servicio especializado en bicicletas eléctricas con salida desde Canelli. Las bicicletas asistidas por pedales le permiten afrontar incluso tramos montañosos con menor fatiga, manteniendo el placer de viajar lentamente.

Es la solución ideal para parejas, familias y grupos pequeños que quieran experimentar el paisaje sin estrés: viñedos, caminos de tierra, panoramas de la UNESCO y pueblos auténticos.`,
        lista: [
          'Las bicicletas eléctricas también son aptas para quienes no están formados',
          'Rutas panorámicas entre Langhe, Roero y Monferrato.',
          'Turismo lento, sostenible e inmersivo',
          'Experiencia personalizable por nivel y duración.',
        ],
        tags: ['bicicletas eléctricas', 'Girobike', 'Turismo lento'],
      },
      {
        titolo: 'Visitas autoguiadas o guiadas: elige tu estilo',
        testo: `Podrás elegir entre dos modos de funcionamiento, ambos muy prácticos.

En los recorridos autoguiados, se proporcionan recorridos GPX que se cargan en el teléfono inteligente con aplicaciones gratuitas: la ruta se puede seguir de manera intuitiva. Alternativamente, puedes solicitar acompañamiento profesional para descubrir caminos secundarios y rincones menos conocidos.`,
        lista: [
          'Visitas autoguiadas con tracks GPX',
          'Tour con guía calificado.',
          'Rutas alejadas del tráfico',
          'Apoyo organizativo antes de la salida.',
        ],
        tags: ['GPX', 'Guía calificado', 'Rutas personalizadas'],
      },
      {
        titolo: 'Las 5 rutas recomendadas',
        testo: `La zona ofrece itinerarios muy diferentes, desde los más relajados hasta los más deportivos. Aquí tienes las rutas más solicitadas, todas adaptables en función del grupo.

Para cada itinerario podemos recomendar paradas gastronómicas y vinícolas y puntos panorámicos ideales para fotografías y descansos.`,
        dettagli: [
          {
            titolo: 'Alrededores de Canelli (Tour Moscato), a unos 40 km',
            testo: 'Vistas de los viñedos de Moscato en torno a Canelli, con subidas suaves y tramos ideales para coger el ritmo del pedaleo asistido.',
          },
          {
            titolo: 'Hacia Acqui Terme, unos 62 km.',
            testo: 'Camino que combina naturaleza e historia, hasta la ciudad balneario fundada por los romanos, famosa por la fuente de La Bollente.',
          },
          {
            titolo: 'Barbaresco y pueblos históricos, aproximadamente 62 km.',
            testo: 'Un itinerario entre cultura y paisaje que toca Barbaresco, Neive y Treiso, con numerosos vistazos entre hileras y castillos.',
          },
          {
            titolo: 'Nizza y Barbera, a unos 70 km.',
            testo: 'Tour dedicado a las zonas de producción de Barbera d\'Asti, atravesando uno de los paisajes vitivinícolas más emblemáticos del Piamonte.',
          },
          {
            titolo: 'Roccaverano y Alta Langa, anillo de aproximadamente 77 km',
            testo: 'Itinerario más desafiante y con mayor desnivel, perfecto para quienes desean un día intenso entre cerros y pueblos de altura.',
          },
        ],
        tags: ['Rutas en bicicleta eléctrica', 'Canelli', 'monferrato'],
      },
      {
        titolo: 'Duraciones disponibles y organización completa vía hotel.',
        testo: `La experiencia se puede planificar en diferentes formatos: medio día, día completo, 2 días o 3 días. En función del tiempo disponible construimos un programa equilibrado entre ciclismo, catas y visitas.

Si quieres el máximo confort, nuestro equipo puede organizarte toda la experiencia con servicios adicionales (incluidos traslados, cuando lo solicites), para que no tengas que pensar en nada más que disfrutar de la zona.`,
        lista: [
          'Formato medio día',
          'Formato de día completo',
          'Programas de 2 o 3 días',
          'Soporte hotelero para logística y reservas.',
        ],
        tags: ['Itinerario a medida', 'Transferencias', 'Experiencia organizada'],
      },
    ],
    infoPratiche: {
      come: 'Salida de la zona de Canelli. Desde el hotel podemos coordinar horarios, puntos de encuentro y logística, incluyendo servicios de traslado bajo petición.',
      periodo: 'De marzo a noviembre recomendado. Disponibilidad variable según el clima y la estacionalidad.',
      cosaDPortare: 'Calzado deportivo, agua, gafas de sol, crema solar, chaqueta cortavientos ligera y smartphone cargado.',
      ingressiPaganti: 'Actividades con diferentes fórmulas (media jornada, jornada, 2-3 días). Pregunte en recepción por el paquete más adecuado para su estancia.',
    },
    linkInterni: [
      { label: 'Contáctenos para el recorrido en bicicleta eléctrica a medida', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Reserva tu estancia y organiza la experiencia', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Descubre otras actividades en la zona.', href: '/territorio', icon: 'fa-map' },
    ],
    prev: 'big-bench',
    next: 'birrificio-nicese',
  },

  {
    slug: 'birrificio-nicese',
    nome: 'Nueva cervecería de Nicea',
    sottotitolo: 'Visita a Producción y Degustación Artesanal',
    categoria: 'Degustación local',
    categoryIcon: 'fa-beer',
    distanzaDallHotel: 'Nizza Monferrato (unos 15 km)',
    tempoVisita: '1,5 - 2 horas',
    img: '/foto/birrificio-nicese-nizza-monferrato.webp',
    heroImg: '/foto/birrificio-nicese-nizza-monferrato.webp',
    tagline: 'Una experiencia inmersiva en el mundo de la cerveza artesanal entre plantas de producción, historias de los maestros cerveceros y degustaciones guiadas de los diferentes estilos.',
    descrizioneBreve: 'El Nuovo Birrificio Nicese nació de una precisa visión artesanal: materias primas seleccionadas, atención a los tiempos naturales y una fuerte conexión con el territorio. La visita es perfecta para quienes quieran ir más allá del vino y descubrir otra excelencia local. Desde el hotel podemos organizarte la experiencia completa, para que puedas disfrutar de la degustación en total relajación.',
    sezioni: [
      {
        titolo: 'La esencia de la cervecería: artesanía y territorio',
        testo: `El proyecto cervecero se construye sobre una filosofía clara: calidad, identidad local y procesos productivos que respetan los tiempos de maduración.

Cada cerveza nace del equilibrio entre técnica y sensibilidad artesanal, con estilos que realzan los aromas, la limpieza aromática y la bebibilidad.`,
        lista: [
          'Cuidada selección de materias primas.',
          'Producción artesanal en pequeños lotes.',
          'Control de las fases de fermentación y maduración.',
          'Identidad territorial en cada etiqueta',
        ],
        tags: ['Cerveza artesanal', 'Producción local', 'Calidad'],
      },
      {
        titolo: 'La experiencia completa: recorrido + cuento + degustación',
        testo: `La visita lleva al visitante al corazón de la cervecería: desde las salas de elaboración, pasando por los fermentadores, hasta la zona de degustación.

Durante el recorrido se explican claramente todas las fases de producción, desde la molienda hasta la fermentación, centrándose en los ingredientes, estilos y diferencias sensoriales.`,
        dettagli: [
          {
            titolo: 'Gira en producción',
            testo: 'Ingreso al área técnica para observar sistemas, fases de proceso y herramientas utilizadas en la producción artesanal.',
          },
          {
            titolo: 'Cuento de los maestros cerveceros',
            testo: 'Explicación de las elecciones de producción y secretos técnicos que definen el aroma, estructura y carácter de las cervezas.',
          },
          {
            titolo: 'Cata guiada',
            testo: 'Degustación de las cervezas disponibles con lectura de aromas, estilos y combinaciones, en un contexto agradable y auténtico.',
          },
        ],
        tags: ['Visita a la cervecería', 'Maestro cervecero', 'Saboreo'],
      },
      {
        titolo: 'Lo que normalmente incluye la visita',
        testo: `La experiencia es apta tanto para grupos pequeños como para entusiastas individuales e incluye acompañamiento guiado de principio a fin.

Al final es posible comprar las cervezas directamente en la tienda de la empresa.`,
        lista: [
          'Guía dedicado durante el recorrido.',
          'Explicación técnica del método artesanal.',
          'Degustaciones de las cervezas disponibles.',
          'Compra directa en la tienda.',
        ],
        tags: ['Oferta de experiencia', 'Cata de cerveza', 'tienda de la empresa'],
      },
      {
        titolo: 'Por qué combinarlo con un día en Monferrato',
        testo: `Nizza Monferrato es una parada perfecta en un itinerario entre viñedos, pueblos y rutas ciclistas. Esta experiencia se integra muy bien con un paseo en bicicleta eléctrica por la zona de "Nizza y Barbera", creando un día completo de aire libre y degustación.

Para máxima comodidad no es necesario organizar nada de forma independiente: podemos coordinar toda la visita en función de tu programa.`,
        lista: [
          'Ideal después de un paseo en bicicleta por los viñedos.',
          'Perfecto para grupos de amigos y parejas.',
          'Auténtica alternativa a las simples catas de vino.',
          'Experiencia coordinada por nuestro equipo',
        ],
        tags: ['Niza Monferrato', 'experiencia local', 'Itinerario combinado'],
      },
    ],
    infoPratiche: {
      come: 'Ubicación Nizza Monferrato (AT), a unos 15 km del hotel. Podemos organizar la experiencia y la logística según su horario.',
      periodo: 'Disponible todo el año según horario. Se recomienda reservar con antelación a través de nuestro equipo.',
      cosaDPortare: 'Ropa cómoda, teléfono cargado, posible chaqueta ligera para entornos de producción.',
      ingressiPaganti: 'Visita y degustación con fórmulas variables según el grupo. Contáctanos y construiremos la propuesta más adecuada.',
    },
    linkInterni: [
      { label: 'Contáctanos para organizar tu visita a la cervecería', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Reserva tu estancia y vive la experiencia completa', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Descubra también la guía de bicicletas eléctricas en Monferrato', href: '/territorio/ebike-monferrato', icon: 'fa-bicycle' },
    ],
    prev: 'ebike-monferrato',
    next: 'nizza-e-barbera',
  },

  {
    slug: 'nizza-e-barbera',
    nome: 'Bonito es Barberá',
    sottotitolo: 'Guía 2026 para el evento Nizza DOCG',
    categoria: 'Evento gastronómico y enológico',
    categoryIcon: 'fa-wine-glass-alt',
    distanzaDallHotel: 'A 17 km del hotel (unos 23 min)',
    tempoVisita: 'Medio día o día completo',
    img: '/foto/Nizza e barbera nizza monferrato.webp',
    heroImg: '/foto/Nizza e barbera nizza monferrato.webp',
    tagline: 'Descubra Nizza è Barbera en Nizza Monferrato: Foro de Barbera, degustaciones, clases magistrales y consejos prácticos para llegar desde Costigliole d\'Asti.',
    descrizioneBreve: 'Si te alojas en el Hotel Langhe & Monferrato, estás en el lugar perfecto para vivir Nizza è Barbera: uno de los eventos vinícolas más auténticos del Piamonte. En esta guía encontrarás qué ver, qué degustar, cómo organizarte y por qué puedes transformar tu día en un recorrido por los viñedos de la UNESCO y los pueblos de Monferrato.',
    sezioni: [
      {
        titolo: 'Nizza es Barbera: qué es y por qué vale la pena el viaje',
        testo: `Nizza è Barbera es la gran fiesta del vino que anima el centro histórico de Nizza Monferrato cada año en el mes de mayo. El evento celebra a Barberá en sus expresiones más identificativas, con una programación que se reparte entre catas, encuentros con productores, puntos vitivinícolas de la ciudad y momentos culturales.

Para quienes visitan Monferrato, es una oportunidad ideal para conocer de cerca la Nizza DOCG, una denominación de excelencia que representa una de las formas más avanzadas de la Barbera piamontesa.`,
        lista: [
          'Evento enogastronómico de referencia en Monferrato',
          'Centrarse en Nizza DOCG y Barbera d\'Asti DOCG',
          'Degustaciones generalizadas en el centro de Nizza Monferrato',
          'Ambiente auténtico entre plazas, calles históricas y productores locales.',
        ],
        links: [
          { label: 'Sitio oficial Nizza è Barbera', href: 'https://nizzaebarbera.wine/' },
          { label: 'Nizza Monferrato, Google Maps', href: 'https://maps.google.com/?q=Nizza+Monferrato' },
        ],
        tags: ['Bonito es Barberá', 'Evento del vino del Piamonte', 'Niza Monferrato'],
      },
      {
        titolo: 'Qué hacer durante el evento: foro, punto de vino y cocina típica',
        testo: `El corazón del evento es el Foro Barbera, donde se podrán conocer numerosos productores y degustar diferentes etiquetas de forma comparativa. En el centro de la ciudad, los puntos de vino permiten descubrir la zona copa a copa, paseando por las callejuelas del pueblo.

Además del vino, la parte gastronómica es fundamental: entre puestos, discotecas y restaurantes se pueden degustar especialidades locales como la belecauda (farinata nicena) y otros platos tradicionales piamonteses.`,
        dettagli: [
          {
            titolo: 'Foro de Barberá',
            testo: 'Zona principal de degustación con productores y stands de degustación dedicados a la Nizza DOCG y a las interpretaciones territoriales de Barbera.',
          },
          {
            titolo: 'Degustaciones en el centro histórico.',
            testo: 'Puntos de vino y rutas enológicas por las calles de Nizza Monferrato, ideales para una experiencia dinámica y agradable.',
          },
          {
            titolo: 'Sabores locales',
            testo: 'Comida callejera y cocina local con recetas tradicionales, perfecta para maridar con los vinos que se degustan.',
          },
        ],
        tags: ['Foro de Barberá', 'Degustazione Nizza DOCG', 'Comida y vino Monferrato'],
      },
      {
        titolo: 'Cómo llegar desde Costigliole d\'Asti: guía práctica',
        testo: `Desde el Hotel Langhe & Monferrato se puede llegar a Nizza Monferrato en unos 23 minutos en coche (17 km). La ruta es suave y pintoresca, perfecta también para una excursión de un día sin estrés.

Los días del evento la afluencia es alta: recomendamos salir temprano y aparcar en las zonas exteriores del centro, para luego continuar a pie hasta los puntos del evento.`,
        lista: [
          'Distancia desde el hotel → Nizza Monferrato: aproximadamente 17 km',
          'Tiempo medio de conducción: aproximadamente 23 minutos.',
          'Salida recomendada: media mañana o primeras horas de la tarde.',
          'Aparcamiento sugerido: zonas señalizadas cerca del centro/estación',
        ],
        links: [
          { label: 'Ruta Hotel → Nizza Monferrato (Google Maps)', href: 'https://maps.google.com/?saddr=Hotel+Langhe+Monferrato+Costigliole+d%27Asti&daddr=Nizza+Monferrato' },
        ],
        tags: ['Cómo llegar a Nizza Monferrato', 'Aparcamiento para eventos', 'Viaje desde Costigliole'],
      },
      {
        titolo: 'El consejo del hotel: transforma el día en un tour del vino UNESCO',
        testo: `Antes o después del evento, puedes completar la experiencia con un mini itinerario entre las colinas y viñedos de la UNESCO entre Costigliole d'Asti y la zona de Nizza DOCG.

Es un viaje corto pero lleno de vistas extraordinarias: hileras de hileras, pueblos y castillos que cuentan la historia de la identidad vitivinícola de Monferrato. Al regresar, el relax os espera en el hotel para acabar el día de la mejor forma posible.`,
        lista: [
          'Panoramas de la UNESCO entre Costigliole y Nizza Monferrato',
          'Ideal para combinar con una visita a la bodega.',
          'Perfecto para parejas y amantes de la comida y el vino.',
          'Regreso al hotel en menos de 30 minutos.',
        ],
        tags: ['Ruta del vino Monferrato', 'Vigne UNESCO', 'Fin de semana de comida y vino.'],
      },
      {
        titolo: 'Preguntas frecuentes 2026: fechas, reservas y consejos útiles',
        testo: `Las fechas oficiales son publicadas cada año por los organizadores. A título indicativo, el evento tendrá lugar el segundo fin de semana de mayo (para 2026, del 8 al 11 de mayo, por confirmar).

Para aprovechar al máximo el evento, se recomienda reservar con antelación tanto la estancia como las posibles masterclasses o accesos dedicados a las catas más solicitadas.`,
        lista: [
          'Cuándo: generalmente segundo fin de semana de mayo (fechas oficiales en el sitio web)',
          'Reservas: recomendadas para foros/clases magistrales y muy recomendables para alojamiento',
          'Evento también apto para familias: sí, ambiente agradable y centro fácilmente visitable a pie',
          'Consejos prácticos: calzado cómodo, agua y batería del teléfono cargada para mapas y billetes.',
        ],
        links: [
          { label: 'Programa y actualizaciones oficiales 2026', href: 'https://nizzaebarbera.wine/' },
        ],
        tags: ['Nizza es Barberá 2026', 'Preguntas frecuentes sobre eventos de vino', 'Reservar el fin de semana en Monferrato'],
      },
    ],
    infoPratiche: {
      come: 'Del hotel a Nizza Monferrato: aproximadamente 17 km, una media de 23 minutos en coche.',
      periodo: 'Evento anual en mayo. Consulta las fechas oficiales en la web del organizador cada año.',
      cosaDPortare: 'Zapatos cómodos, posible chaqueta ligera para la noche, teléfono cargado y reservas/entradas a mano.',
      ingressiPaganti: 'Dependiendo del programa: algunas áreas/eventos pueden requerir entradas o acreditación. Consulta el sitio web oficial.',
    },
    linkInterni: [
      { label: 'Reserva tu estancia en Nizza è Barbera', href: '/prenota', icon: 'fa-calendar-check' },
      { label: 'Contáctanos para organizar tu fin de semana del vino', href: '/contatti', icon: 'fa-envelope' },
      { label: 'Descubre otras guías de la zona.', href: '/territorio', icon: 'fa-map' },
    ],
    prev: 'birrificio-nicese',
    next: null,
  },
];

export function getGuideBySlug(slug) {
  return guideEs.find((g) => g.slug === slug) || null;
}

export function getAllGuideSlugs() {
  return guideEs.map((g) => ({ slug: g.slug }));
}
