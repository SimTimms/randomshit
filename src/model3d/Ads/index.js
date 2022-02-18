import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import { Column } from '../../components';
import MiniProfile from './MiniProfile';
import ArtistProfile from '../ArtistProfile';
import ork from '../../assets/ork.png';
import squads from '../../assets/Squads.png';
import tau from '../../assets/tau.png';
import eldritch from '../../assets/eldritch.jpg';
import red from '../../assets/red.jpg';

export default function Ads({ modelArtist }) {
  const classes = useStyles();
  const [profiles, setProfiles] = React.useState([
    {
      name: 'The Exodite - Episode One',
      profileImg: tau,
      link: 'https://youtu.be/Jz8iJN9L5qA',
    },
    {
      name: 'Eldritch Omens - Out Now',
      profileImg: eldritch,
      link: 'https://www.games-workshop.com/en-GB/warhammer-40000-eldritch-omens-2022-eng',
    },

    {
      name: 'Red Harvest - Out Now',
      profileImg: red,
      link: 'https://www.games-workshop.com/en-GB/warcry-red-harvest-2021-eng',
    },
  ]);

  return (
    <div className={classes.wrapper}>
      <Column a="center" j="space-between">
        <ArtistProfile modelArtist={modelArtist} />
        <Column a="center" j="space-between">
          <Typography
            align="center"
            style={{
              fontSize: '12px',
              color: '#aaa',
              fontFamily: 'Arial',
              lineHeight: 0.9,
            }}
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
