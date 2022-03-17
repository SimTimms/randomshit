import React from 'react';
import { useStyles } from './styles';
import { Icon } from '@mui/material';

export default function CircleButton({
  title,
  onClickEvent,
  icon,
  bg,
  border,
  color,
}) {
  const classes = useStyles();

  return (
    <div
      className={classes.circleButton}
      onClick={() => onClickEvent()}
      title={title}
      style={{
        background: bg ? bg : '',
        border: border ? border : '',
        color: color ? color : '',
        backgroundSize: 'contain',
      }}
    >
      {!icon ? title : <Icon>{icon}</Icon>}
    </div>
  );
}
