import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="min-h-screen bg-blue-50 text-blue-900 flex justify-center items-center p-8">
      {/* Sign In Container */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>

        {/* Sign In Form */}
        <form className="grid gap-6">
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
              placeholder="Enter your password"
            />
          </div>

          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-md w-full">
            Sign In
          </button>
        </form>

        {/* Forgot Password */}
        <p className="text-center text-blue-600 mt-4 cursor-pointer">
          Forgot password?
        </p>

        {/* Sign Up Link */}
        <p className="text-center mt-6">
          Don't have an account?{" "}
          {/* <a href="/signup" className="text-blue-600 font-semibold">
            Sign Up
          </a> */}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
