import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 px-4 py-8">
      <div className="text-center max-w-md mt-20">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white">404</h1>
        <h2 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-200">
          Page Not Found
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-300">
          Sorry, the page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-sm sm:text-base bg-commonblue text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
