// import React from "react";
// import "../Styling/About.css";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const About = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   return (
//     <motion.section
//       id="about"
//       className="about"
//       ref={ref}
//       initial={{ opacity: 0, y: -20 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ delay: 0.2, duration: 0.6 }}
//     >
//       <motion.div
//         className="about-container"
//         initial={{ opacity: 0, y: 50 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.h2
//           className="about-title"
//           initial={{ opacity: 0, x: -50 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           Who Am I
//         </motion.h2>

//         {/* Introduction */}
//         <motion.p
//           className="about-description"
//           initial={{ opacity: 0, x: 50 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.4, duration: 0.5 }}
//         >
//           Hi, I’m <strong>Dhairya Gulati</strong>, a passionate <strong>Frontend Developer</strong> who specializes in creating modern, responsive, and visually appealing user interfaces. With expertise in <strong>ReactJS</strong>, <strong>JavaScript</strong>, and modern web technologies, I aim to craft digital experiences that leave a lasting impact.
//         </motion.p>

//         {/* My Journey */}
//         <motion.div
//           className="about-journey"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.6, duration: 0.5 }}
//         >
//           <h2>What I Use</h2>
//           <p>
//             From my early days tinkering with HTML and CSS to building sophisticated web applications using <strong>ReactJS</strong> and <strong>JavaScript</strong>, my journey has been driven by curiosity and innovation. With a background in Electronics and Communication Engineering, I've honed my problem-solving and analytical thinking skills, which I now apply in crafting seamless and efficient digital solutions.
//           </p>
//         </motion.div>

//         {/* Core Values */}
//         <motion.div
//           className="about-values"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8, duration: 0.5 }}
//         >
//           <h3>Core Values</h3>
//           <ul>
//             <li><strong>💡 Innovation:</strong> Constantly seeking creative solutions to complex problems.</li>
//             <li><strong>🌟 Excellence:</strong> Always striving for quality in every line of code.</li>
//             <li><strong>🤝 Collaboration:</strong> Embracing teamwork to create remarkable outcomes.</li>
//             <li><strong>📚 Lifelong Learning:</strong> Dedicated to keeping up with the latest technologies and trends.</li>
//           </ul>
//         </motion.div>

//         {/* Hobbies & Interests */}
//         <motion.div
//           className="about-hobbies"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 1, duration: 0.5 }}
//         >
//           <h3>Beyond Coding</h3>
//           <p>
//             Outside of coding, I enjoy exploring new technologies, mentoring aspiring developers, reading about self-improvement, and diving into creative hobbies like photography and music. I also love outdoor adventures and traveling to new places.
//           </p>
//         </motion.div>

//         {/* Skills */}
//         <motion.div
//           className="about-skills"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 1.2, duration: 0.5 }}
//         >
//           <h3>Skills</h3>
//           <div className="skills-container">
//             <div className="skill-card">
//               <h4>Frontend Development</h4>
//               <ul>
//                 <li>ReactJS</li>
//                 <li>JavaScript</li>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>Bootstrap</li>
//               </ul>
//             </div>
//             <div className="skill-card">
//               <h4>Soft Skills</h4>
//               <ul>
//                 <li>Leadership</li>
//                 <li>Teamwork</li>
//                 <li>Problem Solving</li>
//                 <li>Effective Communication</li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>

//       </motion.div>
//     </motion.section>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";
import "../Styling/About.css";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="about-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="about-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            I'm <span>Dhairya Gulati</span>, a passionate Frontend Developer based in Panchkula, Haryana. With a
            strong foundation in <span>Electronics and Communication Engineering</span>, I specialize in crafting
            modern, responsive web applications using <span>ReactJS</span>, <span>JavaScript</span>, <span>HTML</span>, 
            and <span>CSS</span>. I love solving problems, enhancing user experiences, and creating visually appealing
            and efficient solutions for the web.
          </motion.p>
        </div>
        <div className="skills-container">
          <motion.h2
            className="skills-title"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            MY SKILLS
          </motion.h2>
          <div className="skills-grid">
            <motion.div
              className="skill-card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <h4>Frontend Development</h4>
            </motion.div>
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
              <h4>Leadership</h4>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
