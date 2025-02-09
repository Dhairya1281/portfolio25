import React from "react";
import "../Styling/Experience.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-card">
          <div className="experience-header">
            <h3>Frontend Developer</h3>
            <h4>
    <a 
      href="https://pragmaapps.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="company-link"
    >
      Pragma Apps and Technologies
    </a>
  </h4>
          </div>
          <p className="experience-date">January 2023 - June 2023 | Noida, India</p>
          <ul className="experience-details">
            <li>
              Designed and implemented advanced ReactJS features, improving frontend performance by 20% and scalability by 20%.
            </li>
            <li>
              Collaborated with ICICI Bank to develop 20+ user landing pages, enhancing user engagement and navigation by 30%.
            </li>
            <li>
              Ensured data security through robust API measures, optimizing communication efficiency and safeguarding sensitive data.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
