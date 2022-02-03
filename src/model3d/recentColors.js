import React, { useEffect } from 'react';
import { Row, Column, DividerMini } from './components';
import PaintPot from './PaintPot';
import { Typography } from '@mui/material';

export default function RecentColors({
  activeColor,
  setColorFunction,
  setHoverColor,
  recentColors,
  setRecentColors,
}) {
  useEffect(() => {
    recentColors.indexOf(activeColor) === -1 &&
      setRecentColors([...recentColors, activeColor]);
  }, [activeColor, recentColors]);

  return (
    <Column a="center">
      <Row wrap="wrap" a="center" j="center">
        <Typography
          style={{
            color: '#aaa',
            fontSize: '12px',
            width: 50,
            marginLeft: -50,
          }}
        >
          Recent
        </Typography>
        {recentColors.map((color, index) => (
          <PaintPot
            key={`recent_${index}`}
            setColorFunction={() => setColorFunction(color)}
            item={color}
            setHoverColor={setHoverColor}
          />
        ))}
      </Row>
    </Column>
  );
}
