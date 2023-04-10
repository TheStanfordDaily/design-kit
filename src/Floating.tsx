import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

interface IconProps {
  x: string;
  y: string;
}

const Icon = ({ x, y }: IconProps) => (
  <FontAwesomeIcon
    icon={faBolt}
    style={{
      position: 'absolute',
      left: x,
      bottom: y,
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
    <div style={{ position: 'relative', height: '100vh', background: '#FFFFE0' }}>
      {icons.map((icon) => (
        <Icon key={icon.id} x={icon.x} y={`${icon.y}vh`} />
      ))}
    </div>
  );
};

export default Floating;
