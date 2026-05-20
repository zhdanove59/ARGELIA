import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "../context/LanguageContext";
import { FLAG_ABSTRACT } from "../data/media";

function EraCard({ era, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      data-testid={`history-era-${index}`}
      className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-28`}
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`${isLeft ? "md:order-1" : "md:order-2"} px-2`}
      >
        <span className="eyebrow">{era.year}</span>
        <h3 className="font-serif text-3xl md:text-5xl text-white mt-3 mb-5 leading-tight">
          {era.title}
        </h3>
        <p className="text-neutral-300 leading-relaxed max-w-md font-light">
          {era.text}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.1, delay: 0.1 }}
        className={`${isLeft ? "md:order-2" : "md:order-1"} relative`}
      >
        <div className="aspect-[4/5] w-full glass relative overflow-hidden">
          <div className="absolute inset-0 flag-bar opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-[10rem] md:text-[14rem] text-white/[0.06] leading-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="w-12 h-px bg-[#D4AF37] mb-3" />
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-300">
              {era.title}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="w-3 h-3 bg-[#D4AF37] rounded-full pulse-gold relative">
          <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-md" />
        </div>
      </div>
    </div>
  );
}

export default function History() {
  const { t } = useLang();
  const { ref: titleRef, inView: titleIn } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: martyrRef, inView: martyrIn } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="history"
      data-testid="history-section"
      className="relative py-32 md:py-40 overflow-hidden bg-[#050505]"
    >
      {/* Background flag texture */}
      <div
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{ backgroundImage: `url(${FLAG_ABSTRACT})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="eyebrow">{t.history.eyebrow}</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white mt-6 leading-none">
            {t.history.title}
          </h2>
          <div className="section-divider mt-8" />
          <p className="text-neutral-300 max-w-2xl mx-auto mt-8 font-light">
            {t.history.subtitle}
          </p>
        </motion.div>

        {/* Vertical timeline line */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />

          {t.history.eras.map((era, i) => (
            <EraCard key={i} era={era} index={i} />
          ))}
        </div>

        {/* Martyrs tribute */}
        <motion.div
          ref={martyrRef}
          initial={{ opacity: 0, y: 30 }}
          animate={martyrIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          data-testid="history-martyrs"
          className="mt-20 md:mt-32 max-w-3xl mx-auto text-center glass p-12 md:p-16 relative"
        >
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-px bg-[#D4AF37]" />
          <span className="eyebrow">In Memoriam</span>
          <p className="font-serif text-5xl md:text-7xl text-[#D4AF37] mt-4 mb-4">
            {t.history.martyrs.number}
          </p>
          <p className="text-neutral-200 italic font-light text-lg max-w-xl mx-auto">
            {t.history.martyrs.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
