import React from 'react';
import DotGrid from './DotGrid';
import pp from '../assets/pp.jpg';

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
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}   
             <div className="w-72 h-72 rounded-[2rem] overflow-hidden border-4 border-blue-800 shadow-xl transition-shadow duration-500 hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.4)]">
                 <img 
                  src={pp}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
             </div>



          {/* Role & About Me */}
          <div className="text-center md:text-left max-w-xl space-y-5">
            <p className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              Hello, I'm Surajit
            </p>
            <p className="text-2xl font-semibold text-blue-200 drop-shadow-md">
              Full Stack Developer | Exploring ML & GenAI
            </p>
            <p className="text-lg text-white">
              Passionate about building innovative web applications and exploring the frontiers of machine learning and generative AI. </p>
            <a
              href="https://www.linkedin.com/in/surajittunga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-7 py-3 text-white font-semibold rounded-xl bg-blue-600 backdrop-blur-md bg-opacity-70 hover:bg-blue-700 hover:shadow-[0_0_20px_3px_rgba(59,130,246,0.6)] transition duration-300"
            >
              Let’s Connect →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
