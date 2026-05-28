import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Hexagon, Shield, HandHeart, ArrowRight, User, Image as ImageIcon } from 'lucide-react';
import miradorImg from '../assets/mirador.jpeg';
import interaccionImg from '../assets/interaccion.jpeg';
import interaccion1Img from '../assets/interaccion_1.jpeg';
import interaccion3Img from '../assets/vista.jpeg';
import interaccion2Img from '../assets/polen.jpeg';
import trabajadoresImg from '../assets/trabajadores.mp4';
import colmenasImg from '../assets/colmenas.jpeg';
import proteccionImg from '../assets/proteccion2.jpeg';
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

// Función para obtener el contenido multimedia específico de cada topic
const getMediaForTopic = (topicId: string): MediaItem[] => {
  switch (topicId) {
    case 'mirador':
      return [
        { type: 'image', src: miradorImg, caption: 'Vista panorámica del mirador' },
        { type: 'video', src: trabajadoresImg, caption: 'Abejas en acción desde el mirador' },
        // Más imágenes específicas del mirador...
      ];
    case 'colmenas':
      return [
        { type: 'image', src: miradorImg, caption: 'Vista panorámica del mirador' },
        { type: 'video', src: trabajadoresImg, caption: 'Abejas en acción desde el mirador' },
        // Más imágenes específicas del mirador....
      ];
    case 'interaccion':
      return [
        { type: 'image', src: interaccion2Img, caption: 'Abeja trabajando' },
        { type: 'image', src: interaccion1Img, caption: 'Patos en el camino' },
        { type: 'image', src: interaccion3Img, caption: 'Una buena vista' },
        // Más imágenes de interacción...
      ];
    case 'proteccion':
      return [
        { type: 'image', src: miradorImg, caption: 'Vista panorámica del mirador' },
        { type: 'video', src: trabajadoresImg, caption: 'Abejas en acción desde el mirador' },
        // Más imágenes específicas del mirador...
      ];
    default:
      return [];
  }
};

export const BeeWatchingSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<typeof topics[0] | null>(null);

  return (
    <section id="avistamiento" className="py-24 sm:py-32 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-secondary uppercase block">
            NUEVAS EXPERIENCIAS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary">
            Avistamiento de Abejas
          </h2>
          <div className="h-0.5 w-16 bg-secondary mx-auto"></div>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto pt-4">
            Sumérgete en el fascinante mundo de la apicultura. Te invitamos a conocer el corazón de nuestro ecosistema, donde podrás observar, interactuar y aprender sobre la vida de estos increíbles polinizadores en un entorno seguro y respetuoso.
          </p>
        </div>

        {/* UX/UI Grid: 4 columns to keep them inline without overflowing the page.
            We use a portrait aspect ratio for the images so they feel tall, elegant, and substantial instead of 'narrow' */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <motion.div
                key={topic.id}
                layout
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden border border-outline-variant/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                {/* Card Image area - Portrait aspect ratio so 4 columns don't feel cramped */}
                <motion.div layout="position" className="relative overflow-hidden aspect-[4/3]">
                  <img
                    alt={topic.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={topic.bgImage}
                  />

                  {/* Dark Green Category Badge (Matching the image) */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[#0a2312] text-white font-sans text-[10px] font-bold tracking-wider uppercase px-4 py-2 rounded-full shadow-lg">
                    <Icon className="h-4 w-4" />
                    {topic.category}
                  </span>

                  {/* Subtle gradient overlay to make image feel more premium at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                {/* Card content area */}
                <div className="p-8 flex flex-col flex-grow justify-between gap-6">

                  <motion.div layout="position" className="space-y-3">
                    {/* Tags row: Max People only */}
                    <div className="flex justify-end items-center mb-1">
                      <span className="flex items-center gap-1.5 text-[11px] font-medium text-on-surface-variant">
                        <User className="h-3.5 w-3.5" />
                        Máx: {topic.maxPeople}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold text-primary leading-tight">
                      {topic.title}
                    </h3>

                    {/* Duration */}
                   {/* <p className="font-sans text-[10px] font-bold text-secondary uppercase tracking-widest">
                      {topic.duration}
                    </p>*/}

                    {/* Short Description */}
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                      {topic.shortDesc}
                    </p>
                  </motion.div>

                  {/* Prominent Action Button to Open Modal */}
                  <motion.div
                    layout="position"
                    className="mt-auto pt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    >
                    <button
                        onClick={() => setSelectedTopic(topic)}
                        className="w-full bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-white text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                    >
                        <ImageIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                        <span>Ver Galería</span>
                        <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-1" />
                    </button>
                </motion.div>

                </div>
              </motion.div>
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
