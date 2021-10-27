import React from 'react';
import { Typography } from '@material-ui/core';

export default function Title({ str }) {
  return (
    <Typography
      align="center"
      style={{
        width: 70,
        marginLeft: 10,
        borderRadius: 3,
        color: '#dcf1fa',
        fontFamily: 'roboto',
      }}
    >
      {str}
    </Typography>
  );
}
