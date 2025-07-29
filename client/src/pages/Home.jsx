import React, { useContext } from "react";
import AuthContext from "../context/Authcontext";

const Home = () => {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <div className="min-h-[78vh] bg-indigo-950 text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-12 sm:py-16">
      {/* Functional Overview Section */}
      <main className="w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 underline decoration-indigo-500 underline-offset-4">
          Authentication System Features
        </h2>

        <p className="mb-10 max-w-3xl mx-auto text-center text-gray-300 leading-relaxed px-2 text-base sm:text-lg">
          A secure authentication app built with React and styled using Tailwind
          CSS. The backend uses Node, Express.js, and MongoDB to handle user
          login, registration, and protected routes with JWT.
        </p>

        <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 w-full max-w-xl mx-auto mt-10 border border-gray-200">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
            👤 Signed User Details
          </h1>
          <pre className="bg-indigo-100 text-sm sm:text-base text-gray-700 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
            {JSON.stringify(auth, null, 2)}
          </pre>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-2">
          {/* Feature Cards */}
          {[
            {
              title: "User Registration",
              description:
                "Register accounts with form validation and verification using Express.js.",
            },
            {
              title: "User Login",
              description:
                "Login securely with token-based authentication powered by Node.js.",
            },
            {
              title: "User Logout",
              description:
                "Securely end user sessions and clear authentication tokens or cookies.",
            },
            {
              title: "Email Verification",
              description:
                "Verify user email addresses during registration to ensure account authenticity.",
            },
            {
              title: "Protected Routes",
              description:
                "Access control for private pages like user page and about page, only after login.",
            },
            {
              title: "Session Management",
              description:
                "JWT session cookies maintain active user sessions with secure logout.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-indigo-800 border border-gray-700 rounded-xl p-5 sm:p-6 hover:border-indigo-300 transition flex flex-col"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
