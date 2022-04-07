import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';

export default function Section({ title, children }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Typography variant="h5">{title}</Typography>
      </div>
      {children}
    </div>
  );
}
