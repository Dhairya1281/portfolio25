import React, { useLayoutEffect } from "react";
import Navbar from "./components/jsx/Navbar";
import HeroSection from "./components/jsx/HeroSection";
import About from "./components/jsx/About";
import Portfolio from "./components/jsx/Portfolio";
import Blog from "./components/jsx/Blog";
import Contact from "./components/jsx/Contact";
import Experience from "./components/jsx/Experience";
import Footer from "./components/jsx/Footer";
import "./App.css"; // Ensure global styles are defined here

const App = () => {
  useLayoutEffect(() => {
    // Reset URL to #home and scroll to the top on page load
    if (window.location.hash !== "#home") {
      window.history.replaceState(null, null, "#home");
    }
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default App;