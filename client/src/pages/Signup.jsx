import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/auth/signup",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (data && data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
      console.log(data);
    } catch (error) {
      console.log(`something went wrong while signing up ${error}`);
      toast.error(`something went wrong while signing up`);
    }
  };

  return (
    <div className="min-h-[78vh] flex items-center justify-center bg-indigo-950 text-white px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center underline decoration-indigo-500 underline-offset-4">
          Create an Account
        </h2>

        {/* Name */}
        <div>
          <label className="block mb-2 font-medium text-sm sm:text-base underline decoration-indigo-900 underline-offset-4">
            Full Name
          </label>
          <input
            type="text"
            name={name}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            placeholder="Your full name"
            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium text-sm sm:text-base underline decoration-indigo-900 underline-offset-4">
            Email Address
          </label>
          <input
            type="email"
            name={email}
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
            name={password}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="Choose a password"
            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-medium text-sm sm:text-base underline decoration-indigo-900 underline-offset-4">
            Phone Number
          </label>
          <input
            type="tel"
            name={phone}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
            placeholder="+91 Your number"
            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-2 font-medium text-sm sm:text-base underline decoration-indigo-900 underline-offset-4">
            Address
          </label>
          <textarea
            name={address}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
            placeholder="Your full address"
            rows="2"
            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
