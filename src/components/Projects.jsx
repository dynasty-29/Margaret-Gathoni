import React, { useEffect } from "react";
import { motion } from "framer-motion"; // optional for 3D spin animation

const featuredProjects = {
  "Software Projects": [
    {
      name: "Mama Africa",
      link: "https://your-link-here.com",
      description: "Maternity support app for African mothers (Flask + React).",
    },
    {
      name: "PeriodTribe",
      link: "https://your-link-here.com",
      description: "Empowering menstrual health tracking with privacy-first design.",
    },
    {
      name: "Vendor Portal",
      link: "https://your-link-here.com",
      description: "CIHEB-Kenya vendor prequalification & procurement system.",
    },
    {
      name: "NorthStart",
      link: "https://your-link-here.com",
      description: "ICT & Security solutions company site with project dashboard.",
    },
    {
      name: "Payroll System",
      link: "https://your-link-here.com",
      description: "Custom payroll and HR automation system built in Flask & React.",
    },
  ],

  "Data Science Projects": [
    {
      name: "Clinical NLP Response Predictor",
      link: "https://your-link-here.com",
      description:
        "Fine-tuned BERT model predicting clinician responses using ROUGE scoring.",
    },
    {
      name: "Crypto Market Predictor",
      link: "https://your-link-here.com",
      description:
        "Time-series prediction using Pearson correlation optimization on DRW dataset.",
    },
    {
      name: "Public Health Dashboard",
      link: "https://your-link-here.com",
      description:
        "Power BI dashboard integrating DHIS2, KenyaEMR, and AIMS datasets.",
    },
  ],

  "Game Development Projects": [
    {
      name: "Black Magic (Game Jam Entry)",
      link: "https://your-link-here.com",
      description: "A narrative-driven game exploring choice and consequence.",
    },
    {
      name: "Secret Letters",
      link: "https://your-link-here.com",
      description:
        "Wordplay puzzle game focusing on communication and storytelling.",
    },
  ],
};

const Projects = () => {
  // Optional 3D rotation animation using Framer Motion
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / 15).toFixed(2);
        const rotateY = ((x - rect.width / 2) / -15).toFixed(2);
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
      });
    });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-900 via-purple-700 to-violet-600 text-white py-16 px-6"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">My Projects</h2>
      <p className="text-lg text-neutral-200 mb-10 text-center">
        A showcase of my featured software, data science, and game development work.
      </p>

      <div className="w-full max-w-6xl space-y-16">
        {Object.entries(featuredProjects).map(([category, projects]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-yellow-300 mb-6 text-center">
              {category}
            </h3>

            {/* Grid of projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
              {projects.map((proj, idx) => (
                <motion.div
                  key={idx}
                  className="project-card bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition-transform duration-300 cursor-pointer transform-gpu"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  onClick={() => window.open(proj.link, "_blank")}
                >
                  <h4 className="text-xl font-bold mb-2 text-yellow-300">
                    {proj.name}
                  </h4>
                  <p className="text-neutral-200 text-sm">{proj.description}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-yellow-400 underline hover:text-yellow-300"
                  >
                    View Project →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
