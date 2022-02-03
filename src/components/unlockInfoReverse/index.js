import React from 'react';
import { Icon, Typography } from '@mui/material';

import { useStyles } from './styles';

export default function UnlockInfoReverse({ str }) {
  const classes = useStyles();
  return (
    <div className={classes.more}>
      <Icon style={{ marginRight: 10 }}>lock</Icon>
      <Typography>{str}</Typography>
    </div>
  );
}
