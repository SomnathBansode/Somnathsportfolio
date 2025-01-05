import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen w-full bg-transparent px-4 sm:px-6 md:px-10 py-8 md:py-10 text-white scroll-mt-32">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-violet-400 tracking-wide mb-3 md:mb-4 my-6">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg font-medium text-gray-300 px-2">
          I'd love to hear from you! Reach out using the options below.
        </p>
      </div>

      {/* Main Content Container - Transparent Background */}
      <div
        className="max-w-4xl mx-auto space-y-12 bg-transparent"
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 1)" }}
      >
        {/* Contact Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Email",
              detail: "bansodesomnath888@gmail.com",
              link: "mailto:bansodesomnath888@gmail.com",
              icon: "/images/icons8-gmail.svg",
              alt: "Email Icon",
            },
            {
              title: "LinkedIn",
              detail: "Somnath Bansode",
              link: "https://www.linkedin.com/in/somnath-bansode-sb88/",
              icon: "/images/icons8-linkedin.svg", // Change the icon path if needed
              alt: "LinkedIn Icon",
            },
            {
              title: "GitHub",
              detail: "Somnath Bansode",
              link: "https://github.com/SomnathBansode",
              icon: "/images/icons8-github.svg", // Change the icon path if needed
              alt: "GitHub Icon",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center space-y-4 border border-gray-700"
            >
              {/* Icon with background, rounded borders, and padding */}
              <div className="bg-white rounded-full p-3">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-12 h-12" // Adjust size as needed
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.detail}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-500 font-medium mt-2 inline-block"
                >
                  {`Go to ${item.title}`}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
