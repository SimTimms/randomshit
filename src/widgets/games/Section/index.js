import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import clsx from 'clsx';

export default function Section({ title, children, locked }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Typography variant="h5">{title}</Typography>
      </div>
      {!locked ? (
        children
      ) : (
        <div className={classes.locked}>
          <Typography variant="body2">Locked</Typography>
        </div>
      )}
    </div>
  );
}
