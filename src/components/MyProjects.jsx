import React from "react";
import { projects } from "../constants/index";

const MyProjects = () => {
  return (
    <div className="bg-black pt-11 px-4 text-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        My{" "}
        <span className="bg-blue-600 text-white px-1.5 py-1 rounded-lg">
          Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl overflow-hidden
              shadow-[3px_3px_6px_rgba(96,165,250,0.2)]
              hover:shadow-[3px_3px_12px_rgba(96,165,250,0.4)]
              transition-transform duration-300 hover:scale-105
              p-5 flex flex-col justify-between"
          >
            {/* Project Title and Description */}
            <div>
              <h3 className="text-lg text-blue-600 font-bold mb-2">
                {project.name}
              </h3>

              <p className="text-sm text-gray-300 mb-4 leading-snug">
                {project.description}
              </p>
            </div>

            {/* Bottom Row: Explore Button + Tech Stack */}
            <div className="flex justify-between items-end mt-auto">
              {/* Styled Small Explore Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded-full border border-blue-500 text-blue-400
                  hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                🔗 Explore
              </a>

              {/* Tech Stack Icons */}
              <div className="flex gap-3">
                {project.techStack.map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt="tech"
                    className="w-5 h-5 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
