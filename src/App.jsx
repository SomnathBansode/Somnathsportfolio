import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const userName = "Somnath's Portfolio";
  const headerUser = "Somnath Bansode";
  const [headerHeight, setHeaderHeight] = useState(0);

  // Framer Motion variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] text-white scroll-smooth">
      {/* Header */}
      <Header userName={userName} setHeaderHeight={setHeaderHeight} />

      {/* Main Content */}
      <main
        className="flex-1 w-full"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <motion.section
          id="home"
          style={{ scrollMarginTop: `${headerHeight}px` }}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Home headerUser={headerUser} />
          <hr className="border-gray-800" />
        </motion.section>

        <motion.section
          id="about"
          style={{ scrollMarginTop: `${headerHeight}px` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <About />
          <hr className="border-gray-800" />
        </motion.section>

        <motion.section
          id="projects"
          style={{ scrollMarginTop: `${headerHeight}px` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Project />
          <hr className="border-gray-800" />
        </motion.section>

        <motion.section
          id="contact"
          style={{ scrollMarginTop: `${headerHeight}px` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
