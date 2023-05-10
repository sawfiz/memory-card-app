import React from 'react';
import '../styles/Modal.css';

export default function Modal({ gameOver, restartGame }) {
  const show = gameOver.status ? 'block' : 'none';
  return (
    <div className="overlay" style={{ display: show }}>
      <div className="modal">
        <div>{gameOver.message}</div>
        <button onClick={restartGame}>Restart</button>
      </div>
    </div>
  );
}
