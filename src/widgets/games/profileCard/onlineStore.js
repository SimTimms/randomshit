import React from 'react';
import { Column, MenuButtonStandard } from '../../../components';
import { randomKey } from '../../../utils';

export default function OnlineStores({ webshops }) {
  return (
    <Column w="100%">
      <Column w={300}>
        {webshops.map((gamePart, index) => (
          <a
            href={`${gamePart.url}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', width: '100%' }}
            key={randomKey()}
          >
            <MenuButtonStandard
              title={`${gamePart.name} ${gamePart.price ? 'from' : ''} ${
                gamePart.price ? gamePart.price : ''
              }`}
              icon="shopping_cart"
              onClickEvent={() => {}}
              mt={index > 0 && true}
              fullWidth={true}
            />
          </a>
        ))}
      </Column>
    </Column>
  );
}
