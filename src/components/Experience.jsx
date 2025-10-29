import React from "react";

// Updated timeline data from your actual CV
const timelineData = [
  {
    title: "Tech Lead",
    date: "Oct 2025 - Present",
    company: "NorthStart Systems",
    description:
      "Leading architecture, product delivery, and DevOps. Directed full-stack development with FastAPI, React, and PostgreSQL, delivering the MVP in 12 weeks. Managed 8 developers, enforced agile workflows, and built CI/CD pipelines achieving 99.9% uptime.",
  },
  {
    title: "HMIS Specialist",
    date: "Mar 2025 - Sep 2025",
    company: "CIHEB Kenya",
    description:
      "Integrated KenyaEMR, DHIS2, and AIMS systems using Flask/FastAPI APIs automating 80% of reporting. Designed optimized PostgreSQL schemas across 15+ facilities and delivered data use training to 200+ healthcare users.",
  },
  {
    title: "Data Lead",
    date: "Jul 2024 - Feb 2025",
    company: "CIHEB Kenya",
    description:
      "Administered PostgreSQL & Oracle databases with 99.8% uptime. Strengthened API security with JWT/OAuth, led quarterly audits, and established documentation standards for lab informatics systems.",
  },
  {
    title: "Python Developer",
    date: "Jul 2023 - Jun 2024",
    company: "Jay & Oak Ltd",
    description:
      "Developed Django REST and Flask APIs with data validation and integration logic. Built responsive web apps consuming APIs for real-time synchronization and automated deployments via Docker & Git.",
  },
  {
    title: "Systems Analyst",
    date: "Jan 2022 - Jun 2023",
    company: "Ornac Ltd",
    description:
      "Designed multi-database integrations across MySQL, SQL Server, and PostgreSQL. Delivered automation tools for SMEs, reducing manual reporting by 75% and improving workflow efficiency.",
  },
  {
    title: "Research Data Analyst",
    date: "Jul 2016 - Dec 2021",
    company: "Aga Khan University Hospital",
    description:
      "Built ETL pipelines in Python to process 100K+ lab records, cutting turnaround by 80%. Integrated lab APIs with clinical systems for compliance, and supported 200+ users in data operations.",
  },
];

const Timeline = () => {
  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-700 to-violet-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4 text-center">My Experience</h2>
        <p className="text-lg text-neutral-200 mb-10 text-center">
          A journey through data systems, software engineering, and leadership.
        </p>

        {/* Horizontal timeline */}
        <div className="relative w-full">
          {/* central line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/30 transform -translate-y-1/2"></div>

          <div className="flex flex-nowrap overflow-x-auto space-x-10 scrollbar-hide py-10">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-80 md:w-96 relative ${index % 2 === 0 ? "mt-10" : "-mt-10"
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white"></div>

                {/* Card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                    {item.title}
                  </h3>
                  <h4 className="text-lg font-medium">
                    <span className="text-white">{item.company}</span>
                  </h4>
                  <p className="text-sm text-neutral-300 italic mb-3">
                    {item.date}
                  </p>
                  <p className="text-neutral-100 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
