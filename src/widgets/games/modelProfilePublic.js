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
              game._id !== '61dd7ed6fb8af500160127fa' &&
                game._id !== '61edb0c9506ef60016b44faa' &&
                setModelOne(game);
            }}
          >
            <Column j="flex-start">
              <Column>
                <BgImg
                  previewImage={game.featureImage}
                  locked={
                    game._id === '61dd7ed6fb8af500160127fa' ||
                    game._id === '61edb0c9506ef60016b44faa'
                  }
                  history={history}
                />
              </Column>
            </Column>
          </Column>
        )}
      </MenuContext.Consumer>
    </div>
  );
}
