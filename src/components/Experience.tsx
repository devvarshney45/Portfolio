import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Globe,
  Database
} from "phosphor-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Engineer Intern",
      company: "NavRasa IT Solutions",
      location: "Remote",
      period: "Aug 2026 - Present",
      icon: Briefcase,
      color: "from-blue-400 to-cyan-600",
      description: [
        "Developed a Next.js frontend and the core Spring Boot backend of a real-time client software platform used by thousands of users; designed and consumed REST APIs on a live production codebase.",
        "Integrated Razorpay payments and deployed the backend on AWS EC2, optimizing it for scalability and stable performance under high concurrent traffic."
      ],
      tech: ["Next.js", "Spring Boot", "AWS EC2", "Razorpay"]
    },
    {
      title: "Full Stack Engineer Intern",
      company: "Swayamfin Financial Services",
      location: "Remote, Delhi",
      period: "Apr 2026 - Present",
      icon: ShieldCheck,
      color: "from-blue-500 to-indigo-600",
      description: [
        "Built a production fintech LSP platform end-to-end: React.js frontend, admin CRM, agent portal and Spring Boot backend, compliant with RBI Fair Practice Code and DPDP Act.",
        "Designed 20+ REST APIs and an automated lead-routing engine (city → branch → agent) with SMS/email alerts, removing manual lead assignment."
      ],
      tech: ["Spring Boot", "React.js", "PostgreSQL", "AWS EC2", "RBAC"]
    },
    {
      title: "SDE Intern",
      company: "Prudentia Capital",
      location: "Remote",
      period: "Jul 2026 - Present",
      icon: Database,
      color: "from-emerald-400 to-green-600",
      description: [
        "Built the Next.js frontend and a microservices backend for a production platform, splitting the system into independently deployable services behind an API gateway and load balancer.",
        "Integrated Redis caching for fast reads and Apache Kafka for event-driven, asynchronous service-to-service communication; deployed and maintained the backend on Hostinger."
      ],
      tech: ["Next.js", "Microservices", "Redis", "Apache Kafka"]
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed (AstroMadhupriya)",
      location: "Remote",
      period: "2026",
      icon: Globe,
      color: "from-purple-500 to-pink-600",
      description: [
        "Delivered AstroMadhupriya, a full business platform with Razorpay payments, booking, blog CMS and an admin portal, live at astromadhupriya.com."
      ],
      tech: ["Node.js", "React.js", "Express.js", "MongoDB", "Razorpay"]
    },
    {
      title: "Backend Developer",
      company: "Team Conatus – College Technical Society",
      location: "AKGEC, Ghaziabad",
      period: "Nov 2025 - May 2026",
      icon: Database,
      color: "from-teal-500 to-cyan-600",
      description: [
        "Built the backend for the society and student registration portal, handling thousands of registrations on AWS EC2 with Redis caching and optimized database queries.",
        "Secured APIs with OTP verification, Google reCAPTCHA, Cloudflare and rate limiting to protect the platform from bots, abuse and attacks."
      ],
      tech: ["Node.js", "AWS EC2", "Redis", "Rate Limiting"]
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-6 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 text-center reveal">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-2">Work History</p>
          <h2 className="text-3xl md:text-5xl font-light text-white">
            Professional <span className="text-primary font-medium italic">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-4 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`group relative bg-gray-900/40 border border-gray-800 rounded-3xl p-6 hover:border-primary/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-1 reveal reveal-delay-${index + 1}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} p-3 flex items-center justify-center mb-5`}>
                <exp.icon size={24} className="text-white" />
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white leading-tight min-h-[3rem] flex items-center">
                  {exp.title}
                </h3>
                <div className="text-primary text-sm font-medium mt-1">{exp.company}</div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 border-b border-gray-800 pb-4">
                <div className="flex items-center gap-2 text-gray-500 text-[11px]">
                  <Calendar size={14} /> {exp.period}
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-[11px]">
                  <MapPin size={14} /> {exp.location}
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-400 leading-snug text-sm">
                    <ArrowRight size={12} className="text-primary mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {exp.tech.map((t, ti) => (
                  <span key={ti} className="px-2.5 py-1 bg-gray-800 border border-gray-700/50 rounded-lg text-[10px] text-gray-400 font-medium whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
