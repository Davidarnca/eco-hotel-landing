import { HoneyProduct, TourismExperience, HotelRoom, HiveSensorData } from './types';

export const HONEY_PRODUCTS: HoneyProduct[] = [
  {
    id: 'honey-01',
    name: 'Miel de Páramo Silvestre',
    scientificName: 'Mel ipomoea paramensis',
    description: 'Néctar cosechado a más de 3,000 metros de altura, con notas sutiles de flores alpinas y romero silvestre.',
    extendedDescription: 'Nuestra Miel de Páramo Silvestre es una joya única de la apicultura andina. Recolectada por abejas en estado semi-salvaje, presenta un color ámbar pálido translúcido y una cristalización lenta y fina. Su sabor inicial evoca la frescura de la niebla matutina, con notas florales intensas de mirtos, frailejones y romero de altura. Ideal para maridar con quesos maduros y tés herbales premium.',
    price: 24,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbuO8_IhP4IkdL-R72KJ9Lqd1-2AdwRmgZuMRKDYICVs2upe9jHCP4qylab00tBr6HoL1wgekZlx-2re0STsvpIqNH2XBmF0_AeCVDDl0R2UwD_OafMhmbD-Wr7APC-snv8h4EERweg4J-eO0rRFmBsq0-iWET8PCQKpuByEHJT703USNo6Imk2DAd6yM2Z1bM4ixr43cZEww2xskN0-W_FtuYy_okRpWZoIFuKxUokd6OQoeqvWuviLCNkcnbqJNIdjHMqv2KsdQx',
    rating: 4.9,
    reviewsCount: 124,
    availableQuantity: 45,
    volume: '500g',
    harvestSeason: 'Otoño',
    nutritionalFacts: {
      energyCode: '312 kcal',
      sugar: '78g',
      protein: '0.4g'
    }
  },
  {
    id: 'honey-02',
    name: 'Miel Orgánica de Eucalipto',
    scientificName: 'Mel eucalyptus globulus',
    description: 'Miel de color ámbar oscuro, profundo sabor maderoso y notas intensas de eucalipto balsámico y menta.',
    extendedDescription: 'Nuestra miel de eucalipto es valorada medicinalmente por sus propiedades expectorantes y antisépticas. Proveniente de las áreas boscosas protegidas de la finca, posee un aroma persistente y balsámico, con una textura fluida y densa. Cosechada al final de la temporada de lluvias de primavera, captura la esencia de la floración exuberante.',
    price: 18,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGlxyotVE7AkqmQZYm6y4kaFYgVdY1aZYTIP7Ipp948fdSUfZY_pSGFH821Iw4vA5QVm7FkpqCfdPSd0geqh9wlxxJhzN4EFCkV7y61XN-6h_rBeZRAcjkBNe4Ajf5pQgEyz2Er-eHsTgJo084nniMOZ9deIF-47n3PgmBIFkYNutfoH2KeWqj9wbGyvJV16bA7t6WWfCj_UiSppMODkdEYhLaZLLWL7sq0_-o4ybixd3hw6VE_w3q2FhdOU0PxmRhLYT7d5NGpTup',
    rating: 4.8,
    reviewsCount: 89,
    availableQuantity: 60,
    volume: '500g',
    harvestSeason: 'Primavera',
    nutritionalFacts: {
      energyCode: '304 kcal',
      sugar: '76g',
      protein: '0.3g'
    }
  },
  {
    id: 'honey-03',
    name: 'Panal del Bosque Nativo',
    description: 'Panal de miel 100% natural y masticable cosechado directamente de nuestros apiarios en los robledales protegidos.',
    extendedDescription: 'Consumir el panal de abejas directamente es la forma más pura y ancestral de disfrutar la miel. Conserva todos los aceites esenciales, enzimas ricas, propóleo y polen que suelen perderse en el filtrado. Cortado a mano en secciones perfectas, ofrece una experiencia interactiva deliciosa de masticar, excelente junto a higos secos y frutos secos.',
    price: 32,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGlxyotVE7AkqmQZYm6y4kaFYgVdY1aZYTIP7Ipp948fdSUfZY_pSGFH821Iw4vA5QVm7FkpqCfdPSd0geqh9wlxxJhzN4EFCkV7y61XN-6h_rBeZRAcjkBNe4Ajf5pQgEyz2Er-eHsTgJo084nniMOZ9deIF-47n3PgmBIFkYNutfoH2KeWqj9wbGyvJV16bA7t6WWfCj_UiSppMODkdEYhLaZLLWL7sq0_-o4ybixd3hw6VE_w3q2FhdOU0PxmRhLYT7d5NGpTup',
    rating: 5.0,
    reviewsCount: 42,
    availableQuantity: 15,
    volume: '400g Panal',
    harvestSeason: 'Verano',
    nutritionalFacts: {
      energyCode: '315 kcal',
      sugar: '75g',
      protein: '0.5g'
    }
  }
];

export const EXPERIENCES: TourismExperience[] = [
  {
    id: 'exp-hiking',
    title: 'Senderismo Guiado y Avistamiento de Aves',
    tagline: 'Sintoniza con el silencio y los coros del bosque nativo.',
    description: 'Recorridos silenciosos diseñados para el avistamiento de aves endémicas y el reconocimiento de flora medicinal autóctona.',
    extendedDescription: 'Acompañado por nuestros guías naturalistas locales, te adentrarás en senderos vírgenes de bosque andino nuboso. El recorrido de baja intensidad promueve el baño de bosque ("shinrin-yoku") y el silencio meditativo, permitiéndote conectar con más de 45 especies de aves registradas en nuestro santuario. Un momento único de desintoxicación urbana.',
    category: 'hiking',
    duration: '4 horas',
    price: 35,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOG1T7iZtP7k2e0rX2Cul9Dxd-2-mEyc1ZdtEyOhxkz0i3SG_nm63_QbUnoLyp0fg_2eyK9Cv8Y2prMVptx9LM6uTWS8WfWMU-9kEu5HuPDun3yp19zN3xTsUPJC78-24JSmHCRg2zRJ5GzZEAICR3Y5-nqpvV9KRgvkHlAXGNzAveTCkbFHoPcnlvsfdGqrDIYGmlhbRa2WzUTjD0lSBnmYSVsZOobhpmPOv7_KToOesZoSRBVHZnwmhfQAfbvSlWBmWqHdU6OqNz',
    capacityMax: 8,
    difficulty: 'moderado',
    included: [
      'Guía bilingüe experto en ecología',
      'Préstamos de binoculares profesionales',
      'Infusión silvestre de romero y miel de paramo',
      'Guía impresa de aves endémicas de la finca'
    ],
    recommendations: [
      'Calzado de montaña con buen agarre',
      'Chaqueta impermeable o cortavientos',
      'Botella de agua personal reutilizable',
      'Cámara fotográfica o celular con suficiente espacio'
    ]
  },
  {
    id: 'exp-camping',
    title: 'Camping Consciente bajo las Estrellas',
    tagline: 'Duerme acunado por el susurro de la montaña y un domo de luz estelar.',
    description: 'Premium glamping de bajo impacto ambiental con camas de algodón orgánico, fogata acústica y una cúpula de cielo despejado.',
    extendedDescription: 'Nuestra zona de camping consciente se localiza en un claro elevado, lejos de cualquier contaminación lumínica. Disfrutarás de un domo geodésico privado equipado con ropa de cama térmica y colchón ortopédico. La experiencia incluye una cena orgánica al fuego y una sesión de interpretación astronómica para descubrir el cielo andino.',
    category: 'camping',
    duration: '1 noche',
    price: 95,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjDBGQ_6LsEsCogsLFq9li8mCJ2IFgmNuSJCE4aTaJ2XGm-u-RnvQE2s_qiG-Zs9w78n2XMIycP7ReE99D2L_Hntg2VZXhty3QYxsw_Bvjone0NuK9vzSGlc-mu-Vw_ZVmIDPfUzgryJqSndzCbnr6azFQVJsQ4r7iOLaZy_3Ggx9ZuGBfnN9HQPeNmLqm7V_WYMmfYc5C65MnwQWKsYzBDqo453HYj6KUKt4J1USTb6UuHrYyz2J1b4gEP-ePfoAgvvpDxE4WMnNE',
    capacityMax: 4,
    difficulty: 'fácil',
    included: [
      'Hospedaje en domo bioclimático equipado',
      'Cena orgánica de tres tiempos al fuego de leña',
      'Desayuno de la granja con miel cruda fresca',
      'Guía astronómica con telescopio nocturno'
    ],
    recommendations: [
      'Ropa de abrigo adecuada para la noche (bajas temperaturas)',
      'Linterna de cabeza',
      'Calzado cómodo y medias de lana gruesas',
      'Protector solar para el amanecer'
    ]
  },
  {
    id: 'exp-beekeeping',
    title: 'Taller de Apicultura de Conservación',
    tagline: 'Conviértete en Guardián de las Abejas por un día.',
    description: 'Vístete con traje protector, abre las colmenas con nuestros maestros apícolas y aprende cómo se organiza el latido del bosque.',
    extendedDescription: 'Una experiencia transformadora en nuestro santuario de apiarios. Aprenderás sobre la biología de Apis mellifera, la importancia de los polinizadores en el cambio climático, y participarás en una inspección de control y extracción ética de miel. Finaliza con una cata guiada de miel directo de las alzas melíferas.',
    category: 'apiculture',
    duration: '3 horas',
    price: 50,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbuO8_IhP4IkdL-R72KJ9Lqd1-2AdwRmgZuMRKDYICVs2upe9jHCP4qylab00tBr6HoL1wgekZlx-2re0STsvpIqNH2XBmF0_AeCVDDl0R2UwD_OafMhmbD-Wr7APC-snv8h4EERweg4J-eO0rRFmBsq0-iWET8PCQKpuByEHJT703USNo6Imk2DAd6yM2Z1bM4ixr43cZEww2xskN0-W_FtuYy_okRpWZoIFuKxUokd6OQoeqvWuviLCNkcnbqJNIdjHMqv2KsdQx',
    capacityMax: 6,
    difficulty: 'moderado',
    included: [
      'Traje de apicultor profesional de triple protección',
      'Herramientas y ahumador de pino',
      'Cata sensorial de tres variedades de miel fresca de celda',
      'Un frasco conmemorativo de 250g con miel recolectada en tu sesión'
    ],
    recommendations: [
      'Pantalón de jean grueso y largo obligatorio',
      'Calzado cerrado (botas altas recomendadas)',
      'Evitar perfumes o lociones fuertes'
    ]
  }
];

export const HOTEL_ROOMS: HotelRoom[] = [
  {
    id: 'room-01',
    name: 'Suite del Alerce',
    tagline: 'Arquitectura viva sobre los árboles.',
    description: 'Suite construida con maderas recicladas de alerce, con amplios ventanales bioclimáticos que calientan la alcoba con el sol andino.',
    extendedDescription: 'Nuestra Suite insignia ofrece una vista inigualable del valle. Cuenta con ventilación cruzada natural para garantizar aire fresco constante de la montaña, calefacción pasiva por masa térmica y un deck exterior suspendido. Su tina exterior de cedro climatizada con agua de manantial completa el oasis perfecto.',
    basePrice: 180,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Opa_xODT8lVT6OE3X2sS9FpVC7RJXzH4rf0ELVoXLku9xPFkhPLKDUptxET5wfGrOluYb8O8m7l-Ik3nQgrEv9seOzYR-baDd2QMtYdcHYTEc0z_aRZCfMH7otmL_mE2j-uwPckYF6Jss1jsXEF9DW9DaYwD-xGiLI42eXHpNRfafscOPpFGg9RL0bKshvxlE9p9iHXpTNqThzb0VdPsXuO-rrj3NiD-A9d8DeXRBODylCB4f0GzUc8c_JPoP0YGRw1mN71Tx944',
    capacity: 2,
    sizeSqm: 52,
    bioclimaticFeatures: [
      'Calefacción solar pasiva',
      'Ventilación cruzada automatizada',
      'Iluminación LED de bajo consumo cargada por paneles solares',
      'Tratamiento de aguas grises con filtros biológicos'
    ],
    amenities: [
      'Cama King de sábanas de lino orgánico',
      'Tina de hidromasaje exterior de agua de manantial',
      'Amenities de baño biodegradables formulados con propóleo de la finca',
      'Estación de café gourmet ecológico e infusiones de la huerta'
    ],
    available: true
  },
  {
    id: 'room-02',
    name: 'Cabaña del Humus',
    tagline: 'Integrada en la masa de la tierra.',
    description: 'Cabaña semienterrada construida con técnicas ancestrales de tapial y adobe, excelente confort térmico natural tanto de día como de noche.',
    extendedDescription: 'Inspirada en el abrigo que ofrece la tierra, la Cabaña del Humus está construida con tierra arcillosa local estabilizada. Sus paredes de gran grosor aíslan completamente del sonido externo y estabilizan la temperatura en unos confortables 18°C constantes, sin necesidad de calefactores externos. Cuenta con un tragaluz en la cúpula para contemplar las estrellas desde tu cama.',
    basePrice: 140,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Opa_xODT8lVT6OE3X2sS9FpVC7RJXzH4rf0ELVoXLku9xPFkhPLKDUptxET5wfGrOluYb8O8m7l-Ik3nQgrEv9seOzYR-baDd2QMtYdcHYTEc0z_aRZCfMH7otmL_mE2j-uwPckYF6Jss1jsXEF9DW9DaYwD-xGiLI42eXHpNRfafscOPpFGg9RL0bKshvxlE9p9iHXpTNqThzb0VdPsXuO-rrj3NiD-A9d8DeXRBODylCB4f0GzUc8c_JPoP0YGRw1mN71Tx944',
    capacity: 3,
    sizeSqm: 40,
    bioclimaticFeatures: [
      'Muro de inercia térmica',
      'Tragaluz cenital de doble acristalamiento',
      'Enclautraminto de tierra estabilizada',
      'Pisos de arcilla cocida pulida radial'
    ],
    amenities: [
      'Cama Queen de algodón orgánico hilado a mano',
      'Estufa de leña de alta eficiencia',
      'Ducha con claraboya que simula lluvia natural',
      'Terraza privada con hamacas de fibra de agave'
    ],
    available: true
  }
];

export const HIVE_SENSORS_MOCK: HiveSensorData[] = [
  {
    id: 'sensor-hive-1',
    name: 'Colmena Alerce (Apiario Norte)',
    temperature: 34.8, // Healthy hive is around 34-36C
    humidity: 58.2, // normal range
    honeyLevel: 18.4,
    activityIndex: 'óptima',
    lastSync: 'Hace 5 minutos'
  },
  {
    id: 'sensor-hive-2',
    name: 'Colmena Roble (Apiario Sur)',
    temperature: 33.5,
    humidity: 62.1,
    honeyLevel: 12.3,
    activityIndex: 'alta',
    lastSync: 'Hace 3 minutos'
  },
  {
    id: 'sensor-hive-3',
    name: 'Colmena Cedro (Centro Multi-Flora)',
    temperature: 34.2,
    humidity: 59.9,
    honeyLevel: 22.8,
    activityIndex: 'alta',
    lastSync: 'Hace 10 minutos'
  }
];
