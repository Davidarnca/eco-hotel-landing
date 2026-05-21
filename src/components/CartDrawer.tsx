import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CartDrawer: React.FC = () => {
  const { cart, cartOpen, setCartOpen, updateCartQuantity, removeFromCart, clearCart } = useApp();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!cartOpen) return null;

  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingFee = subtotal > 50 ? 0 : 5; // Free shipping over $50
  const grandTotal = subtotal + shippingFee;

  const handleCheckout = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSuccess(true);
  };

  const handleClose = () => {
    if (success) {
      clearCart();
      setSuccess(false);
    }
    setCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-primary/40 backdrop-blur-xs">
      <div className="absolute inset-0 cursor-zoom-out" onClick={handleClose}></div>
      
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
            <ShoppingBag className="h-5 w-5 text-secondary" />
            <h3 className="font-display text-xl font-bold leading-tight">Tu Carrito de Compra</h3>
          </div>
          <button onClick={handleClose} className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* List scroll */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center space-y-4 font-sans"
            >
              <CheckCircle2 className="h-16 w-16 text-green-600 animate-bounce" />
              <h4 className="font-display text-2xl font-bold text-primary">¡Pedido Generado!</h4>
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-sm leading-relaxed">
                Hemos registrado satisfactoriamente tu orden por <span className="font-bold text-primary">${grandTotal} USD</span>. Hecho bajo simulación de base de datos exitosa.
              </p>
              <button
                onClick={handleClose}
                className="pt-4 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-lg font-sans"
              >
                Volver a la Finca
              </button>
            </motion.div>
          ) : cart.length === 0 ? (
            <div className="text-center py-20 text-on-surface-variant/50 space-y-4 font-sans flex flex-col items-center">
              <ShoppingBag className="h-12 w-12 text-[#c3c8c1]" />
              <p className="text-sm font-semibold uppercase tracking-wider">Tu carrito está vacío</p>
              <button
                onClick={() => setCartOpen(false)}
                className="text-primary hover:text-secondary text-xs uppercase tracking-widest font-bold underline"
              >
                Explorar Catálogo
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant/10 shadow-sm font-sans relative group"
              >
                {/* Product thumbnail */}
                <div className="h-16 w-16 rounded-lg overflow-hidden shrink-0 bg-surface">
                  <img alt={item.product.name} className="w-full h-full object-cover" src={item.product.imageUrl} />
                </div>

                {/* Details */}
                <div className="flex-grow space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-sm font-bold text-primary leading-tight">{item.product.name}</h4>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-on-surface-variant/40 hover:text-red-500 p-1 rounded-full transition-colors"
                      title="Eliminar de carrito"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4">
                    {/* Qty incrementors */}
                    <div className="flex items-center border border-outline-variant/50 rounded-md overflow-hidden bg-surface scale-90">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 px-2 text-primary hover:bg-surface-container"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-primary w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 px-2 text-primary hover:bg-surface-container"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <p className="text-sm font-bold text-primary">${item.product.price * item.quantity} USD</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Receipt subtotal footer */}
        {!success && cart.length > 0 && (
          <div className="p-6 bg-white border-t border-outline-variant/30 shrink-0 space-y-4 font-sans">
            <div className="space-y-1.5 text-xs text-on-surface-variant">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-primary">${subtotal} USD</span>
              </div>
              <div className="flex justify-between">
                <span>Envío estimado:</span>
                <span>{shippingFee === 0 ? <span className="text-green-600 font-bold">Gratis</span> : `$${shippingFee} USD`}</span>
              </div>
              {shippingFee > 0 && (
                <p className="text-[10px] text-on-surface-variant/60">Agrega ${(50 - subtotal).toFixed(1)} adicionales para envío gratuito</p>
              )}
              <div className="h-px bg-outline-variant/20 pt-1.5"></div>
              <div className="flex justify-between text-sm font-bold text-primary pt-1">
                <span>Total estimado:</span>
                <span className="text-secondary">${grandTotal} USD</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Procesando Pedido...
                </>
              ) : (
                <>
                  Confirmar Pedido <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
