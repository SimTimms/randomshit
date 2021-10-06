import React from 'react';
import { Typography } from '@material-ui/core';
import ModelBar from './modelBar';
import { Row } from './components';
export default function TitleBar({ model, setModel }) {
  return (
    <Row bg="#222" j="space-between" a="center" bb="1px solid #444">
      <Typography
        align="center"
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 500,
          fontFamily: `'Audiowide', cursive`,
        }}
      >
        MINI PAINTER 3D
      </Typography>
      {/* <ModelBar setModel={setModel} />*/}
    </Row>
  );
}
