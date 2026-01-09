import React, { useState, useEffect } from "react";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sections = [
    { component: <Introduction />, name: "Introduction", color: "from-indigo-50 via-white to-cyan-50" },
    { component: <Skills />, name: "Skills", color: "from-purple-50 via-white to-pink-50" },
    { component: <Experience />, name: "Experience", color: "from-blue-50 via-white to-indigo-50" },
    { component: <Projects />, name: "Projects", color: "from-cyan-50 via-white to-blue-50" },
];

const Home = () => {
    const [currentSection, setCurrentSection] = useState(0);

    const scrollToSection = (index) => {
        const sectionId = `section-${index}`;
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setCurrentSection(index);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            
            sections.forEach((_, index) => {
                const element = document.getElementById(`section-${index}`);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setCurrentSection(index);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative">
            <Navbar
                scrollToSlide={scrollToSection}
                slides={sections}
                currentSlide={currentSection}
            />

            {/* Left Sidebar Navigation */}
            <div className="fixed left-0 top-0 h-screen w-32 bg-gray-400 backdrop-blur-md border-r border-gray-200 z-50 flex flex-col items-center justify-center shadow-lg">
                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSection(index)}
                            className="group relative w-full flex items-center justify-center"
                        >
                            <div
                                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                    currentSection === index
                                        ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                }`}
                            >
                                {section.name}
                            </div>
                            {currentSection === index && (
                                <div className="absolute -left-4 w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-r-full" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="absolute bottom-8 flex flex-col items-center gap-2">
                    {sections.map((_, index) => (
                        <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                currentSection === index
                                    ? "bg-indigo-500 h-8"
                                    : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Vertical scrolling sections with padding for footer */}
            <div className="ml-32 pb-64">
                {sections.map((section, index) => (
                    <section
                        key={index}
                        id={`section-${index}`}
                        className={`w-full min-h-screen bg-gradient-to-br ${section.color} flex items-center justify-center`}
                    >
                        <div className="w-full">
                            {section.component}
                        </div>
                    </section>
                ))}
            </div>

            {/* Fixed Footer */}
            <Footer scrollToSection={scrollToSection} sections={sections} />
        </div>
    );
};

export default Home;