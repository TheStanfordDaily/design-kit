import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import monkey from "./monkey.png"


interface IconProps {
  x: string;
  y: string;
}

const Icon = ({ x, y }: IconProps) => (
  <FontAwesomeIcon
    icon={faMusic}
    style={{
      position: "absolute",
      left: x,
      bottom: y,
    }}
    color="skyblue"
  />
);

const ImageIcon = ({ x, y }: IconProps) => (
  // monkey image
  <img
  alt="monkey"
    src={monkey}
    style={{
      position: "absolute",
      left: x,
      bottom: y,
      width: "50px",
      height: "50px",
    }}
  />

);

interface IconState {
  id: string;
  x: string;
  y: number;
}

const Floating = () => {
  const [icons, setIcons] = useState<IconState[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIcon: IconState = {
        id: Math.random().toString(36).substr(2, 9),
        x: `${Math.random() * 100}vw`,
        y: 0,
      };
      setIcons((prevIcons) => [...prevIcons, newIcon]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => ({ ...icon, y: icon.y + 1 }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center" style={{ background: "#FFFFE0" }}>
      <h1 className="text-6xl font-bold text-black">What does it mean to be an arts major at Stanford?</h1>
      <h3 className="text-3xl font-semibold text-black mt-4">By Sebastian Hochman</h3>
      <div className="w-1/3 mt-12 flex flex-row">
        <p className="text-black">Donec quis finibus augue. Quisque at gravida leo, eget congue dui. Vestibulum ac nisl pellentesque, varius diam a, vestibulum turpis. Nunc varius augue ac risus porta finibus. Maecenas ultricies imperdiet magna ac mattis. In faucibus bibendum magna, sit amet mattis odio sollicitudin quis. Duis nec velit in leo maximus pellentesque.</p>
      </div>
      {/* button to scroll to next section will go here, downward chevron */}
  
      {icons.map((icon) => (
        <ImageIcon key={icon.id} x={icon.x} y={`${icon.y}vh`} />
      ))}
    </div>
  );
};

export default Floating;
