import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ImageOff } from "lucide-react";

/**
 * Fullscreen image gallery lightbox.
 * Props:
 *   open: boolean
 *   onClose: () => void
 *   photos: string[]
 *   index: number
 *   onIndexChange: (i:number) => void
 *   title?: string
 *   subtitle?: string
 */
export default function Lightbox({ open, onClose, photos = [], index = 0, onIndexChange, title, subtitle }) {
  const count = photos.length;
  const safeIndex = count > 0 ? ((index % count) + count) % count : 0;

  const next = useCallback(() => {
    if (count > 0) onIndexChange((safeIndex + 1) % count);
  }, [count, safeIndex, onIndexChange]);

  const prev = useCallback(() => {
    if (count > 0) onIndexChange((safeIndex - 1 + count) % count);
  }, [count, safeIndex, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, next, prev]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          data-testid="lightbox"
          className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-2xl flex items-center justify-center"
          onClick={onClose}
        >
          {/* Top bar */}
          <div className="absolute top-0 inset-x-0 p-6 md:p-8 flex items-center justify-between text-white z-10" onClick={(e) => e.stopPropagation()}>
            <div>
              {subtitle && <p className="eyebrow text-[10px]">{subtitle}</p>}
              {title && <h3 className="font-serif text-2xl md:text-3xl mt-1">{title}</h3>}
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs tracking-[0.3em] text-white/60">
                {String(safeIndex + 1).padStart(2, "0")}
                <span className="text-white/30 mx-2">/</span>
                {String(count).padStart(2, "0")}
              </span>
              <button
                data-testid="lightbox-close"
                onClick={onClose}
                aria-label="Cerrar galería"
                className="w-12 h-12 border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors flex items-center justify-center"
              >
                <X size={20} strokeWidth={1.4} />
              </button>
            </div>
          </div>

          {/* Image */}
          <motion.div
            key={safeIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {photos[safeIndex] ? (
              <img
                src={photos[safeIndex]}
                alt={title ? `${title} ${safeIndex + 1}` : `Foto ${safeIndex + 1}`}
                className="max-w-[90vw] max-h-[80vh] object-contain shadow-[0_30px_120px_rgba(212,175,55,0.15)]"
                data-testid={`lightbox-image-${safeIndex}`}
              />
            ) : (
              <div className="w-[60vw] h-[60vh] flex flex-col items-center justify-center text-white/40 border border-white/10">
                <ImageOff size={40} strokeWidth={1.2} />
                <p className="mt-4 text-sm tracking-[0.2em] uppercase">Sin imagen disponible</p>
                <p className="mt-2 text-xs text-white/30">Añade fotos en <code>src/data/media.js</code></p>
              </div>
            )}
          </motion.div>

          {/* Prev / Next */}
          {count > 1 && (
            <>
              <button
                data-testid="lightbox-prev"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Anterior"
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white flex items-center justify-center transition-all"
              >
                <ChevronLeft size={24} strokeWidth={1.4} />
              </button>
              <button
                data-testid="lightbox-next"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Siguiente"
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white flex items-center justify-center transition-all"
              >
                <ChevronRight size={24} strokeWidth={1.4} />
              </button>
            </>
          )}

          {/* Thumbnails strip */}
          {count > 1 && (
            <div className="absolute bottom-6 inset-x-0 flex items-center justify-center gap-2 px-6 z-10" onClick={(e) => e.stopPropagation()}>
              {photos.map((p, i) => (
                <button
                  key={i}
                  data-testid={`lightbox-thumb-${i}`}
                  onClick={() => onIndexChange(i)}
                  aria-label={`Ir a foto ${i + 1}`}
                  className={`h-1 transition-all ${
                    i === safeIndex ? "w-10 bg-[#D4AF37]" : "w-6 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
