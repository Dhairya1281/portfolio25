import React, { useState } from "react";
import "../Styling/HeroSection.css";
import { motion } from "framer-motion";
import profilePhoto from "../images/profile.png"; // Assuming image is in the components folder
import ContactModal from "./ContactModal"; // Import the ContactModal component

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.div
          className="photo-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <img src={profilePhoto} alt="Dhairya Gulati" className="profile-photo" />
        </motion.div>
        <motion.div
          className="content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I'm <span>Dhairya Gulati</span>, a passionate Frontend Developer.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Based in Panchkula, India, I specialize in crafting modern, responsive web applications using ReactJS, JavaScript, and CSS.
          </motion.p>
          <motion.div
            className="buttons"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.button
              className="primary-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={openModal}
            >
              Let's Connect
            </motion.button>
            <motion.button
              className="secondary-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </motion.section>
  );
};

export default HeroSection;