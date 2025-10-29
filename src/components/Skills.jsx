import React from "react";

const skills = {
  "Languages & Frameworks": [
    { name: "Python", level: 95 },
    { name: "Flask", level: 90 },
    { name: "Django", level: 85 },
    { name: "ReactJS", level: 90 },
    { name: "NextJS", level: 85 },
    { name: "Flutter", level: 80 },
    { name: "React Native", level: 80 },
  ],
  Databases: [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
  ],
  "CI/CD & DevOps": [
    { name: "Docker", level: 85 },
    { name: "Jenkins", level: 80 },
    { name: "Azure", level: 75 },
  ],
  "Data Analysis & Science": [
    { name: "Power BI", level: 90 },
    { name: "Tableau", level: 85 },
    { name: "Data Science", level: 80 },
  ],
};

const Skills = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-12 bg-gradient-to-br from-violet-900 via-purple-700 to-violet-600 text-white px-6">
      <h2 className="text-4xl font-bold mb-4 text-center">My Skills</h2>
      <p className="text-lg text-center text-neutral-200 mb-12">
        A blend of full-stack development, DevOps, and data science expertise.
      </p>

      {/* Two-column responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300 text-center">
              {category}
            </h3>
            <div className="space-y-5">
              {skillList.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div
                      className="bg-yellow-400 h-3 rounded-full transition-all duration-700 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
