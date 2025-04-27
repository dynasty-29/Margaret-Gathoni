import React, { useState } from 'react';

interface EducationCardProps {
  institution: string;
  image: string;
  description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, image, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="education-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={institution} className="education-img" />
      <div className="education-title">{description}</div>

      {hovered && (
        <div className="education-description">
          <h3>{institution}</h3>
          {/* <p>{description}</p> */}
        </div>
      )}
    </div>
  );
};

export default EducationCard;
