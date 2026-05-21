import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Heart } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  className: string;
}

export const BentoGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const galleryItems: GalleryItem[] = [
    {
      id: 'gallery-01',
      title: 'Senderos de Niebla',
      category: 'Amanecer en la Montaña',
      description: 'Una toma cinematográfica a bajo ángulo de los senderos nubosos al amanecer. El bosque nativo respira en un coro silencioso de murtos y líquenes antiguos.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFXtZJNnBAGE941cgMbm62tBJpF0vzocy6dtxbUEv0pbtnHRurYoC9cG_tGX8Yz2-982wSkawSyz8rWk5CjuRfZkJDayEipRbNy3HWYSdqBF6df210EKUWbl8PhVxKFmefhZqS18dqogidHotzfvnw8WEDNU2vAWQoadP9cjs44HtdQntGuYpiuSGq16RoegRpPcvTsPdtPHhy91pzVfaYuZoUI81WDiploOuTvRZOs1BSfxKPq-E4m6htmJsWh4r_SUb8SdmaOl55',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 'gallery-02',
      title: 'Néctar Puro de Celdas',
      category: 'Apicultura Activa',
      description: 'Cata sensorial directa de una celda operculada de miel. Se observa la textura fluida, el brillo ambarino y las partículas naturales nutritivas.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGlxyotVE7AkqmQZYm6y4kaFYgVdY1aZYTIP7Ipp948fdSUfZY_pSGFH821Iw4vA5QVm7FkpqCfdPSd0geqh9wlxxJhzN4EFCkV7y61XN-6h_rBeZRAcjkBNe4Ajf5pQgEyz2Er-eHsTgJo084nniMOZ9deIF-47n3PgmBIFkYNutfoH2KeWqj9wbGyvJV16bA7t6WWfCj_UiSppMODkdEYhLaZLLWL7sq0_-o4ybixd3hw6VE_w3q2FhdOU0PxmRhLYT7d5NGpTup',
      className: 'md:col-span-1'
    },
    {
      id: 'gallery-03',
      title: 'Noches Acústicas',
      category: 'Fuego de Campamento',
      description: 'Una fogata controlada calienta la noche andina en Finca Terra. Las chispas flotando al aire crean una constelación efímera conectada directamente con el descanso.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjDBGQ_6LsEsCogsLFq9li8mCJ2IFgmNuSJCE4aTaJ2XGm-u-RnvQE2s_qiG-Zs9w78n2XMIycP7ReE99D2L_Hntg2VZXhty3QYxsw_Bvjone0NuK9vzSGlc-mu-Vw_ZVmIDPfUzgryJqSndzCbnr6azFQVJsQ4r7iOLaZy_3Ggx9ZuGBfnN9HQPeNmLqm7V_WYMmfYc5C65MnwQWKsYzBDqo453HYj6KUKt4J1USTb6UuHrYyz2J1b4gEP-ePfoAgvvpDxE4WMnNE',
      className: 'md:col-span-1'
    },
    {
      id: 'gallery-04',
      title: 'Espíritu de Robledal',
      category: 'Santuario del Bosque',
      description: 'Haces de luz dorada filtrándose tras las copas de robles centenarios de la finca. En su base, una alfombra biológica de musgo protege a las micorrizas subterráneas.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOG1T7iZtP7k2e0rX2Cul9Dxd-2-mEyc1ZdtEyOhxkz0i3SG_nm63_QbUnoLyp0fg_2eyK9Cv8Y2prMVptx9LM6uTWS8WfWMU-9kEu5HuPDun3yp19zN3xTsUPJC78-24JSmHCRg2zRJ5GzZEAICR3Y5-nqpvV9KRgvkHlAXGNzAveTCkbFHoPcnlvsfdGqrDIYGmlhbRa2WzUTjD0lSBnmYSVsZOobhpmPOv7_KToOesZoSRBVHZnwmhfQAfbvSlWBmWqHdU6OqNz',
      className: 'md:col-span-2'
    }
  ];

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Intro */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-secondary uppercase block">
            NUESTRO LEGADO VISUAL Y BIO-DIVERSITY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-primary">
            Santuario Natural de la Finca
          </h2>
          <div className="h-0.5 w-16 bg-secondary mx-auto"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className={`${item.className} group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-md h-[300px] md:h-auto border border-outline-variant/15`}
            >
              {// Blurred graphic background to avoid layout breaks on slow connections
              }
              <div className="absolute inset-0 bg-surface-container z-0 animate-pulse"></div>

              {/* Photo */}
              <img
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-[800ms] group-hover:scale-105 select-none pointer-events-none"
                src={item.imageUrl}
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-500 z-20"></div>

              {/* Action indicators */}
              <div className="absolute top-4 right-4 z-30 flex gap-2">
                <button
                  onClick={(e) => toggleFavorite(item.id, e)}
                  className="p-2.5 rounded-full custom-glass border border-outline-variant/10 text-primary transition-all duration-300 hover:scale-115 focus:outline-none"
                >
                  <Heart
                    className={`h-4.5 w-4.5 transition-colors ${
                      favorites[item.id] ? 'fill-red-500 text-red-500' : 'text-primary'
                    }`}
                  />
                </button>
                <div className="p-2.5 rounded-full custom-glass border border-outline-variant/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="h-4.5 w-4.5" />
                </div>
              </div>

              {/* Captions */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-30 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-secondary-fixed mb-1.5 uppercase block">
                  {item.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Cinematic Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-primary/95 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-surface rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20 flex flex-col lg:flex-row cursor-default"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-40 p-3 rounded-full bg-primary/80 hover:bg-primary text-white border border-outline-variant/20 transition-all duration-300 pointer-events-auto"
                title="Cerrar Lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Photo Box */}
              <div className="w-full lg:w-3/5 bg-primary overflow-hidden">
                <img
                  alt={activePhoto.title}
                  className="w-full h-full max-h-[400px] lg:max-h-[600px] object-cover"
                  src={activePhoto.imageUrl}
                />
              </div>

              {/* Information Box */}
              <div className="w-full lg:w-2/5 p-8 flex flex-col justify-center space-y-4">
                <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-secondary uppercase block">
                  {activePhoto.category}
                </span>
                <h3 className="font-display text-3xl font-bold text-primary">
                  {activePhoto.title}
                </h3>
                <div className="h-0.5 w-12 bg-secondary"></div>
                
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed pt-2">
                  {activePhoto.description}
                </p>

                <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-on-surface-variant/50 uppercase tracking-widest font-semibold flex items-center gap-1">
                    Cámara: Hasselblad X2D
                  </span>
                  
                  <button
                    onClick={(e) => toggleFavorite(activePhoto.id, e)}
                    className="flex items-center gap-2 text-xs font-semibold text-secondary hover:text-secondary-fixed transition-colors"
                  >
                    <Heart className={`h-4.5 w-4.5 ${favorites[activePhoto.id] ? 'fill-red-500 text-red-500' : ''}`} />
                    {favorites[activePhoto.id] ? 'Marcado como favorito' : 'Añadir a favoritos'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
