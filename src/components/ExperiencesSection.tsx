import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, Tent, Award, ArrowRight, User } from 'lucide-react';
import { motion } from 'motion/react';

export const ExperiencesSection: React.FC = () => {
  const { experiences, setSelectedBookingTarget } = useApp();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hiking':
        return <Compass className="h-6 w-6" />;
      case 'camping':
        return <Tent className="h-6 w-6" />;
      case 'apiculture':
        return <Award className="h-6 w-6" />;
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
    <section className="py-24 sm:py-32 bg-surface-container-low" id="experiences">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-20 space-y-4">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-secondary uppercase block">
            ECOTURISMO INTERACTIVO DE BAJO IMPACTO
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary">
            Experiencias de Conexión
          </h2>
          <div className="h-0.5 w-16 bg-secondary mx-auto"></div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden aspect-video lg:aspect-[4/3]">
                <img
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={exp.imageUrl}
                />
                
                {/* Category Badge overlay */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-primary/95 text-white font-sans text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-md">
                  {getCategoryIcon(exp.category)}
                  {exp.category === 'hiking' ? 'Senderismo' : exp.category === 'camping' ? 'Glamping' : 'Apicultura'}
                </span>

                {/* Price tag */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-primary px-3 py-1.5 rounded-lg border border-outline-variant/30 text-sm font-bold">
                  Desde <span className="text-secondary text-lg">${exp.price}</span>/pax
                </div>
              </div>

              {/* Card content description */}
              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-2">
                    <span className={`inline-block text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border ${difficultyColors[exp.difficulty]}`}>
                      {exp.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-on-surface-variant/70">
                      <User className="h-3.5 w-3.5" />
                      Máx: {exp.capacityMax} personas
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-primary leading-tight">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-[11px] font-semibold text-secondary uppercase tracking-wider">
                    {exp.duration}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                  {/* Custom book trigger */}
                  <button
                    onClick={() => setSelectedBookingTarget({ type: 'experience', id: exp.id })}
                    className="font-sans text-[11px] font-bold text-secondary uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300 pointer-events-auto"
                  >
                    RESERVAR EXPERIENCIA <ArrowRight className="h-4 w-4 text-secondary" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
