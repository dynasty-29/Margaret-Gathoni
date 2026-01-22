import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaChartLine, FaDatabase, FaRocket } from "react-icons/fa";

const featuredProjects = {
  "Software Projects": [
    {
      name: "Mama Africa",
      link: "https://mama-africa.onrender.com/",
      description: "Comprehensive maternity support platform for African mothers with health tracking, community features, and expert consultation.",
      tags: ["Flask", "React", "Tailwind", "PostgreSQL"],
      type: "web",
      color: "from-cyan-500 to-lime-500",
    },
    {
      name: "GlowUp",
      link: "https://glow-up-eta.vercel.app/",
      description: "Privacy-first menstrual health tracking app with AI-powered cycle predictions and personalized insights.",
      tags: ["NextJS", "FastAPI", "Tailwind", "PostgreSQL", "AI", "Docker"], 
      type: "web",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Vendor Portal",
      link: "https://vendorportal.cihebkenya.org/",
      description: "Enterprise-grade vendor prequalification & procurement management system for CIHEB-Kenya.",
      tags: ["NextJs", "MySQL", "Tailwind", "C#", "Docker"],
      type: "web",
      color: "from-green-500 to-cyan-500",
    },
    {
      name: "NorthStart Systems",
      link: "https://northstartsystems.com/",
      description: "Modern ICT & Security solutions company website with integrated project management dashboard.",
      tags: ["Typescript", "PHP", "PostgreSQL", "Tailwind"],
      type: "web",
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Weather Focus web app",
      link: "https://skycast-qjkm.vercel.app/",
      description: "Real-time weather application with beautiful UI and accurate forecasting using Weather API.",
      tags: ["Typescript", "Tailwind", "Weather API"],
      type: "web",
      color: "from-blue-500 to-amber-500",
    },
    {
      name: "Pomodoro Pro",
      link: "https://flow-force-sigma.vercel.app/",
      description: "AI supported productivity app combining Pomodoro technique with task management and focus music.",
      tags: ["TypeScript", "FastAPI", "PostgreSQL"],
      type: "chrome-extension",
      color: "from-forest-500 to-lime-500",
    },
  ],
"Data Science Projects": [
    {
      name: "Chest Disease Detection",
      github: "https://github.com/dynasty-29/Chest_Disease_detection/blob/main/Disease_detection_Project.ipynb",
      description: "Deep learning model for medical image classification detecting chest diseases from X-ray images using convolutional neural networks built with Keras and TensorFlow.",
      tags: ["Python", "Keras", "TensorFlow", "CNN", "Medical Imaging"],
      type: "data",
      color: "from-red-500 to-rose-500",
      stats: { accuracy: "53%", precision: "61%", f1Score: "0.50" }
    },
    {
      name: "Amazon Alexa Sentiment Analysis",
      github: "https://github.com/dynasty-29/sentiment_analysis/blob/main/Sentiment_Analysis_on_Customers'_review.ipynb",
      description: "NLP-powered sentiment classification system analyzing Amazon Alexa customer reviews using multiple ML algorithms including Naive Bayes and Logistic Regression.",
      tags: ["Python", "NLP", "Naive Bayes", "Scikit-learn", "NLTK"],
      type: "data",
      color: "from-amber-500 to-orange-500",
      stats: { accuracy: "95%", models: "2+", reviews: "3K+" }
    },
    {
      name: "Book Genre Classifier",
      github: "https://github.com/dynasty-29/Book-Genre-Classification/blob/main/Book_Genre_Classification.ipynb",
      description: "Text classification model categorizing books into genres using NLP techniques with Multinomial Naive Bayes and Support Vector Classification achieving strong accuracy.",
      tags: ["Python", "NLP", "SVC", "MultinomialNB", "Text Classification"],
      type: "data",
      color: "from-purple-500 to-violet-500",
      stats: { accuracy: "77.5%", models: "2+", genres: "Multi" }
    },
    {
      name: "Garment Worker Productivity",
      github: "https://github.com/dynasty-29/Productivity-Prediction-Project/blob/main/productivity_prediction_final.ipynb",
      description: "Predictive analytics model forecasting garment industry employee productivity using MLP neural networks, optimized for minimal prediction error.",
      tags: ["Python", "MLP", "Regression", "Pandas", "Scikit-learn"],
      type: "data",
      color: "from-cyan-500 to-teal-500",
      stats: { rmse: "0.144", model: "MLP", features: "15+" }
    },
    {
      name: "Carbon Emission Predictor",
      github: "https://github.com/dynasty-29/carbon_emmision_streamlit_prototype_app/blob/main/predictor_model.ipynb",
      description: "Environmental impact prediction model using XGBoost to forecast carbon emissions with comprehensive evaluation metrics for sustainability analysis.",
      tags: ["Python", "XGBoost", "Environmental ML", "Pandas", "Feature Engineering"],
      type: "data",
      color: "from-green-500 to-emerald-500",
      stats: { r2Score: "0.83", mae: "1.42", model: "XGB" }
    },
    {
      name: "Handwritten Digit Recognizer",
      github: "https://www.kaggle.com/code/margaretgathoni/digit-recognizer",
      description: "High-accuracy neural network for handwritten digit recognition built with PyTorch, trained on the MNIST dataset achieving near-perfect classification.",
      tags: ["Python", "PyTorch", "CNN", "MNIST", "Deep Learning"],
      type: "data",
      color: "from-indigo-500 to-blue-500",
      stats: { accuracy: "97%", dataset: "MNIST", framework: "PyTorch" }
    },
  ],
  "Data Analysis Projects": [
    {
      name: "Coming Soon",
      github: "",
      description: "Exciting data analysis projects are in development. Check back soon for interactive dashboards and business intelligence visualizations.",
      tags: ["Power BI", "Tableau", "SQL", "Excel"],
      type: "data",
      color: "from-pink-500 to-rose-500",
      stats: { status: "Soon", dashboards: "3+", insights: "∞" }
    },
  ], 

  
};

const categoryIcons = {
  "Software Projects": FaCode,
  "Data Science Projects": FaChartLine,
  "Data Analysis Projects": FaDatabase,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Software Projects");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // const totalProjects = Object.values(featuredProjects).flat().length;
  // const totalTechnologies = [...new Set(Object.values(featuredProjects).flat().flatMap(p => p.tags))].length;

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

                  {/* Stats - Only render if stats exist */}
                  {project.stats && (
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
                  )}

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

                  {/* Action Buttons - Conditional GitHub link */}
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => project.type === 'web' ? setSelectedProject(project) : window.open(project.link, '_blank')}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.color} text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group`}
                    >
                      <FaRocket className="group-hover:translate-x-1 transition-transform" />
                      {project.type === 'web' ? 'Preview' : 'View'}
                    </button>
                    {/* Only show GitHub button for Data Science projects */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
                        aria-label="GitHub"
                      >
                        <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                      </a>
                    )}
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
                  {/* Only show GitHub button in modal if project has github link */}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  )}
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
