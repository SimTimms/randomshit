import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import { Column } from '../../components';
import MiniProfile from './MiniProfile';
import { REACT_APP_DM_API } from '../../envVars';
import axios from 'axios';

export default function ArtistProfile({ modelArtist }) {
  const classes = useStyles();
  const [profiles, setProfiles] = React.useState(null);

  useEffect(() => {
    !profiles && testAx();
  }, [testAx]);
  function testAx() {
    axios
      .get(`${REACT_APP_DM_API}/3d-artist`)
      .then((result) => {
        setProfiles(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  if (!modelArtist) {
    return null;
  }
  return (
    <div className={classes.avatar}>
      <Column a="flex-end" j="flex-end">
        <Typography align="center" style={{ fontSize: '14px', color: '#aaa' }}>
          {`Model by ${modelArtist.name}`}
        </Typography>
        <Typography align="center">
          <a
            style={{ fontSize: '14px', color: '#aaa' }}
            href={modelArtist.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </Typography>
        <Typography align="center">
          <a
            style={{ fontSize: '14px', color: '#aaa' }}
            href={modelArtist.buyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get This Model
          </a>
        </Typography>
      </Column>
    </div>
  );
}
