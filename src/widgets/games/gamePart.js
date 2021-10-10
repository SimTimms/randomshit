import React, { useEffect } from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
  MenuButtonStandard,
  Row,
  DividerMini,
} from '../../components';
import { Typography } from '@material-ui/core';

export default function GamePart({
  webshopIn,
  game,
  setGame,
  newMode,
  setStore,
  index,
}) {
  const [gamePart, setGamePart] = React.useState({
    _id: '',
  });
  const [editMode, setEditMode] = React.useState(false);
  useEffect(() => {
    setGamePart({ index: index, ...webshopIn });
    newMode && setEditMode(true);
  }, [webshopIn, newMode, index]);

  if (!editMode) {
    return (
      <Column w="100%">
        <Row w="100%" j="space-between">
          <Row w="100%" j="space-between" pr={10}>
            <Typography>{gamePart._id}</Typography>
          </Row>
          <MenuButtonStandard
            icon="edit"
            mr={true}
            onClickEvent={() => setStore({ ...gamePart, index: index })}
          />
          <MenuButtonStandard
            icon="delete"
            type="delete"
            onClickEvent={() =>
              setGame({
                ...game,
                gamePart: [
                  ...game.gamePart.filter(
                    (value, arrIndex) => index !== arrIndex
                  ),
                ],
              })
            }
          />
        </Row>
        <DividerMini />
      </Column>
    );
  }
  if (!gamePart) {
    return <div>Loading</div>;
  }
  return (
    <CardComponent>
      <Column a="center" j="center">
        <FieldBox
          value={gamePart._id}
          title="ID"
          maxLength={26}
          onChangeEvent={(e) => {
            setGamePart({
              ...gamePart,
              _id: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: Amazon"
          info="What's this name of the online store where this game is sold?"
          warning=""
          size="s"
          multiline={false}
        />
        <FieldBox
          value={gamePart.gltf}
          title="GLTF"
          maxLength={512}
          onChangeEvent={(e) => {
            setGamePart({
              ...gamePart,
              gltf: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: https://amazon.co.uk/my_game"
          info="Provide a link to your game on the online shop."
          warning=""
          size="s"
          multiline={false}
        />
        <FieldBox
          value={gamePart.bin}
          title="BIN"
          maxLength={512}
          onChangeEvent={(e) => {
            setGamePart({
              ...gamePart,
              bin: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: £59.99, 50.00 USD"
          info="How much can someone expect to pay for your game at this online store."
          warning=""
          size="s"
          multiline={false}
        />
        <FieldBox
          value={gamePart.js}
          title="JS"
          maxLength={512}
          onChangeEvent={(e) => {
            setGamePart({
              ...gamePart,
              js: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: £59.99, 50.00 USD"
          info="How much can someone expect to pay for your game at this online store."
          warning=""
          size="s"
          multiline={false}
        />
        <DividerMini />
        {gamePart.index === null ? (
          <MenuButtonStandard
            title="Create"
            onClickEvent={() => {
              setGame({
                ...game,
                gamePart: [
                  ...game.gamePart,
                  {
                    name: gamePart.name,
                    gltf: gamePart.gltf,
                    bin: gamePart.bin,
                    js: gamePart.js,
                  },
                ],
              });
              setGamePart(null);
            }}
          />
        ) : (
          <MenuButtonStandard
            title="Save"
            onClickEvent={() => {
              let newArr = [...game.gamePart];
              newArr.splice(gamePart.index, 1, {
                name: gamePart.name,
                gltf: gamePart.gltf,
                bin: gamePart.bin,
                js: gamePart.js,
              });
              setGame({
                ...game,
                gamePart: newArr,
              });
              setStore(null);
            }}
          />
        )}
      </Column>
    </CardComponent>
  );
}
