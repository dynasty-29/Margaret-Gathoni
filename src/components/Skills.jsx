import { useState, useEffect, useRef } from "react";
import { FaPython } from "react-icons/fa";
import { SiFlask, SiDjango, SiFlutter, SiMysql, SiPostgresql, SiSqlite, SiDocker, SiJenkins, SiPytorch} from "react-icons/si";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa6";
import { 
  FaChartLine,
  FaLanguage,
  FaRobot
} from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";

const skills = {
  "Languages & Frameworks": [
    { name: "Python", level: 95, icon: FaPython, color: "from-blue-400 to-yellow-400", description: "Backend development & Data Science" },
    { name: "Flask", level: 90, icon: SiFlask, color: "from-gray-700 to-gray-900", description: "RESTful API development" },
    { name: "Django", level: 85, icon: SiDjango, color: "from-green-600 to-green-800", description: "Full-stack web applications" },
    { name: "ReactJS", level: 90, icon: RiReactjsFill, color: "from-cyan-400 to-blue-500", description: "Modern UI development" },
    { name: "NextJS", level: 85, icon: RiNextjsFill, color: "from-gray-800 to-black", description: "Server-side rendering" },
    { name: "Flutter", level: 80, icon: SiFlutter, color: "from-blue-400 to-cyan-500", description: "Cross-platform mobile" },
    { name: "React Native", level: 80, icon: TbBrandReactNative, color: "from-blue-500 to-purple-500", description: "Native mobile apps" },
  ],
  "Databases": [
    { name: "MySQL", level: 90, icon: SiMysql, color: "from-blue-500 to-orange-400", description: "Relational database design" },
    { name: "PostgreSQL", level: 85, icon: SiPostgresql, color: "from-blue-600 to-blue-800", description: "Advanced SQL queries" },
    { name: "SQLite", level: 80, icon: SiSqlite, color: "from-yellow-600 to-yellow-800", description: "Embedded databases" },
  ],
  "Cloud & DevOps": [
    { name: "Docker", level: 85, icon: SiDocker, color: "from-blue-400 to-blue-600", description: "Containerization" },
    { name: "Jenkins", level: 60, icon: SiJenkins, color: "from-red-500 to-gray-700", description: "CI/CD pipelines" },
    { name: "Azure", level: 75, icon: VscAzure, color: "from-blue-500 to-cyan-400", description: "Cloud infrastructure" },
    { name: "AWS", level: 80, icon: FaAws, color: "from-yellow-400 to-orange-500", description: "Cloud services" },
  ],
  "Data & AI": [
    { name: "Power BI", level: 90, icon: FaChartLine, color: "from-yellow-400 to-orange-500", description: "Business intelligence" },
    { name: "Tableau", level: 85, icon: FaChartLine, color: "from-blue-400 to-orange-400", description: "Data visualization" },
    { name: "EDA", level: 90, icon: FaChartLine, color: "from-purple-500 to-pink-500", description: "Exploratory analysis" },
    { name: "PyTorch", level: 70, icon: SiPytorch, color: "from-red-600 to-red-800", description: "Deep learning framework" },
    { name: "Machine Learning", level: 85, icon: FaBrain, color: "from-indigo-500 to-purple-600", description: "Predictive modeling" },
    { name: "NLP", level: 80, icon: FaLanguage, color: "from-green-500 to-teal-500", description: "Natural language processing" },
    { name: "Deep Learning", level: 80, icon: FaRobot, color: "from-purple-600 to-pink-600", description: "Neural networks" },
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Languages & Frameworks");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate total skills
  const totalSkills = Object.values(skills).flat().length;
  const avgProficiency = Math.round(
    Object.values(skills).flat().reduce((sum, skill) => sum + skill.level, 0) / totalSkills
  );

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-20 px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-sm font-semibold text-purple-300">Technical Arsenal</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, cloud infrastructure, 
            and cutting-edge AI/ML technologies
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(skills).map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "text-white scale-105"
                  : "text-gray-400 hover:text-white"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {activeCategory === category && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-50"></div>
                </>
              )}
              {activeCategory !== category && (
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-all"></div>
              )}
              <span className="relative z-10 flex items-center gap-2">
                {category}
                <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                  {skills[category].length}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skills[activeCategory].map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Icon and Name */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-3xl text-white" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {skill.level}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">%</span>
                    </div>
                  </div>

                  {/* Skill Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {skill.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Proficiency</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${
                              i < Math.floor(skill.level / 20)
                                ? `bg-gradient-to-r ${skill.color}`
                                : "bg-white/10"
                            }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                          transitionDelay: hoveredSkill === skill.name ? `${index * 50}ms` : '0ms'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>

                  {/* Hover badge */}
                  <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${skill.color} text-white text-xs font-bold px-3 py-1 rounded-full transform transition-all duration-300 ${
                    hoveredSkill === skill.name ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}>
                    Expert
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {totalSkills}+
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Technologies</div>
              <div className="mt-2 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {avgProficiency}%
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Avg Proficiency</div>
              <div className="mt-2 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                6+
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Years Experience</div>
              <div className="mt-2 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Projects</div>
              <div className="mt-2 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "AWS Cloud Practitioner", color: "from-orange-500 to-yellow-500" },
              { name: "Kaggle BIPOC Grant Program", color: "from-blue-500 to-cyan-500" },
              { name: "Full Stack Development", color: "from-purple-500 to-pink-500" }
            ].map((cert, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className="relative bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 group-hover:border-white/20 transition-all">
                  <span className="text-gray-300 font-medium">🏆 {cert.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;