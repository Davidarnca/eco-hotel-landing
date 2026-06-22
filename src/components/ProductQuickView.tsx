import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Plus, Minus, ShoppingBag, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductQuickView: React.FC = () => {
  const { selectedProduct, setSelectedProduct, addToCart } = useApp();
  const [qty, setQty] = useState(1);

  if (!selectedProduct) return null;

  const handleQtyChange = (val: number) => {
    const targetQty = qty + val;
    if (targetQty >= 1 && targetQty <= selectedProduct.availableQuantity) {
      setQty(targetQty);
    }
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, qty);
    setSelectedProduct(null);
    setQty(1); // reset quantity
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-primary/40 backdrop-blur-xs">
      {/* Tap outside detector to close */}
      <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedProduct(null)}></div>
      
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative h-full max-w-lg w-full bg-surface shadow-2xl border-l border-outline-variant/30 flex flex-col justify-between z-10"
      >
        {/* Header container */}
        <div className="p-6 bg-primary text-white flex justify-between items-center shrink-0">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-[#ffe088] mb-0.5">DETALLE DE PRODUCTO</p>
            <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">{selectedProduct.name}</h3>
          </div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable specs sheet */}
        <div className="flex-grow overflow-y-auto p-8 space-y-6">
          
          {/* Card Images / Graphic illustration */}
          <div className="rounded-xl overflow-hidden shadow-sm aspect-video bg-white flex items-center justify-center border border-outline-variant/20">
            <img
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
              src={selectedProduct.imageUrl}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-baseline gap-2">
              <span className="font-sans text-xs underline decoration-[#ffe088] decoration-2 text-primary font-bold uppercase tracking-widest">
                {selectedProduct.volume} • Variedad Finca
              </span>
              <p className="font-display text-2xl font-bold text-secondary">
                ${selectedProduct.price} USD
              </p>
            </div>

            {selectedProduct.scientificName && (
              <p className="font-sans text-sm italic text-on-surface-variant/80 font-medium">
                Taxonomía: {selectedProduct.scientificName}
              </p>
            )}

            <div className="h-px bg-outline-variant/30"></div>

            <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {selectedProduct.extendedDescription || selectedProduct.description}
            </p>
          </div>

          {/* Certificate USDA Organic Badge */}
          <div className="p-4 bg-green-500/5 rounded-xl border border-green-500/20 flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-sans text-xs font-bold text-green-800">Certificación de Pureza Orgánica</p>
              <p className="font-sans text-[11px] text-green-700/80 leading-relaxed mt-0.5">
                Nuestra miel no pasa por procesos industriales de pasteurización, conservando el 100% de los polinoides botánicos y enzimas producidas por los paneles biológicos.
              </p>
            </div>
          </div>

          {/* Nutritional facts structure */}
          {selectedProduct.nutritionalFacts && (
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
              <p className="font-sans text-[10px] font-bold tracking-wider text-primary uppercase mb-3 flex items-center gap-1.5">
                <HelpCircle className="h-3.5 w-3.5 text-secondary" />
                Información Nutricional (por porción de 100g)
              </p>
              
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-sans text-on-surface-variant">
                <div className="bg-white p-4 rounded-lg border border-outline-variant/10">
                  <p className="text-[10px] text-on-surface-variant/50 uppercase">Calorías</p>
                  <p className="font-bold text-primary mt-1">{selectedProduct.nutritionalFacts.energyCode}</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-outline-variant/10">
                  <p className="text-[10px] text-on-surface-variant/50 uppercase">Azúcares</p>
                  <p className="font-bold text-primary mt-1">{selectedProduct.nutritionalFacts.sugar}</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-outline-variant/10">
                  <p className="text-[10px] text-on-surface-variant/50 uppercase">Proteínas</p>
                  <p className="font-bold text-primary mt-1">{selectedProduct.nutritionalFacts.protein}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Panel */}
        <div className="p-6 bg-white border-t border-outline-variant/30 shrink-0 space-y-4 font-sans">
          
          <div className="flex justify-between items-center">
            {/* Quantity selector */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-on-surface-variant/80 font-bold uppercase tracking-wider">Cantidad:</span>
              <div className="flex items-center border border-outline-variant/50 rounded-lg overflow-hidden bg-surface">
                <button
                  onClick={() => handleQtyChange(-1)}
                  disabled={qty <= 1}
                  className="p-2.5 text-primary hover:bg-surface-container disabled:opacity-40 transition-colors"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="px-4 text-xs font-bold text-primary w-8 text-center">{qty}</span>
                <button
                  onClick={() => handleQtyChange(1)}
                  disabled={qty >= selectedProduct.availableQuantity}
                  className="p-2.5 text-primary hover:bg-surface-container disabled:opacity-40 transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Total purchase amount display */}
            <div>
              <p className="text-[9px] uppercase tracking-widest text-on-surface-variant/50 text-right">Compra Subtotal</p>
              <p className="font-display text-xl font-bold text-primary text-right">${selectedProduct.price * qty} USD</p>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold uppercase tracking-widest py-4.5 rounded-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag className="h-4.5 w-4.5" />
            Añadir {qty} {qty === 1 ? 'unidad' : 'unidades'} Al Carrito
          </button>
        </div>
      </motion.div>
    </div>
  );
};
