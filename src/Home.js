import React, { useState, useRef, useEffect } from "react";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

const slides = [
    { component: <Introduction />, name: "Introduction", color: "rgb(74 222 128)" },
    { component: <Skills />, name: "Skills", color: "rgb(232 121 249)" },
    { component: <Experience />, name: "Experience", color: "rgb(96 165 250)" },
    { component: <Projects />, name: "Projects", color: "rgb(248 113 113)" },
];

const Home = () => {
    const containerRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const scrollToSlide = (index) => {
        containerRef.current.scrollTo({
            left: index * window.innerWidth,
            behavior: "smooth",
        });
        setCurrentSlide(index);
    };

    const handleScroll = (event) => {
        if (event.deltaY > 0 && currentSlide < slides.length - 1) {
            scrollToSlide(currentSlide + 1);
        } else if (event.deltaY < 0 && currentSlide > 0) {
            scrollToSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener("wheel", handleScroll);
        return () => container.removeEventListener("wheel", handleScroll);
    }, [currentSlide]);

    return (
        <div className="relative">
            <Navbar
                scrollToSlide={scrollToSlide}
                slides={slides}
                currentSlide={currentSlide}
            />

            {/* FIX: Allow vertical scroll for inner content */}
            <div
                ref={containerRef}
                className="flex overflow-x-hidden overflow-y-auto w-full h-screen snap-x snap-mandatory"
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center relative w-screen h-screen flex-shrink-0 snap-center"
                        style={{ backgroundColor: slide.color }}
                    >
                        <div className="overflow-y-auto w-full h-full">
                            {slide.component}
                        </div>

                        {/* Bottom Dots */}
                        <div className="absolute bottom-2 w-full flex justify-center text-white">
                            Scroll to view my skills, experience and projects
                            {slides.map((_, dotIndex) => (
                                <div key={dotIndex} className="relative group mx-1">
                                    <span
                                        className={`h-2.5 w-2.5 rounded-full inline-block cursor-pointer ${dotIndex === currentSlide ? "bg-white" : "bg-gray-500"
                                            }`}
                                        onClick={() => scrollToSlide(dotIndex)}
                                    ></span>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {slides[dotIndex].name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
