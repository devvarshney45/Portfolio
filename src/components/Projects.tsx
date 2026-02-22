import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, Globe } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 3,
      title: "PANKAJ ELECTRICALS – MERN E-Commerce",
      description:
        "Full-stack MERN e-commerce platform with Google Login, Admin Dashboard & JWT authentication. Built for real business digitization.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
      githubUrl: "https://github.com/devvarshney45/PANKAJ-ELECTRICALS",
      liveUrl: "https://pankaj-electricals.vercel.app/",
    },
    {
      id: 2,
      title: "Society Event Registration System",
      description:
        "Handled 800+ registrations with security layers like Rate Limiter, Google reCAPTCHA, OTP attempt limits & domain validation.",
      tech: ["Node.js", "Express", "MongoDB", "Rate Limiter", "AWS"],
      githubUrl: "https://github.com/devvarshney45/hackathon-registration-backend",
      liveUrl: "https://hackathon-registration-backend.onrender.com",
    },
    {
      id: 1,
      title: "Smart Classroom Sync System",
      description:
        "Role-based backend system for Teacher Web Portal & Student Mobile App. Built scalable REST APIs with JWT authentication and role-based access control.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "AWS EC2"],
      githubUrl: "https://github.com/devvarshney45/SmartSync",
      liveUrl: "https://testing-p3dv.onrender.com/",
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      gsap.from(containerRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div ref={titleRef} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world backend and full-stack systems focused on scalability,
            security, and deployment.
          </p>
        </div>

        {/* GRID */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Globe size={14} />
                    Live
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <GithubLogo size={14} />
                    Code
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