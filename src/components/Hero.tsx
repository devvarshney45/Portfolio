import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, DownloadSimple, RocketLaunch } from "phosphor-react";
import { Button } from "./ui/button";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);
  const orbRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

    gsap.to(orbRef1.current, {
      y: -20,
      x: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(orbRef2.current, {
      y: -30,
      x: -15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1,
    });

    gsap.to(orbRef3.current, {
      y: -25,
      x: 20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 2,
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/My-Resume.pdf"; // Put your real resume in public folder
    link.download = "My-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Orbs */}
      <div
        ref={orbRef1}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl"
      />
      <div
        ref={orbRef2}
        className="absolute top-1/3 right-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
      />
      <div
        ref={orbRef3}
        className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-xl"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Dev Varshney
          </span>
          <br className="hidden md:block" />
          <span className="text-primary">
            Backend & MERN Stack Developer
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          2nd Year B.Tech CSE (CGPA 9.2) building secure and scalable backend
          systems. Experienced in MERN stack, AWS EC2 deployment, role-based
          architecture, and handling 800+ users with advanced security layers.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-all duration-300"
            size="lg"
          >
            <RocketLaunch size={20} />
            Open to Internship
          </Button>

          <Button
            onClick={downloadCV}
            variant="outline"
            className="inline-flex items-center gap-3 px-8 py-4 border-primary/40 text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <DownloadSimple size={20} />
            Download Resume
          </Button>

          <Button
            onClick={scrollToProjects}
            variant="ghost"
            className="inline-flex items-center gap-3 px-8 py-4 hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-105"
            size="lg"
          >
            View Projects
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;