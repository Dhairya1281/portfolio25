
import React from "react";
import "../Styling/About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  
  return (
    <div className="skills-container">
    <motion.h2
      className="skills-title"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      My Skills
    </motion.h2>
    <div className="skills-grid">
      <motion.div
        className="skill-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>ReactJS</h4>
      </motion.div>
      <motion.div
        className="skill-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>Java</h4>
      </motion.div>
      <motion.div
        className="skill-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>JavaScript</h4>
      </motion.div>
      <motion.div
        className="skill-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>HTML & CSS</h4>
      </motion.div>
      <motion.div
        className="skill-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>Bootstrap</h4>
      </motion.div>
      <motion.div
        className="skill-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>MS Excel</h4>
      </motion.div>
    </div>
  </div>
  );
};

export default Skills;
