import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Column } from './components';
import 'rc-slider/assets/index.css';
import PaintRackApp from './PaintRackApp';
import { ColorContext } from '../context';
import ModelLoader from './modelLoader';
import RecentColors from './recentColors';
import { useStyles } from './styles';

function ModelRouterApp({
  gltf,
  js,
  gameId,
  box,
  back,
  game,
  login,
  history,
  profilePriority,
  modelArtist,
}) {
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
  const [markings, setMarkings] = React.useState(null);
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
        <Row h="100%" w="100%" j="flex-start" a="flex-start">
          <ModelLoader
            activeColor={activeColor}
            sprayMode={false}
            gltfIn={gltf}
            gameId={gameId}
            modelName={game}
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
            login={login}
            history={history}
            markings={markings}
            profilePriority={profilePriority}
            modelArtist={modelArtist ? modelArtist : null}
          />
        </Row>

        <Column bg="#fff" h="88px">
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
            profilePriority={profilePriority}
          />
        </Column>
      </Column>
    </ColorContext.Provider>
  );
}

export default withRouter(ModelRouterApp);
