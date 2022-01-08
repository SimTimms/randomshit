import React from 'react';
import { Row, Column } from '../components';
import { Typography, Icon } from '@material-ui/core';
import { gwPaints } from '../paints';
export default function Details({}) {
  const details = JSON.parse(localStorage.getItem('modelColorSave'));
  return (
    <Column
      j="flex-start"
      a="center"
      h="100%"
      w={'100%'}
      of="auto"
      bg="rgba(0,0,0,0.8)"
    >
      {Object.keys(details).map((item) => (
        <Row mw={500} w="100%" j="space-between">
          <Row mw={400} w="100%" j="space-between">
            <Typography style={{ color: '#fff' }}>{item}</Typography>
            <Typography style={{ color: '#fff' }}>
              {details[item].name}
            </Typography>
          </Row>

          {gwPaints[details[item].name] && gwPaints[details[item].name].link && (
            <a
              href={gwPaints[details[item].name].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon style={{ color: '#fff' }}>shopping_cart</Icon>
            </a>
          )}
        </Row>
      ))}
    </Column>
  );
}
