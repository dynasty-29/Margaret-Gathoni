import React, { useState, useEffect } from "react";
import { HiDownload, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logo2.png";
const Navbar = ({ scrollToSlide, slides, currentSlide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`nav-root ${isScrolled ? "nav-root--scrolled" : ""}`}
      >
        <div className="nav-inner">

          {/* Brand */}
          <button onClick={() => scrollToSlide(0)} className="nav-brand" aria-label="Go to top">
            <img
              src={logo}
              alt="Margaret Gathoni"
              className="nav-brand__logo"
            />
            <span className="nav-brand__first">Margaret</span>
            <span className="nav-brand__last">Gathoni</span>
            <span className="nav-brand__line" aria-hidden="true" />
          </button>

          {/* Desktop links */}
          <ul className="nav-links" >
            {slides.map((slide, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSlide(index)}
                  className={`nav-link ${currentSlide === index ? "nav-link--active" : ""}`}
                >
                  {currentSlide === index && (
                    <motion.span
                      layoutId="nav-pill"
                      className="nav-link__pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="nav-link__label">
                    {slide.name}
                    {currentSlide === index && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="nav-link__dot"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <a
              href="/Resume.pdf"
              download="Margaret_Gathoni_Resume.pdf"
              className="nav-cv-btn"
            >
              <HiDownload aria-hidden="true" />
              Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="nav-mobile-toggle"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <HiX aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
          </button>
        </div>

        {/* Progress bar */}
        <motion.div
          className="nav-progress"
          aria-hidden="true"
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-backdrop"
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="mobile-drawer__header">
                <span className="mobile-drawer__title">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-drawer__close"
                  aria-label="Close menu"
                >
                  <HiX aria-hidden="true" />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="mobile-drawer__nav">
                {slides.map((slide, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    onClick={() => {
                      scrollToSlide(index);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`mobile-nav-link ${currentSlide === index ? "mobile-nav-link--active" : ""}`}
                  >
                    <span>{slide.name}</span>
                    {currentSlide === index && (
                      <span className="mobile-nav-link__dot" aria-hidden="true" />
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="mobile-drawer__cta">
                <a
                  href="/Resume.pdf"
                  download="Margaret_Gathoni_Resume.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-cv-btn"
                >
                  <HiDownload aria-hidden="true" />
                  Download CV
                </a>
              </div>

              {/* Drawer socials */}
              <div className="mobile-drawer__socials">
                {[
                  {
                    href: "https://linkedin.com/in/margaret-gathoni",
                    label: "LinkedIn",
                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                  },
                  {
                    href: "https://github.com/dynasty-29",
                    label: "GitHub",
                    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                  },
                  {
                    href: "https://youtube.com/@SonnieCodes",
                    label: "YouTube",
                    d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-social"
                    aria-label={s.label}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
                      <path d={s.d} />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@1,300;1,500&family=Geist:wght@400;500;600&family=Geist+Mono:wght@300;400&display=swap');

        :root {
          --nav-bg-scrolled:  rgba(240,250,250,0.9);
          --nav-border:       rgba(6,182,212,0.16);
          --nav-border-hover: rgba(6,182,212,0.42);
          --ink:              #0b2028;
          --ink-muted:        rgba(11,32,40,0.45);
          --cyan:             #06b6d4;
          --cyan2:            #0891b2;
          --cyan-dim:         rgba(6,182,212,0.1);
          --cyan-text:        rgba(6,182,212,0.7);
          --drawer-bg:        rgba(245,252,252,0.98);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --nav-bg-scrolled:  rgba(6,14,18,0.92);
            --nav-border:       rgba(34,211,238,0.12);
            --nav-border-hover: rgba(34,211,238,0.36);
            --ink:              #e8f6fa;
            --ink-muted:        rgba(200,235,245,0.4);
            --cyan:             #22d3ee;
            --cyan2:            #67e8f9;
            --cyan-dim:         rgba(34,211,238,0.07);
            --cyan-text:        rgba(34,211,238,0.55);
            --drawer-bg:        rgba(6,14,18,0.98);
          }
        }

        /* ── Nav root ── */
        .nav-root {
          position: fixed;
          top: 0; left: 8rem; right: 0;
          z-index: 50;
          transition: background 0.4s, border-color 0.4s, backdrop-filter 0.4s;
        }
        .nav-root--scrolled {
          background: var(--nav-bg-scrolled);
          border-bottom: 1px solid var(--nav-border);
          backdrop-filter: blur(18px);
        }

        .nav-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ── Brand ── */
        .nav-brand {
          position: relative;
          display: flex; align-items: center; gap: 10px;
          background: none; border: none; cursor: pointer; padding: 0;
          transition: transform 0.2s;
        }
        .nav-brand:hover { transform: scale(1.03); }

        .nav-brand__first {
          font-family: 'Fraunces', serif;
          font-size: 22px; font-weight: 300; font-style: italic;
          color: var(--cyan); letter-spacing: -0.01em;
        }
        .nav-brand__last {
          font-family: 'Geist', sans-serif;
          font-size: 18px; font-weight: 600;
          color: var(--ink); letter-spacing: -0.02em;
          transition: color 0.4s;
        }
        .nav-brand__line {
          position: absolute; bottom: -2px; left: 0;
          height: 1px; width: 0;
          background: var(--cyan);
          transition: width 0.3s ease;
        }
        .nav-brand:hover .nav-brand__line { width: 100%; }

        /* ── Desktop links ── */
        .nav-links {
          display: flex; align-items: center; gap: 2px;
          list-style: none; margin: 0; padding: 0;
        }
        @media (max-width: 768px) { .nav-links { display: none; } }

        .nav-link {
          position: relative;
          background: none; border: none; cursor: pointer;
          padding: 8px 14px;
          font-family: 'Geist', sans-serif;
          font-size: 13px; font-weight: 500; letter-spacing: 0.02em;
          color: var(--ink-muted);
          transition: color 0.2s;
        }
        .nav-link--active,
        .nav-link:hover { color: var(--ink); }

        .nav-link__pill {
          position: absolute; inset: 0;
          background: var(--cyan-dim);
          border: 1px solid var(--nav-border);
          border-radius: 6px;
          z-index: 0;
        }
        .nav-link__label {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 6px;
        }
        .nav-link__dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--cyan); flex-shrink: 0;
        }

        /* ── Desktop CTA ── */
        .nav-cta { display: flex; align-items: center; }
        @media (max-width: 768px) { .nav-cta { display: none; } }

        .nav-cv-btn {
          display: flex; align-items: center; gap: 7px;
          padding: 9px 20px;
          background: var(--cyan); color: #f0fafa;
          font-family: 'Geist', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none; border: none;
          transition: background 0.2s, transform 0.2s;
        }
        .nav-cv-btn:hover { background: var(--cyan2); transform: translateY(-1px); }
        .nav-brand__logo {
          height: 56px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.2s, opacity 0.2s;
        }
        .nav-brand:hover .nav-brand__logo {
          transform: scale(1.05);
          opacity: 0.85;
        }

        /* ── Mobile toggle ── */
        .nav-mobile-toggle {
          display: none;
          background: none; cursor: pointer;
          padding: 7px;
          color: var(--ink); font-size: 20px;
          border: 1px solid var(--nav-border);
          align-items: center; justify-content: center;
          transition: border-color 0.2s, color 0.2s;
        }
        .nav-mobile-toggle:hover { border-color: var(--nav-border-hover); color: var(--cyan); }
        @media (max-width: 768px) { .nav-mobile-toggle { display: flex; } }

        /* ── Progress bar ── */
        .nav-progress {
          position: absolute; bottom: 0; left: 0;
          height: 2px; background: var(--cyan); opacity: 0.55;
        }

        /* ── Mobile backdrop ── */
        .mobile-backdrop {
          position: fixed; inset: 0;
          background: rgba(6,14,18,0.65);
          backdrop-filter: blur(4px);
          z-index: 40;
        }

        /* ── Mobile drawer ── */
        .mobile-drawer {
          position: fixed; top: 0; right: 0; bottom: 0;
          width: 288px;
          background: var(--drawer-bg);
          border-left: 1px solid var(--nav-border);
          backdrop-filter: blur(20px);
          z-index: 50;
          display: flex; flex-direction: column;
          overflow-y: auto;
        }

        .mobile-drawer__header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 22px;
          border-bottom: 1px solid var(--nav-border);
        }
        .mobile-drawer__title {
          font-family: 'Geist Mono', monospace;
          font-size: 9px; font-weight: 400;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--cyan-text);
        }
        .mobile-drawer__close {
          background: none; border: 1px solid var(--nav-border);
          cursor: pointer; color: var(--ink-muted);
          padding: 5px; font-size: 17px;
          display: flex; align-items: center; justify-content: center;
          transition: color 0.2s, border-color 0.2s;
        }
        .mobile-drawer__close:hover { color: var(--cyan); border-color: var(--nav-border-hover); }

        .mobile-drawer__nav {
          padding: 18px 18px;
          display: flex; flex-direction: column; gap: 3px;
          flex: 1;
        }

        .mobile-nav-link {
          width: 100%; text-align: left;
          display: flex; align-items: center; justify-content: space-between;
          padding: 11px 14px;
          background: none; border: 1px solid transparent;
          cursor: pointer;
          font-family: 'Geist', sans-serif;
          font-size: 13px; font-weight: 500;
          color: var(--ink-muted);
          transition: all 0.2s;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link--active {
          color: var(--ink);
          border-color: var(--nav-border);
          background: var(--cyan-dim);
        }
        .mobile-nav-link__dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--cyan); flex-shrink: 0;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .mobile-drawer__cta {
          padding: 14px 18px;
          border-top: 1px solid var(--nav-border);
        }
        .mobile-cv-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; padding: 12px;
          background: var(--cyan); color: #f0fafa;
          font-family: 'Geist', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s;
        }
        .mobile-cv-btn:hover { background: var(--cyan2); }

        .mobile-drawer__socials {
          display: flex; justify-content: center; gap: 8px;
          padding: 14px 18px 24px;
        }
        .mobile-social {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          background: var(--cyan-dim);
          border: 1px solid var(--nav-border);
          color: var(--ink-muted);
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
        }
        .mobile-social:hover { color: var(--cyan); border-color: var(--nav-border-hover); }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
      `}</style>
    </>
  );
};

export default Navbar;