import React from "react";
import headerimg from "../images/header-img.png";

const Introduction = () => {
  const profile = {
    name: "Margaret Gathoni",
    tagline: "Bridging Technology, Data, and Human Impact 💡",
    bio: "I design and build systems that turn raw data into insight — blending full-stack engineering with analytics, cloud, and AI innovation.",
    focus: [
      "Full Stack Development",
      "Data Science & Visualization",
      "AI Systems & Automation",
      "DevOps & Cloud Integration",
    ],
    avatar_url: headerimg,
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-r from-violet-900 via-purple-700 to-indigo-800 text-white px-10 py-16">
      {/* Decorative floating blobs */}
      <div className="absolute -top-40 -left-20 w-[30rem] h-[30rem] bg-fuchsia-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] bg-cyan-400 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Avatar Section */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end z-5 mb-10 md:mb-0">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="rounded-full h-[50vh] w-[50vh] object-cover border-4 border-yellow-400 shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-start z-15 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl mb-2 font-light opacity-90">
          Hi, I’m
        </h1>
        <h2 className="text-[3.5rem] md:text-[5rem] font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
          {profile.name}
        </h2>
        <h3 className="text-xl italic mb-6 text-yellow-200">
          {profile.tagline}
        </h3>
        <p className="text-lg md:text-2xl leading-relaxed w-full md:w-4/5 mb-8">
          {profile.bio}
        </p>

        {/* Focus Areas */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
          {profile.focus.map((area, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm md:text-base hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex gap-6 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition duration-300"
          >
            View My Work 🚀
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-400 text-yellow-300 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
