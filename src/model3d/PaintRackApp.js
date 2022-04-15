import React from 'react';
import { Row, Column, DividerMini } from './components';
import { Typography } from '@mui/material';
import { paints } from './paints';
import { useStyles } from './styles';
import RecentColors from './recentColors';
import clsx from 'clsx';
import patreonDevice from '../assets/patreonDevice.png';
export default function PaintRackApp({
  setColorFunction,
  setColorGroup,
  colorGroup,
  profilePriority,
}) {
  const classes = useStyles();
  const [hoverColor, setHoverColor] = React.useState({
    color: '#aaa',
    name: 'Plastic Grey',
  });
  const paintGroups = [
    { name: 'red', color: '#880804' },
    { name: 'orange', color: '#f4874e' },
    { name: 'brown', color: '#eec483' },
    { name: 'green', color: '#17a166' },
    { name: 'turquoise', color: '#54bdca' },
    { name: 'blue', color: '#4c78af' },
    { name: 'purple', color: '#8869ae' },
    { name: 'grey', color: '#ffffff' },
    { name: 'metallic', color: '#fff' },
    profilePriority === 0 && { name: 'shade', color: '#f4874e' },
  ];
  if (!colorGroup) {
    return (
      <Row>
        <Typography
          style={{
            color: '#aaa',
            fontSize: '12px',
            width: 50,
            marginLeft: -50,
          }}
        >
          Paints
        </Typography>
        {paintGroups.map((item) => (
          <div
            onClick={() => setColorGroup(item.name)}
            className={clsx({
              [classes.paintCircle]: true,
              [classes.metallic]: item.name === 'metallic',
              [classes.shade]: item.name === 'shade',
            })}
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
            style={{ width: 400, height: 20, color: '#fff' }}
          >
            {}
            {hoverColor.patreonLock
              ? `Visit Patreon to unlock ${hoverColor.name}`
              : hoverColor.name}
          </Typography>
          {hoverColor.link || hoverColor.patreonLock ? (
            <a
              href={
                hoverColor.patreonLock
                  ? 'https://www.patreon.com/3dminipainterhtml'
                  : hoverColor.link
              }
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
                {hoverColor.patreonLock
                  ? 'Patreon'
                  : hoverColor.company
                  ? hoverColor.company
                  : '-'}
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
          {paints[colorGroup].map((item, index) => {
            const isPatreonLocked =
              profilePriority !== 0 && item.patreon === true;
            return (
              <div
                key={`paint_${index}`}
                onMouseOver={() =>
                  setHoverColor({ ...item, patreonLock: isPatreonLocked })
                }
                onClick={() =>
                  !isPatreonLocked ? setColorFunction(item) : null
                }
                className={clsx({
                  [classes.paintCircle]: true,
                  [classes.metallic]: item.metal ? item.metal : false,
                  [classes.shade]: item.shade ? item.shade : false,
                })}
                style={{
                  backgroundColor: item.color,
                }}
                title={
                  isPatreonLocked
                    ? `Patrons get the full range of shades including ${item.name}. Please visit https://www.patreon.com/3dminipainterhtml to support this project`
                    : item.name
                }
              >
                {isPatreonLocked && (
                  <img src={patreonDevice} className={classes.patreon} />
                )}
              </div>
            );
          })}
        </Row>
      </Column>
    </div>
  );
}
