import React from 'react';
import { useApp } from '../context/AppContext';
import { Thermometer, Droplets, Flame, BarChart3, RefreshCw, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const BeekeepingTelemetry: React.FC = () => {
  const { hiveSensors, refreshSensors } = useApp();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-white relative overflow-hidden" id="telemetry">
      {/* Decorative Forest Overlay Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,224,136,0.06),transparent_40%)] pointer-events-none"></div>

      {/* CORRECCIÓN: Contenedor estándar de Tailwind manteniendo el z-index relativo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.2em] text-secondary uppercase block">
              APICULTURA TECNOLÓGICA ECO-INTELIGENTE
            </span>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Telemetría de las Colmenas
            </h2>
            <div className="h-0.5 w-16 bg-secondary"></div>
            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed pt-2">
              Nuestros apiarios están equipados con hardware de monitorización pasivo no invasivo. Medimos temperatura central, humedad relativa y peso del depósito en tiempo real para evaluar el crecimiento floral y resguardar la salud de cada colonia ante las heladas de la montaña.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => refreshSensors()}
              className="bg-secondary hover:bg-secondary-fixed text-primary px-6 py-3.5 rounded-lg font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] shadow-md flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4 animate-spin-slow" />
              Sincronizar Sensores (Supabase DB)
            </button>
          </div>
        </div>

        {/* Informative connection banner */}
        <div className="bg-primary-container/60 border border-on-primary-container/20 rounded-xl p-6 mb-12 flex flex-col md:row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <p className="font-sans text-xs text-white/95">
              <span className="font-bold text-secondary-fixed">Canales Listos:</span> Interfaces mapeadas bajo modelo de datos unificado en <span className="font-mono text-secondary-fixed">src/types.ts</span>. Listas de colecciones de red preparadas para conexión persistente remota.
            </p>
          </div>
          <span className="font-mono text-[10px] bg-primary px-3 py-1.5 rounded text-white/50">
            host: 0.0.0.0 | dev-socket
          </span>
        </div>

        {/* Live Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hiveSensors.map((hive) => (
            <motion.div
              key={hive.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-primary-container/40 p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-lg relative"
            >
              {/* Card Header name and activity scale */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1">
                    {hive.name}
                  </h3>
                  <p className="font-sans text-[10px] text-white/50 uppercase tracking-widest">
                    Último latido: {hive.lastSync}
                  </p>
                </div>

                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest ${
                  hive.activityIndex === 'óptima'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-yellow-500/10 text-yellow-300 border border-yellow-500/20'
                }`}>
                  {hive.activityIndex}
                </span>
              </div>

              {/* Central readout sensors list (T°, Hum, Honey) */}
              <div className="grid grid-cols-3 gap-4">
                {/* Col 1 */}
                <div className="p-4 bg-primary/40 rounded-xl text-center space-y-2">
                  <div className="flex justify-center text-secondary">
                    <Thermometer className="h-4.5 w-4.5" />
                  </div>
                  <p className="text-[10px] uppercase text-white/60">Temp</p>
                  <p className="font-sans text-sm sm:text-base font-bold text-white">{hive.temperature}°C</p>
                </div>

                {/* Humidity Card */}
                <div className="p-4 bg-primary/40 rounded-xl text-center space-y-2">
                  <div className="flex justify-center text-sky-400">
                    <Droplets className="h-4.5 w-4.5" />
                  </div>
                  <p className="text-[10px] uppercase text-white/60">Humedad</p>
                  <p className="font-sans text-sm sm:text-base font-bold text-white">{hive.humidity}%</p>
                </div>

                {/* Honey storage card */}
                <div className="p-4 bg-primary/40 rounded-xl text-center space-y-2">
                  <div className="flex justify-center text-amber-500">
                    <Layers className="h-4.5 w-4.5" />
                  </div>
                  <p className="text-[10px] uppercase text-white/60">Miel Est</p>
                  <p className="font-sans text-sm sm:text-base font-bold text-white">{hive.honeyLevel}kg</p>
                </div>
              </div>

              {/* Footnotes on wellness estimation */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <div className="flex items-center gap-1.5">
                  <Flame className="h-4.5 w-4.5 text-secondary" />
                  <span>Nivel de Cuidado Cohesivo</span>
                </div>
                <span className="font-bold text-white/95">Estable</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};