import React from "react";

const Navbar = ({ scrollToSlide, slides, currentSlide }) => {
  return (
    <nav
      id="main-nav"
      className="text-white py-4 fixed top-0 left-0 right-0 z-10 flex justify-between px-6"
      style={{ backgroundColor: "transparent" }} // Transparent background for the navbar
    >
      {/* Website title */}
      <h1 className="text-white font-bold text-2xl">
        <span className="text-neutral-800">Margaret</span> Gathoni
      </h1>

      {/* Navigation links */}
      <ul className="flex justify-between space-x-4">
        {slides.map((slide, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={() => scrollToSlide(index)} // Call scrollToSlide with the index of the clicked slide
              className={`${
                currentSlide === index ? "text-white" : "text-neutral-200" // Highlight current slide
              } hover:text-white transition-colors duration-300`} // Transition effect on hover
            >
              {slide.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Download Resume button */}
      <button>
        <a
          href="/Resume.pdf"
          download="Resume.pdf" // Set up file download
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300" // Button styles
        >
          Download Resume
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
