import React, { useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { HiLocationMarker, HiCheckCircle } from "react-icons/hi";

const timelineData = [
  {
    title: "HMIS Specialist",
    date: "Mar 2025 - Sep 2025",
    company: "CIHEB Kenya",
    location: "Nairobi, Kenya",
    type: "Contract, Hybrid",
    description:
      "Integrated KenyaEMR, DHIS2, and AIMS systems using Flask/FastAPI APIs automating 80% of reporting. Designed optimized PostgreSQL schemas across 15+ facilities and delivered data use training to 200+ healthcare users.",
    achievements: [
      "Automated 80% of reporting workflows",
      "Optimized databases across 15+ facilities",
      "Trained 200+ healthcare users"
    ],
    skills: ["Flask", "FastAPI", "PostgreSQL", "DHIS2", "KenyaEMR"]
  },
  {
    title: "Data Lead",
    date: "Jul 2024 - Feb 2025",
    company: "CIHEB Kenya",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description:
      "Administered PostgreSQL & Oracle databases with 99.8% uptime. Strengthened API security with JWT/OAuth, led quarterly audits, and established documentation standards for lab informatics systems.",
    achievements: [
      "Maintained 99.8% database uptime",
      "Enhanced API security with JWT/OAuth",
      "Led quarterly system audits"
    ],
    skills: ["PostgreSQL", "Oracle", "JWT/OAuth", "Documentation", "Leadership"]
  },
  {
    title: "Python Developer",
    date: "Jan 2023 - Jun 2024",
    company: "Jay & Oak Ltd",
    location: "Lagos, Nigeria",
    type: "Full-time, Remote",
    description:
      "Developed Django REST and Flask APIs with data validation and integration logic. Built responsive web apps consuming APIs for real-time synchronization and automated deployments via Docker & Git.",
    achievements: [
      "Built Django REST & Flask APIs",
      "Implemented real-time synchronization",
      "Automated deployments with Docker"
    ],
    skills: ["Django", "Flask", "Docker", "Git", "REST APIs"]
  },

  {
    title: "Research Data Analyst",
    date: "Jul 2016 - Dec 2022",
    company: "Aga Khan University Hospital",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description:
      "Built ETL pipelines in Python to process 100K+ lab records, cutting turnaround by 80%. Integrated lab APIs with clinical systems for compliance, and supported 200+ users in data operations.",
    achievements: [
      "Processed 100K+ lab records",
      "Reduced turnaround time by 80%",
      "Supported 200+ clinical users"
    ],
    skills: ["Python", "ETL", "Data Analysis", "Healthcare", "API Integration"]
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-20 px-6 bg-gradient-to-br from-blue-300 via-white to-indigo-100">
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm border border-indigo-100 mb-6">
          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-700">Career Path</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
        
        <p className="text-lg text-gray-600">
          Building impactful solutions in healthcare technology and data systems
        </p>
      </div>

      {/* Timeline Container */}
      <div className="w-full max-w-5xl relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-blue-300 to-purple-300"></div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12 md:pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-4 top-6 w-9 h-9 bg-white rounded-full border-4 border-indigo-500 shadow-lg flex items-center justify-center z-10">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              </div>

              {/* Content Card */}
              <div
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Card Header */}
                <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                          {item.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-700 mb-2">
                        <FaBuilding className="text-indigo-500" />
                        <span className="font-semibold text-lg">{item.company}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-indigo-400" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <HiLocationMarker className="text-indigo-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className={`transition-all duration-300 ${expandedIndex === index ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-1 h-4 bg-indigo-500 rounded-full"></div>
                      Key Achievements
                    </h4>
                    <div className="grid gap-2 mb-6">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-indigo-50 p-3 rounded-lg">
                          <HiCheckCircle className="text-indigo-500 text-xl flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-1 h-4 bg-indigo-500 rounded-full"></div>
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white border border-indigo-200 text-indigo-700 text-xs font-medium rounded-lg hover:bg-indigo-50 hover:border-indigo-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <div className="mt-4 text-center">
                    <button className="text-sm text-indigo-600 font-semibold hover:text-indigo-700 transition-colors flex items-center gap-2 mx-auto">
                      {expandedIndex === index ? 'Show Less' : 'Show More'}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} 
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
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
        {[
          { value: "6+", label: "Years of Experience", icon: FaBriefcase },
          { value: "3", label: "Organizations", icon: FaBuilding },
          { value: "75+", label: "Healthcare Facilities", icon: HiLocationMarker },
          { value: "200+", label: "Users Trained", icon: HiCheckCircle }
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 text-center group"
            >
              <IconComponent className="text-3xl text-indigo-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;