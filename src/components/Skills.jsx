import { useState } from "react";
import { FaPython } from "react-icons/fa";
import { SiFlask, SiDjango, SiFlutter, SiMysql, SiPostgresql, SiSqlite, SiDocker, SiJenkins, SiPytorch} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa6";
import { 
  FaMobileAlt, 
  FaChartLine,
  FaLanguage,
  FaRobot
} from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";


const skills = {
  "Languages & Frameworks": [
    { name: "Python", level: 95, icon: FaPython, color: "from-blue-400 to-yellow-400" },
    { name: "Flask", level: 90, icon: SiFlask, color: "from-gray-700 to-gray-900" },
    { name: "Django", level: 85, icon: SiDjango, color: "from-green-600 to-green-800" },
    { name: "ReactJS", level: 90, icon: RiReactjsFill, color: "from-cyan-400 to-blue-500" },
    { name: "NextJS", level: 85, icon: RiNextjsFill, color: "from-gray-800 to-black" },
    { name: "Flutter", level: 80, icon: SiFlutter, color: "from-blue-400 to-cyan-500" },
    { name: "React Native", level: 80, icon: TbBrandReactNative, color: "from-blue-500 to-purple-500" },
  ],
  "Databases": [
    { name: "MySQL", level: 90, icon: SiMysql, color: "from-blue-500 to-orange-400" },
    { name: "PostgreSQL", level: 85, icon: SiPostgresql, color: "from-blue-600 to-blue-800" },
    { name: "SQLite", level: 80, icon: SiSqlite, color: "from-yellow-600 to-yellow-800" },
  ],
  "CI/CD & DevOps": [
    { name: "Docker", level: 85, icon: SiDocker, color: "from-blue-400 to-blue-600" },
    { name: "Jenkins", level: 60, icon: SiJenkins, color: "from-red-500 to-gray-700" },
    { name: "Azure", level: 75, icon: VscAzure, color: "from-blue-500 to-cyan-400" },
    { name: "AWS", level: 80, icon: FaAws, color: "from-yellow-400 to-orange-500" },
  ],
  "Data Analysis & Science": [
    { name: "Power BI", level: 90, icon: FaMobileAlt, color: "from-yellow-400 to-orange-500" },
    { name: "Tableau", level: 85, icon: FaMobileAlt, color: "from-blue-400 to-orange-400" },
    { name: "EDA and visualization", level: 90, icon: FaChartLine, color: "from-purple-500 to-pink-500" },
    { name: "PyTorch", level: 70, icon: SiPytorch, color: "from-red-600 to-red-800" },
    { name: "Machine Learning", level: 85, icon: FaBrain, color: "from-indigo-500 to-purple-600" },
    { name: "NLP", level: 80, icon: FaLanguage, color: "from-green-500 to-teal-500" },
    { name: "Deep Learning", level: 80, icon: FaRobot, color: "from-purple-600 to-pink-600" },

  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Languages & Frameworks");

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="text-center mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-purple-100 mb-4">
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-gray-700">Technical Expertise</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          A versatile blend of full-stack development, cloud infrastructure, and data science expertise
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-purple-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory].map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Skill Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
                    <p className="text-sm text-gray-500">Proficiency</p>
                  </div>
                </div>

                {/* Progress Circle */}
                <div className="relative w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i < Math.floor(skill.level / 20)
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-100"
                              : "bg-gray-200 scale-75"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl w-full">
        <div className="text-center bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            {Object.values(skills).flat().length}+
          </div>
          <div className="text-sm text-gray-600 font-medium">Technologies</div>
        </div>
        <div className="text-center bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            6+
          </div>
          <div className="text-sm text-gray-600 font-medium">Years Experience</div>
        </div>
        <div className="text-center bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            50+
          </div>
          <div className="text-sm text-gray-600 font-medium">Projects</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;