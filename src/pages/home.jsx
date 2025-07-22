import React from "react";
import Skills from "./skills";
import Projects from "./projects";
import ContactMe from "./contactMe";
import AboutMe from "./aboutMe";
import { motion } from "framer-motion";

export default function Home({ id }) {
  return (
    <div>
      <section
        id={id}
        className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e6f0f5] to-white relative overflow-hidden px-6"
      >
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hey! I am <span className="text-teal-600">Web Developer</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              I am Siri HP, a B.Tech IT student with experience in Frontend
              Development using Javascript with React. I've worked on projects
              like task management System and Courier Management System and
              event apps, and I enjoy building clean and user friendly
              interfaces
            </p>
            <div className="flex gap-4">
              <a
                href="/about"
                className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition"
              >
                LEARN MORE
              </a>
              <a
                href="/contact"
                className="border border-teal-600 text-teal-600 px-6 py-3 rounded-md hover:bg-teal-100 transition"
              >
                CONTACT ME
              </a>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="rounded-full w-[320px] h-[320px] bg-teal-100 flex items-center justify-center">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Developer"
                  className="w-[280px] h-[280px] object-cover rounded-full shadow-lg "
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animations for each section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AboutMe />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ContactMe />
      </motion.div>

      {/* Footer with slide up animation */}
      <motion.footer
        className="bg-[#012D2D] text-white py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
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
    </div>
  );
}
