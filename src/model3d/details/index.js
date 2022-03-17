import React from 'react';
import { Row, Column } from '../components';
import { Typography, Icon } from '@mui/material';
import { gwPaints } from '../paints';

export default function Details({ game }) {
  const modelSave = localStorage.getItem('modelColorSave');
  if (modelSave === 'null' || modelSave === null) {
    return null;
  }
  const details = JSON.parse(modelSave);
  return (
    <Row w="100%" h="100%" a="flex-start" j="flex-start">
      <Column
        j="flex-start"
        a="flex-start"
        h="100%"
        w="100%"
        of="auto"
        bg="rgba(0,0,0,0.8)"
      >
        {Object.keys(details).map((item) => {
          return (
            <Row mw={500} w="100%" j="space-between">
              <Row mw={400} w="100%" j="space-between">
                <Typography style={{ color: '#fff' }}>{item}</Typography>
                <Typography style={{ color: '#fff' }}>
                  {details[item].name}
                </Typography>
              </Row>

              {gwPaints[details[item].name] &&
                gwPaints[details[item].name].link && (
                  <a
                    href={gwPaints[details[item].name].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon style={{ color: '#fff' }}>shopping_cart</Icon>
                  </a>
                )}
            </Row>
          );
        })}
      </Column>
      <Column
        j="flex-start"
        a="flex-end"
        h="100%"
        w={'100%'}
        of="auto"
        bg="rgba(0,0,0,0.8)"
      >
        <Typography style={{ color: '#fff' }} align="right">
          {`Seller: ${game.artistName}`}
        </Typography>
        <a href={game.artistLink} target="_blank" rel="noopener noreferrer">
          <Typography style={{ color: '#fff' }} align="right">
            {`Model Bought From: ${game.artistLink}`}
          </Typography>
        </a>
        <Typography style={{ color: '#fff' }} align="right">
          {game.licenseLink}
        </Typography>
        <Typography style={{ color: '#fff' }} align="right">
          {game.copyrightDescription}
        </Typography>
        <a href={game.whereToBuyLink} target="_blank" rel="noopener noreferrer">
          <Typography style={{ color: '#fff' }} align="right">
            Buy Official Model: {game.whereToBuyLink}
          </Typography>
        </a>
        <a
          href="mailto:tim@doodlemeeple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography style={{ color: '#fff' }} align="right">
            Report this model to tim@doodlemeeple.com
          </Typography>
        </a>
      </Column>
    </Row>
  );
}
