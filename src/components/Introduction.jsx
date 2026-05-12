import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import headerimg from "../images/header-img.png";
import { HiMail } from "react-icons/hi";

/* ── Stagger container variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Introduction = () => {
  const [showEmailButton, setShowEmailButton] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  /* Smooth magnetic mouse for portrait tilt */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(springX, [-1, 1], [-10, 10]);
  const rotateX = useTransform(springY, [-1, 1], [8, -8]);

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
      mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const t = setTimeout(() => setShowEmailButton(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const roles = [
      "Full Stack Developer",
      "Data Scientist",
      "Game Developer/Designer",
      "AI/ML Engineer",
      "Cloud Architect",
    ];
    let currentText = "";
    let currentIndex = 0;
    const fullText = roles[currentRole];

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              setTypedText(currentText);
            } else {
              clearInterval(deletingInterval);
              setCurrentRole((prev) => (prev + 1) % roles.length);
            }
          }, 40);
        }, 2200);
      }
    }, 85);

    return () => clearInterval(typingInterval);
  }, [currentRole]);

  const profile = {
    name: "Margaret Gathoni",
    title: "Data Scientist & Full Stack Developer",
    location: "Nairobi, Kenya",
    bio: "Started with data, got pulled into software, then couldn't stop wondering what was powering the games I kept playing. Now I build it all: the data pipelines, the software, the game systems, the backend that makes everything feel effortless from the outside.",
    experience: "6+",
    email: "mgathoni.gathoni9@gmail.com",
    technologies: ["Python", "React", "TypeScript", "AWS", "Databases"],
    avatar_url: headerimg,
  };

  const socials = [
    { href: "https://linkedin.com/in/margaret-gathoni", label: "LinkedIn", d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { href: "https://github.com/dynasty-29", label: "GitHub", d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
    { href: "https://youtube.com/@SonnieCodes", label: "YouTube", d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
    { href: "https://medium.com/@SonnieCodes", label: "Medium", d: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" },
  ];

  const scrollToProjects = () => {
    document.getElementById("section-3")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const subject = "Let's Work Together";
    const body = `Hi Margaret,\n\nI came across your portfolio and I'm impressed by your work. I'd love to discuss potential opportunities.\n\nBest regards,`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section ref={sectionRef} className="hero">

      {/* ── Ambient background ── */}
      <div className="hero__bg-dots" aria-hidden="true" />
      <div className="hero__bg-grid" aria-hidden="true" />

      {/* Glows */}
      <div className="hero__glow hero__glow--tr" aria-hidden="true" />
      <div className="hero__glow hero__glow--bl" aria-hidden="true" />
      <div className="hero__glow hero__glow--center" aria-hidden="true" />

      {/* Horizontal rules */}
      <div className="hero__rule hero__rule--top" aria-hidden="true" />
      <div className="hero__rule hero__rule--bottom" aria-hidden="true" />

      {/* ── Contact pill (fixed) ── */}
      <motion.button
        onClick={handleEmailClick}
        initial={{ opacity: 0, y: -12 }}
        animate={showEmailButton ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="contact-pill"
        aria-label="Send email"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="contact-pill__dot" aria-hidden="true" />
        <HiMail size={13} />
        <span>Available — Let's talk</span>
      </motion.button>

      {/* ── MAIN LAYOUT ── */}
      <div className="hero__layout">

        {/* ── LEFT: giant background name + content ── */}
        <div className="hero__left">

          {/* Watermark name behind everything */}
          <motion.div
            className="hero__watermark"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            aria-hidden="true"
          >
            Margaret
          </motion.div>

          {/* Foreground content */}
          <motion.div
            className="hero__content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero__overline" variants={itemVariants}>
              <span className="hero__overline-dash" aria-hidden="true" />
              <span>{profile.location}</span>
              <span className="hero__overline-sep" aria-hidden="true">·</span>
              <span className="hero__overline-status">
                <span className="hero__status-dot" aria-hidden="true" />
                Available
              </span>
            </motion.div>

            <motion.h1 className="hero__name" variants={itemVariants}>
              <span className="hero__name-first">Margaret</span>
              <span className="hero__name-last">Gathoni</span>
            </motion.h1>

            <motion.div className="hero__role" variants={itemVariants} aria-live="polite">
              <span className="hero__role-slash">./</span>
              <span className="hero__role-text">{typedText}</span>
              <span className="hero__role-cursor" aria-hidden="true" />
            </motion.div>

            <motion.div className="hero__divider" variants={itemVariants} aria-hidden="true" />

            <motion.p className="hero__bio" variants={itemVariants}>
              {profile.bio}
            </motion.p>

            {/* Stats row */}
            <motion.div className="hero__stats" variants={itemVariants}>
              <div className="hero__stat">
                <span className="hero__stat-val">6+</span>
                <span className="hero__stat-lbl">Years Exp.</span>
              </div>
              <div className="hero__stat-sep" aria-hidden="true" />
              <div className="hero__stat">
                <span className="hero__stat-val">20+</span>
                <span className="hero__stat-lbl">Projects</span>
              </div>
              <div className="hero__stat-sep" aria-hidden="true" />
              <div className="hero__stat">
                <span className="hero__stat-val">3</span>
                <span className="hero__stat-lbl">Domains</span>
              </div>
            </motion.div>

            {/* Tech tags */}
            <motion.div className="hero__stack" variants={itemVariants}>
              {profile.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  className="hero__tag"
                  whileHover={{ y: -2, borderColor: "var(--cyan)" }}
                  transition={{ duration: 0.15 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div className="hero__actions" variants={itemVariants}>
              <motion.button
                onClick={scrollToProjects}
                className="hero__btn hero__btn--primary"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
              <motion.a
                href="/Resume.pdf"
                download
                className="hero__btn hero__btn--ghost"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div className="hero__socials" variants={itemVariants}>
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social"
                  aria-label={s.label}
                  whileHover={{ y: -3, color: "var(--cyan)", borderColor: "var(--border-h)" }}
                  transition={{ duration: 0.15 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d={s.d} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── RIGHT: portrait ── */}
        <div className="hero__right">

          {/* Decorative rings behind the image */}
          <motion.div
            className="hero__ring hero__ring--1"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="hero__ring hero__ring--2"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.45, ease: "easeOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="hero__ring hero__ring--3"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
            aria-hidden="true"
          />

          {/* Portrait frame with 3D tilt */}
          <motion.div
            className="hero__portrait-wrap"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ rotateY, rotateX, transformPerspective: 1000 }}
          >
            {/* Corner brackets */}
            <span className="hero__corner hero__corner--tl" aria-hidden="true" />
            <span className="hero__corner hero__corner--tr" aria-hidden="true" />
            <span className="hero__corner hero__corner--bl" aria-hidden="true" />
            <span className="hero__corner hero__corner--br" aria-hidden="true" />

            {/* The image — pushed visually "back" by the overlays on top */}
            <img
              src={profile.avatar_url}
              alt={`${profile.name} — ${profile.title}`}
              className="hero__portrait-img"
            />

            {/* Overlay layers that sit in FRONT of the image to push it back */}
            <div className="hero__portrait-overlay hero__portrait-overlay--vignette" aria-hidden="true" />
            <div className="hero__portrait-overlay hero__portrait-overlay--scanlines" aria-hidden="true" />
            <div className="hero__portrait-overlay hero__portrait-overlay--tint" aria-hidden="true" />

            {/* Index badge */}
            <span className="hero__portrait-index" aria-hidden="true">01 / PROFILE</span>
          </motion.div>

          {/* Floating credential card */}
          <motion.div
            className="hero__credential"
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
            whileHover={{ y: -3 }}
          >
            <span className="hero__credential-dot" aria-hidden="true" />
            <div>
              <p className="hero__credential-title">Open to work</p>
              <p className="hero__credential-sub">Full-time · Contract · Freelance</p>
            </div>
          </motion.div>

          {/* Floating exp badge */}
          <motion.div
            className="hero__exp-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
            whileHover={{ y: -3 }}
          >
            <span className="hero__exp-val">6+</span>
            <span className="hero__exp-lbl">Years</span>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,300;1,9..144,500&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@300;400&display=swap');

        /* ── Tokens ── */
        :root {
          --bg:        #060e12;
          --surface:   rgba(13,30,38,0.82);
          --surface2:  rgba(13,30,38,0.5);
          --border:    rgba(34,211,238,0.13);
          --border-h:  rgba(34,211,238,0.38);
          --ink:       #e8f6fa;
          --ink-muted: rgba(200,235,245,0.42);
          --cyan:      #22d3ee;
          --cyan2:     #06b6d4;
          --cyan-dim:  rgba(34,211,238,0.08);
          --cyan-text: rgba(34,211,238,0.58);
          --dot:       rgba(34,211,238,0.1);
          --glow:      rgba(34,211,238,0.06);
          --sep:       rgba(34,211,238,0.16);
          --ring:      rgba(34,211,238,0.07);
        }

        /* ── Section ── */
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: var(--bg);
          font-family: 'Geist', sans-serif;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        /* ── Background ── */
        .hero__bg-dots {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: radial-gradient(var(--dot) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .hero__bg-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 120px 120px;
          opacity: 0.25;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }
        .hero__glow {
          position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
          background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
        }
        .hero__glow--tr  { top: -120px; right: -80px;  width: 600px; height: 600px; background: radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 65%); }
        .hero__glow--bl  { bottom: -100px; left: -60px; width: 500px; height: 500px; background: radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%); }
        .hero__glow--center { top: 30%; left: 45%; width: 700px; height: 700px; transform: translate(-50%,-50%); background: radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 60%); }

        .hero__rule {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--border) 20%, var(--border) 80%, transparent 100%);
          pointer-events: none; z-index: 0;
        }
        .hero__rule--top    { top: 10%; }
        .hero__rule--bottom { bottom: 10%; }

        /* ── Contact pill ── */
        .contact-pill {
          position: fixed; top: 22px; right: 24px; z-index: 200;
          display: flex; align-items: center; gap: 8px;
          padding: 8px 16px;
          background: rgba(13,30,38,0.9);
          border: 1px solid var(--border);
          border-radius: 100px;
          color: var(--ink-muted);
          font-family: 'Geist Mono', monospace;
          font-size: 10px; font-weight: 400; letter-spacing: 0.08em;
          cursor: pointer;
          backdrop-filter: blur(12px);
        }
        .contact-pill__dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ade80; flex-shrink: 0;
          box-shadow: 0 0 7px rgba(74,222,128,0.6);
          animation: pulse 2.5s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 7px rgba(74,222,128,0.6); }
          50%       { box-shadow: 0 0 14px rgba(74,222,128,0.9); }
        }

        /* ── Layout ── */
        .hero__layout {
          position: relative; z-index: 10;
          width: 100%; max-width: 1280px;
          margin: 0 auto;
          padding: 0 64px;
          display: grid;
          grid-template-columns: 1fr 480px;
          gap: 0;
          align-items: center;
          min-height: 100vh;
        }

        /* ── LEFT ── */
        .hero__left {
          position: relative;
          padding: 100px 0 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Watermark */
        .hero__watermark {
          position: absolute;
          top: 50%; left: -20px;
          transform: translateY(-50%);
          font-family: 'Fraunces', serif;
          font-size: clamp(100px, 14vw, 180px);
          font-weight: 300; font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(34,211,238,0.07);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 0;
        }

        .hero__content {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; gap: 24px;
          max-width: 580px;
        }

        /* Overline */
        .hero__overline {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Geist Mono', monospace;
          font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--cyan-text);
        }
        .hero__overline-dash {
          display: inline-block; width: 28px; height: 1px;
          background: var(--cyan); opacity: 0.5;
        }
        .hero__overline-sep { opacity: 0.3; }
        .hero__overline-status {
          display: flex; align-items: center; gap: 6px;
        }
        .hero__status-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px rgba(74,222,128,0.7);
        }

        /* Name */
        .hero__name {
          display: flex; flex-direction: column;
          margin: 0; line-height: 0.9;
          gap: 4px;
        }
        .hero__name-first {
          font-family: 'Fraunces', serif;
          font-size: clamp(52px, 6.5vw, 80px);
          font-weight: 300; font-style: italic;
          color: var(--ink);
          letter-spacing: -0.02em;
        }
        .hero__name-last {
          font-family: 'Fraunces', serif;
          font-size: clamp(44px, 5.5vw, 68px);
          font-weight: 500; font-style: normal;
          color: var(--cyan);
          letter-spacing: -0.02em;
        }

        /* Role */
        .hero__role {
          display: flex; align-items: center;
          font-family: 'Geist Mono', monospace;
          font-size: 12px; letter-spacing: 0.06em;
          color: var(--ink-muted);
          height: 24px;
        }
        .hero__role-slash { color: var(--cyan); margin-right: 5px; opacity: 0.7; }
        .hero__role-text  { color: var(--cyan); }
        .hero__role-cursor {
          display: inline-block; width: 7px; height: 14px;
          background: var(--cyan); margin-left: 3px; vertical-align: middle;
          animation: blink 1.1s step-end infinite;
        }

        /* Divider */
        .hero__divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, var(--cyan) 0%, var(--sep) 40%, transparent 100%);
          opacity: 0.4;
        }

        /* Bio */
        .hero__bio {
          font-family: 'Fraunces', serif;
          font-size: 14px; font-weight: 300; font-style: italic;
          line-height: 1.9; color: var(--ink-muted); margin: 0;
          padding-left: 20px;
          border-left: 2px solid var(--sep);
          position: relative;
          max-width: 480px;
        }
        .hero__bio::before {
          content: ''; position: absolute;
          left: -1px; top: 0; width: 2px; height: 44px;
          background: var(--cyan); opacity: 0.65;
        }

        /* Stats */
        .hero__stats {
          display: flex; align-items: center; gap: 0;
          border: 1px solid var(--border);
          background: var(--surface);
          backdrop-filter: blur(8px);
          overflow: hidden;
          width: fit-content;
        }
        .hero__stat {
          display: flex; flex-direction: column; align-items: center;
          padding: 14px 28px; gap: 4px;
          transition: background 0.2s;
        }
        .hero__stat:hover { background: var(--cyan-dim); }
        .hero__stat-val {
          font-family: 'Fraunces', serif;
          font-size: 28px; font-weight: 300; font-style: italic;
          color: var(--cyan); line-height: 1;
        }
        .hero__stat-lbl {
          font-family: 'Geist Mono', monospace;
          font-size: 8px; text-transform: uppercase;
          letter-spacing: 0.14em; color: var(--ink-muted);
        }
        .hero__stat-sep {
          width: 1px; height: 44px;
          background: var(--border); flex-shrink: 0;
        }

        /* Tags */
        .hero__stack { display: flex; flex-wrap: wrap; gap: 6px; }
        .hero__tag {
          padding: 4px 11px;
          background: var(--cyan-dim);
          border: 1px solid var(--border);
          font-family: 'Geist Mono', monospace;
          font-size: 9px; color: var(--cyan-text);
          letter-spacing: 0.06em;
          cursor: default;
        }

        /* Buttons */
        .hero__actions { display: flex; gap: 10px; flex-wrap: wrap; }
        .hero__btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px;
          font-family: 'Geist', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; text-decoration: none; border: none;
          transition: all 0.2s;
        }
        .hero__btn--primary { background: var(--cyan); color: var(--bg); }
        .hero__btn--primary:hover { background: var(--cyan2); }
        .hero__btn--ghost {
          background: transparent; color: var(--cyan);
          border: 1px solid var(--border);
        }
        .hero__btn--ghost:hover { border-color: var(--border-h); }

        /* Socials */
        .hero__socials { display: flex; gap: 7px; }
        .hero__social {
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          background: var(--cyan-dim);
          border: 1px solid var(--border);
          color: var(--cyan-text); text-decoration: none;
        }

        /* ── RIGHT ── */
        .hero__right {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Rings */
        .hero__ring {
          position: absolute; border-radius: 50%;
          border: 1px solid var(--ring);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .hero__ring--1 { width: 340px; height: 340px; border-color: rgba(34,211,238,0.12); }
        .hero__ring--2 { width: 460px; height: 460px; border-color: rgba(34,211,238,0.07); }
        .hero__ring--3 { width: 580px; height: 580px; border-color: rgba(34,211,238,0.04); }

        /* Portrait */
        .hero__portrait-wrap {
          position: relative;
          width: 340px; height: 440px;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .hero__portrait-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          /* Desaturated + dim to push it "behind" the overlays */
          filter: grayscale(25%) saturate(0.75) brightness(0.78) contrast(1.08);
          transition: filter 0.5s;
          z-index: 0;
        }
        .hero__portrait-wrap:hover .hero__portrait-img {
          filter: grayscale(0%) saturate(1) brightness(0.88) contrast(1.05);
        }

        /* Overlays sit IN FRONT of the image, pushing it visually backward */
        .hero__portrait-overlay {
          position: absolute; inset: 0; pointer-events: none;
        }
        .hero__portrait-overlay--vignette {
          background: radial-gradient(ellipse at center, transparent 40%, rgba(6,14,18,0.7) 100%);
          z-index: 1;
        }
        .hero__portrait-overlay--scanlines {
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.06) 2px,
            rgba(0,0,0,0.06) 4px
          );
          z-index: 2;
        }
        .hero__portrait-overlay--tint {
          background: linear-gradient(
            135deg,
            rgba(34,211,238,0.12) 0%,
            transparent 50%,
            rgba(6,14,18,0.45) 100%
          );
          z-index: 3;
          mix-blend-mode: color-dodge;
        }

        /* Corner brackets */
        .hero__corner {
          position: absolute; width: 22px; height: 22px;
          z-index: 10; pointer-events: none;
          opacity: 0.6;
        }
        .hero__corner--tl { top: -6px; left: -6px; border-top: 2px solid var(--cyan); border-left: 2px solid var(--cyan); }
        .hero__corner--tr { top: -6px; right: -6px; border-top: 2px solid var(--cyan); border-right: 2px solid var(--cyan); }
        .hero__corner--bl { bottom: -6px; left: -6px; border-bottom: 2px solid var(--cyan); border-left: 2px solid var(--cyan); }
        .hero__corner--br { bottom: -6px; right: -6px; border-bottom: 2px solid var(--cyan); border-right: 2px solid var(--cyan); }

        /* Index badge */
        .hero__portrait-index {
          position: absolute; top: 12px; right: -1px; z-index: 10;
          font-family: 'Geist Mono', monospace;
          font-size: 7px; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          background: rgba(34,211,238,0.15);
          border: 1px solid rgba(34,211,238,0.2);
          padding: 3px 8px;
          backdrop-filter: blur(6px);
        }

        /* Credential card */
        .hero__credential {
          position: absolute;
          bottom: calc(50% - 240px);
          right: -20px;
          display: flex; align-items: center; gap: 10px;
          padding: 12px 16px;
          background: rgba(13,30,38,0.92);
          border: 1px solid var(--border);
          backdrop-filter: blur(12px);
          min-width: 220px;
          cursor: default;
        }
        .hero__credential-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22c55e; flex-shrink: 0;
          box-shadow: 0 0 8px rgba(34,197,94,0.6);
        }
        .hero__credential-title {
          margin: 0; font-size: 11px; font-weight: 600;
          color: var(--ink); font-family: 'Geist', sans-serif;
          letter-spacing: 0.04em;
        }
        .hero__credential-sub {
          margin: 2px 0 0; font-size: 9px;
          color: var(--ink-muted); letter-spacing: 0.06em;
          font-family: 'Geist Mono', monospace;
        }

        /* Exp badge */
        .hero__exp-badge {
          position: absolute;
          top: calc(50% - 230px);
          left: -28px;
          display: flex; flex-direction: column; align-items: center;
          padding: 14px 18px;
          background: var(--cyan);
          cursor: default;
        }
        .hero__exp-val {
          font-family: 'Fraunces', serif;
          font-size: 26px; font-weight: 300; font-style: italic;
          color: var(--bg); line-height: 1;
        }
        .hero__exp-lbl {
          font-family: 'Geist Mono', monospace;
          font-size: 7px; text-transform: uppercase;
          letter-spacing: 0.14em; color: rgba(6,14,18,0.7);
          margin-top: 3px;
        }

        /* Scroll hint */
        .hero__scroll {
          position: absolute; bottom: 28px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center;
          z-index: 10;
        }
        .hero__scroll-track {
          width: 1px; height: 48px;
          background: var(--border); position: relative; overflow: hidden;
        }
        .hero__scroll-thumb {
          width: 1px; height: 14px;
          background: var(--cyan); opacity: 0.7;
          position: absolute; top: 0;
          animation: scrollThumb 2.2s ease-in-out infinite;
        }

        /* ── Animations ── */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes scrollThumb {
          0%   { top: -14px; opacity: 0; }
          20%  { opacity: 0.7; }
          80%  { opacity: 0.7; }
          100% { top: 48px; opacity: 0; }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero__layout {
            grid-template-columns: 1fr 400px;
            padding: 0 40px;
            gap: 0;
          }
        }
        @media (max-width: 860px) {
          .hero__layout {
            grid-template-columns: 1fr;
            padding: 100px 28px 60px;
            min-height: auto;
            gap: 48px;
          }
          .hero__left { padding: 0; }
          .hero__right {
            height: 420px;
            order: -1;
          }
          .hero__watermark { font-size: 80px; }
          .hero__credential { right: 0; bottom: 16px; }
          .hero__exp-badge  { left: 0; top: 16px; }
        }
        @media (max-width: 480px) {
          .hero__layout { padding: 80px 20px 40px; }
          .hero__right  { height: 340px; }
          .hero__portrait-wrap { width: 260px; height: 340px; }
          .hero__actions { flex-direction: column; }
          .hero__btn { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Introduction;