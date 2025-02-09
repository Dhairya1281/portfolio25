import React from "react";
import "../Styling/Portfolio.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectPhoto1 from "../images/bank.png";
import projectPhoto2 from "../images/weather.png";
import projectPhoto3 from "../images/crypto.png";
import projectPhoto4 from "../images/robot.png"; // Add image for River Surface Cleaning Robot

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id="portfolio"
      className="portfolio"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="portfolio-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="portfolio-description"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Check out some of my recent work:
      </motion.p>

      <motion.div
        className="portfolio-grid"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* BankEase Project */}
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="project-image">
            <img src={projectPhoto1} alt="BankEase Project" />
          </div>
          <div className="project-details">
            <h3>BankEase</h3>
            <p>
              A multi-step web application built with <span>ReactJS, HTML, CSS, and JavaScript</span> for seamless bank account openings.
              This project enhanced user experience and reduced onboarding time by 45%, resulting in a 30% increase in new account sign-ups.
              It features smart form validation and eligibility checks for added security and efficiency.
            </p>
          </div>
        </motion.div>

        {/* Weather Forecast App */}
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="project-image">
            <img src={projectPhoto2} alt="Weather Forecast App" />
          </div>
          <div className="project-details">
            <h3>Weather Forecast App</h3>
            <p>
              Developed with <span>ReactJS, HTML, CSS, and JavaScript</span>, this app provides users with real-time weather data through the 
              integration of the <span>OpenWeatherMap API</span>. The app includes features like location search, unit conversion, and dynamic weather icons.
            </p>
          </div>
        </motion.div>

        {/* CryptoWatch */}
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="project-image">
            <img src={projectPhoto3} alt="CryptoWatch" />
          </div>
          <div className="project-details">
            <h3>CryptoWatch</h3>
            <p>
              Built using <span>HTML, CSS, and JavaScript</span>, CryptoWatch is a user-friendly web application enabling real-time cryptocurrency 
              price tracking. The project leverages the <span>CoinGecko API</span> for accurate market rankings and prices, ensuring an enhanced user experience.
            </p>
          </div>
        </motion.div>

        {/* River Surface Cleaning Robot */}
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="https://drive.google.com/drive/u/3/folders/1-20lCDzFOLFYOh1fjqnMmMFH6-ihPPo_"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-image">
              <img src={projectPhoto4} alt="River Surface Cleaning Robot" />
            </div>
            <div className="project-details">
              <h3>River Surface Cleaning Robot</h3>
              <p>
                Developed a robotic system using <span>Arduino, Sensors, and Servo Motors</span> to clean the surface of rivers by collecting floating debris and pollutants. The system is designed to operate autonomously through programmed sensor integration and navigation algorithms.
              </p>
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* Publication Section */}
      <motion.div
        className="publication-section"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container">
          <h2 className="section-title">My Publication</h2>
          <div className="publication-card">
            <div className="publication-header">
              <h3>A Hybrid Swarm Intelligence Algorithm for Region-based Image Fusion</h3>
              <h4>
                <a 
                  href="https://www.nature.com/articles/s41598-024-63746-w" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  Scientific Reports
                </a>
              </h4>
            </div>
            <p className="publication-date">Published: June 14, 2024</p>
            <ul className="publication-details">
              <li>
                Co-authored the paper introducing the DHPN algorithm to improve optimization and image fusion, with a focus on region-based fusion.
              </li>
              <li>
                Enhanced algorithm performance on benchmark datasets and real-world applications, achieving a significant increase in efficiency.
              </li>
              <li>
                Impact Factor: <span>4.6</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
