import React from "react";
import { motion } from "framer-motion";

export default function ContactMe1() {
  return (
    <section className="bg-[#f7fdfd] py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form with animation */}
        <motion.div
          className="bg-white p-8 rounded-md shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-teal-600 font-semibold mb-2">Contact</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Name :
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email :
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Write Message :
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-900 hover:bg-teal-800 text-white font-medium py-2 rounded-full transition-colors"
            >
              CONTACT US
            </button>
          </form>
        </motion.div>

        {/* Google Map with animation */}
        <motion.div
          className="rounded-md overflow-hidden shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="100%"
            className="min-h-[400px] w-full border-none"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      {/* Footer with animation */}
      <motion.footer
        className="bg-[#012D2D] text-white py-10 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
