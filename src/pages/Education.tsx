import React from 'react';
import EducationCard from '../components/EducationCard';
import { educations } from '../data/educations';

const Education: React.FC = () => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2>My Education & Certifications</h2>
        <div className="education-grid">
          {educations.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
