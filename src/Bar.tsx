import React, { useRef } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { Article, Polaroid, Pullquote, Title } from "./components"
import Streamgraph from "./components/Streamgraph";

const dummy = [
    {
      name: "Major A",
      values: [
        { year: 0, value: 50 },
        { year: 1, value: 70 },
        { year: 2, value: 80 },
        { year: 3, value: 120 },
        { year: 4, value: 140 },
        { year: 5, value: 180 },
        { year: 6, value: 190 },
        { year: 7, value: 220 },
        { year: 8, value: 240 },
        { year: 9, value: 260 },
      ],
    },
    {
      name: "Major B",
      values: [
        { year: 0, value: 90 },
        { year: 1, value: 100 },
        { year: 2, value: 110 },
        { year: 3, value: 140 },
        { year: 4, value: 180 },
        { year: 5, value: 230 },
        { year: 6, value: 240 },
        { year: 7, value: 250 },
        { year: 8, value: 260 },
        { year: 9, value: 270 },
      ],
    },
    {
      name: "Major C",
      values: [
        { year: 0, value: 30 },
        { year: 1, value: 60 },
        { year: 2, value: 90 },
        { year: 3, value: 100 },
        { year: 4, value: 110 },
        { year: 5, value: 120 },
        { year: 6, value: 130 },
        { year: 7, value: 150 },
        { year: 8, value: 170 },
        { year: 9, value: 190 },
      ],
    },
  ];

export default function Bar() {
  const handleScroll = () => {
    // Add logic to update the streamgraph data based on scroll position.
  };

  return (
    <div className="App w-full h-screen overflow-y-scroll" onScroll={handleScroll}>
      <section className="h-screen flex justify-center items-center bg-gray-100">
        <Streamgraph width={400} height={800} />
      </section>
      {/* Add more sections with annotations for different time periods */}
      <section className="h-screen flex flex-col justify-center items-center bg-gray-200">
        <h2 className="text-3xl font-bold mb-4">Year 1</h2>
        <p className="text-lg">
          Explanation for the rise or drop in popularity of majors in Year 1.
        </p>
      </section>
      <section className="h-screen flex flex-col justify-center items-center bg-gray-300">
        <h2 className="text-3xl font-bold mb-4">Year 2</h2>
        <p className="text-lg">
          Explanation for the rise or drop in popularity of majors in Year 2.
        </p>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};