import React, { useEffect } from 'react';
import { Row, Column, DividerMini } from './components';
import PaintPot from './PaintPot';

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
      <Row wrap="wrap" mw={400} a="center" j="center">
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
