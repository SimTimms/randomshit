import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { Row, Column } from './components';

export default function ModeBar({ paintMode, setPaintMode }) {
  return (
    <Column>
      <div
        style={{
          background: paintMode ? '#96dbfa' : '#ffc869',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
        onClick={() => setPaintMode(paintMode ? false : true)}
      >
        <Row j="center" pointer="pointer">
          <Icon>{paintMode ? 'format_paint' : '3d_rotation'}</Icon>
          <div style={{ padding: 10 }}>
            <Typography align="center">
              {paintMode ? `You're in PAINT MODE` : `You're in CAMERA VIEW`}
            </Typography>
            <Typography style={{ fontSize: 10 }} align="center">
              {paintMode ? 'Click for Camera View' : 'Click for Paint Mode'}
            </Typography>
          </div>
        </Row>
      </div>
    </Column>
  );
}
