import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Calendar, User, Clock, Check, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export const BookingsDrawer: React.FC = () => {
  const { bookings, bookingsOpen, setBookingsOpen } = useApp();

  if (!bookingsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-primary/40 backdrop-blur-xs">
      <div className="absolute inset-0 cursor-zoom-out" onClick={() => setBookingsOpen(false)}></div>
      
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative h-full max-w-md w-full bg-surface shadow-2xl border-l border-outline-variant/30 flex flex-col justify-between z-10"
      >
        {/* Header */}
        <div className="p-6 bg-primary text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-secondary" />
            <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">Mis Reservas</h3>
          </div>
          <button onClick={() => setBookingsOpen(false)} className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* List index */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          <div className="p-4 bg-secondary-fixed/10 border border-secondary-fixed/20 rounded-lg text-[11px] font-sans text-on-secondary-container leading-relaxed">
            Las reservas enviadas desde esta sesión son añadidas inmediatamente al registro local simulando la transacción de escritura de Base de Datos para <span className="font-semibold text-primary">davidar25@gmail.com</span>.
          </div>

          {bookings.length === 0 ? (
            <div className="text-center py-20 text-on-surface-variant/50 space-y-3 font-sans flex flex-col items-center">
              <Calendar className="h-10 w-10 text-[#c3c8c1]" />
              <p className="text-sm font-semibold uppercase tracking-wider">No tienes reservas activas</p>
              <a
                href="#experiences"
                onClick={() => setBookingsOpen(false)}
                className="text-primary hover:text-secondary text-xs uppercase tracking-widest font-bold underline"
              >
                Hacer mi primera Reserva
              </a>
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-6 bg-white rounded-xl border border-outline-variant/15 shadow-sm font-sans space-y-4 relative overflow-hidden"
              >
                {/* Visual Status Ribbons */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-on-surface-variant/50 font-bold block mb-1">
                      {booking.type === 'room' ? 'Hospedaje Bio-Hotel' : 'Guía de Ecoturismo'}
                    </span>
                    <h4 className="text-base font-bold text-primary leading-tight">{booking.targetName}</h4>
                  </div>
                  
                  {/* Status pills */}
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    booking.status === 'confirmado'
                      ? 'bg-green-500/10 text-green-700 border border-green-500/10'
                      : 'bg-amber-500/10 text-amber-700 border border-amber-500/10 animate-pulse'
                  }`}>
                    {booking.status === 'confirmado' ? (
                      <>
                        <Check className="h-3 w-3" />
                        Confirmado
                      </>
                    ) : (
                      <>
                        <Clock className="h-3 w-3" />
                        Pendiente
                      </>
                    )}
                  </span>
                </div>

                <div className="h-px bg-outline-variant/10"></div>

                {/* Date / Travelers detail grid */}
                <div className="grid grid-cols-2 gap-2 text-xs text-on-surface-variant/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-secondary" />
                    <span>Fecha: <span className="font-semibold text-primary">{booking.bookingDate}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-3.5 w-3.5 text-secondary" />
                    <span>Huéspedes: <span className="font-semibold text-primary">{booking.guestsCount}</span></span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs">
                  <div className="text-on-surface-variant/40 text-[10px] uppercase font-mono">
                    ID: {booking.id.substring(0, 12)}...
                  </div>
                  <p className="font-display font-medium text-bold text-primary">
                    Total: <span className="text-secondary font-bold">${booking.totalPrice} USD</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-white border-t border-outline-variant/30 shrink-0 font-sans text-center">
          <button
            onClick={() => setBookingsOpen(false)}
            className="w-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold uppercase tracking-widest py-4.5 rounded-lg"
          >
            Cerrar Reservas
          </button>
        </div>
      </motion.div>
    </div>
  );
};
