import React from 'react';
import { Row, Column, DividerMini } from './components';
import { Typography } from '@material-ui/core';
import { paints } from './paints';
import { useStyles } from './styles';
import RecentColors from './recentColors';

export default function PaintRack({ setColorFunction, activeColor }) {
  const classes = useStyles();
  const [hoverColor, setHoverColor] = React.useState({
    color: '#aaa',
    name: 'Plastic Grey',
  });
  return (
    <Column h="100% " a="center" j="flex-start" width="100%" of="auto">
      <Column>
        <Typography
          align="center"
          style={{ color: '#fff', width: 180, height: 20 }}
        >
          {hoverColor.name}
        </Typography>
        {hoverColor.link ? (
          <a
            href={hoverColor.link}
            style={{ color: 'rgba(255,255,255,0.6)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography
              align="center"
              style={{
                color: '#aaa',
                width: 180,
                height: 20,
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              {hoverColor.company ? hoverColor.company : '-'}
            </Typography>
          </a>
        ) : (
          <Typography
            align="center"
            style={{ color: '#aaa', width: 180, height: 20 }}
          >
            {hoverColor.company ? hoverColor.company : '-'}
          </Typography>
        )}
      </Column>
      <Row a="center" j="flex-start" wrap="wrap" width="100%">
        <RecentColors
          activeColor={activeColor}
          setColorFunction={setColorFunction}
          setHoverColor={setHoverColor}
        />
        <DividerMini />
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
  );
}