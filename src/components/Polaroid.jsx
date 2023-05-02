import React from 'react';

export default function Polaroid({ src, alt, caption }) {
    return (
    <div className="mx-auto my-8 w-72 h-96 bg-white shadow-md border-4 border-white">
        <img className="w-full h-4/5 object-cover" src={src} alt={alt} />
        <div className="text-center text-lg p-4">{caption}</div>
    </div>
    );
}