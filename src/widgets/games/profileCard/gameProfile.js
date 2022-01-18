import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import {
  Row,
  Column,
  MenuButtonStandard,
  DividerMini,
  DividerWithBorder,
  HrefLink,
} from '../../../components';
import OnlineStores from './onlineStore';
import { MenuContext } from '../../../context';

export default function GameProfile({ game }) {
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <MenuContext.Consumer>
        {(menu) => (
          <Column
            j="space-between"
            h="100%"
            onClickEvent={() => {
              menu.updateMenuContext({
                ...menu,
                homePage: {
                  ...menu.homePage,
                  secondaryPage: 'game_profile',
                  gameId: game._id,
                },
              });
            }}
          >
            <Column j="flex-start">
              <Column>
                <BgImg previewImage={game.featureImage} />
              </Column>
            </Column>
          </Column>
        )}
      </MenuContext.Consumer>
    </div>
  );
}
