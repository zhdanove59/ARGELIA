import { useEffect, useRef } from "react";

// Subtle floating particle field with gold/emerald glow.
export default function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const init = () => {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 28000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -Math.random() * 0.25 - 0.05,
        a: Math.random() * 0.5 + 0.15,
        gold: Math.random() > 0.7,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(212, 175, 55, ${p.a})`
          : `rgba(255, 255, 255, ${p.a * 0.6})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    setSize();
    init();
    draw();
    const onResize = () => {
      setSize();
      init();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      data-testid="particles-canvas"
      className="fixed inset-0 pointer-events-none z-[2] opacity-70"
      aria-hidden="true"
    />
  );
}
