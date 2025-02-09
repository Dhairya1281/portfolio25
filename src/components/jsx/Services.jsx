// import React from "react";
// import "./Services.css";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Services = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   return (
//     <motion.section
//       id="services"
//       className="services"
//       ref={ref}
//       initial={{ opacity: 0 }}
//       animate={inView ? { opacity: 1 } : {}}
//       transition={{ duration: 0.8 }}
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         Services
//       </motion.h2>
//       <motion.div
//         className="service-cards"
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ delay: 0.4, duration: 0.8 }}
//       >
//         <motion.div
//           className="card"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <h3>Web Development</h3>
//           <p>Building modern and responsive websites.</p>
//         </motion.div>
//         <motion.div
//           className="card"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <h3>UI/UX Design</h3>
//           <p>Designing seamless and engaging user experiences.</p>
//         </motion.div>
//         <motion.div
//           className="card"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <h3>Consulting</h3>
//           <p>Helping businesses optimize their online presence.</p>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default Services;

import React from "react";
import "../Styling/Services.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id="services"
      className="services"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Services
      </motion.h2>

      <motion.div
        className="service-cards"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Web Development Card */}
        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3>Web Development</h3>
          <p>
            I build modern and responsive websites with clean, well-structured code that adapts to every device. Let’s bring your ideas to life with an engaging, user-friendly experience.
          </p>
        </motion.div>

        {/* UI/UX Design Card */}
        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="icon">
            <i className="fas fa-paint-brush"></i>
          </div>
          <h3>UI/UX Design</h3>
          <p>
            Creating visually appealing designs and seamless user experiences that delight and engage. I focus on making interactions intuitive, enhancing usability and design aesthetics.
          </p>
        </motion.div>

        {/* Consulting Card */}
        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="icon">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <h3>Consulting</h3>
          <p>
            I provide expert consulting to help businesses improve their online presence and user interactions, with strategies that optimize growth and customer engagement.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
