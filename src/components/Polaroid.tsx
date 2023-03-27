import React from 'react';

interface PolaroidProps {
  src: string;
  alt: string;
  caption: string;
}

export default function Polaroid({ src, alt, caption }: PolaroidProps) {
    return (
    <div className="mx-auto my-8 w-72 h-96 bg-white shadow-md border-4 border-white">
        <img className="w-full h-4/5 object-cover" src={src} alt={alt} />
        <div className="text-center text-lg p-4">{caption}</div>
    </div>
    );
}