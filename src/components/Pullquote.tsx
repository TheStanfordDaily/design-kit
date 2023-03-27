import React, { useState, useEffect } from 'react';
import '../pullquote.css';

interface PullquoteProps {
  text: string;
}

export default function Pullquote({ text }: PullquoteProps) {
  const [visibleText, setVisibleText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < text.length) {
        setVisibleText(visibleText + text[textIndex]);
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [visibleText, text]);

  return (
    <blockquote className="text-4xl font-bold text-center my-8 pullquote">{visibleText}</blockquote>
  );
};
