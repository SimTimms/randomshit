import React from 'react';
import { Typography } from '@material-ui/core';

export default function WidgetTitle({ str }) {
  return (
    <Typography style={{ color: '#dcf1fa' }} align="left">
      {str}
    </Typography>
  );
}
