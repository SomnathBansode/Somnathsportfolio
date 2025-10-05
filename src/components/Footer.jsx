import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const contacts = [
    {
      name: "Email",
      link: "mailto:bansodesomnath888@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/somnath-bansode-sb88/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      link: "https://github.com/SomnathBansode",
      icon: <FaGithub />,
    },
  ];

  return (
    <footer className="bg-[#09090b] text-white py-6 mt-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between px-4">
        <p className="mb-4 sm:mb-0">
          &copy; {year} Somnath Bansode. All Rights Reserved.
        </p>

        <div className="flex space-x-6">
          {contacts.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-[#8b5cf6] transition-colors duration-300"
            >
              {item.icon}
              <span className="hidden sm:inline">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
