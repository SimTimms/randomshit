import React, { useEffect } from 'react';
import { Row, Column, WidgetTitle, DividerMini } from './components';
import { Icon, Typography } from '@material-ui/core';
import smImg from './assets/smModel.jpg';
import bgImg from './assets/bgModel.jpg';

export default function parts({ setModel }) {
  return (
    <Column w={200} a="flex-start">
      <WidgetTitle str="Models" />

      <DividerMini />
      <Row wrap="wrap">
        <div
          style={{
            border: '1px solid #555',
            height: 60,
            width: 60,
            margin: 3,
            cursor: 'pointer',
          }}
          onClick={() => {
            setModel('spacemarine');
          }}
        >
          <img src={smImg} style={{ width: 60 }} />
        </div>
        <div
          style={{
            border: '1px solid #555',
            height: 60,
            width: 60,
            margin: 3,
            cursor: 'pointer',
          }}
          onClick={() => {
            setModel('bladeguard');
          }}
        >
          <img src={bgImg} style={{ width: 60 }} />
        </div>
      </Row>
      <Typography style={{ color: '#777', fontStyle: 'italic' }}>
        Experimental: You will lose your progress when you change models
      </Typography>
    </Column>
  );
}
