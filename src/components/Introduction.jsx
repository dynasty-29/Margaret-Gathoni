import React, { useState, useEffect } from "react";
import headerimg from "../images/header-img.png";

const Introduction = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const profile = {
    name: "Margaret Gathoni",
    title: "Data scientist & Full Stack Developer",
    location: "Nairobi, Kenya",
    tagline: "Bridging Technology, Data, and Human Impact 💡",
    bio: "I design and build systems that turn raw data into insight — blending full-stack engineering with analytics, cloud, and AI innovation.",
    experience: "6+ years",
    projects: "50+",
    focus: [
      "Full Stack Development",
      "Data Science & Visualization",
      "AI Systems & Automation",
      "DevOps & Cloud Integration",
    ],
    certifications: ["AWS Cloud Practitioner", "Kaggle BIPOC Grant Program"],
    technologies: ["Python", "Django", "FastAPI", "React", "PostgreSQL", "AWS"],
    avatar_url: headerimg,
  };

  const stats = [
    { label: "Years Experience", value: profile.experience },
    { label: "Projects Completed", value: profile.projects },
    { label: "Happy Clients", value: "10+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
        }}
        aria-hidden="true"
      ></div>

      {/* Floating shapes */}
      <div
        className="absolute top-20 left-40 w-72 h-70 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
        style={{
          transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
        aria-hidden="true"
      ></div>

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" aria-hidden="true"></div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 ml-0 md:ml-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image with creative frame */}
          <div className="flex justify-center md:justify-center order-2 md:order-1 md:ml-12 lg:ml-20">
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl opacity-75 group-hover:opacity-100 blur-lg transition duration-500 animate-gradient-xy"></div>
              
              {/* Image container */}
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <img
                  src={profile.avatar_url}
                  alt={`${profile.name} - Full Stack Developer and Data Scientist`}
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-sm animate-bounce">
                Available for Work 🚀
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-4 border-indigo-400 rounded-full opacity-50" aria-hidden="true"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyan-400 rounded-lg opacity-30 rotate-12" aria-hidden="true"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-4">
              {/* Professional badge with location */}
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-indigo-100">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-gray-700">Open to opportunities</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{profile.location}</span>
                </div>
              </div>

              {/* Job title */}
              <p className="text-lg font-semibold text-indigo-600">
                {profile.title}
              </p>

              {/* Name with gradient */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-xy">
                  {profile.name}
                </span>
              </h1>

              {/* Tagline with icon */}
              <p className="text-xl md:text-2xl text-gray-700 font-light flex items-center gap-3">
                <span className="text-2xl">✨</span>
                {profile.tagline}
              </p>
            </div>

            {/* Bio with accent */}
            <div className="relative pl-6 border-l-4 border-indigo-500">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-3 gap-4 py-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Focus areas - Creative cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.focus.map((area, index) => (
                <div
                  key={area}
                  className="group relative bg-white p-3 rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {area}
                    </span>
                  </div>
                  
                  {/* Hover accent */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                </div>
              ))}
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2">
              {profile.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#projects"
                className="group relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
              </a>
              
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Download CV
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/in/margaret-gathoni"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-10 bg-cyan-400 rounded-lg shadow-md border border-gray-200 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-300 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/dynasty-29"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-10 bg-cyan-400 rounded-lg shadow-md border border-gray-200 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-300 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/SonnieCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-10 bg-cyan-400 rounded-lg shadow-md border border-gray-200 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-300 transition-all"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a
                href="https://medium.com/@SonnieCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-10 bg-cyan-400 rounded-lg shadow-md border border-gray-600 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-300 transition-all"
                aria-label="Medium"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
            background-size: 400% 400%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 400% 400%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Introduction;