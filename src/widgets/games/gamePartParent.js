import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { CardComponent } from '../../components';
import GamePart from './gamePart';

export default function GamePartParent({ game, setGame }) {
  const classes = useStyles();
  const [store, setStore] = React.useState(null);

  return (
    <CardComponent type="premium" premiumId="Parts">
      {game.gamePart &&
        game.gamePart.map((gamePart, index) => (
          <GamePart
            webshopIn={{ ...gamePart }}
            setGame={setGame}
            game={game}
            key={`${index}_${Math.random().toString(36)}`}
            setStore={setStore}
            index={index}
          />
        ))}
      {!store ? (
        <Typography
          className={classes.newStore}
          onClick={() =>
            setStore({ index: null, name: '', gltf: '', js: '', bin: '' })
          }
        >
          + Add an online store listing
        </Typography>
      ) : (
        <GamePart
          webshopIn={store}
          setGame={setGame}
          game={game}
          newMode={true}
          setStore={setStore}
          index={null}
        />
      )}
    </CardComponent>
  );
}
