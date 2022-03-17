import React from 'react';
import { useStyles } from './styles';

import { Typography } from '@mui/material';

export default function MiniProfile({ profile }) {
  const classes = useStyles();
  return (
    <div className={classes.avatar}>
      <div className={classes.avatarText}>
        <a
          href={`https://app.doodlemeeple.com/user-profile/${profile._id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.avatarTextInterior}
        >
          <Typography variant="body1">{profile.name}</Typography>
        </a>
      </div>
      <div
        className={classes.avatarIcon}
        style={{ backgroundImage: `url(${profile.profileImg})` }}
      ></div>
    </div>
  );
}
