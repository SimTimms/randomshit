import React from 'react';
import { useStyles } from './styles';
import { Query } from '@apollo/client/react/components';
import { LATEST_MINIS_WIDGET } from './data';

import { Row, MenuButtonStandard } from '../../components';
import clsx from 'clsx';
import LikeButton from './LikeButton';
import { MenuContext } from '../../context';

export default function LatestMinis({ ...props }) {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const { dashboard } = props;
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.dashboard]: dashboard,
      })}
    >
      <Row wrap="wrap">
        <Query
          query={LATEST_MINIS_WIDGET}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setCreativeArray([...data.savedGameMany]);
          }}
        >
          {() => {
            return creativeArray.map((creative, index) => {
              return (
                <div className={classes.miniWrapper}>
                  <div
                    className={classes.bgWrapper}
                    style={{ backgroundImage: `url(${creative.url})` }}
                  ></div>
                  <MenuContext.Consumer>
                    {(menu) => (
                      <MenuButtonStandard
                        title="View in 3D"
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
                    )}
                  </MenuContext.Consumer>
                  <LikeButton
                    url={creative.url}
                    likes={creative.likes.length}
                  />
                </div>
              );
            });
          }}
        </Query>
      </Row>
    </div>
  );
}
