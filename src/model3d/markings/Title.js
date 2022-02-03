import React from 'react';
import { Typography } from '@mui/material';

export default function Title({ str }) {
  return (
    <Typography
      align="left"
      style={{
        width: 100,
        marginLeft: 10,
        borderRadius: 3,
        color: '#444',
      }}
    >
      {str}
    </Typography>
  );
}
