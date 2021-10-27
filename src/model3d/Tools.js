import React, { useEffect } from 'react';
import { Row, Column, WidgetTitle, DividerMini } from './components';
import { Icon } from '@material-ui/core';

export default function Tools({ spray, setSpray }) {
  return (
    <Column w={200} a="flex-start">
      <WidgetTitle str="Tools" />
      <DividerMini />
      <Row wrap="wrap">
        <Icon
          onClick={() => setSpray(false)}
          style={{
            height: 30,
            width: 30,
            borderRadius: '50%',
            margin: 5,
            boxShadow: '2px 2px 3px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            background: !spray ? '#96dbfa' : '',
            color: !spray ? '#444' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          brush
        </Icon>
        <Icon
          onClick={() => setSpray(true)}
          style={{
            height: 30,
            width: 30,
            borderRadius: '50%',
            margin: 5,
            boxShadow: '2px 2px 3px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            background: spray ? '#96dbfa' : '',
            color: spray ? '#444' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          format_paint
        </Icon>
      </Row>
    </Column>
  );
}
