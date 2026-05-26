import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Hexagon, Shield, HandHeart, ChevronDown } from 'lucide-react';
import miradorImg from '../assets/mirador.jpeg';
import colmenasImg from '../assets/colmenas.jpeg';
import interaccionImg from '../assets/interaccion.jpeg';
import proteccionImg from '../assets/proteccion.jpeg';

const topics = [
  {
    id: 'mirador',
    title: 'Mirador',
    icon: Eye,
    shortDesc: 'Observación segura de la vida dentro del panal a través de nuestros ventanales especializados.',
    fullDesc: 'Adéntrate en nuestro mirador de cristal, diseñado para que puedas contemplar de cerca la fascinante "danza de las abejas" y la intrincada organización de la colonia. Es una experiencia inmersiva y 100% segura, ideal para familias y curiosos que desean ver la magia de la reina y sus obreras sin alterar su entorno natural.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/20',
    bgImage: miradorImg
  },
  {
    id: 'colmenas',
    title: 'Colmenas',
    icon: Hexagon,
    shortDesc: 'Explora la arquitectura perfecta donde nace la miel y se desarrolla el ecosistema.',
    fullDesc: 'Descubre cómo funcionan nuestras colmenas. Aprenderás sobre el diseño de las estructuras, la diferencia entre las alzas melarias y la cámara de cría, y cómo las abejas utilizan el propóleo para desinfectar y sellar su hogar. Comprender la colmena es entender una de las sociedades más perfectas de la naturaleza.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/20',
    bgImage: colmenasImg
  },
  {
    id: 'interaccion',
    title: 'Interacción',
    icon: HandHeart,
    shortDesc: 'Acércate de manera ética y consciente a las abejas con la guía de nuestros expertos.',
    fullDesc: 'Siente la vibración del enjambre. Te proporcionaremos equipo de protección profesional y te enseñaremos las técnicas de acercamiento suave. Aprenderás a utilizar el ahumador correctamente, identificar los sonidos de las abejas y realizar una inspección básica, siempre priorizando el bienestar de los polinizadores.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/20',
    bgImage: interaccionImg
  },
  {
    id: 'proteccion',
    title: 'Protección',
    icon: Shield,
    shortDesc: 'Conoce nuestros esfuerzos por preservar los polinizadores y cómo puedes ayudar.',
    fullDesc: 'Las abejas enfrentan serios desafíos debido al cambio climático y los pesticidas. En esta charla interactiva, te mostramos cómo Santuario de Chame es un refugio libre de químicos para ellas. Te enseñaremos qué plantas puedes cultivar en casa y qué acciones tomar para convertirte en un guardián de las abejas en tu propia comunidad.',
    color: 'text-sky-400',
    bg: 'bg-sky-500/20',
    bgImage: proteccionImg
  }
];

export const BeeWatchingSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="avistamiento" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full text-amber-600 font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Hexagon className="w-4 h-4" />
            <span>Nuevas Experiencias</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-6"
          >
            Avistamiento de <span className="text-primary">Abejas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant leading-relaxed"
          >
            Sumérgete en el fascinante mundo de la apicultura. Te invitamos a conocer el corazón de nuestro ecosistema, donde podrás observar, interactuar y aprender sobre la vida de estos increíbles polinizadores en un entorno seguro y respetuoso.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => {
            const isExpanded = expandedId === topic.id;
            const Icon = topic.icon;

            return (
              <motion.div
                key={topic.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, layout: { duration: 0.3 } }}
                onClick={() => toggleExpand(topic.id)}
                className={`group relative rounded-2xl p-6 cursor-pointer border overflow-hidden transition-shadow duration-300 flex flex-col h-full ${isExpanded ? 'border-primary/50 shadow-md' : 'border-outline-variant/30 shadow-sm'}`}
              >
                {/* Background Image with Overlay */}
                <img
                  src={topic.bgImage}
                  alt={topic.title}
                  className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>

                <div className="relative z-10 flex flex-col h-full text-white">
                  <motion.div layout="position" className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full ${topic.bg} ${topic.color} flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/80"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.div>

                  <motion.h3 layout="position" className="text-xl font-bold font-display text-white mb-3">
                    {topic.title}
                  </motion.h3>

                  <motion.p layout="position" className="text-white/90 text-sm leading-relaxed flex-grow font-medium">
                    {topic.shortDesc}
                  </motion.p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/20">
                          <p className="text-white text-sm leading-relaxed font-medium drop-shadow-md">
                            {topic.fullDesc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
