import React, { useEffect } from 'react';
import { Row, Column, WidgetTitle, DividerMini } from './components';
import PaintPot from './PaintPot';

export default function RecentColors({ activeColor, setColorFunction }) {
  const [recentColors, setRecentColors] = React.useState([]);

  useEffect(() => {
    recentColors.indexOf(activeColor) === -1 &&
      setRecentColors([...recentColors, activeColor]);
  }, [activeColor, recentColors]);

  return (
    <Column w={200} a="flex-start" bb="1px solid #444">
      <WidgetTitle str="Palette" />
      <DividerMini />
      <Row wrap="wrap">
        {recentColors.map((color, index) => (
          <PaintPot
            key={`recent_${index}`}
            setColorFunction={() => setColorFunction(color)}
            color={color}
          />
        ))}
      </Row>
    </Column>
  );
}
