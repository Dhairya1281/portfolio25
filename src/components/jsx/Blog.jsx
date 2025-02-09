import React from "react";
import "../Styling/Blog.css";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.section
      id="blog"
      className="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="blog-title"
      >
        Beyond the Code: My Blog
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="blog-description"
      >
        Sharing my experiences, development insights, and best practices.  
        Whether you're a beginner or an experienced developer, there's always something new to learn!
      </motion.p>
      
      <motion.div
        className="blog-posts"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.div
          className="blog-post"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>🚀 How to Build a Web Developer Portfolio</h3>
          <p>
            Learn how to design a portfolio that showcases your skills,  
            attracts recruiters, and helps you land your dream job.
          </p>
          <a href="https://brainstation.io/career-guides/how-to-build-a-web-developer-portfolio" target="_blank" rel="noopener noreferrer">
            Read Full Article →
          </a>
        </motion.div>

        <motion.div
          className="blog-post"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>🔥 7 Small & Underrated React Libraries</h3>
          <p>
            Discover hidden gems that can boost your productivity and enhance your React projects.
          </p>
          <a href="https://dev.to/naubit/7-small-underrated-react-libraries-h54" target="_blank" rel="noopener noreferrer">
            Read Full Article →
          </a>
        </motion.div>

        <motion.div
          className="blog-post"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>🎨 How to Build a Standout Developer Portfolio Site</h3>
          <p>
            Learn the principles of UI/UX design for creating stunning interfaces.
          </p>
          <a href="https://daily.dev/blog/how-to-build-a-standout-developer-portfolio-site" target="_blank" rel="noopener noreferrer">
            Read Full Article →
          </a>
        </motion.div>

        <motion.div
          className="blog-post"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>🛠️ 10 Tips for Building a Strong Software Engineer Portfolio</h3>
          <p>
            Discover best practices, ES6+ features, and strategies to write code that’s scalable, readable, and efficient.
          </p>
          <a href="https://www.turing.com/blog/software-engineer-portfolio-tips" target="_blank" rel="noopener noreferrer">
            Read Full Article →
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Blog;
