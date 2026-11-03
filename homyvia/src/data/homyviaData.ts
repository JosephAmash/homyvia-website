export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
  images: string[];
  aspectRatio: string;
  accent: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'umzug' | 'montage' | 'entsorgung' | 'trockenbau';
  categoryLabel: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const COMPANY_INFO = {
  name: 'HomyVia',
  legalName: 'HomyVia',
  slogan: 'Gemeinsam mehr bewegen',
  subtitle: 'Ihr starker Partner für jedes Projekt.',
  phone: '+49 1520 230 2222',
  phoneCallUrl: 'tel:+4915202302222',
  phoneDisplay: '+49 1520 230 2222',
  whatsappUrl: 'https://wa.me/4915202302222?text=Hallo%20HomyVia%20Team%2C%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Angebot.',
  email: 'info@homyvia.de',
  emailUrl: 'mailto:info@homyvia.de',
  website: 'www.homyvia.de',
  address: {
    street: 'Sauerbruchstr. 76',
    zipCity: '51375 Leverkusen',
    region: 'Nordrhein-Westfalen',
    country: 'Deutschland'
  },
  operatingAreas: 'Köln, Leverkusen & Umgebung, NRW und ganz Deutschland',
  openingHours: 'Montag – Freitag: 08:00 – 18:00 Uhr | Samstag: 08:00 – 12:00 Uhr',
  social: {
    facebook: 'https://www.facebook.com/share/1EKF2RMgxi/',
    instagram: 'https://www.instagram.com/homyvia?xtok=bW1ndmY3M2k4MWQ2',
    tiktok: 'https://www.tiktok.com/@homyvia?_r=1&_t=ZG-9B038eRmhaC'
  },
  values: [
    { title: 'Zuverlässig', desc: 'Feste Terminzusagen, transparente Kommunikation und pünktliche Ausführung ohne Wenn und Aber.' },
    { title: 'Sorgfalt', desc: 'Behutsamer Umgang mit Ihrem Hab und Gut, professionelle Schutzverpackungen und saubere Arbeitsweise.' },
    { title: 'Professionell', desc: 'Erfahrenes Fachpersonal, modernste Ausrüstung, eigene Transportfahrzeuge und volle Versicherung.' }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'umzuege',
    number: '01',
    title: 'UMZÜGE',
    subtitle: 'Sicher • Pünktlich • Zuverlässig',
    tagline: 'Stressfreier Umzug für Privat und Gewerbe',
    badge: 'Sicher & Pünktlich',
    shortDesc: 'Ob Nah- oder Fernumzug, Singlewohnung oder Firmenverlegung – wir packen an und bringen alles sicher an Ihr Ziel.',
    description: 'Mit modernem Fuhrpark, Hebebühne, schonenden Transporttechniken und einem eingespielten Team garantieren wir einen reibungslosen Ablauf vom sorgsamen Einpacken bis zur Schlüsselübergabe.',
    features: [
      'Privat- & Seniorenumzüge mit Rundum-Service',
      'Firmen-, Büro- & Archivverlegungen',
      'Fachgerechte Schutzverpackung & Packservice',
      'Möbellift & Halteverbotszonen-Organisation',
      'Vollständige Transport- & Haftpflichtversicherung'
    ],
    image: '/assets/aistudio/umzug_1_f02f7687.jpg',
    images: [
      '/assets/aistudio/umzug_1_f02f7687.jpg',
      '/assets/aistudio/umzug_7_d67b2a71.jpg',
      '/assets/aistudio/umzug_3_a306ebd0.jpg',
      '/assets/aistudio/umzug_4_b1e7c652.jpg'
    ],
    aspectRatio: '16/10',
    accent: '#0B2046'
  },
  {
    id: 'montage',
    number: '02',
    title: 'MONTAGE',
    subtitle: 'Möbel • Küchen • Fachgerecht',
    tagline: 'Präziser Aufbau von Profis ausgeführt',
    badge: 'Möbel & Küchen',
    shortDesc: 'Vom exklusiven Schranksystem über moderne Einbauküchen bis hin zu Büro- und Ladenbauelementen.',
    description: 'Unsere Handwerker montieren Möbelstücke aller Hersteller millimetergenau, sicher und stabil. Inklusive Arbeitsplatten-Zuschnitt, Spülen- & Geräteanschluss.',
    features: [
      'Einbauküchen-Montage inklusive Geräteanschluss',
      'Großschränke, Betten, Schiebetürsysteme & Wohnwände',
      'Büroeinrichtung, Konferenztische & Akustikmöbel',
      'Ladenbau & maßgenaue Anpassungsarbeiten',
      'Wand- & Deckenmontagen (Lampen, Spiegel, TV-Halterungen)'
    ],
    image: '/assets/aistudio/Montage_5_83bc62e8.jpg',
    images: [
      '/assets/aistudio/Montage_5_83bc62e8.jpg',
      '/assets/aistudio/Montage_3_c489fe77.jpg',
      '/assets/aistudio/Montage_4_91eab678.jpg',
      '/assets/aistudio/Montage_6_74643dff.jpg'
    ],
    aspectRatio: '16/10',
    accent: '#D4A346'
  },
  {
    id: 'entsorgung',
    number: '03',
    title: 'ENTSORGUNG',
    subtitle: 'Sauber • Umweltfreundlich • Fair',
    tagline: 'Vom Chaos zur Klarheit – Sauberkeit garantiert',
    badge: 'Sauber & Fair',
    shortDesc: 'Schnelle und fachgerechte Entrümpelungen von Wohnungen, Kellern, Dachböden und Gewerbeflächen mit besenreiner Übergabe.',
    description: 'Wir schaffen Platz! Wir trennen alle Materialien umweltbewusst, führen verwertbare Gegenstände dem Recycling zu und garantieren faire Pauschal- oder Festpreise.',
    features: [
      'Wohnungs- & Haushaltsauflösungen (auch Härtefälle)',
      'Keller-, Dachboden- & Garagenentrümpelung',
      'Gewerbe- & Büroräumungen mit Aktenvernichtung',
      'Umweltgerechte Mülltrennung & Recyclingnachweis',
      'Besenreine Übergabe auf Wunsch mit Vor-Ort-Abnahme'
    ],
    image: '/assets/aistudio/Entsorgung_7_aa95ff05.jpg',
    images: [
      '/assets/aistudio/Entsorgung_7_aa95ff05.jpg',
      '/assets/aistudio/Entsorgung_9_37baa9bc.jpg',
      '/assets/aistudio/Entsorgung_2__eb8c6d33.jpg',
      '/assets/aistudio/Entsorgung_10_e5f65388.jpg'
    ],
    aspectRatio: '16/10',
    accent: '#0B2046'
  },
  {
    id: 'trockenbau',
    number: '04',
    title: 'TROCKENBAU',
    subtitle: 'Innenausbau • Modern • Individuell',
    tagline: 'Maßgeschneiderte Raumkonzepte für Ihr Zuhause',
    badge: 'Modern & Individuell',
    shortDesc: 'Moderne Raumaufteilungen, abgehängte Decken mit edler LED-Lichtarchitektur und perfekte Spachtelarbeiten.',
    description: 'Verwandeln Sie Ihre Räume in moderne Wohlfühloasen. Ob Trennwände, Akustikdecken, TV-Nischen oder komplette Sanierung – wir realisieren Ihre Wohnwünsche.',
    features: [
      'Ständerwände & moderne Raumaufteilungen mit Laser',
      'Abgehängte Decken mit indirekter LED-Lichtvoute',
      'Qualitätsspachtelung (Q1 bis Q4) für glatte Wände',
      'Wandnischen, TV-Wände & Akustikpaneele',
      'Schall- & Wärmedämmung nach modernsten Standards'
    ],
    image: '/assets/aistudio/Trockenbau_6_aee6a1fa.jpg',
    images: [
      '/assets/aistudio/Trockenbau_6_aee6a1fa.jpg',
      '/assets/aistudio/Trockenbau_1_fc84384b.jpg',
      '/assets/aistudio/Trockenbau_5_b5ce6c63.jpg',
      '/assets/aistudio/Trockenbau_11_66f57ae1.jpg'
    ],
    aspectRatio: '16/10',
    accent: '#D4A346'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Umzüge
  {
    id: 'g-umzug-1',
    title: 'Moderner Möbel-LKW im Einsatz',
    category: 'umzug',
    categoryLabel: 'Umzüge',
    image: '/assets/aistudio/umzug_7_d67b2a71.jpg',
    description: 'Neubau-Umzug mit Ladebordwand und geschultem HomyVia-Team in Leverkusen.',
    featured: true
  },
  {
    id: 'g-umzug-2',
    title: 'Sicherer Möbelumzug',
    category: 'umzug',
    categoryLabel: 'Umzüge',
    image: '/assets/aistudio/umzug_1_f02f7687.jpg',
    description: 'Behutsamer Transport von Polstermöbeln mit Bodenschutzmatten.'
  },
  {
    id: 'g-umzug-3',
    title: 'Professionelle Schutzverpackung',
    category: 'umzug',
    categoryLabel: 'Umzüge',
    image: '/assets/aistudio/umzug_3_a306ebd0.jpg',
    description: 'Spezielle Polsterung und Markierung für hochwertige Porzellan- & Glasobjekte.'
  },
  {
    id: 'g-umzug-4',
    title: 'Schlüsselfertiger Einzug',
    category: 'umzug',
    categoryLabel: 'Umzüge',
    image: '/assets/aistudio/umzug_6_e9ea5421.jpg',
    description: 'Zufriedene Kunden bei der Übergabe der neuen Wohnung.',
    featured: true
  },
  {
    id: 'g-umzug-5',
    title: 'Flottenfahrzeug HomyVia',
    category: 'umzug',
    categoryLabel: 'Umzüge',
    image: '/assets/aistudio/umzug_5_0878d8ca.jpg',
    description: 'Eigener Transporter mit Ladevolumen für komplette Wohnungsauflösungen.'
  },

  // Montage
  {
    id: 'g-mont-1',
    title: 'Exklusive Küchenmontage',
    category: 'montage',
    categoryLabel: 'Montage',
    image: '/assets/aistudio/Montage_5_83bc62e8.jpg',
    description: 'Komplette Kücheninsel-Installation mit Dunstabzug und Induktionsfeld.',
    featured: true
  },
  {
    id: 'g-mont-2',
    title: 'Moderne Schiebetür-Schränke',
    category: 'montage',
    categoryLabel: 'Montage',
    image: '/assets/aistudio/Montage_3_c489fe77.jpg',
    description: 'Aufbau von 3-Meter Spiegelschränken mit sanfter Soft-Close-Führung.'
  },
  {
    id: 'g-mont-3',
    title: 'Schlafzimmer- & Bettsysteme',
    category: 'montage',
    categoryLabel: 'Montage',
    image: '/assets/aistudio/Montage_4_91eab678.jpg',
    description: 'Montage von Luxus-Polsterbetten inklusive Nachttischen und Beleuchtung.'
  },
  {
    id: 'g-mont-4',
    title: 'Wohnwand- & TV-Mediawände',
    category: 'montage',
    categoryLabel: 'Montage',
    image: '/assets/aistudio/Montage_6_74643dff.jpg',
    description: 'Präzise Ausrichtung großer Multimedia-Wohnwände mit LED-Hintergrundlicht.'
  },
  {
    id: 'g-mont-5',
    title: 'Büro- & Konferenzraum-Montage',
    category: 'montage',
    categoryLabel: 'Montage',
    image: '/assets/aistudio/Montage_7_b9414b56.jpg',
    description: 'Gewerblicher Aufbau von Konferenztischen und ergonomischen Büromöbeln.'
  },

  // Entsorgung
  {
    id: 'g-ent-2',
    title: 'Umweltgerechtes Recycling',
    category: 'entsorgung',
    categoryLabel: 'Entsorgung',
    image: '/assets/aistudio/Entsorgung_9_37baa9bc.jpg',
    description: 'Fachgerechte Mülltrennung nach Holz, Metall, Kunststoffen und Grünabfall.'
  },
  {
    id: 'g-ent-3',
    title: 'Haushaltsauflösung mit Team',
    category: 'entsorgung',
    categoryLabel: 'Entsorgung',
    image: '/assets/aistudio/Entsorgung_7_aa95ff05.jpg',
    description: 'Schnelle Räumung von Erbnachlässen und Wohnungen mit Wertanrechnung.'
  },
  {
    id: 'g-ent-4',
    title: 'Büro- & Archiventrümpelung',
    category: 'entsorgung',
    categoryLabel: 'Entsorgung',
    image: '/assets/aistudio/Entsorgung_10_e5f65388.jpg',
    description: 'Diskrete Akten- und Altmöbel-Entsorgung für Gewerbekunden.'
  },
  {
    id: 'g-ent-5',
    title: 'Persönliche Vor-Ort-Beratung',
    category: 'entsorgung',
    categoryLabel: 'Entsorgung',
    image: '/assets/aistudio/Entsorgung_6_804c409d.jpg',
    description: 'Transparente Besichtigung und sofortige Festpreiskalkulation mit Kunden.'
  },

  // Trockenbau
  {
    id: 'g-trock-1',
    title: 'Moderner Innenausbau mit Lichtdesign',
    category: 'trockenbau',
    categoryLabel: 'Trockenbau',
    image: '/assets/aistudio/Trockenbau_11_66f57ae1.jpg',
    description: 'Akustik-Holzlamellen kombiniert mit Trockenbau-Deckenbeleuchtung.',
    featured: true
  },
  {
    id: 'g-trock-2',
    title: 'Abgehängte Kassettendecke',
    category: 'trockenbau',
    categoryLabel: 'Trockenbau',
    image: '/assets/aistudio/Trockenbau_5_b5ce6c63.jpg',
    description: 'Mehrstufige Trockenbau-Lichtdecken für ein luxuriöses Raumgefühl.'
  },
  {
    id: 'g-trock-3',
    title: 'Präziser Ständerwand-Bau',
    category: 'trockenbau',
    categoryLabel: 'Trockenbau',
    image: '/assets/aistudio/Trockenbau_6_aee6a1fa.jpg',
    description: 'Exakte Laserausrichtung der Profile und Gipskartonplatten.'
  },
  {
    id: 'g-trock-4',
    title: 'Qualitätsspachtelung Q4',
    category: 'trockenbau',
    categoryLabel: 'Trockenbau',
    image: '/assets/aistudio/Trockenbau_1_fc84384b.jpg',
    description: 'Glatte, streich- und tapezierfertige Wandflächen auf höchstem Niveau.'
  },
  {
    id: 'g-trock-5',
    title: 'Exklusives Badezimmer-Design',
    category: 'trockenbau',
    categoryLabel: 'Trockenbau',
    image: '/assets/aistudio/Trockenbau_8_d942b5eb.jpg',
    description: 'Feuchtraum-Trockenbau mit integrierten Glas- und Lichtnischen.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Michael & Sarah Weber',
    location: 'Leverkusen-Schlebusch',
    service: 'Komplettumzug & Küchenmontage',
    quote: 'HomyVia hat unseren Umzug vom ersten Telefonat bis zur fertigen Küche absolut perfekt gemanagt. Pünktlich auf die Minute, extrem vorsichtig mit den Möbeln und die Küche sitzt makellos!',
    rating: 5,
    date: 'Oktober 2026'
  },
  {
    name: 'Dr. Jens Hoffmann',
    location: 'Köln-Mülheim',
    service: 'Büroverlegung & Trockenbau',
    quote: 'Wir mussten unsere Kanzleiräume verlegen und neue Trennwände setzen lassen. Das Team von HomyVia hat beides aus einer Hand innerhalb kürzester Zeit erledigt. Klare Weiterempfehlung.',
    rating: 5,
    date: 'September 2026'
  },
  {
    name: 'Brigitte Keller',
    location: 'Düsseldorf-Benrath',
    service: 'Haushaltsauflösung & Entsorgung',
    quote: 'Nach dem Nachlass meines Vaters war ich überfordert. Das Team von HomyVia war einfühlsam, schnell und hat das Haus absolut besenrein hinterlassen. Der Festpreis wurde zu 100% eingehalten.',
    rating: 5,
    date: 'August 2026'
  }
];

export const FAQS = [
  {
    q: 'Wie erhalte ich ein kostenloses Angebot von HomyVia?',
    a: 'Rufen Sie uns direkt unter +49 1520 230 2222 an, schreiben Sie uns via WhatsApp oder füllen Sie unser Online-Formular aus. Für größere Projekte vereinbaren wir gerne eine kostenfreie und unverbindliche Vor-Ort-Besichtigung.'
  },
  {
    q: 'Wie berechnet HomyVia die Preise für ein Projekt?',
    a: 'Die Preisgestaltung erfolgt flexibel, transparent und passgenau nach den individuellen Anforderungen Ihres Projekts. Je nach Umfang bieten wir Ihnen entweder ein verbindliches Festpreisangebot für maximale Planungssicherheit oder eine Abrechnung nach tatsächlichem Arbeitsaufwand an. Alle Kostenpunkte werden vor Beginn der Arbeiten detailliert aufgeführt, sodass keine unerwarteten Zusatzkosten entstehen.'
  },
  {
    q: 'Sind meine Gegenstände während des Transports versichert?',
    a: 'Selbstverständlich. Sämtliche Transporte und Montagearbeiten sind über unsere umfassende Betriebs- und Transportversicherung vollumfänglich abgesichert.'
  },
  {
    q: 'Können Sie auch kurzfristige Aufträge übernehmen?',
    a: 'Ja, dank unserer flexiblen Einsatzplanung und unseres eigenen modernen Fuhrparks können wir häufig auch sehr kurzfristige Einsätze und spontane Anfragen zuverlässig für Sie realisieren. Kontaktieren Sie uns am besten direkt telefonisch oder per WhatsApp, um Ihren Wunschtermin unmittelbar abzustimmen.'
  },
  {
    q: 'In welchen Regionen ist HomyVia tätig?',
    a: 'Raum Köln, Leverkusen, Umgebung und NRW und deutschlandweit.'
  },
  {
    q: 'Kombinieren Sie Leistungen wie Umzug, Entsorgung und Montage?',
    a: 'Ja, das ist eine unserer größten Stärken! Sie bekommen alle gewünschten Leistungen direkt aus einer Hand. Das spart Ihnen wertvolle Zeit, Koordination und Kosten.'
  }
];
