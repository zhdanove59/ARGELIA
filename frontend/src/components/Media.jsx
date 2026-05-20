import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, Clock } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { MEDIA_THUMBS } from "../data/media";

function VideoCard({ video, image, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.15 }}
      data-testid={`media-card-${index}`}
      className="group relative overflow-hidden aspect-video cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center cinematic-img"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/30 backdrop-blur-md bg-black/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all duration-500"
        >
          <Play size={28} className="text-white ml-1" strokeWidth={1.4} fill="white" />
        </motion.div>
      </div>

      {/* Duration top right */}
      <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1 glass-dark text-[10px] tracking-[0.2em] uppercase text-white">
        <Clock size={10} strokeWidth={1.4} />
        {video.duration}
      </div>

      {/* Title */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <span className="eyebrow text-[10px]">/ {String(index + 1).padStart(2, "0")}</span>
        <h3 className="font-serif text-2xl md:text-3xl text-white mt-2 leading-tight">
          {video.title}
        </h3>
        <p className="text-sm text-neutral-300 mt-2 font-light max-w-md">
          {video.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Media() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="media"
      data-testid="media-section"
      className="relative py-32 md:py-40 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-20 grid md:grid-cols-2 gap-8 items-end"
        >
          <div>
            <span className="eyebrow">{t.media.eyebrow}</span>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-white mt-6 leading-none">
              {t.media.title}
            </h2>
          </div>
          <p className="text-neutral-300 font-light max-w-md md:justify-self-end">
            {t.media.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {t.media.list.map((v, i) => (
            <VideoCard
              key={v.title}
              video={v}
              image={MEDIA_THUMBS[i] || MEDIA_THUMBS[0]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
