import React from 'react';
import { Icon, Typography } from '@mui/material';
import { useStyles } from './styles';

export default function IconTitle({ title, icon }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Icon
        style={{
          marginRight: 5,
        }}
      >
        {icon}
      </Icon>
      <Typography variant="h6" className={classes.text}>
        {title}
      </Typography>
    </div>
  );
}
