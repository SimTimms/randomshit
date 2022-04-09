import React from 'react';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  Column,
  DividerMini,
  Divider,
  Row,
} from '../../components';
import { Mutation, Query } from '@apollo/client/react/components';
import { CREATE_GAME, UPDATE_GAME, REMOVE_GAME, GAME_BY_ID } from './data';
import { toaster } from '../../utils/toaster';
import { MenuContext } from '../../context';
import GameFields from './gameFields';
import { PAGES } from '../../const';

export default function GameForm() {
  const classes = useStyles();
  const [game, setGame] = React.useState({
    _id: 'new',
    name: '',
    summary: '',
    featureImage: '',
    gamePart: [],
    url: '',
    showreel: '',
    js: Math.floor(Math.random() * 10000000000).toString(),
    gltf: '',
    bin: '',
    artistName: '',
    artistLink: '',
    licenseLink: '',
    copyrightDescription: '',
    whereToBuyLink: '',
    textures: [],
  });

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <div className={classes.menuRoot}>
          <div
            style={{
              padding: 10,
              paddingBottom: 100,
              maxWidth: 800,
              margin: 'auto',
            }}
          >
            <Row>
              <Column a="center" j="center">
                <GameFields game={game} setGame={setGame} />
                {/*
              <Divider />
              <GamePartParent game={game} setGame={setGame} />
              <Divider />
              <GamePostParent game={game} setGame={setGame} />
            
          */}

                <Divider />
                {game._id === 'new' ? (
                  <Mutation
                    mutation={CREATE_GAME}
                    variables={{
                      ...game,
                      _id: null,
                    }}
                    onCompleted={() => {
                      toaster('Saved');
                      menu.updateMenuContext({
                        ...menu,
                        homePage: {
                          ...menu.homePage,
                          primaryPage: PAGES.pickModelsPrimary,
                          secondaryPage: PAGES.myModels,
                          gameId: null,
                        },
                      });
                    }}
                  >
                    {(mutation) => {
                      return (
                        <MenuButtonStandard
                          title="Create"
                          icon="add"
                          disabled={
                            game.name.length < 5 ||
                            game.gltf.length < 1 ||
                            game.bin.length < 1
                          }
                          onClickEvent={() => {
                            mutation();
                          }}
                        />
                      );
                    }}
                  </Mutation>
                ) : (
                  <Column w={180}>
                    <Mutation
                      mutation={UPDATE_GAME}
                      variables={{
                        ...game,
                      }}
                      onCompleted={(data) => {
                        toaster('Saved');
                      }}
                    >
                      {(updateMutation) => {
                        return (
                          <MenuButtonStandard
                            title="Update"
                            icon="update"
                            fullWidth={true}
                            disabled={
                              game.name.length < 5 ||
                              game.gltf.length < 1 ||
                              game.bin.length < 1
                            }
                            onClickEvent={() => {
                              updateMutation();
                            }}
                          />
                        );
                      }}
                    </Mutation>
                    <DividerMini />
                    <Mutation
                      mutation={REMOVE_GAME}
                      variables={{
                        _id: game._id,
                      }}
                      onCompleted={() => {
                        toaster('Removed');
                        menu.updateMenuContext({
                          ...menu,
                          homePage: {
                            ...menu.homePage,
                            primaryPage: PAGES.pickModelsPrimary,
                            secondaryPage: PAGES.myModels,
                            gameId: null,
                          },
                        });
                      }}
                    >
                      {(deleteMutation) => {
                        return (
                          <MenuButtonStandard
                            title="Delete Model"
                            type="delete"
                            icon="delete"
                            fullWidth={true}
                            onClickEvent={() => {
                              deleteMutation();
                            }}
                          />
                        );
                      }}
                    </Mutation>
                    <Divider />
                  </Column>
                )}
              </Column>
            </Row>
          </div>

          {menu.uploadPage.gameId !== 'new' && (
            <Query
              query={GAME_BY_ID}
              fetchPolicy="network-only"
              variables={{ _id: menu.uploadPage.gameId }}
              onCompleted={(data) =>
                data.gameById !== null && setGame({ ...data.gameById })
              }
            >
              {({ data }) => {
                return null;
              }}
            </Query>
          )}
        </div>
      )}
    </MenuContext.Consumer>
  );
}
