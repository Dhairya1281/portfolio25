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
         My Personal Blog
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="blog-description"
      >
        Welcome to my blog! Here are some of my latest articles:
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
          <h3>How to Build a Portfolio Website</h3>
          <p>A step-by-step guide to creating a modern portfolio website.</p>
        </motion.div>
        <motion.div
          className="blog-post"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Top React Libraries for Developers</h3>
          <p>
            Discover the best React libraries to improve your development
            workflow.
          </p>
        </motion.div>
        <motion.div
          className="blog-post"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Design Tips for Engaging User Interfaces</h3>
          <p>
            Learn the principles of UI/UX design for creating stunning
            interfaces.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Blog;
