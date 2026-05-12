import { useState, useEffect, useRef } from "react";

const skills = {
  "Languages & Frameworks": [
    { name: "Python",        level: 95, description: "Backend development & data science" },
    { name: "Flask",         level: 90, description: "RESTful API development" },
    { name: "Django",        level: 85, description: "Full-stack web applications" },
    { name: "ReactJS",       level: 90, description: "Modern UI development" },
    { name: "NextJS",        level: 85, description: "Server-side rendering" },
    { name: "Flutter",       level: 80, description: "Cross-platform mobile" },
    { name: "React Native",  level: 80, description: "Native mobile apps" },
  ],
  "Databases": [
    { name: "MySQL",      level: 90, description: "Relational database design" },
    { name: "PostgreSQL", level: 85, description: "Advanced SQL queries" },
    { name: "SQLite",     level: 80, description: "Embedded databases" },
    { name: "MongoDB",    level: 75, description: "NoSQL document store" },
  ],
  "Cloud & DevOps": [
    { name: "Docker",   level: 85, description: "Containerisation" },
    { name: "Jenkins",  level: 60, description: "CI/CD pipelines" },
    { name: "Azure",    level: 75, description: "Cloud infrastructure" },
    { name: "AWS",      level: 80, description: "Cloud services" },
  ],
  "Data & AI": [
    { name: "Power BI",        level: 90, description: "Business intelligence" },
    { name: "Tableau",         level: 85, description: "Data visualisation" },
    { name: "EDA",             level: 90, description: "Exploratory analysis" },
    { name: "PyTorch",         level: 70, description: "Deep learning framework" },
    { name: "Machine Learning",level: 85, description: "Predictive modelling" },
    { name: "NLP",             level: 80, description: "Natural language processing" },
    { name: "Deep Learning",   level: 80, description: "Neural networks" },
  ],
  "Game Development": [
    { name: "Unity",              level: 75, description: "Game engine development" },
    { name: "Unreal Engine",      level: 20, description: "High-end game development" },
    { name: "Phaser.js",          level: 60, description: "2D browser game development" },
    { name: "Three.js",           level: 52, description: "3D interactive experiences and prototypes" },
    { name: "Technical Design",   level: 48, description: "Bridging gameplay and engineering" },
    { name: "Level Design",       level: 40, description: "Player flow, pacing, encounter design" },
    { name: "Game Systems Design",level: 48, description: "Core loops, progression, balancing" },
    { name: "Game Analytics",     level: 88, description: "Player metrics and balancing insights" },
    { name: "Game DevOps",        level: 38, description: "CI/CD, cloud infrastructure, multiplayer backend and live game operations" },
  ]
};

const certifications = [
  "AWS Cloud Practitioner",
  "Kaggle BIPOC Grant Program",
  "Full Stack Development",
  "Unity Game Development",
];

const DotBar = ({ level }) => {
  const filled = Math.floor(level / 20);
  return (
    <div className="sk-dots" aria-label={`Proficiency ${level}%`}>
      {[0,1,2,3,4].map(i => (
        <span key={i} className={`sk-dot ${i < filled ? "sk-dot--on" : ""}`} aria-hidden="true" />
      ))}
    </div>
  );
};

const Bar = ({ level, animate }) => (
  <div className="sk-bar-track" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100}>
    <div
      className="sk-bar-fill"
      style={{ width: animate ? `${level}%` : "0%" }}
    />
  </div>
);

const CategoryIcon = ({ cat }) => {
  const icons = {
    "Languages & Frameworks": (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    "Databases": (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    "Cloud & DevOps": (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    "Data & AI": (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    "Game Development": (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  };
  return icons[cat] || null;
};

const InitialBadge = ({ name }) => {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return <span className="sk-initial">{initials}</span>;
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Languages & Frameworks");
  const [hoveredSkill, setHoveredSkill]     = useState(null);
  const [isVisible, setIsVisible]           = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fix: copy ref value to a local variable for use in cleanup
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
    <section ref={sectionRef} className="sk-section">

      {/* BG */}
      <div className="sk-bg-dots"  aria-hidden="true" />
      <div className="sk-bg-hline" style={{ top: "30%" }} aria-hidden="true" />
      <div className="sk-bg-hline" style={{ top: "65%" }} aria-hidden="true" />
      <div className="sk-bg-vline" aria-hidden="true" />
      <div className="sk-bg-glow sk-bg-glow--1" aria-hidden="true" />
      <div className="sk-bg-glow sk-bg-glow--2" aria-hidden="true" />

      <div className={`sk-wrap ${isVisible ? "sk-wrap--visible" : ""}`}>

        {/* Header */}
        <header className="sk-header">
          <div className="sk-overline">
            <span className="sk-overline__dash" aria-hidden="true" />
            Technical Arsenal
          </div>
          <h2 className="sk-title">
            Skills &amp;<br />
            <span className="sk-title--cyan">Expertise</span>
          </h2>
          <p className="sk-subtitle">
            A comprehensive toolkit spanning full-stack development, cloud infrastructure,
            and cutting-edge AI/ML technologies
          </p>
        </header>

        {/* Category tabs */}
        <div className="sk-tabs" role="tablist">
          {Object.keys(skills).map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`sk-tab ${activeCategory === cat ? "sk-tab--active" : ""}`}
            >
              <CategoryIcon cat={cat} />
              <span>{cat}</span>
              <span className="sk-tab__count">{skills[cat].length}</span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="sk-grid" role="tabpanel">
          {skills[activeCategory].map((skill, index) => {
            const isHovered = hoveredSkill === skill.name;
            return (
              <div
                key={skill.name}
                className={`sk-card ${isHovered ? "sk-card--hovered" : ""}`}
                style={{ animationDelay: `${index * 0.07}s` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="sk-card__topline" aria-hidden="true" />

                <div className="sk-card__body">
                  <div className="sk-card__top">
                    <InitialBadge name={skill.name} />
                    <span className="sk-card__level">{skill.level}<span className="sk-card__pct">%</span></span>
                  </div>

                  <h3 className="sk-card__name">{skill.name}</h3>
                  <p className="sk-card__desc">{skill.description}</p>

                  <div className="sk-card__foot">
                    <span className="sk-card__prof-lbl">Proficiency</span>
                    <DotBar level={skill.level} />
                  </div>

                  <Bar level={skill.level} animate={isHovered} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="sk-certs">
          <div className="sk-certs__label">
            <span className="sk-overline__dash" aria-hidden="true" />
            Certifications &amp; Achievements
          </div>
          <div className="sk-certs__list">
            {certifications.map((cert, i) => (
              <div key={i} className="sk-cert">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {cert}
              </div>
            ))}
          </div>
        </div>

      </div>

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

        .sk-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: var(--bg);
          font-family: 'Geist', sans-serif;
          overflow: hidden;
          padding: 10px 0 10px;
          transition: background 0.4s;
        }

        .sk-bg-dots {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(var(--dot) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .sk-bg-hline {
          position: absolute; left: 0; right: 0; height: 1px;
          background: var(--border); opacity: 0.5; pointer-events: none;
        }
        .sk-bg-vline {
          position: absolute; right: 34%; top: 0; bottom: 0;
          width: 1px; background: var(--border); opacity: 0.3; pointer-events: none;
        }
        .sk-bg-glow {
          position: absolute; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
        }
        .sk-bg-glow--1 { top: -80px;    left: -60px;   width: 440px; height: 440px; }
        .sk-bg-glow--2 { bottom: -60px; right: -60px;  width: 340px; height: 340px; }

        .sk-wrap {
          position: relative; z-index: 10;
          width: 100%; max-width: 1100px;
          margin: 0 auto; padding: 0 40px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .sk-wrap--visible { opacity: 1; transform: translateY(0); }

        .sk-header { text-align: center; margin-bottom: 52px; }
        .sk-overline {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Geist Mono', monospace;
          font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--cyan-text); margin-bottom: 20px;
        }
        .sk-overline__dash { width: 26px; height: 1px; background: var(--cyan); opacity: 0.5; flex-shrink: 0; }
        .sk-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(40px, 5.5vw, 64px);
          font-weight: 300; font-style: italic;
          color: var(--ink); line-height: 1;
          letter-spacing: -0.02em; margin: 0 0 16px;
          transition: color 0.4s;
        }
        .sk-title--cyan { font-style: normal; font-weight: 500; color: var(--cyan); }
        .sk-subtitle {
          font-family: 'Fraunces', serif;
          font-size: 14px; font-weight: 300; font-style: italic;
          color: var(--ink-muted); max-width: 520px;
          margin: 0 auto; line-height: 1.7;
          transition: color 0.4s;
        }

        .sk-tabs {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 8px; margin-bottom: 40px;
        }
        .sk-tab {
          display: flex; align-items: center; gap: 7px;
          padding: 9px 18px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--ink-muted);
          font-family: 'Geist', sans-serif;
          font-size: 12px; font-weight: 500; letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.2s;
          backdrop-filter: blur(8px);
        }
        .sk-tab:hover { color: var(--cyan); border-color: var(--border-h); }
        .sk-tab--active {
          color: var(--cyan);
          border-color: var(--cyan);
          background: var(--cyan-dim);
        }
        .sk-tab__count {
          font-family: 'Geist Mono', monospace;
          font-size: 9px; color: var(--cyan-text);
          background: var(--cyan-dim);
          border: 1px solid var(--border);
          padding: 1px 6px;
        }

        .sk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 3fr));
          gap: 26px;
          background: none;
          border: none;
          margin-bottom: 1px;
        }

        .sk-card {
          background: var(--surface);
          border: 1px solid var(--border);
          display: flex; flex-direction: column;
          overflow: hidden;
          animation: skFadeUp 0.5s ease both;
          transition: background 0.2s;
          cursor: default;
        }
        .sk-card:hover,
        .sk-card--hovered { background: var(--cyan-dim); border-color: var(--border-h); }
        .sk-card:hover .sk-card__topline,
        .sk-card--hovered .sk-card__topline { opacity: 0.65; }
        .sk-card:hover .sk-card__name { color: var(--cyan); }

        .sk-card__topline {
          height: 2px; background: var(--cyan);
          opacity: 0; transition: opacity 0.3s; flex-shrink: 0;
        }
        .sk-card__body { padding: 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }

        .sk-card__top {
          display: flex; align-items: center; justify-content: space-between;
        }
        .sk-initial {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          background: var(--cyan-dim);
          border: 1px solid var(--border);
          font-family: 'Geist Mono', monospace;
          font-size: 11px; font-weight: 400; letter-spacing: 0.06em;
          color: var(--cyan-text);
          flex-shrink: 0;
          transition: border-color 0.2s;
        }
        .sk-card:hover .sk-initial { border-color: var(--border-h); color: var(--cyan); }

        .sk-card__level {
          font-family: 'Fraunces', serif;
          font-size: 28px; font-weight: 300; font-style: italic;
          color: var(--cyan); line-height: 1;
        }
        .sk-card__pct {
          font-family: 'Geist Mono', monospace;
          font-size: 10px; color: var(--cyan-text); margin-left: 1px;
          font-style: normal;
        }

        .sk-card__name {
          font-family: 'Geist', sans-serif;
          font-size: 14px; font-weight: 600;
          color: var(--ink); margin: 0; letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .sk-card__desc {
          font-family: 'Fraunces', serif;
          font-size: 12px; font-weight: 300; font-style: italic;
          color: var(--ink-muted); margin: 0; line-height: 1.6;
          transition: color 0.4s;
        }

        .sk-card__foot {
          display: flex; align-items: center;
          justify-content: space-between; margin-top: 4px;
        }
        .sk-card__prof-lbl {
          font-family: 'Geist Mono', monospace;
          font-size: 8px; text-transform: uppercase;
          letter-spacing: 0.14em; color: var(--ink-muted);
        }

        .sk-dots { display: flex; gap: 4px; align-items: center; }
        .sk-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--border);
          transition: background 0.3s;
        }
        .sk-dot--on { background: var(--cyan); }

        .sk-bar-track {
          width: 100%; height: 2px;
          background: var(--border);
          position: relative; overflow: hidden;
        }
        .sk-bar-fill {
          position: absolute; left: 0; top: 0; height: 100%;
          background: var(--cyan);
          transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .sk-certs { margin-top: 48px; }
        .sk-certs__label {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Geist Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--cyan-text); margin-bottom: 16px;
          justify-content: center;
        }
        .sk-certs__list {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 8px;
        }
        .sk-cert {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: var(--surface);
          border: 1px solid var(--border);
          font-family: 'Geist', sans-serif;
          font-size: 12px; font-weight: 500;
          color: var(--ink-muted);
          backdrop-filter: blur(8px);
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .sk-cert svg { color: var(--cyan); flex-shrink: 0; }
        .sk-cert:hover {
          color: var(--ink);
          border-color: var(--border-h);
          background: var(--cyan-dim);
        }

        @keyframes skFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .sk-wrap { padding: 0 20px; }
          .sk-grid { grid-template-columns: 1fr 1fr; }
          .sk-tab span:not(.sk-tab__count) { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Skills;