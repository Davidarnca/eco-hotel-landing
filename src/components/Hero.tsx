import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/finca.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Golden Organic Overlay */}
      <div className="absolute inset-0 z-0 scale-105 select-none pointer-events-none">
        <img
          alt="Bosque místico con niebla andina"
          className="w-full h-full object-cover object-center filter saturate-75 brightness-75 transition-transform duration-1000"
          src={heroBg}
        />
        {/* Soft forest linear gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/45 to-primary/80"></div>
      </div>

      {/* Floating Animated Golden Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary-fixed/5 rounded-full blur-3xl z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-secondary-fixed/5 rounded-full blur-3xl z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-margin-mobile max-w-4xl mx-auto flex flex-col items-center">
        {/* Animated Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-secondary-fixed bg-secondary-fixed/10 px-4 py-2 rounded-full border border-secondary-fixed-dim/20 mb-6 flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 bg-secondary-fixed rounded-full animate-ping"></span>
          REFINED ECOLOGY & APICULTURA SELECTA
        </motion.span>

        {/* Dynamic Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-5xl md:text-[68px] leading-[1.1] text-white font-bold tracking-tight mb-6 max-w-3xl"
        >
          El susurro de las abejas, el respiro de la montaña
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="font-sans text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed mb-10 max-w-2xl"
        >
          Apicultura de conservación, ecoturismo y hospedaje bioclimático consciente en el corazón latiente del bosque.
        </motion.p>

        {/* Dual Actions with entrance delay and organic glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <a
            href="#experiences"
            className="bg-secondary hover:bg-secondary-fixed text-primary px-8 py-4 rounded-lg font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-secondary/20 block text-center"
          >
            Explorar la Finca
          </a>
          <a
            href="#honey"
            className="border border-secondary/60 hover:border-secondary text-secondary-fixed/90 hover:text-white px-8 py-4 rounded-lg font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white/5 block text-center"
          >
            Comprar Miel
          </a>
        </motion.div>
      </div>

      {/* Animated scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 0.8, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
      >
        <a href="#honey" className="flex flex-col items-center gap-1 group focus:outline-none">
          <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
            Desplazar
          </span>
          <ArrowDown className="h-5 w-5 group-hover:text-white transition-colors" />
        </a>
      </motion.div>
    </section>
  );
};