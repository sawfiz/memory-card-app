import React from 'react';

export default function Card({ order, colors, handleClick }) {

  const bgColor =`#${colors[order].toString(16).padStart(6,'0')}` 

  return (
    <div
      className="card"
      style={{
        backgroundColor: bgColor,
      }}
      data-index={order}
      onClick={handleClick}
    >
      {order}
      <p></p>
      {bgColor}
    </div>
  );
}
