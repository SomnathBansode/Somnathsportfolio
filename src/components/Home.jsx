import React from "react";

const Home = ({ HederUser }) => {
  const userImage = "images/1.png"; // Path relative to the public folder

  return (
    <section className="h-screen w-full bg-transparent flex flex-col md:flex-row items-center justify-center text-white px-4 sm:px-6">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-5 text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          WELCOME
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          I am
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-violet-400">
          {HederUser}.
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          M.E.R.N Stack Developer.
        </h3>
      </div>

      {/* Right Section with Circular Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-violet-400 shadow-lg">
          <img
            src={userImage}
            alt={HederUser}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
