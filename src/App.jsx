import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const userName = "Somnath's Portfolio";
  const headerUser = "Somnath Bansode";

  return (
    <React.Fragment>
      <div className="h-auto w-full bg-zinc-900">
        {/* Render Header */}
        <Header userName={userName} />

        {/* Content sections */}
        <main>
          <section id="home" className="scroll-mt-24">
            <Home headerUser={headerUser} />
            <hr />
          </section>
          <section id="about" className="scroll-mt-24">
            <About />
            <hr />
          </section>
          <section id="projects" className="scroll-mt-24">
            <Project />
            <hr />
          </section>
          <section id="contact" className="scroll-mt-24">
            <Contact />
            <hr />
          </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
