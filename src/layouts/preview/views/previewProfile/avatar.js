import React from 'react';
import { useStyles } from './styles';
import logo from '../../assets/branding/mp3d.png';
export default function Avatar({ img }) {
  const classes = useStyles();

  return (
    <div
      className={classes.avatar}
      style={{
        backgroundImage: img ? `url(${img}` : `url(${logo})`,
      }}
    ></div>
  );
}
