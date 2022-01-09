import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Column } from './components';
import 'rc-slider/assets/index.css';
import PaintRackApp from './PaintRackApp';
import Lighting from './lighting';
import Details from './details';
import { ColorContext } from '../context';
import ModelLoader from './modelLoader';
import RecentColors from './recentColors';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

function ModelRouterApp({ gltf, js, gameId, box, back, posOne, posTwo, game }) {
  const modelColorsRef = useRef({});
  const [panels, setPanels] = React.useState(null);
  const [lightOne, setLightOne] = React.useState(30);
  const [attachedPart, setAttachedPart] = React.useState([]);
  const [lightTwo, setLightTwo] = React.useState(30);
  const [lightThree, setLightThree] = React.useState(0);
  const [lightFour, setLightFour] = React.useState(30);
  const [lightFive, setLightFive] = React.useState(0);
  const [lightSix, setLightSix] = React.useState(0);
  const [lightSeven, setLightSeven] = React.useState(0);
  const [paintMode, setPaintMode] = React.useState(0);
  const [color, setColor] = React.useState(null);
  const [colorGroup, setColorGroup] = React.useState(null);
  const [recentColors, setRecentColors] = React.useState([]);
  const classes = useStyles();

  const [activeColor, setActiveColor] = React.useState({
    color: '#aaa',
    name: 'Plastic Grey',
  });
  const colorMap = {};
  function setColorFunction(activeColorIn) {
    setColorGroup(null);
    setActiveColor(activeColorIn);
    setPaintMode(1);
  }

  useEffect(() => {
    !color && setColor(colorMap);

    let savedParts = localStorage.getItem('modelPartsSave');
    if (savedParts !== null && savedParts !== 'null') {
      savedParts = JSON.parse(savedParts);
      if (attachedPart.length === 0) {
        setAttachedPart(savedParts);
      }
    }
  }, [colorMap, color, modelColorsRef, js]);
  return (
    <ColorContext.Provider
      value={{
        activeColor: { color: activeColor.color, name: activeColor.name },
      }}
    >
      <Column h="100%" bg="#222">
        {(panels === 'lighting' || panels === 'details') && (
          <div
            style={{
              minHeight: 46,
              marginBottom: -46,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              background: '#111',
              width: '100%',
              zIndex: 11,
            }}
            onClick={() => setPanels(null)}
          >
            <Typography style={{ color: '#fff' }}>Close</Typography>
          </div>
        )}

        <Row h="100%" w="100%" j="flex-start" a="flex-start">
          <ModelLoader
            activeColor={activeColor}
            sprayMode={false}
            gltfIn={gltf}
            gameId={gameId}
            paintMode={paintMode}
            setPaintMode={setPaintMode}
            lightOne={lightOne}
            lightTwo={lightTwo}
            lightThree={lightThree}
            lightFour={lightFour}
            lightFive={lightFive}
            lightSix={lightSix}
            lightSeven={lightSeven}
            box={box}
            setPanels={setPanels}
            panels={panels}
            back={back}
          />
        </Row>
        {panels === 'details' && (
          <div className={classes.panelWrapper}>
            <Details game={game} />
          </div>
        )}
        {panels === 'lighting' && (
          <div className={classes.panelWrapper}>
            <Lighting
              setLightOne={setLightOne}
              lightOne={lightOne}
              setLightTwo={setLightTwo}
              lightTwo={lightTwo}
              setLightThree={setLightThree}
              lightThree={lightThree}
              setLightFour={setLightFour}
              lightFour={lightFour}
              setLightFive={setLightFive}
              lightFive={lightFive}
              setLightSix={setLightSix}
              lightSix={lightSix}
              setLightSeven={setLightSeven}
              lightSeven={lightSeven}
            />
          </div>
        )}

        <Column bg="#111" h="88px">
          {!panels && (
            <RecentColors
              activeColor={activeColor}
              setColorFunction={setColorFunction}
              setHoverColor={null}
              recentColors={recentColors}
              setRecentColors={setRecentColors}
            />
          )}
          {!panels && (
            <PaintRackApp
              setColorFunction={setColorFunction}
              activeColor={activeColor}
              colorGroup={colorGroup}
              setColorGroup={setColorGroup}
              recentColors={recentColors}
              setRecentColors={setRecentColors}
            />
          )}
        </Column>
      </Column>
    </ColorContext.Provider>
  );
}

export default withRouter(ModelRouterApp);
