import React from 'react';
import { Row, Column, DividerMini } from './components';
import { Typography } from '@material-ui/core';
import { paints } from './paints';
import { useStyles } from './styles';

export default function PaintRack({ setColorFunction }) {
  const classes = useStyles();
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
              className={item.metal ? classes.metallic : classes.standard}
              style={{
                minHeight: 30,
                minWidth: 30,
                backgroundColor: item.color,
                borderRadius: '50%',
                margin: 2,
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
