import React from "react";
import "../Styling/Portfolio.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectPhoto1 from "../images/bank.png";
import projectPhoto2 from "../images/weather.png";
import projectPhoto3 from "../images/crypto.png";

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
        My Portfolio
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
              A multi-step web application built with **ReactJS, HTML, CSS, and JavaScript** for seamless bank account openings.
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
              Developed with **ReactJS, HTML, CSS, and JavaScript**, this app provides users with real-time weather data through the 
              integration of the **OpenWeatherMap API**. The app includes features like location search, unit conversion, and dynamic weather icons.
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
              Built using **HTML, CSS, and JavaScript**, CryptoWatch is a user-friendly web application enabling real-time cryptocurrency 
              price tracking. The project leverages the **CoinGecko API** for accurate market rankings and prices, ensuring an enhanced user experience.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
