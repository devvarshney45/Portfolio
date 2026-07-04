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
  Cpu
} from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".group");
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { icon: Stack, name: "Java / Spring Boot", level: 92 },
    { icon: Cpu, name: "C++ / Data Structures", level: 90 },
    { icon: Terminal, name: "Node.js / Express.js", level: 93 },
    { icon: Code, name: "React / TypeScript", level: 90 },
    { icon: Database, name: "PostgreSQL / MongoDB", level: 88 },
    { icon: Cloud, name: "AWS EC2 / Linux / PM2", level: 85 },
    { icon: ShieldCheck, name: "JWT / REST APIs / Security", level: 92 },
    { icon: Cube, name: "Socket.io / Real-time", level: 88 },
    { icon: GitBranch, name: "Git / GitHub / CI-CD", level: 90 },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Core Expertise</p>
          <h2 className="text-4xl md:text-5xl font-light">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon size={24} className="text-primary" />
                </div>
                <h4 className="text-white font-semibold text-base">{skill.name}</h4>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="flex justify-between mt-3 text-xs">
                <span className="text-gray-500">Mastery</span>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
