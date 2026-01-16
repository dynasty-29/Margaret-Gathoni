import { useState, useEffect, useRef } from "react";
import headerimg from "../images/header-img.png";
import { HiMail, HiSparkles } from "react-icons/hi";

const Introduction = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showEmailButton, setShowEmailButton] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Show email button after component mounts
  useEffect(() => {
    setTimeout(() => setShowEmailButton(true), 1000);
  }, []);

  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Data Scientist",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Cloud Architect",
    "Problem Solver"
  ];

  // Typing animation effect
  useEffect(() => {
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
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRole]);

  // Particle animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const profile = {
    name: "Margaret Gathoni",
    title: "Data scientist & Full Stack Developer",
    location: "Nairobi, Kenya",
    tagline: "Transforming Ideas into Intelligent Solutions",
    bio: "I architect scalable systems that bridge cutting-edge technology with real-world impact. From machine learning pipelines to full-stack applications, I turn complex problems into elegant solutions.",
    experience: "6+",
    projects: "50+",
    clients: "10+",
    email: "mgathoni.gathoni9@gmail.com",
    focus: [
      "Full Stack Development",
      "Data Science & ML",
      "Cloud Architecture",
      "AI Systems"
    ],
    technologies: ["Python", "Flask", "FastAPI", "Django", "React", "TypeScript", "AWS", "PostgreSQL", "TensorFlow"],
    avatar_url: headerimg,
  };

  const stats = [
    { label: "Years Experience", value: profile.experience, icon: "⚡" },
    { label: "Projects Delivered", value: profile.projects, icon: "🚀" },
    { label: "Happy Clients", value: profile.clients, icon: "🎯" },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('section-3');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Email handler - FIXED VERSION
  const handleEmailClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const email = profile.email;
    const subject = "Let's Work Together!";
    const body = `Hi Margaret,

I came across your portfolio and I'm impressed by your work. I'd love to discuss potential opportunities.

Best regards,`;
    
    // Create mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Log for debugging
    console.log("Opening email with:", mailtoLink);
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          transition: 'transform 0.5s ease-out',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(-${mousePosition.x * 2}px, -${mousePosition.y * 2}px)`,
          transition: 'transform 0.5s ease-out',
          animationDelay: '1s'
        }}
        aria-hidden="true"
      />

      {/* Floating Email Button - FIXED */}
      <button
        onClick={handleEmailClick}
        className={`fixed top-24 right-8 z-50 group transition-all duration-500 ${
          showEmailButton ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
        
        {/* Button */}
        <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
          {/* Icon with animation */}
          <div className="relative">
            <HiMail className="text-2xl group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          
          {/* Text */}
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold uppercase tracking-wider opacity-90">Available for Work</span>
            <span className="text-sm font-bold">Get In Touch!</span>
          </div>

          {/* Sparkle effect */}
          <HiSparkles className="text-yellow-300 animate-pulse" />
        </div>

        {/* Hover tooltip */}
        <div className="absolute top-full mt-2 right-0 px-4 py-2 bg-slate-900/95 backdrop-blur-sm border border-white/10 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Click to send me an email 📧
          <div className="absolute bottom-full right-8 w-2 h-2 bg-slate-900 border-l border-t border-white/10 rotate-45 -mb-1"></div>
        </div>
      </button>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Status Badge */}
            <div className="flex flex-wrap gap-3 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/50 shadow-lg shadow-green-500/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-green-300">Available for Projects</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-300">{profile.location}</span>
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white mb-2">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    {profile.name}
                  </span>
                </h1>
                
                {/* Typing animation */}
                <div className="flex items-center gap-2 text-2xl md:text-3xl text-cyan-400 font-light h-12">
                  <span className="text-white/60">→</span>
                  <span className="font-mono">{typedText}</span>
                  <span className="w-0.5 h-8 bg-cyan-400 animate-blink"></span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed">
                {profile.tagline}
              </p>

              {/* Bio */}
              <div className="relative pl-6 border-l-2 border-cyan-500/50">
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  {profile.bio}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {profile.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="group relative px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 text-gray-300 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <a
                href="/Resume.pdf"
                download
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-cyan-500 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Download CV
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { href: "https://linkedin.com/in/margaret-gathoni", label: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { href: "https://github.com/dynasty-29", label: "GitHub", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                { href: "https://youtube.com/@SonnieCodes", label: "YouTube", path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
                { href: "https://medium.com/@SonnieCodes", label: "Medium", path: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Glowing ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur-2xl transition duration-500 animate-spin-slow"></div>
              
              {/* Image container with glass effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-2 rounded-3xl border border-white/20 shadow-2xl">
                  <img
                    src={profile.avatar_url}
                    alt={`${profile.name} - ${profile.title}`}
                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                    style={{
                      transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                      transition: 'transform 0.3s ease-out',
                    }}
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-sm animate-float border border-white/20 backdrop-blur-sm">
                🚀 Let's Build
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-sm animate-float-delayed border border-white/20 backdrop-blur-sm">
                💡 Innovative
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-cyan-500/30 rounded-full animate-ping-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/20 rounded-lg rotate-12 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Introduction;