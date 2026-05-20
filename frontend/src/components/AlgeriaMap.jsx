import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "../context/LanguageContext";

// Coordinates calibrated for Algeria within a 100x130 viewBox SVG.
const CITIES = [
  { id: "algiers", x: 50, y: 18, key: 5 },        // Algiers / Casbah
  { id: "oran", x: 35, y: 21, key: 4 },           // Oran
  { id: "constantine", x: 62, y: 19, key: 3 },    // Constantine
  { id: "annaba", x: 70, y: 17, key: 9 },         // Annaba
  { id: "ghardaia", x: 52, y: 42, key: 1 },       // Ghardaïa
  { id: "tassili", x: 70, y: 80, key: 0 },        // Tassili
  { id: "hoggar", x: 58, y: 90, key: 2 },         // Hoggar
  { id: "tipaza", x: 48, y: 17, key: 6 },         // Tipaza
  { id: "hamma", x: 51, y: 19, key: 10 },         // Hamma garden / Algiers
  { id: "elkala", x: 73, y: 17, key: 8 },         // El Kala
  { id: "hammam", x: 67, y: 20, key: 7 },         // Hammam Maskhoutine
];

// Simplified Algeria silhouette (approximation)
const ALGERIA_PATH = "M20,25 L30,18 L40,15 L50,14 L60,15 L72,15 L82,18 L88,28 L92,40 L90,55 L86,72 L78,90 L70,108 L62,118 L52,122 L42,118 L34,108 L26,95 L20,80 L16,65 L14,50 L16,38 Z";

export default function AlgeriaMap() {
  const { t } = useLang();
  const [hovered, setHovered] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const places = t.landscapes.list;

  return (
    <section
      id="map"
      data-testid="map-section"
      className="relative py-32 md:py-40 bg-[#050505] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">{t.map.eyebrow}</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white mt-6 leading-none">
            {t.map.title}
          </h2>
          <div className="section-divider mt-8" />
          <p className="text-neutral-300 max-w-2xl mx-auto mt-6 font-light">
            {t.map.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Map SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="lg:col-span-3 relative glass p-6 md:p-10"
          >
            <svg viewBox="0 0 100 135" className="w-full h-auto" data-testid="algeria-map-svg">
              <defs>
                <linearGradient id="land" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#022C22" />
                  <stop offset="100%" stopColor="#0A110D" />
                </linearGradient>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Country outline */}
              <path
                d={ALGERIA_PATH}
                fill="url(#land)"
                stroke="#D4AF37"
                strokeWidth="0.4"
                strokeOpacity="0.6"
              />

              {/* Pin markers */}
              {CITIES.map((c, i) => {
                const place = places[c.key];
                const isHover = hovered === i;
                return (
                  <g
                    key={c.id}
                    data-testid={`map-pin-${c.id}`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setHovered(i)}
                    style={{ cursor: "pointer" }}
                  >
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={isHover ? 1.6 : 1.1}
                      fill="#D4AF37"
                      className="transition-all duration-300"
                    />
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="3"
                      fill="url(#glow)"
                      opacity={isHover ? 1 : 0.5}
                    />
                    {isHover && (
                      <text
                        x={c.x + 3}
                        y={c.y - 1}
                        fontSize="2.2"
                        fill="#fff"
                        fontFamily="Outfit, sans-serif"
                        className="font-light"
                      >
                        {place?.name}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Compass */}
              <g transform="translate(85,118)">
                <circle r="6" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.5" />
                <text textAnchor="middle" y="-6.5" fontSize="2.2" fill="#D4AF37">N</text>
                <line x1="0" y1="-5" x2="0" y2="5" stroke="#D4AF37" strokeWidth="0.3" opacity="0.5" />
                <line x1="-5" y1="0" x2="5" y2="0" stroke="#D4AF37" strokeWidth="0.3" opacity="0.5" />
              </g>
            </svg>
            <div className="absolute top-4 left-4 eyebrow text-[10px] text-white/40">
              N 28° · E 2° · DZ
            </div>
          </motion.div>

          {/* Info panel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="eyebrow">
              {hovered !== null ? "Destino" : "Pasa el cursor"}
            </div>
            <motion.div
              key={hovered}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-dark p-8 min-h-[280px]"
              data-testid="map-info-panel"
            >
              {hovered !== null ? (
                <>
                  <h3 className="font-serif text-3xl md:text-4xl text-white leading-tight">
                    {places[CITIES[hovered].key]?.name}
                  </h3>
                  <p className="eyebrow mt-2">{places[CITIES[hovered].key]?.region}</p>
                  <div className="w-12 h-px bg-[#D4AF37] my-5" />
                  <p className="text-neutral-300 font-light leading-relaxed">
                    {places[CITIES[hovered].key]?.desc}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-serif text-3xl text-white/70">
                    Explora el mapa
                  </h3>
                  <p className="text-neutral-400 mt-4 font-light leading-relaxed">
                    Cada destello dorado guarda una historia. Tres veces el tamaño de España, Argelia despliega 11 maravillas en este lienzo.
                  </p>
                  <div className="w-12 h-px bg-[#D4AF37]/40 my-5" />
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div>
                      <p className="font-serif text-2xl text-[#D4AF37]">11</p>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mt-1">Destinos</p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-[#D4AF37]">07</p>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mt-1">UNESCO</p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-[#D4AF37]">∞</p>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mt-1">Encanto</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
