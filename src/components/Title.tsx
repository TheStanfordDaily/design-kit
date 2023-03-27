import React, { useState } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Balloon = () => {
  return <div className="balloon"></div>;
};

interface BalloonProps {
  id: number;
}
const BalloonAnimation = () => {
  const [balloons, setBalloons] = useState<BalloonProps[]>([]);

  const addBalloon = () => {
    setBalloons([...balloons, { id: Date.now() }]);
  };

  return (
    <div>
      <button onClick={addBalloon}>Add Balloon</button>
      <div style={{ position: 'relative', height: '100vh' }}>
        <TransitionGroup>
          {balloons.map((balloon) => (
            <CSSTransition key={balloon.id} timeout={60000} classNames="balloon">
              <Balloon />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};


const Title = () => (
  <div className="h-screen bg-custom-green flex justify-center items-center">
    <BalloonAnimation />
    <h1 className="text-white text-6xl">The Magazine-Style Article</h1>
  </div>
);

export default Title;
