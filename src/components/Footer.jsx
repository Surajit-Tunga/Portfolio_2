import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex justify-center mb-2 mt-20 px-4">
      <div className="relative w-full max-w-xl lg:max-w-4xl rounded-xl border border-blue-500/30 bg-white/5 backdrop-blur-sm shadow-[0_0_40px_rgba(59,130,246,0.2)] overflow-hidden py-6 px-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-30 pointer-events-none" />

        {/* Social Icons */}
        <div className="flex gap-5 text-xl lg:text-2xl justify-center lg:justify-start">
          {[
            {
              href: "https://github.com/surajit-tunga",
              icon: <FaGithub />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/surajittunga",
              icon: <FaLinkedin />,
              label: "LinkedIn",
            },
            {
              href: "mailto:surajittunga2005@gmail.com",
              icon: <FaEnvelope />,
              label: "Email",
            },
          ].map(({ href, icon, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group bg-zinc-800/80 p-3 rounded-full transition-all duration-300 shadow hover:shadow-blue-500/40 hover:text-blue-400 hover:scale-110 hover:-rotate-2"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-sm text-gray-300 leading-relaxed">
          <p>
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-blue-400 font-semibold">Surajit</span>
          </p>
          <p className="text-xs text-gray-500 mt-1 lg:mt-0">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
