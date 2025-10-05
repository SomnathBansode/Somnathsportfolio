import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
];

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-zinc-950 text-white"
    >
      {/* Left: Intro */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-sm font-medium text-violet-400 uppercase tracking-widest">
          Full Stack Developer
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100">
          Hi, I&apos;m <span className="text-violet-400">Somnath Bansode</span>
        </h1>
        <p className="text-gray-400 max-w-lg leading-relaxed mx-auto md:mx-0">
          I build modern, responsive, and user-friendly web applications using
          the MERN stack. I love turning ideas into real digital experiences.
        </p>

        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a
            href="#about"
            className="px-6 py-2 bg-violet-600 rounded-full font-semibold text-sm hover:bg-violet-700 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#projects"
            className="px-6 py-2 border border-violet-500 rounded-full font-semibold text-sm text-violet-400 hover:bg-violet-600/10 transition-colors"
          >
            View Projects
          </a>
        </div>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-300 hover:border-violet-500 transition-colors"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: Profile Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-violet-500 shadow-xl shadow-violet-500/30">
          <img
            src="/images/1.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
