import React from 'react';

export default function PaintPot({ color, setColorFunction }) {
  return (
    <div
      onClick={() => setColorFunction(color)}
      style={{
        minHeight: 30,
        maxHeight: 30,
        minWidth: 30,
        maxWidth: 30,
        backgroundColor: color.color,
        borderRadius: '50%',
        margin: 4,
        boxShadow: '2px 2px 3px rgba(0,0,0,0.2)',
        cursor: 'pointer',
      }}
    ></div>
  );
}
