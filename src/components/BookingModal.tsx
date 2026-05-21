import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Calendar, Users, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BookingModal: React.FC = () => {
  const {
    selectedBookingTarget,
    setSelectedBookingTarget,
    experiences,
    rooms,
    addBooking,
    setBookingsOpen
  } = useApp();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('davidar25@gmail.com'); // Prefill User from runtime credentials
  const [bookingDate, setBookingDate] = useState('');
  const [guestsCount, setGuestsCount] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!selectedBookingTarget) return null;

  const isRoom = selectedBookingTarget.type === 'room';
  const targetId = selectedBookingTarget.id;

  const targetItem = isRoom
    ? rooms.find((r) => r.id === targetId)
    : experiences.find((e) => e.id === targetId);

  if (!targetItem) return null;

  const basePrice = isRoom ? (targetItem as any).basePrice : (targetItem as any).price;
  const capacityMax = isRoom ? (targetItem as any).capacity : (targetItem as any).capacityMax;
  const targetName = isRoom ? (targetItem as any).name : (targetItem as any).title;

  const totalPrice = isRoom 
    ? basePrice 
    : basePrice * guestsCount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) {
      setErrorMessage('Por favor ingresa tu nombre completo');
      return;
    }
    if (!bookingDate) {
      setErrorMessage('Selecciona una fecha válida');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      await addBooking({
        userName,
        userEmail,
        type: selectedBookingTarget.type,
        targetId: selectedBookingTarget.id,
        targetName,
        bookingDate,
        guestsCount,
        totalPrice,
        specialRequests
      });
      setSuccess(true);
    } catch (err) {
      setErrorMessage('Error al realizar la reserva. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setUserName('');
    setBookingDate('');
    setGuestsCount(1);
    setSpecialRequests('');
    setSelectedBookingTarget(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative max-w-xl w-full bg-surface rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 bg-primary text-white flex justify-between items-center shrink-0">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-secondary-fixed mb-0.5">
                {isRoom ? 'RESERVA DE ALOJAMIENTO' : 'RESERVA DE EXPERIENCIA'}
              </p>
              <h3 className="font-display text-xl font-bold leading-tight">{targetName}</h3>
            </div>
            <button
              onClick={handleClose}
              disabled={loading}
              className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-8 flex-grow">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6 flex flex-col items-center justify-center"
              >
                <CheckCircle2 className="h-16 w-16 text-green-600 animate-bounce" />
                <div className="space-y-2">
                  <h4 className="font-display text-2xl font-bold text-primary">¡Reserva Registrada Exitosamente!</h4>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-md">
                    Tu solicitud de reserva para <span className="font-bold text-primary">{targetName}</span> el <span className="font-bold text-primary">{bookingDate}</span> ha sido enviada con estado <span className="underline decoration-secondary decoration-2 font-bold">pendiente</span>.
                  </p>
                </div>
                
                <div className="p-4 bg-primary-container/5 rounded-xl border border-outline-variant/30 w-full text-left space-y-2 font-sans text-xs">
                  <p className="text-on-surface-variant"><span className="font-bold">Huésped:</span> {userName}</p>
                  <p className="text-on-surface-variant"><span className="font-bold">Contacto:</span> {userEmail}</p>
                  <p className="text-on-surface-variant"><span className="font-bold">Personas:</span> {guestsCount}</p>
                  <p className="text-on-surface-variant"><span className="font-bold">Monto Total Estimado:</span> <span className="text-secondary font-bold text-sm">${totalPrice} USD</span></p>
                </div>

                <div className="pt-4 flex gap-4 w-full justify-center">
                  <button
                    onClick={() => {
                      handleClose();
                      setBookingsOpen(true);
                    }}
                    className="bg-primary text-on-primary text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-lg font-sans shadow-sm"
                  >
                    Ver Mis Reservas
                  </button>
                  <button
                    onClick={handleClose}
                    className="border border-outline text-primary text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-lg font-sans"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                {/* Form fields */}
                <div className="grid grid-cols-1 gap-5">
                  
                  {/* Name field */}
                  <div>
                    <label className="text-[11px] font-bold tracking-wider text-secondary uppercase block mb-1">Nombre Completo</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 text-xs sm:text-sm text-primary focus:outline-none focus:border-secondary"
                      placeholder="Ej. Juan Pérez"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>

                  {/* Contact Email prefilled */}
                  <div>
                    <label className="text-[11px] font-bold tracking-wider text-secondary uppercase block mb-1">Correo Electrónico</label>
                    <input
                      disabled
                      type="email"
                      className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-xs sm:text-sm text-primary/60 cursor-not-allowed"
                      value={userEmail}
                    />                    
                  </div>

                  {/* Grid Date & Guests count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold tracking-wider text-secondary uppercase block mb-1 flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        Fecha de Reserva
                      </label>
                      <input
                        required
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 text-xs sm:text-sm text-primary focus:outline-none focus:border-secondary"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold tracking-wider text-secondary uppercase block mb-1 flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" />
                        Nro. Personas / Huéspedes
                      </label>
                      <select
                        className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 text-xs sm:text-sm text-primary focus:outline-none focus:border-secondary"
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                      >
                        {Array.from({ length: capacityMax }, (_, idx) => idx + 1).map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'Persona' : 'Personas'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special requests comments */}
                  <div>
                    <label className="text-[11px] font-bold tracking-wider text-secondary uppercase block mb-1 flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5" />
                      Indicación o Requerimiento Especial
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 text-xs sm:text-sm text-primary focus:outline-none focus:border-secondary placeholder:text-on-surface-variant/40"
                      placeholder="Ej. Restricciones dietarias, alergias a polen/abeja, camas adicionales, etc."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                    />
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-xs font-semibold text-red-500 bg-red-400/10 p-3 rounded-lg border border-red-500/20">
                    {errorMessage}
                  </p>
                )}

                {/* Submit total calculator */}
                <div className="pt-6 border-t border-outline-variant/10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                  <div className="text-primary">
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/50">Monto Final Estimado</p>
                    <p className="font-display text-2xl font-bold text-secondary">
                      ${totalPrice} USD
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary hover:bg-primary-container text-on-primary text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-lg shadow-sm transition-all text-center flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Procesando...
                      </>
                    ) : (
                      'Confirmar Reserva'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
