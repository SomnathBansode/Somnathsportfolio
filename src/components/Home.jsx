import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = ({ headerUser = "Somnath Bansode" }) => {
  const userImage = "/images/1.png";
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const skills = [
    {
      name: "React",
      icon: <FaReact className="text-blue-400 ml-1 inline-block" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 ml-1 inline-block" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-400 ml-1 inline-block" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 ml-1 inline-block" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400 ml-1 inline-block" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-red-500 ml-1 inline-block" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-200 ml-1 inline-block" />,
    },
    {
      name: "SQL",
      icon: <SiMysql className="text-blue-600 ml-1 inline-block" />,
    },
  ];

  const handleType = (wordIndex) =>
    setCurrentWordIndex(wordIndex % skills.length);
  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);

  return (
    <motion.section className="h-screen w-full bg-gradient-to-r from-zinc-900 to-zinc-800 flex flex-col md:flex-row items-center justify-center text-white px-4 sm:px-6">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-5 text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          WELCOME
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          I am
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-violet-400">
          {headerUser}.
        </h2>

        <div className="flex items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
          <span className="whitespace-nowrap">Full Stack Developer</span>
          <span className="ml-2 flex items-center min-w-[120px]">
            <Typewriter
              words={skills.map((s) => s.name)}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
              onType={handleType}
            />
            {skills[currentWordIndex].icon}
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-violet-400 shadow-lg">
          {!imageLoaded && !imageError && (
            <div className="w-full h-full bg-zinc-700 animate-pulse" />
          )}
          {!imageError ? (
            <img
              src={userImage}
              alt={headerUser}
              className={`h-full w-full object-cover transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-gray-400">
              <FaReact className="text-4xl" />
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

Home.propTypes = {
  headerUser: PropTypes.string,
};

export default Home;
