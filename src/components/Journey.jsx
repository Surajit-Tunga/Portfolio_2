import React, { useEffect } from "react";
import { journeyData } from "../constants/index";
import AOS from "aos";

import "aos/dist/aos.css";

const Journey = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full pt-16 px-4 sm:px-10 text-white relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-white">
        <span className="bg-blue-600 text-white px-1.5 py-1 rounded-lg inline-block">
          Journey
        </span>{" "}
        So Far
      </h2>

      <div className="space-y-20">
        {journeyData.map((event, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col lg:flex-row lg:items-stretch lg:justify-center lg:gap-6"
          >
            {/* Left Column */}
            <div className="lg:w-[320px] flex flex-col items-start pl-2 lg:pl-0 h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-700 border-4 border-black shadow-md mt-1"></div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600">
                  {event.eventName}
                </h3>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 pl-8">
                {event.date}
              </p>
            </div>

            {/* Right Column (Card) */}
            <div className="lg:w-[600px] h-full bg-black/20 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:bg-black/30 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-1">
                  <span className="font-medium text-blue-300">Organized by:</span> {event.organizedBy}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-1">
                  <span className="font-medium text-green-400">Position:</span> {event.position}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-1">
                  <span className="font-medium text-yellow-300">Role:</span> {event.role}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 mt-2">{event.description}</p>
              </div>

              {/* Image Gallery */}
              {event.images.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">Here are some glimpses →</p>
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
