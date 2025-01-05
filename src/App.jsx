import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const userName = "Somnath's Portfolio";
  const HederUser = "Somnath Bansode";

  // Define background image URL as a variable
  const backgroundImage = ""; //https://shorturl.at/4uxuf

  return (
    <React.Fragment>
      <div
        className="h-auto w-full bg-no-repeat bg-cover bg-zinc-900"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Render Header */}
        <Header userName={userName} />

        {/* Content sections */}
        <section id="home">
          <Home HederUser={HederUser} />
          <hr />
        </section>
        <section id="about">
          <About />
          <hr />
        </section>
        <section id="projects">
          <Project />
          <hr />
        </section>
        <section id="contact">
          <Contact />
          <hr />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
