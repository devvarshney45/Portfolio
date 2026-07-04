import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GithubLogo, LinkedinLogo, InstagramLogo, List, X } from "phosphor-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Experience", id: "experience" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: GithubLogo, url: "https://github.com/devvarshney45" },
    { icon: LinkedinLogo, url: "https://linkedin.com/in/devvarshney" },
    { icon: InstagramLogo, url: "https://instagram.com/devvarshney" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-6 px-4 pointer-events-none">
      {/* Container - Floating Glassmorphic */}
      <div 
        className={`flex items-center justify-between w-full max-w-6xl pointer-events-auto transition-all duration-500 rounded-full px-8 py-3 
        ${isScrolled 
          ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl" 
          : "bg-white/5 backdrop-blur-md border border-white/5 shadow-lg"}`}
      >
        {/* BRAND / LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-black text-black group-hover:scale-110 transition-transform">
            D
          </div>
          <span className="text-white font-bold tracking-tight text-lg hidden sm:block">Dev Varshney</span>
        </div>

        {/* DESKTOP LINKS - CENTERED */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary font-bold"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm font-medium tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* SOCIAL ICONS - RIGHT */}
        <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6 ml-6">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.url} 
              target="_blank" 
              className="text-gray-400 hover:text-primary transition-all hover:scale-110"
            >
              <social.icon size={20} weight="bold" />
            </a>
          ))}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[90] md:hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out
        ${isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-10">
          {navItems.map((item, index) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-4xl text-white font-bold tracking-tight transition-all duration-500 transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <div className={`flex gap-10 mt-16 pt-12 border-t border-white/10 transition-all duration-500 delay-300 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            {socialLinks.map((social, i) => (
              <a key={i} href={social.url} target="_blank" className="text-white/40 hover:text-primary transition-transform">
                <social.icon size={32} weight="bold" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;