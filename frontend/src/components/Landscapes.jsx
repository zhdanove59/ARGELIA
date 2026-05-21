import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Sparkles, ImagePlus } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { LANDSCAPE_GALLERIES } from "../data/media";
import Lightbox from "./Lightbox";

// Bento spans designed to tile cleanly on a 6-col grid (no overlaps).
const spans = [
  "md:col-span-4 md:row-span-2", // 0 Tassili - hero
  "md:col-span-2",                // 1 Ghardaïa
  "md:col-span-2",                // 2 Hoggar
  "md:col-span-3",                // 3 Constantine
  "md:col-span-3",                // 4 Oran
  "md:col-span-2 md:row-span-2",  // 5 Casbah tall
  "md:col-span-4",                // 6 Tipaza wide
  "md:col-span-3",                // 7 Hammam
  "md:col-span-3",                // 8 El Kala
  "md:col-span-3",                // 9 Seraïdi
  "md:col-span-3",                // 10 Hamma
];

function LandscapeCard({ item, index, gallery, factText, onOpen }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const cover = gallery?.photos?.find(Boolean);
  const filled = gallery?.photos?.filter(Boolean).length || 0;
  const total = gallery?.photos?.length || 0;

  return (
    <motion.button
      ref={ref}
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: (index % 5) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      data-testid={`landscape-card-${index}`}
      className={`group relative overflow-hidden text-left ${spans[index] || ""} min-h-[280px] md:min-h-[320px]`}
    >
      {/* Base gradient fallback always present underneath */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#0A110D] to-[#050505]" />
      <div
        className="absolute inset-0 bg-cover bg-center cinematic-img"
        style={{ backgroundImage: `url(${cover})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-700" />

      <div className="absolute top-5 left-5 flex items-center gap-2">
        <MapPin size={12} className="text-[#D4AF37]" strokeWidth={1.5} />
        <span className="eyebrow text-[10px]">{item.region}</span>
      </div>

      {/* Photo count badge */}
      <div className="absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-white/90 border border-white/15 backdrop-blur-md bg-black/30">
        <ImagePlus size={11} strokeWidth={1.4} />
        {filled > 0 ? `${filled}/${total}` : "Próximamente"}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
        <h3 className="font-serif text-2xl md:text-4xl text-white leading-tight">
          {item.name}
        </h3>
        <p className="text-neutral-200 text-sm mt-3 font-light max-w-md leading-relaxed">
          {item.desc}
        </p>
        {factText && (
          <div className="mt-4 flex items-start gap-2 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
            <Sparkles size={14} className="text-[#D4AF37] mt-1" strokeWidth={1.4} />
            <p className="text-xs text-[#F3E5AB] italic font-light">{factText}</p>
          </div>
        )}
      </div>
    </motion.button>
  );
}

export default function Landscapes() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [activeIdx, setActiveIdx] = useState(null);
  const [photoIdx, setPhotoIdx] = useState(0);

  const facts = {
    0: t.landscapes.facts.tassili,
    7: t.landscapes.facts.hammam,
  };

  const open = (i) => { setActiveIdx(i); setPhotoIdx(0); };
  const close = () => setActiveIdx(null);

  return (
    <section
      id="landscapes"
      data-testid="landscapes-section"
      className="relative py-32 md:py-40 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <span className="eyebrow">{t.landscapes.eyebrow}</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white mt-6 leading-none">
            {t.landscapes.title}
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] my-8" />
          <p className="text-neutral-300 font-light text-lg leading-relaxed">
            {t.landscapes.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[240px]">
          {t.landscapes.list.map((item, i) => (
            <LandscapeCard
              key={item.name}
              item={item}
              index={i}
              gallery={LANDSCAPE_GALLERIES[i]}
              factText={facts[i]}
              onOpen={open}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={activeIdx !== null}
        onClose={close}
        photos={activeIdx !== null ? (LANDSCAPE_GALLERIES[activeIdx]?.photos || []) : []}
        index={photoIdx}
        onIndexChange={setPhotoIdx}
        title={activeIdx !== null ? t.landscapes.list[activeIdx]?.name : ""}
        subtitle={activeIdx !== null ? t.landscapes.list[activeIdx]?.region : ""}
      />
    </section>
  );
}
