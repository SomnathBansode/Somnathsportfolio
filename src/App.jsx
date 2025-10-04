import React from "react";
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

  // Framer Motion variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="h-auto w-full bg-zinc-900 scroll-smooth">
      {/* Header */}
      <Header userName={userName} />

      {/* Main Content */}
      <main id="main-content">
        <motion.section
          id="home"
          className="scroll-mt-24"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Home headerUser={headerUser} />
          <hr />
        </motion.section>

        <motion.section
          id="about"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <About />
          <hr />
        </motion.section>

        <motion.section
          id="projects"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Project />
          <hr />
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Contact />
          <hr />
        </motion.section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
