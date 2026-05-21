import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Sparkles } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { TRADITION_GALLERIES } from "../data/media";
import Lightbox from "./Lightbox";

// Bento spans tuned for 6-col grid.
const spans = [
  "md:col-span-3 md:row-span-2", // 0 Karakou tall
  "md:col-span-3",                // 1 Haïk
  "md:col-span-3",                // 2 Chedda
  "md:col-span-2",                // 3 Burnous
  "md:col-span-2",                // 4 Kabyle
  "md:col-span-2",                // 5 Bijoux
];

function TraditionCard({ item, gallery, index, onOpen }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const cover = gallery?.photos?.find(Boolean);
  const filled = gallery?.photos?.filter(Boolean).length || 0;
  const total = gallery?.photos?.length || 0;
  const initials = item.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

  return (
    <motion.button
      ref={ref}
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      data-testid={`tradition-card-${index}`}
      className={`group relative overflow-hidden text-left ${spans[index] || ""} min-h-[300px] md:min-h-[340px]`}
    >
      {/* Always-on gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#0A110D] to-[#050505]" />
      {cover ? (
        <div
          className="absolute inset-0 bg-cover bg-center cinematic-img"
          style={{ backgroundImage: `url(${cover})` }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-[10rem] md:text-[14rem] text-white/[0.06] leading-none">
            {initials}
          </span>
        </div>
      )}

      {/* Gold ornamental corner */}
      <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
        <div className="absolute top-5 right-5 w-px h-8 bg-[#D4AF37]/40" />
        <div className="absolute top-5 right-5 w-8 h-px bg-[#D4AF37]/40" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-700" />

      {/* Top tag */}
      <div className="absolute top-5 left-5 flex items-center gap-2">
        <Sparkles size={12} className="text-[#D4AF37]" strokeWidth={1.5} />
        <span className="eyebrow text-[10px]">{item.region}</span>
      </div>

      {/* Photo count badge */}
      <div className="absolute top-5 right-12 px-2 py-1 text-[10px] tracking-[0.2em] uppercase text-white/80 border border-white/15 backdrop-blur-md bg-black/20">
        {filled > 0 ? `${filled}/${total} fotos` : "Próximamente"}
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-4xl text-white leading-tight">
          {item.name}
        </h3>
        <p className="text-neutral-200 text-sm mt-3 font-light max-w-md leading-relaxed">
          {item.desc}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
          <Plus size={12} strokeWidth={1.4} />
          <span>Ver galería</span>
        </div>
      </div>
    </motion.button>
  );
}

export default function Traditions() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [activeIdx, setActiveIdx] = useState(null);
  const [photoIdx, setPhotoIdx] = useState(0);

  if (!t.traditions) return null;

  const open = (i) => { setActiveIdx(i); setPhotoIdx(0); };
  const close = () => setActiveIdx(null);

  return (
    <section
      id="traditions"
      data-testid="traditions-section"
      className="relative py-32 md:py-40 bg-[#050505] overflow-hidden"
    >
      {/* Ambient flag-color glows */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-[#047857]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-20 grid md:grid-cols-2 gap-8 items-end"
        >
          <div>
            <span className="eyebrow">{t.traditions.eyebrow}</span>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-white mt-6 leading-none">
              {t.traditions.title}
            </h2>
          </div>
          <p className="text-neutral-300 font-light max-w-md md:justify-self-end leading-relaxed">
            {t.traditions.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
          {t.traditions.list.map((item, i) => (
            <TraditionCard
              key={item.name}
              item={item}
              gallery={TRADITION_GALLERIES[i]}
              index={i}
              onOpen={open}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={activeIdx !== null}
        onClose={close}
        photos={activeIdx !== null ? (TRADITION_GALLERIES[activeIdx]?.photos || []) : []}
        index={photoIdx}
        onIndexChange={setPhotoIdx}
        title={activeIdx !== null ? t.traditions.list[activeIdx]?.name : ""}
        subtitle={activeIdx !== null ? t.traditions.list[activeIdx]?.region : ""}
      />
    </section>
  );
}
