import React from "react";
// import ProfileImage from "../assets/hero-image.png"; // Update to your image path

export default function About() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-teal-100 to-white p-4 shadow-xl flex items-center justify-center">
            <img
              //   src={ProfileImage}
              alt="Profile"
              className="w-[250px] h-[250px] object-cover rounded-full"
            />
            {/* Info Card */}
            <div className="absolute bottom-0 right-0 bg-white shadow-lg rounded-md px-4 py-2 text-center">
              <p className="text-sm font-medium text-gray-800">Web Designer</p>
              <p className="text-xs text-teal-600">180+ Project Complete</p>
            </div>
          </div>
        </div>

        {/* About Text */}
        <div>
          <p className="text-sm text-teal-600 font-semibold uppercase mb-2">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            I Am A Passionate Web Developer
          </h2>

          <p className="text-gray-700 mb-4">
            I'm a dedicated B.Tech IT student and aspiring Frontend-Developer
            with Hands-on experience in building esponsive and user friendly web
            applications.I specialize in React, JavaScript, and Node.js and
            enjoy turning ideas into interative, real-world solutions.
          </p>

          <p className="text-gray-700 mb-4">
            <strong className="text-teal-600">Smart Work:</strong> I've
            developed task management and event apps with clean UI and smooth
            functionality.
          </p>

          <p className="text-gray-700">
            <strong className="text-teal-600">Modern Work:</strong> Comfortable
            with JavaScript, React, HTML, CSS, Tailwindcss and deployment tools
            like Vercel, Vite and Render.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: "Projects Built", value: "3+" },
          { label: "Internships Completed", value: "2+" },
          { label: "Tech Skills Mastered", value: "5+" },
          { label: "Passion to Learn and Grow", value: "∞" },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-sm hover:shadow-md hover:border-teal-500 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800">{item.value}</h3>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Hobbies Section */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <p className="text-sm text-gray-500 font-semibold">Hobbies</p>
        <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mt-1 mb-6">
          Things I Love To Do
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Batminton",
            "Cybersecurity",
            "Cooking",
            "Music",
            "Drawing",
            "Graphic Design",
            "Photography",
            "DevOps",
            "Reading Books",
            "Blogging",
            "Coding",
            "Gaming",
            "UX Research",
            "Project Management",
            "Writing",
            "Reading",
            "Swimming",
            "Dancing",
          ].map((hobby, idx) => (
            <span
              key={idx}
              className="px-5 py-2 border border-teal-300 rounded-full text-sm font-medium text-teal-700 bg-white hover:bg-teal-700 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
