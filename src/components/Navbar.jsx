import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ slides }) => {
  const location = useLocation();

  return (
    <nav
      id="main-nav"
      className="text-white py-4 fixed top-0 left-32 right-0 z-50 flex justify-between items-center px-6 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      {/* Website title */}
      <Link to="/" className="font-bold text-2xl hover:opacity-80 transition-opacity cursor-pointer">
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Margaret
        </span>{" "}
        <span className="text-gray-800">Gathoni</span>
      </Link>

      {/* Navigation links */}
      <ul className="hidden md:flex justify-center space-x-6">
        {slides.map((slide, index) => (
          <li key={index}>
            <Link
              to={slide.path}
              className={`${
                location.pathname === slide.path
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600"
              } hover:text-indigo-600 transition-colors duration-300 text-sm cursor-pointer px-3 py-2 rounded-lg hover:bg-indigo-50`}
            >
              {slide.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Download Resume button */}
      <a
        href="/Resume.pdf"
        download="Resume.pdf"
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-sm font-semibold cursor-pointer"
      >
        Download Resume
      </a>
    </nav>
  );
};

export default Navbar;