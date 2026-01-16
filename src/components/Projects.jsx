import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaChartLine, FaGamepad, FaRocket } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { MdTrendingUp } from "react-icons/md";

const featuredProjects = {
  "Software Projects": [
    {
      name: "Mama Africa",
      link: "https://your-link-here.com",
      github: "https://github.com/yourusername/mama-africa",
      description: "Comprehensive maternity support platform for African mothers with health tracking, community features, and expert consultation.",
      tags: ["Flask", "React", "Tailwind", "PostgreSQL"],
      type: "web",
      color: "from-pink-500 to-rose-500",
      stats: { users: "500+", features: "15+", rating: "4.8" }
    },
    {
      name: "GlowUp",
      link: "https://your-link-here.com",
      github: "https://github.com/yourusername/glowup",
      description: "Privacy-first menstrual health tracking app with AI-powered cycle predictions and personalized insights.",
      tags: ["React", "Django", "ML", "TypeScript"],
      type: "web",
      color: "from-purple-500 to-indigo-500",
      stats: { accuracy: "95%", users: "1K+", features: "20+" }
    },
    {
      name: "Vendor Portal",
      link: "https://vendorportal.cihebkenya.org/",
      github: "https://github.com/yourusername/vendor-portal",
      description: "Enterprise-grade vendor prequalification & procurement management system for CIHEB-Kenya.",
      tags: ["Django", "PostgreSQL", "REST API", "Docker"],
      type: "web",
      color: "from-blue-500 to-cyan-500",
      stats: { vendors: "100+", contracts: "50+", uptime: "99.9%" }
    },
    {
      name: "NorthStart Systems",
      link: "https://northstartsystems.com/",
      github: "https://github.com/yourusername/northstart",
      description: "Modern ICT & Security solutions company website with integrated project management dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      type: "web",
      color: "from-emerald-500 to-teal-500",
      stats: { clients: "30+", projects: "50+", satisfaction: "98%" }
    },
    {
      name: "Payroll System",
      link: "https://your-link-here.com",
      github: "https://github.com/yourusername/payroll",
      description: "Custom payroll automation system with advanced leave management and HR analytics.",
      tags: ["Flask", "React", "MySQL", "Redis"],
      type: "web",
      color: "from-orange-500 to-amber-500",
      stats: { employees: "200+", accuracy: "100%", automation: "90%" }
    },
  ],

  "Data Science Projects": [
    {
      name: "Clinical NLP Predictor",
      link: "https://github.com/yourusername/clinical-nlp",
      github: "https://github.com/yourusername/clinical-nlp",
      description: "Fine-tuned BERT model predicting clinician responses using advanced ROUGE scoring and sentiment analysis.",
      tags: ["Python", "BERT", "NLP", "PyTorch", "Transformers"],
      type: "data",
      color: "from-violet-500 to-purple-500",
      stats: { accuracy: "92%", dataset: "50K+", f1Score: "0.89" }
    },
    {
      name: "Crypto Market Predictor",
      link: "https://github.com/yourusername/crypto-predictor",
      github: "https://github.com/yourusername/crypto-predictor",
      description: "Advanced time-series prediction using Pearson correlation optimization on cryptocurrency market data.",
      tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      type: "data",
      color: "from-yellow-500 to-orange-500",
      stats: { accuracy: "85%", coins: "10+", predictions: "Daily" }
    },
    {
      name: "Public Health Dashboard",
      link: "https://your-dashboard-link.com",
      github: "https://github.com/yourusername/health-dashboard",
      description: "Comprehensive Power BI dashboard integrating DHIS2, KenyaEMR, and AIMS datasets for healthcare insights.",
      tags: ["Power BI", "Python", "ETL", "SQL"],
      type: "data",
      color: "from-green-500 to-emerald-500",
      stats: { facilities: "15+", records: "100K+", users: "50+" }
    },
  ],

  "Game Development": [
    {
      name: "Black Magic",
      link: "https://your-game-link.com",
      github: "https://github.com/yourusername/black-magic",
      description: "Narrative-driven adventure exploring choice and consequence. Built for Global Game Jam with branching storylines.",
      tags: ["Unity", "C#", "Game Design", "Narrative"],
      type: "game",
      color: "from-red-500 to-pink-500",
      stats: { players: "1K+", rating: "4.5", hours: "5+" }
    },
    {
      name: "Secret Letters",
      link: "https://your-game-link.com",
      github: "https://github.com/yourusername/secret-letters",
      description: "Innovative wordplay puzzle game focusing on communication and storytelling mechanics.",
      tags: ["Unity", "C#", "Puzzle Design", "UI/UX"],
      type: "game",
      color: "from-indigo-500 to-blue-500",
      stats: { puzzles: "50+", rating: "4.7", downloads: "500+" }
    },
  ],
};

const categoryIcons = {
  "Software Projects": FaCode,
  "Data Science Projects": FaChartLine,
  "Game Development": FaGamepad,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Software Projects");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const totalProjects = Object.values(featuredProjects).flat().length;
  const totalTechnologies = [...new Set(Object.values(featuredProjects).flat().flatMap(p => p.tags))].length;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-20 px-6 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className={`relative z-10 w-full max-w-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-semibold text-cyan-300">Featured Work</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project Showcase
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of innovative solutions spanning web development, data science, and interactive experiences
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(featuredProjects).map((category, index) => {
            const IconComponent = categoryIcons[category];
            const count = featuredProjects[category].length;
            return (
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
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-50"></div>
                  </>
                )}
                {activeCategory !== category && (
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-cyan-500/50 transition-all"></div>
                )}
                <span className="relative z-10 flex items-center gap-3">
                  <IconComponent className="text-xl" />
                  {category}
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects[activeCategory].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.color}`}></div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.stats).map(([key, value], idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-2 text-center border border-white/10">
                        <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium rounded-lg">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => project.type === 'web' ? setSelectedProject(project) : window.open(project.link, '_blank')}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.color} text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group`}
                    >
                      <FaRocket className="group-hover:translate-x-1 transition-transform" />
                      {project.type === 'web' ? 'Preview' : 'View'}
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${project.color} transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${project.color} animate-ping`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: totalProjects, label: "Total Projects", icon: FaRocket, color: "from-cyan-500 to-blue-500" },
            { value: Object.keys(featuredProjects).length, label: "Categories", icon: FaCode, color: "from-purple-500 to-pink-500" },
            { value: totalTechnologies, label: "Technologies", icon: HiLightningBolt, color: "from-green-500 to-emerald-500" },
            { value: "98%", label: "Success Rate", icon: MdTrendingUp, color: "from-orange-500 to-yellow-500" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center group-hover:scale-105 transition-transform">
                  <IconComponent className="text-4xl text-gray-400 group-hover:text-white mx-auto mb-3 transition-colors" />
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}+
                  </div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative bg-gradient-to-r ${selectedProject.color} p-1`}>
                <div className="bg-slate-900/90 backdrop-blur-sm p-6 flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h3>
                    <p className="text-gray-300">{selectedProject.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/10 border border-white/20 text-gray-300 text-xs font-medium rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-3 hover:bg-white/10 rounded-xl transition-colors border border-white/10"
                  >
                    <FaTimes className="text-2xl text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Website Preview */}
              <div className="relative w-full h-[70vh] bg-slate-950">
                <iframe
                  src={selectedProject.link}
                  className="w-full h-full border-0"
                  title={`${selectedProject.name} preview`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
                
                {/* Overlay with action buttons */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedProject.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all`}
                  >
                    <FaExternalLinkAlt />
                    Open Full Site
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;