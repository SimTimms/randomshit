import React from 'react';
import { Typography } from '@mui/material';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  Column,
  Row,
  CardComponent,
} from '../../../components';
import { MenuContext } from '../../../context';
import { PAGES } from '../../../const';

export default function GameComponent({ game }) {
  const classes = useStyles();
  const pending = game.name !== '' && game.summary && game.featuredImage;

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <CardComponent styleOverride={{ maxWidth: 400 }}>
          <div style={{ width: '100%', cursor: 'pointer' }}>
            <Column>
              <Row j="space-between" a="center">
                <Row a="center" j="flex-start">
                  <div
                    style={{
                      backgroundImage: `url(${game.featuredImage})`,
                    }}
                    className={classes.profileThumb}
                  ></div>
                  <Column a="flex-start">
                    <Typography>{game.name}</Typography>
                    <Typography style={{ fontSize: '0.7rem' }}>
                      {game._id}
                    </Typography>
                    <Typography className={classes.dull}>
                      {pending ? 'Live' : 'Draft'}
                    </Typography>
                  </Column>
                </Row>
                <MenuButtonStandard
                  icon="edit"
                  onClickEvent={() =>
                    menu.updateMenuContext({
                      ...menu,
                      homePage: {
                        ...menu.homePage,
                        gameId: game._id,
                        secondaryPage: PAGES.createModel,
                      },
                    })
                  }
                  disabled={false}
                />
              </Row>
            </Column>
          </div>
        </CardComponent>
      )}
    </MenuContext.Consumer>
  );
}
