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
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <div ref={logoRef} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dev Varshney
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Backend • MERN Stack • AWS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Initializing Portfolio...
          </p>
        </div>

        <div className="w-80 max-w-md mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden mb-4">
            <div
              ref={progressBarRef}
              className="h-full bg-primary w-0 rounded-full"
            />
          </div>

          <div
            ref={percentRef}
            className="text-lg font-medium text-primary"
          >
            0%
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </div>
  );
};

export default Preloader;