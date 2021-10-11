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
          <Column j="space-between" h="100%">
            <Column j="flex-start">
              <Column bg="#222">
                <Typography className={classes.gameName} variant="h4">
                  {game.name}
                </Typography>
                <Typography style={{ fontSize: '0.8rem' }}>
                  {game._id}
                </Typography>
                <BgImg previewImage={game.featureImage} />
              </Column>
              <Row j="center" w="100%" pl={5} pr={5} pt={5} pb={5} bg="#222">
                <HrefLink
                  title={`Posted By ${game.user.name}`}
                  url={`/user-profile/${game.user._id}`}
                ></HrefLink>
              </Row>
            </Column>

            {game.summary && (
              <Typography align="center" className={classes.summary}>
                {game.summary}
              </Typography>
            )}

            <MenuButtonStandard
              title="Open"
              icon="play_arrow"
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
            />
          </Column>
        )}
      </MenuContext.Consumer>
    </div>
  );
}
