import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  proficiency: number;
}

interface Album {
  title: string;
  skills: Skill[];
}

const albums: Album[] = [
  {
    title: "Analysis & ML",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "R", proficiency: 85 },
      { name: "SQL", proficiency: 80 },
      { name: "Scikit-Learn", proficiency: 88 },
      { name: "TensorFlow", proficiency: 75 },
      { name: "Pytorch", proficiency: 75 },
      { name: "NLP", proficiency: 70 },
      { name: "Tableau", proficiency: 85 },
      { name: "Power BI", proficiency: 82 },
    ],
  },
  {
    title: "Full Stack",
    skills: [
      { name: "React", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Flask", proficiency: 88 },
      { name: "Django", proficiency: 88 },
      { name: "Node.js", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 82 },
      { name: "REST API", proficiency: 88 }
    ],
  },
  {
    title: "Game Development",
    skills: [
      { name: "Unity (C#)", proficiency: 85 },
      { name: "Game Design", proficiency: 80 },
      { name: "Blender Basics", proficiency: 65 },
    ],
  },
  {
    title: "Cross-Cutting Skills",
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 60 },
      { name: "Kurbenetes", proficiency: 60 },
      { name: "Figma", proficiency: 75 },
      { name: "API Design", proficiency: 85 },
      { name: "Medium Technical Writing", proficiency: 90 },
      { name: "Data Storytelling", proficiency: 80 },
      { name: "Project Management", proficiency: 90 },
      { name: "Scrum Master", proficiency: 90 },
        
    
    ],
  },
];

const Skills: React.FC = () => {
  const [currentAlbum, setCurrentAlbum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlbum((prev) => (prev + 1) % albums.length);
    }, 4000); // every 4 seconds

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>My Skill Albums</h2>
        <div className="album slide-fade">
          <h3 className="album-title">{albums[currentAlbum].title}</h3>
          <div className="skills-grid">
            {albums[currentAlbum].skills.map((skill, idx) => (
              <div key={idx} className="skill-pie">
                <div
                  className="pie"
                  style={{
                    background: `conic-gradient(#A75DDB ${skill.proficiency * 3.6}deg, #333 ${skill.proficiency * 3.6}deg)`,
                  }}
                >
                  <div className="pie-inner">
                    <span>{skill.proficiency}%</span>
                  </div>
                </div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
