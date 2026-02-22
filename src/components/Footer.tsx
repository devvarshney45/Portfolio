import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, index) => {
          gsap.to(particle, {
            y: -30,
            x: Math.random() * 40 - 20,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.5,
          });
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-16 px-6 border-t border-gray-700 overflow-hidden"
    >
      {/* Floating Particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none opacity-20"
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full blur-sm" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full blur-sm" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary rounded-full blur-sm" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full blur-sm" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* ABOUT */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Dev Varshney
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Backend-focused MERN Stack Developer passionate about building
              secure, scalable, and production-ready systems with clean
              architecture and modern technologies.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/devvarshney45"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition"
              >
                <GithubLogo size={18} className="text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/dev-varshney-837390325"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition"
              >
                <LinkedinLogo size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3 text-gray-400">
              <button
                onClick={() => scrollToSection("hero")}
                className="block hover:text-primary transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block hover:text-primary transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block hover:text-primary transition"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block hover:text-primary transition"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="text-primary font-medium">Email:</span><br />
                varshneydev365@gmail.com
              </p>
              <p>
                <span className="text-primary font-medium">Location:</span><br />
                Ghaziabad, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>
            © 2026 Dev Varshney. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:scale-105 transition"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;