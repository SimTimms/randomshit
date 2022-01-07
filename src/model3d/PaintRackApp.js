import React from 'react';
import { Row, Column, DividerMini } from './components';
import { Typography } from '@material-ui/core';
import { paints } from './paints';
import { useStyles } from './styles';
import RecentColors from './recentColors';

export default function PaintRackApp({
  setColorFunction,
  setColorGroup,
  colorGroup,
}) {
  const classes = useStyles();
  const [hoverColor, setHoverColor] = React.useState({
    color: '#aaa',
    name: 'Plastic Grey',
  });
  const paintGroups = [
    { name: 'red', color: '#880804' },
    { name: 'purple', color: '#8869ae' },
    { name: 'blue', color: '#4c78af' },
    { name: 'turquoise', color: '#54bdca' },
    { name: 'green', color: '#17a166' },
    { name: 'orange', color: '#f4874e' },
    { name: 'brown', color: '#eec483' },
    { name: 'black', color: '#171314' },
    { name: 'grey', color: '#ffffff' },
    { name: 'metallic', color: '#a2a5a7' },
  ];
  if (!colorGroup) {
    return (
      <Row>
        {paintGroups.map((item) => (
          <div
            onClick={() => setColorGroup(item.name)}
            className={classes.paintCircle}
            style={{
              backgroundColor: item.color,
            }}
            title={item.name}
          ></div>
        ))}
      </Row>
    );
  }
  return (
    <div
      style={{
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        paddingTop: '80px',
        boxSizing: 'border-box',
        width: '100vw',
        background: 'rgba(0,0,0,0.7)',
        zIndex: 11,
      }}
      onClick={() => setColorGroup(null)}
    >
      <Column h="100%" a="center" j="flex-start" width="100%" of="auto">
        <Column>
          <Typography
            align="center"
            style={{ width: 180, height: 20, color: '#fff' }}
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
        <Row a="center" j="center" wrap="wrap" w={300}>
          <DividerMini />
          {paints[colorGroup].map((item, index) => (
            <div
              key={`paint_${index}`}
              onMouseOver={() => setHoverColor(item)}
              onClick={() => setColorFunction(item)}
              className={item.metal ? classes.metallic : classes.standard}
              className={classes.paintCircle}
              style={{
                backgroundColor: item.color,
              }}
              title={item.name}
            ></div>
          ))}
        </Row>
      </Column>
    </div>
  );
}