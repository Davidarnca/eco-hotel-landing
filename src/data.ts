import { HoneyProduct, TourismExperience, HotelRoom, HiveSensorData } from './types';
import miel2Img from './assets/miel2.png'; // Un solo punto y con "i"
import miel3Img from './assets/miel3.png'; // Un solo punto y con "i"

export const HONEY_PRODUCTS: HoneyProduct[] = [
  {
    id: 'honey-01',
    name: 'Miel de Abejas',
    scientificName: '',
    description: 'Frasco x 100 gr $ 20.000 más domicilio.',
    extendedDescription: 'Nuestra miel es una joya única de la apicultura, cosechada con absoluto respeto y profunda conciencia ambiental. Disfruta de la presentación de 100g, ideal para degustar o para llevar contigo.',
    price: 20000,
    imageUrl: miel2Img,
    rating: 5.0,
    reviewsCount: 124,
    availableQuantity: 45,
    volume: '100g',
    harvestSeason: 'Actual',
    nutritionalFacts: {
      energyCode: '312 kcal',
      sugar: '78g',
      protein: '0.4g'
    }
  },
  {
    id: 'honey-02',
    name: 'Miel de Abejas',
    scientificName: '',
    description: 'Frasco x 500 gr $ 40.000 más domicilio.',
    extendedDescription: 'Nuestra miel es valorada por sus propiedades naturales, perfecta para endulzar tu vida. Cosechada en nuestro Santuario, esta presentación de 500g es ideal para toda la familia.',
    price: 40000,
    imageUrl: miel3Img,
    rating: 5.0,
    reviewsCount: 89,
    availableQuantity: 60,
    volume: '500g',
    harvestSeason: 'Actual',
    nutritionalFacts: {
      energyCode: '304 kcal',
      sugar: '76g',
      protein: '0.3g'
    }
  }
];

export const EXPERIENCES: TourismExperience[] = [
  {
    id: 'exp-hospedaje',
    title: 'Hospedaje Rural',
    tagline: 'Desconecta en la naturaleza.',
    description: 'Cabañas ecológicas y habitaciones rústicas integradas en el entorno natural con todas las comodidades.',
    extendedDescription: 'Nuestro hospedaje rural...',
    category: 'alojamiento',
    duration: '1 NOCHE MIN.',
    price: 85,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-c6a4d14fff88?q=80&w=1000&auto=format&fit=crop',
    capacityMax: 4,
    difficulty: 'fácil',
    included: [],
    recommendations: [],
    gallery: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1542314831-c6a4d14fff88?q=80&w=1200&auto=format&fit=crop', caption: 'Nuestras Cabañas' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop', caption: 'Habitación Interior' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=1200&auto=format&fit=crop', caption: 'Desayuno Incluido' }
    ]
  },
  {
    id: 'exp-visita',
    title: 'Visita Guiada',
    tagline: 'Conoce nuestro ecosistema.',
    description: 'Recorrido guiado por los senderos ecológicos, conociendo la flora, fauna y la granja sostenible.',
    extendedDescription: 'Acompañado de expertos...',
    category: 'senderismo',
    duration: '2 HORAS',
    price: 25,
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop',
    capacityMax: 12,
    difficulty: 'fácil',
    included: [],
    recommendations: [],
    gallery: [
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', caption: 'Paseo por el bosque' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop', caption: 'Senderos Naturales' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop', caption: 'Flora Nativa' }
    ]
  },
  {
    id: 'exp-camping',
    title: 'Zona de Camping',
    tagline: 'Bajo las estrellas andinas.',
    description: 'Área segura y equipada para acampar al aire libre, con espacios para fogatas y baños ecológicos.',
    extendedDescription: 'Acampa en nuestra zona reservada...',
    category: 'camping',
    duration: '1 NOCHE MIN.',
    price: 15,
    imageUrl: 'https://images.unsplash.com/photo-1504280390267-33106d51ce44?q=80&w=1000&auto=format&fit=crop',
    capacityMax: 20,
    difficulty: 'moderado',
    included: [],
    recommendations: [],
    gallery: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1504280390267-33106d51ce44?q=80&w=1200&auto=format&fit=crop', caption: 'Zona de Camping' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=1200&auto=format&fit=crop', caption: 'Fogatas Nocturnas' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1200&auto=format&fit=crop', caption: 'Dormir bajo las estrellas' }
    ]
  },
  {
    id: 'exp-mirador',
    title: 'Mirador Panorámico',
    tagline: 'Vistas que quitan el aliento.',
    description: 'Contempla la inmensidad del paisaje andino desde nuestro mirador elevado con vista 360 grados.',
    extendedDescription: 'Nuestro mirador panorámico...',
    category: 'observatorio',
    duration: 'LIBRE',
    price: 5,
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop',
    capacityMax: 15,
    difficulty: 'fácil',
    included: [],
    recommendations: [],
    gallery: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop', caption: 'Vista 360 grados' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1587049352847-81a56d773c1c?q=80&w=1200&auto=format&fit=crop', caption: 'Observatorio de Cristal' },
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', caption: 'Atardecer en la Finca' }
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
