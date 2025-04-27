import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../data/projects';

interface CarouselProps {
  title: string;
  items: Project[]; // Now it accepts full Project objects
}

const Carousel: React.FC<CarouselProps> = ({ title, items }) => {
  return (
    <section className="carousel-section">
      <div className="container">
        {title && <h3>{title}</h3>}
        <div className="carousel-grid">
          {items.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
