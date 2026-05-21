import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, GraduationCap, Heart } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Gratitude() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  if (!t.gratitude) return null;

  return (
    <section
      id="gratitude"
      data-testid="gratitude-section"
      className="relative py-32 md:py-40 bg-[#040605] overflow-hidden"
    >
      {/* Ambient flag-color glows + Spain/Algeria color tint */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/8 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[600px] h-[500px] rounded-full bg-[#047857]/8 blur-[140px] pointer-events-none" />

      {/* Background massive school name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-[14vw] md:text-[10vw] font-light text-white/[0.025] tracking-[0.05em] leading-none whitespace-nowrap">
          CEPA · RÍO TAJO
        </span>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <GraduationCap size={18} className="text-[#D4AF37]" strokeWidth={1.4} />
            <div className="w-8 h-px bg-[#D4AF37]" />
          </div>

          <span className="eyebrow">{t.gratitude.eyebrow}</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white mt-6 leading-[0.95]">
            {t.gratitude.title}
          </h2>
          <p className="font-serif text-2xl md:text-3xl text-[#D4AF37] italic mt-5">
            {t.gratitude.school}
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-16 glass-dark p-10 md:p-16 relative"
          data-testid="gratitude-card"
        >
          <Quote
            size={48}
            className="text-[#D4AF37]/40 absolute -top-6 left-10"
            strokeWidth={1}
            fill="currentColor"
          />

          <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed italic">
            {t.gratitude.message}
          </p>

          <div className="mt-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center">
                <Heart size={16} className="text-[#D4AF37]" strokeWidth={1.4} fill="currentColor" />
              </div>
              <div>
                <p className="font-serif text-xl text-white">Houari</p>
                <p className="eyebrow text-[10px] mt-1">{t.gratitude.studentLabel}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-neutral-400">
              <span>España</span>
              <div className="w-px h-4 bg-white/20" />
              <span>{t.gratitude.year}</span>
              <div className="w-px h-4 bg-white/20" />
              <span>Argelia</span>
            </div>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {t.gratitude.pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.1 }}
              data-testid={`gratitude-pillar-${i}`}
              className="glass p-7 text-center group hover:border-[#D4AF37]/40 transition-colors duration-500"
            >
              <p className="font-serif text-3xl text-[#D4AF37] group-hover:scale-110 transition-transform duration-500 inline-block">
                {p.icon}
              </p>
              <h4 className="font-serif text-xl text-white mt-3">{p.title}</h4>
              <p className="text-sm text-neutral-300 font-light leading-relaxed mt-3">{p.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Final signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-center mt-16"
        >
          <p className="font-serif text-3xl md:text-4xl italic text-white">
            {t.gratitude.signature}
          </p>
          <p className="eyebrow mt-4">{t.gratitude.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
