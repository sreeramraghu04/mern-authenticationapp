import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/Authcontext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      if (data && data.success) {
        toast.success(data.message);
        setAuth({
          ...auth,
          user: data.user,
          token: data.token,
        });

        localStorage.setItem("auth", JSON.stringify(data));
        navigate("/");
      } else {
        toast.error(data.message);
      }
      console.log(data);
    } catch (error) {
      console.log(`something went wrong while loging in ${error}`);
      toast.error(`something went wrong while loging in`);
    }
  };

  return (
    <div className="min-h-[78vh] flex items-center justify-center bg-indigo-950 text-white px-4 sm:px-6 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center underline decoration-indigo-500 underline-offset-4">
          Login to Your Account
        </h2>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium text-sm sm:text-base underline decoration-indigo-900 underline-offset-4">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="yourmail@example.com"
            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 font-medium text-sm sm:text-base underline decoration-indigo-900 underline-offset-4">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="Enter your password"
            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-2.5 rounded-md font-semibold text-sm sm:text-base mt-3"
        >
          Login
        </button>

        {/* Optional: Forgot Password Link */}
        {/* 
        <p className="text-center text-xs sm:text-sm text-gray-400">
          <a href="/forgot-password" className="hover:text-indigo-400">
            Forgot your password?
          </a>
        </p> 
        */}
      </form>
    </div>
  );
};

export default Login;
