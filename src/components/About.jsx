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
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 bg-zinc-950 text-white py-16"
    >
      {/* Section Header */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-violet-400 mb-4 uppercase tracking-wider"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="w-24 h-1 bg-violet-500 rounded-full mb-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="max-w-5xl text-center md:text-left space-y-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Summary */}
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
          I’m a{" "}
          <span className="text-violet-400 font-semibold">
            MERN Stack Developer &nbsp;
          </span>
          passionate about building modern, responsive, and impactful web
          applications. With experience in React.js, Node.js, Express, and
          MongoDB, I love turning ideas into real digital products.
        </p>

        {/* Availability */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          {["Freelance", "Internship", "Job Opportunities"].map((type) => (
            <span
              key={type}
              className="px-4 py-2 bg-violet-600/10 border border-violet-500/30 text-violet-300 text-sm rounded-full"
            >
              Available for {type}
            </span>
          ))}
        </div>

        {/* Education */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-5 flex flex-col md:flex-row items-center gap-4">
          <FaGraduationCap className="text-violet-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-100">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-sm text-gray-400">
              Sangola College, Solapur University • 2019–2022 • Score: 78.08%
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-3">
            <FaBriefcase className="text-violet-400 text-2xl" />
            <h3 className="text-lg font-semibold text-gray-100">Experience</h3>
          </div>
          <ul className="space-y-2 pl-8">
            <li className="text-sm text-gray-300 flex items-start gap-2">
              <BsFillPatchCheckFill className="text-violet-400 mt-1" />
              <span>
                <strong>Full Stack Developer Intern</strong> — Innomatics
                Research Labs (Feb–Mar 2025) • Built Healthcare Booking System
                with JWT Auth and optimized MongoDB queries (30% faster).
              </span>
            </li>
            <li className="text-sm text-gray-300 flex items-start gap-2">
              <BsFillPatchCheckFill className="text-violet-400 mt-1" />
              <span>
                <strong>Frontend Developer Intern</strong> — Innomatics Research
                Labs (Jan–Feb 2025) • Created reusable React components and
                improved UI performance by 20%.
              </span>
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <FaTrophy className="text-yellow-400 text-2xl" />
            <h3 className="text-lg font-semibold text-gray-100">
              Achievements
            </h3>
          </div>
          <ul className="space-y-2 pl-8 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <BsFillPatchCheckFill className="text-violet-400 mt-1" />
              <span>
                Built 3+ full-stack web applications using MERN stack.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <BsFillPatchCheckFill className="text-violet-400 mt-1" />
              <span>
                Completed Advanced Full Stack & Frontend Development
                certifications from Innomatics.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <BsFillPatchCheckFill className="text-violet-400 mt-1" />
              <span>Improved API performance by 30% during internship.</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex justify-center md:justify-start mt-8">
          <a
            href="mailto:bansodesomnath888@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 rounded-full font-medium hover:bg-violet-700 transition"
          >
            <FaEnvelope className="text-white text-lg" />
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
