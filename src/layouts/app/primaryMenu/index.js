import React from 'react';
import Button from './button';
import { useStyles } from './styles';
import mp3d from '../../../assets/branding/mp3d.png';
import {
  HistoryContext,
  CountContext,
  MenuContext,
  ProfileContext,
} from '../../../context';
import clsx from 'clsx';
import useMediaQuery from '@mui/material/useMediaQuery';
import { randomKey } from '../../../utils';

export default function PrimaryMenu({ mainMenu, publicPage }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:600px)');

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <CountContext.Consumer>
          {(counts) => (
            <ProfileContext.Consumer>
              {(profile) =>
                profile && (
                  <MenuContext.Consumer>
                    {(menuContext) => {
                      return (
                        <div
                          className={clsx({
                            [classes.column]: true,
                            [classes.row]: mobile,
                          })}
                        >
                          <div className={classes.deviceWrapper}>
                            <img
                              src={mp3d}
                              className={classes.device}
                              alt="MiniPainter3d Device"
                            />
                          </div>
                          {mainMenu(history, counts, menuContext, profile).map(
                            (menuItem) => {
                              return (
                                <Button
                                  key={randomKey()}
                                  menuItem={menuItem}
                                  isActive={
                                    publicPage
                                      ? menuContext.publicPage ===
                                        menuItem.machineName
                                      : menuContext.primaryPage ===
                                        menuItem.machineName
                                  }
                                />
                              );
                            }
                          )}
                        </div>
                      );
                    }}
                  </MenuContext.Consumer>
                )
              }
            </ProfileContext.Consumer>
          )}
        </CountContext.Consumer>
      )}
    </HistoryContext.Consumer>
  );
}
