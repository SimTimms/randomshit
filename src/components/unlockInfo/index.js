import React from 'react';
import { Icon, Typography } from '@mui/material';

import { useStyles } from './styles';

export default function UnlockInfo({ str, c }) {
  const classes = useStyles();
  return (
    <div className={classes.more} style={{ color: c ? c : '' }}>
      <Icon style={{ marginRight: 10, fontSize: 12 }}>lock</Icon>
      <Typography>{str}</Typography>
      <Icon style={{ marginLeft: 10, fontSize: 12 }}>lock</Icon>
    </div>
  );
}
