import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const InteractiveBee: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isFacingRight, setIsFacingRight] = useState(true);
  const [lastX, setLastX] = useState(0);

  // Configuramos el "resorte" para que se mueva de forma orgánica, como si volara
  const springConfig = { damping: 12, stiffness: 40, mass: 1.5 };
  const beeX = useSpring(mouseX, springConfig);
  const beeY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Determinamos hacia dónde se mueve el ratón para girar la abeja
      if (e.clientX > lastX + 2) {
        setIsFacingRight(true);
      } else if (e.clientX < lastX - 2) {
        setIsFacingRight(false);
      }
      setLastX(e.clientX);

      // Posicionamos la abeja cerca del cursor (con un ligero desplazamiento)
      mouseX.set(e.clientX + 30);
      mouseY.set(e.clientY - 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, lastX]);

  return (
    <motion.div
      style={{
        x: beeX,
        y: beeY,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999, // Para que siempre esté por encima de todo
        pointerEvents: 'none', // Para no interferir con los clics del usuario
      }}
      animate={{
        scaleX: isFacingRight ? -1 : 1, // Gira horizontalmente
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Contenedor con animación flotante de vuelo */}
      <motion.div
        animate={{ 
          y: [-5, 5, -5],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <svg width="48" height="48" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          {/* Aguijón */}
          <polygon points="56,36 46,32 46,40" fill="#4B5563" />
          
          {/* Ala trasera */}
          <motion.ellipse
            cx="26" cy="18" rx="8" ry="16" fill="#D1D5DB" opacity="0.8"
            animate={{ rotate: [-20, 20, -20] }}
            transition={{ repeat: Infinity, duration: 0.1 }}
            style={{ transformOrigin: "26px 34px" }}
          />
          
          {/* Cuerpo */}
          <ellipse cx="32" cy="36" rx="16" ry="12" fill="#FBBF24" />
          
          {/* Rayas del cuerpo */}
          <path d="M22 26 Q 26 36 22 45" stroke="#374151" strokeWidth="4" fill="none" />
          <path d="M32 24 Q 36 36 32 48" stroke="#374151" strokeWidth="4" fill="none" />
          <path d="M42 26 Q 46 36 42 45" stroke="#374151" strokeWidth="4" fill="none" />
          
          {/* Cabeza */}
          <circle cx="16" cy="36" r="8" fill="#374151" />
          
          {/* Ojo */}
          <circle cx="12" cy="34" r="2" fill="white" />
          
          {/* Ala delantera */}
          <motion.ellipse
            cx="34" cy="16" rx="10" ry="18" fill="#F3F4F6" opacity="0.9"
            animate={{ rotate: [-30, 30, -30] }}
            transition={{ repeat: Infinity, duration: 0.1, delay: 0.05 }}
            style={{ transformOrigin: "34px 34px" }}
          />
          
          {/* Antena */}
          <path d="M16 28 Q 12 20 8 22" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </motion.div>
    </motion.div>
  );
};
