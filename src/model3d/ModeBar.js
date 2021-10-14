import React from 'react';
import { Icon } from '@material-ui/core';
import { Row, Column } from './components';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Mutation } from 'react-apollo';
import { SAVE_GAME_IMAGE } from './data';
import uploaderScreenshot from '../components/uploaderScreenshot';
import { toaster } from '../utils/toaster';

export default function ModeBar({ paintMode, setPaintMode, canvas }) {
  const classes = useStyles();
  const [photo, setPhoto] = React.useState(false);

  function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
  return (
    <Column>
      <Mutation
        mutation={SAVE_GAME_IMAGE}
        onCompleted={() => {
          toaster('Photo Saved');
          setPhoto(false);
        }}
      >
        {(mutation) => {
          return (
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Row j="space-between">
                <Row j="flex-start">
                  <Icon
                    className={clsx({
                      [classes.circleIcon]: true,
                      [classes.circleIconYellow]: true,
                      [classes.circleIconYellowOn]: paintMode === 1,
                    })}
                    onClick={() => setPaintMode(1)}
                  >
                    format_paint
                  </Icon>
                  <Icon
                    className={clsx({
                      [classes.circleIcon]: true,
                      [classes.circleIconBlue]: true,
                      [classes.circleIconBlueOn]: paintMode === 0,
                    })}
                    onClick={() => setPaintMode(0)}
                  >
                    3d_rotation
                  </Icon>
                  <Icon
                    className={clsx({
                      [classes.circleIcon]: true,
                      [classes.circleIconGreen]: true,
                      [classes.circleIconGreenOn]: paintMode === 2,
                    })}
                    onClick={() => setPaintMode(2)}
                  >
                    lightbulb
                  </Icon>
                </Row>

                <Icon
                  className={clsx({
                    [classes.circleIcon]: true,
                    [classes.circleIconGrey]: true,
                    [classes.circleIconGreyOn]: photo,
                  })}
                  onClick={() => {
                    uploaderScreenshot(
                      dataURItoBlob(canvas.current.toDataURL()),
                      mutation
                    );
                    setPhoto(true);
                  }}
                >
                  camera
                </Icon>
              </Row>
            </div>
          );
        }}
      </Mutation>
    </Column>
  );
}
