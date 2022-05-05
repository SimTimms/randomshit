import React from 'react';
export default function ColorButton({ color, setActiveColor }) {
  return (
    <button
      style={{
        background: color,
        maxWidth: '20px',
        minWidth: '20px',
        maxHeight: '20px',
        minHeight: '20px',
        border: 'none',
        margin: 5,
        boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
      }}
      onClick={() => setActiveColor({ name: color, color: color })}
    ></button>
  );
}
