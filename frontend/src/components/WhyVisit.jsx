import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "../context/LanguageContext";

function formatNumber(n) {
  return n.toLocaleString("es-ES");
}

function Counter({ value, suffix, label, inView, index }) {
  const [val, setVal] = useState(0);
  const rafRef = useRef();

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.floor(eased * value));
      if (t < 1) rafRef.current = requestAnimationFrame(animate);
      else setVal(value);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.15 }}
      data-testid={`why-stat-${index}`}
      className="text-center"
    >
      <p className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#D4AF37] font-light tracking-tight">
        {formatNumber(val)}
        <span className="text-3xl md:text-4xl text-white/80">{suffix}</span>
      </p>
      <div className="w-12 h-px bg-white/20 mx-auto my-5" />
      <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-300 font-light">
        {label}
      </p>
    </motion.div>
  );
}

export default function WhyVisit() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: pRef, inView: pIn } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="whyvisit"
      data-testid="whyvisit-section"
      className="relative py-32 md:py-40 bg-[#040605] overflow-hidden"
    >
      {/* Emerald ambient */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#047857]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="eyebrow">{t.whyVisit.eyebrow}</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white mt-6 leading-none">
            {t.whyVisit.title}
          </h2>
          <div className="section-divider mt-8" />
          <p className="text-neutral-300 max-w-2xl mx-auto mt-6 font-light text-lg">
            {t.whyVisit.subtitle}
          </p>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-28">
          {t.whyVisit.stats.map((stat, i) => (
            <Counter key={i} {...stat} inView={inView} index={i} />
          ))}
        </div>

        {/* Pillars */}
        <div ref={pRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.whyVisit.pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={pIn ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.1 }}
              data-testid={`why-pillar-${i}`}
              className="glass p-8 group hover:border-[#D4AF37]/30 transition-colors duration-500"
            >
              <span className="font-serif text-4xl text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors duration-500">
                0{i + 1}
              </span>
              <h3 className="font-serif text-2xl text-white mt-4 mb-3">{p.title}</h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
