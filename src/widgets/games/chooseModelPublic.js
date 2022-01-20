import React from 'react';
import { Query } from 'react-apollo';
import { GAME_WIDGET } from './data';
import ModelProfilePublic from './modelProfilePublic';
import { Row, Grid } from '../../components';
import { MenuContext } from '../../context';

export default function ChooseModelPublic({ setModelOne, history }) {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            overflow: 'auto',
            boxSizing: 'border-box',
            height: 'calc(100% - 50px)',
          }}
        >
          <Grid cols={3}>
            <Query query={GAME_WIDGET}>
              {({ data }) => {
                if (data)
                  return data.gameWidget.map((game, index) => (
                    <ModelProfilePublic
                      game={game}
                      setModelOne={setModelOne}
                      history={history}
                    />
                  ));
                return null;
              }}
            </Query>
          </Grid>
        </div>
      )}
    </MenuContext.Consumer>
  );
}
