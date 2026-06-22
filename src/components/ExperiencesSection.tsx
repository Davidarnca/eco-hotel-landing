import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Compass, Tent, Award, ArrowRight, User, Image as ImageIcon, Home, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryModal, MediaItem } from './GalleryModal';

export const ExperiencesSection: React.FC = () => {
  const { experiences, setSelectedBookingTarget } = useApp();
  const [activeGalleryMedia, setActiveGalleryMedia] = useState<MediaItem[] | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'senderismo':
        return <Compass className="h-6 w-6" />;
      case 'camping':
        return <Tent className="h-6 w-6" />;
      case 'alojamiento':
        return <Home className="h-6 w-6" />;
      case 'observatorio':
        return <Eye className="h-6 w-6" />;
      default:
        return <Compass className="h-6 w-6" />;
    }
  };

  const difficultyColors = {
    fácil: 'text-green-700 bg-green-500/10 border-green-500/20',
    moderado: 'text-amber-700 bg-amber-500/10 border-amber-500/20',
    difícil: 'text-red-700 bg-red-500/10 border-red-500/20'
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#FAF8F5]" id="experiencias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <span className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.2em] text-secondary uppercase block">
            ECOTURISMO INTERACTIVO DE BAJO IMPACTO
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary">
            Vive la Experiencia
          </h2>
          <div className="h-0.5 w-16 bg-secondary mx-auto"></div>
        </div>

        {/* Descriptive Text Card */}
        <div className="bg-[#efb810] text-primary p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-justify font-sans text-base sm:text-lg leading-relaxed space-y-6 max-w-4xl mx-auto mb-16 lg:mb-24">
          <p>
            En el “<strong>Santuario de Chame</strong>” podrás disfrutar de una estadía inolvidable en medio de un refugio vivo donde la conservación ambiental se encuentra con la tradición campesina. Nuestro espacio, comprometido al 100 % con el cuidado de la biodiversidad, te invita a desconectarte de la rutina y reconectarte con la naturaleza.
          </p>
          <p>
            Podrás pernoctar en nuestra acogedora <strong>Casa Rural</strong> o vivir la experiencia del <strong>Camping</strong> bajo un cielo lleno de estrellas y la comodidad de baño y cocina ubicado en el <strong>Mirador</strong> a lo alto de la colina. Cualquiera que sea tu elección, disfrutarás de un entorno natural privilegiado, rodeado de árboles frutales, paisajes rurales y una atmósfera de tranquilidad que inspira descanso y bienestar.
          </p>
          <p>
            Recorre de manera libre o guiada nuestra finca y sumérgete en el fascinante mundo de las abejas. Tendrás la oportunidad de observar los <strong>Hoteles de Abejas</strong> “<strong>BioHoteles</strong>” además de una colmena de forma segura y directa “<strong>Observatorio de Abejas</strong>”, descubriendo la importancia de estos extraordinarios polinizadores, verdaderas guardianas de la vida y del equilibrio de los ecosistemas.
          </p>
          <p>
            La experiencia incluye un recorrido por nuestro “<strong>Sendero Agroecológico</strong>”, un espacio diseñado para despertar todos tus sentidos. Entre árboles, matorrales, lagos, cultivos y hoteles de abejas, podrás caminar, observar, descubrir, respirar aire puro, percibir los aromas del campo y conectarte con las distintas especies que habitan este territorio.
          </p>
          <p>
            Además, disfrutarás de un recorrido temático guiado donde conocerás los procesos de transformación y conservación que desarrollamos en el santuario como recuperación de suelos, protección de fuentes hídricas, reforestación, cultivos sostenibles y refugios para polinizadores.
          </p>
          <p>
            Para complementar tu estadía, te invitamos a degustar un vino artesanal de la casa elaborado a partir de durazno o ciruela, o disfrutar de una refrescante sangría preparada con los frutos de nuestra finca. Al amanecer, despertarás con el canto de las aves y el aroma de la hierba fresca, recordándote que aquí la naturaleza es la verdadera protagonista.
          </p>
          <p>
            Reserva tu cupo y se parte del cambio consciente, <strong>Vive la Experiencia</strong>.
          </p>
          <p className="text-center sm:text-left mt-6 pt-4 border-t border-primary/10">
            <strong>Casa Rural por noche</strong> $$$$<br />
            <strong>Camping</strong> $$$$
          </p>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
          {experiences.map((exp, index) => {
            const bentoClasses = [
              'md:col-span-2 md:row-span-2 h-[450px] md:h-auto',
              'md:col-span-1 h-[300px] md:h-auto',
              'md:col-span-1 h-[300px] md:h-auto',
              'md:col-span-2 h-[300px] md:h-auto'
            ];
            const gridClass = bentoClasses[index] || 'md:col-span-1';

            return (
            <motion.div
              key={exp.id}
              whileHover={{ scale: 0.99 }}
              className={`relative overflow-hidden rounded-2xl group flex flex-col justify-end border border-outline-variant/15 shadow-md hover:shadow-xl transition-all duration-300 ${gridClass}`}
            >
              {/* Background Image */}
              <img
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 z-0"
                src={exp.imageUrl}
              />
              
              {/* Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 z-10 opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

              {/* Top Badges */}
              <div className="absolute top-5 left-5 z-20 flex gap-2">
                <span className="inline-flex items-center gap-1.5 bg-white/20 text-white font-sans text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-sm">
                  {getCategoryIcon(exp.category)}
                  {exp.category}
                </span>
              </div>

              {/* Content area (Bottom) */}
              <div className="relative z-20 p-6 md:p-8 flex flex-col gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                
                <div>
                  <h3 className="font-display text-xl md:text-3xl font-bold text-white leading-tight mb-2 drop-shadow-md">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-white/90">
                    <span className="font-sans text-[11px] font-bold uppercase tracking-widest">
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm">
                      <User className="h-3.5 w-3.5" />
                      Máx: {exp.capacityMax}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed line-clamp-2 md:line-clamp-3">
                  {exp.description}
                </p>

                {/* Actions */}
                <div className="pt-5 mt-2 border-t border-white/20">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
                    {/* Ver Mas Button (Gallery) */}
                    <button
                      onClick={() => setActiveGalleryMedia(exp.gallery || [])}
                      className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-[10px] md:text-[11px] font-bold uppercase tracking-widest py-3 px-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
                    >
                      <ImageIcon className="h-4 w-4" />
                      Galería
                    </button>

                    {/* Custom book trigger */}
                    <button
                      onClick={() => setSelectedBookingTarget({ type: 'experience', id: exp.id })}
                      className="w-full bg-secondary hover:bg-secondary-fixed text-primary text-[10px] md:text-[11px] font-bold uppercase tracking-widest py-3 px-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      RESERVAR <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeGalleryMedia && (
          <GalleryModal
            isOpen={!!activeGalleryMedia}
            onClose={() => setActiveGalleryMedia(null)}
            media={activeGalleryMedia}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
