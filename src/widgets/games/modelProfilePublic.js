import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './profileCard/components';
import { Column } from '../../components';
import { MenuContext } from '../../context';

export default function ModelProfilePublic({ game, setModelOne, history }) {
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
              setModelOne(game);
            }}
          >
            <Column j="flex-start">
              <Column>
                <BgImg
                  previewImage={game.featureImage}
                  history={history}
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
