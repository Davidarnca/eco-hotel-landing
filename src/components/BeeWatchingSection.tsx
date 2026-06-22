import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Hexagon, Shield, HandHeart, User, Image as ImageIcon } from 'lucide-react';
import miradorImg from '../assets/mirador.jpeg';
import mirador2Img from '../assets/mirador2.jpeg';
import interaccionImg from '../assets/interaccion.jpeg';
import interaccion1Img from '../assets/interaccion_1.jpeg';
import interaccion3Img from '../assets/vista.jpeg';
import interaccion2Img from '../assets/polen.jpeg';
import trabajadoresImg from '../assets/trabajadores.mp4';
import colmenasImg from '../assets/colmenas.jpeg';
import proteccionImg from '../assets/proteccion2.jpeg';
import proteccionGeneralImg from '../assets/proteccion.jpeg';
import chameImg from '../assets/chame.jpeg';
import fincaImg from '../assets/finca.jpg';
import { GalleryModal, MediaItem } from './GalleryModal';

const topics = [
  {
    id: 'mirador',
    title: 'Visita al Mirador',
    category: 'OBSERVATORIO',
    icon: Eye,
    difficulty: 'FÁCIL',
    maxPeople: 12,
    duration: '45 MINUTOS',
    shortDesc: 'Observación segura de la vida dentro del panal a través de nuestros ventanales especializados.',
    fullDesc: 'Adéntrate en nuestro mirador de cristal, diseñado para que puedas contemplar de cerca la fascinante "danza de las abejas" y la intrincada organización de la colonia. Es una experiencia inmersiva y 100% segura, ideal para familias y curiosos que desean ver la magia de la reina y sus obreras sin alterar su entorno natural.',
    bgImage: miradorImg
  },
  {
    id: 'colmenas',
    title: 'Exploración de Colmenas',
    category: 'COLMENAS',
    icon: Hexagon,
    difficulty: 'MODERADO',
    maxPeople: 8,
    duration: '1.5 HORAS',
    shortDesc: 'Descubre la arquitectura perfecta donde nace la miel y se desarrolla el ecosistema de la colonia.',
    fullDesc: 'Descubre cómo funcionan nuestras colmenas. Aprenderás sobre el diseño de las estructuras, la diferencia entre las alzas melarias y la cámara de cría, y cómo las abejas utilizan el propóleo para desinfectar y sellar su hogar. Comprender la colmena es entender una de las sociedades más perfectas de la naturaleza.',
    bgImage: colmenasImg
  },
  {
    id: 'interaccion',
    title: 'Interacción Directa',
    category: 'INTERACCIÓN',
    icon: HandHeart,
    difficulty: 'MODERADO',
    maxPeople: 6,
    duration: '2 HORAS',
    shortDesc: 'Acércate de manera ética y consciente a las abejas guiado por nuestros expertos apicultores.',
    fullDesc: 'Siente la vibración del enjambre. Te proporcionaremos equipo de protección profesional y te enseñaremos las técnicas de acercamiento suave. Aprenderás a utilizar el ahumador correctamente, identificar los sonidos de las abejas y realizar una inspección básica, siempre priorizando el bienestar de los polinizadores.',
    bgImage: interaccionImg
  },
  {
    id: 'proteccion',
    title: 'Charla de Conservación',
    category: 'PROTECCIÓN',
    icon: Shield,
    difficulty: 'FÁCIL',
    maxPeople: 20,
    duration: '1 HORA',
    shortDesc: 'Conoce nuestros esfuerzos por preservar a los polinizadores y cómo puedes ayudar desde casa.',
    fullDesc: 'Las abejas enfrentan serios desafíos debido al cambio climático y los pesticidas. En esta charla interactiva, te mostramos cómo Santuario de Chame es un refugio libre de químicos para ellas. Te enseñaremos qué plantas puedes cultivar en casa y qué acciones tomar para convertirte en un guardián de las abejas en tu propia comunidad.',
    bgImage: proteccionImg
  }
];

// Función para obtener el contenido multimedia específico e independiente de cada topic
const getMediaForTopic = (topicId: string): MediaItem[] => {
  switch (topicId) {
    case 'mirador':
      return [
        { type: 'image', src: miradorImg, caption: 'Ventanales del Mirador del Panal' },
        { type: 'image', src: mirador2Img, caption: 'Vista interior del observatorio de abejas' },
        { type: 'image', src: interaccion3Img, caption: 'Paisaje natural visible desde el mirador' }
      ];
    case 'colmenas':
      return [
        { type: 'image', src: colmenasImg, caption: 'Estructura exterior de nuestras colmenas' },
        { type: 'image', src: interaccion2Img, caption: 'Detalle de las celdas de cera y el polen' },
        { type: 'video', src: trabajadoresImg, caption: 'Nuestros expertos inspeccionando los panales' }
      ];
    case 'interaccion':
      return [
        { type: 'image', src: interaccionImg, caption: 'Acercamiento ético con trajes de protección' },
        { type: 'image', src: interaccion1Img, caption: 'Técnicas de manejo de abejas con ahumador' },
        { type: 'image', src: fincaImg, caption: 'Recorrido por la zona apícola del Santuario' }
      ];
    case 'proteccion':
      return [
        { type: 'image', src: proteccionImg, caption: 'Talleres prácticos de conservación de polinizadores' },
        { type: 'image', src: proteccionGeneralImg, caption: 'Especies de plantas nativas sembradas para las abejas' },
        { type: 'image', src: chameImg, caption: 'El entorno natural protegido del Santuario de Chame' }
      ];
    default:
      return [];
  }
};

export const BeeWatchingSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<typeof topics[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="avistamiento" className="py-16 md:py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <span className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.2em] text-secondary uppercase block">
            CONOCELAS
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary">
            Biodiversidad, Senderismo, Observatorio de Abejas, BioHotel
          </h2>
          <div className="h-0.5 w-16 bg-secondary mx-auto"></div>
          
          <div className="bg-[#efb810] text-primary p-8 lg:p-12 rounded-[2rem] shadow-xl max-w-4xl mx-auto mt-8 lg:mt-12 mb-16 lg:mb-24 text-justify font-sans text-base sm:text-lg leading-relaxed space-y-6">
            <p>
              Descubre uno de los espacios más fascinantes del <strong>Santuario de Chame</strong>: una experiencia de conexión, aprendizaje y contemplación que te acercará al maravilloso mundo de las abejas y a la riqueza natural que las rodea.
            </p>
            <p>
              Las abejas son las grandes guardianas de la biodiversidad. Gracias a su labor de polinización hacen posible 🐝 la reproducción de miles de especies vegetales y contribuyen a la producción de gran parte de los alimentos que consumimos diariamente. Por esta razón, en el <strong>Santuario de Chame</strong> hemos creado un espacio dedicado a su protección, conservación y observación responsable.
            </p>
            <p>
              Nuestro <strong>Sendero Agroecológico</strong> te invita a recorrer paisajes llenos de vida, donde podrás disfrutar de una experiencia sensorial única entre árboles nativos y frutales, flores, lagos y una gran diversidad de fauna. Durante el recorrido tendrás la oportunidad de observar aves, insectos y pequeños animales en su entorno natural, mientras disfrutas de momentos de tranquilidad y contemplación.
            </p>
            <p>
              A lo largo del sendero encontrarás nuestros <strong>BioHoteles</strong>, estructuras especialmente diseñadas para ofrecer refugio y sitios de anidación a las abejas solitarias, importantes polinizadoras de nuestros ecosistemas. El recorrido culmina en el lago de los peces, podrás alimentarlos y verlos, pero no antes de pasar por el <strong>Observatorio de Abejas</strong>, un espacio seguro y educativo donde podrás observar de cerca una comunidad de abejas melíferas desarrollando su extraordinario trabajo dentro de las colmenas.
            </p>
            <p>
              Esta experiencia permite conocer de manera respetuosa a uno de los seres más importantes para la vida en el planeta, reconocidas por la comunidad científica como especies fundamentales para la conservación de los ecosistemas, la seguridad alimentaria y la conservación de la biodiversidad. Aquí comprenderás por qué proteger a las abejas es proteger nuestro futuro.
            </p>
            <p>
              Si amas la naturaleza, la fotografía y las experiencias auténticas, este recorrido te permitirá conectar con el entorno, aprender sobre la importancia de los polinizadores y crear recuerdos inolvidables en medio de un paisaje lleno de vida.
            </p>
            
            <div className="w-full h-px bg-primary/20 my-6"></div>
            
            <a 
              href="https://wa.me/573125908605" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 font-bold text-lg sm:text-xl tracking-wide hover:opacity-80 transition-opacity"
            >
              Conócelas: WhatsApp 3125908605
            </a>
          </div>
        </div>

        {/* Desktop Layout - Horizontal Accordion (Concept A) */}
        <div className="hidden md:flex flex-row h-[600px] gap-4 w-full">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            const isActive = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            // Flex growth logic: hovered panel expands, others shrink, default is equal
            const flexVal = isActive ? 2.3 : isAnyHovered ? 0.56 : 1;

            return (
              <div
                key={topic.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  flex: `${flexVal} ${flexVal} 0%`,
                  transition: 'all 700ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="relative overflow-hidden rounded-3xl group flex flex-col justify-end border border-outline-variant/15 shadow-md hover:shadow-2xl cursor-pointer"
              >
                {/* Background Image */}
                <img
                  alt={topic.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ${
                    isActive ? 'scale-105' : 'group-hover:scale-105'
                  } z-0`}
                  src={topic.bgImage}
                />

                {/* Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 z-10 opacity-85 transition-opacity duration-500"></div>

                {/* Top Badge (Icon and Category) */}
                <div className="absolute top-6 left-6 z-20 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 bg-white/10 text-white font-sans text-[10px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-sm transition-all duration-500">
                    <Icon className="h-4 w-4 text-secondary" />
                    <span className={`transition-opacity duration-500 ${
                      isAnyHovered && !isActive ? 'hidden' : 'inline'
                    }`}>
                      {topic.category}
                    </span>
                  </span>
                </div>

                {/* Rotated Minimal Label (visible ONLY when another card is hovered) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center pointer-events-none z-20 transition-all duration-500 ${
                    isAnyHovered && !isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="font-sans text-sm font-bold text-white/50 tracking-[0.25em] uppercase whitespace-nowrap -rotate-90 origin-center">
                    {topic.title}
                  </span>
                </div>

                {/* Horizontal Content Area (visible when active or when no card is hovered) */}
                <div
                  className={`relative z-20 p-8 flex flex-col gap-4 transition-all duration-500 ${
                    isAnyHovered && !isActive ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
                  }`}
                >
                  <div>
                    <h3 className="font-display text-xl md:text-3xl font-bold text-white leading-tight mb-2 drop-shadow-md">
                      {topic.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-white/90">
                      <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-secondary">
                        {topic.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium bg-black/30 px-2.5 py-1 rounded-md backdrop-blur-sm">
                        <User className="h-3.5 w-3.5 text-secondary" />
                        Máx: {topic.maxPeople}
                      </span>
                    </div>
                  </div>

                  {/* Description & Buttons - Revealed only when card is expanded/active */}
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isActive ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                      {topic.fullDesc}
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Avoid triggering panel click
                          setSelectedTopic(topic);
                        }}
                        className="w-fit min-w-[160px] bg-white/10 hover:bg-white/20 text-white border border-white/30 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest py-3 px-6 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
                      >
                        <ImageIcon className="h-4 w-4" />
                        Ver Galería
                      </button>
                    </div>
                  </div>

                  {/* Subtle "Hover to explore" indicator when no card is hovered */}
                  <div
                    className={`text-[10px] font-sans font-semibold tracking-wider text-white/40 uppercase transition-opacity duration-300 ${
                      isAnyHovered ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}
                  >
                    Ver detalles →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout - Vertical Stack (Premium Responsive fallback) */}
        <div className="flex md:hidden flex-col gap-6 w-full">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                className="relative overflow-hidden rounded-2xl flex flex-col justify-end min-h-[360px] border border-outline-variant/15 shadow-md p-6"
              >
                {/* Background Image */}
                <img
                  alt={topic.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  src={topic.bgImage}
                />

                {/* Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 z-10 opacity-90"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 text-white font-sans text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-sm">
                    <Icon className="h-3.5 w-3.5 text-secondary" />
                    {topic.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="relative z-20 flex flex-col gap-4">
                  <div>
                    <h3 className="font-display text-xl md:text-3xl font-bold text-white leading-tight mb-1.5">
                      {topic.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-white/90">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-secondary">
                        {topic.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-medium bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                        <User className="h-3 w-3 text-secondary" />
                        Máx: {topic.maxPeople}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-white/80 leading-relaxed">
                    {topic.shortDesc}
                  </p>

                  <div className="pt-3 mt-1 border-t border-white/10">
                    <button
                      onClick={() => setSelectedTopic(topic)}
                      className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-[10px] font-bold uppercase tracking-widest py-3 px-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
                    >
                      <ImageIcon className="h-4 w-4" />
                      Ver Galería
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <AnimatePresence>
        {selectedTopic && (
          <GalleryModal
            isOpen={!!selectedTopic}
            onClose={() => setSelectedTopic(null)}
            media={getMediaForTopic(selectedTopic.id)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
