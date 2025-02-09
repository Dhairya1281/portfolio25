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
           <p>
  I am <span>Dhairya Gulati</span>, a passionate <span>Frontend Developer</span> and recent graduate with a <span>B.Tech in Electronics and Communication Engineering</span>, majoring in <span>Embedded Systems</span> from <span>Punjab Engineering College (2024)</span>. With a solid foundation in <span>Frontend Development</span> using <span>ReactJS</span>, <span>JavaScript</span>, <span>HTML</span>, <span>CSS</span>, and <span>BootStrap</span>, I specialize in creating <span>modern, responsive, and high-performance web applications</span>.
</p>

<p>
  My expertise lies in building <span>modern, responsive</span>, and <span>high-performance web applications</span> while focusing on delivering <span>seamless user experiences</span>. I optimize performance and craft visually engaging interfaces that aim to create significant impact.
</p>

<p>
  Always eager to learn, I constantly explore new technologies and best practices. I thrive on <span>solving complex challenges</span> and transforming ideas into reality through <span>clean, efficient, and scalable code</span>.
</p>

          </motion.p>
        </div>
       
      </div>
    </motion.section>
  );
};

export default AboutSection;
