import React from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Eye, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import miel2Img from '../assets/miel2.png';

export const HoneySection: React.FC = () => {
  const { products, addToCart, setSelectedProduct } = useApp();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#FAF8F5]" id="miel">
      {/* CORRECCIÓN: Contenedor estándar con padding responsivo nativo de Tailwind */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro Grid */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
            <span className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.2em] text-secondary uppercase block">
              DISFRUTALA
            </span>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
              Miel 100% natural “Panal De Vida”
            </h2>
            <div className="bg-[#efb810] text-primary p-6 sm:p-8 rounded-[2rem] shadow-xl text-justify font-sans text-base sm:text-lg leading-relaxed space-y-4 mb-6">
              <p>
                Nuestra producción de miel nació como un proyecto piloto desarrollado en alianza con profesionales de la Universidad Pedagógica y Tecnológica de Colombia (UPTC) y el equipo técnico del <strong>Santuario de Chame</strong>. Esta iniciativa permitió estudiar las poblaciones de abejas melíferas presentes en la región, comprender su comportamiento en el ecosistema local y conocer las características únicas de la miel que producen.
              </p>
              <p>
                Nuestras abejas recorren diariamente miles de flores y árboles nativos, además de árboles frutales como ciruelos y duraznos, así como el campo floral que hace parte del santuario. De esta extraordinaria interacción con la naturaleza obtenemos una miel 100 % pura, de excelente calidad, cosechada bajo estrictos protocolos que garantizan su autenticidad y conservación de sus propiedades naturales.
              </p>
              <p>
                Gracias a los resultados de este proceso de investigación y conservación, nuestra iniciativa fue reconocida por <strong>Agrosavia</strong> con la implementación del primer Observatorio Seguro de Abejas de la región, un espacio único donde visitantes de todas las edades pueden observar de cerca el fascinante mundo de estos importantes polinizadores.
              </p>
              <p>
                Te invitamos a degustar nuestra miel directamente en el <strong>Santuario de Chame</strong> y a llevar contigo un producto que refleja la riqueza natural de nuestro territorio. También realizamos envíos a cualquier lugar de Colombia para que disfrutes de su sabor y beneficios donde quiera que estés.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#experiences"
                className="bg-primary hover:bg-primary-container text-on-primary font-sans text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-lg shadow-sm transition-all inline-flex items-center gap-2"
              >
                Conocer Apiarios
              </a>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-secondary bg-secondary-fixed/20 px-4 py-2 rounded-full">
                <Sparkles className="h-4.5 w-4.5" />
                Certificado Orgánico USDA
              </span>
            </div>
          </div>

          {/* Graphic with interactive Badge Overlay */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-fixed/50 rounded-full blur-3xl z-0"></div>
              <div className="overflow-hidden rounded-2xl shadow-xl relative z-10">
                <img
                  alt="Premium Honey Extraction"
                  className="w-full object-cover aspect-video sm:aspect-square md:max-h-[500px] transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbuO8_IhP4IkdL-R72KJ9Lqd1-2AdwRmgZuMRKDYICVs2upe9jHCP4qylab00tBr6HoL1wgekZlx-2re0STsvpIqNH2XBmF0_AeCVDDl0R2UwD_OafMhmbD-Wr7APC-snv8h4EERweg4J-eO0rRFmBsq0-iWET8PCQKpuByEHJT703USNo6Imk2DAd6yM2Z1bM4ixr43cZEww2xskN0-W_FtuYy_okRpWZoIFuKxUokd6OQoeqvWuviLCNkcnbqJNIdjHMqv2KsdQx"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-lg z-20 border border-outline-variant/30 hidden md:block">
                <p className="font-sans text-[10px] font-bold tracking-widest text-secondary mb-1">COSECHA DE ALTURA</p>
                <p className="font-display text-2xl font-bold text-primary">100% Cruda</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Products Grid */}
        <div>
          <div className="text-center mb-16 space-y-4">
            <span className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.2em] text-secondary uppercase block">
              COLECCIÓN EXCLUSIVA DE TEMPORADA
            </span>
            <h3 className="font-display text-xl md:text-3xl font-bold text-primary">Catálogo de Miel</h3>
            <div className="h-0.5 w-16 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden border border-outline-variant/15 shadow-sm hover:shadow-md flex flex-col h-full transition-shadow duration-300"
              >
                {/* Product Image and Overlay triggers */}
                <div className="relative group/img overflow-hidden bg-surface">
                  <img
                    alt={product.name}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover/img:scale-105"
                    src={product.imageUrl}
                  />
                  {/* Quick-view / Details Overlay gradient and action buttons */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-white hover:bg-surface-container text-primary p-3 rounded-full hover:scale-110 transition-transform shadow-md"
                      title="Ver Detalles"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-secondary hover:bg-secondary-fixed text-primary p-3 rounded-full hover:scale-110 transition-transform shadow-md"
                      title="Añadir al Carrito"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Volume/Weight Badge */}
                  <span className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-white font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {product.volume}
                  </span>
                </div>

                {/* Content description */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-display text-lg md:text-xl font-bold text-primary group-hover:text-secondary">
                        {product.name}
                      </h4>
                      <p className="font-display text-lg font-bold text-secondary">${product.price}</p>
                    </div>
                    {product.scientificName && (
                      <p className="font-sans text-[11px] italic text-on-surface-variant/70 mb-3">
                        {product.scientificName}
                      </p>
                    )}
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Badges footer & Call to Action */}
                  <div className="pt-4 border-t border-outline-variant/10 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-on-surface-variant">
                        <Calendar className="h-3.5 w-3.5" />
                        Cosecha: <span className="text-secondary font-bold">{product.harvestSeason}</span>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="text-primary hover:text-secondary font-sans text-[10px] font-bold tracking-widest uppercase transition-colors"
                      >
                        Ver Atributos {'>'}
                      </button>
                    </div>

                    <a
                      href={`https://wa.me/573125908605?text=Hola,%20me%20interesa%20comprar%20${encodeURIComponent(product.name)}%20(${product.volume})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-sans text-[11px] font-bold tracking-widest uppercase py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      Comprar aquí con WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
