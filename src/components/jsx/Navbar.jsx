import React, { useState, useEffect } from "react";
import "../Styling/Navbar.css";
import { motion } from "framer-motion";
import logo from "../images/unnamed.png"; // Correct import path

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href));
    const handleScroll = () => {
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setIsMobileMenuOpen(false); // Close the mobile menu on link click
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="navbar"
    >
      <div className="navbar-container">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Logo"
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        {/* Hamburger Menu for Mobile */}
        <button
          className="dropdown-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`line ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`line ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`line ${isMobileMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          {links.map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <a
                href={link.href}
                className={`nav-link ${activeIndex === index ? "clicked" : ""}`}
                onClick={() => handleClick(index)}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Dropdown Menu */}
        <div className={`dropdown-menu ${isMobileMenuOpen ? "show" : ""}`}>
          {links.map((link, index) => (
            <div key={index} className="dropdown-item">
              <a
                href={link.href}
                className={`nav-link ${activeIndex === index ? "clicked" : ""}`}
                onClick={() => handleClick(index)}
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
