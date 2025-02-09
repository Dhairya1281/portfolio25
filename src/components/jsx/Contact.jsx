import React from "react";
import "../Styling/Contact.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id="contact"
      className="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="section-title"
      >
        Contact Me
      </motion.h2>
      <motion.form
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="contact-form"
      >
        <div className="form-group">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        <div className="form-group">
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        <div className="form-group">
          <motion.textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="submit-btn"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
