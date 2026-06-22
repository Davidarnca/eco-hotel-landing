import React from 'react';
import { motion } from 'motion/react';
import { Shield, TreePine, BookOpen, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';
import beeHotelImg from '../assets/bee_hotel.png';
import biohotelImg from '../assets/biohotel.jpeg';
import colmenasImg from '../assets/colmenas.jpeg';
import proteccionImg from '../assets/proteccion.jpeg';
import { HoneyProduct } from '../types';

export const HotelSection: React.FC = () => {
  const { addToCart } = useApp();

  // Definición del producto para interactuar dinámicamente con el carrito de la landing
  const bioHotelProduct: HoneyProduct = {
    id: 'prod-biohotel',
    name: 'Bio Hotel para Abejas Solitarias',
    description: 'Refugio hexagonal premium de madera natural diseñado para la anidación de abejas solitarias y polinizadores de jardín.',
    price: 49,
    imageUrl: beeHotelImg,
    rating: 5.0,
    reviewsCount: 37,
    availableQuantity: 15,
    volume: '1 Unidad',
    harvestSeason: 'Todo el año'
  };

  const handleBuy = () => {
    addToCart(bioHotelProduct, 1);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden" id="hotel">
      {/* Decorative Natural Organic Shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E3EAE2] rounded-full filter blur-3xl opacity-40 -mr-48 -mt-48 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5EAD4] rounded-full filter blur-3xl opacity-40 -ml-48 -mb-48 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Mobile Title (Hidden on Desktop) */}
        <div className="block lg:hidden space-y-4 mb-10 text-center sm:text-left">
          <span className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#D29034] uppercase block">
            PROTEGELAS
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-[#1F3E29] leading-[1.15]">
            Proyecto Educativo "Panales De Vida"
          </h2>
          <div className="h-0.5 w-16 bg-[#D29034] mx-auto sm:mx-0"></div>
        </div>

        {/* Main Split-Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Product Showcase Card (takes 5/12 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-[420px]">
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-[#EBE7E0] p-4 transition-all duration-500">

                {/* Product Image Frame */}
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#FAF8F5]">
                  <img
                    src={beeHotelImg}
                    alt="Bio Hotel - Refugio de Abejas Solitarias"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1F3E29]/5 mix-blend-multiply pointer-events-none"></div>

                  {/* Elegant Brand Badge Overlay */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[#1F3E29] text-[#F5EAD4] font-sans text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md">
                    <Sparkles className="h-3 w-3 text-[#D29034]" />
                    BioHotel • Artesanal
                  </span>
                </div>

                {/* Card Footer details */}
                <div className="pt-5 pb-2 px-2 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-bold text-[#D29034] tracking-widest uppercase block mb-1">
                      PRODUCTO EXCLUSIVO
                    </span>
                    <h4 className="font-display font-bold text-[#1F3E29] text-lg leading-tight">
                      Nido Hexagonal Madera
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#1F3E29]/60 line-through block leading-none">
                      $59.00
                    </span>
                    <span className="font-display text-2xl font-bold text-[#D29034]">
                      ${bioHotelProduct.price}.00
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Info Tag below card */}
              <div className="absolute -bottom-6 right-6 bg-[#1F3E29] text-[#FAF8F5] text-[10px] font-medium tracking-wide px-4 py-2 rounded-xl shadow-md border border-[#FAF8F5]/10 flex items-center gap-1.5 z-20">
                <div className="w-2 h-2 rounded-full bg-[#D29034] animate-pulse"></div>
                Agujeros de 6mm y 8mm de diámetro idóneos
              </div>
            </div>
          </motion.div>

          {/* Right Column: Persuasive Copy & Benefits (takes 7/12 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Header Badge & Title (Hidden on Mobile) */}
            <div className="hidden lg:block space-y-4">
              <span className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#D29034] uppercase block">
                PROTEGELAS
              </span>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-[#1F3E29] leading-[1.15]">
                Proyecto Educativo "Panales De Vida"
              </h2>
              <div className="h-0.5 w-16 bg-[#D29034]"></div>
            </div>

            {/* Subtitle / Value Proposition */}
            <div className="bg-[#efb810] text-primary p-6 sm:p-8 rounded-[2rem] shadow-xl text-justify font-sans text-base sm:text-lg leading-relaxed space-y-4 mb-6 max-w-3xl">
              <p>
                Desde la experiencia de conservación y equilibrio ambiental desarrollada en el <strong>Santuario de Chame</strong>, surge el interés por proteger a polinizadores, organismos fundamentales para el mantenimiento de los ecosistemas y la biodiversidad. En particular, hemos enfocado nuestro trabajo en el estudio y conservación de las abejas silvestres o <strong>abejas solitarias</strong>, especies que viven en libertad y que, a diferencia de las abejas melíferas, no producen miel ni habitan en colmenas. Su principal función es la polinización, un proceso esencial para la reproducción de miles de especies vegetales, la producción de alimentos y el equilibrio ecológico.
              </p>
              <p>
                Sin embargo, la expansión urbana, la pérdida de hábitats naturales y diversas actividades humanas han reducido significativamente los espacios seguros para estas especies, poniendo en riesgo su supervivencia y, con ello, los servicios ecosistémicos que prestan. Como respuesta a esta problemática, proponemos la creación de las <strong>Zonas V (Zonas de Vida)</strong>, espacios diseñados para ofrecer condiciones adecuadas de anidación, alimentación e hidratación para las <strong>abejas solitarias</strong>, contribuyendo a su conservación y fortaleciendo la conectividad ecológica en entornos urbanos y rurales.
              </p>
              <p>
                Esta iniciativa se desarrolla a través de una propuesta teórico-práctica de educación ambiental que combina formación, investigación participativa y acción comunitaria. Mediante un proceso de cuatro fases formativas y el acompañamiento en la implementación de las <strong>Zonas V</strong> y los <strong>BioHoteles</strong>, buscamos sensibilizar, educar y movilizar a la ciudadanía frente a la importancia de proteger a los polinizadores, reconocidos por numerosos estudios científicos como actores indispensables para la vida en el planeta.
              </p>
              <p>
                Como parte de esta estrategia, contamos con <strong>BioHoteles</strong> de observación para abejas solitarias, estructuras especialmente diseñadas para permitir la observación de sus procesos de anidación, reproducción y desarrollo. Esta herramienta se convierte en un recurso pedagógico innovador para docentes, estudiantes, investigadores y personas interesadas en comprender de manera cercana el fascinante mundo de los polinizadores y su aporte a los ecosistemas.
              </p>
            </div>







          </motion.div>

        </div>

      </div>

      {/* Red de Voluntarios & BioHoteles Extension */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-24 mb-8">
        {/* BioHoteles Gallery (2 images) */}
        <div className="mb-12">
          <div className="text-center space-y-4 mb-8 lg:mb-12">
            <span className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#D29034] uppercase block">
              GALERÍA
            </span>
            <h3 className="font-display text-xl md:text-3xl font-bold text-[#1F3E29]">
              Nuestros BioHoteles
            </h3>
            <div className="h-0.5 w-16 bg-[#D29034] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] sm:aspect-[16/10] group shadow-xl border border-[#EBE7E0] bg-white">
              <img src={beeHotelImg} alt="BioHotel en uso 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] sm:aspect-[16/10] group shadow-xl border border-[#EBE7E0] bg-white">
              <img src={biohotelImg} alt="BioHotel en uso 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Second Yellow Card Paragraph */}
        <div className="bg-[#efb810] text-primary p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-justify font-sans text-base sm:text-lg leading-relaxed space-y-6 max-w-4xl mx-auto">
          <p>
            Los <strong>BioHoteles</strong> también están disponibles para personas, instituciones y organizaciones que deseen instalar espacios de conservación en jardines, huertas, colegios o áreas verdes. Cada <strong>BioHotel</strong> se entrega con un kit de instalación y acceso a una capacitación virtual o presencial, que brinda los conocimientos necesarios para su adecuado manejo y contribuir activamente a la protección de las abejas solitarias.
          </p>
          <p>
            Con el propósito de involucrar a la ciudadanía en la generación de conocimiento ambiental, proponemos además la creación de una <strong>Red de Voluntarios de Vida</strong> y <strong>Red de BioHoteles “Panales de vida”</strong> integrada por ciudadanos, instituciones educativas, organizaciones y comunidades comprometidas con la conservación de los polinizadores. A través de una aplicación digital <strong>APP “Panal de vida”</strong> los participantes registran información sobre el comportamiento y desarrollo de las abejas solitarias en las <strong>Zonas V</strong> y <strong>BioHoteles</strong> instalados en diferentes territorios.
          </p>
        </div>



      </div>

      {/* Reversed Split Section: Benefits & Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-24 mb-16">
        
        {/* Mobile Title (Hidden on Desktop) */}
        <div className="block lg:hidden space-y-4 mb-10 text-center sm:text-left">
          <span className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#D29034] uppercase block">
            NUESTRO IMPACTO
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-[#1F3E29] leading-[1.15]">
            Ciencia Ciudadana
          </h2>
          <div className="h-0.5 w-16 bg-[#D29034] mx-auto sm:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Column: Photo (takes 5/12 cols) - MOVED FIRST FOR MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:order-last lg:col-span-5 flex justify-center mb-4 lg:mb-0"
          >
            <div className="relative w-full max-w-[420px]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl border border-[#EBE7E0] aspect-[3/4]">
                <img
                  src={proteccionImg}
                  alt="Conservación y Protección"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Left Column: Benefits (takes 7/12 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:order-first lg:col-span-7 space-y-8"
          >
            {/* Header Badge & Title (Hidden on Mobile) */}
            <div className="hidden lg:block space-y-4">
              <span className="font-sans text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#D29034] uppercase block">
                NUESTRO IMPACTO
              </span>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-[#1F3E29] leading-[1.15]">
                Ciencia Ciudadana
              </h2>
              <div className="h-0.5 w-16 bg-[#D29034]"></div>
            </div>

            {/* New Paragraph */}
            <div className="bg-[#efb810] text-primary p-6 sm:p-8 rounded-[2rem] shadow-xl text-justify font-sans text-base sm:text-lg leading-relaxed mb-6">
              <p>
                La información recopilada es sistematizada y analizada para fortalecer procesos de investigación, educación ambiental y toma de decisiones orientadas a la conservación. De esta manera, la comunidad se convierte en protagonista de la investigación científica, demostrando que la ciencia ciudadana es una herramienta poderosa para la generación de conocimiento, la comprensión de los desafíos ambientales y la construcción colectiva de soluciones que contribuyan a un futuro más sostenible.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Benefit 1 */}
              <div className="flex gap-4 items-center bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#EBE7E0]">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E3EAE2] flex items-center justify-center text-[#1F3E29]">
                  <Shield className="h-5 w-5 text-[#1F3E29]" />
                </div>
                <div>
                  <h4 className="font-sans text-lg md:text-xl font-bold text-[#1F3E29]">
                    Conservación Activa
                  </h4>
                  <p className="font-sans text-xs text-[#1F3E29]/70 leading-relaxed mt-0.5">
                    Hogar seguro para polinizadores frente a la pérdida de su hábitat.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4 items-center bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#EBE7E0]">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E3EAE2] flex items-center justify-center text-[#1F3E29]">
                  <TreePine className="h-5 w-5 text-[#1F3E29]" />
                </div>
                <div>
                  <h4 className="font-sans text-lg md:text-xl font-bold text-[#1F3E29]">
                    Madera Sostenible
                  </h4>
                  <p className="font-sans text-xs text-[#1F3E29]/70 leading-relaxed mt-0.5">
                    Maderas certificadas recuperadas, libre de tóxicos y muy durable.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4 items-center bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#EBE7E0]">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E3EAE2] flex items-center justify-center text-[#1F3E29]">
                  <BookOpen className="h-5 w-5 text-[#1F3E29]" />
                </div>
                <div>
                  <h4 className="font-sans text-lg md:text-xl font-bold text-[#1F3E29]">
                    Educación y Conciencia
                  </h4>
                  <p className="font-sans text-xs text-[#1F3E29]/70 leading-relaxed mt-0.5">
                    Acerca a los niños a la naturaleza y embellece los jardines.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-[#1F3E29] rounded-2xl p-6 lg:p-8 mt-8 shadow-md flex flex-col sm:flex-row items-center gap-4 justify-between border border-[#1F3E29]/10">
              <div className="text-center sm:text-left">
                <span className="font-sans text-[10px] font-bold tracking-widest text-[#D29034] uppercase block mb-1">
                  ÚNETE A LA RED
                </span>
                <h4 className="font-display text-white text-lg md:text-xl font-bold">
                  CONTÁCTENOS
                </h4>
              </div>
              <a href="mailto:correo.institucional@santuario.com" className="font-sans text-sm bg-[#D29034] hover:bg-[#B97B28] text-white px-6 py-3 rounded-lg transition-colors shadow-sm font-medium text-center">
                correo institucional
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
