import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Calendar, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoClaro from '../assets/Logo2._claroRM.png';
import logoOscuro from '../assets/Logo2RM.png';

export const Navbar: React.FC = () => {
  const { cart, bookings, setCartOpen, setBookingsOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const bookingsCount = bookings.length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Avistamiento', href: '#avistamiento' },
    { label: 'Miel', href: '#miel' },
    { label: 'Bio-Hotel', href: '#hotel' },
    { label: 'Vive la Experiencia', href: '#experiencias' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-45 transition-all duration-500 flex items-center ${
          scrolled
            ? 'py-2 bg-surface/90 shadow-sm border-b border-outline-variant/15 backdrop-blur-md'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-4 group focus:outline-none pl-2 md:pl-0 md:-ml-8 lg:-ml-12">
            <div className="relative flex items-center justify-center shrink-0">
              <img
                src={scrolled ? logoOscuro : logoClaro}
                alt="Logo Santuario de Chame"
                className="h-[5rem] w-[5rem] sm:h-[6.5rem] sm:w-[6.5rem] max-w-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 object-contain drop-shadow-md"
              />
            </div>
            <span className={`md:hidden font-display text-lg sm:text-xl whitespace-nowrap font-bold tracking-tight transition-colors duration-300 group-hover:text-secondary ${scrolled ? 'text-primary' : 'text-white'}`}>
              Panales de vida
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-sans text-xs font-semibold tracking-widest uppercase hover:text-secondary transition-colors duration-300 ${scrolled ? 'text-on-surface-variant' : 'text-white'}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="h-6 w-px bg-outline-variant/30"></div>

            {/* Utility Actions */}
            <div className="flex items-center gap-4">
              {/* My bookings badge action */}
              <button
                onClick={() => setBookingsOpen(true)}
                className={`relative p-2 hover:text-secondary hover:bg-surface-container/50 rounded-full transition-all duration-300 focus:outline-none ${scrolled ? 'text-primary' : 'text-white'}`}
                title="Mis Reservas"
              >
                <Calendar className="h-5 w-5" />
                {bookingsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-primary-fixed text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-surface">
                    {bookingsCount}
                  </span>
                )}
              </button>

              {/* Shopping Cart button */}
              <button
                onClick={() => setCartOpen(true)}
                className={`relative p-2 hover:text-secondary hover:bg-surface-container/50 rounded-full transition-all duration-300 focus:outline-none ${scrolled ? 'text-primary' : 'text-white'}`}
                title="Carrito de Compras"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-primary-fixed text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-surface">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* General CTA */}
              <a
                href="#experiences"
                className="bg-primary hover:bg-primary-container text-on-primary text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              >
                Reservar Estadía
              </a>
            </div>
          </div>

          {/* Mobile Actions and Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setBookingsOpen(true)}
              className={`relative p-2 rounded-full hover:bg-surface-container ${scrolled ? 'text-primary' : 'text-white'}`}
            >
              <Calendar className="h-5 w-5" />
              {bookingsCount > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-primary-fixed text-[9px] font-bold h-4.5 w-4.5 rounded-full flex items-center justify-center">
                  {bookingsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setCartOpen(true)}
              className={`relative p-2 rounded-full hover:bg-surface-container ${scrolled ? 'text-primary' : 'text-white'}`}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-primary-fixed text-[9px] font-bold h-4.5 w-4.5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ml-1 focus:outline-none ${scrolled ? 'text-primary' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-Out Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 bg-surface border-b border-outline-variant/30 shadow-lg md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              <nav className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-[13px] font-semibold tracking-wider uppercase text-on-surface-variant hover:text-secondary py-2 border-b border-outline-variant/10"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.a
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                href="#experiences"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary hover:bg-primary-container text-on-primary text-xs font-bold tracking-widest uppercase py-4 rounded-lg text-center flex items-center justify-center gap-2"
              >
                Reservar Estadía
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
