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
import doubleN from '../../assets/double.jpg';

export default function Ads({ modelArtist }) {
  const classes = useStyles();
  const [profiles, setProfiles] = React.useState([
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

  const [etsy, setEtsy] = React.useState([
    {
      name: 'Primaris Techmarine - IF',
      profileImg: ifPic,
      link: 'https://www.etsy.com/uk/minipainter3d/listing/1189625341/primaris-techmarine-imperial-fist-9th?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1646306458979',
    },
    {
      name: 'Recruit Edition - Painted',
      profileImg: etsyImg,
      link: 'https://www.etsy.com/uk/listing/1172817772/warhammer-40k-recruit-edition-painted?click_key=5d48319a0f8fcf69592754a730a334a24cd801d9%3A1172817772&click_sum=0b7ed0dc&ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=warhammer+recruit+edition+painted&ref=sr_gallery-1-38&organic_search_click=1&frs=1',
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
              color: '#aaa',
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
