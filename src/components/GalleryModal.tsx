import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export type MediaItem = {
  type: 'image' | 'video';
  src: string;
  caption?: string;
};

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: MediaItem[];
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose, media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prevenir scroll en el body cuando el modal está abierto
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || media.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 focus:outline-none"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl h-[85vh] flex flex-col items-center justify-center"
      >
        {/* Main Media Container */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center"
            >
              {currentMedia.type === 'image' ? (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.caption || 'Gallery Image'}
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              ) : (
                <video
                  src={currentMedia.src}
                  controls
                  autoPlay
                  muted
                  className="max-w-full max-h-full object-contain rounded-xl outline-none shadow-2xl"
                />
              )}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          {media.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 p-4 bg-black/40 hover:bg-secondary text-white rounded-full backdrop-blur-md transition-all shadow-lg focus:outline-none opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 p-4 bg-black/40 hover:bg-secondary text-white rounded-full backdrop-blur-md transition-all shadow-lg focus:outline-none opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Caption and Indicator */}
        <div className="mt-6 flex flex-col items-center text-white h-20">
          {currentMedia.caption && (
            <motion.p
              key={`caption-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-xl font-medium mb-3 text-center tracking-wide"
            >
              {currentMedia.caption}
            </motion.p>
          )}
          <div className="flex gap-2 mt-auto pb-4">
            {media.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-secondary' : 'w-4 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
