import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Send, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { subscribeToNewsletter } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Por favor ingresa un correo electrónico válido');
      return;
    }
    
    setError('');
    setLoading(true);
    
    try {
      const success = await subscribeToNewsletter(email);
      if (success) {
        setSubscribed(true);
        setEmail('');
      } else {
        setError('Este correo ya está registrado en nuestra base de datos');
      }
    } catch (err) {
      setError('Ocurrió un error al procesar tu suscripción');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-primary text-on-primary w-full py-20 relative overflow-hidden border-t border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Brand Presentation */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <svg
                className="h-8 w-8 text-secondary-fixed"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 15C33.4315 15 20 28.4315 20 45C20 63.5 50 85 50 85C50 85 80 63.5 80 45C80 28.4315 66.5685 15 50 15Z"
                  fill="currentColor"
                />
                <path
                  d="M50 28C40.6112 28 33 35.6112 33 45C33 55.5 50 67.5 50 67.5C50 67.5 67 55.5 67 45C67 35.6112 59.3888 28 50 28ZM50 49C47.2386 49 45 46.7614 45 44C45 41.2386 47.2386 39 50 39C52.7614 39 55 41.2386 55 44C55 46.7614 52.7614 49 50 49Z"
                  fill="#ffe088"
                />
              </svg>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Finca Terra
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
              Cultivando paz a través de una ecología refinada. Nuestro manifiesto se escribe a diario en el suelo que protegemos, en las colmenas que cuidamos y en el silencio de nuestra montaña sagrada.
            </p>
          </div>

          {/* Quick Links Menu */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="font-sans text-[11px] font-bold tracking-widest text-[#ffe088] uppercase">Secciones</p>
              <nav className="flex flex-col gap-3">
                <a className="text-xs sm:text-sm text-white/70 hover:text-[#ffe088] transition-colors" href="#">Inicio</a>
                <a className="text-xs sm:text-sm text-white/70 hover:text-[#ffe088] transition-colors" href="#honey">Miel Premium</a>
                <a className="text-xs sm:text-sm text-white/70 hover:text-[#ffe088] transition-colors" href="#experiences">Experiencias</a>
              </nav>
            </div>
            
            <div className="space-y-4">
              <p className="font-sans text-[11px] font-bold tracking-widest text-[#ffe088] uppercase">Explorar</p>
              <nav className="flex flex-col gap-3">
                <a className="text-xs sm:text-sm text-white/70 hover:text-[#ffe088] transition-colors" href="#hotel">Bio-Hotel</a>
                <a className="text-xs sm:text-sm text-white/70 hover:text-[#ffe088] transition-colors" href="#telemetry">Telemetría</a>
                <a className="text-xs sm:text-sm text-white/70 hover:text-[#ffe088] transition-colors" href="#">Contacto</a>
              </nav>
            </div>
          </div>

          {/* Interactive Newsletter Form */}
          <div className="space-y-6">
            <p className="font-sans text-[11px] font-bold tracking-widest text-[#ffe088] uppercase">SUSCRIPCIÓN CONSCIENTE</p>
            
            {subscribed ? (
              <div className="bg-primary-container p-4 rounded-xl border border-secondary-fixed/20 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-secondary-fixed shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-xs font-bold text-white">Suscripción Registrada</p>
                  <p className="font-sans text-[11px] text-white/70 mt-1">Gracias por unirte a nuestro boletín de quietud andina y conservación.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative border-b border-white/20 pb-2">
                  <input
                    class="w-full bg-transparent text-sm text-white py-1 focus:outline-none placeholder:text-white/40 font-sans"
                    placeholder="Tu correo electrónico"
                    type="email"
                    value={email}
                    disabled={loading}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-secondary-fixed hover:text-white transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                {error && <p className="font-sans text-[11px] text-red-400">{error}</p>}
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">Un boletín mensual de apicultura y ecología.</p>
              </form>
            )}
          </div>
        </div>

        {/* Footnotes copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p className="font-sans text-center md:text-left leading-relaxed">
            © 2026 Finca Terra. Todos los derechos reservados.
            <br />
            Cultivando paz a través de una ecología refinada.
          </p>
          <div className="flex gap-8 font-sans text-[11px] tracking-wider uppercase font-semibold text-white/55">
            <a href="#" className="hover:text-white transition-colors">Normatividad Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Conservación</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
