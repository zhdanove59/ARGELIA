import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { HERO_IMG } from "../data/media";

export default function Hero() {
  const ref = useRef(null);
  const { t } = useLang();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const scrollDown = () => {
    document.getElementById("history")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      data-testid="hero-section"
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Background image parallax */}
      <motion.div
        style={{ y, backgroundImage: `url(${HERO_IMG})` }}
        className="absolute inset-0 -top-[10%] -bottom-[10%] bg-cover bg-center"
      />
      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent,_rgba(0,0,0,0.5))]" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 md:px-12 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="eyebrow mb-8"
        >
          ★ {t.hero.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-arabolical text-7xl sm:text-8xl md:text-[10rem] lg:text-[13rem] font-light leading-[0.9] tracking-[0.04em] text-white"
          data-testid="hero-title-main"
        >
          {t.hero.title1}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 3.4, duration: 1.2 }}
          className="my-8 w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent origin-center"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 1 }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-neutral-100 italic tracking-wide max-w-3xl"
        >
          {t.hero.title2} <span className="text-[#D4AF37] not-italic">{t.hero.title3}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.9, duration: 1 }}
          className="mt-8 text-sm md:text-base text-neutral-300 font-light max-w-xl tracking-wide"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollDown}
          data-testid="hero-cta-explore"
          className="mt-12 group relative inline-flex items-center gap-3 bg-[#D4AF37] text-black px-10 py-4 text-xs tracking-[0.35em] uppercase font-medium overflow-hidden"
        >
          <span className="relative z-10">{t.hero.cta}</span>
          <span className="relative z-10 w-6 h-px bg-black group-hover:w-10 transition-all duration-500" />
          <div className="absolute inset-0 bg-[#F3E5AB] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="eyebrow text-[10px]">{t.hero.scroll}</span>
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2">
          <span className="w-1 h-2 bg-[#D4AF37] rounded-full scroll-dot" />
        </div>
        <ChevronDown size={16} className="text-white/40" strokeWidth={1.3} />
      </motion.div>

      {/* Side decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 hidden md:flex flex-col items-center gap-4 z-10">
        <span className="text-[10px] tracking-[0.4em] text-white/40 [writing-mode:vertical-rl] rotate-180">
          الجزائر · ALGÉRIE · ARGELIA
        </span>
        <div className="w-px h-24 bg-white/20" />
      </div>
    </section>
  );
}
