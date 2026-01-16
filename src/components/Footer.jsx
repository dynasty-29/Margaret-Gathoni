import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaMedium, FaHeart, FaRocket } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const Footer = ({ scrollToSection, sections }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-950 text-white py-16 border-t border-white/10 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* About Section */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">
                                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    Margaret
                                </span>{" "}
                                <span className="text-white">Gathoni</span>
                            </h3>
                            <p className="text-cyan-400 font-medium mb-4">
                                Data Scientist & Full Stack Developer
                            </p>
                        </div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building scalable systems that bridge technology, data, and human impact. 
                            Specialized in healthcare informatics, AI/ML, and cloud-native solutions.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { href: "https://linkedin.com/in/margaret-gathoni", icon: FaLinkedin, color: "hover:text-blue-400" },
                                { href: "https://github.com/dynasty-29", icon: FaGithub, color: "hover:text-purple-400" },
                                { href: "https://youtube.com/@SonnieCodes", icon: FaYoutube, color: "hover:text-red-400" },
                                { href: "https://medium.com/@SonnieCodes", icon: FaMedium, color: "hover:text-green-400" }
                            ].map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color}`}
                                        aria-label={social.icon.name}
                                    >
                                        <IconComponent className="text-xl text-gray-400 group-hover:text-current transition-colors" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-lg transition-all"></div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <FaRocket className="text-cyan-400" />
                            Quick Navigation
                        </h3>
                        <ul className="space-y-3">
                            {sections.map((section, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(index)}
                                        className="group flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyan-400 transition-colors"></span>
                                        {section.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <HiMail className="text-cyan-400" />
                            Get In Touch
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 group">
                                <HiLocationMarker className="text-cyan-400 text-xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-gray-400 text-sm">Nairobi, Kenya</span>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <HiMail className="text-cyan-400 text-xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <a 
                                    href="mailto:mgathoni.gathoni9@gmail.com" 
                                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm break-all"
                                >
                                    mgathoni.gathoni9@gmail.com
                                </a>
                            </div>
                            
                            <a
                                href="/Resume.pdf"
                                download
                                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 mt-4"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg className="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Resume
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                            © {currentYear} Margaret Gathoni. Built with 
                            <FaHeart className="text-red-500 animate-pulse" /> 
                            and React
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Available for opportunities
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;