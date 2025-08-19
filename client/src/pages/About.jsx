import React from "react";

const About = () => {
  return (
    <div className="min-h-[78vh] bg-indigo-950 text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold underline decoration-indigo-500 underline-offset-4 text-center">
        About This Project
      </h1>

      <p className="max-w-3xl text-base sm:text-lg text-gray-300 text-center leading-relaxed mt-6 sm:mt-8 px-2">
        This is a full-stack authentication web application built with React for
        the frontend and Node.js with Express.js for the backend. It offers
        secure user registration, login, logout, password reset, email
        verification, and protected routes. Styled using Tailwind CSS, it uses
        JWT (JSON Web Tokens) for session management and MongoDB as the
        database.
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center underline mt-10 mb-6 sm:mb-8">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl w-full px-4">
        {[
          "HTML",
          "Tailwind CSS",
          "JavaScript",
          "Axios",
          "React.js",
          "React Router",
          "Express.js",
          "Node.js",
          "JWT",
          "MongoDB",

        ].map((tech, index) => (
          <div
            key={index}
            className="bg-indigo-800 border border-gray-700 rounded-xl p-4 sm:p-4 text-center font-semibold hover:border-indigo-300 transition text-sm sm:text-base"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
