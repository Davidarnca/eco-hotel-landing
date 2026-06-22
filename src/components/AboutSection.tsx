import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Users, HeartHandshake, TreePine } from 'lucide-react';
import chameImg from '../assets/chame.jpeg';
import polenImg from '../assets/polen.jpeg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-[#FAF8F5] overflow-hidden">
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
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-on-surface mb-6 leading-tight">
              ¿Qué es<span className="text-primary">?</span>
            </h2>
            <div className="bg-[#efb810] text-primary p-6 sm:p-8 rounded-[2rem] shadow-xl text-justify font-sans text-base sm:text-lg leading-relaxed space-y-4 mb-8">
              <p>
                Es una estrategia de conservación a la biodiversidad, que promueve la acción colectiva y comunitaria para la protección de los hábitats, fortaleciendo así la salud de los ecosistemas en función de la conservación de los polinizadores urbanos como las <strong>“Abejas Solitarias”</strong> que generalmente son de menor tamaño comparadas con las abejas melíferas y con una naturaleza menos agresiva las cuales desempeñan un papel fundamental en la polinización, proceso que se ha visto afectada por la intervención humana en los entornos donde habitan y anidan en la ciudad como lo son jardines, terrazas, parques, zonas comunes entre otras.
              </p>
              <p>
                En este contexto, se propone la implementación de las <strong>“Zonas Seguras de Vida”</strong> <strong>Zonas V</strong>, modelo de conservación diseñado para proveer alimento, hidratación y un lugar seguro de anidación en un <strong>“BioHotel”</strong> que permite la recuperación, regeneración y conservación de especies vegetales contribuyendo a mejorar las condiciones de vida y el hábitat de estos importantes polinizadoras en el entorno urbano.
              </p>
              <p>
                De esta manera vemos como la protección de las abejas polinizadoras representa una oportunidad para fortalecer la relación entre la ciudadanía y la naturaleza, generando espacios para la educación ambiental, la toma de conciencia, la interacción comunitaria, la ciencia ciudadana, la observación y la investigación, en beneficio tanto de las abejas como de la sostenibilidad ambiental de la ciudad.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <TreePine className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-on-surface text-xl md:text-2xl">Ecoturismo</h3>
                <p className="text-sm text-on-surface-variant">Bajo impacto ambiental e inmersión total en la naturaleza.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-on-surface text-xl md:text-2xl">Regeneración</h3>
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
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-on-surface mb-6 leading-tight">
              ¿Quiénes <span className="text-secondary">Somos?</span>
            </h2>
            <div className="bg-[#efb810] text-primary p-6 sm:p-8 rounded-[2rem] shadow-xl text-justify font-sans text-base sm:text-lg leading-relaxed space-y-4 mb-8">
              <p>
                Somos un grupo interdisciplinario de profesionales que junto con la corporación <strong>Uramba TeVe</strong>, hemos juntado acciones comprometidas con la protección del medio ambiente y la conservación de la biodiversidad, promoviendo iniciativas orientadas al fortalecimiento de los ecosistemas y al bienestar de las comunidades a través de prácticas sostenibles y procesos de educación ambiental como la propuesta de <strong>Panales de Vida</strong>, que surge en el <strong>Santuario de Chame</strong>, una finca ubicada en la zona rural de Tuta, Boyacá, resultado del trabajo y la visión de <strong>Jaime Rodríguez</strong> padre (Q.E.P.D.) y <strong>Jaime Rodríguez</strong> hijo quienes hace más de quince años emprendieron el desafío de recuperar un territorio caracterizado por suelos arenosos, francos arcillosos sin vegetación y limitadas fuentes de agua.
              </p>
              <p>
                Gracias a un proceso continuo de restauración ecológica basado en la siembra de árboles, la recuperación de nacederos y la protección de la biodiversidad, hoy el predio alberga más de 3.000 árboles nativos, frutales y especies florales como saucos, arrayanes, mortiños, chicalás entre muchos otros que hacen parte del sendero agroecológico.
              </p>
              <p>
                También se implementó estrategias para la conservación y aprovechamiento sostenible del agua, a través de las cosechas de aguas desde la conservación de sus nacederos, permitiendo la captación de aguas lluvias, y recolección de aguas puras ricas en minerales desde las partes altas de la finca para su canalización y almacenamiento en reservorios que permiten integrar el preciado liquido al proceso de riego de los cultivos de árboles frutales de ciruela, durazno y todos los demás beneficiando el equilibrio ecosistematico del territorio.
              </p>
              <p>
                Desde esta experiencia de restauración y conservación constante, nace <strong>Panales de Vida</strong>, en la que te invitamos a conocer, disfrutar, proteger y vivir la experiencia a través de nuestras acciones orientadas a la convivencia, al estudio y la investigación de hábitats locales con los <strong>“BioHoteles”</strong> creando programas de educación ambiental que buscan fortalecer la participación comunitaria en la construcción de entornos más sostenibles, biodiversos y resilientes.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl shadow-sm border border-outline-variant/30">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-lg md:text-xl">Compromiso Local</h4>
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
