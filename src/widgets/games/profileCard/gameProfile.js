import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import { Column } from '../../../components';
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
                <BgImg
                  previewImage={game.featureImage}
                  approved={game.approved}
                />
              </Column>
            </Column>
          </Column>
        )}
      </MenuContext.Consumer>
    </div>
  );
}
