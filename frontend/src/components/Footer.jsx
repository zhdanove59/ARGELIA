import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Github, Linkedin, Mail, Music2 } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const socials = [
  { name: "Instagram", icon: Instagram, href: "#", id: "instagram" },
  { name: "TikTok", icon: Music2, href: "#", id: "tiktok" },
  { name: "LinkedIn", icon: Linkedin, href: "#", id: "linkedin" },
  { name: "GitHub", icon: Github, href: "#", id: "github" },
  { name: "Email", icon: Mail, href: "mailto:#", id: "email" },
];

export default function Footer() {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <footer
      data-testid="footer-section"
      className="relative pt-32 pb-12 bg-[#040605] overflow-hidden"
    >
      {/* Background massive text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-[18vw] md:text-[14vw] font-light text-white/[0.03] tracking-[0.05em] leading-none whitespace-nowrap">
          ARGELIA
        </span>
      </div>

      {/* Gold ambient */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#D4AF37]/8 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="eyebrow">{t.footer.presented}</span>
          <h3 className="font-serif text-6xl md:text-8xl text-white mt-4 leading-none">
            {t.footer.name}
          </h3>
          <div className="section-divider my-10" />
          <p className="text-neutral-300 italic font-serif text-xl md:text-2xl leading-relaxed">
            "{t.footer.tagline}"
          </p>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-8"
        >
          <span className="eyebrow">{t.footer.connect}</span>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-testid={`social-${s.id}`}
                  className="group relative w-14 h-14 border border-white/10 hover:border-[#D4AF37] transition-all duration-500 flex items-center justify-center"
                >
                  <Icon size={18} className="text-white group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.4} />
                  <span className="absolute -bottom-7 text-[10px] tracking-[0.2em] uppercase text-white/0 group-hover:text-white/60 transition-all duration-500">
                    {s.name}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom strip */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-[0.2em] uppercase text-white/40">
          <div className="flex items-center gap-3">
            <div className="w-2 h-6 flag-bar" />
            <span>ARGELIA · الجزائر</span>
          </div>
          <p>{t.footer.copyright}</p>
          <p>QR · 2025</p>
        </div>
      </div>
    </footer>
  );
}
