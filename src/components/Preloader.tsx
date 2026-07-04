import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(progressBarRef.current, {
        width: "100%",
        duration: 1.8,
        ease: "power2.out",
      }, "-=0.2")
      .to(
        { value: 0 },
        {
          value: 100,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: function () {
            if (percentRef.current) {
              percentRef.current.textContent =
                Math.round(this.targets()[0].value) + "%";
            }
          },
        },
        "-=1.8"
      )
      .to(preloaderRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          onComplete();
        },
      }, "+=0.2");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black px-6"
    >
      <div className="w-full max-w-sm text-center">
        <div ref={logoRef} className="mb-10">
          <h1 className="text-3xl md:text-5xl font-light mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
              Dev Varshney
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 font-medium tracking-wide">
            Full Stack • Spring Boot • Backend Architect
          </p>
          <p className="text-xs text-gray-600 mt-3 italic opacity-80">
            Initializing Professional Portfolio...
          </p>
        </div>

        <div className="w-full space-y-6">
          <div className="h-[2px] bg-gray-800 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-primary w-0 rounded-full shadow-[0_0_20px_rgba(var(--primary-rgb),0.6)]"
            />
          </div>

          <div
            ref={percentRef}
            className="text-2xl font-mono text-primary font-bold"
          >
            0%
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </div>
  );
};

export default Preloader;