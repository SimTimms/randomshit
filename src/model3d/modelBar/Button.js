import React from 'react';
import { Typography } from '@material-ui/core';

export default function ModelButton({ title, strValue, setModel, img }) {
  return (
    <div
      style={{
        maxHeight: 80,
        minHeight: 80,
        maxWidth: 80,
        minWidth: 80,
        background: '#222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
      }}
      onClick={() => setModel(strValue)}
    ></div>
  );
}
