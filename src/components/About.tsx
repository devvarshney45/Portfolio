import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Database,
  Terminal,
  Cloud,
  GitBranch,
  ShieldCheck,
  Stack,
  Cube,
} from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: Code, name: "C++ (DSA)", level: 90 },
    { icon: Code, name: "JavaScript (ES6+)", level: 92 },
    { icon: Stack, name: "React.js", level: 90 },
    { icon: Terminal, name: "Node.js / Express", level: 93 },
    { icon: Database, name: "MongoDB", level: 90 },
    { icon: Cloud, name: "AWS EC2", level: 85 },
    { icon: Cube, name: "Docker", level: 75 },
    { icon: ShieldCheck, name: "JWT / Security", level: 90 },
    { icon: GitBranch, name: "Git & GitHub", level: 88 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll(".fade"), {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* PHOTO */}
          <div className="flex justify-center fade">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img
                src="/yourphoto.jpg"
                alt="Dev Varshney"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="fade">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6" />

            <p className="text-gray-400 leading-relaxed mb-4">
              Backend-focused MERN Stack Developer and 2nd Year B.Tech CSE student (CGPA 9.2)
              with strong foundations in Data Structures & Algorithms.
              I design secure, scalable REST APIs and production-ready systems.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              Built high-traffic backend systems handling 800+ users with JWT authentication,
              role-based access control, rate limiting, reCAPTCHA security,
              and AWS EC2 deployment.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Developed Smart Classroom Sync (RBAC architecture)
              and a real-world MERN e-commerce platform.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-primary font-medium">
                9.2 CGPA
              </div>
              <div className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-primary font-medium">
                800+ Users
              </div>
              <div className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-primary font-medium">
                RBAC Architecture
              </div>
              <div className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-primary font-medium">
                AWS Deployment
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div>
          <h3 className="text-3xl font-light text-center mb-12 fade">
            Technical <span className="text-primary">Skills</span>
          </h3>

          <div
            ref={skillsRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="fade bg-gray-900 border border-gray-700 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <skill.icon size={22} className="text-white" />
                  </div>

                  <h4 className="text-white font-medium">
                    {skill.name}
                  </h4>

                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <span className="text-primary text-sm font-medium">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;