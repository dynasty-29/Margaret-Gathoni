import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaChartLine, FaGamepad } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const featuredProjects = {
  "Software Projects": [
    {
      name: "Mama Africa",
      link: "https://your-link-here.com",
      description: "Maternity support app for African mothers with health tracking and community features.",
      tags: ["Flask", "React", "tailwind", "PostgreSQL"],
      type: "web",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "PeriodTribe",
      link: "https://your-link-here.com",
      description: "Privacy-first menstrual health tracking app with cycle predictions and insights.",
      tags: ["React", "Django", "ML"],
      type: "web",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Vendor Portal",
      link: "https://vendorportal.cihebkenya.org/",
      description: "CIHEB-Kenya vendor prequalification & procurement management system.",
      tags: ["Django", "PostgreSQL", "REST API"],
      type: "web",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "NorthStart",
      link: "https://northstartsystems.com/",
      description: "ICT & Security solutions company website with project management dashboard.",
      tags: ["React", "Node.js", "MongoDB"],
      type: "web",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Payroll System",
      link: "https://your-link-here.com",
      description: "Custom payroll and HR automation system with leave management.",
      tags: ["Flask", "React", "MySQL"],
      type: "web",
      color: "from-orange-500 to-amber-500"
    },
  ],

  "Data Science Projects": [
    {
      name: "Clinical NLP Response Predictor",
      link: "https://github.com/yourusername/clinical-nlp",
      github: "https://github.com/yourusername/clinical-nlp",
      description: "Fine-tuned BERT model predicting clinician responses using ROUGE scoring.",
      tags: ["Python", "BERT", "NLP", "PyTorch"],
      type: "data",
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Crypto Market Predictor",
      link: "https://github.com/yourusername/crypto-predictor",
      github: "https://github.com/yourusername/crypto-predictor",
      description: "Time-series prediction using Pearson correlation optimization on DRW dataset.",
      tags: ["Python", "TensorFlow", "Pandas"],
      type: "data",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Public Health Dashboard",
      link: "https://your-dashboard-link.com",
      github: "https://github.com/yourusername/health-dashboard",
      description: "Power BI dashboard integrating DHIS2, KenyaEMR, and AIMS datasets.",
      tags: ["Power BI", "Python", "ETL"],
      type: "data",
      color: "from-green-500 to-emerald-500"
    },
  ],

  "Game Development Projects": [
    {
      name: "Black Magic",
      link: "https://your-game-link.com",
      github: "https://github.com/yourusername/black-magic",
      description: "A narrative-driven game exploring choice and consequence. Built for Game Jam.",
      tags: ["Unity", "C#", "Game Design"],
      type: "game",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Secret Letters",
      link: "https://your-game-link.com",
      github: "https://github.com/yourusername/secret-letters",
      description: "Wordplay puzzle game focusing on communication and storytelling.",
      tags: ["Unity", "C#", "Puzzle Design"],
      type: "game",
      color: "from-indigo-500 to-blue-500"
    },
  ],
};

const categoryIcons = {
  "Software Projects": FaCode,
  "Data Science Projects": FaChartLine,
  "Game Development Projects": FaGamepad,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Software Projects");

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-20 px-6 bg-gradient-to-br from-cyan-100 via-white to-indigo-50">
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md border border-cyan-100 mb-6">
          <HiSparkles className="text-cyan-600 animate-pulse" />
          <span className="text-sm font-semibold text-gray-700">Portfolio</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <p className="text-lg text-gray-600">
          A showcase of software, data science, and game development work
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(featuredProjects).map((category) => {
          const IconComponent = categoryIcons[category];
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-cyan-300"
              }`}
            >
              <IconComponent className="text-lg" />
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects[activeCategory].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-cyan-200 overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              {/* Content */}
              <div className="p-6">
                {/* Project Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.type === 'web' && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      Preview
                    </button>
                  )}
                  {project.type !== 'web' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      View
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-cyan-50 to-blue-50">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProject.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{selectedProject.description}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaTimes className="text-2xl text-gray-600" />
                </button>
              </div>

              {/* Website Preview */}
              <div className="relative w-full h-[70vh] bg-gray-100">
                <iframe
                  src={selectedProject.link}
                  className="w-full h-full border-0"
                  title={`${selectedProject.name} preview`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
                
                {/* Overlay with direct link */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Stats */}
      <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl w-full">
        <div className="text-center bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
            {Object.values(featuredProjects).flat().length}+
          </div>
          <div className="text-sm text-gray-600 font-medium">Total Projects</div>
        </div>
        <div className="text-center bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
            3
          </div>
          <div className="text-sm text-gray-600 font-medium">Categories</div>
        </div>
        <div className="text-center bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
            10+
          </div>
          <div className="text-sm text-gray-600 font-medium">Technologies</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;