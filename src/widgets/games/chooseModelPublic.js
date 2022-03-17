import React from 'react';
import { useQuery } from '@apollo/client';
import { GAME_WIDGET } from './data';
import ModelProfilePublic from './modelProfilePublic';
import { Row, Grid } from '../../components';
import { MenuContext } from '../../context';

export default function ChooseModelPublic({ setModelOne, history }) {
  const { loading, error, data } = useQuery(GAME_WIDGET);
  if (loading) return <p>Loading ...</p>;
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
            height: 'calc(100% - 32px)',
            background: '#fff',
          }}
        >
          <Grid cols={3}>
            {data &&
              data.gameWidget.map((game, index) => (
                <ModelProfilePublic
                  game={game}
                  setModelOne={setModelOne}
                  history={history}
                />
              ))}
          </Grid>
        </div>
      )}
    </MenuContext.Consumer>
  );
}
