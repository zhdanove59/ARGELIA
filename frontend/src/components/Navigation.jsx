import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const sections = [
  { id: "hero", key: "home" },
  { id: "history", key: "history" },
  { id: "people", key: "people" },
  { id: "landscapes", key: "landscapes" },
  { id: "gastronomy", key: "gastronomy" },
  { id: "traditions", key: "traditions" },
  { id: "whyvisit", key: "whyVisit" },
  { id: "map", key: "map" },
  { id: "media", key: "media" },
];

const langLabels = { es: "ES", fr: "FR", en: "EN" };

export default function Navigation() {
  const { t, lang, setLang, available } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        data-testid="main-navigation"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 glass-dark" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            data-testid="nav-logo"
            onClick={() => go("hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-2 h-8 bg-gradient-to-b from-[#047857] to-white" />
            <span className="font-serif text-2xl tracking-[0.25em] text-white">
              ARGELIA
            </span>
          </button>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-9">
            {sections.slice(1).map((s) => (
              <button
                key={s.id}
                data-testid={`nav-link-${s.id}`}
                onClick={() => go(s.id)}
                className="link-underline text-xs uppercase tracking-[0.25em] text-neutral-300 hover:text-white transition-colors"
              >
                {t.nav[s.key]}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Lang switcher */}
            <div className="relative">
              <button
                data-testid="lang-switcher-trigger"
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-[#D4AF37]/60 transition-colors text-xs tracking-[0.2em] text-white"
              >
                <Globe size={14} strokeWidth={1.4} />
                <span>{langLabels[lang]}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 mt-2 w-28 glass-dark border border-white/10"
                  >
                    {available.map((l) => (
                      <button
                        key={l}
                        data-testid={`lang-option-${l}`}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-xs tracking-[0.2em] hover:bg-white/5 transition-colors ${
                          lang === l ? "text-[#D4AF37]" : "text-neutral-200"
                        }`}
                      >
                        {langLabels[l]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu trigger */}
            <button
              data-testid="mobile-menu-trigger"
              className="lg:hidden text-white"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050505]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button data-testid="mobile-menu-close" onClick={() => setOpen(false)} className="text-white">
                <X size={26} strokeWidth={1.4} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-8 pt-12">
              {sections.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  data-testid={`mobile-nav-${s.id}`}
                  onClick={() => go(s.id)}
                  className="font-serif text-3xl text-white tracking-wide"
                >
                  {t.nav[s.key]}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
