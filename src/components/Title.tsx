import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      addBalloon();
    }, 1000);
    
    return () => clearInterval(interval);
  }, [balloons]);

  return (
    <div>
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


const Title = ({ headline }: { headline: string }) => (
  <div className="h-screen bg-custom-green flex justify-center items-center">
    <BalloonAnimation />
    <h1 className="text-white text-6xl">{headline}</h1>
  </div>
);

export default Title;
