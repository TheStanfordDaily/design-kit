import React from 'react';

export default function Article({ date, author, children }) {
  return (
    <div className="max-w-screen-md mx-auto my-12">
      <div className="text-left text-base">
        <span className="font-bold">{author}</span>
        <span className="mr-4"> on {date}</span>
      </div>
      {children}
    </div>
  )
}
