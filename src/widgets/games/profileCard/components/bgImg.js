import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Typography } from '@mui/material';

export default function BgImg({
  previewImage,
  onClick,
  locked,
  history,
  approved,
}) {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage:
          previewImage !== '' && previewImage ? `url(${previewImage})` : '#eee',
      }}
      className={clsx({
        [classes.background]: true,
        [classes.noBG]: !previewImage,
        [classes.locked]: locked,
      })}
      onClick={() => (onClick ? onClick() : null)}
    >
      {locked && (
        <Typography className={classes.register}>Register to Unlock</Typography>
      )}
      {!approved && (
        <Typography className={classes.register}>Your Model</Typography>
      )}
    </div>
  );
}
