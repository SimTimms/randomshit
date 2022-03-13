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
import etsyImg from '../../assets/etsy.jpg';
import ifPic from '../../assets/iftm.jpg';
import necronw from '../../assets/necronw.jpg';
import doubleN from '../../assets/double.jpg';
import armour from '../../assets/armour.jpg';

export default function Ads({ modelArtist }) {
  const classes = useStyles();
  const [profiles, setProfiles] = React.useState([
    {
      name: 'Armouring a Space Marine',
      profileImg: armour,
      link: '   https://youtu.be/MVubdRyU3Mc',
    },
    {
      name: 'Double or Nothing - Coming Soon',
      profileImg: doubleN,
      link: 'https://youtu.be/HzXEjCMiZJo',
    },
    {
      name: 'The Exodite - Episode One',
      profileImg: tau,
      link: 'https://youtu.be/Jz8iJN9L5qA',
    },
  ]);

  const [etsy, setEtsy] = React.useState([
    {
      name: 'Necron Warriors',
      profileImg: necronw,
      link: 'https://www.etsy.com/uk/listing/1176703260/5x-necron-warriors-with-gauss-rifles',
    },
    {
      name: 'Primaris Techmarine',
      profileImg: ifPic,
      link: 'https://www.etsy.com/uk/listing/1189625341/primaris-techmarine-imperial-fist-9th',
    },
    {
      name: 'Recruit Edition',
      profileImg: etsyImg,
      link: 'https://www.etsy.com/uk/listing/1172817772/warhammer-40k-recruit-edition-painted',
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
              color: '#222',
              fontFamily: 'Arial',
              lineHeight: 0.9,
            }}
          >
            Shop
          </Typography>
          <Column a="flex-end" j="flex-end">
            {etsy && etsy.map((item) => <MiniProfile profile={item} />)}
          </Column>
        </Column>
        <Column a="center" j="space-between">
          <Typography
            align="center"
            style={{
              fontSize: '12px',
              color: '#222',
              fontFamily: 'Arial',
              lineHeight: 0.9,
            }}
          >
            GW News
          </Typography>
          <Column a="flex-end" j="flex-end">
            {profiles && profiles.map((item) => <MiniProfile profile={item} />)}
          </Column>
        </Column>
      </Column>
    </div>
  );
}
