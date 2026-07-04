import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }).from(
      imgRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // BACKGROUND PARTICLES ANIMATION
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: any[] = [];
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const createParticles = () => {
      particles = [];
      const count = 40;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(168, 85, 247, 0.2)"; // Primary color aura
      ctx.strokeStyle = "rgba(168, 85, 247, 0.05)";
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p.x - p2.x)**2 + (p.y - p2.y)**2);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-end overflow-hidden bg-black"
    >
      {/* Dynamic Background Animation (Neural Network / Particles) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      />

      {/* Senior Level Tech Halo / Glow behind Photo */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-[10%] border border-primary/20 rounded-full animate-spin-slow opacity-30" />
        <div className="absolute inset-[20%] border border-secondary/15 rounded-full animate-spin-reverse opacity-20" />
      </div>

      {/* Background Text - Massive Size & Aligned with Image Base */}
      <h1
        ref={titleRef}
        className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 text-[26vw] md:text-[22vw] font-black text-white/[0.08] whitespace-nowrap select-none pointer-events-none leading-[0.7] tracking-tighter z-0"
      >
        Hi! I'm Dev
      </h1>

      {/* Profile Photo - Precisely Aligned to Text Bottom */}
      <div
        ref={imgRef}
        className="relative z-10 w-full h-[95vh] flex justify-center items-end overflow-hidden pb-[13vh]"
      >
        <img
          src="/yourphoto.png"
          alt="Dev Varshney"
          className="h-full w-auto object-contain object-bottom filter brightness-110 contrast-[1.15] saturate-[1.15] drop-shadow-[0_-5px_60px_hsl(var(--primary)/0.5)] select-none pointer-events-none"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-8 z-20 flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary via-primary/20 to-transparent rounded-full animate-bounce" />
        <span className="text-[9px] uppercase tracking-[0.4em] text-primary/60 [writing-mode:vertical-lr] font-bold">Scroll</span>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;