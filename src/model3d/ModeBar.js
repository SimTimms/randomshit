import React from 'react';
import { Icon } from '@mui/material';
import { Row, Column } from './components';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Mutation } from '@apollo/client/react/components';
import { SAVE_GAME_IMAGE } from './data';
import uploaderScreenshot from '../components/uploaderScreenshot';
import { toaster } from '../utils/toaster';
import mp3dBack from '../assets/mp3dback.jpg';

export default function ModeBar({ paintMode, setPaintMode, canvas, modelId }) {
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
                background: '#fff ',
              }}
            >
              <Row j="space-between">
                <Row j="flex-start">
                  <Icon
                    className={clsx({
                      [classes.circleIcon]: true,
                      [classes.circleIconGrey]: true,
                      [classes.circleIconGreenOn]: paintMode === 0,
                    })}
                    onClick={() => setPaintMode(0)}
                  >
                    format_paint
                  </Icon>

                  <Icon
                    className={clsx({
                      [classes.circleIcon]: true,
                      [classes.circleIconGrey]: true,
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
                    canvas.current.style.backgroundImage = `url(${mp3dBack})`;
                    uploaderScreenshot(
                      dataURItoBlob(canvas.current.toDataURL()),
                      mutation,
                      modelId
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
