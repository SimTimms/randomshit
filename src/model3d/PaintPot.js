import React from 'react';
import { useStyles } from './styles';

export default function PaintPot({ item, setColorFunction, setHoverColor }) {
  const classes = useStyles();
  if (!item) return null;
  return (
    <div
      onClick={() => setColorFunction(item)}
      onMouseOver={() => (setHoverColor ? setHoverColor(item) : null)}
      className={item.metal ? classes.metallic : classes.standard}
      style={{
        minHeight: 30,
        minWidth: 30,
        backgroundColor: item.color,
        borderRadius: '50%',
        margin: 2,
      }}
      title={item.name}
    ></div>
  );
}
