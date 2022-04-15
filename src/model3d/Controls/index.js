import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import { Column, Row } from '../../components';

export default function Controls({ shading, setShading }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Column a="flex-start" j="space-between">
        <Row a="flex-start" j="flex-start" mt={10}>
          <Typography style={{ marginLeft: 10, color: '#aaa' }}>
            Shading:{' '}
          </Typography>
          <Typography
            onClick={() => setShading(shading ? false : true)}
            style={{ cursor: 'pointer', color: '#aaa' }}
          >
            {shading ? 'On' : 'Off'}
          </Typography>
        </Row>
      </Column>
    </div>
  );
}
