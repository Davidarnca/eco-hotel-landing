import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Wind, Shield, Users, Layers, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const HotelSection: React.FC = () => {
  const { rooms, setSelectedBookingTarget } = useApp();
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  const activeRoom = rooms[activeRoomIndex];

  return (
    <section className="py-24 sm:py-32" id="hotel">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Intro */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-secondary uppercase block">
            ARQUITECTURA BIOCLIMÁTICA CONSCIENTE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary">
            El Futuro del Descanso: Bio-Hotel
          </h2>
          <div className="h-0.5 w-16 bg-secondary mx-auto"></div>
        </div>

        {/* Interactive Tabs Menu */}
        <div className="flex justify-center gap-4 mb-12">
          {rooms.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setActiveRoomIndex(index)}
              className={`px-6 py-3 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeRoomIndex === index
                  ? 'bg-primary text-on-primary shadow-sm hover:opacity-90'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Display Wrapper */}
        <div className="relative overflow-hidden rounded-3xl min-h-[550px] shadow-lg border border-outline-variant/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoom.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Cover Photo */}
              <img
                alt={activeRoom.name}
                className="w-full h-full object-cover"
                src={activeRoom.imageUrl}
              />
              <div className="absolute inset-0 bg-primary/45"></div>
            </motion.div>
          </AnimatePresence>

          {/* Overlaid specs container */}
          <div className="relative z-10 p-8 md:p-16 flex flex-col justify-end min-h-[550px] max-w-2xl bg-gradient-to-t from-primary/95 via-primary/50 to-transparent">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-secondary-fixed mb-2 block uppercase">
              BIOCLIMATISMO Y SILENCIO • {activeRoom.sizeSqm}m²
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-white font-bold mb-4">
              {activeRoom.name}
            </h3>
            <p className="font-sans text-sm sm:text-base text-white/90 mb-8 leading-relaxed">
              {activeRoom.description}
            </p>

            {/* Quick Specs badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <Users className="h-4.5 w-4.5 text-secondary-fixed" />
                <span>Capacidad: {activeRoom.capacity} Huéspedes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <Layers className="h-4.5 w-4.5 text-secondary-fixed" />
                <span>Habitación {activeRoom.sizeSqm} m² de área</span>
              </div>
            </div>

            {/* Detailed list dropdown / list layout */}
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between border-t border-white/20 pt-6">
              <div className="text-white">
                <p className="text-[10px] uppercase tracking-widest text-white/60 mb-0.5">Tarifa Base por Noche</p>
                <p className="font-display text-3xl font-bold text-secondary-fixed">
                  ${activeRoom.basePrice} <span className="text-sm font-sans font-normal text-white/70">/noche</span>
                </p>
              </div>

              <button
                onClick={() => setSelectedBookingTarget({ type: 'room', id: activeRoom.id })}
                className="bg-secondary hover:bg-secondary-fixed text-primary px-8 py-4 rounded-lg font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
              >
                Conocer & Reservar
              </button>
            </div>
          </div>
        </div>

        {/* Bioclimatic Details Accordion / Specs */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-low p-8 rounded-2xl border border-outline-variant/15">
          <div>
            <h4 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2.5">
              <Wind className="h-5 w-5 text-secondary animate-pulse" />
              Sistemas Pasivos Bioclimáticos
            </h4>
            <ul className="space-y-2">
              {activeRoom.bioclimaticFeatures.map((feat, i) => (
                <li key={i} className="text-xs sm:text-sm text-on-surface-variant flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2.5">
              <Award className="h-5 w-5 text-secondary" />
              Comodidades Exclusivas
            </h4>
            <ul className="space-y-2">
              {activeRoom.amenities.map((am, i) => (
                <li key={i} className="text-xs sm:text-sm text-on-surface-variant flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>{am}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
