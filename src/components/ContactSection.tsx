import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 lg:py-24 bg-[#FAF8F5] overflow-hidden relative">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-variant/30 rounded-l-[100px] -z-10 hidden lg:block"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-6"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Hablemos</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-on-surface mb-6"
          >
            ¿Listo para tu <span className="text-primary">escape a la naturaleza?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-on-surface-variant"
          >
            Escríbenos para planificar tu visita, reservar experiencias o preguntar sobre nuestros productos de miel.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Información de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-8 bg-surface-variant p-8 lg:p-12 rounded-3xl shadow-sm border border-outline-variant/20"
          >
            <h3 className="text-xl md:text-3xl font-bold font-display text-on-surface mb-2">Información de Contacto</h3>
            <p className="text-on-surface-variant mb-4">Nuestro equipo de recepción y atención te responderá lo más pronto posible.</p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg md:text-xl">Ubicación</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Vereda Alta del Páramo, Km 14 Vía al Bosque Nuboso, Colombia.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg md:text-xl">Teléfono / WhatsApp</h4>
                  <p className="text-on-surface-variant text-sm mt-1">+57 300 000 0000</p>
                  <p className="text-on-surface-variant text-sm">Lun - Dom, 8:00am - 6:00pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg md:text-xl">Correo Electrónico</h4>
                  <p className="text-on-surface-variant text-sm mt-1">reservas@santuariodechame.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-surface p-8 lg:p-12 rounded-3xl shadow-xl border border-outline-variant/10"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-on-surface">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Tu nombre" 
                    className="w-full px-4 py-3 rounded-xl bg-surface-variant/50 border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-on-surface-variant/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-on-surface">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="tu@correo.com" 
                    className="w-full px-4 py-3 rounded-xl bg-surface-variant/50 border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-on-surface-variant/50"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold text-on-surface">Asunto</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl bg-surface-variant/50 border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface"
                >
                  <option value="">Selecciona un motivo...</option>
                  <option value="reserva">Reserva de Hospedaje</option>
                  <option value="experiencia">Reserva de Experiencias</option>
                  <option value="miel">Compra de Productos (Miel)</option>
                  <option value="otro">Otras consultas</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-on-surface">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="¿En qué te podemos ayudar?" 
                  className="w-full px-4 py-3 rounded-xl bg-surface-variant/50 border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-on-surface-variant/50"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="mt-2 bg-primary hover:bg-primary-container text-on-primary font-bold tracking-wider uppercase py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto md:px-8 self-start"
              >
                <span>Enviar Mensaje</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
