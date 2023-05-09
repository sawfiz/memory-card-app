import React from 'react';
import { IMAGES } from '../loadImages';

export default function Card({ order, handleClick }) {

  // const bgColor =`#${colors[order].toString(16).padStart(6,'0')}` 
  const bgImage = `url(${IMAGES[order]})`

  return (
    <div
      className="card"
      style={{
        // backgroundColor: bgColor,
        backgroundImage: bgImage,
        backgroundSize: 'cover',
      }}
      data-index={order}
      onClick={handleClick}
    >
    </div>
  );
}
