import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {year} Somnath Bansode. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/somnath-bansode-sb88/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a78bfa]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SomnathBansode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a78bfa]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
