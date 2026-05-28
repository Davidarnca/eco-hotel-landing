import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Users, HeartHandshake, TreePine } from 'lucide-react';
import chameImg from '../assets/chame.jpeg';
import polenImg from '../assets/polen.jpeg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface-variant overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 md:px-12 lg:px-20">

        {/* ¿Qué es? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] shadow-2xl"
          >
            <img
              src={chameImg}
              alt="Paisaje de la montaña"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-6 w-fit">
              <Leaf className="w-4 h-4" />
              <span>Nuestra Esencia</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-6 leading-tight">
              ¿Qué es <span className="text-primary">Santuario de Chame?</span>
            </h2>
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
              Santuario de Chame es mucho más que un bio-hotel; es un ecosistema vivo dedicado al ecoturismo regenerativo y la apicultura de conservación. Nacimos con la visión de proteger el bosque alto andino mientras ofrecemos experiencias transformadoras.
            </p>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Aquí la arquitectura se adapta a la montaña y el tiempo lo marcan las abejas. Ofrecemos refugio tanto para polinizadores esenciales como para aquellos que buscan escapar del ruido urbano.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <TreePine className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-on-surface text-lg">Ecoturismo</h3>
                <p className="text-sm text-on-surface-variant">Bajo impacto ambiental e inmersión total en la naturaleza.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-on-surface text-lg">Regeneración</h3>
                <p className="text-sm text-on-surface-variant">Conservación activa de abejas y restauración de bosques.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ¿Quiénes somos? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-bold text-xs uppercase tracking-widest mb-6 w-fit">
              <Users className="w-4 h-4" />
              <span>Nuestra Familia</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-6 leading-tight">
              ¿Quiénes <span className="text-secondary">Somos?</span>
            </h2>
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
              Somos una familia de guardianes ambientales, biólogos, apicultores y habitantes locales de la región. Nos une el respeto profundo por la tierra y el conocimiento ancestral del páramo y el bosque nuboso.
            </p>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Nuestro equipo trabaja de la mano con las comunidades vecinas, promoviendo el comercio justo, la educación ambiental y creando un modelo de economía circular sostenible. Creemos que la mejor forma de proteger un ecosistema es enseñando a amarlo.
            </p>

            <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl shadow-sm border border-outline-variant/30">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Compromiso Local</h4>
                <p className="text-sm text-on-surface-variant">El 100% de nuestro equipo proviene de las comunidades aledañas al santuario.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] shadow-2xl"
          >
            <img
              src={polenImg}
              alt="Equipo de Santuario"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent mix-blend-multiply"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
