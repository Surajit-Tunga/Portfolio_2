import React, { useEffect } from "react";
import { journeyData } from "../constants/index";
import AOS from "aos";
import "aos/dist/aos.css";

const Journey = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full py-20 px-4 sm:px-10 text-white relative">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20">
        <span className="bg-blue-600 text-white px-4 py-1.5 rounded-lg inline-block shadow-md">
          Journey
        </span>{" "}
        So Far
      </h2>

      <div className="space-y-16">
        {journeyData.map((event, index) => (
          <div
            key={index}
            className="pl-2 lg:pl-6"
            data-aos="fade-up"
          >
            {/* Dot + Title in one line */}
            <div className="flex items-center gap-3 mb-1">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-black shadow-md"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                {event.eventName}
              </h3>
            </div>

            {/* Date */}
            <p className="text-xs text-gray-400 mb-2 pl-8">{event.date}</p>

            {/* Card */}
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ml-6 hover:bg-black/30 hover:-translate-y-1">
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-medium text-blue-300">Organized by:</span> {event.organizedBy}
              </p>
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-medium text-green-400">Position:</span> {event.position}
              </p>
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-medium text-yellow-300">Role:</span> {event.role}
              </p>
              <p className="text-sm text-gray-200 mt-2">{event.description}</p>

              {/* Image Gallery */}
              {event.images.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs text-gray-500 mb-2">Scroll to explore →</p>
                  <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                    {event.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${event.eventName} - Image ${i + 1}`}
                        className="h-28 rounded-lg object-cover flex-shrink-0 hover:scale-105 transition-transform duration-200 shadow-md"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Journey;
