// Define skill type
interface Skill {
    name: string;
    level: number; // Progress percentage
}

// Define categories
const skillsData: { category: string; skills: Skill[] }[] = [
    {
        category: "Databases",
        skills: [
            { name: "MySQL", level: 90 },
            { name: "PostgreSQL", level: 85 },
            { name: "Django", level: 80 },
        ],
    },
    {
        category: "Languages and Scripts",
        skills: [
            { name: "JavaScript", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "React", level: 90 },
            { name: "Python", level: 85 },
            { name: "R", level: 85 },
        ],
    },
    {
        category: "Others",
        skills: [
            { name: "Git", level: 95 },
            { name: "Docker", level: 80 },
            { name: "Linux", level: 75 },
            { name: "Unity Engine", level: 75 },
        ],
    },
];

function Skills() {
    return (
        <div className="skills-container">
            {skillsData.map((section, index) => (
                <div key={index} className="skills-section">
                    <h2 className="category-title">{section.category}</h2>
                    <div className="skills-grid">
                        {section.skills.map((skill, idx) => (
                            <div key={idx} className="skill">
                                <div className="skill-header">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div
                                        className="progress"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;
