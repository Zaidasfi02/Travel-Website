import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="min-h-screen bg-blue-50 text-blue-900 flex justify-center items-center p-8">
      {/* Sign Up Container */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-6">
          Create an Account
        </h2>

        {/* Sign Up Form */}
        <form className="grid gap-6">
          <div>
            <label className="block text-lg font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Create a password"
            />
          </div>

          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-md w-full">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-6">
          Already have an account?{" "}
          {/* <a href="/signin" className="text-blue-600 font-semibold">
            Sign In
          </a> */}
          <Link to="/signin" className="text-blue-600 font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
