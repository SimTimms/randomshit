import React from 'react';
import { useStyles } from './styles';

import { Typography } from '@material-ui/core';

export default function MiniProfile({ profile }) {
  const classes = useStyles();
  return (
    <div className={classes.avatar}>
      <div
        className={classes.avatarIcon}
        style={{ backgroundImage: `url(${profile.profileImg})` }}
      ></div>
      <div className={classes.avatarText}>
        <a
          href={`${process.env.REACT_APP_DM_API}/user-profile/${profile._id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.avatarTextInterior}
        >
          <Typography variant="body1">{profile.name}</Typography>
        </a>
      </div>
    </div>
  );
}
