import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import "../Styling/ContactModal.css"; // Add your styles here
import logo from "../images/unnamed.png"; // Assuming you have a logo image
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"; // Importing FontAwesome icons

Modal.setAppElement("#root"); // This is important for accessibility reasons

const ContactModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-btn" onClick={onRequestClose}>
        &times;
      </button>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="modal-header">
          <img src={logo} alt="Logo" className="modal-logo" />
          <h2>Let's Connect</h2>
        </div>
        <div className="modal-body">
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <p>
              <b>LinkedIn:</b>{" "}
              <a
                href="https://www.linkedin.com/in/dhairya-gulati-534315201/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin/dhairya-gulati25
              </a>
            </p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>
              <b>Email:</b>{" "}
              <a href="mailto:dhairya.gulati25@gmail.com">
                dhairya.gulati25@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>
              <b>Phone:</b> +91 9023306501
            </p>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};

export default ContactModal;
