import {
  GithubLogo,
  DownloadSimple,
  ArrowRight,
  Terminal,
} from "phosphor-react";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/My-Resume.pdf";
    link.download = "Dev-Varshney-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section id="about" className="py-24 px-6 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          
          {/* LEFT COLUMN: Actions */}
          <div className="md:col-span-2 space-y-6 reveal reveal-left">
            <h3 className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-8">Take Action</h3>
            
            <button
              onClick={downloadResume}
              className="w-full group flex items-center justify-between p-6 bg-primary text-white rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20"
            >
              <div className="flex items-center gap-4">
                <DownloadSimple size={28} weight="bold" />
                <div className="text-left">
                  <div className="font-bold text-lg leading-tight">My Resume</div>
                  <div className="text-xs text-white/70 italic">PDF Document</div>
                </div>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://github.com/devvarshney45"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group flex items-center justify-between p-6 bg-gray-900 border border-gray-800 text-white rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <GithubLogo size={28} weight="bold" />
                <div className="text-left">
                  <div className="font-bold text-lg leading-tight">GitHub Profile</div>
                  <div className="text-xs text-gray-500 italic">Open Source & Projects</div>
                </div>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="pt-8 grid grid-cols-3 gap-3">
               <a
                href="https://leetcode.com/u/devvarshney1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-primary/50 transition-all group text-center"
               >
                  <div className="text-primary font-bold text-lg leading-none group-hover:scale-110 transition-transform">168+</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider mt-2">LeetCode</div>
               </a>
               <a
                href="https://www.codechef.com/users/dev045"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-primary/50 transition-all group text-center"
               >
                  <div className="text-primary font-bold text-lg leading-none group-hover:scale-110 transition-transform">Active</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider mt-2">CodeChef</div>
               </a>
               <div className="p-3 bg-gray-900/50 rounded-xl border border-gray-800 text-center">
                  <div className="text-primary font-bold text-lg leading-none">8.5</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider mt-2">CGPA</div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Senior-Level Content */}
          <div className="md:col-span-3 space-y-6 reveal reveal-right">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Backend Focused <br />
              <span className="text-primary font-medium italic">Full Stack Developer</span>
            </h2>
            
            <div className="w-12 md:w-16 h-1 bg-primary rounded-full mb-6 md:mb-8" />

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a 3rd-year B.Tech Student at <span className="text-white font-medium">AKGEC Ghaziabad</span>, 
                currently pushing the boundaries of fintech architecture as a <span className="text-white font-medium">Full Stack Intern @ Swayamfin</span>. 
                I specialize in building secure, scalable backends with <strong>Spring Boot</strong> and <strong>Node.js</strong>.
              </p>
              
              <p>
                My journey includes being a <strong>Payment AI Agent Arena Finalist</strong> and an <strong>IIT Delhi Hackathon Finalist</strong>. I scale applications using 
                <strong>AWS infrastructure</strong> and maintain high security standards (RBI compliance).
              </p>

              <p>
                As a passionate <span className="text-white font-medium">Competitive Programmer</span> 
                and <span className="text-white font-medium">Open Source contributor</span>, I solve complex 
                algorithmic problems and contribute to real-world software on GitHub daily.
              </p>
            </div>

            {/* Achievements - Premium Animated Block */}
            <div className="mt-8 pt-8 border-t border-gray-800/50">
              <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Key Achievements
              </h4>
              <div className="space-y-3">
                <a 
                  href="https://drive.google.com/file/d/1aMBUfZyLTLucAqCdr07zRA4rGYF-e0Ta/view?usp=drivesdk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-gray-900/40 border border-gray-800 rounded-xl hover:border-primary/40 hover:bg-gray-800/50 transition-all duration-300 reveal reveal-bottom"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-medium group-hover:text-primary transition-colors">Payment AI Agent Arena – Finalist</span>
                    <span className="text-xs text-gray-500 mt-1">View Certificate</span>
                  </div>
                  <ArrowRight size={16} className="text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
                
                <a 
                  href="#" 
                  className="group flex items-center justify-between p-4 bg-gray-900/40 border border-gray-800 rounded-xl hover:border-primary/40 hover:bg-gray-800/50 transition-all duration-300 reveal reveal-bottom reveal-delay-1"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-medium group-hover:text-primary transition-colors">IIT Delhi Hackathon Finalist (Devcation 2026)</span>
                    <span className="text-xs text-gray-500 mt-1">Led a 4-member team building GraphGuardians</span>
                  </div>
                  <ArrowRight size={16} className="text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-gray-800/50">
              <div className="flex items-center gap-3">
                <Terminal size={20} className="text-primary" />
                <span className="text-sm font-medium text-gray-300">Spring Boot / Java</span>
              </div>
              <div className="flex items-center gap-3">
                <Terminal size={20} className="text-primary" />
                <span className="text-sm font-medium text-gray-300">AWS / Linux</span>
              </div>
              <div className="flex items-center gap-3">
                <Terminal size={20} className="text-primary" />
                <span className="text-sm font-medium text-gray-300">PostgreSQL / MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;