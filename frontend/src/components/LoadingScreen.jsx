import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function LoadingScreen() {
  const { t } = useLang();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* flag stripe ambient */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#022C22] via-[#047857]/30 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/5 to-transparent" />
          </div>

          {/* Crescent + star (Algerian flag emblem) */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-24 h-24 mb-10">
              <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1.2 }}
              >
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#F3E5AB" />
                  </linearGradient>
                </defs>
                <path
                  d="M62 50 a18 18 0 1 1 -18 -18 a14 14 0 1 0 18 18 z"
                  fill="url(#g1)"
                />
                <polygon
                  points="72,42 74,48 80,48 75,52 77,58 72,55 67,58 69,52 64,48 70,48"
                  fill="url(#g1)"
                />
              </motion.svg>
              <div className="absolute inset-0 rounded-full glow-gold" />
            </div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-serif text-5xl md:text-6xl text-white tracking-[0.2em]"
            >
              {t.loading.title}
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="eyebrow mt-4"
            >
              {t.loading.subtitle}
            </motion.p>

            <div className="mt-10 w-48 h-px bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "300%" }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
