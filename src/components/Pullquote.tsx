import React, { useState, useEffect, useRef } from 'react';
import '../pullquote.css';

interface PullquoteProps {
  text: string;
}

export default function Pullquote({ text }: PullquoteProps) {
  const [visibleText, setVisibleText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const blockquoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (blockquoteRef.current) {
      observer.observe(blockquoteRef.current);
    }

    return () => {
      if (blockquoteRef.current) {
        observer.unobserve(blockquoteRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (textIndex < text.length) {
          setVisibleText(visibleText + text[textIndex]);
          setTextIndex(textIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [visibleText, text, isVisible]);

  return (
    <blockquote ref={blockquoteRef} className="text-4xl font-bold text-center my-8 pullquote">
      {visibleText}
    </blockquote>
  );
}
