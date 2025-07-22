import React from "react";
import { motion } from "framer-motion";
// import ProfileImage from "../assets/hero-image.png";

export default function Skills() {
  const skills = ["HTML", "CSS", "JS", "React", "Node.js", "Tailwindcss"];

  return (
    <section className="w-full pt-16 bg-gradient-to-b from-[#e6fbf9] to-[#f7fdfd]  px-6 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-teal-600 font-semibold mb-2">My Skill</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            I Am Expert In
          </h2>
          <p className="text-gray-700 mb-8 max-w-md">
            I've built and contributed to multiple web applications using modern
            frontend technologies. I specialize in creating responsive user
            interfaces, with great animations and styles. I enjoy turning ideas
            into functional, visually appealing projects.
          </p>

          <div className="flex flex-wrap gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-20 h-20 rounded-full bg-gradient-to-b from-teal-700 to-teal-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg hover:scale-110 transition-transform duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* Other Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Other Skills
            </h2>

            <h2 className="font-bold mb-4">Leadership Skills:</h2>
            <p className="text-gray-700 mb-8">
              • Successfully conducted technical events and guest talks
              including:
              <br />
              • TALK ON SOFTWARE DEVELOPMENT WITH JS – hosted Sriram G (SDE-II
              at HighLevel), organized under SOET Dept. of IT
              <br />
              • Contributed to student-led initiatives promoting innovation in
              web development and open-source technologies.
              <br />
              • Played an active role in coordinating and communicating with
              speakers, faculty, and attendees.
              <br />• Helped mentor peers during hands-on coding sessions and
              project showcases.
            </p>

            <h2 className="font-bold mb-4 mt-10">Technical Practices:</h2>
            <p className="text-gray-700 mb-8">
              • Built full-stack web apps using React, Node.js, TailwindCSS, and
              Vite
              <br />
              • Integrated REST APIs and handled asynchronous logic in frontend
              components
              <br />
              • Implemented reusable components and clean UI using Figma
              references
              <br />• Applied state management (Hooks/Context API) and
              responsive design patterns
            </p>

            <h2 className="font-bold mb-4 mt-10">Collaboration & Tools:</h2>
            <p className="text-gray-700 mb-8">
              • Proficient with Git & GitHub for version control
              <br />
              • Comfortable using VS Code, Postman, and browser dev tools for
              testing and debugging
              <br />
              • Deployed frontend on Vercel/Netlify and backend on Render or
              Heroku
              <br />
              • Experience using Canva and Figma for UI prototyping and design
              support
              <br />• Contributed effectively in group-based development
              environments and hackathons
            </p>

            <h2 className="font-bold mb-4 mt-10">Soft Skills:</h2>
            <p className="text-gray-700 mb-8">
              • Strong communication and presentation abilities
              <br />
              • Quick learner with a proactive attitude toward new tools and
              frameworks
              <br />
              • Collaborative team player with leadership experience
              <br />
              • Critical thinker with strong problem-solving skills
              <br />• Focused on clean code practices and detail-oriented
              development
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="flex justify-center items-center relative animate-pulse-slow"
        >
          <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-teal-100 to-white p-4 shadow-xl flex items-center justify-center animate-floating">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Uyf1jV1bv39whpvUrRrJD2Bw84g6Mb1KQA&s"
              alt="Profile"
              className="w-[250px] h-[250px] object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
      <motion.footer
        className="bg-[#012D2D] text-white py-10 my-0 mx-0 "
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
