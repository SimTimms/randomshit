import React from 'react';
import { Typography } from '@mui/material';

export default function WidgetTitle({ str }) {
  return (
    <Typography style={{ color: '#dcf1fa' }} align="left">
      {str}
    </Typography>
  );
}
