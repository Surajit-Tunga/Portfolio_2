import React from "react";
import { techStack } from "../constants/index";

const Tech = () => {
  return (
    <div className="w-full py-12 bg-black text-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-white">
        <span className="bg-blue-600 text-white px-3 py-2 rounded-lg inline-block">
          Technologies
        </span>{" "}
        Explored by Me
      </h2>

      <div className="flex flex-wrap justify-center gap-5 sm:gap-6 px-4 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="w-20 h-20 flex flex-col items-center justify-center bg-zinc-900 rounded-lg shadow-[3px_3px_6px_rgba(96,165,250,0.2)] hover:shadow-[3px_3px_10px_rgba(96,165,250,0.4)] transition-transform duration-300 hover:scale-105"
            title={tech.name}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-8 h-8 object-contain mb-1"
            />
            <p className="text-xs text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
