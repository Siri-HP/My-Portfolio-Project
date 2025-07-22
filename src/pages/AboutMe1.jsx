import React from "react";
import { motion } from "framer-motion";

export default function AboutMe1() {
  return (
    <section className="w-full bg-white mt-10 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-teal-100 to-white p-4 shadow-xl flex items-center justify-center">
            <img
              src="https://cdn.potomac.edu/wp-content/uploads/2024/07/web-developer-skills-1024x682.png"
              alt="Profile"
              className="w-[250px] h-[250px] object-cover rounded-full"
            />
            {/* Info Card */}
            <div className="absolute bottom-0 right-0 bg-white shadow-lg rounded-md px-4 py-2 text-center">
              <p className="text-sm font-medium text-gray-800">Web Designer</p>
              <p className="text-xs text-teal-600">4+ Project Complete</p>
            </div>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm text-teal-600 font-semibold uppercase mb-2">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            I Am A Passionate Web Developer
          </h2>

          <p className="text-gray-700 mb-10">
            I'm a committed and curious B.Tech Information Technology student
            who enjoys translating concepts into powerful, scalable web
            applications. Over the past few years, I've actively contributed to
            tech events, delivered talks, and collaborated on both academic and
            open-source projects. I specialize in building dynamic and visually
            engaging interfaces with React, TailwindCSS, and Node.js.
          </p>

          <p className="text-gray-700 mb-10">
            I’ve built complete full-stack solutions — from portfolio websites
            to management systems — with clean UI/UX using tools like ShadCN,
            Vite, and Figma. I’m equally comfortable designing from scratch or
            improving existing UIs, always with performance and responsiveness
            in mind.
          </p>

          <p className="text-gray-700 mb-10">
            <strong className="text-teal-600">Soft Skills:</strong> I bring
            strong communication and leadership to the table — whether it's
            coordinating tech events, mentoring peers during hands-on workshops,
            or presenting on JavaScript development. I'm a proactive learner and
            team collaborator who enjoys solving challenges through creativity
            and logic.
          </p>

          <p className="text-gray-700 mb-10">
            <strong className="text-teal-600">Collaboration & Tools:</strong>{" "}
            I’ve collaborated on cross-functional projects and used tools like
            GitHub, Figma, VS Code, and Postman. I believe in writing reusable,
            maintainable code and practicing agile development.
          </p>

          <p className="text-gray-700">
            <strong className="text-teal-600">My Goal:</strong> To grow as a
            full-stack developer who not only writes code, but builds
            experiences that are intuitive, inclusive, and impactful.
          </p>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <motion.div
        className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.div>

      {/* Hobbies Section */}
      <motion.div
        className="max-w-5xl mx-auto mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm text-gray-500 font-semibold">Hobbies</p>
        <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mt-1 mb-6">
          Things I Love To Do
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Batminton",
            "Cooking",
            "Music",
            "Drawing",
            "Graphic Design",
            "Reading Books",
            "Blogging",
            "Coding",
            "Gaming",
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
      </motion.div>

      {/* LANGUAGES I KNOW */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm text-gray-500 font-semibold">Languages</p>
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mt-1 mb-6">
          LANGUAGES I KNOW
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["English", "Kannada", "Hindi"].map((lang, idx) => (
            <span
              key={idx}
              className="px-5 py-2 border border-teal-300 rounded-full text-sm font-medium text-teal-700 bg-white hover:bg-teal-700 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {lang}
            </span>
          ))}
        </div>
      </motion.div>

      {/* INTERNSHIPS SECTION */}
      <motion.div
        className="text-center mt-12 px-6 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm text-gray-500 font-semibold">Internships</p>
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mt-1 mb-6">
          INTERNSHIPS I HAVE ENGAGED AT
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          I have completed several internships to broaden my technical knowledge
          and industry exposure.
          <br />
          <br />
          <strong>1. Caliper Business Solutiond Ltd.</strong> –{" "}
          <span className="italic text-gray-500">(July 2025 – Ongoing)</span>
          <br />
          Worked as a{" "}
          <span className="text-teal-700 font-medium">Frontend Developer</span>,
          focusing on building and enhancing user interfaces using React and
          Tailwind CSS. I contributed to responsive layouts, reusable
          components, and performance optimization.
          <br />
          <br />
          <strong>2. Vault of Codes</strong> –{" "}
          <span className="italic text-gray-500">(Completed in June 2025)</span>
          <br />
          Interned as a{" "}
          <span className="text-teal-700 font-medium">Python Developer</span>,
          where I developed backend scripts, worked on API integration, and
          helped automate data handling processes.
          <br />
          <br />
          I’ve also completed a course using{" "}
          <span className="font-semibold text-purple-700">Udemy</span>, where I
          gained valuable experience in full stack development, frontend
          frameworks, and real-time web projects. These opportunities sharpened
          my coding practices and strengthened my collaboration and
          problem-solving skills.
        </p>
      </motion.div>
      <motion.footer
        className="bg-[#012D2D] text-white py-10  mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About / Logo */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Siri HP</h2>
            <p className="text-sm text-gray-300">
              I'm a passionate full-stack developer with a strong interest in
              frontend design, backend logic, and continuous learning.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>📞 +91 98765 43210</li>
              <li>📧 sirihp.dev@gmail.com</li>
              <li>📍 Bangalore, India</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Newsletter</h2>
            <form className="flex items-center bg-white rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full p-2 text-black outline-none"
              />
              <button
                type="submit"
                className="bg-[#014d4d] hover:bg-teal-600 px-4 py-2 text-white font-bold transition"
              >
                ➤
              </button>
            </form>

            <div className="flex gap-4 mt-4 text-white text-lg">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Siri HP. All rights reserved.
        </div>
      </motion.footer>
    </section>
  );
}
