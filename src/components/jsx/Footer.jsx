import React from "react";
import "../Styling/Footer.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.footer
      className="footer"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="footer-content"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} Dhairya Gulati. All Rights Reserved.</p>
        <ul className="social-links">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="https://x.com/Dhairya_0025">X</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="https://www.linkedin.com/in/dhairya-gulati-534315201/">LinkedIn</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="https://github.com/Dhairya1281">GitHub</a>
          </motion.li>
        </ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
