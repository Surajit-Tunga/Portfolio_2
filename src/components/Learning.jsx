import React, { useRef, useEffect, useState } from "react";
import { learningPath } from "../constants";
import "../style/scroll.css";

const Learning = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  // Scroll to the first ongoing item on mount
  useEffect(() => {
    const indexToScroll = learningPath.findIndex(
      (item) => item.status === "Ongoing"
    );
    if (indexToScroll !== -1 && cardRefs.current[indexToScroll]) {
      const container = containerRef.current;
      const card = cardRefs.current[indexToScroll];

      const containerCenter = container.offsetWidth / 2;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;

      container.scrollTo({
        left: cardCenter - containerCenter,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle active card on scroll
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const children = Array.from(container.children);
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, index) => {
        const card = child.querySelector(".card");
        const childCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black pt-16 px-4 text-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-white">
        What Fuels{" "}
        <span className="bg-blue-600 text-white px-1.5 py-1 rounded-lg inline-block">
          My Learning
        </span>
      </h2>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar py-8 px-8 scroll-smooth"
      >
        {learningPath.map((course, index) => (
          <a
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`card group min-w-[240px] max-w-[20px] w-full 
              bg-zinc-900 rounded-lg overflow-hidden
              shadow-[3px_3px_6px_rgba(96,165,250,0.2)] hover:shadow-[3px_3px_10px_rgba(96,165,250,0.4)] transition-transform duration-300 hover:scale-105
              flex flex-col h-64`}
          >
            <div className="h-1/2 w-full">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="p-3 h-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold leading-snug">
                  {course.title}
                </h3>
                <p className="text-sm mt-1 font-medium text-blue-600">
                  {course.channel}
                </p>
              </div>
              <span
                className={`text-xs font-semibold mt-2 w-fit px-2 py-1 rounded-full ${
                  course.status === "Completed"
                    ? "bg-green-600 text-white"
                    : course.status === "Ongoing"
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-600 text-white"
                }`}
              >
                {course.status}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Learning;
