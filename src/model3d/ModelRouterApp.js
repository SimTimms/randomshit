import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Column } from './components';
import 'rc-slider/assets/index.css';
import PaintRackApp from './PaintRackApp';
import Lighting from './lighting';
import { ColorContext } from '../context';
import ModelLoader from './modelLoader';
import RecentColors from './recentColors';
import { Typography } from '@material-ui/core';

function ModelRouterApp({ gltf, js, gameId, box, back, posOne, posTwo }) {
  const modelColorsRef = useRef({});
  const [panels, setPanels] = React.useState({
    lighting: false,
    palette: false,
  });
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

        {panels.lighting && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              boxSizing: 'border-box',
              left: 0,
              width: '100vw',
              height: 'calc(100% - 80px)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
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
        {panels.lighting && (
          <div
            style={{
              height: 88,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              background: '#111',
              width: '100%',
            }}
            onClick={() => setPanels({ lighting: false, palette: false })}
          >
            <Typography style={{ color: '#fff' }}>Close</Typography>
          </div>
        )}

        {!panels.lighting && (
          <Column bg="#111" h="88px">
            <RecentColors
              activeColor={activeColor}
              setColorFunction={setColorFunction}
              setHoverColor={null}
              recentColors={recentColors}
              setRecentColors={setRecentColors}
            />
            <PaintRackApp
              setColorFunction={setColorFunction}
              activeColor={activeColor}
              colorGroup={colorGroup}
              setColorGroup={setColorGroup}
              recentColors={recentColors}
              setRecentColors={setRecentColors}
            />
          </Column>
        )}
      </Column>
    </ColorContext.Provider>
  );
}

export default withRouter(ModelRouterApp);
