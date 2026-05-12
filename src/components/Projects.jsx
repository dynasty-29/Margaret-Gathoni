import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featuredProjects = {
  "Software Projects": [
    {
      name: "NorthStart Systems",
      link: "https://northstartsystems.com/",
      description: "Modern ICT and security solutions company website with integrated project management dashboard.",
      tags: ["Typescript", "PHP", "PostgreSQL", "Tailwind"],
      type: "web",
    },
    {
      name: "Grey Silicon",
      link: "https://www.greysilicon.com/",
      description: "Communication platform landing page",
      tags: ["Typescript","Tailwind"],
      type: "web",
    },
    {
      name: "Vendor Portal",
      link: "https://vendorportal.cihebkenya.org/",
      description: "Enterprise-grade vendor prequalification and procurement management system for CIHEB-Kenya.",
      tags: ["NextJs", "MySQL", "Tailwind", "C#", "Docker"],
      type: "web",
    },
    {
      name: "Weather Focus",
      link: "https://skycast-qjkm.vercel.app/",
      description: "Real-time weather application with accurate forecasting using the Weather API.",
      tags: ["Typescript", "Tailwind", "Weather API"],
      type: "web",
    },
    {
      name: "Pomodoro Pro",
      link: "https://flow-force-sigma.vercel.app/",
      description: "AI-supported productivity app combining Pomodoro technique with task management and focus music.",
      tags: ["TypeScript", "FastAPI", "PostgreSQL"],
      type: "chrome-extension",
    },
  ],
  "Data Science Projects": [
    {
      name: "Chest Disease Detection",
      github: "https://github.com/dynasty-29/Chest_Disease_detection/blob/main/Disease_detection_Project.ipynb",
      description: "Deep learning model for medical image classification detecting chest diseases from X-ray images using CNNs built with Keras and TensorFlow.",
      tags: ["Python", "Keras", "TensorFlow", "CNN", "Medical Imaging"],
      type: "data",
      stats: [{ label: "Accuracy", value: "53%" }, { label: "Precision", value: "61%" }, { label: "F1 Score", value: "0.50" }],
    },
    {
      name: "Alexa Sentiment Analysis",
      github: "https://github.com/dynasty-29/sentiment_analysis/blob/main/Sentiment_Analysis_on_Customers'_review.ipynb",
      description: "NLP-powered sentiment classification system analyzing Amazon Alexa customer reviews using Naive Bayes and Logistic Regression.",
      tags: ["Python", "NLP", "Naive Bayes", "Scikit-learn", "NLTK"],
      type: "data",
      stats: [{ label: "Accuracy", value: "95%" }, { label: "Models", value: "2+" }, { label: "Reviews", value: "3K+" }],
    },
    {
      name: "Book Genre Classifier",
      github: "https://github.com/dynasty-29/Book-Genre-Classification/blob/main/Book_Genre_Classification.ipynb",
      description: "Text classification model categorizing books into genres using NLP with Multinomial Naive Bayes and SVC achieving strong accuracy.",
      tags: ["Python", "NLP", "SVC", "MultinomialNB", "Text Classification"],
      type: "data",
      stats: [{ label: "Accuracy", value: "77.5%" }, { label: "Models", value: "2+" }, { label: "Genres", value: "Multi" }],
    },
    {
      name: "Garment Productivity",
      github: "https://github.com/dynasty-29/Productivity-Prediction-Project/blob/main/productivity_prediction_final.ipynb",
      description: "Predictive analytics model forecasting garment industry employee productivity using MLP neural networks optimized for minimal prediction error.",
      tags: ["Python", "MLP", "Regression", "Pandas", "Scikit-learn"],
      type: "data",
      stats: [{ label: "RMSE", value: "0.144" }, { label: "Model", value: "MLP" }, { label: "Features", value: "15+" }],
    },
    {
      name: "Carbon Emission Predictor",
      github: "https://github.com/dynasty-29/carbon_emmision_streamlit_prototype_app/blob/main/predictor_model.ipynb",
      description: "Environmental impact prediction model using XGBoost to forecast carbon emissions with comprehensive evaluation metrics for sustainability analysis.",
      tags: ["Python", "XGBoost", "Environmental ML", "Pandas", "Feature Engineering"],
      type: "data",
      stats: [{ label: "R² Score", value: "0.83" }, { label: "MAE", value: "1.42" }, { label: "Model", value: "XGB" }],
    },
    {
      name: "Digit Recognizer",
      github: "https://www.kaggle.com/code/margaretgathoni/digit-recognizer",
      description: "High-accuracy neural network for handwritten digit recognition built with PyTorch, trained on the MNIST dataset achieving near-perfect classification.",
      tags: ["Python", "PyTorch", "CNN", "MNIST", "Deep Learning"],
      type: "data",
      stats: [{ label: "Accuracy", value: "97%" }, { label: "Dataset", value: "MNIST" }, { label: "Framework", value: "PyTorch" }],
    },
  ],
  "Game Development Projects": [
    {
      name: "Chronicles of the Gods",
      link: "https://dynasty-n.itch.io/chronicals-of-the-gods",
      description: "An action RPG adventure inspired by African mythology where players battle enemies and recover sacred relics of the gods.",
      tags: ["Unity", "3D", "RPG", "Action", "Adventure", "Mobile"],
      type: "game",
      stats: [
        { label: "Genre", value: "Action RPG" },
        { label: "Platform", value: "Mobile" },
        { label: "Engine", value: "Unity" }
      ],
    },
    {
      name: "Greed's Abyss",
      link: "https://mikaelstudios.itch.io/greeds-abyss",
      description: "A dark fantasy roguelite adventure set in the mysterious Shrine of Shadows where players feed the Specter of Fortunes.",
      tags: ["Unity", "Fantasy", "Roguelite", "Adventure", "Interactive Fiction"],
      type: "game",
      stats: [
        { label: "Genre", value: "Adventure" },
        { label: "Theme", value: "Fantasy" },
        { label: "Engine", value: "Unity" }
      ],
    },
  ],
};

const categoryMeta = {
  "Software Projects": {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  "Data Science Projects": {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  "Game Development Projects": {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
};

const IconExternal = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IconGithub = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const IconClose = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Software Projects");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );

    observer.observe(node);
    return () => { observer.unobserve(node); };
  }, []);

  return (
    <section ref={sectionRef} className="proj-section">

      {/* BG */}
      <div className="proj-bg-dots" aria-hidden="true" />
      <div className="proj-bg-hline" style={{ top: "28%" }} aria-hidden="true" />
      <div className="proj-bg-hline" style={{ top: "62%" }} aria-hidden="true" />
      <div className="proj-bg-vline" aria-hidden="true" />
      <div className="proj-bg-glow proj-bg-glow--1" aria-hidden="true" />
      <div className="proj-bg-glow proj-bg-glow--2" aria-hidden="true" />

      <div className={`proj-wrap ${isVisible ? "proj-wrap--visible" : ""}`}>

        {/* Header */}
        <header className="proj-header">
          <div className="proj-overline">
            <span className="proj-overline__dash" aria-hidden="true" />
            Featured Work
          </div>
          <h2 className="proj-title">
            Project<br />
            <span className="proj-title--cyan">Showcase</span>
          </h2>
          <p className="proj-subtitle">
            A collection of solutions spanning web development, data science, and interactive experiences
          </p>
        </header>

        {/* Category tabs */}
        <div className="proj-tabs" role="tablist">
          {Object.keys(featuredProjects).map((cat) => {
            const isActive = activeCategory === cat;
            const count = featuredProjects[cat].length;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`proj-tab ${isActive ? "proj-tab--active" : ""}`}
              >
                {categoryMeta[cat].icon}
                <span>{cat}</span>
                <span className="proj-tab__count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="proj-grid"
          role="tabpanel"
        >
          {featuredProjects[activeCategory].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="proj-card"
            >
              <div className="proj-card__topline" aria-hidden="true" />

              <div className="proj-card__body">
                <h3 className="proj-card__name">{project.name}</h3>
                <p className="proj-card__desc">{project.description}</p>

                {project.stats && (
                  <div className="proj-stats">
                    {project.stats.map((s, i) => (
                      <div key={i} className="proj-stat">
                        <span className="proj-stat__val">{s.value}</span>
                        <span className="proj-stat__lbl">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="proj-tags">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="proj-tag">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="proj-tag proj-tag--more">+{project.tags.length - 4}</span>
                  )}
                </div>

                <div className="proj-actions">
                  {project.link && (
                    <button
                      className="proj-btn proj-btn--primary"
                      onClick={() =>
                        project.type === "web"
                          ? setSelectedProject(project)
                          : window.open(project.link, "_blank")
                      }
                    >
                      {project.type === "web" ? "Preview" : "View"}
                      <IconArrow />
                    </button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn proj-btn--ghost"
                      aria-label={`${project.name} source code`}
                    >
                      <IconGithub />
                      Code
                    </a>
                  )}
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
            className="proj-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="proj-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="proj-modal__head">
                <div className="proj-modal__topline" aria-hidden="true" />
                <div className="proj-modal__head-inner">
                  <div className="proj-modal__info">
                    <h3 className="proj-modal__title">{selectedProject.name}</h3>
                    <p className="proj-modal__desc">{selectedProject.description}</p>
                    <div className="proj-tags" style={{ marginTop: "12px" }}>
                      {selectedProject.tags.map((tag, i) => (
                        <span key={i} className="proj-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="proj-modal__close"
                    aria-label="Close preview"
                  >
                    <IconClose />
                  </button>
                </div>
              </div>

              <div className="proj-modal__frame">
                <iframe
                  src={selectedProject.link}
                  title={`${selectedProject.name} preview`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
                <div className="proj-modal__actions">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn proj-btn--ghost"
                    >
                      <IconGithub />
                      View Code
                    </a>
                  )}
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn--primary"
                  >
                    Open Site
                    <IconExternal />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;1,300;1,500&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@300;400&display=swap');

        :root {
          --bg:        #f0fafa;
          --surface:   rgba(255,255,255,0.72);
          --surface2:  rgba(255,255,255,0.45);
          --border:    rgba(6,182,212,0.16);
          --border-h:  rgba(6,182,212,0.42);
          --ink:       #0b2028;
          --ink-muted: rgba(11,32,40,0.45);
          --cyan:      #06b6d4;
          --cyan2:     #0891b2;
          --cyan-dim:  rgba(6,182,212,0.1);
          --cyan-text: rgba(6,182,212,0.7);
          --dot:       rgba(6,182,212,0.18);
          --glow:      rgba(6,182,212,0.07);
          --sep:       rgba(6,182,212,0.18);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --bg:        #060e12;
            --surface:   rgba(13,30,38,0.82);
            --surface2:  rgba(13,30,38,0.5);
            --border:    rgba(34,211,238,0.11);
            --border-h:  rgba(34,211,238,0.34);
            --ink:       #e8f6fa;
            --ink-muted: rgba(200,235,245,0.4);
            --cyan:      #22d3ee;
            --cyan2:     #67e8f9;
            --cyan-dim:  rgba(34,211,238,0.07);
            --cyan-text: rgba(34,211,238,0.55);
            --dot:       rgba(34,211,238,0.11);
            --glow:      rgba(34,211,238,0.05);
            --sep:       rgba(34,211,238,0.13);
          }
        }

        .proj-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: var(--bg);
          font-family: 'Geist', sans-serif;
          overflow: hidden;
          padding: 80px 0 100px;
          transition: background 0.4s;
        }

        .proj-bg-dots {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(var(--dot) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .proj-bg-hline {
          position: absolute; left: 0; right: 0; height: 1px;
          background: var(--border); opacity: 0.5; pointer-events: none;
        }
        .proj-bg-vline {
          position: absolute; left: 32%; top: 0; bottom: 0;
          width: 1px; background: var(--border); opacity: 0.3; pointer-events: none;
        }
        .proj-bg-glow {
          position: absolute; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
        }
        .proj-bg-glow--1 { top: -80px; left: -60px;  width: 440px; height: 440px; }
        .proj-bg-glow--2 { bottom: -60px; right: -60px; width: 340px; height: 340px; }

        .proj-wrap {
          position: relative; z-index: 10;
          width: 100%; max-width: 1100px;
          margin: 0 auto; padding: 0 40px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .proj-wrap--visible { opacity: 1; transform: translateY(0); }

        .proj-header { text-align: center; margin-bottom: 56px; }
        .proj-overline {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Geist Mono', monospace;
          font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--cyan-text); margin-bottom: 20px;
        }
        .proj-overline__dash { width: 26px; height: 1px; background: var(--cyan); opacity: 0.5; }
        .proj-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(40px, 5.5vw, 64px);
          font-weight: 300; font-style: italic;
          color: var(--ink); line-height: 1;
          letter-spacing: -0.02em; margin: 0 0 16px;
          transition: color 0.4s;
        }
        .proj-title--cyan { font-style: normal; font-weight: 500; color: var(--cyan); }
        .proj-subtitle {
          font-family: 'Fraunces', serif;
          font-size: 14px; font-weight: 300; font-style: italic;
          color: var(--ink-muted); max-width: 480px;
          margin: 0 auto; line-height: 1.7;
          transition: color 0.4s;
        }

        .proj-tabs {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 8px; margin-bottom: 48px;
        }
        .proj-tab {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--ink-muted);
          font-family: 'Geist', sans-serif;
          font-size: 12px; font-weight: 500; letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.2s;
          backdrop-filter: blur(8px);
        }
        .proj-tab:hover { color: var(--cyan); border-color: var(--border-h); }
        .proj-tab--active {
          color: var(--cyan);
          border-color: var(--cyan);
          background: var(--cyan-dim);
        }
        .proj-tab__count {
          font-family: 'Geist Mono', monospace;
          font-size: 9px; letter-spacing: 0.08em;
          color: var(--cyan-text);
          background: var(--cyan-dim);
          border: 1px solid var(--border);
          padding: 1px 6px;
        }

        .proj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 26px;
          background: none;
          border: none;
          margin-bottom: 0;
        }

        .proj-card {
          background: var(--surface);
          border: 1px solid var(--border);
          display: flex; flex-direction: column;
          transition: background 0.2s;
          overflow: hidden;
        }
        .proj-card:hover { background: var(--cyan-dim); border-color: var(--border-h); }
        .proj-card:hover .proj-card__topline { opacity: 0.7; }

        .proj-card__topline {
          height: 2px; background: var(--cyan);
          opacity: 0; transition: opacity 0.3s;
        }
        .proj-card__body {
          padding: 24px;
          display: flex; flex-direction: column; gap: 14px; flex: 1;
        }
        .proj-card__name {
          font-family: 'Fraunces', serif;
          font-size: 20px; font-weight: 300; font-style: italic;
          color: var(--ink); margin: 0; letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .proj-card:hover .proj-card__name { color: var(--cyan); }
        .proj-card__desc {
          font-family: 'Fraunces', serif;
          font-size: 12px; font-weight: 300; font-style: italic;
          color: var(--ink-muted); line-height: 1.75; margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.4s;
        }

        .proj-stats {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 0; border: 1px solid var(--border);
        }
        .proj-stat {
          display: flex; flex-direction: column; align-items: center;
          padding: 10px 6px;
          border-right: 1px solid var(--border);
          background: var(--surface2);
        }
        .proj-stat:last-child { border-right: none; }
        .proj-stat__val {
          font-family: 'Fraunces', serif;
          font-size: 18px; font-weight: 300; font-style: italic;
          color: var(--cyan); line-height: 1;
        }
        .proj-stat__lbl {
          font-family: 'Geist Mono', monospace;
          font-size: 7px; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--ink-muted); margin-top: 3px;
        }

        .proj-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .proj-tag {
          font-family: 'Geist Mono', monospace;
          font-size: 9px; letter-spacing: 0.06em;
          color: var(--cyan-text);
          background: var(--cyan-dim);
          border: 1px solid var(--border);
          padding: 3px 8px;
          transition: border-color 0.2s, color 0.2s;
        }
        .proj-tag:hover { border-color: var(--border-h); color: var(--cyan); }
        .proj-tag--more { color: var(--ink-muted); background: transparent; }

        .proj-actions { display: flex; gap: 8px; margin-top: auto; }
        .proj-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Geist', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          cursor: pointer; text-decoration: none; border: none;
          padding: 9px 16px;
          transition: all 0.2s;
        }
        .proj-btn--primary {
          background: var(--cyan); color: var(--bg); flex: 1;
          justify-content: center;
        }
        .proj-btn--primary:hover { background: var(--cyan2); transform: translateY(-1px); }
        .proj-btn--ghost {
          background: transparent; color: var(--cyan-text);
          border: 1px solid var(--border);
        }
        .proj-btn--ghost:hover { border-color: var(--border-h); color: var(--cyan); }

        .proj-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(6,14,18,0.88);
          backdrop-filter: blur(8px);
          z-index: 100;
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
        }

        .proj-modal {
          background: var(--bg);
          border: 1px solid var(--border);
          width: 100%; max-width: 1080px;
          max-height: 90vh;
          display: flex; flex-direction: column;
          overflow: hidden;
          transition: background 0.4s;
        }
        .proj-modal__topline {
          height: 2px; background: var(--cyan); opacity: 0.6;
        }
        .proj-modal__head-inner {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 20px; padding: 22px 24px 20px;
          border-bottom: 1px solid var(--border);
        }
        .proj-modal__info { flex: 1; }
        .proj-modal__title {
          font-family: 'Fraunces', serif;
          font-size: 26px; font-weight: 300; font-style: italic;
          color: var(--ink); margin: 0 0 8px;
          letter-spacing: -0.01em; transition: color 0.4s;
        }
        .proj-modal__desc {
          font-family: 'Fraunces', serif;
          font-size: 13px; font-weight: 300; font-style: italic;
          color: var(--ink-muted); line-height: 1.7;
          margin: 0; transition: color 0.4s;
        }
        .proj-modal__close {
          background: transparent; border: 1px solid var(--border);
          color: var(--ink-muted); cursor: pointer; padding: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: color 0.2s, border-color 0.2s;
        }
        .proj-modal__close:hover { color: var(--cyan); border-color: var(--border-h); }

        .proj-modal__frame {
          position: relative; flex: 1; min-height: 0;
          height: 65vh; background: var(--surface2);
        }
        .proj-modal__actions {
          position: absolute; bottom: 16px; right: 16px;
          display: flex; gap: 8px; z-index: 10;
        }

        @media (max-width: 640px) {
          .proj-wrap { padding: 0 20px; }
          .proj-grid { grid-template-columns: 1fr; }
          .proj-tab span:not(.proj-tab__count) { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Projects;