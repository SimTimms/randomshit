import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Typography } from '@mui/material';

export default function BgImg({ previewImage, onClick, locked, history }) {
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
        <Typography
          onClick={() => history.push('/')}
          className={classes.register}
        >
          Register to Unlock
        </Typography>
      )}
    </div>
  );
}
