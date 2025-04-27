import React from 'react';
import Carousel from '../components/Carousel';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  const latestProjects = [...projects]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  return (
    <section id="home" className="section home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Hello there, Welcome to my portifolio</h1>
      </div>
      <div className="hero">
        <p className="tagline">
            Transforming data into insights, ideas into code, and imagination into interactive worlds.
        </p>
        <p className="quote">
            "Creativity is intelligence having fun." — Albert Einstein
        </p>
      </div>
      <div className="resume-section">
        <p>Looking to hire me? Download my resume below for your review and consideration.</p>
        <a href="/assets/resume/Margaret Gathoni CV .pdf" download className="resume-button">
        Download Resume
        </a>
      </div>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>My Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="card-icon">
                <img src="/assets/icons/Idea.jpg" alt="Development Icon" />
            </div>
            <h3>Innovative Ideas</h3>
            <p>Consistently generating fresh ideas that drive progress and spark positive change.</p>
          </div>
          <div className="service-card">
            <div className="card-icon">
                <img src="/assets/icons/Development.jpg" alt="Development Icon" />
            </div>
            <h3>Development</h3>
            <p>Developing high-performance software solutions to address business requirements.</p>
          </div>

          <div className="service-card">
            <div className="card-icon">
                <img src="/assets/icons/Design.jpg" alt="Development Icon" />
            </div>
            <h3>Software Design</h3>
            <p>Applications that underpin complex systems, ensuring scalability, reliability, and optimal performance.</p>
          </div>
          <div className="service-card">
            <div className="card-icon">
                <img src="/assets/icons/Data.jpg" alt="Development Icon" />
            </div>
            <h3>Data strategy and Insights</h3>
            <p>Crafting data-driven strategies to empower smarter business decisions and sustainable growth.</p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="expertise-section">
        <h2>My Expertise Areas</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="card-icon">
                <img src="/assets/icons/dv.avif" alt="Development Icon" />
            </div>
            <h3>Data Analysis and Visualization</h3>
          </div>
          <div className="expertise-card">
            <div className="card-icon">
                <img src="/assets/icons/ml.jpg" alt="Development Icon" />
            </div>
            <h3>Machine learning and Intelligent systems</h3>
          </div>
          <div className="expertise-card">
            <div className="card-icon">
                <img src="/assets/icons/code.png" alt="Development Icon" />
            </div>
            <h3>Software Engineering</h3>
          </div>
          <div className="expertise-card">
            <div className="card-icon">
                <img src="/assets/icons/team.jpg" alt="Development Icon" />
            </div>
            <h3>Collaboration</h3>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <div className="carousel-wrapper">
        <h2>Check Out My Latest Projects</h2>
        <Carousel
          title=""
          items={latestProjects}
        />
      </div>
    </section>
  );
};

export default Home;
