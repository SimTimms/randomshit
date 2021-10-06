import React, { useEffect } from 'react';
import { Row, Column, WidgetTitle, DividerMini } from './components';
import { Icon } from '@material-ui/core';
import bgOne from './assets/bg_one.jpg';
import bgTwo from './assets/bg_two.png';
import * as THREE from 'three';

export default function parts({ setPart }) {
  return (
    <Column w={200} a="flex-start" bb="1px solid #444">
      <WidgetTitle str="Parts" />
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
            setPart({
              primaryWeapon: 'bolter',
            });
          }}
        >
          <img src={bgTwo} style={{ width: 60 }} />
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
            setPart({
              primaryWeapon: 'boltgun',
            });
          }}
        >
          <img src={bgOne} style={{ width: 60 }} />
        </div>
      </Row>
    </Column>
  );
}
