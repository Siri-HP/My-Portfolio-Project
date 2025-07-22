import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    category: "Web Development React+Shadcn+Tailwindcss",
    img: "portImg.png",
    link: "https://my-portfolio-project-siri-hps-projects.vercel.app/",
  },
  {
    title: "Courier Management System",
    category: "Python + JavaScript",
    img: "CourierImg.jpeg",
    link: "#",
  },
  {
    title: "To-Do List",
    category: "Javascript+React+Node.js",
    img: "toDoImg.jpeg",
    link: "https://todo-app-siri-hps-projects.vercel.app/",
  },
  {
    title: "Authentication System",
    category: "JavaScript+Reat+Node.js",
    img: "https://www.vuepilot.com/wp-content/uploads/2021/01/login.jpg",
    link: "#",
  },
];

export default function Projects({ id }) {
  return (
    <section id={id} className="bg-[#f8fbfb] py-16 px-6 md:px-20">
      <div className="text-center mb-12">
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
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
              <p className="text-sm text-gray-500 mb-4">{project.category}</p>
              <a
                href={project.link}
                className="text-primary font-semibold hover:underline text-sm"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
