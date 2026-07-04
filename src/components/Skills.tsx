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

const Skills = () => {
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
    <section id="skills" className="py-16 md:py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Core Expertise</p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 reveal reveal-scale reveal-delay-${(index % 6) + 1}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon size={24} className="text-primary" />
                </div>
                <h4 className="text-white font-semibold text-base">{skill.name}</h4>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
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
