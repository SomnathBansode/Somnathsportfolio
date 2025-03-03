import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatusMessage("Message sent successfully!");
          setIsSubmitted(true);
          form.current.reset();
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

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

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto space-y-12 bg-transparent">
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
              icon: "/images/icons8-linkedin.svg",
              alt: "LinkedIn Icon",
            },
            {
              title: "GitHub",
              detail: "Somnath Bansode",
              link: "https://github.com/SomnathBansode",
              icon: "/images/icons8-github.svg",
              alt: "GitHub Icon",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-800 rounded-lg p-6 shadow-lg flex flex-col items-center space-y-4 border border-gray-700"
            >
              <div className="bg-white rounded-full p-3">
                <img src={item.icon} alt={item.alt} className="w-12 h-12" />
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

      {/* Email Form Section */}
      <div className="max-w-3xl mx-auto mt-16 p-8 bg-zinc-800 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-violet-400 mb-6">
          Send Me a Message
        </h2>
        {!isSubmitted ? (
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input type="hidden" name="to_name" value="Somnath Bansode" />
            <input
              type="hidden"
              name="reply_to"
              value="bansodesomnath888@gmail.com"
            />

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-center text-gray-300 mt-4 text-lg font-semibold">
            Thank you for reaching out! I will get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
