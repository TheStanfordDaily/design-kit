import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Article, Polaroid, Pullquote, Title } from "./components";


export default function Foo() {
  return (
    <ParallaxProvider>
      <Title />
      <Article date="March 26, 2023" author="Scoop Scooperstein">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum est in consequat consequat. Aenean maximus, ipsum a
          ullamcorper sollicitudin, massa mauris imperdiet erat, vel
          ullamcorper odio erat in lectus.
        </p>
        <Pullquote text="This is a pullquote" />
        <p>
          Vivamus porttitor justo eget tortor facilisis pharetra. Curabitur
          vitae justo vitae nisl consequat consequat. Ut at ex nec erat dapibus
          commodo.
        </p>
        <Polaroid
          src="https://source.unsplash.com/random/300x240"
          alt="Random Image"
          caption="A random image"
        />
        <p>
          Praesent sed tellus eu odio imperdiet consectetur. Aliquam erat
          volutpat. Donec in lectus justo.
        </p>
      </Article>
    </ParallaxProvider>
  );
};
