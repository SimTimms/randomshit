import React, { useEffect } from 'react';
import { Row, Column, WidgetTitle, DividerMini } from './components';
import PaintPot from './PaintPot';

export default function RecentColors({
  activeColor,
  setColorFunction,
  setHoverColor,
}) {
  const [recentColors, setRecentColors] = React.useState([]);

  useEffect(() => {
    recentColors.indexOf(activeColor) === -1 &&
      setRecentColors([...recentColors, activeColor]);
  }, [activeColor, recentColors]);

  return (
    <Column w={200} a="flex-start" bb="1px solid #444">
      <DividerMini />
      <Row wrap="wrap" a="flex-start" j="flex-start">
        {recentColors.map((color, index) => (
          <PaintPot
            key={`recent_${index}`}
            setColorFunction={() => setColorFunction(color)}
            item={color}
            setHoverColor={setHoverColor}
          />
        ))}
      </Row>
      <DividerMini />
    </Column>
  );
}
