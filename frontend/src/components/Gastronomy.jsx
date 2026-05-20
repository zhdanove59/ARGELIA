import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "../context/LanguageContext";
import { GASTRONOMY_IMAGES } from "../data/media";

function DishCard({ dish, image, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1 }}
      data-testid={`dish-${index}`}
      className="group relative overflow-hidden bg-[#0A0A0A] border border-white/5"
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center cinematic-img"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <span className="absolute top-5 left-5 font-serif text-5xl text-white/30 leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-3xl text-white">{dish.name}</h3>
        <div className="w-8 h-px bg-[#D4AF37] my-4 transition-all duration-500 group-hover:w-16" />
        <p className="text-neutral-300 text-sm font-light leading-relaxed">
          {dish.desc}
        </p>
      </div>
    </motion.article>
  );
}

export default function Gastronomy() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="gastronomy"
      data-testid="gastronomy-section"
      className="relative py-32 md:py-40 bg-gradient-to-b from-[#050505] via-[#080807] to-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="eyebrow">{t.gastronomy.eyebrow}</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white mt-6 leading-none">
            {t.gastronomy.title}
          </h2>
          <div className="section-divider mt-8" />
          <p className="text-neutral-300 max-w-2xl mx-auto mt-6 font-light">
            {t.gastronomy.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {t.gastronomy.list.map((dish, i) => (
            <DishCard
              key={dish.name}
              dish={dish}
              image={GASTRONOMY_IMAGES[i] || GASTRONOMY_IMAGES[0]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
