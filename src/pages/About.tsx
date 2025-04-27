import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About Me</h2>
        

        {/* Data Analysis Section */}
        <p className="about-paragraph">
          <strong>Data Analysis and Visualization</strong>
          <ul className="about-list">
            <li>Comprehensive Exploratory Data Analysis for trend and anomaly detection</li>
            <li>Development of advanced, interactive data visualizations for executive insights</li>
            <li>Data cleaning, transformation, and feature engineering for model readiness</li>
            <li>Statistical summarization to drive hypothesis formation and business decisions</li>
          </ul>
        </p>

        {/* Machine Learning Section */}
        <p className="about-paragraph">
          <strong>Machine Learning and Intelligent Systems</strong>
          <ul className="about-list">
            <li>Supervised and unsupervised machine learning model development and optimization</li>
            <li>Natural Language Processing systems for text classification, entity recognition, and summarization</li>
            <li>Computer Vision applications for image classification and object detection</li>
            <li>Model evaluation, hyperparameter tuning, and deployment to production environments</li>
          </ul>
        </p>

        {/* Software Development Section */}
        <p className="about-paragraph">
          <strong>Software Development</strong>
          <ul className="about-list">
            <li>Full-stack web application development using React, TypeScript, Flask, and Django</li>
            <li>RESTful API design and integration for scalable system architecture</li>
            <li>PostgreSQL database management and secure backend system implementation</li>
            <li>UI/UX design alignment with responsive, user-centric application principles</li>
          </ul>
        </p>

        {/* Game Development Section */}
        <p className="about-paragraph">
          <strong>Game Development</strong>
          <ul className="about-list">
            <li>2D and 3D game design and development using Unity and C#</li>
            <li>Prototype creation and gameplay mechanics implementation</li>
            <li>Level design, asset integration, and optimization for performance</li>
            <li>Storyboarding and narrative integration within gameplay experiences</li>
          </ul>
        </p>

        {/* Final Call to Action */}
        <p className="about-paragraph highlight">
          I am open to opportunities for collaboration, consulting, and new project development. 
          Let's work together to transform ideas into scalable, impactful solutions.
        </p>

      </div>
    </section>
  );
};

export default About;
