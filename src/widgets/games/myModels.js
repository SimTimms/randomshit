import React from 'react';
import { Query } from '@apollo/client/react/components';
import { MY_GAMES } from './data';
import { Row, Column } from '../../components';
import GameComponent from './component';
import { MenuContext } from '../../context';

export default function MyModels() {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Row w="100%">
          <Column w="100%">
            <Query query={MY_GAMES} fetchPolicy="network-only">
              {({ data }) => {
                if (data)
                  return data.myGames.map((game, index) => (
                    <GameComponent game={game} key={index} />
                  ));

                return null;
              }}
            </Query>
          </Column>
          )
        </Row>
      )}
    </MenuContext.Consumer>
  );
}
