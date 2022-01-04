import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import themeDesigner from './theme';
import ThreeJS from './threeJS';
import { Row, Column, DividerMini } from './components';
import 'rc-slider/assets/index.css';
import PaintRack from './PaintRack';
import Lighting from './lighting';
import Tools from './Tools';
import Decals from './Decals';
import Parts from './Parts';
import PaintPot from './PaintPot';
import { ColorContext } from '../context';
import ModelLoader from './modelLoader';
import ModeBar from './ModeBar';

function ModelRouter({ gltf, js, parts, gameId }) {
  const theme = themeDesigner();
  //needs to re-render model
  const modelColorsRef = useRef({});
  const [lightOne, setLightOne] = React.useState(10);
  const [attachedPart, setAttachedPart] = React.useState([]);
  const [lightTwo, setLightTwo] = React.useState(70);
  const [lightThree, setLightThree] = React.useState(5);
  const [lightFour, setLightFour] = React.useState(5);
  const [lightFive, setLightFive] = React.useState(5);
  const [lightSix, setLightSix] = React.useState(20);
  const [lightSeven, setLightSeven] = React.useState(20);
  const [paintMode, setPaintMode] = React.useState(0);
  const [color, setColor] = React.useState(null);
  const [modelColors, setModelColors] = React.useState(null);

  const [activeColor, setActiveColor] = React.useState({
    color: '#aaa',
    name: 'Plastic Grey',
  });
  const colorMap = {};
  function setColorFunction(activeColorIn) {
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

    //JSON.stringify(savedParts) !== JSON.stringify(attachedPart) &&
    // setAttachedPart(savedParts);
  }, [colorMap, color, modelColorsRef, js]);
  return (
    <ColorContext.Provider
      value={{
        activeColor: { color: activeColor.color, name: activeColor.name },
      }}
    >
      <Column>
        <Row h="100%" w="100%" j="flex-start" a="flex-start">
          <Column
            a="flex-start"
            j="flex-start"
            w={180}
            h={`calc(100vh - 68px)`}
          >
            {(paintMode === 1 || paintMode == 0) && (
              <PaintRack
                setColorFunction={setColorFunction}
                activeColor={activeColor}
              />
            )}
            {paintMode === 2 && (
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
            )}
          </Column>

          <Column bg="#cecbbf">
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
            />
            {/*    <ThreeJS
              color={color}
              lightOne={lightOne / 100}
              lightTwo={lightTwo / 100}
              lightThree={lightThree / 100}
              lightFour={lightFour / 100}
              lightFive={lightFive / 100}
              intensity={(lightOne + lightTwo) / 200}
              activeColor={activeColor}
              paintMode={paintMode}
              setPaintMode={setPaintMode}
              modelColorsRef={modelColorsRef}
              modelColors={modelColors}
              decalSet={decals}
              attachedPart={attachedPart}
              gltf={gltf}
              js={js}
              parts={parts}
              gameId={gameId}
            />
        */}
            <Typography
              align="center"
              style={{
                marginLeft: 10,
                padding: 4,
                fontFamily: 'roboto',
                fontSize: 10,
                color: '#aaa',
              }}
            >
              Model by Kurilovich Aleksey
              https://creativecommons.org/licenses/by/4.0/ Profile:
              https://sketchfab.com/brcasius Model: https://skfb.ly/6B6Nz
            </Typography>
          </Column>
        </Row>
      </Column>
    </ColorContext.Provider>
  );
}

export default withRouter(ModelRouter);
