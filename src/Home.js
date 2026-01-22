import { useState, useEffect } from "react";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const sections = [
    { component: <Introduction />, name: "Introduction", icon: "👋" },
    { component: <Projects />, name: "Projects", icon: "🚀" },
    { component: <Skills />, name: "Skills", icon: "⚡" },
    { component: <Experience />, name: "Experience", icon: "💼" },
    
];

const Home = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const scrollToSection = (index) => {
        const sectionId = `section-${index}`;
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setCurrentSection(index);
        }
    };

    // Force scroll to top on mount
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        
        window.scrollTo(0, 0);
        
        if (window.location.hash) {
            window.history.replaceState(null, null, ' ');
        }
    }, []);

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

            {/* Futuristic Left Sidebar Navigation */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fixed left-0 top-0 h-screen w-20 md:w-24 bg-slate-900/95 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col items-center justify-center shadow-2xl shadow-black/50"
            >
                {/* Decorative top element */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-slate-900"></div>
                    </div>
                </div>

                {/* Navigation buttons */}
                <div className="space-y-4">
                    {sections.map((section, index) => (
                        <motion.button
                            key={index}
                            onClick={() => scrollToSection(index)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative w-full flex flex-col items-center justify-center"
                            aria-label={`Navigate to ${section.name}`}
                        >
                            {/* Active indicator line */}
                            {currentSection === index && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -left-[1px] w-1 h-12 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-r-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}

                            {/* Icon/Button */}
                            <div
                                className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                    currentSection === index
                                        ? "bg-gradient-to-br from-cyan-600 to-purple-600 shadow-lg shadow-cyan-500/50"
                                        : "bg-white/5 hover:bg-white/10"
                                }`}
                            >
                                <span className="text-2xl">{section.icon}</span>
                                
                                {/* Glow effect on active */}
                                {currentSection === index && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-xl blur-xl opacity-50 -z-10"></div>
                                )}
                            </div>

                            {/* Tooltip on hover */}
                            <div
                                className={`absolute left-full ml-4 px-4 py-2 bg-slate-800/95 backdrop-blur-sm border border-white/10 text-white text-2xl font-bold rounded-lg whitespace-nowrap pointer-events-none transition-all duration-300 ${
                                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                }`}
                            >
                                {section.name}
                                <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 border-l border-t border-white/10 rotate-45 -mr-1"></div>
                            </div>

                            {/* Section number */}
                            <span className={`mt-1 text-xs font-bold transition-colors ${
                                currentSection === index ? 'text-cyan-400' : 'text-gray-500'
                            }`}>
                                0{index + 1}
                            </span>
                        </motion.button>
                    ))}
                </div>

                {/* Progress indicators at bottom */}
                <div className="absolute bottom-8 flex flex-col items-center gap-3">
                    {sections.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => scrollToSection(index)}
                            className="group relative"
                            whileHover={{ scale: 1.2 }}
                        >
                            <div
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    currentSection === index
                                        ? "bg-gradient-to-b from-cyan-500 to-purple-500 w-2 h-6"
                                        : "bg-white/20 hover:bg-white/40"
                                }`}
                            />
                        </motion.button>
                    ))}
                </div>

                {/* Decorative bottom element */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-white/10 to-transparent"></div>
            </motion.div>

            {/* Main content - FIXED FOOTER GAP */}
            <div className="ml-20 md:ml-24">
                {sections.map((section, index) => (
                    <section
                        key={index}
                        id={`section-${index}`}
                        className="w-full min-h-screen flex items-center justify-center"
                    >
                        <div className="w-full">
                            {section.component}
                        </div>
                    </section>
                ))}
            </div>

            {/* Footer - NO GAP */}
            <div className="ml-20 md:ml-24">
                <Footer scrollToSection={scrollToSection} sections={sections} />
            </div>
        </div>
    );
};

export default Home;