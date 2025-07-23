import React from "react";
import { journeyData } from "../constants/index";

const Journey = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-white">
        <span className="bg-blue-600 text-white  px-1.5 py-1 rounded-lg inline-block">
          Journey
        </span>{" "}
        So Far
      </h2>
      <div className="space-y-12">
        {journeyData.map((event, index) => (
          <div
            key={index}
            className="bg-transparent rounded-2xl p-8 border border-blue-500/40 shadow-[0_0_12px_2px_rgba(59,130,246,0.18)]"
          >
            <h3 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-2">{event.eventName}</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-1">{event.date}</p>
            <p className="text-gray-300 mb-1">
              <span className="font-medium text-blue-300">Organized by:</span> {event.organizedBy}
            </p>
            <p className="text-gray-300 mb-1">
              <span className="font-medium text-green-400">Position:</span> {event.position}
            </p>
            <p className="text-gray-300 mb-3">
              <span className="font-medium text-yellow-300">My Role:</span> {event.role}
            </p>
            {/* Description added below */}
            <p className="text-gray-200 mb-4">{event.description}</p>
            <div className="flex gap-4 overflow-x-auto pt-2 scrollbar-hide">
  {event.images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`event-${index}-img-${i}`}
      className="h-36 sm:h-44 w-auto rounded-xl shadow-md object-cover flex-shrink-0 border-2 border-blue-700/30 transition-transform duration-300 hover:scale-105 hover:shadow-blue-400/40"
    />
  ))}
</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;