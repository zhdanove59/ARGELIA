import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { PEOPLE_IMAGES } from "../data/media";

function PersonCard({ person, image, index, onOpen }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const initials = person.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <motion.button
      ref={ref}
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      data-testid={`person-card-${index}`}
      className="group relative overflow-hidden text-left aspect-[3/4] glass-dark"
    >
      {/* Image or abstract */}
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center cinematic-img"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A110D] via-[#050505] to-[#1a1410]" />
          <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 rounded-full bg-[#D4AF37]/15 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 rounded-full bg-[#047857]/15 blur-3xl" />
          <span className="absolute inset-0 flex items-center justify-center font-serif text-[14rem] text-white/[0.06] leading-none">
            {initials}
          </span>
          <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] text-[#D4AF37]/80">
            ✦
          </div>
        </div>
      )}
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-700" />

      {/* Number */}
      <span className="absolute top-6 left-6 eyebrow text-white/60">
        / {String(index + 1).padStart(2, "0")}
      </span>

      {/* Hover indicator */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <ArrowUpRight size={16} className="text-white" strokeWidth={1.4} />
      </div>

      {/* Bottom info */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <span className="eyebrow">{person.role}</span>
        <h3 className="font-serif text-2xl md:text-3xl text-white mt-3 leading-tight">
          {person.name}
        </h3>
        <motion.p
          className="text-sm text-neutral-300 mt-4 font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
        >
          {person.bio}
        </motion.p>
      </div>
    </motion.button>
  );
}

export default function FamousPeople() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [active, setActive] = useState(null);

  return (
    <section
      id="people"
      data-testid="people-section"
      className="relative py-32 md:py-40 bg-[#070707]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-8 mb-20 items-end"
        >
          <div>
            <span className="eyebrow">{t.people.eyebrow}</span>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-white mt-6 leading-none">
              {t.people.title}
            </h2>
          </div>
          <p className="text-neutral-300 font-light max-w-md md:justify-self-end">
            {t.people.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.people.list.map((p, i) => (
            <PersonCard
              key={p.name}
              person={p}
              image={PEOPLE_IMAGES[i]?.photos?.[0]}
              index={i}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-xl flex items-center justify-center p-6"
          data-testid="person-modal"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full glass-dark border-white/10 p-8 md:p-12 grid md:grid-cols-2 gap-10"
          >
            {PEOPLE_IMAGES[active]?.photos?.[0] ? (
              <div
                className="aspect-[3/4] bg-cover bg-center"
                style={{ backgroundImage: `url(${PEOPLE_IMAGES[active].photos[0]})` }}
              />
            ) : (
              <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-[#0A110D] via-[#050505] to-[#1a1410] flex items-center justify-center">
                <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 rounded-full bg-[#D4AF37]/20 blur-3xl" />
                <div className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 rounded-full bg-[#047857]/20 blur-3xl" />
                <span className="font-serif text-[12rem] text-white/10 leading-none">
                  {t.people.list[active].name.split(" ").map((w) => w[0]).slice(0,2).join("")}
                </span>
              </div>
            )}
            <div>
              <span className="eyebrow">{t.people.list[active].role}</span>
              <h3 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6 leading-none">
                {t.people.list[active].name}
              </h3>
              <div className="w-12 h-px bg-[#D4AF37] mb-6" />
              <p className="text-neutral-200 leading-relaxed mb-6 font-light">
                {t.people.list[active].bio}
              </p>
              <p className="text-[#D4AF37] italic font-serif text-lg">
                {t.people.list[active].legacy}
              </p>
              <button
                onClick={() => setActive(null)}
                data-testid="person-modal-close"
                className="mt-10 text-xs tracking-[0.3em] uppercase text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors"
              >
                ✕ Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
