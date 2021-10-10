import React from 'react';
import { useStyles } from './styles';
import { MenuContext } from '../../../context';
import { Query } from 'react-apollo';
import { GAME_BY_ID } from '../data';
import ModelRouter from '../../../model3d/ModelRouter';

export default function GameProfileFull() {
  const classes = useStyles();

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Query
          query={GAME_BY_ID}
          variables={{ _id: menu.homePage.gameId }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            if (!data) return null;
            if (data) {
              const game = data.gameById;

              return (
                <ModelRouter
                  gltf={game.gltf}
                  js={game.js}
                  parts={game.gamePart}
                />
              );
            }
          }}
        </Query>
      )}
    </MenuContext.Consumer>
  );
}
