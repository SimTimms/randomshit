import React from 'react';
import { Row, Column, DividerMini } from './components';
import { Typography } from '@material-ui/core';
import { paints } from './paints';

export default function PaintRack({ setColorFunction }) {
  const [hoverColor, setHoverColor] = React.useState({
    color: '#aaa',
    name: 'Plastic Grey',
  });
  return (
    <Row a="center" j="flex-start" bb="1px solid #444">
      <Column w={'calc(100vw - 180px)'} a="flex-start" j="flex-start">
        <Row h={60} a="center" j="flex-start" of={'auto'}>
          {paints.map((item, index) => (
            <div
              key={`paint_${index}`}
              onClick={() => setColorFunction(item)}
              onMouseOver={() => setHoverColor(item)}
              style={{
                minHeight: 30,
                minWidth: 30,
                backgroundColor: item.color,
                borderRadius: '50%',
                margin: 2,
                boxShadow: '2px 2px 3px rgba(0,0,0,0.2)',
                borderTop: item.metal
                  ? '1px solid rgba(255,255,255,1)'
                  : '1px solid #444',
                borderLeft: item.metal
                  ? '1px solid rgba(255,255,255,1)'
                  : '1px solid #444',
                borderBottom: item.metal
                  ? '1px solid rgba(255,255,255,0.2)'
                  : '1px solid #444',
                borderRight: item.metal
                  ? '2px solid rgba(255,255,255,0.2)'
                  : '2px solid #444',
              }}
              title={item.name}
            ></div>
          ))}
        </Row>
      </Column>
      <Column>
        <Typography align="center" style={{ color: '#fff', width: 180 }}>
          {hoverColor.name}
        </Typography>
        <Typography align="center" style={{ color: '#aaa', width: 180 }}>
          {hoverColor.company}
        </Typography>
      </Column>
    </Row>
  );
}
