import { useState, useEffect } from "react";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const sections = [
  {
    component: <Introduction />,
    name: "Introduction",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    component: <Projects />,
    name: "Projects",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    component: <Skills />,
    name: "Skills",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
  {
    component: <Experience />,
    name: "Experience",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
];

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sidebarHovered, setSidebarHovered] = useState(false);

  /* Scroll to top on mount */
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, null, " ");
    }
  }, []);

  /* Track active section */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sections.forEach((_, index) => {
        const el = document.getElementById(`section-${index}`);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const el = document.getElementById(`section-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentSection(index);
    }
  };

  return (
    <div className="home-root">

      <Navbar
        scrollToSlide={scrollToSection}
        slides={sections}
        currentSlide={currentSection}
      />

      {/* ── Left sidebar ── */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        onMouseEnter={() => setSidebarHovered(true)}
        onMouseLeave={() => setSidebarHovered(false)}
        className="home-sidebar"
        aria-label="Section navigation"
      >
        {/* Top brand mark */}
        <div className="sidebar-brand" aria-hidden="true">
          <div className="sidebar-brand__ring" />
          <div className="sidebar-brand__dot" />
        </div>

        {/* Nav buttons */}
        <nav className="sidebar-nav">
          {sections.map((section, index) => {
            const isActive = currentSection === index;
            return (
              <motion.button
                key={index}
                onClick={() => scrollToSection(index)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`sidebar-btn ${isActive ? "sidebar-btn--active" : ""}`}
                aria-label={`Navigate to ${section.name}`}
                aria-current={isActive ? "true" : undefined}
              >
                {/* Active left-edge bar */}
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-bar"
                    className="sidebar-btn__bar"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    aria-hidden="true"
                  />
                )}

                {/* Icon box */}
                <div className="sidebar-btn__icon">
                  {section.icon}
                </div>

                {/* Index number */}
                <span className="sidebar-btn__num">0{index + 1}</span>

                {/* Tooltip */}
                <span
                  className={`sidebar-tooltip ${sidebarHovered ? "sidebar-tooltip--visible" : ""}`}
                  aria-hidden="true"
                >
                  <span className="sidebar-tooltip__arrow" />
                  {section.name}
                </span>
              </motion.button>
            );
          })}
        </nav>

        {/* Bottom progress pips */}
        <div className="sidebar-pips" aria-hidden="true">
          {sections.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(index)}
              whileHover={{ scale: 1.3 }}
              className="sidebar-pip-btn"
              aria-label={`Go to section ${index + 1}`}
            >
              <span
                className={`sidebar-pip ${currentSection === index ? "sidebar-pip--active" : ""}`}
              />
            </motion.button>
          ))}
        </div>

        {/* Decorative vertical line above pips */}
        <div className="sidebar-vline" aria-hidden="true" />
      </motion.aside>

      {/* ── Main content ── */}
      <main className="home-main">
        {sections.map((section, index) => (
          <section
            key={index}
            id={`section-${index}`}
            className="home-section"
          >
            {section.component}
          </section>
        ))}

        <Footer scrollToSection={scrollToSection} sections={sections} />
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400&display=swap');

        :root {
          --bg:          #f0fafa;
          --sidebar-bg:  rgba(240,250,250,0.95);
          --border:      rgba(6,182,212,0.16);
          --border-h:    rgba(6,182,212,0.42);
          --ink:         #0b2028;
          --ink-muted:   rgba(11,32,40,0.4);
          --cyan:        #06b6d4;
          --cyan-dim:    rgba(6,182,212,0.1);
          --cyan-text:   rgba(6,182,212,0.65);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --bg:          #060e12;
            --sidebar-bg:  rgba(6,14,18,0.96);
            --border:      rgba(34,211,238,0.11);
            --border-h:    rgba(34,211,238,0.34);
            --ink:         #e8f6fa;
            --ink-muted:   rgba(200,235,245,0.35);
            --cyan:        #22d3ee;
            --cyan-dim:    rgba(34,211,238,0.07);
            --cyan-text:   rgba(34,211,238,0.5);
          }
        }

        /* ── Root ── */
        .home-root {
          position: relative;
          min-height: 100vh;
          background: var(--bg);
          transition: background 0.4s;
        }

        /* ── Sidebar ── */
        .home-sidebar {
          position: fixed;
          left: 0; top: 0; bottom: 0;
          width: 100px;
          background: var(--sidebar-bg);
          border-right: 1px solid var(--border);
          backdrop-filter: blur(18px);
          z-index: 50;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: background 0.4s, border-color 0.4s;
        }
        @media (min-width: 768px) { .home-sidebar { width: 88px; } }

        /* Brand mark */
        .sidebar-brand {
          position: absolute;
          top: 28px; left: 50%;
          transform: translateX(-50%);
          width: 28px; height: 28px;
          display: flex; align-items: center; justify-content: center;
        }
        .sidebar-brand__ring {
          position: absolute;
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 1px solid var(--border);
        }
        .sidebar-brand__dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--cyan);
          opacity: 0.7;
        }

        /* Nav */
        .sidebar-nav {
          display: flex; flex-direction: column;
          align-items: center; gap: 8px;
        }

        /* Button */
        .sidebar-btn {
          position: relative;
          display: flex; flex-direction: column;
          align-items: center; gap: 4px;
          background: none; border: none; cursor: pointer;
          padding: 6px 0; width: 100%;
        }

        /* Active bar */
        .sidebar-btn__bar {
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 2px; height: 44px;
          background: var(--cyan);
          border-radius: 0 2px 2px 0;
        }

        /* Icon box */
        .sidebar-btn__icon {
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--ink-muted);
          transition: all 0.2s;
        }
        .sidebar-btn--active .sidebar-btn__icon {
          background: var(--cyan-dim);
          border-color: var(--cyan);
          color: var(--cyan);
        }
        .sidebar-btn:not(.sidebar-btn--active):hover .sidebar-btn__icon {
          border-color: var(--border-h);
          color: var(--cyan);
          background: var(--cyan-dim);
        }

        /* Index number */
        .sidebar-btn__num {
          font-family: 'Geist Mono', monospace;
          font-size: 9px; font-weight: 400;
          letter-spacing: 0.1em;
          color: var(--ink-muted);
          transition: color 0.2s;
        }
        .sidebar-btn--active .sidebar-btn__num { color: var(--cyan); }

        /* Tooltip */
        .sidebar-tooltip {
          position: absolute;
          left: calc(100% + 14px);
          top: 50%; transform: translateY(-50%);
          background: var(--sidebar-bg);
          border: 1px solid var(--border);
          backdrop-filter: blur(12px);
          padding: 6px 14px;
          font-family: 'Geist Mono', monospace;
          font-size: 10px; font-weight: 400;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--ink);
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateY(-50%) translateX(-6px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .sidebar-tooltip--visible {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .sidebar-tooltip__arrow {
          position: absolute;
          right: 100%; top: 50%;
          transform: translateY(-50%);
          width: 6px; height: 10px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          background: var(--border);
        }

        /* Pips */
        .sidebar-pips {
          position: absolute;
          bottom: 32px;
          display: flex; flex-direction: column;
          align-items: center; gap: 6px;
        }
        .sidebar-pip-btn {
          background: none; border: none; cursor: pointer; padding: 2px;
          display: flex; align-items: center; justify-content: center;
        }
        .sidebar-pip {
          display: block;
          width: 2px; height: 8px;
          background: var(--border);
          transition: all 0.3s;
          border-radius: 1px;
        }
        .sidebar-pip--active {
          background: var(--cyan);
          height: 20px;
        }

        /* Decorative vertical line */
        .sidebar-vline {
          position: absolute;
          bottom: 80px;
          width: 1px; height: 28px;
          background: linear-gradient(180deg, var(--border) 0%, transparent 100%);
        }

        /* ── Main ── */
        .home-main {
          margin-left: 80px;
        }
        @media (min-width: 768px) { .home-main { margin-left: 88px; } }

        .home-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .home-section > * { width: 100%; }
      `}</style>
    </div>
  );
};

export default Home;