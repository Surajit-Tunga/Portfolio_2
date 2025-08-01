import React from "react";
import { techStack } from "../constants/index";

const Tech = () => {
  return (
    <div className="w-full pt-12 bg-black text-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-white">
        <span className="bg-blue-600 text-white px-1.5 py-1 rounded-lg inline-block">
          Technologies
        </span>{" "}
        Explored by Me
      </h2>

      {Object.entries(techStack).map(([categoryName, technologies], idx) => (
        <div key={idx} className="mb-12 px-4 max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 capitalize text-blue-600 text-center">
            {categoryName.replace(/([A-Z])/g, " $1")}
          </h3>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-24 h-24 flex flex-col items-center justify-center border border-blue-800 rounded-xl backdrop-blur-sm bg-transparent text-white transition-all duration-300 hover:scale-105 shadow-[0_0_8px_0_rgba(30,58,138,0.6)] hover:shadow-[0_0_15px_0_rgba(59,130,246,0.8)]"
                title={tech.name}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-10 h-10 object-contain mb-2"
                />
                <p className="text-xs font-medium text-center break-words w-20 leading-tight">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tech;
