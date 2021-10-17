import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { MY_MODELS, DELETE_MODEL } from './data';
import { Column, MenuButtonStandard } from '../../components';
import { MenuContext } from '../../context';
import { Mutation } from 'react-apollo';
import { randomKey } from '../../utils';

export default function MyModelsWidget({ ...props }) {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [deleted, setDeleted] = React.useState(0);
  return (
    <Query
      query={MY_MODELS}
      fetchPolicy="network-only"
      variables={{ deleted }}
      onCompleted={(data) => {
        setCreativeArray([...data.myModels]);
      }}
    >
      {() => {
        return creativeArray.map((creative, index) => {
          return (
            <div className={classes.miniWrapper} key={randomKey()}>
              <div
                className={classes.bgWrapper}
                style={{ backgroundImage: `url(${creative.url})` }}
              ></div>

              <MenuContext.Consumer>
                {(menu) => (
                  <Column w="100%">
                    <MenuButtonStandard
                      title="Open"
                      fullWidth={true}
                      onClickEvent={() => {
                        localStorage.setItem(
                          'modelColorSave',
                          creative.saveDataColors
                        );
                        localStorage.setItem(
                          'modelPartsSave',
                          creative.saveDataParts
                        );
                        menu.updateMenuContext({
                          ...menu,
                          homePage: {
                            ...menu.homePage,
                            secondaryPage: 'game_profile',
                            gameId: creative.model._id,
                          },
                        });
                      }}
                    />
                    <Mutation
                      mutation={DELETE_MODEL}
                      variables={{
                        _id: creative._id,
                      }}
                      onCompleted={() => {
                        setDeleted(deleted + 1);
                      }}
                    >
                      {(mutation) => {
                        return (
                          <MenuButtonStandard
                            title="Delete"
                            fullWidth={true}
                            onClickEvent={() => {
                              mutation();
                            }}
                            type="delete"
                          />
                        );
                      }}
                    </Mutation>
                  </Column>
                )}
              </MenuContext.Consumer>
            </div>
          );
        });
      }}
    </Query>
  );
}
