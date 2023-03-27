import React, { useState, useEffect } from 'react';

interface PullquoteProps {
  text: string;
}

export default function Pullquote({ text }: PullquoteProps) {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setVisibleText(visibleText + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [visibleText, text]);

  return (
    <div className="text-4xl font-bold text-center my-8">{visibleText}</div>
  );
};
