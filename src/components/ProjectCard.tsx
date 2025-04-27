import React, { useState } from 'react';
import { Project } from '../data/projects';

const ProjectCard: React.FC<Project> = ({ title, longDesc, image, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={title} className="project-img" />
      <h3 className="project-title">{title}</h3>

      {hovered && (
        <div className="project-overlay">
          <p>{longDesc}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
