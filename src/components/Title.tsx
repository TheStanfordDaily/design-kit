import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: #5a9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  color: white;
`;

const Heart  = ({ className }: { className?: string }) => (
  <div
    className={`absolute text-red-500 ${className}`}
    style={{ fontSize: '2rem' }}
  >
    &#10084;
  </div>
);


const Title = () => (
  <div className="h-screen bg-custom-green flex justify-center items-center">
    <Heart className="animate-floating duration-5000 delay-1000" />
    <Heart className="animate-floating duration-7000 delay-2000" />
    <Heart className="animate-floating duration-9000 delay-3000" />
    <Heart className="animate-floating duration-6000 delay-4000" />
    <Heart className="animate-floating duration-8000 delay-5000" />
    <h1 className="text-white text-6xl">The Magazine-Style Article</h1>
  </div>
);

export default Title;
