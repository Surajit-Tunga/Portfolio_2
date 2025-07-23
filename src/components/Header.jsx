import React from 'react';
import DotGrid from './DotGrid';
import pp from "../assets/pp.jpg"

const Header = () => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black text-white">
      
      {/* Dot Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={4}
          gap={20}
          baseColor="#4B5563"
          activeColor="#3B82F6"
          proximity={100}
          shockRadius={200}
          shockStrength={4}
          resistance={700}
          returnDuration={1.4}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-screen h-screen px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Profile Image */}
          <div className="w-64 h-64 rounded-[2rem] overflow-hidden border-4 border-blue-500 shadow-xl">
            <img 
              src={pp}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Role & About Me */}
          <div className="text-center md:text-left max-w-xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
              Full Stack Developer | Exploring GenAI & ML
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate developer building scalable web apps with modern tech. 
              Skilled in React, Node.js, and integrating GenAI into real-world tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
