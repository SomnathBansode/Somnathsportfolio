import React, { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const projects = [
  {
    title: "NexLearn - Online Examination Platform",
    description:
      "A secure MERN stack online test platform with JWT authentication, real-time monitoring, multilingual support, and automated evaluation. Includes analytics dashboard and PDF reports.",
    technologies:
      "MERN Stack (MongoDB, Express, React, Node.js), JWT, GridFS, Chart.js",
    link: "https://nexlearn.netlify.app/",
    image: "/images/online-test.png",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "HealthLink - Medical Booking System",
    description:
      "MERN-based healthcare platform with role-based access (patient/doctor/admin) and secure JWT authentication.",
    technologies: "React, Node.js, MongoDB, Express, JWT",
    link: "https://healthlinkwebapp.netlify.app",
    image: "/images/healthlinkwebapp.png",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "PassGuard - Password Manager",
    description:
      "A secure and user-friendly password manager for storing and managing passwords. Built with React and Tailwind CSS.",
    technologies: "HTML, CSS, JavaScript, React.js, Tailwind CSS",
    link: "https://passguardwebapp.netlify.app/",
    category: "Frontend",
    featured: false,
    image: "/images/passguard.png",
  },
  {
    title: "Gym Project",
    description:
      "A responsive gym website with modern design, showcasing services and workout plans.",
    technologies: "HTML, CSS, JavaScript, React.js, Tailwind CSS",
    link: "https://somnathbansodegymproject.netlify.app/",
    category: "Frontend",
    featured: false,
    image: "/images/gym_project.png",
  },
  {
    title: "Todo List",
    description:
      "A task management app built with React.js and Tailwind CSS, enabling seamless task addition, editing, and deletion.",
    technologies: "HTML, Tailwind CSS, JavaScript, React.js",
    link: "https://somnathbansodetodolist.netlify.app/",
    category: "Frontend",
    featured: false,
    image: "/images/todo.jpg",
  },
];

// Small card component that handles visibility (no blinking) and image placeholder
const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              obs.unobserve(node);
            }
          });
        },
        { threshold: 0.15 }
      );
      obs.observe(node);
      return () => obs.disconnect();
    } else {
      // Fallback: immediately show
      setIsVisible(true);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`relative bg-zinc-800/50 border border-zinc-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } duration-500`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-[#8b5cf6] rounded-full text-xs font-bold text-white">
          ⭐ Featured
        </div>
      )}

      {/* Image with placeholder */}
      <div className="w-full overflow-hidden rounded-t-xl relative bg-zinc-700">
        <div className="aspect-w-16 aspect-h-9">
          {/* placeholder shown until image loads */}
          {!imgLoaded && (
            <div className="absolute inset-0 bg-zinc-700 animate-pulse"></div>
          )}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className="w-full h-full object-cover object-center transition-opacity duration-500"
            style={{ opacity: imgLoaded ? 1 : 0 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-2">
        <span className="px-3 py-1 bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs font-medium rounded-full border border-[#8b5cf6]/30">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-sm text-gray-400">{project.description}</p>
        <p className="text-xs text-gray-500">
          <span className="text-[#8b5cf6] font-semibold">Tech:</span>{" "}
          {project.technologies}
        </p>

        {/* View Live Button */}
        <div>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8b5cf6] rounded-full text-sm font-semibold hover:bg-[#7c3aed] transition-all"
            >
              View Live <FaExternalLinkAlt className="text-xs" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 rounded-full text-gray-500 text-sm font-medium cursor-not-allowed">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full Stack", "Frontend"];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-zinc-950 text-white"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8b5cf6]/10 rounded-full mb-4">
          <HiSparkles className="text-[#8b5cf6]" />
          <span className="text-sm text-[#8b5cf6]/80 font-medium">
            Featured Work
          </span>
        </div>

        <h2 className="text-4xl font-bold mb-4 text-[#8b5cf6]">My Projects</h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Explore my collection of full-stack applications and creative frontend
          projects built with modern technologies.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-[#8b5cf6] text-white"
                : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

// PropTypes for ProjectCard
import PropTypes from "prop-types";

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    technologies: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    featured: PropTypes.bool,
  }).isRequired,
};

export default Project;
