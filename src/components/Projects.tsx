import { GithubLogo, Globe, ArrowUpRight } from "phosphor-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "Full-Stack & AI",
      title: "Samadhan Setu (Govt. of Jharkhand)",
      description: "AI lead-assignment engine for citizen complaints with geolocating routing. Integrated Groq LLM for NLP and FAISS + HuggingFace for vector search to detect duplicates and suggest stakeholders. Real-time translation pipeline for 11+ Indian languages. Scaled Node.js backend with Redis caching and RBAC.",
      tech: ["React.js", "Node.js", "Python", "FastAPI", "Redis", "Groq LLM", "FAISS"],
      githubUrl: "https://github.com/devvarshney45/SIH-26.git",
      liveUrl: "https://sih-26-lyart.vercel.app/",
    },
    {
      id: 2,
      category: "Full-Stack",
      title: "AstroMadhupriya Portal",
      description: "Architected a heavy microservices backend with Redis caching and rate limiting to serve thousands of visitors. Integrated Razorpay for payments and built an admin portal (RBAC) with CMS for blogs, bookings, and SEO-optimized Next.js pages.",
      tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Razorpay"],
      githubUrl: "https://github.com/devvarshney45/astromadhupriya",
      liveUrl: "https://www.astromadhupriya.com/",
    },
    {
      id: 3,
      category: "Full-Stack",
      title: "Swayamfin CRM",
      description: "Built the complete fintech LSP platform from scratch — React.js frontend, admin CRM, and Spring Boot backend. Designed 20+ REST APIs and automated lead routing with JWT-based RBAC, fully compliant with RBI and DPDP regulations.",
      tech: ["Spring Boot", "React.js", "MongoDB", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/devvarshney45/swayamfin",
      liveUrl: "https://www.swayamfin.com/",
    },
    {
      id: 4,
      category: "Frontend",
      title: "Team Conatus Official Website",
      description: "Designed a premium CRED-inspired UI society website featuring GSAP animations, glassmorphism navbar, and custom cursor. Built dynamic member directory with lazy-loaded WebP images for optimal performance.",
      tech: ["JavaScript", "GSAP", "Vite", "AWS Amplify"],
      githubUrl: "",
      liveUrl: "https://teamconatus.com/",
    },
    {
      id: 5,
      category: "Full-Stack",
      title: "Skribbl.io Arena",
      description: "Built a full-stack multiplayer drawing & guessing game in 12 hours with bots, live shared canvas, turn management, and reconnection. Used Socket.IO for real-time state sync across concurrent players on AWS EC2.",
      tech: ["React.js", "Node.js", "Socket.io", "PostgreSQL", "AWS EC2"],
      githubUrl: "https://github.com/devvarshney45/skribbl-clone",
      liveUrl: "https://skribbl.devvarshney.me/",
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Portfolio Highlights</p>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
            Featured <span className="text-primary font-medium italic">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-900/40 border border-gray-800 rounded-[2rem] p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col reveal reveal-scale reveal-delay-${(index % 6) + 1}`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-gray-800/50 border border-gray-700/50 text-gray-500 text-[10px] rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTION LINKS MOVED TO BOTTOM */}
              <div className="flex gap-4 pt-6 mt-auto border-t border-gray-800/50">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-xs font-semibold group/link"
                  >
                    <GithubLogo size={18} />
                    <span>View Code</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-all" />
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-xs font-semibold group/link"
                  >
                    <Globe size={18} />
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-all" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;