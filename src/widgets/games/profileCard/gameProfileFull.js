import React from 'react';
import { useStyles } from './styles';
import { MenuContext } from '../../../context';
import { Query } from 'react-apollo';
import { GAME_BY_ID } from '../data';
import ModelRouter from '../../../model3d/ModelRouter';
import ModelRouterApp from '../../../model3d/ModelRouterApp';

export default function GameProfileFull({ back, profile, ...props }) {
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
                <ModelRouterApp
                  gltf={game.gltf}
                  js={game.js}
                  parts={game.gamePart}
                  gameId={game._id}
                  game={game}
                  back={back}
                  history={props.history}
                  profilePriority={profile.priority}
                  modelArtist={{
                    name: game.artistName,
                    link: game.artistLink,
                    buyLink: game.whereToBuyLink,
                  }}
                />
              );
            }
          }}
        </Query>
      )}
    </MenuContext.Consumer>
  );
}
