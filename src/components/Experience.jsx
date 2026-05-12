import { useState, useEffect, useRef } from "react";

const experienceTabs = [
  { id: "software", label: "Software Experience" },
  { id: "game", label: "Game Experience" },
  { id: "data", label: "Data Experience" },
];

const timelineData = [
  {
    category: "software",
    title: "Full Stack Developer",
    date: "Mar 2026 to date",
    company: "GreySilicon",
    location: "Nairobi, Kenya",
    type: "Contract",
    mode: "Hybrid",
    description:
      "Working as a full stack developer, creating systems and solutions for clients that assist in their effective communication and feedback all in one place.",
    achievements: [
      "Built software solutions using React, TypeScript, Python, and PostgreSQL",
      "Developed client-facing systems that improve communication and feedback workflows",
      "Optimized database structures for performance, efficiency, and security",
    ],
    impact: [
      { label: "Stack", value: "Full" },
      { label: "Systems", value: "Live" },
      { label: "Security", value: "DB" },
    ],
    skills: ["React", "Python", "TypeScript", "PostgreSQL", "MySQL", "Cloud Architecture"],
    current: true,
  },
  {
    category: "game",
    title: "Game Design Intern",
    date: "April 2026 to date",
    company: "Leti Arts",
    location: "Accra, Ghana",
    type: "Contract",
    mode: "Remote",
    description:
      "Working as a game designer, creating immersive gameplay experiences and interactive systems that enhance player engagement, storytelling, and overall game enjoyment.",
    achievements: [
      "Designed and prototyped gameplay mechanics and interactive systems",
      "Collaborated on level design, player flow, and game balancing",
      "Created and tested game concepts to improve player engagement",
    ],
    impact: [
      { label: "Design", value: "Core" },
      { label: "Levels", value: "Flow" },
      { label: "Testing", value: "Iter" },
    ],
    skills: [
      "Game Design",
      "Level Design",
      "Unity",
      "Gameplay Prototyping",
      "Narrative Design",
      "UI/UX Design",
      "Playtesting",
      "Game Balancing",
    ],
    current: true,
  },
  {
    category: "game",
    title: "Game Development Intern",
    date: "2023",
    company: "GameUp Africa",
    location: "Lagos, Nigeria",
    type: "Internship",
    mode: "Remote",
    description:
      "Worked on collaborative game development projects, contributing to gameplay systems, prototyping, testing, and interactive player experiences within multidisciplinary teams.",
    achievements: [
      "Developed gameplay prototypes and core mechanics for game jam projects",
      "Collaborated with artists, developers, and designers during iterative development cycles",
      "Participated in playtesting, balancing, and feedback sessions to improve gameplay experience",
    ],
    impact: [
      { label: "Prototypes", value: "Game" },
      { label: "Teams", value: "Multi" },
      { label: "Testing", value: "Play" },
    ],
    skills: [
      "Game Development",
      "Unity",
      "Gameplay Systems",
      "Rapid Prototyping",
      "Level Design",
      "Team Collaboration",
      "Playtesting",
      "Game Jams",
    ],
    current: false,
  },
  {
    category: "game",
    title: "Marketing Intern",
    date: "2024",
    company: "Maliyo Games",
    location: "Lagos, Nigeria",
    type: "Internship",
    mode: "Remote",
    description:
      "Supported marketing and community engagement initiatives for African games through social media campaigns, player engagement strategies, and promotional content.",
    achievements: [
      "Contributed to social media and community marketing campaigns for game releases",
      "Assisted in creating engaging content to increase player visibility and interaction",
      "Collaborated with teams on marketing strategies, audience engagement, and campaign planning",
    ],
    impact: [
      { label: "Content", value: "Social" },
      { label: "Audience", value: "Engage" },
      { label: "Brand", value: "Comms" },
    ],
    skills: [
      "Game Marketing",
      "Community Management",
      "Social Media Marketing",
      "Content Creation",
      "Audience Engagement",
      "Campaign Planning",
      "Brand Communication",
      "Analytics",
    ],
    current: false,
  },
  {
    category: "software",
    title: "HMIS Specialist",
    date: "Mar 2025 – Sep 2025",
    company: "CIHEB Kenya",
    location: "Nairobi, Kenya",
    type: "Contract",
    mode: "Hybrid",
    description:
      "Integrated KenyaEMR, DHIS2, and AIMS systems using Flask/FastAPI APIs automating 80% of reporting. Designed optimized PostgreSQL schemas across 15+ facilities and delivered data use training to 200+ healthcare users.",
    achievements: [
      "Automated 80% of reporting workflows",
      "Optimized databases across 15+ facilities",
      "Trained 200+ healthcare users",
    ],
    impact: [
      { label: "Efficiency", value: "+80%" },
      { label: "Facilities", value: "15+" },
      { label: "Users", value: "200+" },
    ],
    skills: ["Flask", "FastAPI", "PostgreSQL", "DHIS2", "KenyaEMR"],
    current: false,
  },
  {
    category: "data",
    title: "Data Lead",
    date: "Jul 2024 – Feb 2025",
    company: "CIHEB Kenya",
    location: "Nairobi, Kenya",
    type: "Full-time",
    mode: "On-site",
    description:
      "Administered PostgreSQL & Oracle databases with 99.8% uptime. Strengthened API security with JWT/OAuth, led quarterly audits, and established documentation standards for lab informatics systems.",
    achievements: [
      "Maintained 99.8% database uptime",
      "Enhanced API security with JWT/OAuth",
      "Led quarterly system audits",
    ],
    impact: [
      { label: "Uptime", value: "99.8%" },
      { label: "Security", value: "OAuth" },
      { label: "Audits", value: "Qtly" },
    ],
    skills: ["PostgreSQL", "Oracle", "JWT/OAuth", "Documentation", "Leadership"],
    current: false,
  },
  {
    category: "software",
    title: "Python Developer",
    date: "Jan 2023 – Jun 2024",
    company: "Jay & Oak Ltd",
    location: "Lagos, Nigeria",
    type: "Full-time",
    mode: "Remote",
    description:
      "Developed Django REST and Flask APIs with data validation and integration logic. Built responsive web apps consuming APIs for real-time synchronization and automated deployments via Docker & Git.",
    achievements: [
      "Built Django REST & Flask APIs",
      "Implemented real-time synchronization",
      "Automated deployments with Docker",
    ],
    impact: [
      { label: "APIs", value: "Multi" },
      { label: "Sync", value: "Live" },
      { label: "Deploy", value: "100%" },
    ],
    skills: ["Django", "Flask", "Docker", "Git", "REST APIs"],
    current: false,
  },
  {
    category: "data",
    title: "Research Data Analyst",
    date: "Jul 2016 – Dec 2022",
    company: "Aga Khan University Hospital",
    location: "Nairobi, Kenya",
    type: "Full-time",
    mode: "On-site",
    description:
      "Built ETL pipelines in Python to process 100K+ lab records, cutting turnaround by 80%. Integrated lab APIs with clinical systems for compliance, and supported 200+ users in data operations.",
    achievements: [
      "Processed 100K+ lab records",
      "Reduced turnaround time by 80%",
      "Supported 200+ clinical users",
    ],
    impact: [
      { label: "Records", value: "100K+" },
      { label: "Faster", value: "+80%" },
      { label: "Users", value: "200+" },
    ],
    skills: ["Python", "ETL", "Data Analysis", "Healthcare", "API Integration"],
    current: false,
  },
];



const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState("software");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const filteredData = timelineData.filter((item) => item.category === activeTab);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section ref={sectionRef} className="exp-section">
      <div className="exp-bg-dots" aria-hidden="true" />
      <div className="exp-bg-hline" style={{ top: "30%" }} aria-hidden="true" />
      <div className="exp-bg-hline" style={{ top: "65%" }} aria-hidden="true" />
      <div className="exp-bg-glow exp-bg-glow--1" aria-hidden="true" />
      <div className="exp-bg-glow exp-bg-glow--2" aria-hidden="true" />

      <div className={`exp-wrap ${isVisible ? "exp-wrap--visible" : ""}`}>
        <header className="exp-header">
          <div className="exp-overline">
            <span className="exp-overline__dash" aria-hidden="true" />
            Career Journey
          </div>

          <h2 className="exp-title">
            Professional<br />
            <span className="exp-title--cyan">Experience</span>
          </h2>

          <p className="exp-subtitle">
            A multi-track journey across software engineering, game design, and data systems.
          </p>
        </header>

        <div className="exp-tabs" role="tablist" aria-label="Experience categories">
          {experienceTabs.map((tab) => (
            <button
              key={tab.id}
              className={`exp-tab ${activeTab === tab.id ? "exp-tab--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="exp-timeline" role="list">
          <div className="exp-spine" aria-hidden="true" />

          {filteredData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isActive = activeIndex === index;
            const impactItems = item.impact || [];

            return (
              <div
                key={`${activeTab}-${item.company}-${item.title}`}
                className={`exp-row ${isLeft ? "exp-row--left" : "exp-row--right"}`}
                style={{ animationDelay: `${index * 0.15}s` }}
                role="listitem"
              >
                <button
                  className={`exp-dot ${isActive ? "exp-dot--active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Select ${item.title}`}
                  aria-pressed={isActive}
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </button>

                <div
                  className={`exp-card ${isActive ? "exp-card--active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="exp-card__topline" aria-hidden="true" />

                  <div className="exp-card__head">
                    <div className="exp-card__title-row">
                      <h3 className="exp-card__title">{item.title}</h3>
                      {item.current && (
                        <span className="exp-badge exp-badge--current">Current</span>
                      )}
                    </div>

                    <div className="exp-card__company">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      {item.company}
                    </div>

                    <div className="exp-card__meta">
                      <span className="exp-card__meta-item">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {item.date}
                      </span>

                      <span className="exp-card__meta-item">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {item.location}
                      </span>
                    </div>

                    <div className="exp-card__badges">
                      <span className="exp-badge">{item.type}</span>
                      <span className="exp-badge">{item.mode}</span>
                    </div>
                  </div>

                  <div className="exp-card__body">
                    <p className="exp-card__desc">{item.description}</p>

                    {impactItems.length > 0 && (
                      <div className="exp-impact">
                        {impactItems.map((m, i) => (
                          <div key={i} className="exp-impact__cell">
                            <span className="exp-impact__val">{m.value}</span>
                            <span className="exp-impact__lbl">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className={`exp-expand ${isActive ? "exp-expand--open" : ""}`}>
                      <div className="exp-achievements">
                        <div className="exp-section-label">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                          Key Achievements
                        </div>

                        {item.achievements.map((a, i) => (
                          <div key={i} className="exp-achievement">
                            <span className="exp-achievement__icon">
                              <CheckIcon />
                            </span>
                            <span>{a}</span>
                          </div>
                        ))}
                      </div>

                      <div className="exp-skills">
                        <div className="exp-section-label">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                          </svg>
                          Skills & Tools
                        </div>

                        <div className="exp-skills__tags">
                          {item.skills.map((s, i) => (
                            <span key={i} className="exp-skill-tag">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      className="exp-toggle"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(isActive ? null : index);
                      }}
                      aria-expanded={isActive}
                      type="button"
                    >
                      {isActive ? "Show Less" : "Show More"}
                      <ChevronIcon open={isActive} />
                    </button>
                  </div>
                </div>

                <div className="exp-spacer" aria-hidden="true" />
              </div>
            );
          })}
        </div>

        
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;1,300;1,500&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@300;400&display=swap');

        :root {
          --bg: #f0fafa;
          --surface: rgba(255,255,255,0.72);
          --surface2: rgba(255,255,255,0.45);
          --border: rgba(6,182,212,0.16);
          --border-h: rgba(6,182,212,0.42);
          --ink: #0b2028;
          --ink-muted: rgba(11,32,40,0.45);
          --cyan: #06b6d4;
          --cyan2: #0891b2;
          --cyan-dim: rgba(6,182,212,0.1);
          --cyan-text: rgba(6,182,212,0.7);
          --dot: rgba(6,182,212,0.18);
          --glow: rgba(6,182,212,0.07);
          --spine: rgba(6,182,212,0.2);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #060e12;
            --surface: rgba(13,30,38,0.82);
            --surface2: rgba(13,30,38,0.5);
            --border: rgba(34,211,238,0.11);
            --border-h: rgba(34,211,238,0.34);
            --ink: #e8f6fa;
            --ink-muted: rgba(200,235,245,0.4);
            --cyan: #22d3ee;
            --cyan2: #67e8f9;
            --cyan-dim: rgba(34,211,238,0.07);
            --cyan-text: rgba(34,211,238,0.55);
            --dot: rgba(34,211,238,0.11);
            --glow: rgba(34,211,238,0.05);
            --spine: rgba(34,211,238,0.14);
          }
        }

        .exp-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: var(--bg);
          font-family: 'Geist', sans-serif;
          overflow: hidden;
          padding: 80px 0 100px;
        }

        .exp-bg-dots {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: radial-gradient(var(--dot) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .exp-bg-hline {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border);
          opacity: 0.5;
          pointer-events: none;
        }

        .exp-bg-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
        }

        .exp-bg-glow--1 {
          top: -80px;
          right: -80px;
          width: 480px;
          height: 480px;
        }

        .exp-bg-glow--2 {
          bottom: -60px;
          left: -60px;
          width: 340px;
          height: 340px;
        }

        .exp-wrap {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .exp-wrap--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .exp-header {
          text-align: center;
          margin-bottom: 34px;
        }

        .exp-overline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Geist Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan-text);
          margin-bottom: 20px;
        }

        .exp-overline__dash {
          width: 26px;
          height: 1px;
          background: var(--cyan);
          opacity: 0.5;
        }

        .exp-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(40px, 5.5vw, 64px);
          font-weight: 300;
          font-style: italic;
          color: var(--ink);
          line-height: 1;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }

        .exp-title--cyan {
          font-style: normal;
          font-weight: 500;
          color: var(--cyan);
        }

        .exp-subtitle {
          font-size: 14px;
          font-weight: 300;
          color: var(--ink-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
          font-family: 'Fraunces', serif;
          font-style: italic;
        }

        .exp-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin: 0 auto 64px;
        }

        .exp-tab {
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--cyan-text);
          font-family: 'Geist Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 11px 16px;
          cursor: pointer;
          transition: all 0.25s ease;
          backdrop-filter: blur(12px);
        }

        .exp-tab:hover,
        .exp-tab--active {
          border-color: var(--border-h);
          background: var(--cyan-dim);
          color: var(--cyan);
          transform: translateY(-1px);
        }

        .exp-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 48px;
          margin-bottom: 80px;
        }

        .exp-spine {
          display: none;
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--spine);
          transform: translateX(-50%);
        }

        @media (min-width: 1024px) {
          .exp-spine {
            display: block;
          }
        }

        .exp-row {
          position: relative;
          display: flex;
          align-items: flex-start;
          animation: expFadeUp 0.6s ease both;
        }

        @media (min-width: 1024px) {
          .exp-row--left {
            flex-direction: row;
          }

          .exp-row--right {
            flex-direction: row-reverse;
          }
        }

        .exp-dot {
          display: none;
          position: absolute;
          left: 50%;
          top: 28px;
          transform: translateX(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--ink-muted);
          cursor: pointer;
          z-index: 10;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .exp-dot--active {
          background: var(--cyan-dim);
          border-color: var(--cyan);
          color: var(--cyan);
        }

        .exp-dot:hover {
          border-color: var(--border-h);
          color: var(--cyan);
        }

        @media (min-width: 1024px) {
          .exp-dot {
            display: flex;
          }
        }

        .exp-card {
          width: 100%;
          cursor: pointer;
          background: var(--surface);
          border: 1px solid var(--border);
          backdrop-filter: blur(12px);
          transition: border-color 0.3s, transform 0.3s, background 0.4s;
          overflow: hidden;
        }

        .exp-card--active {
          border-color: var(--border-h);
          transform: translateY(-2px);
        }

        .exp-card:hover {
          border-color: var(--border-h);
        }

        @media (min-width: 1024px) {
          .exp-card {
            width: calc(50% - 40px);
          }

          .exp-row--left .exp-card {
            margin-right: 80px;
          }

          .exp-row--right .exp-card {
            margin-left: 80px;
          }
        }

        .exp-card__topline {
          height: 2px;
          background: var(--cyan);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .exp-card--active .exp-card__topline,
        .exp-card:hover .exp-card__topline {
          opacity: 0.6;
        }

        .exp-card__head {
          padding: 22px 24px 18px;
          border-bottom: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .exp-card__title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .exp-card__title {
          font-family: 'Fraunces', serif;
          font-size: 22px;
          font-weight: 300;
          font-style: italic;
          color: var(--ink);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .exp-card__company {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--cyan);
          letter-spacing: 0.01em;
        }

        .exp-card__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .exp-card__meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'Geist Mono', monospace;
          font-size: 10px;
          color: var(--ink-muted);
          letter-spacing: 0.04em;
        }

        .exp-card__badges {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .exp-badge {
          font-family: 'Geist Mono', monospace;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--cyan-text);
          background: var(--cyan-dim);
          border: 1px solid var(--border);
          padding: 3px 9px;
        }

        .exp-badge--current {
          color: #22c55e;
          background: rgba(34,197,94,0.08);
          border-color: rgba(34,197,94,0.25);
          animation: pulse-badge 2.5s ease-in-out infinite;
        }

        .exp-card__body {
          padding: 20px 24px 18px;
        }

        .exp-card__desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--ink-muted);
          margin: 0 0 18px;
          font-family: 'Fraunces', serif;
          font-style: italic;
        }

        .exp-impact {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-bottom: 0;
          border: 1px solid var(--border);
        }

        .exp-impact__cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px 8px;
          border-right: 1px solid var(--border);
          background: var(--surface2);
        }

        .exp-impact__cell:last-child {
          border-right: none;
        }

        .exp-impact__val {
          font-family: 'Fraunces', serif;
          font-size: 22px;
          font-weight: 300;
          font-style: italic;
          color: var(--cyan);
          line-height: 1;
        }

        .exp-impact__lbl {
          font-family: 'Geist Mono', monospace;
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-muted);
          margin-top: 4px;
        }

        .exp-expand {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.45s ease, opacity 0.35s ease;
        }

        .exp-expand--open {
          max-height: 700px;
          opacity: 1;
        }

        .exp-achievements {
          padding-top: 18px;
          margin-bottom: 16px;
        }

        .exp-section-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Geist Mono', monospace;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--cyan-text);
          margin-bottom: 10px;
        }

        .exp-achievement {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          margin-bottom: 5px;
          background: var(--surface2);
          border: 1px solid var(--border);
          font-size: 12px;
          color: var(--ink-muted);
          line-height: 1.6;
        }

        .exp-achievement__icon {
          color: var(--cyan);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .exp-skills {
          margin-bottom: 4px;
        }

        .exp-skills__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 8px;
        }

        .exp-skill-tag {
          font-family: 'Geist Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--cyan-text);
          background: var(--cyan-dim);
          border: 1px solid var(--border);
          padding: 3px 9px;
        }

        .exp-skill-tag:hover {
          border-color: var(--border-h);
          color: var(--cyan);
        }

        .exp-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Geist Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--cyan-text);
          transition: color 0.2s;
          padding: 0;
        }

        .exp-toggle:hover {
          color: var(--cyan);
        }

        .exp-spacer {
          display: none;
        }

        @media (min-width: 1024px) {
          .exp-spacer {
            display: block;
            width: calc(50% - 40px);
            flex-shrink: 0;
          }
        }

        .exp-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        @media (min-width: 640px) {
          .exp-stats {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .exp-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 28px 20px;
          background: var(--surface);
          gap: 6px;
          transition: background 0.2s;
        }

        .exp-stat:hover {
          background: var(--cyan-dim);
        }

        .exp-stat__val {
          font-family: 'Fraunces', serif;
          font-size: 36px;
          font-weight: 300;
          font-style: italic;
          color: var(--cyan);
          line-height: 1;
        }

        .exp-stat__lbl {
          font-family: 'Geist Mono', monospace;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--ink-muted);
          text-align: center;
        }

        @keyframes expFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-badge {
          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: 0.55;
          }
        }

        @media (max-width: 640px) {
          .exp-wrap {
            padding: 0 20px;
          }

          .exp-impact__val {
            font-size: 18px;
          }

          .exp-tab {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;