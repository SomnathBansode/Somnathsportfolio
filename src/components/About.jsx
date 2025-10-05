import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

const About = () => {
  const experience = [
    {
      title: "Full Stack Developer Intern",
      company: "Innomatics Labs",
      period: "Feb–Mar 2025",
      details:
        "Built Healthcare Booking System with JWT Auth and optimized MongoDB queries.",
    },
    {
      title: "Frontend Developer Intern",
      company: "Innomatics Labs",
      period: "Jan–Feb 2025",
      details:
        "Created reusable React components and improved UI performance by 20%.",
    },
  ];

  const achievements = [
    "Built 3+ full-stack web applications using MERN stack.",
    "Completed Full Stack & Frontend Development certifications from Innomatics.",
    "Improved API performance by 30% during internship.",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white px-6 md:px-16 py-12 sm:py-16 md:py-20 flex flex-col items-center relative">
      {/* Header */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-violet-400 mb-8 relative z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Summary */}
      <motion.div
        className="max-w-3xl text-center md:text-left mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a{" "}
          <span className="text-violet-400 font-semibold">
            MERN Stack Developer
          </span>
          passionate about building modern, responsive, and impactful web
          applications. I specialize in React.js, Node.js, Express, and MongoDB,
          turning ideas into real digital products.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
          {["Freelance", "Internship", "Job Opportunities"].map((type) => (
            <span
              key={type}
              className="px-4 py-2 text-xs sm:text-sm bg-violet-600/20 border border-violet-500/40 rounded-full text-violet-300 hover:bg-violet-600/30 transition"
            >
              Available for {type}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Info Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl w-full z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Education */}
        <motion.div
          className="bg-zinc-800/40 border border-zinc-700 rounded-xl p-6 hover:scale-105 transition-transform shadow-lg shadow-violet-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-violet-400 w-7 h-7" />
            <h3 className="text-lg font-semibold text-gray-100">Education</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Bachelor of Computer Applications (BCA) <br />
            Sangola College, Solapur University • 2019–2022 • Score: 78.08%
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="bg-zinc-800/40 border border-zinc-700 rounded-xl p-6 hover:scale-105 transition-transform shadow-lg shadow-green-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaBriefcase className="text-violet-400 w-7 h-7" />
            <h3 className="text-lg font-semibold text-gray-100">Experience</h3>
          </div>
          <ul className="text-gray-300 text-sm space-y-4 relative pl-4 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-violet-500">
            {experience.map((exp, index) => (
              <li key={index} className="relative pl-4">
                <span className="absolute -left-2 top-1.5 w-3 h-3 rounded-full bg-violet-400"></span>
                <strong>{exp.title}</strong> — {exp.company} ({exp.period})
                <br />
                {exp.details}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-gradient-to-br from-yellow-600/20 via-yellow-500/10 to-yellow-400/10 border border-yellow-400/40 rounded-xl p-6 hover:scale-105 transition-transform shadow-lg shadow-yellow-400/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaTrophy className="text-yellow-400 w-7 h-7" />
            <h3 className="text-lg font-semibold text-gray-100">
              Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((achieve, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-yellow-500/10 border border-yellow-400/30 rounded-full px-4 py-2 hover:bg-yellow-500/20 transition-colors cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-8 h-8 flex items-center justify-center bg-yellow-400/20 rounded-full text-yellow-400 flex-shrink-0">
                  <BsFillPatchCheckFill className="w-5 h-5" />
                </div>
                <p className="text-gray-100 text-sm">{achieve}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Button */}
      <motion.div
        className="mt-12 flex justify-center md:justify-start z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a
          href="mailto:bansodesomnath888@gmail.com"
          className="inline-flex items-center gap-3 px-6 py-3 bg-violet-600 rounded-full font-medium text-white hover:bg-violet-700 transition text-sm sm:text-base"
        >
          <FaEnvelope className="w-5 h-5" />
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default About;
