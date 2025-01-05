import React from "react";

const Project = () => {
  const projects = [
    {
      title: "PassGuard - Password manager ",
      description:
        "A secure and user-friendly password manager for storing, managing, and searching passwords. Built with React, it offers seamless functionality and an intuitive design.",
      technologies: "HTML, CSS, JavaScript, React.js, Tailwind CSS",
      link: "https://passguardwebapp.netlify.app/",
      image: "images/passguard.png",
    },
    {
      title: "Gym Project",
      description:
        "A responsive gym website with modern design, showcasing services and workout plans.",
      technologies: "HTML, CSS, JavaScript, React.js, Tailwind CSS",
      link: "https://somnathbansodegymproject.netlify.app/",
      image: "images/gym_project.png",
    },
    {
      title: "Todo List",
      description:
        "A responsive task management app built with React.js and Tailwind CSS, enabling seamless task addition, editing, completion, and deletion.",
      technologies: "HTML, Tailwind CSS, JavaScript, React.js",
      link: "https://somnathbansodetodolist.netlify.app/",
      image: "images/todo.jpg",
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio website showcasing projects, skills, and achievements with a responsive and modern design.",
      technologies: "HTML, JavaScript, React.js, Tailwind CSS",
      link: "",
      image: "images/portfolio.png",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-transparent px-4 sm:px-6 md:px-8 lg:px-10 py-8 text-white">
      <div className="text-center mb-8 sm:mb-10 md:mb-12 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#a78bfa] tracking-wide mb-3 sm:mb-4">
          My Projects
        </h1>
        <p className="text-base sm:text-lg font-semibold text-gray-200">
          Here are a few projects I've worked on.
        </p>
      </div>

      {/* Scrollable Parent Container */}
      <div className="max-w-7xl mx-auto h-[500px] overflow-auto bg-zinc-900 rounded-lg p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg overflow-hidden"
              style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 1)" }}
            >
              {/* Project Image */}
              <div className="w-full h-auto relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Project Details */}
              <div className="p-4 sm:p-5 md:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">
                  {project.description}
                </p>
                {project.technologies && (
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                    Technologies: {project.technologies}
                  </p>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 font-semibold hover:text-blue-500 transition-all duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
