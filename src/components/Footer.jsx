import React from "react";

const Footer = ({ scrollToSection, sections }) => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      href: "https://linkedin.com/in/margaret-gathoni", label: "LinkedIn",
      d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      href: "https://github.com/dynasty-29", label: "GitHub",
      d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      href: "https://youtube.com/@SonnieCodes", label: "YouTube",
      d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
    },
    {
      href: "https://medium.com/@SonnieCodes", label: "Medium",
      d: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
    },
  ];

  return (
    <footer className="ft-root">

      {/* ── Sky + Silhouette scene ── */}
      <div className="ft-scene" aria-hidden="true">
        <div className="ft-sky-glow ft-sky-glow--l" />
        <div className="ft-sky-glow ft-sky-glow--r" />
        <div className="ft-dots" />

        {/*
          City skyline silhouette — single connected SVG path
          The shape is a skyline profile: flat ground at bottom,
          rising into towers, cranes, antennas and varied rooflines.
          Fill is solid so it masks the sky above like the reference image.
        */}
        <svg
          className="ft-skyline-svg"
          viewBox="0 0 1440 260"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back row — lighter, shorter buildings */}
          <path
            className="ft-sil-back"
            d="
              M0,260 L0,180
              L30,180 L30,155 L50,155 L50,180
              L80,180 L80,145 L100,145 L100,180
              L130,180 L130,160 L155,160 L155,180
              L185,180 L185,140 L195,140 L195,125 L200,125 L200,140
              L210,140 L210,180
              L240,180 L240,150 L265,150 L265,180
              L295,180 L295,138 L315,138 L315,180
              L345,180 L345,155 L370,155 L370,180
              L400,180 L400,142 L415,142 L415,128 L420,128 L420,142
              L430,142 L430,180
              L460,180 L460,148 L485,148 L485,180
              L515,180 L515,135 L535,135 L535,180
              L565,180 L565,152 L590,152 L590,180
              L620,180 L620,140 L635,140 L635,125 L640,125 L640,140
              L650,140 L650,180
              L680,180 L680,145 L705,145 L705,180
              L735,180 L735,132 L755,132 L755,180
              L785,180 L785,148 L810,148 L810,180
              L840,180 L840,138 L855,138 L855,122 L860,122 L860,138
              L870,138 L870,180
              L900,180 L900,150 L925,150 L925,180
              L955,180 L955,140 L975,140 L975,180
              L1005,180 L1005,155 L1030,155 L1030,180
              L1060,180 L1060,142 L1075,142 L1075,128 L1080,128 L1080,142
              L1090,142 L1090,180
              L1120,180 L1120,148 L1145,148 L1145,180
              L1175,180 L1175,135 L1195,135 L1195,180
              L1225,180 L1225,152 L1250,152 L1250,180
              L1280,180 L1280,145 L1300,145 L1300,180
              L1330,180 L1330,160 L1355,160 L1355,180
              L1385,180 L1385,148 L1410,148 L1410,180
              L1440,180 L1440,260 Z
            "
          />

          {/* Front row — main dramatic skyline silhouette */}
          <path
            className="ft-sil-front"
            d="
              M0,260 L0,200
              L0,200 L20,200 L20,175 L22,175 L22,160 L24,160 L24,175
              L44,175 L44,145 L64,145 L64,130
              L66,130 L66,115 L68,115 L68,130
              L88,130 L88,155 L108,155 L108,115
              L110,115 L110,95 L112,95 L112,115
              L132,115 L132,145
              L152,145 L152,100 L172,100 L172,80
              L174,80 L174,62 L176,62 L176,80
              L196,80 L196,110 L216,110 L216,145
              L236,145 L236,90 L240,90 L240,70
              L242,70 L242,52 L244,52 L244,70
              L264,70 L264,100 L284,100 L284,130 L304,130 L304,145
              L324,145 L324,85 L328,85 L328,60
              L330,60 L330,40 L332,40 L332,60
              L352,60 L352,95 L372,95 L372,130 L392,130 L392,145
              L412,145 L412,105 L432,105 L432,80
              L434,80 L434,55 L436,55 L436,80
              L456,80 L456,115 L476,115 L476,145
              L496,145 L496,95 L500,95 L500,72
              L502,72 L502,48 L504,48 L504,72
              L524,72 L524,105 L544,105 L544,135 L564,135 L564,145
              L584,145 L584,88 L588,88 L588,60
              L590,60 L590,35 L592,35 L592,60
              L612,60 L612,95 L632,95 L632,125 L652,125 L652,145
              L672,145 L672,100 L692,100 L692,78
              L694,78 L694,55 L696,55 L696,78
              L716,78 L716,108 L736,108 L736,145
              L756,145 L756,90 L760,90 L760,65
              L762,65 L762,42 L764,42 L764,65
              L784,65 L784,98 L804,98 L804,130 L824,130 L824,145
              L844,145 L844,85 L848,85 L848,58
              L850,58 L850,38 L852,38 L852,58
              L872,58 L872,92 L892,92 L892,125 L912,125 L912,145
              L932,145 L932,100 L952,100 L952,80
              L954,80 L954,58 L956,58 L956,80
              L976,80 L976,112 L996,112 L996,145
              L1016,145 L1016,92 L1020,92 L1020,68
              L1022,68 L1022,48 L1024,48 L1024,68
              L1044,68 L1044,100 L1064,100 L1064,132 L1084,132 L1084,145
              L1104,145 L1104,88 L1108,88 L1108,62
              L1110,62 L1110,40 L1112,40 L1112,62
              L1132,62 L1132,96 L1152,96 L1152,128 L1172,128 L1172,145
              L1192,145 L1192,102 L1212,102 L1212,82
              L1214,82 L1214,60 L1216,60 L1216,82
              L1236,82 L1236,115 L1256,115 L1256,145
              L1276,145 L1276,95 L1280,95 L1280,70
              L1282,70 L1282,50 L1284,50 L1284,70
              L1304,70 L1304,102 L1324,102 L1324,135 L1344,135 L1344,145
              L1364,145 L1364,108 L1384,108 L1384,155
              L1404,155 L1404,170 L1420,170 L1420,185
              L1440,185 L1440,200 L1440,260 Z
            "
          />

          {/* Lit windows — small cyan dots scattered on buildings */}
          <g className="ft-windows">
            <rect x="68"   y="68"  width="3" height="3" />
            <rect x="112"  y="100" width="3" height="3" />
            <rect x="176"  y="68"  width="3" height="3" />
            <rect x="244"  y="56"  width="3" height="3" />
            <rect x="332"  y="44"  width="3" height="3" />
            <rect x="436"  y="58"  width="3" height="3" />
            <rect x="504"  y="52"  width="3" height="3" />
            <rect x="592"  y="38"  width="3" height="3" />
            <rect x="696"  y="58"  width="3" height="3" />
            <rect x="764"  y="46"  width="3" height="3" />
            <rect x="852"  y="42"  width="3" height="3" />
            <rect x="956"  y="62"  width="3" height="3" />
            <rect x="1024" y="52"  width="3" height="3" />
            <rect x="1112" y="44"  width="3" height="3" />
            <rect x="1216" y="64"  width="3" height="3" />
            <rect x="1284" y="54"  width="3" height="3" />
            {/* Scattered mid-building windows */}
            <rect x="160"  y="110" width="2" height="2" />
            <rect x="380"  y="100" width="2" height="2" />
            <rect x="540"  y="115" width="2" height="2" />
            <rect x="720"  y="108" width="2" height="2" />
            <rect x="880"  y="102" width="2" height="2" />
            <rect x="1050" y="108" width="2" height="2" />
            <rect x="1200" y="115" width="2" height="2" />
            <rect x="1340" y="108" width="2" height="2" />
          </g>
        </svg>
      </div>

      {/* ── Footer content ── */}
      <div className="ft-body">
        <div className="ft-grid">

          {/* Brand */}
          <div className="ft-col">
            <div className="ft-brand">
              <span className="ft-brand__first">Margaret</span>
              <span className="ft-brand__last">Gathoni</span>
            </div>
            <p className="ft-brand__role">Data Scientist &amp; Full Stack Developer</p>
            <p className="ft-brand__bio">
              Building scalable systems that bridge technology, data, and human impact.
              Specialised in healthcare informatics, AI/ML, and cloud-native solutions.
            </p>
            <div className="ft-socials">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label={s.label}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="ft-col">
            <div className="ft-col__label">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Quick Navigation
            </div>
            <ul className="ft-nav" >
              {sections && sections.map((section, index) => (
                <li key={index}>
                  <button onClick={() => scrollToSection(index)} className="ft-nav__link">
                    <span className="ft-nav__tick" aria-hidden="true" />
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="ft-col">
            <div className="ft-col__label">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get In Touch
            </div>
            <div className="ft-contact">
              <div className="ft-contact__row">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Nairobi, Kenya
              </div>
              <div className="ft-contact__row">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:mgathoni.gathoni9@gmail.com" className="ft-contact__link">
                  mgathoni.gathoni9@gmail.com
                </a>
              </div>
              <a href="/Resume.pdf" download className="ft-cv-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <p className="ft-copy">&copy; {currentYear} Margaret Gathoni. Built with React.</p>
          <div className="ft-avail">
            <span className="ft-avail__dot" aria-hidden="true" />
            Available for opportunities
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@1,300;1,500&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@300;400&display=swap');

        :root {
          --ft-page-bg:  #f0fafa;
          --ft-sky-bg:   #f0fafa;
          --ft-body-bg:  #0b2028;
          --ft-sil-f:    #0b2028;
          --ft-sil-b:    rgba(11,32,40,0.35);
          --ft-win:      #06b6d4;
          --ft-glow:     rgba(6,182,212,0.13);
          --ft-dot:      rgba(6,182,212,0.14);
          --ft-border:   rgba(6,182,212,0.18);
          --ft-border-h: rgba(6,182,212,0.5);
          --ft-cyan:     #06b6d4;
          --ft-cyan2:    #0891b2;
          --ft-cyan-dim: rgba(6,182,212,0.12);
          --ft-cyan-txt: rgba(6,182,212,0.65);
          --ft-ink:      rgba(255,255,255,0.85);
          --ft-muted:    rgba(255,255,255,0.38);
          --ft-divider:  rgba(255,255,255,0.07);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --ft-page-bg:  #060e12;
            --ft-sky-bg:   #060e12;
            --ft-body-bg:  #030a0e;
            --ft-sil-f:    #22d3ee;
            --ft-sil-b:    rgba(34,211,238,0.2);
            --ft-win:      #ffffff;
            --ft-glow:     rgba(34,211,238,0.1);
            --ft-dot:      rgba(34,211,238,0.1);
            --ft-border:   rgba(34,211,238,0.12);
            --ft-border-h: rgba(34,211,238,0.4);
            --ft-cyan:     #22d3ee;
            --ft-cyan2:    #67e8f9;
            --ft-cyan-dim: rgba(34,211,238,0.08);
            --ft-cyan-txt: rgba(34,211,238,0.55);
            --ft-ink:      rgba(255,255,255,0.85);
            --ft-muted:    rgba(200,235,245,0.35);
            --ft-divider:  rgba(34,211,238,0.08);
          }
        }

        .ft-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          font-family: 'Geist', sans-serif;
          background: var(--ft-page-bg);
          transition: background 0.4s;
        }

        /* ── Scene (sky + silhouette) ── */
        .ft-scene {
          position: relative;
          width: 100%;
          height: 260px;
          background: var(--ft-sky-bg);
          overflow: hidden;
          transition: background 0.4s;
        }

        /* Horizon glows */
        .ft-sky-glow {
          position: absolute; bottom: 0;
          border-radius: 50%; pointer-events: none;
          background: radial-gradient(ellipse, var(--ft-glow) 0%, transparent 70%);
        }
        .ft-sky-glow--l { left: 15%;  width: 500px; height: 220px; }
        .ft-sky-glow--r { right: 10%; width: 380px; height: 180px; }

        /* Dot grid — sky only */
        .ft-dots {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(var(--ft-dot) 1px, transparent 1px);
          background-size: 24px 24px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 80%);
          -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 80%);
        }

        /* The SVG */
        .ft-skyline-svg {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 100%;
          display: block;
        }
        .ft-sil-back { fill: var(--ft-sil-b); }
        .ft-sil-front { fill: var(--ft-sil-f); }
        .ft-windows rect { fill: var(--ft-win); opacity: 0.9; }

        /* ── Body ── */
        .ft-body {
          background: var(--ft-body-bg);
          position: relative; z-index: 1;
          transition: background 0.4s;
        }

        .ft-grid {
          max-width: 1100px; margin: 0 auto;
          padding: 52px 40px 48px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 52px;
        }
        @media (max-width: 860px) {
          .ft-grid { grid-template-columns: 1fr; gap: 36px; }
        }

        /* Brand */
        .ft-brand { display: flex; align-items: baseline; gap: 8px; margin-bottom: 5px; }
        .ft-brand__first {
          font-family: 'Fraunces', serif;
          font-size: 26px; font-weight: 300; font-style: italic;
          color: var(--ft-cyan); letter-spacing: -0.01em;
        }
        .ft-brand__last {
          font-family: 'Geist', sans-serif;
          font-size: 21px; font-weight: 600;
          color: var(--ft-ink); letter-spacing: -0.02em;
        }
        .ft-brand__role {
          font-family: 'Geist Mono', monospace;
          font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--ft-cyan-txt); margin-bottom: 14px;
        }
        .ft-brand__bio {
          font-family: 'Fraunces', serif;
          font-size: 13px; font-weight: 300; font-style: italic;
          color: var(--ft-muted); line-height: 1.8; margin: 0 0 22px;
        }

        .ft-socials { display: flex; gap: 7px; }
        .ft-social {
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          background: var(--ft-cyan-dim);
          border: 1px solid var(--ft-border);
          color: var(--ft-muted);
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
        }
        .ft-social:hover { color: var(--ft-cyan); border-color: var(--ft-border-h); }

        /* Col label */
        .ft-col__label {
          display: flex; align-items: center; gap: 7px;
          font-family: 'Geist Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--ft-cyan-txt);
          margin-bottom: 18px; padding-bottom: 12px;
          border-bottom: 1px solid var(--ft-divider);
        }
        .ft-col__label svg { color: var(--ft-cyan); }

        /* Nav */
        .ft-nav { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; }
        .ft-nav__link {
          display: flex; align-items: center; gap: 10px;
          background: none; border: none; cursor: pointer;
          padding: 7px 0;
          font-family: 'Geist', sans-serif;
          font-size: 13px; font-weight: 400;
          color: var(--ft-muted);
          transition: color 0.2s; text-align: left; width: 100%;
        }
        .ft-nav__link:hover { color: var(--ft-cyan); }
        .ft-nav__tick {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--ft-divider); flex-shrink: 0;
          transition: background 0.2s;
        }
        .ft-nav__link:hover .ft-nav__tick { background: var(--ft-cyan); }

        /* Contact */
        .ft-contact { display: flex; flex-direction: column; gap: 12px; }
        .ft-contact__row {
          display: flex; align-items: flex-start; gap: 9px;
          font-family: 'Geist', sans-serif;
          font-size: 12px; color: var(--ft-muted);
        }
        .ft-contact__row svg { color: var(--ft-cyan); flex-shrink: 0; margin-top: 1px; }
        .ft-contact__link {
          color: var(--ft-muted); text-decoration: none;
          word-break: break-all;
          transition: color 0.2s;
        }
        .ft-contact__link:hover { color: var(--ft-cyan); }

        .ft-cv-btn {
          display: inline-flex; align-items: center; gap: 7px;
          margin-top: 6px; padding: 10px 20px;
          background: var(--ft-cyan); color: var(--ft-body-bg);
          font-family: 'Geist', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; border: none; align-self: flex-start;
          transition: background 0.2s, transform 0.2s;
        }
        .ft-cv-btn:hover { background: var(--ft-cyan2); transform: translateY(-1px); }

        /* Bottom */
        .ft-bottom {
          max-width: 1100px; margin: 0 auto;
          padding: 16px 40px 28px;
          border-top: 1px solid var(--ft-divider);
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 10px;
        }
        .ft-copy {
          font-family: 'Geist Mono', monospace;
          font-size: 10px; letter-spacing: 0.08em;
          color: var(--ft-muted); margin: 0; opacity: 0.7;
        }
        .ft-avail {
          display: flex; align-items: center; gap: 7px;
          font-family: 'Geist Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          color: var(--ft-muted); opacity: 0.7;
        }
        .ft-avail__dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px rgba(34,197,94,0.5);
          animation: ft-pulse 2.5s ease-in-out infinite;
        }

        @keyframes ft-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }

        @media (max-width: 640px) {
          .ft-grid { padding: 40px 20px 36px; }
          .ft-bottom { padding: 14px 20px 22px; flex-direction: column; align-items: flex-start; }
          .ft-scene { height: 180px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;