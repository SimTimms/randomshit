import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import { Column } from '../../components';
import MiniProfile from './MiniProfile';
import ArtistProfile from '../ArtistProfile';
import ork from '../../assets/ork.png';
import squads from '../../assets/Squads.png';

export default function Ads({ modelArtist }) {
  const classes = useStyles();
  const [profiles, setProfiles] = React.useState([
    {
      name: 'Sister Squad - Early Access',
      profileImg: squads,
      link: 'https://www.patreon.com/posts/squads-early-61295391?utm_medium=social&utm_source=mp3d&utm_campaign=squads ',
    },
    {
      name: 'New Model - Early Access',
      profileImg: ork,
      link: 'https://www.patreon.com/posts/so-many-spikey-62107624?utm_medium=social&utm_source=mp3d&utm_campaign=ork',
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
            Patreon Updates
          </Typography>
          <Column a="flex-end" j="flex-end">
            {profiles && profiles.map((item) => <MiniProfile profile={item} />)}
          </Column>
        </Column>
      </Column>
    </div>
  );
}
