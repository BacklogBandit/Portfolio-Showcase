import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile.jpeg";

function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const waveLayers = [
      { amplitude: 70, frequency: 0.006, phase: 0.0,  speed: 0.18, yRatio: 0.88, color: "rgba(8, 10, 32, 0.98)" },
      { amplitude: 55, frequency: 0.008, phase: 1.8,  speed: 0.28, yRatio: 0.80, color: "rgba(18, 22, 62, 0.85)" },
      { amplitude: 42, frequency: 0.010, phase: 3.6,  speed: 0.38, yRatio: 0.73, color: "rgba(34, 40, 95, 0.70)" },
      { amplitude: 30, frequency: 0.013, phase: 5.2,  speed: 0.50, yRatio: 0.66, color: "rgba(60, 68, 140, 0.50)" },
      { amplitude: 22, frequency: 0.016, phase: 2.5,  speed: 0.65, yRatio: 0.59, color: "rgba(100, 108, 180, 0.35)" },
      { amplitude: 16, frequency: 0.020, phase: 0.9,  speed: 0.80, yRatio: 0.52, color: "rgba(178, 181, 224, 0.22)" },
      { amplitude: 11, frequency: 0.024, phase: 4.0,  speed: 1.00, yRatio: 0.46, color: "rgba(197, 173, 197, 0.16)" },
    ];

    const startTime = performance.now();

    const draw = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const scroll = scrollRef.current;
      const xShift = scroll * 0.55;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const layer of waveLayers) {
        const baseY = canvas.height * layer.yRatio;

        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 2) {
          const wx = x - xShift;
          const y =
            baseY +
            layer.amplitude * Math.sin(wx * layer.frequency + layer.phase + elapsed * layer.speed) +
            (layer.amplitude * 0.35) * Math.sin(wx * layer.frequency * 1.7 + elapsed * layer.speed * 0.6);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fillStyle = layer.color;
        ctx.fill();

        const crestY =
          baseY +
          layer.amplitude * Math.sin((canvas.width * 0.35 - xShift) * layer.frequency + layer.phase + elapsed * layer.speed);

        const foamGrad = ctx.createLinearGradient(0, crestY - 4, 0, crestY + 4);
        foamGrad.addColorStop(0, "rgba(197, 173, 197, 0.0)");
        foamGrad.addColorStop(0.5, `rgba(220, 210, 230, ${layer.amplitude / 500})`);
        foamGrad.addColorStop(1, "rgba(197, 173, 197, 0.0)");

        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 2) {
          const wx = x - xShift;
          const y =
            baseY +
            layer.amplitude * Math.sin(wx * layer.frequency + layer.phase + elapsed * layer.speed) +
            (layer.amplitude * 0.35) * Math.sin(wx * layer.frequency * 1.7 + elapsed * layer.speed * 0.6);
          if (x === 0) ctx.moveTo(x, y - 1.5);
          else ctx.lineTo(x, y - 1.5);
        }
        ctx.strokeStyle = `rgba(197, 173, 197, ${layer.amplitude / 420})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 360], [1, 0]);
  const heroY = useTransform(scrollY, [0, 360], [0, -40]);

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(175deg, #080a20 0%, #0d1030 35%, #111216 100%)" }}
    >
      <WaveCanvas />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 65% 35%, rgba(178,181,224,0.07) 0%, transparent 65%), radial-gradient(ellipse 35% 45% at 15% 65%, rgba(197,173,197,0.06) 0%, transparent 55%)",
          zIndex: 1,
        }}
      />
      <motion.div
        style={{ zIndex: 2, opacity: heroOpacity, y: heroY } as any}
        className="relative w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-24 flex flex-col md:flex-row items-center gap-14 md:gap-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 min-w-0"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium tracking-[0.25em] uppercase mb-5"
            style={{ color: "#B2B5E0", opacity: 0.5 }}
          >PORTFOLIO</motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5"
          >
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(120deg, #C5ADC5 0%, #B2B5E0 100%)" }}>
              Samarjeet
            </span>
            <br />
            <span className="text-foreground/90">Sharma</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-display text-lg md:text-xl font-medium mb-7 tracking-wide"
            style={{ color: "#C5ADC5", opacity: 0.70 }}
          >
            AI Product Manager.  Systems Architect.  Growth Specialist.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-foreground/50 leading-relaxed mb-10 max-w-lg"
          >
            Building intelligent scalable products with a consumer first mindset.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <a
              href="#work"
              data-testid="cta-view-work"
              className="px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #C5ADC5 0%, #B2B5E0 100%)",
                color: "#111216",
              }}
            >Explore my work</a>
            <a
              href="#contact"
              data-testid="cta-contact"
              className="px-7 py-3 rounded-lg text-sm font-semibold text-foreground/70 tracking-wide transition-all duration-300 hover:text-white glass-card"
              style={{ borderColor: "rgba(197,173,197,0.25)" }}
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-full md:w-[360px]"
        >
          <div className="glass-card rounded-2xl overflow-hidden" style={{ border: "1px solid #2a2c38" }}>
            <div className="flex items-center px-4 py-3 bg-[#111216]/50 border-b border-[#2a2c38]">
              <div className="flex gap-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#eab308]" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
              </div>
              <span className="text-xs text-slate-500 font-mono">samarjeet.sh</span>
            </div>

            <div className="p-6 font-mono text-sm leading-loose relative">
              <div><span style={{ color: "#C5ADC5" }}>$</span> <span className="text-slate-300">whoami</span></div>
              <div>&nbsp;</div>
              <div style={{ color: "#B2B5E0" }}>→ AI Product Manager</div>
              <div className="text-slate-400">→ Founding PM @ SuperAGI</div>
              <div className="text-slate-400">→ 0-to-1 Builder</div>
              <div>&nbsp;</div>
              <div><span style={{ color: "#C5ADC5" }}>$</span> <span className="text-slate-300">ls ./skills</span></div>
              <div>&nbsp;</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-xs" style={{ background: "rgba(197,173,197,0.1)", border: "1px solid rgba(197,173,197,0.25)", color: "#C5ADC5" }}>Opportunity Sizing</span>
                <span className="px-2 py-1 rounded text-xs" style={{ background: "rgba(197,173,197,0.1)", border: "1px solid rgba(197,173,197,0.25)", color: "#C5ADC5" }}>Product Strategy</span>
                <span className="px-2 py-1 rounded text-xs" style={{ background: "rgba(197,173,197,0.1)", border: "1px solid rgba(197,173,197,0.25)", color: "#C5ADC5" }}>Data Pipelines</span>
              </div>
              <div>&nbsp;</div>
              <div><span style={{ color: "#C5ADC5" }}>$</span> <span className="text-slate-300">status</span></div>

              <img
                src={profilePhoto}
                alt="Samarjeet Sharma"
                className="absolute bottom-4 right-4 w-24 h-24 rounded-xl object-cover"
                style={{ border: "2px solid rgba(197,173,197,0.35)" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/20 animate-bounce"
        style={{ zIndex: 2 }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
