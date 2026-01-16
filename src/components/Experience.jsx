import { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { HiLocationMarker, HiCheckCircle, HiLightningBolt } from "react-icons/hi";
import { MdCode, MdTrendingUp } from "react-icons/md";

const timelineData = [
  {
    title: "HMIS Specialist",
    date: "Mar 2025 - Sep 2025",
    company: "CIHEB Kenya",
    location: "Nairobi, Kenya",
    type: "Contract",
    mode: "Hybrid",
    description:
      "Integrated KenyaEMR, DHIS2, and AIMS systems using Flask/FastAPI APIs automating 80% of reporting. Designed optimized PostgreSQL schemas across 15+ facilities and delivered data use training to 200+ healthcare users.",
    achievements: [
      "Automated 80% of reporting workflows",
      "Optimized databases across 15+ facilities",
      "Trained 200+ healthcare users"
    ],
    impact: {
      efficiency: "+80%",
      facilities: "15+",
      users: "200+"
    },
    skills: ["Flask", "FastAPI", "PostgreSQL", "DHIS2", "KenyaEMR"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Data Lead",
    date: "Jul 2024 - Feb 2025",
    company: "CIHEB Kenya",
    location: "Nairobi, Kenya",
    type: "Full-time",
    mode: "On-site",
    description:
      "Administered PostgreSQL & Oracle databases with 99.8% uptime. Strengthened API security with JWT/OAuth, led quarterly audits, and established documentation standards for lab informatics systems.",
    achievements: [
      "Maintained 99.8% database uptime",
      "Enhanced API security with JWT/OAuth",
      "Led quarterly system audits"
    ],
    impact: {
      uptime: "99.8%",
      security: "JWT/OAuth",
      audits: "Quarterly"
    },
    skills: ["PostgreSQL", "Oracle", "JWT/OAuth", "Documentation", "Leadership"],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Python Developer",
    date: "Jan 2023 - Jun 2024",
    company: "Jay & Oak Ltd",
    location: "Lagos, Nigeria",
    type: "Full-time",
    mode: "Remote",
    description:
      "Developed Django REST and Flask APIs with data validation and integration logic. Built responsive web apps consuming APIs for real-time synchronization and automated deployments via Docker & Git.",
    achievements: [
      "Built Django REST & Flask APIs",
      "Implemented real-time synchronization",
      "Automated deployments with Docker"
    ],
    impact: {
      apis: "Multiple",
      sync: "Real-time",
      automation: "100%"
    },
    skills: ["Django", "Flask", "Docker", "Git", "REST APIs"],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Research Data Analyst",
    date: "Jul 2016 - Dec 2022",
    company: "Aga Khan University Hospital",
    location: "Nairobi, Kenya",
    type: "Full-time",
    mode: "On-site",
    description:
      "Built ETL pipelines in Python to process 100K+ lab records, cutting turnaround by 80%. Integrated lab APIs with clinical systems for compliance, and supported 200+ users in data operations.",
    achievements: [
      "Processed 100K+ lab records",
      "Reduced turnaround time by 80%",
      "Supported 200+ clinical users"
    ],
    impact: {
      records: "100K+",
      efficiency: "+80%",
      users: "200+"
    },
    skills: ["Python", "ETL", "Data Analysis", "Healthcare", "API Integration"],
    color: "from-orange-500 to-yellow-600"
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const totalYears = timelineData.length > 0 
    ? new Date().getFullYear() - new Date(timelineData[timelineData.length - 1].date.split(' - ')[0]).getFullYear() + 1
    : 0;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-20 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className={`relative z-10 w-full max-w-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold text-blue-300">Career Journey</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {totalYears}+ years of driving innovation in healthcare technology and data systems
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center z-20">
                    <div 
                      className={`relative w-16 h-16 rounded-full border-4 transition-all duration-500 ${
                        isActive 
                          ? 'border-blue-400 bg-blue-500 scale-110' 
                          : 'border-white/20 bg-white/5'
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} blur-xl opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-75' : ''}`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaBriefcase className={`text-2xl transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div
                      onClick={() => setActiveIndex(index)}
                      className={`group relative cursor-pointer transition-all duration-500 ${
                        isActive ? 'scale-105' : 'scale-100'
                      }`}
                    >
                      {/* Glow effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500 ${isActive ? 'opacity-50' : ''}`}></div>
                      
                      {/* Card */}
                      <div className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                        {/* Header with gradient */}
                        <div className={`bg-gradient-to-r ${item.color} p-1`}>
                          <div className="bg-slate-900/90 backdrop-blur-sm p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="text-2xl font-bold text-white">
                                    {item.title}
                                  </h3>
                                  {index === 0 && (
                                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/50 animate-pulse">
                                      Current
                                    </span>
                                  )}
                                </div>
                                
                                <div className="flex items-center gap-2 text-gray-300 mb-3">
                                  <FaBuilding className="text-blue-400" />
                                  <span className="font-semibold">{item.company}</span>
                                </div>
                                
                                <div className="flex flex-wrap gap-3 text-sm">
                                  <div className="flex items-center gap-1 text-gray-400">
                                    <FaCalendarAlt className="text-blue-400" />
                                    <span>{item.date}</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-gray-400">
                                    <HiLocationMarker className="text-blue-400" />
                                    <span>{item.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Badges */}
                            <div className="flex gap-2">
                              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-lg border border-white/20">
                                {item.type}
                              </span>
                              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-lg border border-white/20">
                                {item.mode}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {item.description}
                          </p>

                          {/* Impact Metrics */}
                          <div className="grid grid-cols-3 gap-3 mb-6">
                            {Object.entries(item.impact).map(([key, value], idx) => (
                              <div key={idx} className="text-center bg-white/5 rounded-lg p-3 border border-white/10">
                                <div className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                  {value}
                                </div>
                                <div className="text-xs text-gray-500 uppercase mt-1">{key}</div>
                              </div>
                            ))}
                          </div>

                          {/* Expandable achievements */}
                          <div className={`transition-all duration-500 overflow-hidden ${
                            isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <div className="space-y-3 mb-6">
                              <div className="flex items-center gap-2 text-sm font-bold text-blue-400 mb-3">
                                <HiLightningBolt />
                                Key Achievements
                              </div>
                              {item.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10"
                                >
                                  <HiCheckCircle className="text-green-400 text-lg flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-gray-300">{achievement}</span>
                                </div>
                              ))}
                            </div>

                            {/* Skills */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-sm font-bold text-purple-400 mb-3">
                                <MdCode />
                                Technologies
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs font-medium rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Expand indicator */}
                          <button
                            onClick={() => setActiveIndex(isActive ? null : index)}
                            className="mt-4 text-sm text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto"
                          >
                            {isActive ? 'Show Less' : 'Show More'}
                            <svg 
                              className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "6+", label: "Years Experience", icon: FaBriefcase, color: "from-blue-500 to-cyan-500" },
            { value: "4", label: "Organizations", icon: FaBuilding, color: "from-purple-500 to-pink-500" },
            { value: "15+", label: "Healthcare Facilities", icon: HiLocationMarker, color: "from-green-500 to-emerald-500" },
            { value: "200+", label: "Users Trained", icon: MdTrendingUp, color: "from-orange-500 to-yellow-500" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center group-hover:scale-105 transition-transform">
                  <IconComponent className="text-4xl text-gray-400 group-hover:text-white mx-auto mb-3 transition-colors" />
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;