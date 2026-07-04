import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 px-6 border-t border-gray-900 bg-black overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16 reveal">

          {/* ABOUT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Dev Varshney
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Architecting secure backend systems and high-performance full-stack 
              applications. Specialized in Java, Spring Boot, and AWS.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/devvarshney45"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary transition-all group"
              >
                <GithubLogo size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://linkedin.com/in/dev-varshney"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary transition-all group"
              >
                <LinkedinLogo size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3 text-gray-500 text-sm">
              <button onClick={() => scrollToSection("hero")} className="text-left hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection("experience")} className="text-left hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection("about")} className="text-left hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection("projects")} className="text-left hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection("skills")} className="text-left hover:text-primary transition-colors">Skills</button>
            </nav>
          </div>

          {/* STATUS */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Current Status
            </h4>
            <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400 font-medium tracking-tight">Available for Internships</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Relocation available for top-tier roles across India or Remote globally.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-6 reveal">
          <div className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-medium">
            © 2026 Dev Varshney • Built with React & Spring Boot Mindset
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-6 py-2 bg-gray-900 border border-gray-800 text-white text-xs font-bold rounded-full hover:border-primary/50 transition-all shadow-lg"
          >
            TOP <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;