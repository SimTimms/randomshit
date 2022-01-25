import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Column } from '../../components';
import MiniProfile from './MiniProfile';

import axios from 'axios';

export default function Profile() {
  const classes = useStyles();
  const [profiles, setProfiles] = React.useState(null);

  useEffect(() => {
    !profiles && testAx();
  }, [testAx]);
  function testAx() {
    axios
      .get('http://localhost:4000/3d-artist')
      .then((result) => {
        setProfiles(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className={classes.wrapper}>
      <Column a="flex-start">
        <Typography align="center" style={{ fontSize: '12px', color: '#aaa' }}>
          Pro Painters
        </Typography>
        {profiles && profiles.map((item) => <MiniProfile profile={item} />)}
      </Column>
    </div>
  );
}
