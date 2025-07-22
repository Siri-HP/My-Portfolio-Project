import React from "react";
import { motion } from "framer-motion";
import portimg from "../assets/images/portImg.png";
import Courierimg from "../assets/images/CourierImg.jpeg";
import toDoimg from "../assets/images/toDoImg.jpeg";
const projects = [
  {
    title: "Portfolio Website",
    category: "React + TailwindCSS + ShadCN",
    description:
      "Designed and developed a fully responsive personal portfolio to showcase my skills, academic background, and project experience. Integrated smooth navigation, animated components, and visually appealing UI using ShadCN components and TailwindCSS. This portfolio serves as my digital resume and includes links to my GitHub, resume, and featured events I've conducted or participated in.",
    img: portimg,
    link: "https://my-portfolio-project-siri-hps-projects.vercel.app/",
  },
  {
    title: "Courier Management System",
    category: "Python + JavaScript",
    description:
      "Built a desktop-based Courier Management System that allows courier companies to manage shipments efficiently. The application includes modules for booking, tracking, updating delivery status, and managing customer information. Developed the backend logic using Python (Tkinter + SQLite) and incorporated JavaScript for input validation in form-based UI screens.",
    img: Courierimg,
    link: "#",
  },
  {
    title: "To-Do List",
    category: "JavaScript + React + Node.js",
    description:
      "Developed a feature-rich To-Do List web app using React for frontend and Node.js with Express for backend. Users can create tasks with due dates, categorize them, and mark them as completed. Implemented automatic timeout for expired tasks, live validation, and persistent storage using local server.",
    img: toDoimg,
    link: "https://vercel.com/siri-hps-projects/todo-app/9Qv5YCpEEd1RnVDBUun3Zy8WztFE",
  },
  {
    title: "Authentication System",
    category: "React + Node.js + JWT",
    description:
      "Implemented a secure authentication system that supports user registration, login, password hashing, token-based session management, and protected routes. Built using React on the frontend with form validation and contextual error handling. The backend uses Node.js and Express to handle user data and JWT-based authentication.",
    img: "https://www.vuepilot.com/wp-content/uploads/2021/01/login.jpg",
    link: "#",
  },
];

export default function Projects1() {
  return (
    <section className="pt-16 px-6 md:px-20 bg-gradient-to-r from-[#e0f7fa] via-[#f1f8e9] to-[#e8eaf6] mt-10">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="text-sm font-semibold text-gray-500 uppercase">
          Portfolio
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          My Latest Projects
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Here are some of the projects I've worked on recently using various
          tech stacks.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{project.category}</p>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-blue-600 font-medium hover:underline text-sm"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.footer
        className="bg-[#012D2D] text-white py-10 mt-10"
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
