import React from "react";
import { journeyData } from "../constants/index";

const Journey = () => {
  return (
    <section className="w-full pt-16 px-4 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-white">
        <span className="bg-blue-600 text-white px-2 py-1 rounded-lg inline-block">
          Journey
        </span>{" "}
        So Far
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {journeyData.map((event, index) => (
          <div
            key={index}
            className="min-w-[280px] sm:min-w-[340px] max-w-[340px] bg-gradient-to-br from-zinc-900 to-black rounded-xl p-5 border border-blue-500/30 shadow-md hover:shadow-blue-500/20 transition-all duration-300 flex-shrink-0"
          >
            {/* Title and Info */}
            <h3 className="text-lg sm:text-xl font-semibold text-blue-500 mb-1">
              {event.eventName}
            </h3>
            <p className="text-xs text-gray-400 mb-1">{event.date}</p>
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

            {/* Image Scroll Section */}
            {event.images.length > 0 && (
              <div className="mt-4 h-28 overflow-x-auto flex gap-3 scrollbar-hide">
                {event.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`event-${index}-img-${i}`}
                    className="h-full w-auto rounded-lg object-cover border border-blue-700/30 flex-shrink-0 transition-transform hover:scale-105 duration-200"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
