import React from "react";
// import ProfileImage from "../assets/hero-image.png"; // Update if needed

export default function Skills({ id }) {
  const skills = ["HTML", "CSS", "JS", "React", "Node.js", "Tailwindcss"];

  return (
    <section id={id} className="w-full bg-[#f7fdfd] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Skill Text + Bubbles */}
        <div>
          <p className="text-sm text-teal-600 font-semibold mb-2">My Skill</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            I Am Expert In
          </h2>

          <p className="text-gray-700 mb-8 max-w-md">
            I've built and contributed to multiple web applications using modern
            frontend technologies.I specialize in creating responsive user
            interfaces, with great animations and styles.I enjoy turning ideas
            into functional, visually appealing projects.
          </p>

          <div className="flex flex-wrap gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-20 h-20 rounded-full bg-gradient-to-b from-teal-700 to-teal-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg hover:scale-110 transition-transform duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center items-center relative">
          <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-teal-100 to-white p-4 shadow-xl flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Uyf1jV1bv39whpvUrRrJD2Bw84g6Mb1KQA&s"
              alt="Profile"
              className="w-[250px] h-[250px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
