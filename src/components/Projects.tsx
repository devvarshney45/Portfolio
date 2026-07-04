import { GithubLogo, Globe, ArrowUpRight } from "phosphor-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "Full-Stack",
      title: "Skribbl.io Arena",
      description:
        "Built a full-stack real-time multiplayer drawing & guessing game from scratch — both frontend and backend — in 72 hours. Features WebSocket state sync, room management, live canvas, scoring, and reconnection.",
      tech: ["React.js", "Node.js", "Socket.io", "PostgreSQL", "Vercel"],
      githubUrl: "https://github.com/devvarshney45/skribbl-clone",
      liveUrl: "https://skribbl.devvarshney.me/",
    },
    {
      id: 2,
      category: "Full-Stack",
      title: "Swayamfin CRM",
      description:
        "Built the complete fintech LSP platform from scratch — React.js frontend and Spring Boot backend — with admin CRM, agent portal, automated lead routing, and 20+ REST APIs. RBI Fair Practice Code compliant.",
      tech: ["Spring Boot", "Java", "React.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/devvarshney45/swayamfin",
      liveUrl: "https://www.swayamfin.com/",
    },
    {
      id: 2.5,
      category: "Full-Stack",
      title: "AstroMadhupriya Portal",
      description:
        "Designed and built a complete business website from scratch for an astrology consultancy. Features service pages, appointment booking, blog, and contact/lead capture functionality.",
      tech: ["Node.js", "React.js", "Express.js", "MongoDB", "Tailwind"],
      githubUrl: "https://github.com/devvarshney45/astromadhupriya",
      liveUrl: "https://www.astromadhupriya.com/",
    },
    {
      id: 3,
      category: "Backend",
      title: "Registration Backend",
      description:
        "Backend server handling 1,000+ student registrations with team formation logic. Deployed on AWS EC2 achieving 99.5% uptime during live events. Implemented robust security and scaling.",
      tech: ["Spring Boot", "Java", "AWS EC2", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/devvarshney45/registrationsystembackend",
      liveUrl: "",
    },
    {
      id: 4,
      category: "Backend",
      title: "GraphGuardians Scanner",
      description:
        "Tool that fetches and scans GitHub repositories to detect security vulnerabilities, as part of a 4-member team for IIT Delhi Hackathon (Devcation 2026). Specialized in repository vulnerability detection.",
      tech: ["Node.js", "Express.js", "GitHub API", "Graph Analysis"],
      githubUrl: "https://github.com/GraphGuardians/GraphGuardians-backend",
      liveUrl: "",
    },
    {
      id: 5,
      category: "Backend",
      title: "Fintech API Layer",
      description:
        "Specialized backend microservice for Swayamfin Financial Services. Handles 20+ secure REST APIs, automated lead routing workflows, and multi-channel notification queuing.",
      tech: ["Spring Boot", "Java", "PostgreSQL", "RabbitMQ", "AWS SES"],
      githubUrl: "https://github.com/devvarshney45/swayamfin/tree/main/backend",
      liveUrl: "",
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