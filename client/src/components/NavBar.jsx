import React, { useContext, useState } from "react";
import AuthContext from "../context/Authcontext";
import { NavLink, Navigate } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { toast } from "sonner";

const NavBar = () => {
  const [extendedNavBar, setExtendedNavBar] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("successfully loggedout", { duration: 500 });
    Navigate("/");
  };

  return (
    <div>
      <header className="px-4 py-5 bg-indigo-900 text-white relative">
        <div className="container mx-auto flex items-center justify-between gap-6 md:gap-0 p-2">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl md:text-4xl font-bold">AuthApp</h1>
          </div>

          {/* Center: Navigation Links */}
          <ul
            className={`md:static md:flex-row flex flex-col md:flex items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-lg transition-all duration-300 bg-indigo-900 md:bg-transparent p-4 md:p-0 z-50 w-full md:w-2/3 ${
              extendedNavBar
                ? "absolute top-20 left-0 translate-y-0"
                : "absolute -top-[400px] left-0"
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-indigo-300 border-b border-indigo-400"
                  : "flex items-center hover:text-indigo-200"
              }
            >
              Home
            </NavLink>

            {!auth.user ? (
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-indigo-300 border-b border-indigo-400"
                      : "flex items-center hover:text-indigo-200"
                  }
                >
                  Login
                </NavLink>

                {/* Sign-up button (shown in mobile nav) */}
                <div className="md:hidden">
                  <NavLink
                    to="/signup"
                    className="inline-block text-white bg-indigo-600 px-6 py-2 font-semibold rounded-xl hover:rounded-full hover:bg-indigo-700"
                  >
                    Sign-up
                  </NavLink>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-indigo-300 border-b border-indigo-400"
                      : "flex items-center hover:text-indigo-200"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/"
                  onClick={handleLogout}
                  className="hover:text-red-500 text-white"
                >
                  Logout{" "}
                  <span className="font-semibold underline underline-offset-2">
                    {auth.user.name}?
                  </span>
                </NavLink>
              </div>
            )}
          </ul>

          {/* Right: Sign-up button (desktop only) */}
          <div className="hidden md:block">
            {!auth.user && (
              <NavLink
                to="/signup"
                className="text-white bg-indigo-600 px-6 py-2 font-semibold rounded-xl hover:rounded-full hover:bg-indigo-700"
              >
                Sign-up
              </NavLink>
            )}
          </div>

          {/* Hamburger icon (mobile only) */}
          <div
            className="md:hidden p-2 bg-gray-200 text-gray-600 shadow-md hover:bg-gray-100 rounded z-50"
            onClick={() => setExtendedNavBar(!extendedNavBar)}
          >
            {extendedNavBar ? <DisabledByDefaultIcon /> : <ListIcon />}
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
