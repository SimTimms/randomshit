import React from 'react';
import { Typography } from '@mui/material';
import { REACT_APP_COMPANY_PUBLIC_NAME } from '../../envVars';
export const WELCOME = (
  <Typography variant="h3" align="center">
    {`Welcome to ${REACT_APP_COMPANY_PUBLIC_NAME}`}
  </Typography>
);

export const WELCOME_SUB = (
  <Typography variant="h6" align="center">
    We've assigned a few tasks to get you set up quickly
  </Typography>
);

export const SET_UP_CREATIVE = (
  <Typography variant="h3" align="center">
    You're all set up
  </Typography>
);

export const SET_UP_CREATIVE_SUB = (
  <Typography variant="h6" align="center">
    Now your profile is ready you'll show up on the Creative Roster and clients
    can invite you to their projects
  </Typography>
);

export const SET_UP = (
  <Typography variant="h5" align="center">
    Tasks
  </Typography>
);

export const SET_UP_SUB = (
  <Typography variant="h6" style={{ fontSize: 12 }} align="center">
    You'll see tasks here when you need to take an action.
  </Typography>
);

export const SET_UP_NONE = (
  <Typography variant="h3" align="center">
    Choose your role
  </Typography>
);

export const SET_UP_NONE_SUB = (
  <Typography variant="h6" align="center">
    You can select to be a Client, Creative, or both
  </Typography>
);
