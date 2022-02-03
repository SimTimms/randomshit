import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import { Column } from '../../components';
import MiniProfile from './MiniProfile';
import ArtistProfile from '../ArtistProfile';
import ork from '../../assets/ork.png';
import axios from 'axios';

export default function Ads({ modelArtist }) {
  const classes = useStyles();
  const [profiles, setProfiles] = React.useState([
    {
      name: 'New Model - Coming Soon!',
      profileImg: ork,
      link: 'https://www.patreon.com/posts/big-guy-coming-61546311',
    },
  ]);

  return (
    <div className={classes.wrapper}>
      <Column a="center" j="space-between">
        <ArtistProfile modelArtist={modelArtist} />
        <Column a="center" j="space-between">
          <Typography
            align="center"
            style={{ fontSize: '12px', color: '#aaa' }}
          >
            Updates
          </Typography>
          <Column a="flex-end" j="flex-end">
            {profiles && profiles.map((item) => <MiniProfile profile={item} />)}
          </Column>
        </Column>
      </Column>
    </div>
  );
}
