import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#0e0e10] via-[#1a1a1d] to-[#0e0e10] relative py-10 px-6 mt-20 border-t border-zinc-800 shadow-[0_-2px_40px_0_rgba(59,130,246,0.12)] overflow-hidden">
      {/* Optional glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/surajit-tunga"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-800 p-3 rounded-full shadow hover:shadow-blue-500/30 transition-all duration-300 hover:text-blue-400 hover:scale-110 hover:-rotate-2"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/surajittunga"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-800 p-3 rounded-full shadow hover:shadow-blue-500/30 transition-all duration-300 hover:text-blue-400 hover:scale-110 hover:-rotate-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:surajittunga2005@gmail.com"
            className="group bg-zinc-800 p-3 rounded-full shadow hover:shadow-blue-500/30 transition-all duration-300 hover:text-blue-400 hover:scale-110 hover:-rotate-2"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center lg:text-right text-sm text-gray-400 leading-relaxed">
          <p>
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-blue-500 font-semibold">Surajit Tunga</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
