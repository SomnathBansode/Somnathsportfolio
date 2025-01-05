import React from "react";

const About = () => {
  return (
    <section className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center p-6 md:p-10 text-white ">
      {/* About Me Heading */}
      <div className="text-center mb-4 md:mb-6  my-9">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#a78bfa] tracking-wide mb-2 sm:mb-4">
          About Me
        </h1>
        <p className="text-base sm:text-lg font-semibold text-gray-200">
          MERN Stack Developer
        </p>
      </div>

      {/* Short Description */}
      <div className="w-full sm:w-3/4 md:max-w-2xl text-center px-4 sm:px-6 md:px-0">
        <p className="text-base sm:text-lg md:text-2xl mb-3 sm:mb-4 leading-relaxed text-gray-200">
          I am a passionate MERN Stack Developer with a strong foundation in
          programming and web development. Proficient in HTML, CSS, JavaScript,
          React.js, Node.js, Express.js, MongoDB, Git, and GitHub.
        </p>
        <p className="text-sm sm:text-base md:text-xl leading-relaxed text-gray-200">
          As a fresher, I am eager to contribute innovative solutions and
          collaborate on impactful projects, focusing on building dynamic,
          responsive, and scalable web applications.
        </p>
      </div>

      {/* Horizontal Line */}
      <hr className="my-4 sm:my-6 border-gray-200 w-3/4 sm:w-1/2 mx-auto" />

      {/* Connect with me Section */}
      <div className="text-center">
        <p className="text-sm sm:text-lg font-semibold text-gray-200">
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/somnath-bansode-sb88/"
            className="text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
