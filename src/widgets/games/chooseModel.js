import React from 'react';
import { Query } from 'react-apollo';
import { Typography } from '@material-ui/core';
import { GAME_WIDGET, MY_GAMES } from './data';
import { GameProfile } from './profileCard';
import { GameForm } from './';
import { Row, Column, Grid, CardComponent } from '../../components';
import GameComponent from './component';
import { MenuContext } from '../../context';
import { randomKey } from '../../utils';
import { PAGES } from '../../const';

export default function ChooseModel() {
  const [game, setGame] = React.useState(null);
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Row w="100%">
          {menu.homePage.secondaryPage === PAGES.createModel ? (
            <GameForm gameData={game} setGameData={setGame} />
          ) : menu.homePage.secondaryPage === PAGES.pickModelsSecondary ? (
            <Grid cols={3}>
              <Query query={GAME_WIDGET}>
                {({ data }) => {
                  if (data)
                    return data.gameWidget.map((game, index) => (
                      <GameProfile game={game} key={randomKey()} />
                    ));
                  return null;
                }}
              </Query>
            </Grid>
          ) : (
            menu.homePage.secondaryPage === PAGES.myModels && (
              <Column w="100%">
                <Query query={MY_GAMES} fetchPolicy="network-only">
                  {({ data }) => {
                    if (data)
                      return data.myGames.map((game) => (
                        <GameComponent game={game} />
                      ));

                    return null;
                  }}
                </Query>
              </Column>
            )
          )}
        </Row>
      )}
    </MenuContext.Consumer>
  );
}
