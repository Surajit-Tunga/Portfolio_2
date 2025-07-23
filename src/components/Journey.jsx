import React from "react";
import { journeyData } from "../constants/index";

const Journey = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">My Hackathon Journey</h2>
      <div className="space-y-16">
        {journeyData.map((event, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-2xl font-semibold">{event.eventName}</h3>
            <p className="text-sm text-gray-600">{event.date}</p>
            <p className="text-gray-700">Organized by: <span className="font-medium">{event.organizedBy}</span></p>
            <p className="text-gray-700">Position: <span className="font-medium text-green-600">{event.position}</span></p>
            <p className="text-gray-700">My Role: {event.role}</p>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pt-4">
              {event.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`event-${index}-img-${i}`}
                  className="h-40 sm:h-48 w-auto rounded-xl shadow-md object-cover flex-shrink-0"
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
